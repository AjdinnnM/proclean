import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhotoGallery } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { AnimatedStats, type Stat } from "@/components/v3/AnimatedStats";

export const metadata: Metadata = {
  title: "Čišćenje sajamskog štanda — Kalea, Sajam namještaja i dizajna, Arena Zagreb | Pro Clean",
  description:
    "Pro Clean je pripremio Kalea izložbeni štand za Sajam namještaja i dizajna u Areni Zagreb — čišćenje nakon montaže štanda, u noćnim smjenama, do otvaranja sajma.",
  keywords: [
    "čišćenje sajamskog štanda",
    "čišćenje nakon montaže štanda",
    "priprema štanda za sajam Zagreb",
    "čišćenje sajma Zagreb",
    "čišćenje izložbenog prostora",
    "čišćenje nakon eventa Zagreb",
    "noćno čišćenje poslovnih prostora",
    "Sajam namještaja i dizajna Zagreb",
    "Arena Zagreb",
    "Pro Clean Zagreb",
  ],
  alternates: { canonical: "https://www.procleanzg.com/reference/kalea-sajam-arena" },
  openGraph: {
    title: "Kalea na Sajmu namještaja i dizajna — čišćenje štanda | Pro Clean",
    description:
      "Priprema Kalea izložbenog štanda za sajam u Areni Zagreb — čišćenje nakon montaže, noćne smjene.",
    url: "https://www.procleanzg.com/reference/kalea-sajam-arena",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "article",
    images: [
      {
        url: "https://www.procleanzg.com/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg",
        width: 1200,
        height: 630,
        alt: "Kalea izložbeni štand na Sajmu namještaja i dizajna — Pro Clean Zagreb",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kalea na Sajmu namještaja i dizajna — čišćenje i priprema izložbenog štanda",
  description:
    "Pro Clean je odradio čišćenje Kalea izložbenog štanda nakon montaže, u noćnim smjenama, za Sajam namještaja i dizajna u Areni Zagreb u Zagrebu.",
  author: { "@type": "Organization", name: "Pro Clean", url: "https://www.procleanzg.com" },
  publisher: { "@type": "Organization", name: "Pro Clean", url: "https://www.procleanzg.com" },
  image: "https://www.procleanzg.com/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg",
  about: {
    "@type": "Event",
    name: "Sajam namještaja i dizajna",
    location: { "@type": "Place", name: "Arena Zagreb", address: { "@type": "PostalAddress", addressLocality: "Zagreb", addressCountry: "HR" } },
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Pro Clean", item: "https://www.procleanzg.com" },
    { "@type": "ListItem", position: 2, name: "Generalno čišćenje", item: "https://www.procleanzg.com/usluge/poslovni-prostori" },
    { "@type": "ListItem", position: 3, name: "Kalea — Sajam namještaja i dizajna", item: "https://www.procleanzg.com/reference/kalea-sajam-arena" },
  ],
};

const STATS: Stat[] = [
  { text: "Noćne smjene", label: "rad do otvaranja" },
  { text: "Arena Zagreb", label: "lokacija sajma" },
  { text: "Sajam", label: "namještaj i dizajn" },
];

const SCOPE = [
  "Čišćenje nakon montaže izložbenog štanda",
  "Uklanjanje ambalaže, folija i ostataka materijala",
  "Čišćenje zidnih panela i brendiranih obloga",
  "Čišćenje osvijetljenih natpisa i dekorativnih elemenata",
  "Pranje i poliranje izložbenog namještaja",
  "Usisavanje i pranje podova štanda",
  "Završno fino čišćenje prije otvaranja sajma",
];

const GALLERY = [
  { src: "/images/photos/kalea-sajam/kalea-sajam-ulaz-stand.jpg", alt: "Ulaz u Kalea izložbeni štand na sajmu namještaja — Arena Zagreb" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-prije-ciscenja.jpg", alt: "Štand prije čišćenja — ambalaža i ostaci nakon montaže" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ekipa-ljestve.jpg", alt: "Pro Clean ekipa čisti sajamski štand nakon montaže" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-montaza-ciscenje.jpg", alt: "Čišćenje zidnih panela izložbenog štanda na visini" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-zida.jpg", alt: "Čišćenje brendiranog zida štanda s osvijetljenim natpisom" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-natpisa.jpg", alt: "Čišćenje osvijetljenog KALEA natpisa na sajamskom štandu" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-panela.jpg", alt: "Čišćenje dekorativnih panela izložbenog prostora" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-ciscenje-ormara.jpg", alt: "Čišćenje izložbenog namještaja na sajmu" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-stand-police.jpg", alt: "Kalea štand s osvijetljenim policama nakon čišćenja" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-stand-gotovo.jpg", alt: "Gotov Kalea izložbeni štand spreman za otvaranje sajma" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg", alt: "Izložbena kuhinja na Kalea štandu nakon završnog čišćenja" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-blagovaonica.jpg", alt: "Izložbeni postav blagovaonice spreman za posjetitelje sajma" },
  { src: "/images/photos/kalea-sajam/kalea-sajam-postav.jpg", alt: "Kalea izložbeni postav na Sajmu namještaja i dizajna" },
];

export default function KaleaSajamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-[#FAFAF7] via-[#FAFAF7] to-white pt-4 lg:pt-6 pb-14 lg:pb-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
            <span className="text-gray-300">›</span>
            <Link href="/usluge/poslovni-prostori" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Generalno čišćenje</Link>
            <span className="text-gray-300">›</span>
            <span className="text-xs text-gray-500 font-medium">Kalea — Sajam, Arena Zagreb</span>
          </div>

          <Reveal variant="fade" className="relative rounded-[18px] lg:rounded-[24px] overflow-hidden shadow-xl shadow-black/10">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/8]">
              <Image
                src="/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg"
                alt="Kalea izložbeni štand na Sajmu namještaja i dizajna u Areni Zagreb — Pro Clean"
                fill
                priority
                className="object-cover hero-zoom-in"
                sizes="(min-width:1024px) 1000px, 100vw"
              />
            </div>
          </Reveal>

          <Reveal variant="up" delay={120} className="mt-7 max-w-3xl">
            <span className="inline-block bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Čišćenje sajamskog štanda
            </span>
            <h1
              className="font-semibold text-[#0A0A0A] text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Noćne smjene do<br />
              <span className="italic font-normal text-[#3B82F6]">otvaranja sajma.</span>
            </h1>
            <p className="text-[15px] lg:text-[17px] text-[#3F3F3F] mt-4 leading-[1.65]">
              Priprema Kalea izložbenog štanda za Sajam namještaja i dizajna u Areni Zagreb — čišćenje nakon montaže, do zadnjeg detalja.
            </p>
          </Reveal>

          <AnimatedStats stats={STATS} />
        </div>
      </section>

      {/* ── O PROJEKTU ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal variant="up">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">O projektu</p>
            <h2
              className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Štand koji mora blistati prvog dana
            </h2>
            <div className="space-y-5 text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.75]">
              <p>
                <strong>Kalea</strong> je nastupila na <strong>Sajmu namještaja i dizajna</strong> u{" "}
                <strong>Areni Zagreb</strong>. Pro Clean je bio zadužen za <strong>čišćenje i pripremu izložbenog
                štanda nakon montaže</strong> — od uklanjanja ambalaže i zaštitnih folija do završnog poliranja
                izložbenog namještaja.
              </p>
              <p>
                Rad na sajmu znači da nema odgode: štand mora biti besprijekoran <strong>prije otvaranja vrata
                posjetiteljima</strong>. Zato smo radili u <strong>noćnim smjenama</strong>, usklađeno s montažerima,
                kako bismo svaki dio štanda — zidne panele, osvijetljene natpise, police i namještaj — predali čiste
                na vrijeme.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OPSEG ── */}
      <section className="bg-gradient-to-b from-white to-[#FAFAF7] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Opseg radova</p>
          <h2
            className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Što je obuhvaćalo čišćenje štanda
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {SCOPE.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} variant="up" className="flex items-start gap-3 text-[14.5px] text-[#3F3F3F] leading-[1.55]">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center text-[11px] font-bold shrink-0">✓</span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF7] via-[#EAF1FF] to-white py-16 lg:py-20">
        <div className="relative max-w-5xl mx-auto px-5">
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Uživo sa sajma</p>
            <h2
              className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Tim na <span className="italic font-normal text-[#3B82F6]">djelu.</span>
            </h2>
          </div>
          <Reveal variant="up" className="grid grid-cols-2 gap-3 sm:gap-5 max-w-[700px] mx-auto">
            {[
              { src: "/videos/kalea-sajam-video-1.mp4", poster: "/videos/kalea-sajam-video-1-poster.jpg" },
              { src: "/videos/kalea-sajam-video-2.mp4", poster: "/videos/kalea-sajam-video-2-poster.jpg" },
            ].map((v) => (
              <div key={v.src} className="relative aspect-[9/16] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-xl shadow-[#3B82F6]/15 ring-1 ring-white/60 bg-black">
                <video className="w-full h-full object-cover" src={v.src} poster={v.poster} autoPlay muted loop playsInline preload="metadata" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── GALERIJA ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Galerija</p>
            <h2
              className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Od montaže do <span className="italic font-normal text-[#3B82F6]">otvaranja.</span>
            </h2>
          </div>
          <Reveal variant="up"><PhotoGallery images={GALLERY} aspect="aspect-[4/3]" /></Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-b from-white to-[#FAFAF7] py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2
            className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em] mb-4"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Izlažete na sajmu ili organizirate event?
          </h2>
          <p className="text-[15px] text-[#3F3F3F] leading-[1.65] mb-8">
            Pripremimo štand ili prostor na vrijeme — radimo i noću, usklađeno s montažom i rokom otvaranja.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-medium px-7 py-4 rounded-full hover:bg-[#2563EB] active:scale-[0.97] transition-all text-[15px] shadow-lg">
              Zatraži besplatnu ponudu
            </Link>
            <a href="tel:+385994840416" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-medium px-6 py-4 rounded-full hover:border-blue-400 hover:text-[#3B82F6] transition-all text-[14px]">
              099 484 0416
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
