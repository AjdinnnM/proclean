"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Pair = { before: string; after: string; label: string };
type Extra = string;

export function ImageLightbox({ pairs, extras }: { pairs: Pair[]; extras: Extra[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Flatten all images for navigation
  const allImages = [
    ...pairs.flatMap((p) => [p.before, p.after]),
    ...extras,
  ];

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    if (!active) return;
    const i = allImages.indexOf(active);
    setActive(allImages[(i - 1 + allImages.length) % allImages.length]);
  }, [active, allImages]);
  const next = useCallback(() => {
    if (!active) return;
    const i = allImages.indexOf(active);
    setActive(allImages[(i + 1) % allImages.length]);
  }, [active, allImages]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close, prev, next]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      {/* Before/after pairs */}
      <div className="grid md:grid-cols-2 gap-5">
        {pairs.map((pair, i) => (
          <div key={pair.before + i} className="rounded-3xl overflow-hidden shadow-lg border border-gray-100" style={{ transform: "translateZ(0)" }}>
            <div className="flex text-xs font-bold">
              <div className="flex-1 bg-gray-800 text-white text-center py-2 tracking-widest uppercase">Prije</div>
              <div className="flex-1 bg-[#0266f0] text-white text-center py-2 tracking-widest uppercase">Poslije</div>
            </div>
            <div className="flex relative" style={{ aspectRatio: "16/9" }}>
              <button
                onClick={() => setActive(pair.before)}
                className="relative w-1/2 overflow-hidden cursor-zoom-in group"
                aria-label={`${pair.label} prije — povećaj`}
              >
                <Image src={pair.before} alt={`${pair.label} prije`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(min-width:768px) 25vw, 50vw" />
              </button>
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-white z-10 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
              <button
                onClick={() => setActive(pair.after)}
                className="relative w-1/2 overflow-hidden cursor-zoom-in group"
                aria-label={`${pair.label} poslije — povećaj`}
              >
                <Image src={pair.after} alt={`${pair.label} poslije`} fill className="object-cover object-right transition-transform duration-300 group-hover:scale-105" sizes="(min-width:768px) 25vw, 50vw" />
              </button>
            </div>
            <div className="bg-white px-5 py-3 text-xs font-semibold text-gray-500 text-center tracking-wide">{pair.label}</div>
          </div>
        ))}
      </div>

      {/* Extra photos */}
      {extras.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {extras.map((src) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-zoom-in" style={{ transform: "translateZ(0)" }}
              aria-label="Povećaj sliku"
            >
              <Image src={src} alt="Garderoba Store čišćenje — Pro Clean Zagreb" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox overlay — portaled to body so it ALWAYS covers the viewport,
          even when ancestors have CSS transforms (like Reveal) */}
      {mounted && active && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-5 sm:p-12 backdrop-blur-2xl animate-[laFade_180ms_ease-out]"
          style={{
            touchAction: "none",
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.32) 0%, rgba(241,245,249,0.58) 50%, rgba(96,165,250,0.30) 100%)",
          }}
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={active}
            src={active}
            alt="Povećana slika"
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-full w-auto h-auto object-contain rounded-2xl sm:rounded-[28px] ring-1 ring-white/60 shadow-[0_24px_80px_rgba(37,99,235,0.45)] animate-[laZoom_220ms_ease-out]"
          />

          {/* Close */}
          <button
            onClick={close}
            className="fixed top-4 right-4 h-11 w-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-sm"
            aria-label="Zatvori"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="fixed left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center text-2xl transition-colors backdrop-blur-sm"
            aria-label="Prethodna"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="fixed right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center text-2xl transition-colors backdrop-blur-sm"
            aria-label="Sljedeća"
          >
            ›
          </button>

          {/* Counter */}
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white text-xs font-medium bg-black/45 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {allImages.indexOf(active) + 1} / {allImages.length}
          </div>

          <style>{`
            @keyframes laFade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes laZoom { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
          `}</style>
        </div>,
        document.body,
      )}
    </>
  );
}
