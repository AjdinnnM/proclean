"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedChecklist({ items }: { items: string[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
      {items.map((item, i) => {
        const delay = i * 90;
        return (
          <li
            key={item}
            className="group relative flex items-start gap-3 py-3.5 border-b border-black/5"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateX(0)" : "translateX(-12px)",
              transition: `opacity 600ms ease ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }}
          >
            {/* Animated checkmark SVG — draws itself */}
            <span className="relative mt-0.5 h-5 w-5 shrink-0 flex items-center justify-center">
              {/* Background circle */}
              <span
                className="absolute inset-0 rounded-full bg-[#EFF6FF]"
                style={{
                  transform: active ? "scale(1)" : "scale(0)",
                  transition: `transform 500ms cubic-bezier(0.34,1.56,0.64,1) ${delay + 100}ms`,
                }}
              />
              {/* Drawing checkmark */}
              <svg
                className="relative h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M5 12l5 5L20 7"
                  style={{
                    strokeDasharray: 24,
                    strokeDashoffset: active ? 0 : 24,
                    transition: `stroke-dashoffset 550ms cubic-bezier(0.65,0,0.35,1) ${delay + 280}ms`,
                  }}
                />
              </svg>
            </span>

            <span className="text-[14px] lg:text-[15px] text-[#0A0A0A] leading-[1.45]">
              {item}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
