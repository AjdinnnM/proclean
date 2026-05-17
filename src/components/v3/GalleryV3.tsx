"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const CATEGORIES = [
  { label: "Sve", key: "sve" },
  { label: "Stubišta", key: "stubiste" },
  { label: "Garaže", key: "garaza" },
  { label: "Prozori", key: "prozori" },
  { label: "Izgradnja", key: "izgradnja" },
];

const PHOTOS: { src: string; cat: string; alt: string }[] = [
  // Stubišta
  { src: "/images/photos/stubiste-lobby.jpg",           cat: "stubiste", alt: "Čist luksuzni ulaz stambene zgrade" },
  { src: "/images/photos/stubiste/IMG_3457.jpg",        cat: "stubiste", alt: "Čišćenje ulaza stambene zgrade" },
  { src: "/images/photos/stubiste-ulaz-1.jpg",          cat: "stubiste", alt: "Stubište nakon čišćenja" },
  { src: "/images/photos/stubiste/IMG_3459.jpg",        cat: "stubiste", alt: "Strojno čišćenje stubišta" },
  { src: "/images/photos/stubiste/IMG_3458.jpg",        cat: "stubiste", alt: "Strojno poliranje poda" },
  { src: "/images/photos/stubiste/IMG_3470.jpg",        cat: "stubiste", alt: "Strojno pranje podova" },
  { src: "/images/services/staircase-real.jpg",         cat: "stubiste", alt: "Čisto stubište stambene zgrade" },
  // Garaže
  { src: "/images/photos/garaza/IMG_3342.jpg",          cat: "garaza", alt: "Čišćenje garaže" },
  { src: "/images/photos/garaza/IMG_3341.jpg",          cat: "garaza", alt: "Garaža nakon čišćenja" },
  { src: "/images/photos/garaza/IMG_3469.jpg",          cat: "garaza", alt: "Čišćenje stropa garaže" },
  { src: "/images/photos/garaza-prije-poslije.jpg",     cat: "garaza", alt: "Garaža — prije i poslije" },
  // Prozori
  { src: "/images/photos/prozori/IMG_3153.jpg",         cat: "prozori", alt: "Pranje prozora na stambenoj zgradi" },
  { src: "/images/photos/prozori/IMG_3451.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/IMG_3452.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/IMG_3453.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/IMG_3454.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/IMG_3455.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/IMG_3288.jpg",         cat: "prozori", alt: "Oprani prozori" },
  { src: "/images/photos/prozori/IMG_3151.jpg",         cat: "prozori", alt: "Prozori prije čišćenja" },
  { src: "/images/photos/prozori/IMG_3152.jpg",         cat: "prozori", alt: "Prozori poslije čišćenja" },
  { src: "/images/photos/prozori/IMG_3144.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/IMG_3145.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/IMG_3301.jpg",         cat: "prozori", alt: "Čišćenje prozora" },
  { src: "/images/photos/prozori/IMG_3305.jpg",         cat: "prozori", alt: "Čišćenje prozora" },
  { src: "/images/photos/prozori/IMG_7358.jpg",         cat: "prozori", alt: "Pranje staklene fasade" },
  { src: "/images/photos/prozori/IMG_2956.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/IMG_2958.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/novotel-hotel.jpg",    cat: "prozori", alt: "Novotel Zagreb — pranje staklene fasade" },
  // Izgradnja
  { src: "/images/photos/izgradnja/IMG_2990.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/IMG_2991.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/IMG_3018.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/IMG_3035.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/IMG_3044.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
];

export function GalleryV3() {
  const [active, setActive] = useState<string | null>(null);
  const [cat, setCat] = useState("sve");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filtered = cat === "sve" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    if (!active) return;
    const idx = filtered.findIndex((p) => p.src === active);
    setActive(filtered[(idx - 1 + filtered.length) % filtered.length].src);
  }, [active, filtered]);
  const next = useCallback(() => {
    if (!active) return;
    const idx = filtered.findIndex((p) => p.src === active);
    setActive(filtered[(idx + 1) % filtered.length].src);
  }, [active, filtered]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const currentIdx = active ? filtered.findIndex((p) => p.src === active) : -1;

  return (
    <section className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Naš rad</p>
          <h2
            className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Galerija radova
          </h2>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => { setCat(c.key); setActive(null); }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                  cat === c.key
                    ? "bg-[#3B82F6] text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
                    : "bg-white text-[#3F3F3F] border border-black/10 hover:border-[#3B82F6]/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((photo, i) => (
            <Reveal key={photo.src} variant="up" delay={i * 30}>
              <button
                onClick={() => setActive(photo.src)}
                className="group relative w-full overflow-hidden rounded-[14px] block cursor-zoom-in"
                style={{ transform: "translateZ(0)" }}
                aria-label={photo.alt}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-[14px]" />
              </button>
            </Reveal>
          ))}
        </div>

        {/* Lightbox */}
        {mounted && active && createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            style={{ animation: "gv3-fade 180ms ease-out" }}
            onClick={close}
          >
            <div
              className="relative w-screen h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={active}
                src={active}
                alt="Povećana slika"
                fill
                className="object-contain"
                style={{ animation: "gv3-zoom 220ms ease-out" }}
                sizes="100vw"
                priority
              />
            </div>

            <button
              onClick={close}
              className="fixed top-4 right-4 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-sm"
              aria-label="Zatvori"
            >
              ✕
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="fixed left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-2xl transition-colors backdrop-blur-sm"
              aria-label="Prethodna"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="fixed right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-2xl transition-colors backdrop-blur-sm"
              aria-label="Sljedeća"
            >
              ›
            </button>
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {currentIdx + 1} / {filtered.length}
            </div>
            <style>{`
              @keyframes gv3-fade { from { opacity: 0 } to { opacity: 1 } }
              @keyframes gv3-zoom { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
            `}</style>
          </div>,
          document.body,
        )}
      </div>
    </section>
  );
}
