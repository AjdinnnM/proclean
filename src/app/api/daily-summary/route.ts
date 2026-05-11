import { type NextRequest, NextResponse } from "next/server";
import { sendSMS } from "@/lib/sms";

// ── Types (mirror what the client sends) ────────────────────────────────────

type SummarySupplyRequest = {
  workerName: string;
  workerInitials: string;
  workerColor: string;
  supplyName: string;
  jobAddress: string;
  timestamp: string;
  handled: boolean;
};

type SummaryLocationNeed = {
  jobId: string;
  address: string;
  clientName: string;
  date: string;
  needs: string[];
  customNote?: string;
};

type SummaryCheckin = {
  workerId: string;
  address: string;
  time: string;
  lat?: number;
  lng?: number;
};

type DailySummaryPayload = {
  date: string; // YYYY-MM-DD
  supplyRequests: SummarySupplyRequest[];
  locationNeeds: SummaryLocationNeed[];
  checkins: SummaryCheckin[];
  jobsDone: number;
};

// ── HTML builder ─────────────────────────────────────────────────────────────

function buildHtml(data: DailySummaryPayload): string {
  const dateFormatted = new Date(data.date).toLocaleDateString("hr-HR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const pendingSupplies = data.supplyRequests.filter((r) => !r.handled);

  // Group pending supplies by worker
  const suppliesByWorker = pendingSupplies.reduce<Record<string, SummarySupplyRequest[]>>(
    (acc, req) => {
      acc[req.workerName] = acc[req.workerName] ?? [];
      acc[req.workerName].push(req);
      return acc;
    },
    {},
  );

  const suppliesHtml =
    Object.keys(suppliesByWorker).length === 0
      ? `<p style="color:#10b981;font-size:14px;margin:0">✅ Nema nedostajućih sredstava danas!</p>`
      : Object.entries(suppliesByWorker)
          .map(
            ([worker, items]) => `
            <div style="margin-bottom:12px">
              <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#111">${worker}</p>
              <ul style="margin:0;padding-left:18px">
                ${items
                  .map(
                    (item) =>
                      `<li style="font-size:13px;color:#555;margin-bottom:3px">
                    ❌ <strong>${item.supplyName}</strong>
                    <span style="color:#999;font-size:12px"> · ${item.jobAddress} · ${item.timestamp}</span>
                  </li>`,
                  )
                  .join("")}
              </ul>
            </div>`,
          )
          .join("");

  const locationNeedsHtml =
    data.locationNeeds.length === 0
      ? `<p style="color:#10b981;font-size:14px;margin:0">✅ Nema posebnih potreba zabilježenih danas.</p>`
      : data.locationNeeds
          .map(
            (loc) => `
          <div style="margin-bottom:16px;padding:12px 16px;background:#f8faff;border:1px solid #e0efff;border-radius:10px">
            <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#111">📍 ${loc.address}</p>
            <p style="margin:0 0 8px;font-size:12px;color:#888">${loc.clientName}</p>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:${loc.customNote ? "8px" : "0"}">
              ${loc.needs.map((n) => `<span style="font-size:12px;padding:3px 10px;background:#dbeafe;color:#1e40af;border-radius:20px;font-weight:600">${n}</span>`).join("")}
            </div>
            ${loc.customNote ? `<p style="margin:0;font-size:13px;color:#555;font-style:italic">"${loc.customNote}"</p>` : ""}
          </div>`,
          )
          .join("");

  const checkinsHtml =
    data.checkins.length === 0
      ? `<p style="color:#999;font-size:14px;margin:0">Nema prijava danas.</p>`
      : data.checkins
          .map(
            (c) => `
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:18px">📍</span>
            <div>
              <p style="margin:0;font-size:13px;font-weight:600;color:#111">${c.workerId}</p>
              <p style="margin:0;font-size:12px;color:#888">${c.address} · ${c.time}${c.lat ? ` · GPS: ${c.lat.toFixed(4)}, ${c.lng?.toFixed(4) ?? ""}` : ""}</p>
            </div>
          </div>`,
          )
          .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff">
      <!-- Header -->
      <div style="background:#082352;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="margin:0 0 4px;color:white;font-size:22px">📊 Dnevno izvješće</h1>
        <p style="margin:0;color:rgba(255,255,255,0.6);font-size:14px;text-transform:capitalize">${dateFormatted}</p>
      </div>

      <div style="padding:28px 32px;border:1px solid #e0efff;border-top:none;border-radius:0 0 12px 12px">
        <!-- Stats row -->
        <div style="display:flex;gap:12px;margin-bottom:28px">
          <div style="flex:1;padding:14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;text-align:center">
            <p style="margin:0;font-size:28px;font-weight:700;color:#15803d">${data.jobsDone}</p>
            <p style="margin:0;font-size:12px;color:#166534">Posao/va završen</p>
          </div>
          <div style="flex:1;padding:14px;background:#fef2f2;border:1px solid #fecaca;border-radius:10px;text-align:center">
            <p style="margin:0;font-size:28px;font-weight:700;color:#dc2626">${pendingSupplies.length}</p>
            <p style="margin:0;font-size:12px;color:#991b1b">Nedostajuća sredstva</p>
          </div>
          <div style="flex:1;padding:14px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;text-align:center">
            <p style="margin:0;font-size:28px;font-weight:700;color:#1d4ed8">${data.locationNeeds.length}</p>
            <p style="margin:0;font-size:12px;color:#1e3a8a">Lokacija s potrebama</p>
          </div>
        </div>

        <!-- Missing supplies -->
        <div style="margin-bottom:28px">
          <h2 style="margin:0 0 12px;font-size:16px;color:#111;border-bottom:2px solid #f1f5f9;padding-bottom:8px">
            🧹 Nedostajuća sredstva po radniku
          </h2>
          ${suppliesHtml}
        </div>

        <!-- Location needs -->
        <div style="margin-bottom:28px">
          <h2 style="margin:0 0 12px;font-size:16px;color:#111;border-bottom:2px solid #f1f5f9;padding-bottom:8px">
            📋 Posebne potrebe po lokaciji
          </h2>
          ${locationNeedsHtml}
        </div>

        <!-- Check-ins -->
        <div style="margin-bottom:16px">
          <h2 style="margin:0 0 12px;font-size:16px;color:#111;border-bottom:2px solid #f1f5f9;padding-bottom:8px">
            ✅ Prijave na posao
          </h2>
          ${checkinsHtml}
        </div>

        <p style="margin:24px 0 0;font-size:12px;color:#aaa;text-align:center">
          Pro Clean Portal · Generirano automatski · ${new Date().toLocaleString("hr-HR")}
        </p>
      </div>
    </div>
  `;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as DailySummaryPayload;

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL ?? "proclean.hr@outlook.com";
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey) {
      console.warn("[daily-summary] RESEND_API_KEY not set — email not sent.");
      return NextResponse.json({ success: true, note: "no_api_key" });
    }

    const pendingCount = body.supplyRequests.filter((r) => !r.handled).length;
    const dateFormatted = new Date(body.date).toLocaleDateString("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const html = buildHtml(body);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Pro Clean Portal <${fromEmail}>`,
        to: [adminEmail],
        subject: `📊 Dnevno izvješće · ${dateFormatted} · ${body.jobsDone} posao/va · ${pendingCount} nedostaje`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[daily-summary] Resend error:", await res.text());
      return NextResponse.json({ error: "mail_failed" }, { status: 500 });
    }

    // Short SMS summary
    const smsText =
      `ProClean izvješće ${body.date}: ${body.jobsDone} posao/va, ` +
      `${pendingCount} nedostajućih sredstava, ` +
      `${body.locationNeeds.length} lokacija s posebnim potrebama.`;
    sendSMS(smsText).catch((e) => console.error("[daily-summary] SMS error:", e));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[daily-summary] Error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
