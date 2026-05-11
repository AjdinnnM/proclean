"use client";

import { useEffect, useRef, useState } from "react";

export function InvesticijaCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#FAFAF7] py-16 lg:py-20 border-y border-black/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <p
          className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Zašto čistiti garažu?
        </p>

        <h2
          className="text-[32px] lg:text-[48px] leading-[1.05] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-5"
          style={{
            fontFamily: "var(--font-v3-display)",
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 800ms ease 150ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 150ms",
          }}
        >
          Čišćenje garaže nije luksuz —<br className="hidden md:block" />
          {/* Animated underlined phrase */}
          <span className="relative inline-block">
            <span className="text-[#3B82F6] italic font-normal"> već investicija.</span>
            {/* Hand-drawn underline SVG — draws across as section reveals */}
            <svg
              aria-hidden
              className="absolute left-0 right-0 -bottom-2 lg:-bottom-3 w-full pointer-events-none"
              viewBox="0 0 400 18"
              preserveAspectRatio="none"
              fill="none"
              style={{ height: "10px" }}
            >
              <path
                d="M 4 11 C 60 4 130 14 200 8 C 280 3 340 13 396 7"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="500"
                strokeDashoffset={active ? 0 : 500}
                style={{
                  transition: "stroke-dashoffset 1.4s cubic-bezier(0.65,0,0.35,1) 0.9s",
                  opacity: 0.7,
                }}
              />
            </svg>
          </span>
        </h2>

        <p
          className="text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.65] max-w-2xl mx-auto"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 800ms ease 350ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 350ms",
          }}
        >
          Redovito pranje garaže stvar je higijene i sigurnosti. Zaprljane površine, vlaga i organski otpad
          stvaraju idealne uvjete za nametke i plijesan — probleme koje je višestruko skuplje sanirati nego spriječiti.
        </p>
      </div>
    </section>
  );
}
