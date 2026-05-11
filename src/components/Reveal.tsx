"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "left" | "right";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  /** Animation style. "up" = fade + translateY, "fade" = opacity only, "left"/"right" = slide from side. */
  variant?: Variant;
};

const HIDDEN: Record<Variant, React.CSSProperties> = {
  up:    { opacity: 0, transform: "translate3d(0, 24px, 0)" },
  fade:  { opacity: 0, transform: "translate3d(0, 0, 0)" },
  left:  { opacity: 0, transform: "translate3d(-28px, 0, 0)" },
  right: { opacity: 0, transform: "translate3d(28px, 0, 0)" },
};
const VISIBLE: React.CSSProperties = {
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  // Start visible — SSR safe (text readable even if JS doesn't run)
  const [visible, setVisible] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — skip animation
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // After hydration, start hidden then animate when scrolled into view
    setHydrated(true);
    setVisible(false);

    // Hard fallback — always show after 1.4 s regardless of scroll
    const fallback = setTimeout(() => setVisible(true), 1400);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            clearTimeout(fallback);
          } else {
            // Reset to hidden when element leaves viewport — re-animates on next scroll-in
            setVisible(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const Component = Tag as "div";
  const style: React.CSSProperties = hydrated
    ? {
        ...(visible ? VISIBLE : HIDDEN[variant]),
        transition: "opacity 800ms ease-out, transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: visible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }
    : { opacity: 1 };

  return (
    <Component ref={ref as React.Ref<HTMLDivElement>} style={style} className={cn(className)}>
      {children}
    </Component>
  );
}
