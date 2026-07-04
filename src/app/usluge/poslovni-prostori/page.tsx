import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProcessStepsAnimated } from "@/components/v3/ProcessStepsAnimated";
import { TypewriterText } from "@/components/v3/TypewriterText";
import { AnimatedChecklist } from "@/components/v3/AnimatedChecklist";

export const metadata: Metadata = {
  title: "Generalno čišćenje poslovnih prostora i stanova Zagreb — Pro Clean",
  description:
    "Generalno (jednokratno dubinsko) čišćenje u Zagrebu — ugostiteljstvo, uredi, cvjećarne, butici, skladišta, stanovi i kuće. Ne tjedno održavanje, već temeljiti zahvat. R1 račun. 099 484 0416.",
  keywords: [
    "generalno čišćenje Zagreb",
    "generalno čišćenje poslovnih prostora",
    "generalno čišćenje stana",
    "generalno čišćenje kuće",
    "dubinsko čišćenje stana",
    "dubinsko čišćenje Zagreb",
    "čišćenje kafića Zagreb",
    "čišćenje restorana Zagreb",
    "čišćenje ureda Zagreb",
    "čišćenje cvjećarne Zagreb",
    "čišćenje butika Zagreb",
    "čišćenje skladišta Zagreb",
    "spremačica Zagreb",
    "Pro Clean Zagreb",
  ],
  alternates: { canonical: "https://proclean.hr/usluge/poslovni-prostori" },
  openGraph: {
    title: "Čišćenje poslovnih prostora Zagreb — Pro Clean",
    description: "Generalno čišćenje kafića, restorana, ureda, cvjećarni i butika u Zagrebu. Cijena po dogovoru.",
    url: "https://proclean.hr/usluge/poslovni-prostori",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://proclean.hr/images/services/office.jpg", width: 1200, height: 630, alt: "Čišćenje poslovnih prostora Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Čišćenje poslovnih prostora Zagreb",
  description: "Profesionalno generalno čišćenje kafića, restorana, ureda, cvjećarni, butika i skladišta u Zagrebu.",
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
  offers: { "@type": "Offer", description: "Čišćenje poslovnih prostora — cijena po dogovoru", availability: "https://schema.org/InStock" },
};

const STEPS = [
  {
    n: "01",
    title: "Pregled prostora",
    desc: "Dolazimo na lokaciju, procjenjujemo prostor i dogovaramo termin koji ne ometa vaš rad — radimo i noću, vikendom i po fazama.",
  },
  {
    n: "02",
    title: "Generalno čišćenje",
    desc: "Dubinsko peremo podove, sanitarije, stolariju, stakla, opremu i sve radne površine. Posebnu pažnju posvećujemo prostorima koje vide gosti.",
  },
  {
    n: "03",
    title: "Detalji i kutevi",
    desc: "Brišemo prašinu na svim razinama, masnoće u kuhinjama, ostatke u kutevima i ispod opreme — sve što redovito čišćenje preskoči.",
  },
  {
    n: "04",
    title: "Predaja prostora",
    desc: "Prolazimo zajedno kroz prostor, otklanjamo eventualne primjedbe i izdajemo R1 račun. Prostor spreman za otvaranje sljedeći dan.",
  },
];

const TIPOVI = [
  {
    title: "Ugostiteljstvo",
    desc: "Kafići, bistroi, restorani, slastičarnice. Šank, kuhinja, sanitarije i podovi — generalno čišćenje izvan radnog vremena.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Uredi",
    desc: "Radne stanice, sale za sastanke, kuhinjice, sanitarije. Bez ometanja zaposlenika — radimo van radnog vremena.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Cvjećarne",
    desc: "Vlažni prostori, biljni ostaci, frižideri, izlozi i stakla. Generalno čišćenje nakon evenata i prije sezone.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4-4Z" /><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4-4Z" /><path d="M18 12a4 4 0 0 1-4 4 4 4 0 0 1 4-4Z" /><path d="M6 12a4 4 0 0 0 4 4 4 4 0 0 0-4-4Z" /><circle cx="12" cy="12" r="2" /><path d="M12 14v8" />
      </svg>
    ),
  },
  {
    title: "Butici i trgovine",
    desc: "Izlozi, stakla, vješalice, podovi, kabine za probu. Sjajan dojam od prvog koraka u dućan.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1.5-5h15L21 9" /><path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /><path d="M9 13a3 3 0 0 0 6 0" />
      </svg>
    ),
  },
  {
    title: "Skladišta i pogoni",
    desc: "Industrijski podovi, palete, regali, masnoće i prašina. Strojno ribanje za velike površine.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35a2 2 0 0 1 1.26-1.86l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12M6 14h12M6 10h12" />
      </svg>
    ),
  },
  {
    title: "Privatni stanovi i kuće",
    desc: "Generalno proljetno čišćenje, dubinsko čišćenje cijelog stana ili priprema pred selidbu — diskretno i pouzdano.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Hoteli i apartmani",
    desc: "Hotelske sobe, apartmani za najam, dnevne usluge i pripreme prije gostiju. Diskrecija i brzina.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16M22 4v16M2 8h20M2 16h20M6 8v8M18 8v8" />
      </svg>
    ),
  },
  {
    title: "Ordinacije i saloni",
    desc: "Liječničke ordinacije, frizerski saloni, kozmetički studiji — visoki standardi generalne čistoće.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6M12 9v6" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

const CHECKLIST = [
  "Dubinsko pranje podova — pločice, parket, vinil, beton",
  "Čišćenje šanka, radnih površina i opreme",
  "Pranje izloga, stakala i unutarnjih ostakljenja",
  "Detaljno čišćenje sanitarija i kupaonica",
  "Brisanje prašine sa svih razina — police, lampi, ventilacije",
  "Pranje stolarije, vrata i okvira prozora",
  "Usisavanje tepiha i tapeciranog namještaja",
  "Uklanjanje masnoća i tvrdokornih mrlja",
  "Vanjski ulaz, ulazni prostor i reklamne table",
  "Iznošenje otpada i završna provjera",
];

const WHY = [
  { title: "Radimo van radnog vremena", desc: "Nakon zatvaranja, noću, vikendom ili praznicima — bez ometanja vašeg poslovanja." },
  { title: "Generalno, ne održavanje", desc: "Mi dolazimo na jednokratno generalno čišćenje — dubinski, do detalja, prostor kao nov." },
  { title: "R1 račun", desc: "Izdajemo R1 za obrtnike, tvrtke i investitore. PDV uključen, bez skrivenih troškova." },
  { title: "Vlastita oprema", desc: "Profesionalni strojevi, sredstva i ekipa koja zna što radi. Bez improvizacije." },
];

const FAQ = [
  { q: "Što znači 'generalno čišćenje'?", a: "Generalno čišćenje je jednokratno dubinsko čišćenje cijelog prostora — peremo podove, čistimo stolariju, sanitarije, izloge, masnoće u kuhinjama i sve detalje koje redovito čišćenje preskoči. To NIJE tjedno/mjesečno održavanje, već jednokratni temeljiti zahvat — pred otvaranje, nakon evenata, prije sezone ili nakon dužeg perioda bez generalke." },
  { q: "Radite li van radnog vremena?", a: "Da — to je naš standard za poslovne prostore. Najčešće čistimo nakon zatvaranja, noću ili vikendom, kako vaš rad ne bi bio prekinut ni minute." },
  { q: "Možete li doći jednokratno ili samo s ugovorom?", a: "Najčešće dolazimo jednokratno — generalno čišćenje pred otvaranje sezone, nakon evenata, adaptacije ili kad prostor zahtijeva temeljit zahvat. Po dogovoru radimo i redovito održavanje." },
  { q: "Koje vrste prostora čistite?", a: "Ugostiteljstvo (kafiće, bistroe, restorane), urede, cvjećarne, butike, trgovine, skladišta, ordinacije, salone, hotele, kao i privatne stanove i kuće. Svaki prostor ima svoj plan." },
  { q: "Koliko košta generalno čišćenje?", a: "Cijena ovisi o površini, vrsti prostora i stanju. Dolazimo besplatno na uvid i šaljemo ponudu unutar 24 sata — bez obveze." },
  { q: "Koristite li ekološka sredstva?", a: "Imamo i ekološku liniju sredstava bez agresivnih kemikalija — idealno za ugostiteljstvo, ordinacije i prostore s djecom." },
];

export default function PoslovniProstoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative bg-white pt-8 lg:pt-14 pb-0 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[440px] w-[720px] rounded-full opacity-25 blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)" }}
        />

        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl">

            {/* Left — text */}
            <div className="pb-12 lg:pb-20 relative">
              <Reveal variant="up">
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
                  <span className="text-gray-300">›</span>
                  <span className="text-xs text-gray-500 font-medium">Čišćenje poslovnih prostora</span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={100}>
                <h1 className="font-semibold text-[#0A0A0A] text-[40px] sm:text-[52px] lg:text-[64px] leading-[0.98] tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Generalno čišćenje<br />
                  <TypewriterText text="poslovnih prostora." className="italic font-normal text-[#3B82F6]" delay={500} speed={70} />
                </h1>
              </Reveal>

              <Reveal variant="up" delay={250}>
                <div className="relative pl-5 mb-8 max-w-lg">
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#3B82F6]/60 to-transparent rounded-full" />
                  <p className="text-[16px] lg:text-[17px] leading-[1.55] text-[#3F3F3F]">
                    Ugostiteljstvo, uredi, cvjećarne, butici, skladišta, stanovi i kuće —
                    <strong className="text-[#0A0A0A]"> jednokratno dubinsko čišćenje</strong>, ne redovito održavanje.
                    Prostor kao nov.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={350}>
                <ul className="grid gap-2.5 mb-9 max-w-md">
                  {[
                    "Jednokratno generalno — ne tjedno održavanje",
                    "Radimo van radnog vremena, vikendom i noću",
                    "Vlastita oprema, profesionalna sredstva, R1 račun",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-[#0A0A0A]"
                      style={{ animation: `ppFadeInLeft 700ms cubic-bezier(0.16,1,0.3,1) ${500 + i * 100}ms backwards` }}
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <style>{`@keyframes ppFadeInLeft { from { opacity: 0; transform: translateX(-12px) } to { opacity: 1; transform: translateX(0) } }`}</style>
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

          </div>
        </div>
      </section>

      {/* ── REFERENCE — CVJEĆARNA SKRINJARIĆ + GARDEROBA ── */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-5 text-center">Naše reference</Reveal>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            <Reveal variant="left">
              <a href="/reference/cvjecarna-skrinjaric" className="group block rounded-[20px] overflow-hidden shadow-lg border border-gray-100 relative h-full">
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]">
                  <Image
                    src="/images/reference/cvjecarna-skrinjaric.jpg"
                    alt="Cvjećarna Skrinjarić — Pro Clean Zagreb"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                    style={{ transform: "translateZ(0)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-1">Referenca</span>
                      <span className="text-white font-extrabold text-lg md:text-xl leading-snug block">Cvjećarna Skrinjarić<br /> — čišćenje nakon evenata</span>
                      <span className="text-white/60 text-xs block mt-1">Generalno čišćenje nakon velikih akcija</span>
                    </div>
                    <span className="flex items-center gap-1.5 bg-white text-[#3B82F6] text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#3B82F6] group-hover:text-white transition-colors shrink-0">
                      Saznaj više →
                    </span>
                  </div>
                  <span className="absolute top-4 left-5 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-full">Cvjećarna</span>
                </div>
              </a>
            </Reveal>

            <Reveal variant="right" delay={150}>
              <a href="/reference/garderoba" className="group block rounded-[20px] overflow-hidden shadow-lg border border-gray-100 relative h-full">
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]">
                  <Image
                    src="/images/photos/izgradnja/IMG_3035.jpg"
                    alt="Garderoba Store coffee shop — Pro Clean Zagreb"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                    style={{ transform: "translateZ(0)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-1">Referenca</span>
                      <span className="text-white font-extrabold text-lg md:text-xl leading-snug block">Garderoba Store<br /> — coffee shop</span>
                      <span className="text-white/60 text-xs block mt-1">Čišćenje nakon renovacije</span>
                    </div>
                    <span className="flex items-center gap-1.5 bg-white text-[#3B82F6] text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#3B82F6] group-hover:text-white transition-colors shrink-0">
                      Pogledaj →
                    </span>
                  </div>
                  <span className="absolute top-4 left-5 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-full">Coffee shop</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TIPOVI PROSTORA ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Što čistimo</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Devet tipova prostora —<br />
              <span className="italic font-normal text-[#3B82F6]">jedan standard.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIPOVI.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} variant="up">
                <div className="group bg-white rounded-[20px] p-7 border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#BFDBFE]/60 transition-all duration-300 h-full cursor-default relative overflow-hidden">
                  {/* Shine on hover */}
                  <span
                    aria-hidden
                    className="absolute -inset-y-8 -left-1/4 w-1/3 pointer-events-none opacity-0 group-hover:opacity-100 z-0"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(59,130,246,0.08) 50%, transparent 70%)",
                      transform: "skewX(-12deg) translateX(-100%)",
                      animation: "pp-card-shine 1.2s cubic-bezier(0.65,0,0.35,1)",
                    }}
                  />
                  <div className="relative">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-[14px] bg-[#EFF6FF] text-[#3B82F6] mb-5 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                      {t.icon}
                    </span>
                    <h3 className="font-semibold text-[#0A0A0A] text-[18px] leading-snug mb-2" style={{ fontFamily: "var(--font-v3-display)" }}>{t.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@keyframes pp-card-shine { 0% { transform: skewX(-12deg) translateX(-100%) } 100% { transform: skewX(-12deg) translateX(700%) } }`}</style>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Naš proces</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              4 koraka do<br />
              <span className="italic font-normal text-[#3B82F6]">savršenog prostora.</span>
            </h2>
          </Reveal>

          <div className="md:hidden max-w-sm mx-auto">
            <ProcessStepsAnimated steps={STEPS} />
          </div>

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

      {/* ── ŠTO JE UKLJUČENO ── */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Što je uključeno</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Svaki kvadrat —<br />
              <span className="italic font-normal text-[#3B82F6]">bez improvizacije.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#3F3F3F] leading-[1.6]">
              Radimo po checklistama prilagođenima vašoj vrsti prostora. Bez univerzalnih recepata.
            </p>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <AnimatedChecklist items={CHECKLIST} />
          </div>
        </div>
      </section>

      {/* ── ZAŠTO PRO CLEAN ── */}
      <section className="border-y border-black/5 bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal className="mb-14 lg:mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Zašto Pro Clean</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Standard kojem se<br />
              <span className="italic font-normal text-[#3B82F6]">vraćaju klijenti.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {WHY.map((it, i) => (
              <Reveal key={it.title} delay={i * 120} variant="up">
                <div className="group relative">
                  <span
                    className="absolute -top-3 left-0 h-[2px] w-8 bg-[#3B82F6] origin-left"
                    style={{ animation: "pp-line-grow 800ms cubic-bezier(0.16,1,0.3,1) backwards", animationDelay: `${i * 120}ms` }}
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

          <style>{`@keyframes pp-line-grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
        </div>
      </section>

      {/* ── FULL CTA ── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5">Zatraži ponudu</p>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-4" style={{ fontFamily: "var(--font-v3-display)" }}>
            Vaše poslovanje ne staje —<br />
            <span className="text-[#3B82F6] italic font-normal">naše čišćenje radi.</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.65] max-w-[500px] mx-auto mb-10">
            Pošaljite nam opis prostora i poželjne termine. Ponudu šaljemo unutar 24 sata.
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
                href: "/usluge/stubiste", title: "Čišćenje stubišta", sub: "Stambene zgrade · tjedno",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h4v-4h4v-4h4v-4h4v-4h4"/></svg>,
              },
              {
                href: "/usluge/izgradnja", title: "Čišćenje nakon izgradnje", sub: "Novogradnja i renovacije",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M5 22V8l7-5 7 5v14"/><path d="M10 14h4"/></svg>,
              },
              {
                href: "/usluge/prozori", title: "Pranje prozora", sub: "Iznutra i izvana · na visini",
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
