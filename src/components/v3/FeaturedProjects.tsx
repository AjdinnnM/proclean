"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  client: string;
  badge: string;
  period: string;
  cover: string;
  href: string;
  summary: string;
  stats: { value: string; label: string }[];
  scope: string[];
  gallery: { src: string; alt: string }[];
};

const PROJECTS: Project[] = [
  {
    slug: "vukovarska-56",
    title: "Ulica grada Vukovara 56",
    client: "Zgrada gradskih ureda Grada Zagreba · izvođač Mekatronik",
    badge: "Čišćenje nakon izgradnje",
    period: "Srpanj 2026.",
    cover: "/images/photos/vukovarska/vukovarska-zgrada.jpg",
    href: "/reference/vukovarska-56",
    summary:
      "Zgrada gradskih ureda Grada Zagreba na Vukovarskoj 56–60 (poznata i kao zgrada katastra) prošla je obnovu financiranu EU sredstvima. Glavni izvođač bio je Mekatronik, a Pro Clean je odradio završno čišćenje nakon građevinskih radova — približno 10.000 m² pripremljeno za ponovno korištenje u samo 8 dana.",
    stats: [
      { value: "10.000 m²", label: "očišćene površine" },
      { value: "8 dana", label: "rok izvedbe" },
      { value: "Sve etaže", label: "kompletan objekt" },
    ],
    scope: [
      "Uklanjanje građevinske prašine sa svih površina",
      "Skidanje ljepila i ostataka traka s podova i stepenica",
      "Strojno i ručno pranje svih podnih površina",
      "Uklanjanje zaštitnih folija sa staklenih stijena",
      "Pranje prozora s obje strane, okviri i klupčice",
      "Vrata, zidne obloge i sanitarni čvorovi",
      "Dizala, rukohvati i ograde",
      "Završno fino čišćenje i priprema za primopredaju",
    ],
    gallery: [
      { src: "/images/photos/vukovarska/vukovarska-zgrada.jpg", alt: "Poslovni objekt na Ulici grada Vukovara 56 — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-fasada-ljestve.jpg", alt: "Pranje prozora na fasadi poslovne zgrade — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-pranje-stakla.jpg", alt: "Uklanjanje zaštitne folije i pranje staklenih stijena — Pro Clean" },
      { src: "/images/photos/vukovarska/vukovarska-strojno-pranje.jpg", alt: "Strojno pranje podova nakon izgradnje — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-usisavanje.jpg", alt: "Usisavanje građevinske prašine u uredu — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-parket.jpg", alt: "Očišćen parket i prozori nakon izgradnje — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-ured.jpg", alt: "Čist uredski prostor spreman za primopredaju — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-stubiste.jpg", alt: "Očišćeno stubište i podovi poslovnog objekta — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-sanitarije.jpg", alt: "Očišćeni sanitarni čvorovi nakon izgradnje — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-nocu.jpg", alt: "Poslovna zgrada na Vukovarskoj navečer — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-fasada-prozori.jpg", alt: "Fasada i prozori zgrade na Vukovarskoj 56 nakon čišćenja — Pro Clean Zagreb" },
      { src: "/images/photos/vukovarska/vukovarska-pod-pranje.jpg", alt: "Strojno pranje kamenog poda nakon izgradnje — Pro Clean Zagreb" },
    ],
  },
  {
    slug: "kalea-family-mall",
    title: "Kalea — Family Mall",
    client: "Prvi Kalea salon namještaja u Hrvatskoj",
    badge: "Čišćenje nakon renovacije",
    period: "Family Mall, Zagreb",
    cover: "/images/photos/kalea/kalea-salon-gotovo.jpg",
    href: "/reference/kalea-family-mall",
    summary:
      "Kalea je otvorila svoj prvi salon namještaja u Hrvatskoj u zagrebačkom Family Mallu. Nakon renovacije prostora Pro Clean je odradio završno čišćenje i pripremio salon za otvaranje — od skidanja zaštitnih folija do pranja izloga i izložbenih postava. Pro Clean je glavni partner Kalee za Hrvatsku.",
    stats: [
      { value: "1. u HR", label: "prvi Kalea salon" },
      { value: "Family Mall", label: "lokacija" },
      { value: "Partner", label: "glavni za Hrvatsku" },
    ],
    scope: [
      "Uklanjanje zaštitnih folija i ostataka ljepila",
      "Pranje izloga i staklenih stijena s obje strane",
      "Čišćenje zidnih panela i dekorativnih obloga",
      "Usisavanje i pranje podova cijelog salona",
      "Čišćenje polica, vitrina i izložbenih postava",
      "Završno fino čišćenje prije otvaranja",
    ],
    gallery: [
      { src: "/images/photos/kalea/kalea-salon-gotovo.jpg", alt: "Kalea salon namještaja nakon završnog čišćenja — Family Mall Zagreb" },
      { src: "/images/photos/kalea/kalea-izlog-opening-soon.jpg", alt: "Kalea salon prije otvaranja — priprema prostora" },
      { src: "/images/photos/kalea/kalea-pranje-izloga.jpg", alt: "Pranje izloga salona namještaja nakon renovacije" },
      { src: "/images/photos/kalea/kalea-usisavanje-salona.jpg", alt: "Usisavanje podova salona nakon renovacije" },
      { src: "/images/photos/kalea/kalea-ciscenje-polica.jpg", alt: "Čišćenje polica i vitrina prije otvaranja" },
      { src: "/images/photos/kalea/kalea-ciscenje-zidnog-panela.jpg", alt: "Čišćenje dekorativnih zidnih panela" },
      { src: "/images/photos/kalea/kalea-salon-fotelje.jpg", alt: "Izložbeni prostor spreman za otvaranje" },
      { src: "/images/photos/kalea/kalea-salon-prolaz.jpg", alt: "Prolaz salona namještaja nakon čišćenja" },
    ],
  },
  {
    slug: "kalea-sajam-arena",
    title: "Kalea — Sajam namještaja i dizajna",
    client: "Izložbeni štand, Arena Zagreb",
    badge: "Čišćenje sajamskog štanda",
    period: "Noćne smjene",
    cover: "/images/photos/kalea-sajam/kalea-sajam-ulaz-stand.jpg",
    href: "/reference/kalea-sajam-arena",
    summary:
      "Kalea je nastupila na Sajmu namještaja i dizajna u Areni Zagreb. Pro Clean je odradio čišćenje i pripremu izložbenog štanda nakon montaže — u noćnim smjenama, usklađeno s montažerima, da štand bude besprijekoran prije otvaranja vrata posjetiteljima.",
    stats: [
      { value: "Noćne smjene", label: "rad do otvaranja" },
      { value: "Arena Zagreb", label: "lokacija sajma" },
      { value: "Sajam", label: "namještaj i dizajn" },
    ],
    scope: [
      "Čišćenje nakon montaže izložbenog štanda",
      "Uklanjanje ambalaže, folija i ostataka materijala",
      "Čišćenje zidnih panela i brendiranih obloga",
      "Čišćenje osvijetljenih natpisa i dekoracija",
      "Pranje i poliranje izložbenog namještaja",
      "Završno fino čišćenje prije otvaranja sajma",
    ],
    gallery: [
      { src: "/images/photos/kalea-sajam/kalea-sajam-stand-police.jpg", alt: "Kalea štand s osvijetljenim policama nakon čišćenja" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-prije-ciscenja.jpg", alt: "Štand prije čišćenja — ambalaža nakon montaže" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-ekipa-ljestve.jpg", alt: "Pro Clean ekipa čisti sajamski štand" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-zida.jpg", alt: "Čišćenje brendiranog zida štanda" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-natpisa.jpg", alt: "Čišćenje osvijetljenog KALEA natpisa" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-stand-gotovo.jpg", alt: "Gotov izložbeni štand spreman za sajam" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg", alt: "Izložbena kuhinja nakon završnog čišćenja" },
      { src: "/images/photos/kalea-sajam/kalea-sajam-blagovaonica.jpg", alt: "Izložbeni postav spreman za posjetitelje" },
    ],
  },
];

