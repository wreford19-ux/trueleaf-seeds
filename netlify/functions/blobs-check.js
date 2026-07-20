// netlify/functions/blobs-check.js
// Diagnostic only. Visit this function's URL in a browser to confirm that
// Netlify Blobs is reachable and see how many orders / products are stored.
// Returns counts only — no order or customer data.

const SITE_ID = "6270f33f-239c-496d-ba56-6a2e2e8767da";

async function openStore(name) {
  const { getStore } = await import("@netlify/blobs");
  try {
    return { store: getStore(name), mode: "automatic" };
  } catch (e) {
    return {
      store: getStore({ name, siteID: SITE_ID, token: process.env.NETLIFY_BLOBS_TOKEN }),
      mode: "explicit-credentials",
    };
  }
}

exports.handler = async () => {
  const result = { blobsWorking: false, mode: null, orders: null, catalogue: null, error: null };

  try {
    const { store: orders, mode } = await openStore("orders");
    result.mode = mode;
    const { blobs } = await orders.list();
    result.orders = blobs.length;

    const { store: products } = await openStore("products");
    const cat = await products.get("catalogue-v2", { type: "json" });
    result.catalogue = Array.isArray(cat) ? cat.length : 0;

    result.blobsWorking = true;
  } catch (err) {
    result.error = err.message;
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result, null, 2),
  };
};
