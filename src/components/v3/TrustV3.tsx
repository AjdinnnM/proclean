"use client";

import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { title: "R1 račun", desc: "Za stambene zajednice, tvrtke i upravitelje — transparentno za knjigovodstvo, bez skrivenih troškova." },
  { title: "Vlastita oprema", desc: "Profesionalni Kärcher strojevi, ribači za podove i oprema za rad na visinama — sve naše." },
  { title: "Eko sredstva", desc: "Isključivo biorazgradivi preparati — sigurni za stanare, djecu, kućne ljubimce i okoliš." },
  { title: "Odgovor za 2h", desc: "Svaki upit dobiva konkretnu ponudu unutar 2 sata radnim danom. Bez čekanja." },
];

export function TrustV3() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const itemDelay = (i: number) => 0.5 + i * 0.55;

  return (
    <section ref={ref} className="relative border-y border-black/5 py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative">

        {/* ── Desktop wavy line ── */}
        <svg
          className="hidden lg:block absolute pointer-events-none"
          style={{ top: "8px", left: 0, right: 0, width: "100%", height: "70px", overflow: "visible" }}
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="trust-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="15%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 60 Q 62 20 125 60 Q 250 100 375 60 Q 500 20 625 60 Q 750 100 875 60 Q 940 20 1000 60"
            stroke="url(#trust-line-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1500"
            strokeDashoffset={active ? 0 : 1500}
            style={{ transition: "stroke-dashoffset 2.6s cubic-bezier(0.65,0,0.35,1)" }}
          />
          {[125, 375, 625, 875].map((x, i) => (
            <g key={i}>
              <circle
                cx={x} cy={60} r={6}
                fill="#3B82F6"
                opacity={0.18}
                style={{
                  transform: active ? "scale(1)" : "scale(0)",
                  transformOrigin: `${x}px 60px`,
                  transition: `transform 600ms cubic-bezier(0.34,1.56,0.64,1) ${itemDelay(i) - 0.1}s`,
                }}
              />
              <circle
                cx={x} cy={60} r={3}
                fill="#3B82F6"
                style={{
                  transform: active ? "scale(1)" : "scale(0)",
                  transformOrigin: `${x}px 60px`,
                  transition: `transform 500ms cubic-bezier(0.34,1.56,0.64,1) ${itemDelay(i)}s`,
                }}
              />
            </g>
          ))}
        </svg>

        {/* ── DESKTOP — 4-col grid ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-10 relative">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className="relative"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 800ms cubic-bezier(0.16,1,0.3,1) ${itemDelay(i)}s, transform 800ms cubic-bezier(0.16,1,0.3,1) ${itemDelay(i)}s`,
              }}
            >
              <div className="relative inline-block mb-3">
                <span
                  className="absolute inset-0 -m-2 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
                    opacity: active ? 1 : 0,
                    transition: `opacity 700ms ease ${itemDelay(i) + 0.1}s`,
                  }}
                />
                <p
                  className="relative text-[12px] text-[#3B82F6] tabular-nums font-medium"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  0{i + 1}
                </p>
              </div>
              <h3 className="text-[18px] lg:text-[22px] text-[#0A0A0A] font-semibold mb-2 tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                {it.title}
              </h3>
              <p className="text-[13px] lg:text-[14px] text-[#3F3F3F] leading-[1.55]">
                {it.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── MOBILE — single column with vertical wavy line ── */}
        <div className="lg:hidden relative pl-14">
          {/* Vertical wavy line */}
          <svg
            className="absolute pointer-events-none"
            style={{ left: "16px", top: "8px", bottom: "8px", width: "16px", height: "calc(100% - 16px)" }}
            viewBox="0 0 16 800"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="trust-vline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="10%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="90%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 8 0 Q 16 100 8 200 Q 0 300 8 400 Q 16 500 8 600 Q 0 700 8 800"
              stroke="url(#trust-vline-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="900"
              strokeDashoffset={active ? 0 : 900}
              style={{ transition: "stroke-dashoffset 2.6s cubic-bezier(0.65,0,0.35,1)" }}
            />
          </svg>

          <div className="flex flex-col gap-12">
            {ITEMS.map((it, i) => (
              <div
                key={it.title}
                className="relative"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${itemDelay(i)}s, transform 700ms cubic-bezier(0.16,1,0.3,1) ${itemDelay(i)}s`,
                }}
              >
                {/* Pulsing dot on the line */}
                <div
                  className="absolute -left-14 top-1 w-9 flex items-center justify-center"
                  style={{ pointerEvents: "none" }}
                >
                  {/* Outer ring */}
                  <span
                    className="absolute h-7 w-7 rounded-full bg-[#3B82F6]/15"
                    style={{
                      transform: active ? "scale(1)" : "scale(0)",
                      transition: `transform 600ms cubic-bezier(0.34,1.56,0.64,1) ${itemDelay(i) - 0.05}s`,
                      animation: active ? `trust-ring-pulse 2.4s ease-in-out ${itemDelay(i) + 0.4}s infinite` : "none",
                    }}
                  />
                  {/* Core dot */}
                  <span
                    className="relative h-3 w-3 rounded-full bg-[#3B82F6]"
                    style={{
                      transform: active ? "scale(1)" : "scale(0)",
                      transition: `transform 500ms cubic-bezier(0.34,1.56,0.64,1) ${itemDelay(i)}s`,
                      boxShadow: "0 0 12px rgba(59,130,246,0.5)",
                    }}
                  />
                </div>

                {/* Content */}
                <p
                  className="text-[12px] text-[#3B82F6] tabular-nums font-medium mb-2"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  0{i + 1}
                </p>
                <h3 className="text-[19px] text-[#0A0A0A] font-semibold mb-2 tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                  {it.title}
                </h3>
                <p className="text-[14px] text-[#3F3F3F] leading-[1.55]">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes trust-ring-pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.6); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
}
