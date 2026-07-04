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

type Ctx = { images: string[]; openSrc: (src: string) => void };
const LightboxCtx = createContext<Ctx | null>(null);

/**
 * Generic, reusable image lightbox.
 *
 * - Wrap a region in <LightboxProvider images={[...all srcs in display order]}>.
 * - Render each clickable image with <ZoomImage src=... />.
 * - Or use <PhotoGallery images={[...]} /> for a ready-made clickable grid.
 *
 * Same look as the garage showcase: blurred blue-white backdrop, rounded image
 * with padding, blue glow, looping prev/next, ESC / click-out to close.
 */
export function LightboxProvider({
  images,
  children,
}: {
  images: string[];
  children: ReactNode;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const openSrc = useCallback(
    (src: string) => {
      const i = images.indexOf(src);
      if (i >= 0) setActive(i);
    },
    [images],
  );
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
    <LightboxCtx.Provider value={{ images, openSrc }}>
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
              alt="Povećana slika"
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

/** A single click-to-zoom image. Renders the sized container itself (use `className`). */
export function ZoomImage({
  src,
  alt,
  sizes,
  priority,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** container/button classes — sizing, aspect, rounded, overflow, etc. */
  className?: string;
  /** image classes — object-cover, transitions, etc. */
  imgClassName?: string;
}) {
  const ctx = useContext(LightboxCtx);
  return (
    <button
      type="button"
      onClick={() => ctx?.openSrc(src)}
      aria-label="Povećaj sliku"
      className={`relative cursor-zoom-in group focus:outline-none ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName ?? ""}`}
      />
    </button>
  );
}

/** Ready-made clickable photo grid with its own lightbox. */
export function PhotoGallery({
  images,
  columns = "grid-cols-2 lg:grid-cols-4",
  aspect = "aspect-[3/4]",
}: {
  images: { src: string; alt: string }[];
  columns?: string;
  aspect?: string;
}) {
  return (
    <LightboxProvider images={images.map((i) => i.src)}>
      <div className={`grid ${columns} gap-2.5 sm:gap-4`}>
        {images.map((img) => (
          <ZoomImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            sizes="(min-width:1024px) 25vw, 50vw"
            className={`${aspect} rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-xl shadow-black/10 border border-gray-100`}
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
        ))}
      </div>
    </LightboxProvider>
  );
}