export function FeaturedProjects() {
  const [active, setActive] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="bg-[#FAFAF7] py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">
            Istaknuti projekti
          </p>
          <h2
            className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Projekti koji <span className="italic font-normal text-[#3B82F6]">govore za nas.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setActive(p)}
              className="group text-left rounded-[20px] overflow-hidden border border-black/5 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="font-semibold text-[#0A0A0A] text-[18px] tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] mb-3">{p.client}</p>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#3B82F6] group-hover:gap-3 transition-all">
                  Pogledaj projekt
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {mounted &&
        active &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-0 sm:p-6 backdrop-blur-2xl overflow-y-auto animate-[fpFade_180ms_ease-out]"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.30) 0%, rgba(241,245,249,0.60) 50%, rgba(96,165,250,0.28) 100%)",
            }}
            onClick={close}
          >
            <div
              className="relative w-full max-w-3xl bg-white sm:rounded-[24px] shadow-2xl my-0 sm:my-6 animate-[fpZoom_220ms_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                aria-label="Zatvori"
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center text-lg transition-colors backdrop-blur-sm"
              >
                ✕
              </button>

              <div className="relative aspect-[16/9] sm:rounded-t-[24px] overflow-hidden">
                <Image src={active.cover} alt={active.title} fill className="object-cover" sizes="(min-width:640px) 768px, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-2">
                    {active.badge}
                  </span>
                  <h3
                    className="text-white font-semibold text-[24px] sm:text-[30px] leading-tight"
                    style={{ fontFamily: "var(--font-v3-display)" }}
                  >
                    {active.title}
                  </h3>
                  <p className="text-white/75 text-[13px] mt-1">
                    {active.client} · {active.period}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {active.stats.map((st) => (
                    <div key={st.label} className="bg-[#FAFAF7] rounded-[14px] border border-black/5 px-3 py-4 text-center">
                      <div
                        className="text-[#3B82F6] font-semibold text-[17px] sm:text-[22px] leading-none"
                        style={{ fontFamily: "var(--font-v3-display)" }}
                      >
                        {st.value}
                      </div>
                      <div className="text-[10.5px] sm:text-[12px] text-[#6B7280] mt-1.5">{st.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#3F3F3F] leading-[1.7] mb-6">{active.summary}</p>

                <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">
                  Opseg radova
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                  {active.scope.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-[13.5px] text-[#3F3F3F] leading-[1.5]">
                      <span className="mt-0.5 h-4 w-4 rounded-full bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>

                <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">
                  Galerija
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {active.gallery.map((img) => (
                    <div
                      key={img.src}
                      className="relative aspect-[4/3] rounded-[12px] overflow-hidden border border-gray-100"
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width:640px) 25vw, 50vw" />
                    </div>
                  ))}
                </div>

                <Link
                  href={active.href}
                  className="mt-7 inline-flex items-center gap-2 bg-[#3B82F6] text-white font-medium px-6 py-3.5 rounded-full hover:bg-[#2563EB] active:scale-[0.98] transition-all text-[14px] shadow-lg"
                >
                  Pogledaj cijeli projekt
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <style>{`
              @keyframes fpFade { from { opacity: 0 } to { opacity: 1 } }
              @keyframes fpZoom { from { opacity: 0; transform: scale(0.97) } to { opacity: 1; transform: scale(1) } }
            `}</style>
          </div>,
          document.body,
        )}
    </section>
  );
}
