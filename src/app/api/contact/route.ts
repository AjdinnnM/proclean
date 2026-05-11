import { type NextRequest, NextResponse } from "next/server";
import { sendWhatsApp } from "@/lib/whatsapp";

type ContactBody = {
  name: string;
  phone: string;
  service: string;
  message?: string;
  email?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody;

    // WhatsApp notification — only if CallMeBot is configured.
    if (process.env.CALLMEBOT_PHONE && process.env.CALLMEBOT_API_KEY) {
      const waMsg =
        `📬 *Novi upit — ProClean*\n` +
        `👤 ${body.name}\n` +
        `📞 ${body.phone}\n` +
        `🧹 ${body.service}` +
        (body.message ? `\n💬 ${body.message.slice(0, 100)}` : "");
      sendWhatsApp(waMsg).catch((e) => console.error("[contact] WhatsApp error:", e));
    }

    // Email via Resend — AWAITED so we know it actually sent.
    const apiKey = process.env.RESEND_API_KEY;
    let emailSent = false;
    if (apiKey) {
      const adminEmail = process.env.ADMIN_EMAIL ?? "proclean.hr@outlook.com";
      const fromEmail  = process.env.FROM_EMAIL  ?? "onboarding@resend.dev";
      const html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#0266f0;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:20px">📬 Nova poruka — proclean.hr</h1>
          </div>
          <div style="background:#f8faff;padding:32px;border:1px solid #e0efff;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Ime:</td><td style="font-weight:600">${body.name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Telefon:</td><td><a href="tel:${body.phone}" style="color:#0266f0">${body.phone}</a></td></tr>
              ${body.email ? `<tr><td style="padding:8px 0;color:#666">Email:</td><td>${body.email}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Usluga:</td><td>${body.service}</td></tr>
              ${body.message ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Poruka:</td><td>${body.message}</td></tr>` : ""}
            </table>
            <p style="margin-top:20px;font-size:12px;color:#999">Primljeno: ${new Date().toLocaleString("hr-HR")}</p>
          </div>
        </div>`;
      try {
        const ac = new AbortController();
        const timeout = setTimeout(() => ac.abort(), 8000);
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: `Pro Clean <${fromEmail}>`,
            to: [adminEmail],
            reply_to: body.email || undefined,
            subject: `📬 Nova poruka od ${body.name} — ${body.service}`,
            html,
          }),
          signal: ac.signal,
        });
        clearTimeout(timeout);
        if (resendRes.ok) {
          emailSent = true;
        } else {
          const errText = await resendRes.text();
          console.error("[contact] Resend error:", resendRes.status, errText);
        }
      } catch (e) {
        console.error("[contact] Email fetch failed:", e);
      }
    } else {
      console.warn("[contact] RESEND_API_KEY not set — email not sent.");
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
