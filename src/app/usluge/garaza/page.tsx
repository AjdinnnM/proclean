import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProcessStepsAnimated } from "@/components/v3/ProcessStepsAnimated";
import { TypewriterText } from "@/components/v3/TypewriterText";
import { InvesticijaCallout } from "@/components/v3/InvesticijaCallout";

export const metadata: Metadata = {
  title: "Čišćenje garaža Zagreb — Pro Clean | Strojno ribanje i metenje",
  description:
    "Profesionalno čišćenje garaža u Zagrebu — metenje, uklanjanje paučine, strojno ribanje i završno usisavanje. Popust za veće površine. Pozovite 099 484 0416.",
  keywords: ["čišćenje garaža Zagreb","pranje garaže Zagreb","čišćenje podzemne garaže","strojno ribanje garaže","Pro Clean garaža Zagreb"],
  alternates: { canonical: "https://proclean.hr/usluge/garaza" },
  openGraph: {
    title: "Čišćenje garaža Zagreb — Pro Clean",
    description: "Strojno ribanje i temeljito čišćenje garaža u Zagrebu. Cijena po dogovoru.",
    url: "https://proclean.hr/usluge/garaza",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://proclean.hr/images/photos/img-2381.jpg", width: 1200, height: 630, alt: "Čišćenje garaže Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Čišćenje garaža Zagreb",
  description: "Profesionalno čišćenje podzemnih i nadzemnih garaža u Zagrebu. Metenje, uklanjanje paučine, strojno ribanje.",
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
  offers: { "@type": "Offer", description: "Čišćenje garaže — cijena po dogovoru", availability: "https://schema.org/InStock" },
};

const STEPS = [
  { n: "01", title: "Metenje i uklanjanje paučine", desc: "Suho čišćenje — metemo površine, uklanjamo otpad, skidamo paučinu sa zidova, stropova i instalacija." },
  { n: "02", title: "Brisanje sandučića i cijevi", desc: "Brišemo požarne ormariće, vertikalne cijevi i instalacijske kanale koji se inače preskaču." },
  { n: "03", title: "Sredstva i prvo ribanje", desc: "Profesionalna sredstva za odmašćivanje. Prvo ribanje strojem razrahljuje masti i prašinu od guma." },
  { n: "04", title: "Završno ribanje i usisavanje", desc: "Drugi prolaz strojem. Završno industrijsko usisavanje i pregled — čist, suh pod bez tragova." },
];

const REASONS = [
  {
    title: "Higijena i zdravlje",
    desc: "Prašina od guma, ulja i organski otpad nakupljaju se u sloj koji se širi na stubišta i liftove. Redovito čišćenje smanjuje alergene i osigurava zdraviji zrak.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Sprječavanje nametnika",
    desc: "Vlažne i prljave garaže privlače glodavce i insekte. Iskorjenjivanje košta višestruko više od redovitog održavanja.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Dugoročna ušteda",
    desc: "Redovito održavanje štiti instalacije, kanale i pod od prerane dotrajalosti. Skupi zahvati sanacije često su posljedica zanemarivanja.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
        <path d="M16 9h4v4" />
      </svg>
    ),
  },
];

const RISKS = [
  {
    title: "Beton se troši",
    desc: "Što duže glatki beton stoji bez čišćenja, površina postaje hrapava i ošteti se. Ulja, sol i vlaga prodiru u pore — pojavljuju se rupe i pukotine koje se širi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18" /><path d="M5 18l3-8 4 4 4-6 3 4" /><path d="M9 14l1 1M15 12l1-1" />
      </svg>
    ),
  },
  {
    title: "Plijesan i nametnici",
    desc: "Organski talog stvara plijesan koja se širi prema stubištima. Mrak, prljavština i vlaga privlače glodavce i insekte — deratizacija je puno skuplja od prevencije.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L8 8a5 5 0 1 0 8 0L12 2.5z" /><circle cx="12" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Skupi popravci",
    desc: "Sanacija je u prosjeku 5× skuplja od redovitog održavanja. Štete na podu, instalacijama, kanalicama i izolaciji se gomilaju i traže hitne intervencije.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const FAQ = [
  { q: "Koliko košta čišćenje garaže?", a: "Cijena se dogovara prema kvadraturi i stanju prostora. Pošaljite nam podatke i dobivate ponudu unutar 24h." },
  { q: "Treba li garaža biti prazna?", a: "Idealno da — za najefikasnije čišćenje. Za veće garaže možemo raditi sekcijama pa ostatak ostaje dostupan za parkiranje." },
  { q: "Koliko traje čišćenje?", a: "Garaža od 500 m² traje prosječno 3–4 sata uz našu ekipu od 2 radnika. Manji prostori do 150 m² završavamo u 1,5–2 sata." },
  { q: "Radite li visokotlačno pranje?", a: "Ne — koristimo stroj za ribanje podova koji ne oštećuje površine ni parkirne oznake." },
  { q: "Mogu li dobiti R1 račun?", a: "Da. Izdajemo R1 za tvrtke, stambene zajednice i upravitelje zgrada bez naknade." },
];

