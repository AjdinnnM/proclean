"use client";

import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    quote:
      "Stanari su prvi put nakon dvije godine prestali komentirati nered u stubištu. Pro Clean ekipa dolazi točno, radi temeljito i vidi se razlika već nakon prvog čišćenja.",
    author: "Predstavnica stambene zgrade",
    location: "Maksimir, Zagreb",
  },
  {
    quote:
      "Garaža od 1.200 m² očišćena u jednom danu. Nije bilo prekida za stanare, oznake za parking ostale netaknute. Definitivno preporuka za upravitelje zgrada.",
    author: "Upravitelj zgrade",
    location: "Trešnjevka, Zagreb",
  },
  {
    quote:
      "Nakon renovacije stana smo dobili više od onoga što smo platili. Svaka soba je bila spremna za useljenje — zaista čista, ne samo površno.",
    author: "Privatni klijent",
    location: "Centar, Zagreb",
  },
];

export function TestimonialsV3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="iskustva" ref={sectionRef} className="relative py-20 lg:py-32 bg-[#FAFAF7] overflow-hidden">
      {/* Soft blue glow behind */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)",
          opacity: active ? 0.18 : 0,
          transition: "opacity 1.4s ease 200ms",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-[680px] mb-14 lg:mb-20">
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            Što kažu klijenti
          </p>
          <h2
            className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
            style={{
              fontFamily: "var(--font-v3-display)",
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 800ms ease 100ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 100ms",
            }}
          >
            Tihe recenzije.<br />
            <span className="text-[#3B82F6] italic font-normal">Glasni rezultati.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => {
            const delay = 0.45 + i * 0.18;
            return (
              <figure
                key={i}
                className="group relative bg-white border border-black/5 rounded-[20px] p-7 lg:p-8 flex flex-col overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1.5 hover:border-[#3B82F6]/30 hover:shadow-[0_28px_50px_-18px_rgba(59,130,246,0.25)]"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}s, border-color 400ms ease, box-shadow 500ms ease, translate 500ms ease`,
                }}
              >
                {/* Big quote mark — scales + rotates in */}
                <span
                  aria-hidden
                  className="absolute top-6 right-7 text-[80px] leading-none text-[#3B82F6]/12 select-none group-hover:text-[#3B82F6]/22 transition-colors duration-500"
                  style={{
                    fontFamily: "var(--font-v3-display)",
                    transform: active ? "scale(1) rotate(0deg)" : "scale(0.4) rotate(-25deg)",
                    transformOrigin: "center",
                    opacity: active ? 1 : 0,
                    transition: `transform 1100ms cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.2}s, opacity 700ms ease ${delay + 0.2}s, color 500ms ease`,
                  }}
                >
                  “
                </span>

                {/* Subtle shimmer on first reveal */}
                <span
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(59,130,246,0.06) 50%, transparent 70%)",
                    transform: "translateX(-100%)",
                    animation: active ? `testimonial-shimmer 1.6s cubic-bezier(0.65,0,0.35,1) ${delay + 0.3}s 1` : "none",
                  }}
                />

                <blockquote
                  className="relative text-[16px] lg:text-[17px] leading-[1.55] text-[#0A0A0A] flex-1"
                  style={{ fontFamily: "var(--font-v3-display)", fontWeight: 500 }}
                >
                  {r.quote}
                </blockquote>

                <figcaption
                  className="relative mt-7 pt-6 border-t border-black/5"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 700ms ease ${delay + 0.4}s, transform 700ms ease ${delay + 0.4}s`,
                  }}
                >
                  <p className="text-[14px] font-medium text-[#0A0A0A]">{r.author}</p>
                  <p className="text-[12px] text-[#6B7280] mt-0.5">{r.location}</p>
                </figcaption>

                {/* Bottom accent line — draws across on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-700" />
              </figure>
            );
          })}
        </div>

        <p
          className="mt-10 text-[12px] text-[#6B7280] max-w-[640px]"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 800ms ease 1.4s",
          }}
        >
          Imena klijenata uklonjena radi privatnosti. Originalne recenzije i Google ocjene
          dostupne su na upit.
        </p>

        <style>{`
          @keyframes testimonial-shimmer {
            0% { transform: translateX(-100%) }
            100% { transform: translateX(100%) }
          }
        `}</style>
      </div>
    </section>
  );
}
