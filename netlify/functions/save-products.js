// netlify/functions/save-products.js
// Admin-only write of the whole catalogue to Netlify Blobs.
// Password is checked server-side (same model as get-orders / update-order),
// so the write secret never lives in the browser bundle.

const ADMIN_PW = "Wreford99#";
const SITE_ID  = "6270f33f-239c-496d-ba56-6a2e2e8767da";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { password, products } = JSON.parse(event.body);

    if (password !== ADMIN_PW) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }
    if (!Array.isArray(products)) {
      return { statusCode: 400, body: JSON.stringify({ error: "products must be an array" }) };
    }

    const { getStore } = await import("@netlify/blobs");
    const store = getStore({
      name:   "products",
      siteID: SITE_ID,
      token:  process.env.NETLIFY_BLOBS_TOKEN,
    });

    await store.setJSON("catalogue-v2", products);

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: true, count: products.length }),
    };
  } catch (err) {
    console.error("save-products error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