const RELATED = [
  {
    href: "/usluge/stubiste", title: "Čišćenje stubišta", sub: "Redovito i jednokratno",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h4v-4h4v-4h4v-4h4v-4h4" /></svg>,
  },
  {
    href: "/usluge/izgradnja", title: "Čišćenje nakon izgradnje", sub: "Spremno za useljenje",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 9h1M9 13h1M14 9h1M14 13h1" /></svg>,
  },
  {
    href: "/usluge/prozori", title: "Pranje prozora", sub: "Obje strane · na visini",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 12h18M12 3v18" /></svg>,
  },
];

export default function GarazaPage() {
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
                  <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
                  <span className="text-gray-300">›</span>
                  <span className="text-xs text-gray-500 font-medium">Čišćenje garaža</span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={100}>
                <h1 className="font-semibold text-[#0A0A0A] text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Čišćenje garaža<br />
                  <TypewriterText text="koje se vidi." className="italic font-normal text-[#3B82F6]" delay={500} speed={60} />
                </h1>
              </Reveal>

              {/* Description with refined design */}
              <Reveal variant="up" delay={250}>
                <div className="relative pl-5 mb-8 max-w-lg">
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#3B82F6]/60 to-transparent rounded-full" />
                  <p className="text-[16px] lg:text-[17px] leading-[1.55] text-[#3F3F3F]">
                    Strojno ribanje, profesionalna oprema i jasan rezultat. Pod koji blista, paučina koje nema, prostor koji se osjeća svježim.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={350}>
                <ul className="grid gap-2.5 mb-9 max-w-md">
                  {[
                    "Metenje, paučina, ribanje — sve u jednom dolasku",
                    "Popust za veće garaže",
                    "Odgovor na upit unutar 24 sata",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-[#0A0A0A]"
                      style={{
                        animation: `fadeInLeft 700ms cubic-bezier(0.16,1,0.3,1) ${500 + i * 100}ms backwards`,
                      }}
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

            {/* Right — image */}
            <Reveal variant="up" delay={200} className="relative lg:self-stretch flex items-end justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none h-[360px] lg:h-full lg:min-h-[520px] rounded-[20px] overflow-hidden shadow-2xl shadow-black/10">
                <Image src="/images/services/garaza-karcher.jpg" alt="Kärcher stroj za ribanje poda — Pro Clean garaža Zagreb" fill priority className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-[16px] px-5 py-4 shadow-xl flex items-center gap-4 whitespace-nowrap">
                  <div className="text-xl font-extrabold text-[#3B82F6] leading-none">Brz odgovor</div>
                  <div className="text-xs text-gray-500 font-medium leading-tight">unutar 24h</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── INVESTICIJA CALLOUT ── */}
      <InvesticijaCallout />


      {/* ── PRIJE / POSLIJE ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal className="text-center mb-10 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Rezultati</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Transformacija koja<br />
              <span className="italic font-normal text-[#3B82F6]">govori sama.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl shadow-black/10 border border-gray-100">
              <Image src="/images/photos/garaza-prije-poslije.jpg" alt="Garaža prije i poslije čišćenja — Pro Clean Zagreb" width={900} height={1200} className="w-full h-auto" sizes="(min-width:1024px) 900px, 100vw" />
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/photos/garaza/IMG_3341.jpg", alt: "Čista garaža nakon strojnog ribanja — Pro Clean Zagreb" },
              { src: "/images/photos/garaza/IMG_3342.jpg", alt: "Strojno pranje poda garaže — Pro Clean Zagreb" },
              { src: "/images/photos/garaza/IMG_3469.jpg", alt: "Čišćenje paučine i prašine s cijevi u garaži — Pro Clean Zagreb" },
            ].map((img, i) => (
              <Reveal key={img.src} variant="up" delay={150 + i * 80}>
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden shadow-lg border border-gray-100 group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width:640px) 33vw, 100vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PITATE SE ZAŠTO — 3 razloga, custom SVG ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Pitate se zašto?</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Tri razloga zbog kojih<br />
              <span className="italic font-normal text-[#3B82F6]">garaža zaslužuje pažnju.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 100} variant="up">
                <div className="group relative h-full bg-[#FAFAF7] rounded-[20px] p-7 border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:border-[#BFDBFE] cursor-default">
                  <div className="relative h-12 w-12 rounded-[14px] bg-[#EFF6FF] flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#3B82F6] group-hover:scale-110 group-hover:rotate-[-6deg]">
                    <span className="text-[#3B82F6] group-hover:text-white transition-colors duration-500">{r.icon}</span>
                  </div>
                  <h3 className="font-semibold text-[#0A0A0A] text-[18px] mb-2 tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                    {r.desc}
                  </p>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ŠTO RISKIRATE — Posljedice odgađanja ── */}
      <section className="relative bg-[#FAFAF7] py-20 lg:py-28 overflow-hidden">
        {/* Subtle warning glow in bg */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full opacity-30 blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #F97316 0%, transparent 65%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D97706] animate-pulse" />
              Upozorenje
            </div>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Što riskirate kad<br />
              <span className="italic font-normal text-[#D97706]">čišćenje izostane.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#3F3F3F] leading-[1.6]">
              Odgađanje ne štedi novac — samo pomiče troškove na sanaciju koja je puno skuplja od prevencije.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {RISKS.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} variant="up">
                <div className="group relative h-full bg-white rounded-[24px] p-7 lg:p-8 border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-15px_rgba(249,115,22,0.28)] hover:border-[#FED7AA] cursor-default">

                  {/* Big number top-right */}
                  <span
                    className="absolute top-6 right-7 text-[16px] tabular-nums text-[#9CA3AF] font-medium opacity-50 group-hover:opacity-100 group-hover:text-[#D97706] transition-all duration-500"
                    style={{ fontFamily: "var(--font-v3-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Warning icon container — bigger */}
                  <div className="relative h-14 w-14 rounded-[16px] bg-[#FEF3C7] flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#D97706] group-hover:scale-110 group-hover:rotate-[-6deg]">
                    <span className="text-[#D97706] group-hover:text-white transition-colors duration-500">{item.icon}</span>
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#F97316] ring-2 ring-white animate-pulse" />
                  </div>

                  <h3 className="font-semibold text-[#0A0A0A] text-[19px] lg:text-[20px] mb-2.5 tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-[1.6]">
                    {item.desc}
                  </p>

                  {/* Bottom accent — orange */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D97706] group-hover:w-full transition-all duration-500" />

                  {/* Glow on hover */}
                  <span
                    className="absolute -bottom-14 -right-14 h-36 w-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(249,115,22,0.16), transparent 70%)" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <Reveal delay={300} className="mt-12 lg:mt-16">
            <div className="bg-white rounded-[20px] border border-black/5 p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-2">Pro Clean rješenje</p>
                <h3 className="font-semibold text-[#0A0A0A] text-[18px] lg:text-[20px] tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Spriječite probleme prije nego nastanu.
                </h3>
              </div>
              <a href="/kontakt" className="inline-flex items-center gap-2 bg-[#3B82F6] text-white font-medium px-6 py-3.5 rounded-full hover:bg-[#2563EB] active:scale-[0.97] transition-all text-sm shadow-lg whitespace-nowrap">
                Zatraži pregled
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Naš proces</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              4 koraka do<br />
              <span className="italic font-normal text-[#3B82F6]">čiste garaže.</span>
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
            <p className="text-gray-400 text-sm mb-7">Zagreb i okolica: Samobor, Karlovac, Zaprešić, Jastrebarsko, Lučko i šire.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Trešnjevka","Maksimir","Centar","Dubrava","Novi Zagreb","Sesvete","Črnomerec","Špansko","Stenjevec","Peščenica","Podsljeme","Velika Gorica","Samobor","Zaprešić","Karlovac","Lučko","Jastrebarsko","Sveta Nedelja","Bregana"].map((a) => (
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
