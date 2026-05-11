import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Reveal } from "@/components/Reveal";
import { ProcessStepsAnimated } from "@/components/v3/ProcessStepsAnimated";
import { TypewriterText } from "@/components/v3/TypewriterText";
import { RotatingTypes } from "@/components/v3/RotatingTypes";

export const metadata: Metadata = {
  title: "Pranje prozora Zagreb — Pro Clean | Iznutra i izvana, pranje na visini",
  description:
    "Profesionalno pranje prozora, izloga i staklenih fasada u Zagrebu. Pranje na visini uz dizalice. Bez tragova, obje strane. Pozovite 099 484 0416.",
  keywords: ["pranje prozora Zagreb", "čišćenje prozora Zagreb", "pranje fasadnog stakla", "pranje izloga Zagreb", "pranje prozora na visini", "Pro Clean Zagreb"],
  alternates: { canonical: "https://proclean.hr/usluge/prozori" },
  openGraph: {
    title: "Pranje prozora Zagreb — Pro Clean | Na visini i iznutra",
    description: "Profesionalno pranje prozora i fasadnog stakla u Zagrebu. Radimo i na visini uz dizalice.",
    url: "https://proclean.hr/usluge/prozori",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://proclean.hr/images/photos/img-2810.jpg", width: 1200, height: 630, alt: "Pranje prozora Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pranje prozora Zagreb",
  description: "Profesionalno pranje prozora, izloga i staklenih fasada u Zagrebu. Pranje na visini uz dizalice.",
  provider: {
    "@type": "LocalBusiness",
    name: "Pro Clean",
    telephone: "+385994840416",
    email: "proclean.hr@outlook.com",
    address: { "@type": "PostalAddress", streetAddress: "Liganjska 4", addressLocality: "Zagreb", postalCode: "10000", addressCountry: "HR" },
    url: "https://proclean.hr",
    openingHours: "Mo-Sa 08:00-20:00",
  },
  areaServed: { "@type": "City", name: "Zagreb" },
  offers: { "@type": "Offer", description: "Pranje prozora — cijena po dogovoru", availability: "https://schema.org/InStock" },
};

const STEPS = [
  { n: "01", title: "Procjena i priprema", desc: "Pregledamo prozore, izmjerimo površinu i odaberemo metodu — ručno pranje, teleskop ili dizalica za visoke objekte." },
  { n: "02", title: "Pranje izvana", desc: "Profesionalnim sredstvima peremo vanjsku stranu. Za visoke objekte koristimo dizalicu — bez skela, bez rizika." },
  { n: "03", title: "Pranje iznutra", desc: "Peremo unutarnju stranu, okvire, klupčice i gume. Posebna pažnja na kutove i rubove." },
  { n: "04", title: "Završna kontrola", desc: "Brišemo kapljice, provjeravamo svaki prozor pod kutom — staklo bez mrlja i tragova." },
];

const WHY = [
  { title: "Visina", desc: "Vlastite dizalice i platforme za rad na velikim zgradama. Bez skela, bez rizika." },
  { title: "Bez tragova", desc: "Profesionalna sredstva i tehnika — savršeno čisto staklo bez mrlja vode." },
  { title: "Obje strane", desc: "Iznutra i izvana, uvijek. To je jedini način da prozor stvarno bude čist." },
  { title: "Eko sredstva", desc: "Biorazgradiva, sigurna za okoliš, biljke i fasadne površine oko prozora." },
];

const ROTATING_TYPES = [
  "stambene prozore",
  "urede i butike",
  "staklene fasade",
  "hotele i pansione",
  "velike izloge",
  "prozore na visini",
  "klupčice i okvire",
];

const FAQ = [
  { q: "Radite li pranje na visini?", a: "Da — imamo opremu za rad na visini. Za visoke objekte koristimo dizalicu ili visinsku platformu, što je i sigurnije od rada sa ljestava." },
  { q: "Perete li obje strane prozora?", a: "Da, uvijek. Iznutra i izvana — to je jedini način da prozor zaista bude čist." },
  { q: "Koliko traje pranje prozora?", a: "Ovisi o broju i veličini prozora. Za prosječan stan (10–15 prozora) obično 1,5–2 sata. Za veće objekte dolazimo na besplatan pregled." },
  { q: "Trebamo li biti prisutni?", a: "Za unutarnju stranu da — treba nam pristup. Za vanjsku stranu (visoke objekte) ne morate biti prisutni." },
  { q: "Radite li sezonski?", a: "Da. Preporučamo pranje dva puta godišnje — u proljeće i jesen. Za poslovne prostore i hotele organiziramo redovite termine." },
  { q: "Možete li prati i staklene fasade?", a: "Da, imamo iskustvo s fasadnim staklom, zimskim vrtovima i velikim staklenim površinama." },
];

const RELATED = [
  {
    href: "/usluge/stubiste", title: "Čišćenje stubišta", sub: "Redovito i jednokratno",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h4v-4h4v-4h4v-4h4v-4h4" /></svg>,
  },
  {
    href: "/usluge/garaza", title: "Čišćenje garaža", sub: "Strojno ribanje poda",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M3 17h2M9 17h6M19 17h2" /><path d="M3 17l2-7h11l3 4v3" /></svg>,
  },
  {
    href: "/usluge/izgradnja", title: "Čišćenje nakon izgradnje", sub: "Spremno za useljenje",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 9h1M9 13h1M14 9h1M14 13h1" /></svg>,
  },
];

export default function ProzoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative bg-white pt-8 lg:pt-14 pb-0 overflow-hidden">
        {/* Soft blue glow background */}
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[440px] w-[720px] rounded-full opacity-25 blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)" }}
        />

        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="pb-12 lg:pb-20 relative">
              <Reveal variant="up">
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/" className="text-[11px] uppercase tracking-[0.16em] text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
                  <span className="text-gray-300">›</span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#3B82F6] font-medium">Pranje prozora</span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={100}>
                <h1 className="font-semibold text-[#0A0A0A] text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Staklo nestaje.<br />
                  <TypewriterText text="Pogled ostaje." className="italic font-normal text-[#3B82F6]" delay={500} speed={70} />
                </h1>
              </Reveal>

              <Reveal variant="up" delay={250}>
                <div className="relative pl-5 mb-8 max-w-lg">
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#3B82F6]/60 to-transparent rounded-full" />
                  <p className="text-[16px] lg:text-[17px] leading-[1.55] text-[#3F3F3F]">
                    Profesionalno pranje prozora, izloga i staklenih fasada — iznutra i izvana, bez tragova vode. Na visini uz dizalicu, bez kompromisa.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={350}>
                <ul className="grid gap-2.5 mb-9 max-w-md">
                  {[
                    "Iznutra i izvana — uvijek obje strane",
                    "Pranje na visini uz dizalicu",
                    "Bez mrlja i tragova vode",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-[#0A0A0A]"
                      style={{ animation: `fadeInLeft 700ms cubic-bezier(0.16,1,0.3,1) ${500 + i * 100}ms backwards` }}
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <style>{`@keyframes fadeInLeft { from { opacity: 0; transform: translateX(-12px) } to { opacity: 1; transform: translateX(0) } }`}</style>
              </Reveal>

              <Reveal variant="up" delay={550}>
                <div className="flex flex-wrap gap-3">
                  <a href="/kontakt" className="group inline-flex items-center gap-2 bg-[#3B82F6] text-white font-medium px-7 py-4 rounded-full hover:bg-[#2563EB] active:scale-[0.97] transition-all text-[15px] shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)]">
                    Zatraži besplatnu ponudu
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <a href="tel:+385994840416" className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-medium px-6 py-4 rounded-full text-[14px] border border-black/10 hover:border-[#3B82F6]/40 active:scale-[0.97] transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Nazovi nas
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right — image with squeegee shimmer */}
            <Reveal variant="up" delay={200} className="relative lg:self-stretch flex items-end justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none h-[360px] lg:h-full lg:min-h-[520px] rounded-[20px] overflow-hidden shadow-2xl shadow-black/10 group">
                <Image src="/images/photos/prozori/IMG_3153.jpg" alt="Profesionalno pranje prozora — Pro Clean Zagreb" fill priority className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent" />

                {/* Squeegee shimmer — light bar moves diagonally across glass */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  style={{ animation: "squeegee 4.5s ease-in-out 1s infinite" }}
                >
                  <div
                    className="absolute -inset-y-12 -left-1/3 w-1/3"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                      transform: "skewX(-12deg)",
                    }}
                  />
                </div>
                <style>{`@keyframes squeegee { 0% { transform: translateX(-20%); opacity: 0 } 30% { opacity: 1 } 70% { opacity: 1 } 100% { transform: translateX(450%); opacity: 0 } }`}</style>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-[16px] px-5 py-4 shadow-xl flex items-center gap-3 whitespace-nowrap">
                  <span className="h-9 w-9 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /></svg>
                  </span>
                  <div>
                    <div className="text-sm font-extrabold text-[#0A0A0A] leading-tight">Bez mrlja i tragova</div>
                    <div className="text-xs text-gray-400 mt-0.5">Garantiramo čistoću</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NAŠI RADOVI ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Naši radovi</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Prije i poslije —<br />
              <span className="italic font-normal text-[#3B82F6]">staklo koje govori.</span>
            </h2>
          </Reveal>

          <Reveal variant="left">
            <a href="/reference/novotel" className="group block rounded-[20px] overflow-hidden shadow-lg border border-gray-100 relative mb-5">
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px]">
                <Image src="/images/photos/prozori/novotel-hotel.jpg" alt="Novotel Zagreb — Pro Clean pranje prozora" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width:1024px) 900px, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-1">Referenca</span>
                    <span className="text-white font-semibold text-lg md:text-2xl leading-snug block" style={{ fontFamily: "var(--font-v3-display)" }}>Novotel Zagreb</span>
                    <span className="text-white/60 text-xs md:text-sm block mt-1">Pranje staklene fasade nakon izgradnje</span>
                  </div>
                  <span className="flex items-center gap-1.5 bg-white text-[#3B82F6] text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#3B82F6] group-hover:text-white transition-colors shrink-0">
                    Saznaj više →
                  </span>
                </div>
                <span className="absolute top-4 left-5 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-full">Staklena fasada</span>
              </div>
            </a>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <ImageLightbox
              pairs={[
                { before: "/images/photos/prozori/IMG_3151.jpg", after: "/images/photos/prozori/IMG_3152.jpg", label: "" },
                { before: "/images/photos/prozori/IMG_3144.jpg", after: "/images/photos/prozori/IMG_3145.jpg", label: "" },
              ]}
              extras={[
                "/images/photos/prozori/IMG_3301.jpg",
                "/images/photos/prozori/IMG_3305.jpg",
                "/images/photos/prozori/IMG_3288.jpg",
                "/images/photos/prozori/IMG_7358.jpg",
                "/images/photos/prozori/IMG_2956.jpg",
                "/images/photos/prozori/IMG_2958.jpg",
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Naš proces</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Kako peremo<br />
              <span className="italic font-normal text-[#3B82F6]">prozore.</span>
            </h2>
          </Reveal>

          {/* Mobile — animated timeline */}
          <div className="md:hidden max-w-sm mx-auto">
            <ProcessStepsAnimated steps={STEPS} />
          </div>

          {/* Desktop — 4-column grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
                <div className="group bg-[#FAFAF7] rounded-[20px] p-7 border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#BFDBFE]/60 hover:bg-white transition-all duration-300 h-full cursor-default">
                  <div className="font-extrabold text-6xl text-[#DBEAFE] group-hover:text-[#93C5FD] leading-none mb-4 select-none transition-colors duration-300">{s.n}</div>
                  <h3 className="font-extrabold text-[#0A0A0A] text-base leading-snug mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ŠTO PEREMO — Apple-style rotating types ── */}
      <section className="relative bg-[#FAFAF7] py-24 lg:py-36 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-5">
          <RotatingTypes types={ROTATING_TYPES} intervalMs={2600} />

          {/* Subtle subline */}
          <p className="text-center mt-10 text-[14px] lg:text-[15px] text-[#6B7280] leading-[1.6] max-w-md mx-auto">
            Privatni klijenti, stambene zajednice, uredi i hoteli. <br className="hidden sm:block" />
            Svaki prozor — s obje strane.
          </p>
        </div>
      </section>

      {/* ── ZAŠTO PRO CLEAN — minimal numbered ── */}
      <section className="border-y border-black/5 bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal className="mb-14 lg:mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Zašto Pro Clean</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Čisto staklo —<br />
              <span className="italic font-normal text-[#3B82F6]">bez kompromisa.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {WHY.map((it, i) => (
              <Reveal key={it.title} delay={i * 120} variant="up">
                <div className="group relative">
                  {/* Thin animated underline appears on view */}
                  <span
                    className="absolute -top-3 left-0 h-[2px] w-8 bg-[#3B82F6] origin-left transition-transform duration-700"
                    style={{ animation: "wpc-line-grow 800ms cubic-bezier(0.16,1,0.3,1) backwards", animationDelay: `${i * 120}ms` }}
                  />
                  <p className="text-[12px] text-[#3B82F6] tabular-nums mb-3 font-medium" style={{ fontFamily: "var(--font-v3-display)" }}>
                    0{i + 1}
                  </p>
                  <h3 className="text-[20px] lg:text-[22px] text-[#0A0A0A] font-semibold mb-2 tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                    {it.title}
                  </h3>
                  <p className="text-[14px] text-[#3F3F3F] leading-[1.55]">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <style>{`@keyframes wpc-line-grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
        </div>
      </section>

      {/* ── FULL CTA ── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5">Zatraži ponudu</p>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-4" style={{ fontFamily: "var(--font-v3-display)" }}>
            Cijena po dogovoru —<br />
            <span className="text-[#3B82F6] italic font-normal">bez skrivenih troškova.</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.65] max-w-[500px] mx-auto mb-10">
            Kontaktirajte nas s opisom prostora. Ponudu šaljemo unutar 2 sata.
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

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">FAQ</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>Često postavljana pitanja</h2>
          </Reveal>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} variant={i % 2 === 0 ? "left" : "right"}>
                <details className="group bg-[#FAFAF7] border border-gray-100 rounded-[16px] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-[#0A0A0A] text-sm md:text-base">
                    {f.q}
                    <span className="text-gray-400 text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="bg-[#FAFAF7] py-14">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-semibold text-[#0A0A0A] text-2xl mb-2" style={{ fontFamily: "var(--font-v3-display)" }}>Radimo u cijelom Zagrebu i okolici</h2>
            <p className="text-gray-400 text-sm mb-7">Trešnjevka, Maksimir, Novi Zagreb, Sesvete, Dubrava i šire.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Trešnjevka","Maksimir","Centar","Dubrava","Novi Zagreb","Sesvete","Črnomerec","Špansko","Stenjevec","Peščenica","Podsljeme","Velika Gorica","Samobor"].map((a) => (
                <span key={a} className="bg-white text-gray-600 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 shadow-sm">{a}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h2 className="font-semibold text-[#0A0A0A] text-xl mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>Ostale usluge</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} variant={i % 2 === 0 ? "left" : "right"}>
                <Link href={s.href} className="group flex items-start gap-4 bg-[#FAFAF7] border border-gray-100 rounded-[20px] p-5 hover:border-blue-300 hover:bg-[#EFF6FF]/40 transition-all h-full">
                  <span className="h-10 w-10 rounded-[12px] bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#0A0A0A] text-sm group-hover:text-[#3B82F6] transition-colors">{s.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
