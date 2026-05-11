"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  className?: string;
  delay?: number; // ms before typing starts
  speed?: number; // ms per character
}

export function TypewriterText({ text, className, delay = 300, speed = 55 }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
              i++;
              setDisplayed(text.slice(0, i));
              if (i >= text.length) {
                clearInterval(interval);
                setDone(true);
              }
            }, speed);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed || <span className="opacity-0">{text}</span>}
      {!done && (
        <span
          className="ml-0.5 inline-block w-[3px] rounded-full bg-[#3B82F6] align-middle"
          style={{
            height: "0.85em",
            animation: "blink 0.9s step-end infinite",
          }}
        />
      )}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}
