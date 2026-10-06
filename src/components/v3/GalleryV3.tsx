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
  { label: "Poslovni prostori", key: "poslovni" },
];

const PHOTOS: { src: string; cat: string; alt: string }[] = [
  // Stubišta
  { src: "/images/photos/stubiste-lobby.jpg",           cat: "stubiste", alt: "Čist luksuzni ulaz stambene zgrade" },
  { src: "/images/photos/stubiste/ciscenje-stubista-zagreb-ulaz.jpg",        cat: "stubiste", alt: "Čišćenje ulaza stambene zgrade" },
  { src: "/images/photos/stubiste-ulaz-1.jpg",          cat: "stubiste", alt: "Stubište nakon čišćenja" },
  { src: "/images/photos/stubiste/strojno-ciscenje-ulaza-zgrade.jpg",        cat: "stubiste", alt: "Strojno čišćenje stubišta" },
  { src: "/images/photos/stubiste/strojno-pranje-plocica-stubiste.jpg",        cat: "stubiste", alt: "Strojno poliranje poda" },
  { src: "/images/photos/stubiste/stroj-za-ribanje-poda-stubiste.jpg",        cat: "stubiste", alt: "Strojno pranje podova" },
  { src: "/images/services/staircase-real.jpg",         cat: "stubiste", alt: "Čisto stubište stambene zgrade" },
  // Garaže
  { src: "/images/photos/garaza/strojno-pranje-poda-garaze.jpg",          cat: "garaza", alt: "Čišćenje garaže" },
  { src: "/images/photos/garaza/ciscenje-garaze-zagreb-nakon-ribanja.jpg",          cat: "garaza", alt: "Garaža nakon čišćenja" },
  { src: "/images/photos/garaza/ciscenje-paucine-u-garazi.jpg",          cat: "garaza", alt: "Čišćenje stropa garaže" },
  { src: "/images/photos/garaza-prije-poslije.jpg",     cat: "garaza", alt: "Garaža — prije i poslije" },
  // Prozori
  { src: "/images/photos/prozori/pranje-prozora-profesionalno-zagreb.jpg",         cat: "prozori", alt: "Pranje prozora na stambenoj zgradi" },
  { src: "/images/photos/prozori/dizalica-za-pranje-prozora-zagreb.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/pranje-prozora-na-visini-platforma.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/pranje-fasadnog-stakla-dizalica.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/pranje-prozora-visoka-zgrada.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/pranje-prozora-na-visini-zagreb.jpg",         cat: "prozori", alt: "Pranje prozora na visini" },
  { src: "/images/photos/prozori/pranje-prozora-stambena-zgrada.jpg",         cat: "prozori", alt: "Oprani prozori" },
  { src: "/images/photos/prozori/pranje-prozora-detalj-8.jpg",         cat: "prozori", alt: "Prozori prije čišćenja" },
  { src: "/images/photos/prozori/pranje-prozora-detalj-9.jpg",         cat: "prozori", alt: "Prozori poslije čišćenja" },
  { src: "/images/photos/prozori/pranje-prozora-detalj-1.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/pranje-prozora-detalj-2.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/ciscenje-staklenih-povrsina-zagreb.jpg",         cat: "prozori", alt: "Čišćenje prozora" },
  { src: "/images/photos/prozori/pranje-izloga-zagreb.jpg",         cat: "prozori", alt: "Čišćenje prozora" },
  { src: "/images/photos/prozori/pranje-prozora-novotel-zagreb.jpg",         cat: "prozori", alt: "Pranje staklene fasade" },
  { src: "/images/photos/prozori/pranje-prozora-zagreb-1.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/pranje-prozora-zagreb-3.jpg",         cat: "prozori", alt: "Pranje prozora" },
  { src: "/images/photos/prozori/novotel-hotel.jpg",    cat: "prozori", alt: "Novotel Zagreb — pranje staklene fasade" },
  // Izgradnja
  { src: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-prije.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-poslije.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/ciscenje-novogradnje-prije.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/ciscenje-nakon-adaptacije-kafic.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },
  { src: "/images/photos/izgradnja/ciscenje-novogradnje-poslije.jpg",       cat: "izgradnja", alt: "Čišćenje nakon izgradnje" },

  // — Garaže (novo: prije/poslije + stroj na djelu) —
  { src: "/images/photos/garaza/garaza-prije.jpg",          cat: "garaza", alt: "Garaža prije čišćenja — prljav pod i nakupljena prljavština" },
  { src: "/images/photos/garaza/garaza-poslije.jpg",        cat: "garaza", alt: "Garaža poslije strojnog ribanja — čist sjajni pod" },
  { src: "/images/photos/garaza/garaza-prije-2.jpg",        cat: "garaza", alt: "Garaža prije čišćenja — prašina i prljavština na podu" },
  { src: "/images/photos/garaza/garaza-poslije-2.jpg",      cat: "garaza", alt: "Garaža poslije čišćenja — čist pod s jasnim oznakama" },
  { src: "/images/photos/garaza/garaza-prije-3.jpg",        cat: "garaza", alt: "Garažni boks prije čišćenja — lišće i mrlje na pločicama" },
  { src: "/images/photos/garaza/garaza-poslije-3.jpg",      cat: "garaza", alt: "Garažni boks poslije čišćenja — čiste pločice" },
  { src: "/images/photos/garaza/garaza-prije-4.jpg",        cat: "garaza", alt: "Pod garaže prije strojnog pranja" },
  { src: "/images/photos/garaza/garaza-poslije-4.jpg",      cat: "garaza", alt: "Pod garaže poslije strojnog pranja — jasne bijele oznake" },
  { src: "/images/photos/garaza/garaza-rad-1.jpg",          cat: "garaza", alt: "Kärcher stroj za strojno ribanje poda garaže" },
  { src: "/images/photos/garaza/garaza-rad-2.jpg",          cat: "garaza", alt: "Strojno pranje poda garaže s pjenom" },
  { src: "/images/photos/garaza/garaza-rad-3.jpg",          cat: "garaza", alt: "Čišćenje garaže profesionalnim strojem" },
  { src: "/images/photos/garaza/garaza-rad-4.jpg",          cat: "garaza", alt: "Pod garaže prije i poslije ribanja — detalj" },

  // — Nakon izgradnje: Vukovarska 56 (zgrada gradskih ureda) —
  { src: "/images/photos/vukovarska/vukovarska-zgrada.jpg",            cat: "izgradnja", alt: "Zgrada gradskih ureda na Vukovarskoj 56 — čišćenje nakon obnove" },
  { src: "/images/photos/vukovarska/vukovarska-fasada-ljestve.jpg",    cat: "izgradnja", alt: "Pranje prozora na fasadi nakon građevinskih radova" },
  { src: "/images/photos/vukovarska/vukovarska-pranje-stakla.jpg",     cat: "izgradnja", alt: "Uklanjanje zaštitne folije sa staklenih stijena" },
  { src: "/images/photos/vukovarska/vukovarska-strojno-pranje.jpg",    cat: "izgradnja", alt: "Strojno pranje podova nakon izgradnje" },
  { src: "/images/photos/vukovarska/vukovarska-pod-pranje.jpg",        cat: "izgradnja", alt: "Strojno pranje kamenog poda nakon građevinskih radova" },
  { src: "/images/photos/vukovarska/vukovarska-usisavanje.jpg",        cat: "izgradnja", alt: "Uklanjanje građevinske prašine iz ureda" },
  { src: "/images/photos/vukovarska/vukovarska-ograda-staklo.jpg",     cat: "izgradnja", alt: "Čišćenje staklenih ograda i rukohvata" },
  { src: "/images/photos/vukovarska/vukovarska-parket.jpg",            cat: "izgradnja", alt: "Očišćen parket i prozori nakon obnove" },
  { src: "/images/photos/vukovarska/vukovarska-ured.jpg",              cat: "izgradnja", alt: "Uredski prostor spreman za primopredaju" },
  { src: "/images/photos/vukovarska/vukovarska-ured-pod.jpg",          cat: "izgradnja", alt: "Očišćen uredski prostor i podovi nakon radova" },
  { src: "/images/photos/vukovarska/vukovarska-stubiste.jpg",          cat: "izgradnja", alt: "Očišćeno stubište poslovnog objekta" },
  { src: "/images/photos/vukovarska/vukovarska-hodnik.jpg",            cat: "izgradnja", alt: "Očišćen hodnik poslovnog objekta nakon izgradnje" },
  { src: "/images/photos/vukovarska/vukovarska-sanitarije.jpg",        cat: "izgradnja", alt: "Očišćeni sanitarni prostori nakon građevinskih radova" },
  { src: "/images/photos/vukovarska/vukovarska-prozori-interijer.jpg", cat: "izgradnja", alt: "Očišćeni prozori i interijer nakon radova" },
  { src: "/images/photos/vukovarska/vukovarska-fasada-prozori.jpg",    cat: "izgradnja", alt: "Fasada i prozori zgrade nakon čišćenja" },
  { src: "/images/photos/vukovarska/vukovarska-zgrada-fasada.jpg",     cat: "izgradnja", alt: "Zgrada na Vukovarskoj tijekom završnog čišćenja" },
  { src: "/images/photos/vukovarska/vukovarska-nocu.jpg",              cat: "izgradnja", alt: "Poslovna zgrada na Vukovarskoj navečer" },

  // — Stubišta: strojna generalka —
  { src: "/images/photos/stubiste/strojno-stubiste-prije.jpg",   cat: "stubiste", alt: "Stubište prije strojne generalke — mat pločice" },
  { src: "/images/photos/stubiste/strojno-stubiste-poslije.jpg", cat: "stubiste", alt: "Stubište poslije strojne generalke — sjajne pločice" },

  // — Kalea salon namještaja, Family Mall —
  { src: "/images/photos/kalea/kalea-salon-gotovo.jpg",            cat: "poslovni", alt: "Kalea salon namještaja nakon završnog čišćenja — Family Mall Zagreb" },
  { src: "/images/photos/kalea/kalea-izlog-opening-soon.jpg",      cat: "poslovni", alt: "Kalea salon prije otvaranja — priprema prostora nakon renovacije" },
  { src: "/images/photos/kalea/kalea-pranje-izloga.jpg",           cat: "poslovni", alt: "Pranje izloga salona namještaja nakon renovacije" },
  { src: "/images/photos/kalea/kalea-pranje-staklenih-stijena.jpg",cat: "poslovni", alt: "Čišćenje staklenih stijena u trgovačkom prostoru" },
  { src: "/images/photos/kalea/kalea-usisavanje-salona.jpg",       cat: "poslovni", alt: "Usisavanje podova salona namještaja nakon renovacije" },
  { src: "/images/photos/kalea/kalea-ciscenje-polica.jpg",         cat: "poslovni", alt: "Čišćenje polica i vitrina u salonu prije otvaranja" },
  { src: "/images/photos/kalea/kalea-ciscenje-zidnog-panela.jpg",  cat: "poslovni", alt: "Čišćenje dekorativnih zidnih panela u trgovačkom prostoru" },
  { src: "/images/photos/kalea/kalea-ciscenje-spavace-postav.jpg", cat: "poslovni", alt: "Priprema izložbenog postava spavaće sobe — Kalea Zagreb" },
  { src: "/images/photos/kalea/kalea-salon-namjestaj.jpg",         cat: "poslovni", alt: "Kalea salon namještaja nakon čišćenja — Family Mall" },
  { src: "/images/photos/kalea/kalea-salon-fotelje.jpg",           cat: "poslovni", alt: "Izložbeni prostor s foteljama spreman za otvaranje" },
  { src: "/images/photos/kalea/kalea-salon-prolaz.jpg",            cat: "poslovni", alt: "Prolaz salona namještaja nakon završnog čišćenja" },

  // — Kalea, Sajam namještaja i dizajna (Arena Zagreb) —
  { src: "/images/photos/kalea-sajam/kalea-sajam-ulaz-stand.jpg",      cat: "poslovni", alt: "Ulaz u Kalea izložbeni štand — Sajam namještaja i dizajna, Arena Zagreb" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-prije-ciscenja.jpg",  cat: "poslovni", alt: "Sajamski štand prije čišćenja — ambalaža nakon montaže" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ekipa-ljestve.jpg",   cat: "poslovni", alt: "Pro Clean ekipa čisti sajamski štand nakon montaže" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-montaza-ciscenje.jpg",cat: "poslovni", alt: "Čišćenje zidnih panela izložbenog štanda na visini" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-zida.jpg",   cat: "poslovni", alt: "Čišćenje brendiranog zida štanda s osvijetljenim natpisom" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-natpisa.jpg",cat: "poslovni", alt: "Čišćenje osvijetljenog KALEA natpisa na sajamskom štandu" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-panela.jpg", cat: "poslovni", alt: "Čišćenje dekorativnih panela izložbenog prostora" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-ormara.jpg", cat: "poslovni", alt: "Čišćenje izložbenog namještaja na sajmu" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-stand-police.jpg",    cat: "poslovni", alt: "Kalea štand s osvijetljenim policama nakon čišćenja" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-stand-gotovo.jpg",    cat: "poslovni", alt: "Gotov Kalea izložbeni štand spreman za otvaranje sajma" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg",         cat: "poslovni", alt: "Kalea štand s osvijetljenim policama i KALEA natpisom — Arena Zagreb" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-blagovaonica.jpg",    cat: "poslovni", alt: "Čišćenje izložbenog štanda prije otvaranja sajma" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-postav.jpg",          cat: "poslovni", alt: "Kalea izložbeni postav na Sajmu namještaja i dizajna" },
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
