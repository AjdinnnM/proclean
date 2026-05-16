"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2000, active }: { end: number; duration?: number; active: boolean }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return <>{count}</>;
}

export function StatsV3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)",
          opacity: active ? 0.14 : 0,
          transition: "opacity 1.4s ease 200ms",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <p
          className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Naše iskustvo
        </p>

        <div
          className="flex items-baseline justify-center gap-2 leading-none"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 900ms cubic-bezier(0.16,1,0.3,1) 100ms, transform 900ms cubic-bezier(0.16,1,0.3,1) 100ms",
          }}
        >
          <span
            className="text-[88px] sm:text-[120px] lg:text-[160px] font-semibold text-[#0A0A0A] tabular-nums tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            <CountUp end={100} duration={2000} active={active} />
          </span>
          <span
            className="text-[56px] sm:text-[72px] lg:text-[96px] font-semibold text-[#3B82F6] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            +
          </span>
        </div>

        <p
          className="mt-3 lg:mt-5 text-[18px] lg:text-[24px] font-semibold text-[#0A0A0A] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-v3-display)",
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 900ms cubic-bezier(0.16,1,0.3,1) 400ms, transform 900ms cubic-bezier(0.16,1,0.3,1) 400ms",
          }}
        >
          očišćenih zgrada i prostora u Zagrebu
        </p>

        <p
          className="mt-3 text-[13px] lg:text-[14px] text-[#6B7280] max-w-[480px] mx-auto"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 900ms ease 700ms",
          }}
        >
          Stambene zgrade, kafići, uredi, garaže, prozori i prostori nakon izgradnje — Pro Clean iskustvo na svakom kvadratu.
        </p>
      </div>
    </section>
  );
}
