"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = {
  /** Numeric value to count up to. Omit for a plain text stat. */
  value?: number;
  suffix?: string;
  /** Static text shown instead of a counter. */
  text?: string;
  label: string;
};

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-3 bg-white rounded-[18px] border border-black/5 shadow-sm divide-x divide-black/5 overflow-hidden"
    >
      {stats.map((s, i) => (
        <StatCell key={s.label} stat={s} run={run} delay={i * 140} />
      ))}
    </div>
  );
}

function StatCell({ stat, run, delay }: { stat: Stat; run: boolean; delay: number }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run || stat.value === undefined) return;
    const target = stat.value;
    const duration = 1400;
    let raf = 0;
    let startTs = 0;

    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value, delay]);

  const isText = stat.text !== undefined;
  const display =
    stat.text ?? `${new Intl.NumberFormat("hr-HR").format(n)}${stat.suffix ?? ""}`;

  return (
    <div
      className="px-2 py-4 sm:px-5 sm:py-6 text-center transition-all duration-700 min-w-0"
      style={{
        opacity: run ? 1 : 0,
        transform: run ? "translate3d(0,0,0)" : "translate3d(0,12px,0)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className={
          isText
            ? "text-[#3B82F6] font-semibold text-[13px] sm:text-[20px] lg:text-[24px] leading-[1.15] text-balance"
            : "text-[#3B82F6] font-semibold text-[17px] sm:text-[26px] lg:text-[30px] leading-none whitespace-nowrap tabular-nums"
        }
        style={{ fontFamily: "var(--font-v3-display)" }}
      >
        {display}
      </div>
      <div className="text-[10px] sm:text-[12.5px] text-[#6B7280] mt-1.5 sm:mt-2 leading-snug">{stat.label}</div>
    </div>
  );
}
