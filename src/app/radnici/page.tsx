"use client";

import { useRouter } from "next/navigation";

export default function RadniciPortalPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Top bar */}
      <div className="bg-[#0A0A0A] text-white px-5 py-3 flex items-center justify-between shadow-md border-b border-white/10">
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          aria-label="Natrag na početnu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Početna
        </button>
        <span className="font-semibold text-[13px] tracking-wide">Portal za radnike</span>
        <button
          onClick={() => router.push("/radnici/ponuda")}
          className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#3B82F6] text-white px-3 py-1.5 rounded-full hover:bg-[#2563EB] transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Ponuda
        </button>
      </div>

      {/* Iframe sa mapom zgrada */}
      <iframe
        src="/radnici-portal/index.html"
        title="Portal za radnike — Mapa zgrada"
        className="flex-1 w-full border-0 bg-white"
        style={{ minHeight: "calc(100vh - 52px)" }}
        allow="geolocation; clipboard-read; clipboard-write"
      />
    </div>
  );
}
