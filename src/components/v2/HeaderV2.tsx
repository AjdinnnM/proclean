"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "Usluge", href: "/v2#usluge" },
  { label: "Naš rad", href: "/v2#rad" },
  { label: "Iskustva", href: "/v2#iskustva" },
  { label: "Kontakt", href: "/v2#kontakt" },
];

export function HeaderV2() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#FAFAF7]/95 backdrop-blur-lg border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/v2" className="flex items-baseline gap-1.5 group">
          <span
            className="text-[20px] tracking-tight font-semibold text-[#0A0A0A]"
            style={{ fontFamily: "var(--font-v2-display)" }}
          >
            Pro·Clean
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">Zagreb</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-[13px] font-medium text-[#3F3F3F] hover:text-[#0A0A0A] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+385994840416"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#3F3F3F] hover:text-[#0A0A0A] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            099 484 0416
          </a>
          <a
            href="#kontakt"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium bg-[#0A0A0A] text-white hover:bg-black transition-colors"
          >
            Zatraži ponudu
          </a>
          <button
            aria-label="Otvori izbornik"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#FAFAF7] border-t border-black/5">
          <div className="px-6 py-5 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3.5 text-[15px] font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+385994840416"
              className="mt-2 px-3 py-3.5 text-[15px] font-medium text-[#0A0A0A] border border-black/10 rounded-full text-center"
            >
              📞 099 484 0416
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="px-3 py-3.5 text-[15px] font-medium text-white bg-[#0A0A0A] rounded-full text-center"
            >
              Zatraži ponudu
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
