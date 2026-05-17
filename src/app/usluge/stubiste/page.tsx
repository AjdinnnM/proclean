import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProcessStepsAnimated } from "@/components/v3/ProcessStepsAnimated";
import { TypewriterText } from "@/components/v3/TypewriterText";

export const metadata: Metadata = {
  title: "Čišćenje stubišta Zagreb — Pro Clean | Redovito i jednokratno",
  description:
    "Profesionalno čišćenje stubišta u stambenim zgradama Zagreba. Besplatno probno čišćenje za stambene zajednice. Pozovite 099 484 0416.",
  keywords: ["čišćenje stubišta Zagreb","čišćenje stepeništa Zagreb","stambena zajednica čišćenje Zagreb","Pro Clean Zagreb"],
  alternates: { canonical: "https://proclean.hr/usluge/stubiste" },
  openGraph: {
    title: "Čišćenje stubišta Zagreb — Pro Clean",
    description: "Redovito i jednokratno čišćenje stubišta. Besplatno probno čišćenje za stambene zajednice.",
    url: "https://proclean.hr/usluge/stubiste",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://proclean.hr/images/photos/stubiste-lobby.jpg", width: 1200, height: 630, alt: "Čišćenje stubišta Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Čišćenje stubišta Zagreb",
  description: "Redovito i jednokratno profesionalno čišćenje stubišta u stambenim zgradama u Zagrebu.",
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
  offers: { "@type": "Offer", description: "Čišćenje stubišta — cijena po dogovoru", availability: "https://schema.org/InStock" },
};

const STEPS = [
  { n: "01", title: "Generalno prvo čišćenje", desc: "Svako novo stubište počinjemo generalnim čišćenjem — temeljit pregled i čišćenje od vrha do dna bez iznimke." },
  { n: "02", title: "Paučina, zidovi i stropovi", desc: "Skidamo paučinu sa svih zidnih i stropnih površina, okvira i kutova — ono što se inače preskače." },
  { n: "03", title: "Rukohvati, vrata, sandučići", desc: "Brišemo rukohvate i ograde na svakom katu, vrata katova, ulazna vrata, okvire i poštanske sandučiće." },
  { n: "04", title: "Pranje poda i stepenica", desc: "Peremo pod i stepenice profesionalnim sredstvima — bez tragova, bez kemijskog mirisa." },
];

const WHY = [
  { title: "Besplatno probno čišćenje", desc: "Za stambene zajednice — bez obaveza. Stanari vide razliku prije nego potpišu ugovor." },
  { title: "Ritam po vašoj mjeri", desc: "Tjedni, dvotjedni ili mjesečni plan — prilagođavamo prema vašim potrebama." },
  { title: "Ekološka sredstva", desc: "Biorazgradiva i atestirana sredstva — sigurna za djecu, ljubimce i biljke." },
  { title: "Točnost i pouzdanost", desc: "Dolazimo na dogovoreni termin. Nikad nismo propustili dogovoreni dolazak." },
  { title: "Stanari imaju popust", desc: "Stanari stambenih zajednica s ugovorom ostvaruju popust na sve naše usluge čišćenja." },
  { title: "Jasna cijena", desc: "Cijena koja je dogovorena je cijena koja se plaća — bez iznenađenja na kraju." },
];

const SERVICES_GRID = [
  {
    title: "Pod i stepenice",
    desc: "Metenje, pranje i poliranje. Profesionalna sredstva, bez tragova.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h4v-4h4v-4h4v-4h4v-4h4" />
      </svg>
    ),
  },
  {
    title: "Paučina & zidovi",
    desc: "Skidamo paučinu sa zidova, stropova, kutova i okvira.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
  {
    title: "Rukohvati & ograde",
    desc: "Brisanje i dezinfekcija na svakom katu zgrade.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l18-10M3 7l18 10" />
        <circle cx="6" cy="15" r="1.5" /><circle cx="18" cy="9" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Vrata i okviri",
    desc: "Vrata katova, ulazna vrata, šarke i okviri.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3h14v18H5z" />
        <circle cx="15" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Poštanski sandučići",
    desc: "Brisanje vanjske strane — uvijek čisti i pregledni.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10H3z" />
        <path d="M3 9V6h18v3M8 9V6M16 9V6M7 14h2" />
      </svg>
    ),
  },
  {
    title: "Prozorske klupčice",
    desc: "Klupčice prozora u stubištu — bez prašine i mrlja.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16v12H4z" />
        <path d="M12 5v12M4 11h16M2 17h20" />
      </svg>
    ),
  },
];

