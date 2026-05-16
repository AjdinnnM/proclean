"use client";

import { useRouter } from "next/navigation";

export default function PonudaPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col">
      {/* Top bar */}
      <div className="bg-[#0A0A0A] text-white px-5 py-3 flex items-center justify-between shadow-md">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Natrag
        </button>
        <span className="font-semibold text-[13px]">Generator ponuda</span>
        <div className="w-12" />
      </div>

      {/* Iframe sa HTML aplikacijom */}
      <iframe
        src="/ponuda/index.html"
        title="Generator ponuda"
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100vh - 52px)" }}
      />
    </div>
  );
}
