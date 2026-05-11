"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

function BeforeAfter({ before, after, alt, afterObjectPosition = "center" }: { before: string; after: string; alt: string; afterObjectPosition?: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl select-none cursor-ew-resize ring-1 ring-black/5 soft-shadow touch-none"
      onMouseDown={(e) => {
        setDragging(true);
        handleMove(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging) handleMove(e.clientX);
      }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => {
        setDragging(true);
        if (e.touches[0]) handleMove(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (dragging && e.touches[0]) handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={() => setDragging(false)}
    >
      {/* After image — full card size */}
      <Image
        src={after}
        alt={`${alt} — poslije`}
        fill
        className="object-cover pointer-events-none"
        style={{ objectPosition: afterObjectPosition }}
        sizes="(min-width: 1024px) 560px, 100vw"
      />

      {/* Before image — also full card size, but clipped so only the
          portion to the left of the handle shows. Because the image still
          renders at full card dimensions, it's never zoomed in — only
          revealed/hidden. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} — prije`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 pointer-events-none"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg ring-1 ring-black/10 flex items-center justify-center">
          <span className="font-bold text-[var(--color-brand-700)] text-xs">↔</span>
        </div>
      </div>

      <span className="absolute top-3 left-3 rounded-full bg-black/70 text-white text-xs font-semibold px-3 py-1 backdrop-blur-sm pointer-events-none">
        Prije
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-[var(--color-brand-600)] text-white text-xs font-semibold px-3 py-1 pointer-events-none">
        Poslije
      </span>
    </div>
  );
}

export function Gallery() {
  const { gallery } = site;
  return (
    <section id="galerija" className="section-padding bg-white">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            {gallery.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {gallery.heading}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {gallery.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.items.map((item, i) => {
            return (
              <Reveal key={i} delay={i * 120}>
                <div className="flex flex-col gap-4">
                  <BeforeAfter before={item.before} after={item.after} alt={item.title} afterObjectPosition={item.afterObjectPosition} />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          Klikni i povuci klizač lijevo–desno da vidiš razliku.
        </div>
      </div>
    </section>
  );
}
