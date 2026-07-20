// netlify/functions/get-products.js
// Public read of the shared catalogue from Netlify Blobs.
// No password: shoppers need to read the catalogue. Returns { products: [...] }
// or { products: null } when the store hasn't been seeded yet (client falls back to its built-in list).

const SITE_ID = "6270f33f-239c-496d-ba56-6a2e2e8767da";

exports.handler = async (event) => {
  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore({
      name:   "products",
      siteID: SITE_ID,
      token:  process.env.NETLIFY_BLOBS_TOKEN,
    });

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