const FAQ = [
  { q: "Koliko košta redovito čišćenje stubišta?", a: "Cijena se dogovara prema broju katova, površini i učestalosti. Kontaktirajte nas za besplatnu procjenu — bez obaveza." },
  { q: "Što uključuje generalno prvo čišćenje?", a: "Metemo i peremo pod i stepenice, skidamo paučinu sa zidova i stropova, brišemo rukohvate, vrata, ulazna vrata, poštanske sandučiće i prozorske klupčice." },
  { q: "Možemo li imati probno čišćenje?", a: "Da — za stambene zajednice nudimo besplatno jednokratno probno čišćenje. Bez ugovora i bez obaveza." },
  { q: "Trebamo li biti prisutni kad dolazite?", a: "Ne. Dovoljan je pristup stubištu. Ekipa dolazi, radi i odlazi bez ometanja stanara." },
  { q: "Imaju li stanari popust?", a: "Da. Stanari stambenih zajednica koje imaju ugovor s Pro Clean ostvaruju popust na sve naše usluge čišćenja." },
  { q: "Radite li subotom?", a: "Da. Radimo ponedjeljak–subota od 08:00 do 20:00. Za hitne termine javite se telefonom." },
];

export default function StubistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="pb-14 lg:pb-20">
              <div className="flex items-center gap-2 mb-5">
                <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
                <span className="text-gray-300">›</span>
                <span className="text-xs text-gray-500 font-medium">Čišćenje stubišta</span>
              </div>
              <h1 className="font-semibold text-[#0A0A0A] text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] mb-5" style={{ fontFamily: "var(--font-v3-display)" }}>
                Stubište koje<br />
                <TypewriterText
                  text="uvijek blista."
                  className="italic font-normal text-[#3B82F6]"
                  delay={400}
                  speed={60}
                />
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-8">
                Redovito i jednokratno profesionalno čišćenje stubišta u stambenim
                zgradama Zagreba. Besplatno probno čišćenje za stambene zajednice.
              </p>

              <ul className="space-y-3 mb-9">
                {[
                  "Besplatno probno čišćenje — bez ugovora",
                  "Generalno prvo čišćenje uključeno",
                  "Stanari imaju popust na usluge čišćenja",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm font-semibold">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href="/kontakt" className="inline-flex items-center gap-2 bg-[#3B82F6] text-white font-medium px-7 py-4 rounded-full hover:bg-[#2563EB] active:scale-[0.97] transition-all text-base shadow-lg">
                  Zatraži besplatnu ponudu
                </a>
                <a href="tel:+385994840416" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-medium px-6 py-4 rounded-full hover:border-blue-400 hover:text-[#3B82F6] transition-all text-sm">
                  📞 Nazovi nas
                </a>
              </div>
            </div>

            {/* Right — lobby photo */}
            <div className="relative lg:self-stretch flex items-end justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none h-[380px] lg:h-full lg:min-h-[540px] rounded-[20px] overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/images/photos/stubiste-lobby.jpg"
                  alt="Čist luksuzni ulaz — Pro Clean Zagreb"
                  fill priority
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
                {/* Floating badges */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 w-[calc(100%-40px)]">
                  <div className="bg-white rounded-[16px] px-4 py-3 shadow-xl flex items-center gap-3 flex-1">
                    <div className="text-xl font-extrabold text-[#3B82F6] leading-none">100+</div>
                    <div className="text-[11px] text-gray-500 font-medium leading-tight">stambenih<br /><span className="text-gray-400">zgrada</span></div>
                  </div>
                  <div className="bg-white rounded-[16px] px-4 py-3 shadow-xl flex items-center gap-3 flex-1">
                    <div className="text-xl font-extrabold text-[#3B82F6] leading-none">5000+</div>
                    <div className="text-[11px] text-gray-500 font-medium leading-tight">stanara u<br /><span className="text-gray-400">skrbi</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="bg-[#FAFAF7] py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/photos/stubiste/IMG_3457.jpg", alt: "Čist moderni ulaz stambene zgrade — Pro Clean Zagreb" },
              { src: "/images/photos/stubiste-ulaz-1.jpg", alt: "Stubište nakon čišćenja — Pro Clean Zagreb" },
              { src: "/images/services/staircase-real.jpg", alt: "Stubište stambene zgrade — Pro Clean Zagreb" },
            ].map((img, i) => (
              <Reveal key={img.src} variant="up" delay={i * 80}>
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

      {/* ── JEDINI SA STROJEVIMA ── */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        {/* Soft blue glow */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.14] blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#3B82F6] text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full mb-5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L15 9 L22 9 L17 14 L19 22 L12 18 L5 22 L7 14 L2 9 L9 9 Z" /></svg>
                  Što nas izdvaja
                </span>
              </Reveal>

              <Reveal variant="up" delay={100}>
                <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em] mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Jedni od rijetkih u Zagrebu —<br />
                  <span className="italic font-normal text-[#3B82F6]">strojno čišćenje stubišta.</span>
                </h2>
              </Reveal>

              <Reveal variant="up" delay={200}>
                <div className="space-y-4 text-[#3F3F3F] text-[15px] lg:text-[16px] leading-[1.65]">
                  <p>
                    Većina firmi u Zagrebu čisti stubišta <strong className="text-[#0A0A0A]">ručno</strong> —
                    krpa, kanta, deterdžent. Mi smo <strong className="text-[#0A0A0A]">jedni od rijetkih</strong> koji
                    koriste <strong className="text-[#0A0A0A]">profesionalne strojeve za pranje podova</strong>:
                    industrijski usisivači, ribači, vlažno-suho čišćenje.
                  </p>
                  <p>
                    Rezultat? <strong className="text-[#0A0A0A]">Dublje čišćenje, manje vremena, bez tragova krpe.</strong>{" "}
                    Stubište izgleda kao da je novo — od ulaznih vrata do potkrovlja.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={300}>
                <ul className="grid gap-3 mt-7 max-w-md">
                  {[
                    "Profesionalni ribači i industrijski usisivači",
                    "Dubinsko čišćenje fuga i pločica",
                    "Brže izvođenje — manje smetnji stanarima",
                    "Bez tragova krpe, mrlja i sapunastih ostataka",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-[#0A0A0A]"
                      style={{ animation: `stubMachineFadeIn 700ms cubic-bezier(0.16,1,0.3,1) ${400 + i * 100}ms backwards` }}
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <style>{`@keyframes stubMachineFadeIn { from { opacity: 0; transform: translateX(-10px) } to { opacity: 1; transform: translateX(0) } }`}</style>
              </Reveal>
            </div>

            {/* Right — strojevi u akciji */}
            <Reveal variant="up" delay={200} className="relative">
              <div className="relative w-full h-[360px] lg:h-[480px] rounded-[24px] overflow-hidden shadow-2xl shadow-black/10 group grid grid-cols-2 grid-rows-2 gap-2 bg-white p-2">
                <div className="relative col-span-1 row-span-2 rounded-[18px] overflow-hidden">
                  <Image src="/images/photos/stubiste/IMG_3459.jpg" alt="Strojno čišćenje ulaza stambene zgrade — Pro Clean Zagreb" fill className="object-cover" sizes="(min-width:1024px) 25vw, 50vw" />
                </div>
                <div className="relative col-span-1 row-span-1 rounded-[18px] overflow-hidden">
                  <Image src="/images/photos/stubiste/IMG_3458.jpg" alt="Strojno pranje pločica u stubištu — Pro Clean" fill className="object-cover" sizes="(min-width:1024px) 25vw, 50vw" />
                </div>
                <div className="relative col-span-1 row-span-1 rounded-[18px] overflow-hidden">
                  <Image src="/images/photos/stubiste/IMG_3470.jpg" alt="Stroj za ribanje poda u lobby-u stambene zgrade — Pro Clean" fill className="object-cover" sizes="(min-width:1024px) 25vw, 50vw" />
                </div>

                {/* Periodic shine */}
                <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute -inset-y-12 w-1/3"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                      transform: "skewX(-12deg) translateX(-50%)",
                      animation: "stub-machine-shine 6s ease-in-out 2s infinite",
                    }}
                  />
                </div>
                <style>{`@keyframes stub-machine-shine { 0%, 70% { transform: skewX(-12deg) translateX(-200%); opacity: 0 } 78% { opacity: 1 } 92% { opacity: 1 } 100% { transform: skewX(-12deg) translateX(700%); opacity: 0 } }`}</style>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-3">Naš proces</p>
            <h2 className="font-extrabold text-[#0A0A0A] text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
              Kako čistimo stubišta
            </h2>
          </Reveal>

          {/* Mobile — animated scroll timeline */}
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

      {/* ── ŠTO RADIMO ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">

          {/* Header — centered, smaller, like home page */}
          <Reveal className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Što radimo</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Svaki kutak —<br />
              <span className="italic font-normal text-[#3B82F6]">bez iznimke.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#3F3F3F] leading-[1.6]">
              Generalno prvo čišćenje za svakog novog klijenta. Bez preskakanja detalja.
            </p>
          </Reveal>

          {/* Bento grid: featured image card + 6 service tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Featured image card — spans 2 cols on lg, full row on sm */}
            <Reveal variant="up" className="sm:col-span-2 lg:row-span-2 relative rounded-[20px] overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-0 group cursor-default">
              <Image
                src="/images/photos/stubiste-lobby.jpg"
                alt="Čist elegantni ulaz stambene zgrade"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ objectPosition: "center 25%" }}
                sizes="(min-width:1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur text-[#3B82F6] text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  Generalno čišćenje
                </div>
                <h3 className="font-semibold text-white text-[22px] lg:text-[26px] leading-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Od zadnjeg kata do<br /><span className="italic font-normal">prizemlja.</span>
                </h3>
                <p className="mt-2 text-white/75 text-[13px] leading-relaxed max-w-[280px]">
                  Svako stubište počinjemo temeljitim generalnim — onda održavamo.
                </p>
              </div>
            </Reveal>

            {/* Service tiles */}
            {SERVICES_GRID.map((item, i) => (
              <Reveal key={item.title} delay={120 + i * 70} variant="up">
                <div className="group relative h-full bg-white rounded-[20px] p-5 lg:p-6 border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.22)] hover:border-[#BFDBFE] cursor-default">

                  {/* Number top-right */}
                  <span className="absolute top-5 right-5 text-[11px] tabular-nums text-[#9CA3AF] font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ fontFamily: "var(--font-v3-display)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative h-11 w-11 rounded-[14px] bg-[#EFF6FF] flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-[#3B82F6] group-hover:scale-110 group-hover:rotate-[-6deg]">
                    <span className="text-[#3B82F6] group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="font-semibold text-[#0A0A0A] text-[16px] lg:text-[17px] mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.55]">
                    {item.desc}
                  </p>

                  {/* Bottom accent line — slides in on hover */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-500" />

                  {/* Glow background on hover */}
                  <span
                    className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PRO CLEAN ── */}
      <section className="border-y border-black/5 bg-white py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal className="mb-12 lg:mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Zašto Pro Clean</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Razlog zašto nam<br />
              <span className="italic font-normal text-[#3B82F6]">stanari vjeruju.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {WHY.map((w, i) => (
              <div key={w.title} className="relative">
                <p
                  className="text-[12px] text-[#3B82F6] tabular-nums mb-3 font-medium"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="text-[18px] lg:text-[20px] text-[#0A0A0A] font-semibold mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  {w.title}
                </h3>
                <p className="text-[13px] lg:text-[14px] text-[#3F3F3F] leading-[1.55]">
                  {w.desc}
                </p>
              </div>
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
            <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-extrabold text-[#0A0A0A] text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>Često postavljana pitanja</h2>
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
            <h2 className="font-extrabold text-[#0A0A0A] text-2xl mb-2" style={{ fontFamily: "var(--font-v3-display)" }}>Radimo u cijelom Zagrebu i okolici</h2>
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
            {[
              {
                href: "/usluge/garaza", title: "Čišćenje garaža", sub: "Strojno ribanje poda",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M3 17h2M9 17h6M19 17h2" /><path d="M3 17l2-7h11l3 4v3" /></svg>,
              },
              {
                href: "/usluge/izgradnja", title: "Čišćenje nakon izgradnje", sub: "Spremno za useljenje",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 9h1M9 13h1M14 9h1M14 13h1" /></svg>,
              },
              {
                href: "/usluge/prozori", title: "Pranje prozora", sub: "Obje strane · na visini",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 12h18M12 3v18" /></svg>,
              },
            ].map((s, i) => (
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
