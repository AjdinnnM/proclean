import { type NextRequest, NextResponse } from "next/server";
import { sendSMS } from "@/lib/sms";

type NotifyPayload = {
  type: "checkin" | "supply_request" | "job_done";
  workerName: string;
  workerColor: string;
  jobAddress: string;
  detail: string;   // e.g. supply name, or check-in time
  timestamp: string;
};

const TYPE_LABELS: Record<NotifyPayload["type"], string> = {
  checkin: "📍 Prijava na posao",
  supply_request: "🔴 Zahtjev za materijal",
  job_done: "✅ Posao završen",
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as NotifyPayload;

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL ?? "proclean.hr@outlook.com";
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey) {
      console.warn("[notify] RESEND_API_KEY not set — email not sent.");
      return NextResponse.json({ success: true, note: "no_api_key" });
    }

    const subject = `${TYPE_LABELS[body.type]}: ${body.workerName}`;

    const html = `
      <div style="font-family:sans-serif;max-width:500px;margin:0 auto">
        <div style="background:#082352;padding:20px 28px;border-radius:12px 12px 0 0;display:flex;align-items:center;gap:12px">
          <div style="background:${body.workerColor};border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0">
            ${body.workerName.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <p style="margin:0;color:white;font-weight:700;font-size:16px">${body.workerName}</p>
            <p style="margin:0;color:rgba(255,255,255,0.6);font-size:12px">${TYPE_LABELS[body.type]}</p>
          </div>
        </div>
        <div style="background:#f8faff;padding:24px 28px;border:1px solid #e0efff;border-top:none;border-radius:0 0 12px 12px">
          <p style="margin:0 0 8px;color:#333;font-size:15px;font-weight:600">📍 ${body.jobAddress}</p>
          <p style="margin:0 0 16px;color:#666;font-size:14px">${body.detail}</p>
          <p style="margin:0;color:#999;font-size:12px">⏱ ${body.timestamp}</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Pro Clean Portal <${fromEmail}>`,
        to: [adminEmail],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[notify] Resend error:", await res.text());
      return NextResponse.json({ error: "mail_failed" }, { status: 500 });
    }

    // SMS notification — short message, sent in parallel
    const SMS_ICONS: Record<NotifyPayload["type"], string> = {
      checkin: "Prijava",
      supply_request: "NEDOSTAJE",
      job_done: "GOTOVO",
    };
    const smsText =
      `ProClean ${SMS_ICONS[body.type]}: ${body.workerName} — ${body.jobAddress}. ${body.detail}`;
    sendSMS(smsText).catch((e) => console.error("[notify] SMS error:", e));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[notify] Error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
