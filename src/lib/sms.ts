/**
 * SMS helper — supports Twilio (default) or Infobip (Croatian alternative).
 *
 * Setup:
 *  Twilio  → twilio.com  → free trial ($15 credit), then ~€0.05/SMS for HR
 *  Infobip → infobip.com → hrvatska firma, free trial 100 SMS-ova
 *
 * Add to .env.local:
 *   SMS_PROVIDER=twilio           (or "infobip")
 *   TWILIO_ACCOUNT_SID=ACxxxxxx
 *   TWILIO_AUTH_TOKEN=xxxxxx
 *   TWILIO_FROM_PHONE=+14155238886
 *   ADMIN_PHONE=+385994840416
 *
 *   (Infobip alternative)
 *   SMS_PROVIDER=infobip
 *   INFOBIP_API_KEY=xxxxxx
 *   INFOBIP_BASE_URL=xxxxx.api.infobip.com
 *   ADMIN_PHONE=+385994840416
 */

export async function sendSMS(body: string): Promise<void> {
  const to    = process.env.ADMIN_PHONE;
  const prov  = process.env.SMS_PROVIDER ?? "twilio";

  if (!to) {
    console.warn("[sms] ADMIN_PHONE not set — SMS not sent.");
    return;
  }

  if (prov === "infobip") {
    await sendViaInfobip(to, body);
  } else {
    await sendViaTwilio(to, body);
  }
}

// ─── Twilio ───────────────────────────────────────────────────────────────────

async function sendViaTwilio(to: string, body: string): Promise<void> {
  const sid   = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from  = process.env.TWILIO_FROM_PHONE;

  if (!sid || !token || !from) {
    console.warn("[sms/twilio] Missing TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN / TWILIO_FROM_PHONE");
    return;
  }

  const credentials = Buffer.from(`${sid}:${token}`).toString("base64");

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ From: from, To: to, Body: body }).toString(),
    },
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("[sms/twilio] Error:", err);
  } else {
    console.info("[sms/twilio] Sent to", to);
  }
}

// ─── Infobip (HR) ─────────────────────────────────────────────────────────────

async function sendViaInfobip(to: string, body: string): Promise<void> {
  const apiKey  = process.env.INFOBIP_API_KEY;
  const baseUrl = process.env.INFOBIP_BASE_URL;

  if (!apiKey || !baseUrl) {
    console.warn("[sms/infobip] Missing INFOBIP_API_KEY / INFOBIP_BASE_URL");
    return;
  }

  const res = await fetch(`https://${baseUrl}/sms/2/text/advanced`, {
    method: "POST",
    headers: {
      Authorization: `App ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [{ from: "ProClean", destinations: [{ to }], text: body }],
    }),
  });

  if (!res.ok) {
    console.error("[sms/infobip] Error:", await res.text());
  } else {
    console.info("[sms/infobip] Sent to", to);
  }
}
