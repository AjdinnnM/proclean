"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const REFERENCES = [
  {
    title: "Garderoba Store",
    sub: "Coffee shop · čišćenje nakon renovacije",
    tag: "Renovacija",
    image: "/images/photos/izgradnja/IMG_3035.jpg",
    href: "/reference/garderoba",
  },
  {
    title: "Cvjećarna Skrinjarić",
    sub: "Generalno čišćenje nakon evenata",
    tag: "Cvjećarna",
    image: "/images/services/office.jpg",
    href: "/reference/cvjecarna-skrinjaric",
  },
];

export function ReferencesV3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reference" ref={sectionRef} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16 flex-wrap">
          <div className="max-w-[640px]">
            <p
              className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              Naše reference
            </p>
            <h2
              className="text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
              style={{
                fontFamily: "var(--font-v3-display)",
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 800ms ease 100ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 100ms",
              }}
            >
              Projekti koji<br />
              <span className="text-[#3B82F6] italic font-normal">govore za sebe.</span>
            </h2>
          </div>
          <p
            className="hidden lg:block text-[14px] text-[#6B7280] max-w-[280px] mb-3"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 800ms ease 250ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 250ms",
            }}
          >
            Klijenti nam vjeruju prostore koje moraju brzo vratiti u red. Pogledajte kako to radimo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
          {REFERENCES.map((r, i) => {
            const delay = 0.35 + i * 0.15;
            return (
              <Link
                key={r.title}
                href={r.href}
                className="group relative block rounded-[22px] overflow-hidden border border-black/5 bg-white hover:border-[#3B82F6]/40 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.2)] transition-all"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}s, border-color 400ms ease, box-shadow 500ms ease`,
                }}
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  {/* Shine sweep on hover */}
                  <span
                    aria-hidden
                    className="absolute -inset-y-8 -left-1/4 w-1/3 pointer-events-none opacity-0 group-hover:opacity-100 z-10"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                      transform: "skewX(-12deg) translateX(-100%)",
                      animation: "references-shine 1.2s cubic-bezier(0.65,0,0.35,1)",
                    }}
                  />

                  <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] font-bold text-white bg-[#3B82F6] rounded-full shadow-lg">
                    {r.tag}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-white font-semibold text-[22px] lg:text-[26px] leading-[1.1] tracking-[-0.02em] mb-1"
                        style={{ fontFamily: "var(--font-v3-display)" }}
                      >
                        {r.title}
                      </h3>
                      <p className="text-white/80 text-[13px] leading-snug">{r.sub}</p>
                    </div>
                    <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-[#3B82F6] group-hover:rotate-[-45deg] transition-transform shadow-[0_0_16px_-4px_rgba(255,255,255,0.6)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes references-shine {
          0% { transform: skewX(-12deg) translateX(-100%) }
          100% { transform: skewX(-12deg) translateX(700%) }
        }
      `}</style>
    </section>
  );
}
