"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceIcon } from "@/components/ServiceIcon";

const NAV = [
  { label: "Naš rad", href: "/galerija" },
  { label: "Iskustva", href: "/#iskustva" },
  { label: "Kontakt", href: "/#kontakt" },
];

const SERVICES = [
  {
    title: "Čišćenje stubišta",
    desc: "Stambene zgrade — redovito ili jednokratno",
    href: "/usluge/stubiste",
    image: "/images/services/staircase-real.jpg",
    icon: (
      <ServiceIcon slug="stubiste" />
    ),
  },
  {
    title: "Čišćenje garaža",
    desc: "Strojno ribanje i pranje podova",
    href: "/usluge/garaza",
    image: "/images/services/garaza-karcher.jpg",
    icon: (
      <ServiceIcon slug="garaza" />
    ),
  },
  {
    title: "Čišćenje nakon izgradnje",
    desc: "Novogradnja, adaptacija, primopredaja",
    href: "/usluge/izgradnja",
    image: "/images/services/izgradnja-popup.jpg",
    icon: (
      <ServiceIcon slug="izgradnja" />
    ),
  },
  {
    title: "Generalno čišćenje",
    desc: "Poslovni prostori i stanovi",
    href: "/usluge/poslovni-prostori",
    image: "/images/photos/cvjecarnica-skrinjaric.jpg",
    icon: (
      <ServiceIcon slug="poslovni-prostori" />
    ),
  },
  {
    title: "Pranje prozora",
    desc: "Iznutra, izvana i na visini",
    href: "/usluge/prozori",
    image: "/images/photos/prozori/pranje-prozora-stambena-zgrada.jpg",
    icon: (
      <ServiceIcon slug="prozori" />
    ),
  },
];

export function HeaderV3() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [deskServices, setDeskServices] = useState(false);

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
            {/* Usluge — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDeskServices(true)}
              onMouseLeave={() => setDeskServices(false)}
            >
              <button
                type="button"
                aria-expanded={deskServices}
                aria-haspopup="true"
                onClick={() => setDeskServices((v) => !v)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-[#3F3F3F] hover:text-[#0A0A0A] transition-colors"
              >
                Usluge
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-300 ${deskServices ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-250 ${
                  deskServices
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-[560px] bg-white rounded-[20px] border border-black/5 shadow-[0_24px_60px_-20px_rgba(10,10,10,0.25)] p-3">
                  <div className="grid grid-cols-2 gap-1">
                    {SERVICES.map((srv) => (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        onClick={() => setDeskServices(false)}
                        className="group flex items-start gap-3 rounded-[14px] px-3 py-3 hover:bg-[#F2F6FF] transition-colors"
                      >
                        <span className="mt-0.5 h-9 w-9 shrink-0 rounded-[11px] bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center transition-all duration-300 group-hover:bg-[#3B82F6] group-hover:text-white">
                          {srv.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13.5px] font-semibold text-[#0A0A0A] leading-tight">
                            {srv.title}
                          </span>
                          <span className="block text-[11.5px] text-[#6B7280] mt-0.5 leading-snug">
                            {srv.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <a
                    href="/#usluge"
                    onClick={() => setDeskServices(false)}
                    className="mt-1 flex items-center justify-center gap-2 rounded-[14px] px-3 py-2.5 text-[12.5px] font-semibold text-[#3B82F6] hover:bg-[#F2F6FF] transition-colors"
                  >
                    Pogledaj sve usluge
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

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
                  <div className="flex flex-col gap-1 px-1 pb-3 pt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={close}
                        className="group flex items-center gap-3 rounded-[14px] px-3 py-3 active:scale-[0.98] hover:bg-[#F2F6FF] transition-all"
                      >
                        <span className="h-10 w-10 shrink-0 rounded-[12px] bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center transition-colors duration-300 group-active:bg-[#3B82F6] group-active:text-white">
                          {s.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[14px] font-semibold text-[#0A0A0A] leading-tight">
                            {s.title}
                          </span>
                          <span className="block text-[11.5px] text-[#6B7280] mt-0.5 leading-snug">
                            {s.desc}
                          </span>
                        </span>
                        <svg
                          width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                          className="ml-auto shrink-0 text-[#D1D5DB]"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
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
