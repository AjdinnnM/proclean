"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { MenuIcon, CloseIcon, PhoneIcon } from "./icons";
import { Logo } from "./Logo";

const SERVICES = [
  { label: "Čišćenje stubišta", href: "/usluge/stubiste", emoji: "🏢" },
  { label: "Čišćenje garaža", href: "/usluge/garaza", emoji: "🚗" },
  { label: "Čišćenje nakon izgradnje", href: "/usluge/izgradnja", emoji: "🏗️" },
  { label: "Pranje prozora", href: "/usluge/prozori", emoji: "🪟" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#FAFAF7]/95 backdrop-blur-lg border-b border-black/5"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2 group" aria-label={site.brand.name}>
          <Logo variant="dark" className="text-2xl md:text-[26px]" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.contact.phoneLink}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-[var(--color-brand-700)] transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.contact.phone}
          </a>
          <a
            href="/kontakt"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] transition-colors soft-shadow"
          >
            Besplatna ponuda
          </a>
          <button
            aria-label="Otvori izbornik"
            onClick={() => { setOpen((v) => !v); setServicesOpen(false); }}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-[#FAFAF7]">
          <div className="container-page py-4 flex flex-col gap-1">
            {site.nav.map((item) =>
              item.label === "Usluge" ? (
                <div key={item.href}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted transition-colors"
                  >
                    <span>Usluge</span>
                    <span className={cn("text-gray-400 transition-transform duration-200", servicesOpen && "rotate-180")}>▾</span>
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 mt-1 mb-2 flex flex-col gap-0.5 border-l-2 border-[#0266f0]/20 pl-3">
                      {SERVICES.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => { setOpen(false); setServicesOpen(false); }}
                          className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold text-[#0d1f3c] hover:text-[#0266f0] rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <span>{s.emoji}</span>
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href={`tel:${site.contact.phoneLink}`}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border border-border"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.contact.phone}
            </a>
            <a
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold bg-[var(--color-brand-600)] text-white"
            >
              Besplatna ponuda
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
