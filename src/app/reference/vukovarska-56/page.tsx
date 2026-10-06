import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhotoGallery } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { AnimatedStats, type Stat } from "@/components/v3/AnimatedStats";

export const metadata: Metadata = {
  title: "Čišćenje nakon građevinskih radova — Vukovarska 56, Zagreb | Pro Clean",
  description:
    "Pro Clean izveo je završno čišćenje nakon građevinskih radova na 10.000 m² zgrade gradskih ureda Grada Zagreba (zgrada katastra) na Vukovarskoj 56–60 — i to u samo 8 dana. Glavni izvođač obnove: Mekatronik.",
  keywords: [
    "čišćenje nakon građevinskih radova Zagreb",
    "završno čišćenje nakon izgradnje",
    "čišćenje nakon radova Vukovarska",
    "Vukovarska 56 Zagreb",
    "Ulica grada Vukovara 56",
    "zgrada katastra Zagreb",
    "zgrada gradskih ureda Grada Zagreba",
    "Mekatronik Zagreb",
    "čišćenje poslovnih objekata Zagreb",
    "Pro Clean Zagreb",
  ],
  alternates: { canonical: "https://proclean.hr/reference/vukovarska-56" },
  openGraph: {
    title: "10.000 m² u 8 dana — čišćenje nakon radova na Vukovarskoj 56 | Pro Clean",
    description:
      "Završno čišćenje zgrade gradskih ureda Grada Zagreba na Vukovarskoj 56–60 nakon obnove. 10.000 m², rok od 8 dana.",
    url: "https://proclean.hr/reference/vukovarska-56",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "article",
    images: [
      {
        url: "https://proclean.hr/images/photos/vukovarska/vukovarska-zgrada.jpg",
        width: 1200,
        height: 630,
        alt: "Zgrada gradskih ureda Grada Zagreba na Vukovarskoj 56 — Pro Clean",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10.000 m² u 8 dana — završno čišćenje nakon građevinskih radova na Vukovarskoj 56",
  description:
    "Pro Clean je izveo završno čišćenje nakon građevinskih radova na zgradi gradskih ureda Grada Zagreba (zgrada katastra) na Vukovarskoj 56–60. Približno 10.000 m² očišćeno je u roku od 8 dana.",
  author: { "@type": "Organization", name: "Pro Clean", url: "https://proclean.hr" },
  publisher: { "@type": "Organization", name: "Pro Clean", url: "https://proclean.hr" },
  image: "https://proclean.hr/images/photos/vukovarska/vukovarska-zgrada.jpg",
  about: {
    "@type": "Place",
    name: "Zgrada gradskih ureda Grada Zagreba, Vukovarska 56–60",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ulica grada Vukovara 56",
      addressLocality: "Zagreb",
      postalCode: "10000",
      addressCountry: "HR",
    },
  },
};

const STATS: Stat[] = [
  { value: 10000, suffix: " m²", label: "očišćene površine" },
  { value: 8, suffix: " dana", label: "rok izvedbe" },
  { text: "Sve etaže", label: "kompletan objekt" },
];

const SCOPE = [
  "Uklanjanje tvrdokornih naslaga s nezaštićenih prozora",
  "Ručno struganje ostataka građevinskog materijala",
  "Strojno i ručno pranje svih podnih površina",
  "Skidanje zaštitnih folija i ljepila sa staklenih stijena",
  "Pranje prozora s obje strane, okviri i klupčice",
  "Čišćenje svih etaža, hodnika i stubišta",
  "Sanitarni prostori, vrata i zidne obloge",
  "Dizala, rukohvati i ograde",
  "Završno fino čišćenje i priprema za primopredaju",
];

const GALLERY = [
  { src: "/images/photos/vukovarska/vukovarska-fasada-ljestve.jpg", alt: "Pranje prozora na fasadi zgrade na Vukovarskoj 56 nakon građevinskih radova — Pro Clean Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-pranje-stakla.jpg", alt: "Uklanjanje zaštitne folije i naslaga sa staklenih stijena — čišćenje nakon izgradnje" },
  { src: "/images/photos/vukovarska/vukovarska-strojno-pranje.jpg", alt: "Strojno pranje podova nakon građevinskih radova — Vukovarska 56 Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-usisavanje.jpg", alt: "Uklanjanje građevinske prašine iz ureda — Pro Clean Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-parket.jpg", alt: "Očišćen parket i prozori u uredu nakon obnove — Vukovarska Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-ured.jpg", alt: "Uredski prostor spreman za primopredaju nakon završnog čišćenja" },
  { src: "/images/photos/vukovarska/vukovarska-stubiste.jpg", alt: "Očišćeno stubište i podovi zgrade gradskih ureda Grada Zagreba" },
  { src: "/images/photos/vukovarska/vukovarska-sanitarije.jpg", alt: "Očišćeni sanitarni prostori nakon građevinskih radova — Pro Clean" },
  { src: "/images/photos/vukovarska/vukovarska-fasada-prozori.jpg", alt: "Fasada i prozori zgrade na Vukovarskoj 56 nakon čišćenja — Pro Clean Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-ograda-staklo.jpg", alt: "Čišćenje staklenih ograda i rukohvata nakon građevinskih radova — Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-pod-pranje.jpg", alt: "Strojno pranje kamenog poda nakon izgradnje — zgrada gradskih ureda Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-zgrada-fasada.jpg", alt: "Zgrada katastra na Ulici grada Vukovara tijekom završnog čišćenja — Pro Clean" },
  { src: "/images/photos/vukovarska/vukovarska-ured-pod.jpg", alt: "Očišćen uredski prostor i podovi nakon građevinskih radova — Vukovarska Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-hodnik.jpg", alt: "Očišćen hodnik poslovnog objekta nakon izgradnje — Pro Clean Zagreb" },
  { src: "/images/photos/vukovarska/vukovarska-prozori-interijer.jpg", alt: "Očišćeni prozori i interijer nakon građevinskih radova — Vukovarska 56 Zagreb" },
];

export default function VukovarskaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-[#FAFAF7] via-[#FAFAF7] to-white pt-4 lg:pt-6 pb-14 lg:pb-20">
        <div className="max-w-5xl mx-auto px-5">
          {/* Breadcrumb — isti stil kao na ostalim stranicama */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
            <span className="text-gray-300">›</span>
            <Link href="/usluge/izgradnja" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Čišćenje nakon izgradnje</Link>
            <span className="text-gray-300">›</span>
            <span className="text-xs text-gray-500 font-medium">Vukovarska 56</span>
          </div>

          {/* Slika */}
          <Reveal variant="fade" className="relative rounded-[18px] lg:rounded-[24px] overflow-hidden shadow-xl shadow-black/10">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/8]">
              <Image
                src="/images/photos/vukovarska/vukovarska-zgrada.jpg"
                alt="Zgrada gradskih ureda Grada Zagreba na Ulici grada Vukovara 56 — završno čišćenje nakon obnove, Pro Clean"
                fill
                priority
                className="object-cover hero-zoom-in"
                sizes="(min-width:1024px) 1000px, 100vw"
              />
            </div>
          </Reveal>

          {/* Tekst ispod slike */}
          <Reveal variant="up" delay={120} className="mt-7 max-w-3xl">
            <span className="inline-block bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Čišćenje nakon građevinskih radova
            </span>
            <h1
              className="font-semibold text-[#0A0A0A] text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              10.000 m² u 8 dana —<br />
              <span className="italic font-normal text-[#3B82F6]">Vukovarska 56.</span>
            </h1>
            <p className="text-[15px] lg:text-[17px] text-[#3F3F3F] mt-4 leading-[1.65]">
              Završno čišćenje zgrade gradskih ureda Grada Zagreba nakon obnove. Glavni izvođač radova: Mekatronik.
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
            Jedan od najvažnijih objekata za Grad Zagreb
          </h2>
          <div className="space-y-5 text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.75]">
            <p>
              Zgrada gradskih ureda Grada Zagreba na <strong>Ulici grada Vukovara 56–60</strong> — poznata i kao{" "}
              <strong>zgrada katastra</strong> — prošla je opsežnu obnovu financiranu sredstvima Europske unije.
              Glavni izvođač građevinskih radova bila je tvrtka <strong>Mekatronik</strong>, a{" "}
              <strong>Pro Clean</strong> je bio zadužen za <strong>završno čišćenje objekta nakon završetka
              građevinskih radova</strong>.
            </p>
            <p>
              Zadatak je bio pripremiti približno <strong>10.000 m²</strong> prostora za ponovno korištenje — od
              tvrdokornih naslaga na nezaštićenim prozorima, preko ručnog struganja ostataka građevinskog materijala,
              do potpunog čišćenja svih etaža, podova, staklenih površina i sanitarnih prostora.
            </p>
          </div>
          </Reveal>

          {/* Izazov */}
          <Reveal variant="up" delay={120} className="mt-10 rounded-[20px] bg-[#FAFAF7] border border-black/5 p-6 lg:p-8">
            <h3
              className="font-semibold text-[#0A0A0A] text-[19px] lg:text-[21px] tracking-tight mb-3"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Izazov: velika površina, kratak rok
            </h3>
            <p className="text-[15px] text-[#3F3F3F] leading-[1.7]">
              U samo <strong>8 dana</strong> tim je odradio kompletno završno čišćenje cijelog objekta — uz dobru
              organizaciju, profesionalnu opremu i puno predanosti. Velika površina i zahtjevan rok, ali projekt je
              uspješno završen u dogovorenom vremenu. Upravo na tome gradimo Pro Clean:{" "}
              <strong className="text-[#0A0A0A]">pouzdanost na projektima gdje nema prostora za kašnjenje.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OPSEG RADOVA ── */}
      <section className="bg-gradient-to-b from-white to-[#FAFAF7] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Opseg radova</p>
          <h2
            className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Što je obuhvaćalo završno čišćenje
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {SCOPE.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} variant="up" className="flex items-start gap-3 text-[14.5px] text-[#3F3F3F] leading-[1.55]">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center text-[11px] font-bold shrink-0">
                  ✓
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF7] via-[#EAF1FF] to-white py-16 lg:py-20">
        <div className="relative max-w-3xl mx-auto px-5">
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Uživo s terena</p>
            <h2
              className="font-semibold text-[#0A0A0A] text-[26px] lg:text-[36px] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Tim na <span className="italic font-normal text-[#3B82F6]">djelu.</span>
            </h2>
          </div>
          <Reveal variant="up" className="grid grid-cols-2 gap-3 sm:gap-4 max-w-[560px] mx-auto">
            {[
              { src: "/videos/vukovarska-video.mp4", poster: "/videos/vukovarska-video-poster.jpg" },
              { src: "/videos/vukovarska-video-2.mp4", poster: "/videos/vukovarska-video-2-poster.jpg" },
            ].map((v) => (
              <div key={v.src} className="relative aspect-[9/16] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-xl shadow-[#3B82F6]/15 ring-1 ring-white/60 bg-black">
                <video
                  className="w-full h-full object-cover"
                  src={v.src}
                  poster={v.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
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
              Pogled s <span className="italic font-normal text-[#3B82F6]">gradilišta.</span>
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
            Radite na sličnom projektu?
          </h2>
          <p className="text-[15px] text-[#3F3F3F] leading-[1.65] mb-8">
            Trebate partnera za završno čišćenje nakon građevinskih radova — stambeni, poslovni ili javni objekt?
            Javite se, rado ćemo pomoći.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-medium px-7 py-4 rounded-full hover:bg-[#2563EB] active:scale-[0.97] transition-all text-[15px] shadow-lg"
            >
              Zatraži besplatnu ponudu
            </Link>
            <a
              href="tel:+385994840416"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-medium px-6 py-4 rounded-full hover:border-blue-400 hover:text-[#3B82F6] transition-all text-[14px]"
            >
              099 484 0416
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
