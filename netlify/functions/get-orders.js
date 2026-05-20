// netlify/functions/get-orders.js
// NEW FILE — add to your netlify/functions/ folder
// Admin panel calls this to load all orders from the server database

const ADMIN_PW = process.env.ADMIN_PASSWORD || "Wreford99#";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { password } = JSON.parse(event.body);

    if (password !== ADMIN_PW) {
      return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
    }

    const { getStore } = await import("@netlify/blobs");
    const store = getStore("orders");
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
