"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  n: string;
  title: string;
  desc: string;
}

export function ProcessStepsAnimated({ steps }: { steps: Step[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        {
          threshold: 0.55,
          rootMargin: "-20% 0px -20% 0px",
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative pl-12">
      {/* Vertical timeline line */}
      <div
        className="absolute left-[23px] top-8 bottom-8 w-[2px] rounded-full"
        style={{ background: "linear-gradient(to bottom, transparent, #E2E8F0 15%, #E2E8F0 85%, transparent)" }}
      />

      <div className="flex flex-col gap-4">
        {steps.map((step, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;

          return (
            <div
              key={step.n}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-12 top-7 w-12 flex items-center justify-center">
                {isActive ? (
                  <>
                    {/* Outer pulse ring */}
                    <span
                      className="absolute h-9 w-9 rounded-full bg-[#3B82F6]/20"
                      style={{ animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite" }}
                    />
                    {/* Second ring */}
                    <span
                      className="absolute h-6 w-6 rounded-full bg-[#3B82F6]/30"
                      style={{ animation: "ping 1.4s cubic-bezier(0,0,0.2,1) 0.3s infinite" }}
                    />
                    {/* Core dot */}
                    <span
                      className="relative h-4 w-4 rounded-full bg-[#3B82F6]"
                      style={{ boxShadow: "0 0 16px 4px rgba(59,130,246,0.5)" }}
                    />
                  </>
                ) : (
                  <span
                    className="h-3 w-3 rounded-full border-2 transition-all duration-500"
                    style={{
                      borderColor: isPast ? "#93C5FD" : "#D1D5DB",
                      backgroundColor: isPast ? "#EFF6FF" : "white",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                style={{
                  transform: isActive
                    ? "translateX(12px) scale(1)"
                    : isPast
                    ? "translateX(-4px) scale(0.96)"
                    : "translateX(0px) scale(0.96)",
                  opacity: isActive ? 1 : isPast ? 0.45 : 0.55,
                  transition: "transform 500ms cubic-bezier(0.4,0,0.2,1), opacity 500ms ease, box-shadow 500ms ease",
                }}
                className={`rounded-[20px] p-6 border ${
                  isActive
                    ? "bg-white border-[#BFDBFE] shadow-[0_8px_40px_-12px_rgba(59,130,246,0.25)]"
                    : "bg-[#FAFAF7] border-gray-100 shadow-none"
                }`}
              >
                <div
                  className="font-extrabold text-[52px] leading-none mb-3 select-none"
                  style={{
                    color: isActive ? "#93C5FD" : "#DBEAFE",
                    transition: "color 500ms ease",
                  }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-bold text-base leading-snug mb-2"
                  style={{
                    color: isActive ? "#0A0A0A" : "#374151",
                    transition: "color 500ms ease",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: isActive ? "#6B7280" : "#9CA3AF",
                    transition: "color 500ms ease",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
