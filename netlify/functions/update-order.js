// netlify/functions/update-order.js

const ADMIN_PW = "Wreford99#";
const SITE_ID  = "6270f33f-239c-496d-ba56-6a2e2e8767da";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { password, orderId, updates } = JSON.parse(event.body);

    if (password !== ADMIN_PW) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }

    const { getStore } = await import("@netlify/blobs");
    const store = getStore({
      name:   "orders",
      siteID: SITE_ID,
      token:  process.env.NETLIFY_BLOBS_TOKEN,
    });

    const existing = await store.get(orderId, { type: "json" });
    if (!existing) {
      return { statusCode: 404, body: JSON.stringify({ error: "Order not found" }) };
    }

    const updated = { ...existing, ...updates };
    await store.setJSON(orderId, updated);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, order: updated })
    };

  } catch (err) {
    console.error("update-order error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
