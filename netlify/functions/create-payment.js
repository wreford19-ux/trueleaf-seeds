// netlify/functions/create-payment.js
// REPLACE your existing file with this complete version

const EMAILJS_SERVICE  = "service_e6cff14";
const EMAILJS_TEMPLATE = "template_rhia9oj";
const EMAILJS_KEY      = "acXmr7MDPnpLcE_xJ";
const SMS_EMAIL        = "27832309883@mtn.co.za"; // SMS to your MTN number

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);
    const { amount, currency = "ZAR", order } = body;

    // ── 1. Create YOCO checkout ──────────────────────────────────────────────
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
        console.error("Blob save failed:", blobErr.message);
      }
    }

    // ── 3. Email notification to wreford19@gmail.com ─────────────────────────
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

    // ── 4. SMS notification via email-to-SMS (MTN) ───────────────────────────
    // Sends a short SMS to your phone the moment an order comes in
    if (order) {
      try {
        const items = order.items.map(i => `${i.qty}x ${i.name}`).join(", ");
        const smsText = `NEW ORDER R${Number(order.total).toFixed(2)} - ${order.customer.name} - ${items}`;
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
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
              customer_email: SMS_EMAIL,
              address:        `${order.customer.suburb}, ${order.customer.city}`,
              items:          smsText,
              seeds_total:    Number(order.seedsTotal).toFixed(2),
              order_total:    Number(order.total).toFixed(2),
            }
          })
        });
        console.log("SMS notification sent to", SMS_EMAIL);
      } catch (smsErr) {
        console.error("SMS notification failed:", smsErr.message);
      }
    }

    // ── 5. Return redirectUrl to browser ────────────────────────────────────
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
