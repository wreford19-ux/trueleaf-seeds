// netlify/functions/sync-catalogue.js
//
// Pulls the live catalogue out of the distributor app's Firestore
// (project: trueleaf-distributors, document: catalog/products) and mirrors it
// into the shop's Netlify Blobs catalogue.
//
// The distributor list is the master: names, codes, categories and images all
// come from it. Retail pricing belongs to the shop, so prices you have already
// set are preserved; only genuinely new products get the R45 / R25 defaults.

const ADMIN_PW    = "Wreford99#";
const SITE_ID     = "6270f33f-239c-496d-ba56-6a2e2e8767da";
const FB_PROJECT  = "trueleaf-distributors";
const FB_API_KEY  = "AIzaSyDtSRcyUggDQl2ge_kbDXTPIACCHDfZiRU";

const DEFAULT_PRICE = 45;
const DEFAULT_COST  = 25;

async function openStore(name) {
  const { getStore } = await import("@netlify/blobs");
  try {
    return getStore(name);
  } catch (e) {
    return getStore({ name, siteID: SITE_ID, token: process.env.NETLIFY_BLOBS_TOKEN });
  }
}

// Firestore REST wraps every value in a type tag — unwrap to plain JS.
function unwrap(v) {
  if (v === undefined || v === null) return null;
  if ("stringValue"  in v) return v.stringValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue"  in v) return Number(v.doubleValue);
  if ("booleanValue" in v) return v.booleanValue;
  if ("nullValue"    in v) return null;
  if ("mapValue"     in v) {
    const out = {};
    const f = (v.mapValue && v.mapValue.fields) || {};
    for (const k of Object.keys(f)) out[k] = unwrap(f[k]);
    return out;
  }
  if ("arrayValue" in v) return ((v.arrayValue && v.arrayValue.values) || []).map(unwrap);
  return null;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { password } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PW) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }

    // ── 1. Read the distributor catalogue from Firestore ────────────────────
    const url = `https://firestore.googleapis.com/v1/projects/${FB_PROJECT}/databases/(default)/documents/catalog/products?key=${FB_API_KEY}`;
    const res = await fetch(url);

    if (!res.ok) {
      const detail = await res.text();
      if (res.status === 403 || res.status === 401) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            error: "Firestore denied read access to catalog/products. The distributor app's security rules need to allow public read on that one document.",
            status: res.status,
          }),
        };
      }
      return { statusCode: 200, body: JSON.stringify({ error: "Firestore error " + res.status, detail: detail.slice(0, 300) }) };
    }

    const doc = await res.json();
    const items = unwrap((doc.fields || {}).items) || [];
    if (!Array.isArray(items) || items.length === 0) {
      return { statusCode: 200, body: JSON.stringify({ error: "The distributor catalogue came back empty — nothing was changed." }) };
    }

    // ── 2. Read what the shop currently has ─────────────────────────────────
    const store = await openStore("products");
    let existing = [];
    try {
      const cur = await store.get("catalogue-v2", { type: "json" });
      if (Array.isArray(cur)) existing = cur;
    } catch (e) { /* nothing stored yet */ }

    const byCode = {};
    existing.forEach(p => { if (p.code) byCode[String(p.code).toUpperCase()] = p; });
    let nextId = existing.reduce((m, p) => Math.max(m, Number(p.id) || 0), 0) + 1;

    // ── 3. Merge: distributor wins on identity, shop keeps its pricing ──────
    let added = 0, updated = 0;
    const merged = items.map(it => {
      const code = String(it.code || "").toUpperCase();
      const prev = byCode[code];
      if (prev) {
        updated++;
        return {
          ...prev,
          code,
          name: it.name || prev.name,
          category: it.cat || prev.category,
          image: it.img || "",
        };
      }
      added++;
      return {
        id: nextId++,
        code,
        name: it.name || "",
        category: it.cat || "Vegetables",
        image: it.img || "",
        cost: DEFAULT_COST,
        price: DEFAULT_PRICE,
        stock: true,
        outOfStock: false,
      };
    });

    const distCodes = new Set(merged.map(p => p.code));
    const removed = existing.filter(p => !distCodes.has(String(p.code || "").toUpperCase()));

    // ── 4. Save ─────────────────────────────────────────────────────────────
    await store.setJSON("catalogue-v2", merged);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        total: merged.length,
        added,
        updated,
        removed: removed.length,
        removedNames: removed.slice(0, 20).map(p => p.name),
      }),
    };
  } catch (err) {
    console.error("sync-catalogue error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
