import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cvjećarna Skrinjarić — Generalno čišćenje nakon evenata | Pro Clean Zagreb",
  description:
    "Pro Clean obavlja generalno čišćenje prostora Cvjećarne Skrinjarić u Zagrebu nakon velikih evenata, vjenčanja i sezonskih akcija. Pouzdana suradnja.",
  alternates: { canonical: "https://proclean.hr/reference/cvjecarna-skrinjaric" },
  openGraph: {
    title: "Cvjećarna Skrinjarić — Referenca | Pro Clean Zagreb",
    description: "Generalno čišćenje Cvjećarne Skrinjarić nakon velikih evenata i sezonskih akcija.",
    url: "https://proclean.hr/reference/cvjecarna-skrinjaric",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://proclean.hr/images/reference/cvjecarna-skrinjaric.jpg", width: 1200, height: 630, alt: "Cvjećarna Skrinjarić — Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cvjećarna Skrinjarić — referenca Pro Clean Zagreb",
  description: "Pro Clean čisti prostor Cvjećarne Skrinjarić u Zagrebu nakon velikih evenata, vjenčanja i sezonskih akcija.",
  author: { "@type": "Organization", name: "Pro Clean", url: "https://proclean.hr" },
  image: "https://proclean.hr/images/reference/cvjecarna-skrinjaric.jpg",
};

const HIGHLIGHTS = [
  {
    n: "01",
    title: "Nakon velikih evenata",
    desc: "Vjenčanja, krštenja, sahrane, korporativna otvorenja — čistimo prostor nakon velikih cvjetnih aranžmana, listova, vode i propalih latica.",
  },
  {
    n: "02",
    title: "Sezonski špicevi",
    desc: "Valentinovo, Majčin dan, Dan zaljubljenih, blagdani — kad obujam posla eksplodira, mi dolazimo da prostor uvijek bude besprijekoran.",
  },
  {
    n: "03",
    title: "Generalno čišćenje",
    desc: "Jednokratno dubinsko čišćenje cijelog prostora — izlozi, podovi, frižideri, vlažni prostori za cvijeće i sanitarije.",
  },
];

const SPECIFICITY = [
  "Vlažni prostori za čuvanje cvijeća — bez kvarova i klizavih podova",
  "Listovi, latice i biljni ostaci — temeljito skupljanje i odvoz",
  "Frižideri za cvijeće — vanjsko i unutarnje čišćenje",
  "Stakla izloga — bez tragova vode, otisaka prstiju i prašine",
  "Tvrde mrlje od vode i biljnih sokova — profesionalna sredstva",
  "Sanitarije i prostor za zaposlenike — temeljita čistoća",
  "Vanjski ulaz i fasada izloga — sjajan dojam s ulice",
  "Sve usklađeno s radnim vremenom — bez ometanja prodaje",
];

export default function CvjecarnaSkrinjaricReferencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#FAFAF7] pt-8 pb-0">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
            <Link href="/" className="hover:text-[#3B82F6] transition-colors">Pro Clean</Link>
            {" › "}
            <Link href="/usluge/poslovni-prostori" className="hover:text-[#3B82F6] transition-colors">Poslovni prostori</Link>
            {" › "}
            <span>Cvjećarna Skrinjarić</span>
          </p>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/8", minHeight: "220px" }}>
        <Image
          src="/images/reference/cvjecarna-skrinjaric.jpg"
          alt="Cvjećarna Skrinjarić — Pro Clean Zagreb"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-5 pb-8 md:pb-14">
          <span className="inline-flex items-center gap-2 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
            Referenca
          </span>
          <h1 className="font-extrabold text-white text-xl sm:text-3xl md:text-5xl xl:text-[52px] leading-tight tracking-tight max-w-3xl" style={{ fontFamily: "var(--font-v3-display)" }}>
            Cvjećarna Skrinjarić —<br className="hidden sm:block" /> čišćenje nakon evenata
          </h1>

          {/* Animated shine on title */}
          <div aria-hidden className="absolute bottom-8 left-5 right-5 pointer-events-none overflow-hidden" />
        </div>
      </section>

      {/* ── UVOD ── */}
      <section className="bg-[#FAFAF7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Sidebar */}
            <div className="lg:order-2">
              <Reveal variant="up">
                <div className="bg-white rounded-[20px] p-7 border border-gray-100 shadow-sm sticky top-24">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5">O projektu</p>
                  <dl className="space-y-4">
                    {[
                      { label: "Klijent", value: "Cvjećarna Skrinjarić" },
                      { label: "Lokacija", value: "Zagreb" },
                      { label: "Vrsta posla", value: "Generalno čišćenje" },
                      { label: "Kada", value: "Nakon evenata · sezonski" },
                      { label: "Učestalost", value: "Po pozivu" },
                    ].map((item) => (
                      <div key={item.label} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <dt className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</dt>
                        <dd className="text-sm font-bold text-[#0A0A0A]">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href="/kontakt" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-medium px-6 py-3.5 rounded-full hover:bg-[#2563EB] transition-all text-sm">
                    Tražite sličnu suradnju? →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Tekst */}
            <div className="lg:col-span-2 lg:order-1">
              <Reveal variant="up">
                <p className="text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.18em] mb-4">O projektu</p>
                <h2 className="font-extrabold text-[#0A0A0A] text-2xl md:text-3xl tracking-tight mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Cvjećarna nakon velikog dana — generalno čišćenje koje vraća sjaj
                </h2>
              </Reveal>

              <div className="space-y-5 text-gray-500 text-base leading-relaxed">
                <Reveal variant="up" delay={100}>
                  <p>
                    <strong className="text-[#0A0A0A]">Cvjećarna Skrinjarić</strong> jedan je od naših klijenata
                    za kojeg redovito obavljamo generalno čišćenje — najčešće nakon velikih akcija oko
                    Valentinova, Majčinog dana, vjenčanja i drugih evenata koji zahtijevaju cvjetne aranžmane velikih razmjera.
                  </p>
                </Reveal>

                <Reveal variant="up" delay={200}>
                  <p>
                    Čišćenje cvjećarne nije isto što i čišćenje običnog dućana. Prostor je <strong className="text-[#0A0A0A]">stalno vlažan</strong> jer
                    cvijeće zahtijeva vodu — što znači klizavi podovi, biljni ostaci, mokri ručnici, zaprljani frižideri
                    i izlozi koji se brzo izmagle. Naš tim zna kako pristupiti svakom od ovih problema bez oštećivanja
                    osjetljivih biljaka ili prekidanja prodaje.
                  </p>
                </Reveal>

                <Reveal variant="up" delay={300}>
                  <p>
                    Nakon <strong className="text-[#0A0A0A]">velikog evenata</strong> dolazimo u dogovoreni termin i radimo
                    generalno: skupljamo latice i listove, peremo podove, brišemo izloge, frižidere, sanitarije
                    i iznosimo otpad. Cilj je da prostor sutradan izgleda kao da nije bilo velikih akcija.
                  </p>
                </Reveal>

                <Reveal variant="up" delay={400}>
                  <p>
                    Cvjećarna Skrinjarić jedna je od referenci koje pokazuju <strong className="text-[#0A0A0A]">što Pro Clean nudi poslovnim klijentima</strong>:
                    fleksibilne termine, profesionalnu opremu i temeljito generalno čišćenje prilagođeno specifičnom prostoru.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS — kada dolazimo ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Kada dolazimo</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Tri scenarija —<br />
              <span className="italic font-normal text-[#3B82F6]">jedan standard.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.n} delay={i * 120} variant="up">
                <div className="group bg-[#FAFAF7] rounded-[20px] p-7 lg:p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-[#BFDBFE]/60 hover:bg-white transition-all duration-500 h-full cursor-default relative overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute -inset-y-8 -left-1/4 w-1/3 pointer-events-none opacity-0 group-hover:opacity-100 z-0"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(59,130,246,0.08) 50%, transparent 70%)",
                      transform: "skewX(-12deg) translateX(-100%)",
                      animation: "cv-shine 1.2s cubic-bezier(0.65,0,0.35,1)",
                    }}
                  />
                  <div className="relative">
                    <div className="font-extrabold text-6xl text-[#DBEAFE] group-hover:text-[#93C5FD] leading-none mb-4 select-none transition-colors duration-300">{h.n}</div>
                    <h3 className="font-extrabold text-[#0A0A0A] text-lg leading-snug mb-3">{h.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@keyframes cv-shine { 0% { transform: skewX(-12deg) translateX(-100%) } 100% { transform: skewX(-12deg) translateX(700%) } }`}</style>
        </div>
      </section>

      {/* ── SPECIFICITY — što čistimo specifično ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Specifičnosti</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Cvjećarna je —<br />
              <span className="italic font-normal text-[#3B82F6]">poseban tip prostora.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#3F3F3F] leading-[1.6]">
              Vlažni podovi, biljni ostaci, frižideri i osjetljivi izlozi. Sve to znamo iz iskustva.
            </p>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3.5">
              {SPECIFICITY.map((item, i) => (
                <Reveal key={item} delay={i * 70} variant="left">
                  <li className="group flex items-start gap-4 bg-white border border-gray-100 rounded-[16px] p-5 hover:border-[#BFDBFE]/60 hover:shadow-md transition-all">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-[14px] lg:text-[15px] text-[#0A0A0A] font-medium leading-[1.5]">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GALERIJA ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-10 lg:mb-12 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Galerija</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Prostor i izlog —<br />
              <span className="italic font-normal text-[#3B82F6]">uvijek besprijekorno.</span>
            </h2>
          </Reveal>

          {/* Featured large image */}
          <Reveal variant="up" className="mb-4 lg:mb-6 max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-xl border border-gray-100 group">
              <Image
                src="/images/reference/cvjecarna-skrinjaric.jpg"
                alt="Cvjećarna Skrinjarić — vanjski izlog"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-5 left-5 text-white text-[13px] font-semibold uppercase tracking-[0.14em]">
                Vanjski izlog
              </span>
            </div>
          </Reveal>

          {/* 3-col grid for remaining photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 max-w-5xl mx-auto">
            {[
              { src: "/images/reference/cvjecarna-skrinjaric-izlog.jpg", label: "Stakla · izlog" },
              { src: "/images/reference/skrinjaric-img_6279.jpg", label: "Prostor" },
              { src: "/images/reference/skrinjaric-img_6293.jpg", label: "Aranžman" },
              { src: "/images/reference/skrinjaric-img_6309.jpg", label: "Cvijeće" },
              { src: "/images/reference/skrinjaric-img_6310.jpg", label: "Detalj" },
              { src: "/images/reference/skrinjaric-img_6892.jpg", label: "Interijer" },
              { src: "/images/reference/skrinjaric-img_6902.jpg", label: "Frižider · cvijeće" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 60} variant={i % 2 === 0 ? "left" : "right"}>
                <div className="relative aspect-square rounded-[16px] overflow-hidden shadow-md border border-gray-100 group cursor-default">
                  <Image
                    src={img.src}
                    alt={`Cvjećarna Skrinjarić — ${img.label}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 768px) 340px, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-semibold uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {img.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST QUOTE ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal variant="up">
            <span className="inline-block text-[80px] leading-none text-[#3B82F6]/20 font-serif select-none mb-2" style={{ fontFamily: "var(--font-v3-display)" }}>
              &ldquo;
            </span>
            <p className="font-semibold text-[#0A0A0A] text-[22px] lg:text-[28px] leading-[1.35] tracking-[-0.015em] mb-8" style={{ fontFamily: "var(--font-v3-display)" }}>
              Pro Clean nam vraća prostor u red nakon najvećih akcija.
              Ne moramo razmišljati o čišćenju, samo o cvijeću.
            </p>
            <div className="inline-flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6] font-bold text-sm">CS</span>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0A0A0A]">Cvjećarna Skrinjarić</p>
                <p className="text-xs text-gray-400">Zagreb · klijent Pro Clean</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5">Zatraži ponudu</p>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-4" style={{ fontFamily: "var(--font-v3-display)" }}>
            Trebate generalno čišćenje?<br />
            <span className="text-[#3B82F6] italic font-normal">Javite nam.</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.65] max-w-[500px] mx-auto mb-10">
            Generalno čišćenje cvjećarni, kafića, restorana, ureda i drugih poslovnih prostora u Zagrebu.
            Kontaktirajte nas i dogovorimo termin za pregled.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/kontakt" className="group inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-medium px-7 py-4 rounded-full text-[15px] hover:bg-[#2563EB] transition-all shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)]">
              Zatraži besplatnu ponudu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:+385994840416" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-medium px-7 py-4 rounded-full text-[15px] border border-black/10 hover:border-[#3B82F6]/40 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              099 484 0416
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
