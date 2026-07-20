// netlify/functions/get-products.js
// Public read of the shared catalogue from Netlify Blobs.
// No password: shoppers need to read the catalogue. Returns { products: [...] }
// or { products: null } when the store hasn't been seeded yet (client falls back to its built-in list).

const SITE_ID = "6270f33f-239c-496d-ba56-6a2e2e8767da";

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
  try {
    const store = await openStore("products");

    const data = await store.get("catalogue-v2", { type: "json" });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ products: Array.isArray(data) ? data : null }),
    };
  } catch (err) {
    console.error("get-products error:", err.message);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ products: null, error: err.message }),
    };
  }
};
