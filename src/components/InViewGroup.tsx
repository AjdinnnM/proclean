"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders a `group` element that mirrors its hover animation on touch devices.
 *
 * - Desktop (hover-capable): does nothing extra — normal `:hover` drives the
 *   animation via the `group-hover:` / `hover:` classes already on the markup.
 * - Mobile / touch (no hover): toggles `data-active="true"` while the element
 *   sits in the central band of the viewport, so pairing `group-data-[active=true]:`
 *   (and `data-[active=true]:`) variants reproduces the hover effect on scroll.
 */
export function InViewGroup({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Hover-capable devices already animate on :hover — skip scroll trigger.
    if (window.matchMedia("(hover: hover)").matches) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      // Only "in view" when the card reaches the central ~16% band of the screen.
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-active={active} className={className}>
      {children}
    </div>
  );
}
