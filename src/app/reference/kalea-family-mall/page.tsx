import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhotoGallery } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { AnimatedStats, type Stat } from "@/components/v3/AnimatedStats";

export const metadata: Metadata = {
  title: "Čišćenje nakon renovacije salona — Kalea, Family Mall Zagreb | Pro Clean",
  description:
    "Pro Clean je pripremio prvi Kalea salon namještaja u Hrvatskoj (Family Mall, Zagreb) za otvaranje — završno čišćenje nakon renovacije prostora. Glavni partner Kalee za Hrvatsku.",
  keywords: [
    "čišćenje nakon renovacije Zagreb",
    "čišćenje trgovačkog prostora Zagreb",
    "čišćenje salona namještaja",
    "čišćenje poslovnog prostora prije otvaranja",
    "čišćenje nakon adaptacije lokala",
    "Kalea Family Mall Zagreb",
    "priprema prostora za otvaranje",
    "Pro Clean Zagreb",
  ],
  alternates: { canonical: "https://www.procleanzg.com/reference/kalea-family-mall" },
  openGraph: {
    title: "Kalea Family Mall — čišćenje nakon renovacije salona | Pro Clean",
    description:
      "Priprema prvog Kalea salona namještaja u Hrvatskoj za otvaranje. Završno čišćenje nakon renovacije prostora.",
    url: "https://www.procleanzg.com/reference/kalea-family-mall",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "article",
    images: [
      {
        url: "https://www.procleanzg.com/images/photos/kalea/kalea-salon-gotovo.jpg",
        width: 1200,
        height: 630,
        alt: "Kalea salon namještaja u Family Mallu nakon završnog čišćenja — Pro Clean Zagreb",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kalea Family Mall — čišćenje nakon renovacije i priprema salona za otvaranje",
  description:
    "Pro Clean je izveo završno čišćenje nakon renovacije prvog Kalea salona namještaja u Hrvatskoj, u Family Mallu u Zagrebu, i pripremio prostor za otvaranje.",
  author: { "@type": "Organization", name: "Pro Clean", url: "https://www.procleanzg.com" },
  publisher: { "@type": "Organization", name: "Pro Clean", url: "https://www.procleanzg.com" },
  image: "https://www.procleanzg.com/images/photos/kalea/kalea-salon-gotovo.jpg",
  about: {
    "@type": "Place",
    name: "Kalea salon namještaja, Family Mall Zagreb",
    address: { "@type": "PostalAddress", addressLocality: "Zagreb", addressCountry: "HR" },
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Pro Clean", item: "https://www.procleanzg.com" },
    { "@type": "ListItem", position: 2, name: "Čišćenje nakon izgradnje", item: "https://www.procleanzg.com/usluge/izgradnja" },
    { "@type": "ListItem", position: 3, name: "Kalea Family Mall", item: "https://www.procleanzg.com/reference/kalea-family-mall" },
  ],
};

const STATS: Stat[] = [
  { text: "1. u HR", label: "prvi Kalea salon" },
  { text: "Family Mall", label: "lokacija" },
  { text: "Partner", label: "glavni za Hrvatsku" },
];

const SCOPE = [
  "Uklanjanje zaštitnih folija i ostataka ljepila",
  "Pranje izloga i staklenih stijena s obje strane",
  "Čišćenje zidnih panela i dekorativnih obloga",
  "Usisavanje i pranje podova cijelog salona",
  "Čišćenje polica, vitrina i izložbenih postava",
  "Brisanje rasvjete, stropnih elemenata i detalja",
  "Završno fino čišćenje prije otvaranja",
];

const GALLERY = [
  { src: "/images/photos/kalea/kalea-izlog-opening-soon.jpg", alt: "Kalea salon u Family Mallu prije otvaranja — priprema prostora, Pro Clean Zagreb" },
  { src: "/images/photos/kalea/kalea-pranje-izloga.jpg", alt: "Pranje izloga i staklene fasade salona namještaja nakon renovacije" },
  { src: "/images/photos/kalea/kalea-pranje-staklenih-stijena.jpg", alt: "Čišćenje staklenih stijena u trgovačkom prostoru — Pro Clean Zagreb" },
  { src: "/images/photos/kalea/kalea-usisavanje-salona.jpg", alt: "Usisavanje podova salona namještaja nakon renovacije" },
  { src: "/images/photos/kalea/kalea-ciscenje-polica.jpg", alt: "Čišćenje polica i vitrina u salonu namještaja prije otvaranja" },
  { src: "/images/photos/kalea/kalea-ciscenje-zidnog-panela.jpg", alt: "Čišćenje dekorativnih zidnih panela u trgovačkom prostoru" },
  { src: "/images/photos/kalea/kalea-ciscenje-spavace-postav.jpg", alt: "Priprema izložbenog postava spavaće sobe — Kalea Zagreb" },
  { src: "/images/photos/kalea/kalea-salon-namjestaj.jpg", alt: "Kalea salon namještaja nakon završnog čišćenja — Family Mall Zagreb" },
  { src: "/images/photos/kalea/kalea-salon-fotelje.jpg", alt: "Izložbeni prostor s foteljama spreman za otvaranje — Pro Clean" },
  { src: "/images/photos/kalea/kalea-salon-prolaz.jpg", alt: "Prolaz salona namještaja nakon završnog čišćenja — Kalea Family Mall" },
];

export default function KaleaPage() {
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
            <Link href="/usluge/izgradnja" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Čišćenje nakon izgradnje</Link>
            <span className="text-gray-300">›</span>
            <span className="text-xs text-gray-500 font-medium">Kalea Family Mall</span>
          </div>

          <Reveal variant="fade" className="relative rounded-[18px] lg:rounded-[24px] overflow-hidden shadow-xl shadow-black/10">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/8]">
              <Image
                src="/images/photos/kalea/kalea-salon-gotovo.jpg"
                alt="Kalea salon namještaja u Family Mallu Zagreb nakon završnog čišćenja — Pro Clean"
                fill
                priority
                className="object-cover hero-zoom-in"
                sizes="(min-width:1024px) 1000px, 100vw"
              />
            </div>
          </Reveal>

          <Reveal variant="up" delay={120} className="mt-7 max-w-3xl">
            <span className="inline-block bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Čišćenje nakon renovacije
            </span>
            <h1
              className="font-semibold text-[#0A0A0A] text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Prvi Kalea salon u Hrvatskoj —<br />
              <span className="italic font-normal text-[#3B82F6]">spreman za otvaranje.</span>
            </h1>
            <p className="text-[15px] lg:text-[17px] text-[#3F3F3F] mt-4 leading-[1.65]">
              Završno čišćenje nakon renovacije prostora u Family Mallu u Zagrebu. Pro Clean je glavni partner Kalee za Hrvatsku.
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
              Od gradilišta do izloga
            </h2>
            <div className="space-y-5 text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.75]">
              <p>
                <strong>Kalea</strong> je otvorila svoj <strong>prvi salon namještaja u Hrvatskoj</strong> u zagrebačkom{" "}
                <strong>Family Mallu</strong>. Nakon završetka renovacije prostora, Pro Clean je preuzeo{" "}
                <strong>završno čišćenje i pripremu salona za korištenje</strong> — da prostor na dan otvaranja
                izgleda besprijekorno.
              </p>
              <p>
                Posao je obuhvatio skidanje zaštitnih folija i ljepila, pranje izloga i staklenih stijena, čišćenje
                dekorativnih zidnih panela, polica i izložbenih postava, te kompletno usisavanje i pranje podova
                salona.
              </p>
              <p>
                Pro Clean je <strong>glavni partner Kalee za Hrvatsku</strong> — surađujemo na pripremi i održavanju
                njihovih prostora.
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
            Što je obuhvaćalo čišćenje
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
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Uživo s terena</p>
            <h2
              className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Tim na <span className="italic font-normal text-[#3B82F6]">djelu.</span>
            </h2>
          </div>
          <Reveal variant="up" className="grid grid-cols-3 gap-3 sm:gap-5 max-w-[920px] mx-auto">
            {[
              { src: "/videos/kalea-video-1.mp4", poster: "/videos/kalea-video-1-poster.jpg" },
              { src: "/videos/kalea-video-2.mp4", poster: "/videos/kalea-video-2-poster.jpg" },
              { src: "/videos/kalea-video-3.mp4", poster: "/videos/kalea-video-3-poster.jpg" },
            ].map((v) => (
              <div key={v.src} className="relative aspect-[9/16] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-xl shadow-[#3B82F6]/15 ring-1 ring-white/60 bg-black">
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
              Priprema <span className="italic font-normal text-[#3B82F6]">salona.</span>
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
            Otvarate lokal ili salon?
          </h2>
          <p className="text-[15px] text-[#3F3F3F] leading-[1.65] mb-8">
            Pripremimo prostor za otvaranje — čišćenje nakon renovacije, pranje izloga i završni detalji.
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
