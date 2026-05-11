"use client";

import { useEffect, useState } from "react";

export function StickyCTAv3() {
  const [show, setShow] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const section = document.getElementById("kontakt");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Hide when mobile menu is open
  useEffect(() => {
    const handler = (e: Event) => setMenuOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener("mobilemenu", handler);
    return () => window.removeEventListener("mobilemenu", handler);
  }, []);

  const visible = show && !inContact && !menuOpen;

  return (
    <>
      <div
        className={`fixed bottom-0 inset-x-0 z-40 lg:hidden transition-transform duration-300 bg-white/95 backdrop-blur-xl border-t border-black/10 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)] ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="max-w-[500px] w-full mx-auto flex items-center gap-2 px-3 py-3">
          <a
            href="tel:+385994840416"
            style={{ touchAction: "manipulation" }}
            className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-full border border-black/10 bg-white text-[#3B82F6]"
            aria-label="Nazovi"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <a
            href="/kontakt"
            style={{ touchAction: "manipulation" }}
            className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#3B82F6] text-white font-medium text-[14px] shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]"
          >
            Zatraži ponudu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/385994840416?text=Pozdrav,%20zanima%20me%20ponuda%20za%20čišćenje."
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className={`fixed bottom-6 right-6 z-40 hidden lg:inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.5)] hover:scale-105 transition-all ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
      </a>
    </>
  );
}
