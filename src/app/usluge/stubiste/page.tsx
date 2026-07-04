import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LightboxProvider, ZoomImage } from "@/components/Lightbox";
import { ProcessStepsAnimated } from "@/components/v3/ProcessStepsAnimated";
import { TypewriterText } from "@/components/v3/TypewriterText";

export const metadata: Metadata = {
  title: "Čišćenje stubišta Zagreb — Pro Clean | Redovito i jednokratno",
  description:
    "Profesionalno čišćenje stubišta u stambenim zgradama Zagreba — redovito ili jednokratno. Pozovite 099 484 0416.",
  keywords: ["čišćenje stubišta Zagreb","čišćenje stepeništa Zagreb","stambena zajednica čišćenje Zagreb","Pro Clean Zagreb"],
  alternates: { canonical: "https://proclean.hr/usluge/stubiste" },
  openGraph: {
    title: "Čišćenje stubišta Zagreb — Pro Clean",
    description: "Redovito i jednokratno čišćenje stubišta u stambenim zgradama Zagreba.",
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
    address: { "@type": "PostalAddress", addressLocality: "Zagreb", postalCode: "10000", addressCountry: "HR" },
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


const FAQ = [
  { q: "Koliko košta redovito čišćenje stubišta?", a: "Cijena se dogovara prema broju katova, površini i učestalosti. Kontaktirajte nas za besplatnu procjenu — bez obaveza." },
  { q: "Što uključuje generalno prvo čišćenje?", a: "Metemo i peremo pod i stepenice, skidamo paučinu sa zidova i stropova, brišemo rukohvate, vrata, ulazna vrata, poštanske sandučiće i prozorske klupčice." },
  { q: "Trebamo li biti prisutni kad dolazite?", a: "Ne. Dovoljan je pristup stubištu. Ekipa dolazi, radi i odlazi bez ometanja stanara." },
  { q: "Imaju li stanari popust?", a: "Da. Stanari stambenih zajednica koje imaju ugovor s Pro Clean ostvaruju popust na sve naše usluge čišćenja." },
  { q: "Radite li subotom?", a: "Da. Radimo ponedjeljak–subota od 08:00 do 20:00. Za hitne termine javite se telefonom." },
];

export default function StubistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-white pt-4 lg:pt-14 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
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
                zgradama Zagreba.
              </p>

              <ul className="space-y-3 mb-9">
                {[
                  "Temeljito generalno prvo čišćenje",
                  "Redovito ili jednokratno — po dogovoru",
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

              {/* Inline stats */}
              <div className="flex gap-10 mt-10 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-[30px] font-semibold text-[#0A0A0A] leading-none" style={{ fontFamily: "var(--font-v3-display)" }}>100+</div>
                  <div className="text-xs text-gray-500 mt-2">stambenih zgrada</div>
                </div>
                <div className="border-l border-gray-100 pl-10">
                  <div className="text-[30px] font-semibold text-[#0A0A0A] leading-none" style={{ fontFamily: "var(--font-v3-display)" }}>5000+</div>
                  <div className="text-xs text-gray-500 mt-2">stanara u skrbi</div>
                </div>
              </div>
            </div>

            {/* Right — image collage */}
            <Reveal variant="up" className="relative lg:self-stretch">
              <div className="grid gap-3 lg:gap-4 h-full">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-[360px] rounded-[20px] overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/images/photos/stubiste-lobby.jpg"
                    alt="Čist luksuzni ulaz — Pro Clean Zagreb"
                    fill priority
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/25 via-transparent to-transparent" />
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  {[
                    { src: "/images/photos/stubiste/IMG_3457.jpg", alt: "Čist moderni ulaz stambene zgrade — Pro Clean Zagreb" },
                    { src: "/images/photos/stubiste-ulaz-1.jpg", alt: "Stubište nakon čišćenja — Pro Clean Zagreb" },
                    { src: "/images/services/staircase-real.jpg", alt: "Stubište stambene zgrade — Pro Clean Zagreb" },
                  ].map((img) => (
                    <div key={img.src} className="relative aspect-[4/3] rounded-[14px] overflow-hidden shadow-lg border border-gray-100 group">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width:1024px) 16vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
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
              <LightboxProvider
                images={[
                  "/images/photos/stubiste/IMG_3459.jpg",
                  "/images/photos/stubiste/IMG_3458.jpg",
                  "/images/photos/stubiste/IMG_3470.jpg",
                ]}
              >
              <div className="relative w-full h-[360px] lg:h-[480px] rounded-[24px] overflow-hidden shadow-2xl shadow-black/10 group grid grid-cols-2 grid-rows-2 gap-2 bg-white p-2">
                <ZoomImage src="/images/photos/stubiste/IMG_3459.jpg" alt="Strojno čišćenje ulaza stambene zgrade — Pro Clean Zagreb" sizes="(min-width:1024px) 25vw, 50vw" className="col-span-1 row-span-2 rounded-[18px] overflow-hidden" />
                <ZoomImage src="/images/photos/stubiste/IMG_3458.jpg" alt="Strojno pranje pločica u stubištu — Pro Clean" sizes="(min-width:1024px) 25vw, 50vw" className="col-span-1 row-span-1 rounded-[18px] overflow-hidden" />
                <ZoomImage src="/images/photos/stubiste/IMG_3470.jpg" alt="Stroj za ribanje poda u lobby-u stambene zgrade — Pro Clean" sizes="(min-width:1024px) 25vw, 50vw" className="col-span-1 row-span-1 rounded-[18px] overflow-hidden" />

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
              </LightboxProvider>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STROJNA GENERALKA — prije/poslije + video ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF7] via-[#EAF1FF] to-[#FAFAF7] py-16 lg:py-20">
        <div aria-hidden className="absolute -top-28 -left-24 h-[340px] w-[340px] rounded-full opacity-30 blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)" }} />
        <div className="relative max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-3">Strojna generalka</p>
            <h2 className="font-extrabold text-[#0A0A0A] text-3xl md:text-4xl tracking-tight mb-4" style={{ fontFamily: "var(--font-v3-display)" }}>
              Zašto prvo čišćenje radimo strojem
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Većina firmi godinama pere istom, prljavom vodom — a ta se prljavština uvlači u pločice i fuge, tamni ih i s vremenom kvari izgled poda. Naš dvodiskni stroj izvlači nakupljene naslage iz pora i vraća pod u prvobitno stanje. Zato za prvo čišćenje uvijek preporučujemo{" "}
              <strong className="text-[#0A0A0A]">strojnu generalku</strong>.
            </p>
          </Reveal>

          {/* Before / after — clickable */}
          <Reveal variant="up" delay={100}>
            <LightboxProvider
              images={[
                "/images/photos/stubiste/strojno-stubiste-prije.jpg",
                "/images/photos/stubiste/strojno-stubiste-poslije.jpg",
              ]}
            >
              <div className="relative flex aspect-[3/2] rounded-[20px] sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-white/60 max-w-3xl mx-auto">
                <ZoomImage src="/images/photos/stubiste/strojno-stubiste-prije.jpg" alt="Stubište prije strojne generalke — Pro Clean Zagreb" sizes="(min-width:768px) 384px, 50vw" className="flex-1" />
                <ZoomImage src="/images/photos/stubiste/strojno-stubiste-poslije.jpg" alt="Stubište poslije strojne generalke — Pro Clean Zagreb" sizes="(min-width:768px) 384px, 50vw" className="flex-1" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm pointer-events-none z-20">Prije</span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#3B82F6] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm pointer-events-none z-20">Poslije</span>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] z-10 pointer-events-none" />
              </div>
            </LightboxProvider>
          </Reveal>

          {/* Videos — autoplay (stroj na djelu) */}
          <Reveal variant="up" delay={150}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mt-4">
              {[
                { src: "/videos/strojno-akcija-1.mp4", poster: "/videos/strojno-akcija-1-poster.jpg" },
                { src: "/videos/strojno-akcija-2.mp4", poster: "/videos/strojno-akcija-2-poster.jpg" },
              ].map((v) => (
                <div key={v.src} className="relative aspect-[9/16] rounded-[16px] sm:rounded-2xl overflow-hidden shadow-xl shadow-[#3B82F6]/15 ring-1 ring-white/60 bg-black">
                  <video className="w-full h-full object-cover" src={v.src} poster={v.poster} autoPlay muted loop playsInline preload="metadata" />
                </div>
              ))}
            </div>
          </Reveal>
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

      {/* ── PROBLEM vs PRO CLEAN — usporedba ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Razlika koja se vidi</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Jeftino čišćenje<br />
              <span className="italic font-normal text-[#3B82F6]">skupo košta.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#3F3F3F] leading-[1.6]">
              Čistoća zajedničkih prostora prvi je dojam koji stanari i posjetitelji imaju o vašoj zgradi. Mi nismo samo još jedna ekipa s kantom — partner smo kojem je stalo do izgleda i vrijednosti vašeg objekta.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-5 items-stretch">
            {/* Obična usluga */}
            <Reveal variant="up">
              <div className="group h-full rounded-[24px] bg-white border border-black/5 p-7 lg:p-8 transition-all duration-500 hover:border-[#FECACA] hover:shadow-[0_18px_40px_-18px_rgba(239,68,68,0.18)]">
                <div className="inline-flex items-center gap-2 text-[#9CA3AF] text-[11px] font-bold uppercase tracking-[0.16em] mb-6">
                  <span className="h-2 w-2 rounded-full bg-[#D1D5DB] group-hover:bg-[#EF4444] transition-colors duration-500" /> Obična usluga
                </div>
                <ul className="space-y-4">
                  {[
                    "Pere istom, prljavom vodom — prljavština se uvlači u pločice i pod s godinama tamni.",
                    "Preskače detalje — rukohvati, sandučići, kutovi i uglovi ostaju zaboravljeni.",
                    "Nepouzdani dolasci i otkazivanja — stanari zovu, žale se, a vama troše vrijeme.",
                    "Radi površno, samo da prođe — zgrada nikad ne ostavlja dobar prvi dojam.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[14px] text-[#6B7280] leading-[1.5] transition-all duration-300 hover:translate-x-1 hover:text-[#9CA3AF] hover:line-through decoration-[#EF4444]/50 decoration-2">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[#F3F4F6] text-[#9CA3AF] flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-300 group-hover:bg-[#FEE2E2] group-hover:text-[#EF4444] no-underline">✕</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Pro Clean */}
            <Reveal variant="up" delay={120}>
              <div className="group h-full rounded-[24px] bg-[#0A0A0A] text-white p-7 lg:p-8 shadow-2xl shadow-[#3B82F6]/20 ring-1 ring-[#3B82F6]/30 relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                {/* pulsing glow */}
                <div aria-hidden className="absolute -top-16 -right-16 h-44 w-44 rounded-full blur-[80px] pointer-events-none" style={{ background: "radial-gradient(circle,#3B82F6,transparent 70%)", animation: "pc-glow 4s ease-in-out infinite" }} />
                {/* shine sweep */}
                <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px]">
                  <div className="absolute -inset-y-8 w-1/3" style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)", transform: "skewX(-12deg)", animation: "pc-shine 5.5s ease-in-out 1s infinite" }} />
                </div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-[#93C5FD] text-[11px] font-bold uppercase tracking-[0.16em] mb-6">
                    <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-pulse" /> Pro Clean
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Strojna generalka — izvlačimo nakupljenu prljavštinu iz pora i vraćamo pod u prvobitno stanje.",
                      "Svaki detalj — pod, stepenice, rukohvati, vrata, sandučići i kutovi. Bez preskakanja.",
                      "Točnost i pouzdanost — dolazimo na vrijeme i sve rješavamo sami, bez poziva stanara.",
                      "Dugoročno održavanje — zgrada koja uvijek ostavlja dojam i čuva svoju vrijednost.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 text-[14px] text-white/85 leading-[1.5] transition-transform duration-300 hover:translate-x-1">
                        <span className="mt-0.5 h-5 w-5 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-300 group-hover:scale-110">✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <style>{`@keyframes pc-glow{0%,100%{opacity:.28}50%{opacity:.55}}@keyframes pc-shine{0%,72%{transform:skewX(-12deg) translateX(-260%);opacity:0}80%{opacity:1}94%{opacity:1}100%{transform:skewX(-12deg) translateX(720%);opacity:0}}`}</style>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={150}>
            <p className="mt-10 text-center text-[15px] text-[#3F3F3F] leading-[1.6] max-w-xl mx-auto">
              Naš cilj nije samo očistiti prostor, nego ga{" "}
              <strong className="text-[#0A0A0A]">dugoročno održavati urednim, sigurnim i ugodnim za život.</strong>
            </p>
          </Reveal>
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
