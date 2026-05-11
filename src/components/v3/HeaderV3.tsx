"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Naš rad", href: "/#rad" },
  { label: "Iskustva", href: "/#iskustva" },
  { label: "Kontakt", href: "/#kontakt" },
];

const SERVICES = [
  { title: "Čišćenje stubišta", href: "/usluge/stubiste", image: "/images/services/staircase-real.jpg" },
  { title: "Čišćenje garaža", href: "/usluge/garaza", image: "/images/photos/garaza/IMG_3342.jpg" },
  { title: "Pranje prozora", href: "/usluge/prozori", image: "/images/photos/prozori/IMG_3288.jpg" },
  { title: "Čišćenje nakon izgradnje", href: "/usluge/izgradnja", image: "/images/services/izgradnja-popup.jpg" },
];

export function HeaderV3() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Notify StickyCTAv3 when menu opens/closes
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mobilemenu", { detail: { open } }));
  }, [open]);

  const close = () => { setOpen(false); setServicesOpen(false); };

  return (
    <>
      {/* ── BACKDROP — izvan headera da ne sijeni logo bar ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          background: "rgba(10, 22, 40, 0.65)",
          backdropFilter: "blur(3px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 250ms ease",
        }}
        onClick={close}
      />

      {/* ── HEADER — iznad backdropa (z-50 > z-40) ── */}
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
          open
            ? "bg-[#FAFAF7] border-b border-black/8"
            : scrolled
            ? "bg-[#FAFAF7]/95 backdrop-blur-xl border-b border-black/5"
            : "bg-[#FAFAF7]"
        }`}
      >
        {/* Top bar */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/proclean-logo-blue.png"
              alt="Pro Clean logo"
              width={148}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="/#usluge" className="px-3 py-2 text-[13px] font-medium text-[#3F3F3F] hover:text-[#0A0A0A] transition-colors">
              Usluge
            </a>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="px-3 py-2 text-[13px] font-medium text-[#3F3F3F] hover:text-[#0A0A0A] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+385994840416"
              className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#3F3F3F] hover:text-[#0A0A0A] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              099 484 0416
            </a>
            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
            >
              Zatraži ponudu
            </a>

            {/* Hamburger / X */}
            <button
              aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
              onClick={() => { setOpen((v) => !v); if (open) setServicesOpen(false); }}
              style={{ touchAction: "manipulation" }}
              className="lg:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#0A0A0A] active:scale-95 transition-transform duration-150"
            >
              {/* Hamburger lines → X via CSS rotate */}
              <span
                className="absolute block w-4 h-[1.8px] bg-current rounded-full transition-all duration-250"
                style={{
                  transform: open ? "translateY(0) rotate(45deg)" : "translateY(-4px)",
                  opacity: 1,
                }}
              />
              <span
                className="absolute block w-4 h-[1.8px] bg-current rounded-full transition-all duration-250"
                style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "scaleX(1)" }}
              />
              <span
                className="absolute block w-4 h-[1.8px] bg-current rounded-full transition-all duration-250"
                style={{
                  transform: open ? "translateY(0) rotate(-45deg)" : "translateY(4px)",
                  opacity: 1,
                }}
              />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU — slide-down animacija ── */}
        <div
          className="lg:hidden overflow-hidden"
          style={{
            display: "grid",
            gridTemplateRows: open ? "1fr" : "0fr",
            transition: "grid-template-rows 300ms cubic-bezier(0.4,0,0.2,1), opacity 250ms ease",
            opacity: open ? 1 : 0,
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div className="bg-[#FAFAF7] border-t border-black/5 px-5 py-4 flex flex-col gap-0.5">

              {/* Usluge — expandable */}
              <button
                onClick={() => setServicesOpen((v) => !v)}
                style={{ touchAction: "manipulation" }}
                className="flex items-center justify-between px-3 py-3.5 text-[15px] font-medium text-[#0A0A0A] hover:bg-black/5 rounded-xl w-full text-left transition-colors"
              >
                Usluge
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                  style={{ transition: "transform 250ms ease", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {/* Services grid — slide-down */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: servicesOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 280ms cubic-bezier(0.4,0,0.2,1), opacity 220ms ease",
                  opacity: servicesOpen ? 1 : 0,
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div className="grid grid-cols-2 gap-2 px-1 pb-3 pt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={close}
                        className="relative overflow-hidden rounded-[14px] aspect-[4/3] block active:scale-95 transition-transform"
                      >
                        <Image src={s.image} alt={s.title} fill sizes="45vw" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                        <span className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-white text-[12px] font-medium leading-snug">
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={close}
                  className="px-3 py-3.5 text-[15px] font-medium text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
                >
                  {n.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="tel:+385994840416"
                  className="px-3 py-3.5 text-[15px] font-medium text-[#0A0A0A] border border-black/10 rounded-full text-center active:scale-[0.98] transition-transform"
                  style={{ touchAction: "manipulation" }}
                >
                  📞 099 484 0416
                </a>
                <a
                  href="/kontakt"
                  onClick={close}
                  className="px-3 py-3.5 text-[15px] font-medium text-white bg-[#3B82F6] rounded-full text-center active:scale-[0.98] transition-all hover:bg-[#2563EB]"
                  style={{ touchAction: "manipulation" }}
                >
                  Zatraži ponudu
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
