// netlify/functions/create-payment.js

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL    = "wreford19@gmail.com";
const SMS_EMAIL      = "27832309883@mtn.co.za";

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
    // No token needed — Netlify injects credentials automatically at runtime
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

    // ── 3. Send email notification via Resend ────────────────────────────────
    if (order && RESEND_API_KEY) {
      try {
        const items = order.items.map(x =>
          `${x.qty}x ${x.name} @ R${x.price} = R${(x.price * x.qty).toFixed(2)}`
        ).join("<br>");

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: "Trueleaf Orders <onboarding@resend.dev>",
            to:   [ADMIN_EMAIL],
            subject: `🌱 New Trueleaf Order - ${order.id}`,
            html: `
              <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#f5edd8;padding:24px;border-radius:12px;">
                <h2 style="color:#2d4a1e;margin:0 0 16px;">🌱 New Trueleaf Order</h2>
                <table style="width:100%;font-size:14px;color:#2a2015;">
                  <tr><td><strong>Order ID:</strong></td><td>${order.id}</td></tr>
                  <tr><td><strong>Date:</strong></td><td>${order.date}</td></tr>
                  <tr><td><strong>Customer:</strong></td><td>${order.customer.name}</td></tr>
                  <tr><td><strong>Phone:</strong></td><td>${order.customer.phone}</td></tr>
                  <tr><td><strong>Email:</strong></td><td>${order.customer.email}</td></tr>
                  <tr><td><strong>Address:</strong></td><td>${order.customer.street}, ${order.customer.suburb}, ${order.customer.city}, ${order.customer.province} ${order.customer.postal}</td></tr>
                </table>
                <hr style="border:1px solid #ddd5b8;margin:16px 0;">
                <h3 style="color:#2d4a1e;margin:0 0 8px;">Order Items</h3>
                <p style="font-size:14px;color:#2a2015;">${items}</p>
                <hr style="border:1px solid #ddd5b8;margin:16px 0;">
                <table style="width:100%;font-size:14px;">
                  <tr><td>Seeds subtotal</td><td align="right">R${Number(order.seedsTotal).toFixed(2)}</td></tr>
                  <tr><td>Pudo delivery</td><td align="right">R50.00</td></tr>
                  <tr><td>Packaging</td><td align="right">R15.00</td></tr>
                  <tr style="font-weight:bold;font-size:16px;color:#2d4a1e;">
                    <td>TOTAL PAID</td><td align="right">R${Number(order.total).toFixed(2)}</td>
                  </tr>
                </table>
              </div>
            `
          })
        });
        console.log("Resend email status: 200");
      } catch (emailErr) {
        console.error("Resend email failed:", emailErr.message);
      }
    }

    // ── 4. SMS via email-to-SMS (MTN) ────────────────────────────────────────
    if (order && RESEND_API_KEY) {
      try {
        const items = order.items.map(i => `${i.qty}x ${i.name}`).join(", ");
        const smsBody = `NEW ORDER R${Number(order.total).toFixed(2)} | ${order.customer.name} | ${order.customer.phone} | ${items}`;
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: "Trueleaf <onboarding@resend.dev>",
            to:   [SMS_EMAIL],
            subject: "New Order",
            text: smsBody
          })
        });
        console.log("SMS notification sent to", SMS_EMAIL);
      } catch (smsErr) {
        console.error("SMS failed:", smsErr.message);
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
