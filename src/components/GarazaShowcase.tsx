"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Ctx = { open: (index: number) => void };
const LightboxCtx = createContext<Ctx | null>(null);

function useLightbox() {
  const c = useContext(LightboxCtx);
  if (!c) throw new Error("useLightbox must be used within GarazaShowcaseProvider");
  return c;
}

/**
 * Provider holds the full ordered image list and a single lightbox overlay.
 * Both the before/after grid and the work gallery open into the same list,
 * so navigating past the 4th before/after image continues into the gallery
 * (and loops back), as if they were one joined set.
 */
export function GarazaShowcaseProvider({
  images,
  children,
}: {
  images: string[];
  children: ReactNode;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const open = useCallback((i: number) => setActive(i), []);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}

      {mounted &&
        active !== null &&
        createPortal(
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
              src={images[active]}
              alt="Povećana slika garaže"
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full max-h-full w-auto h-auto object-contain rounded-2xl sm:rounded-[28px] ring-1 ring-white/60 shadow-[0_24px_80px_rgba(37,99,235,0.45)] animate-[laZoom_220ms_ease-out]"
            />

            <button
              onClick={close}
              className="fixed top-4 right-4 h-11 w-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-sm"
              aria-label="Zatvori"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="fixed left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center text-2xl transition-colors backdrop-blur-sm"
              aria-label="Prethodna"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="fixed right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center text-2xl transition-colors backdrop-blur-sm"
              aria-label="Sljedeća"
            >
              ›
            </button>
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white text-xs font-medium bg-black/45 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {active + 1} / {images.length}
            </div>

            <style>{`
              @keyframes laFade { from { opacity: 0; } to { opacity: 1; } }
              @keyframes laZoom { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
            `}</style>
          </div>,
          document.body,
        )}
    </LightboxCtx.Provider>
  );
}

/* ── Before/after joined pairs (white divider in the middle) ── */
export function BeforeAfterGrid({
  pairs,
  startIndex = 0,
}: {
  pairs: { before: string; after: string }[];
  startIndex?: number;
}) {
  const { open } = useLightbox();
  return (
    <>
      {pairs.map((pair, p) => {
        const beforeIdx = startIndex + p * 2;
        const afterIdx = beforeIdx + 1;
        return (
          <div
            key={pair.before}
            className={`relative flex aspect-[3/2] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-xl shadow-black/10 border border-gray-100${p > 0 ? " mt-2.5 sm:mt-4" : ""}`}
            style={{ transform: "translateZ(0)" }}
          >
            <button
              type="button"
              onClick={() => open(beforeIdx)}
              className="relative flex-1 cursor-zoom-in group focus:outline-none"
              aria-label="Povećaj sliku — prije"
            >
              <Image
                src={pair.before}
                alt="Garaža prije čišćenja — Pro Clean Zagreb"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width:640px) 50vw, 50vw"
              />
              <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                Prije
              </span>
            </button>

            <button
              type="button"
              onClick={() => open(afterIdx)}
              className="relative flex-1 cursor-zoom-in group focus:outline-none"
              aria-label="Povećaj sliku — poslije"
            >
              <Image
                src={pair.after}
                alt="Garaža poslije čišćenja — Pro Clean Zagreb"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width:640px) 50vw, 50vw"
              />
              <span className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 px-2.5 py-1 rounded-full bg-[#3B82F6] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                Poslije
              </span>
            </button>

            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] sm:w-1 bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] z-10 pointer-events-none" />
          </div>
        );
      })}
    </>
  );
}

/* ── Work gallery (clickable, continues the same lightbox set) ── */
export function WorkGallery({
  images,
  startIndex,
}: {
  images: { src: string; alt: string }[];
  startIndex: number;
}) {
  const { open } = useLightbox();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
      {images.map((img, i) => (
        <button
          key={img.src}
          type="button"
          onClick={() => open(startIndex + i)}
          className="relative aspect-[3/4] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-xl shadow-black/10 border border-gray-100 group cursor-zoom-in focus:outline-none"
          aria-label="Povećaj sliku"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width:1024px) 25vw, 50vw"
          />
        </button>
      ))}
    </div>
  );
}
