"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  types: string[];
  intervalMs?: number;
}

export function RotatingTypes({ types, intervalMs = 2600 }: Props) {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  // Trigger reveal when in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !startedRef.current) { startedRef.current = true; setActive(true); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrevious(c);
        return (c + 1) % types.length;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [active, intervalMs, types.length]);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrevious(current);
    setCurrent(i);
  };

  return (
    <div ref={sectionRef} className="text-center">
      {/* Eyebrow */}
      <p
        className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        Što peremo
      </p>

      {/* Big rotating headline */}
      <div
        className="font-semibold text-[#0A0A0A] leading-[1.04] tracking-[-0.025em]"
        style={{ fontFamily: "var(--font-v3-display)" }}
      >
        <div
          className="text-[36px] sm:text-[52px] lg:text-[72px]"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms ease 100ms, transform 700ms cubic-bezier(0.16,1,0.3,1) 100ms",
          }}
        >
          Peremo
        </div>

        {/* Rotator viewport — own font-size so h-[1.2em] computes correctly */}
        <div
          className="relative overflow-hidden mt-2 text-[36px] sm:text-[52px] lg:text-[72px]"
          style={{
            height: "1.2em",
            opacity: active ? 1 : 0,
            transition: "opacity 700ms ease 250ms",
          }}
        >
          {/* Outgoing word — slides up out */}
          {previous !== null && (
            <span
              key={`out-${previous}-${current}`}
              className="absolute inset-0 flex items-center justify-center italic font-normal text-[#3B82F6] whitespace-nowrap leading-none"
              style={{ animation: "rt-slide-out-up 700ms cubic-bezier(0.65,0,0.35,1) forwards" }}
            >
              {types[previous]}.
            </span>
          )}

          {/* Incoming word — slides up from below */}
          <span
            key={`in-${current}`}
            className="absolute inset-0 flex items-center justify-center italic font-normal text-[#3B82F6] whitespace-nowrap leading-none"
            style={{ animation: "rt-slide-in-up 700ms cubic-bezier(0.16,1,0.3,1)" }}
          >
            {types[current]}.
          </span>
        </div>
      </div>

      {/* Soft glow behind */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[80%] max-w-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 65%)",
          filter: "blur(60px)",
          opacity: active ? 1 : 0,
          transition: "opacity 1.2s ease 400ms",
        }}
      />

      {/* Progress dots */}
      <div
        className="flex items-center justify-center gap-1.5 mt-10 lg:mt-14"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 600ms ease 400ms, transform 600ms ease 400ms",
        }}
      >
        {types.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Tip ${i + 1}`}
            className="rounded-full transition-all duration-500"
            style={{
              height: "5px",
              width: i === current ? "26px" : "5px",
              backgroundColor: i === current ? "#3B82F6" : "#D1D5DB",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes rt-slide-in-up {
          0% { transform: translateY(100%); opacity: 0 }
          50% { opacity: 1 }
          100% { transform: translateY(0); opacity: 1 }
        }
        @keyframes rt-slide-out-up {
          0% { transform: translateY(0); opacity: 1 }
          50% { opacity: 1 }
          100% { transform: translateY(-100%); opacity: 0 }
        }
      `}</style>
    </div>
  );
}
