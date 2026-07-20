// netlify/functions/delete-order.js
// Admin-only permanent removal of an order from Netlify Blobs.
// Password checked server-side, same model as get-orders / update-order.

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
    const { password, orderId } = JSON.parse(event.body);

    if (password !== ADMIN_PW) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }
    if (!orderId) {
      return { statusCode: 400, body: JSON.stringify({ error: "orderId required" }) };
    }

    const store = await openStore("orders");

    await store.delete(orderId);

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("delete-order error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
