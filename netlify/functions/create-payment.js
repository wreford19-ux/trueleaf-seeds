// netlify/functions/create-payment.js
// REPLACE your existing file with this complete version

const CALLMEBOT_PHONE  = "27832309883";
const EMAILJS_SERVICE  = "service_e6cff14";
const EMAILJS_TEMPLATE = "template_rhia9oj";
const EMAILJS_KEY      = "acXmr7MDPnpLcE_xJ";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);
    const { amount, currency = "ZAR", order } = body;

    // ── 1. Create YOCO checkout (your existing logic, unchanged) ────────────
    const response = await fetch("https://payments.yoco.com/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.YOCO_SECRET_KEY}`
      },
      body: JSON.stringify({
        amount,
        currency,
        successUrl: "https://trueleaf-seeds.netlify.app?payment=success",
        cancelUrl:  "https://trueleaf-seeds.netlify.app?payment=cancelled",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.message || "Payment creation failed" })
      };
    }

    // ── 2. Save order to Netlify Blobs ───────────────────────────────────────
    // Stores every order in a real server-side database so Admin panel works
    // from any device, and orders are never lost.
    if (order) {
      try {
        const { getStore } = await import("@netlify/blobs");
        const store = getStore("orders");
        await store.setJSON(order.id, {
          ...order,
          status: "Pending",
          yocoCheckoutId: data.id || ""
        });
        console.log("Order saved to Blobs:", order.id);
      } catch (blobErr) {
        // Blobs token not yet set up — won't block payment
        console.error("Blob save failed (check NETLIFY_BLOBS_TOKEN env var):", blobErr.message);
      }
    }

    // ── 3. WhatsApp alert to you via CallMeBot ───────────────────────────────
    // You get an instant WhatsApp the moment someone pays
    if (order && process.env.CALLMEBOT_API_KEY) {
      try {
        const items = order.items.map(i => `${i.qty}x ${i.name}`).join(", ");
        const msg = [
          "🌱 NEW TRUELEAF ORDER",
          `ID: ${order.id}`,
          `Customer: ${order.customer.name}`,
          `Phone: ${order.customer.phone}`,
          `Items: ${items}`,
          `Total: R${Number(order.total).toFixed(2)}`,
          `${order.customer.suburb}, ${order.customer.city}`
        ].join("\n");

        const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encodeURIComponent(msg)}&apikey=${process.env.CALLMEBOT_API_KEY}`;
        const waRes = await fetch(waUrl);
        console.log("WhatsApp notification status:", waRes.status);
      } catch (waErr) {
        console.error("WhatsApp notification failed:", waErr.message);
      }
    } else if (order && !process.env.CALLMEBOT_API_KEY) {
      console.warn("CALLMEBOT_API_KEY not set — WhatsApp notifications disabled");
    }

    // ── 4. Email notification server-side (reliable, not browser-dependent) ─
    // This fires from the server so it can't be cut off by a page redirect
    if (order) {
      try {
        const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id:  EMAILJS_SERVICE,
            template_id: EMAILJS_TEMPLATE,
            user_id:     EMAILJS_KEY,
            template_params: {
              order_id:       order.id,
              date:           order.date,
              customer_name:  order.customer.name,
              customer_phone: order.customer.phone,
              customer_email: order.customer.email,
              address:        `${order.customer.street}, ${order.customer.suburb}, ${order.customer.city}, ${order.customer.province} ${order.customer.postal}`,
              items:          order.items.map(x => `${x.qty}x ${x.name} @ R${x.price} = R${(x.price * x.qty).toFixed(2)}`).join(", "),
              seeds_total:    Number(order.seedsTotal).toFixed(2),
              order_total:    Number(order.total).toFixed(2),
            }
          })
        });
        console.log("EmailJS status:", emailRes.status);
      } catch (emailErr) {
        console.error("EmailJS failed:", emailErr.message);
      }
    }

    // ── 5. Return redirectUrl to browser (same as before) ───────────────────
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ redirectUrl: data.redirectUrl, id: data.id })
    };

  } catch (err) {
    console.error("create-payment error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
