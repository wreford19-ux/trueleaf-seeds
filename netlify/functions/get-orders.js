// netlify/functions/get-orders.js

const ADMIN_PW = "Wreford99#";
const SITE_ID  = "6270f33f-239c-496d-ba56-6a2e2e8767da";

// Connect to Netlify Blobs.
// Inside the Netlify runtime, getStore(name) configures itself — no token needed.
// We only fall back to explicit credentials if that automatic path is unavailable.
async function openStore(name) {
  const { getStore } = await import("@netlify/blobs");
  try {
    return getStore(name);
  } catch (e) {
    console.log("Blobs auto-config unavailable, using explicit credentials:", e.message);
    return getStore({ name, siteID: SITE_ID, token: process.env.NETLIFY_BLOBS_TOKEN });
  }
}


exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { password } = JSON.parse(event.body);

    if (password !== ADMIN_PW) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }

    const store = await openStore("orders");

    const { blobs } = await store.list();

    const orders = await Promise.all(
      blobs.map(async (b) => {
        try {
          return await store.get(b.key, { type: "json" });
        } catch {
          return null;
        }
      })
    );

    const sorted = orders
      .filter(Boolean)
      .sort((a, b) => (b.id || "").localeCompare(a.id || ""));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orders: sorted })
    };

  } catch (err) {
    console.error("get-orders error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message, orders: [] })
    };
  }
};
