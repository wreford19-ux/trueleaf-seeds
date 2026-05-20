// netlify/functions/update-order.js
// NEW FILE — add to your netlify/functions/ folder
// Updates order status, pudoRef, notes from Admin panel

const ADMIN_PW = process.env.ADMIN_PASSWORD || "Wreford99#";

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
    const store = getStore("orders");

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
