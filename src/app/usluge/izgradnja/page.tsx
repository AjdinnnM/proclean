import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PhotoGallery } from "@/components/Lightbox";
import { ProcessStepsAnimated } from "@/components/v3/ProcessStepsAnimated";
import { TypewriterText } from "@/components/v3/TypewriterText";
import { AnimatedChecklist } from "@/components/v3/AnimatedChecklist";
import { FeaturedProjects } from "@/components/v3/FeaturedProjects";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Čišćenje nakon građevinskih radova Zagreb — novogradnja, renovacija, poslovni objekti | Pro Clean",
  description:
    "Završno čišćenje nakon gradnje i renovacije u Zagrebu — stanovi, kuće, zgrade i poslovni objekti. Uklanjamo građevinsku prašinu, ostatke boje, silikona i ljepila. Prostor spreman za useljenje i primopredaju. 099 484 0416.",
  keywords: [
    "čišćenje nakon građevinskih radova Zagreb",
    "čišćenje nakon izgradnje Zagreb",
    "čišćenje nakon gradnje",
    "čišćenje nakon renovacije Zagreb",
    "čišćenje nakon adaptacije",
    "čišćenje novogradnje Zagreb",
    "čišćenje stana nakon radova",
    "čišćenje kuće nakon gradnje",
    "čišćenje poslovnih objekata nakon izgradnje",
    "završno čišćenje zgrade",
    "uklanjanje građevinske prašine",
    "Pro Clean Zagreb",
  ],
  alternates: { canonical: "https://www.procleanzg.com/usluge/izgradnja" },
  openGraph: {
    title: "Čišćenje nakon građevinskih radova Zagreb — Pro Clean",
    description:
      "Završno čišćenje novogradnje, renovacija i poslovnih objekata u Zagrebu. Od 10.000 m² zgrada do stanova.",
    url: "https://www.procleanzg.com/usluge/izgradnja",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://www.procleanzg.com/images/photos/vukovarska/vukovarska-zgrada.jpg", width: 1200, height: 630, alt: "Čišćenje nakon građevinskih radova — Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Čišćenje nakon građevinskih radova Zagreb",
  serviceType: "Čišćenje nakon izgradnje, renovacije i adaptacije",
  description:
    "Završno čišćenje nakon gradnje i renovacije u Zagrebu — stanovi, kuće, stambene zgrade i poslovni objekti. Uklanjanje građevinske prašine, ostataka boje, silikona i ljepila.",
  provider: {
    "@type": "LocalBusiness",
    name: "Pro Clean",
    telephone: "+385994840416",
    email: "proclean.hr@outlook.com",
    address: { "@type": "PostalAddress", addressLocality: "Zagreb", postalCode: "10000", addressCountry: "HR" },
    url: "https://www.procleanzg.com",
    openingHours: "Mo-Sa 08:00-20:00",
  },
  areaServed: { "@type": "City", name: "Zagreb" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Čišćenje nakon građevinskih radova",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Čišćenje nakon izgradnje novogradnje" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Čišćenje nakon renovacije i adaptacije stana" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Čišćenje kuće nakon gradnje" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Završno čišćenje poslovnih objekata i zgrada" } },
    ],
  },
  offers: { "@type": "Offer", description: "Čišćenje nakon građevinskih radova — cijena po dogovoru", availability: "https://schema.org/InStock" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Pro Clean", item: "https://www.procleanzg.com" },
    { "@type": "ListItem", position: 2, name: "Čišćenje nakon izgradnje", item: "https://www.procleanzg.com/usluge/izgradnja" },
  ],
};

const STEPS = [
  { n: "01", title: "Grubo čišćenje", desc: "Uklanjamo šut, krupni otpad i ostatke materijala." },
  { n: "02", title: "Skidanje naslaga", desc: "Boja, silikon, ljepilo i estrih — bez oštećenja novih površina." },
  { n: "03", title: "Dubinsko pranje", desc: "Prozori, stolarija, pločice, sanitarije i podovi." },
  { n: "04", title: "Primopredaja", desc: "Završna kontrola i prostor spreman za useljenje." },
];

const WHY = [
  { title: "Svaki objekt", desc: "Stanovi, kuće, zgrade, uredi i poslovni prostori." },
  { title: "Rok je rok", desc: "Prilagođavamo se vašem terminu primopredaje." },
  { title: "Prava sredstva", desc: "Bez oštećenja novih podova, stolarije i stakla." },
  { title: "R1 račun", desc: "Za investitore, izvođače i tvrtke." },
];

const CHECKLIST = [
  "Uklanjanje građevinskog otpada i šuta",
  "Skidanje ostataka boje, silikona i ljepila",
  "Pranje i poliranje keramičkih pločica",
  "Čišćenje i poliranje sanitarija i armatela",
  "Pranje prozora i staklenih površina",
  "Čišćenje stolarije, okvira i pragova",
  "Pranje radijatora i cijevi",
  "Čišćenje podova — parket, laminat, kamen",
  "Brisanje zidova i stropova od prašine",
  "Završno usisavanje i brisanje podova",
];

const FAQ = [
  { q: "Kada trebam naručiti čišćenje nakon izgradnje?", a: "Idealno odmah po završetku svih radova — prije unošenja namještaja. Što prije počnemo, lakše je ukloniti građevinsku prašinu koja se taloži na svim površinama." },
  { q: "Koliko traje čišćenje?", a: "Ovisi o površini i stanju prostora. Za prosječan stan (60–80 m²) tipično 4–6 sati. Za veće prostore dolazimo na besplatni pregled i dajemo procjenu." },
  { q: "Čistite li i poslovne prostore?", a: "Da — imamo iskustvo s uredima, hotelima, garderobama, buticima i trgovačkim prostorima. Prilagođavamo se rasporedu i rokovima otvaranja." },
  { q: "Možete li skinuti ostatke silikona i boje?", a: "Da — to je standardni dio našeg zahvata. Koristimo profesionalna sredstva koja uklanjaju naslage bez oštećivanja novih površina." },
  { q: "Trebaju li radnici ikakav pristup?", a: "Trebamo neometani pristup prostoru. Struja i voda moraju biti aktivni. Nije potrebno da budete prisutni cijelo vrijeme." },
  { q: "Izdajete li račun?", a: "Da, izdajemo R1 račun za investitore, tvrtke i fizičke osobe." },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function IzgradnjaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

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
                  <span className="text-xs text-gray-500 font-medium">Čišćenje nakon izgradnje</span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={100}>
                <h1 className="font-semibold text-[#0A0A0A] text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                  Prostor spreman<br />
                  <TypewriterText text="za useljenje." className="italic font-normal text-[#3B82F6]" delay={500} speed={70} />
                </h1>
              </Reveal>

              <Reveal variant="up" delay={250}>
                <div className="relative pl-5 mb-8 max-w-lg">
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#3B82F6]/60 to-transparent rounded-full" />
                  <p className="text-[16px] lg:text-[17px] leading-[1.55] text-[#3F3F3F]">
                    Generalno čišćenje nakon izgradnje, renovacije ili adaptacije.
                    Uklanjamo prašinu, boju, silikon i ostatke materijala — predajemo vam čist prostor.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={350}>
                <ul className="grid gap-2.5 mb-9 max-w-md">
                  {[
                    "Uklanjamo građevinsku prašinu i ostatke materijala",
                    "Skidamo boju, silikon i ljepila",
                    "Stanovi, kuće, uredi, hoteli, butici",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-[#0A0A0A]"
                      style={{ animation: `izFadeInLeft 700ms cubic-bezier(0.16,1,0.3,1) ${500 + i * 100}ms backwards` }}
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <style>{`@keyframes izFadeInLeft { from { opacity: 0; transform: translateX(-12px) } to { opacity: 1; transform: translateX(0) } }`}</style>
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

            {/* Right — image with shine sweep */}
            <Reveal variant="up" delay={200} className="relative lg:self-stretch flex items-end justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none h-[360px] lg:h-full lg:min-h-[520px] rounded-[20px] overflow-hidden shadow-2xl shadow-black/10 group">
                <Image
                  src="/images/services/izgradnja-popup.jpg"
                  alt="Čišćenje nakon izgradnje — Pro Clean Zagreb"
                  fill priority
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />

                {/* Periodic shine sweep */}
                <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute -inset-y-12 w-1/3"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                      transform: "skewX(-12deg) translateX(-50%)",
                      animation: "iz-shine 7s ease-in-out 3s infinite",
                    }}
                  />
                </div>
                <style>{`@keyframes iz-shine { 0%, 70% { transform: skewX(-12deg) translateX(-200%); opacity: 0 } 78% { opacity: 1 } 92% { opacity: 1 } 100% { transform: skewX(-12deg) translateX(700%); opacity: 0 } }`}</style>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* ── REFERENCA — GARDEROBA ── */}
      <section className="bg-[#F5F5F0] py-12">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-5 text-center">Referenca</Reveal>
          <Reveal variant="left">
          <a href="/reference/garderoba" className="group block rounded-[20px] overflow-hidden shadow-lg border border-gray-100 relative">
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px]">
              <Image
                src="/images/photos/izgradnja/ciscenje-nakon-adaptacije-kafic.jpg"
                alt="Garderoba Store coffee shop — Pro Clean Zagreb"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width:1024px) 900px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-1">Referenca</span>
                  <span className="text-white font-extrabold text-lg md:text-2xl leading-snug block">Garderoba Store<br className="sm:hidden" /> — Coffee Shop</span>
                  <span className="text-white/60 text-xs md:text-sm block mt-1">Adaptacija: Creato adaptacije i dizajn</span>
                </div>
                <span className="flex items-center gap-1.5 bg-white text-[#3B82F6] text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#3B82F6] group-hover:text-white transition-colors shrink-0">
                  Saznaj više →
                </span>
              </div>
              <span className="absolute top-4 left-5 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-full">Čišćenje nakon renovacije</span>
            </div>
          </a>
          </Reveal>
        </div>
      </section>


      {/* ── PRIJE / POSLIJE ── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-10">
            <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-3">Naši radovi</p>
            <h2 className="font-extrabold text-[#0A0A0A] text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "var(--font-v3-display)" }}>
              Prije i poslije — isti prostor, jedan dolazak
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { before: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-prije.jpg", after: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-poslije.jpg" },
              { before: "/images/photos/izgradnja/ciscenje-novogradnje-prije.jpg", after: "/images/photos/izgradnja/ciscenje-novogradnje-poslije.jpg" },
            ].map((pair, i) => (
              <Reveal key={i} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-gray-100">
                <div className="flex relative" style={{ aspectRatio: "16/9" }}>
                  <div className="relative w-1/2 overflow-hidden">
                    <Image
                      src={pair.before}
                      alt="Prostor prije čišćenja"
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-white z-10 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
                  <div className="relative w-1/2 overflow-hidden">
                    <Image
                      src={pair.after}
                      alt="Prostor poslije čišćenja"
                      fill
                      className="object-cover object-right"
                      sizes="(min-width:1024px) 25vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCES + ŠTO JE UKLJUČENO (spojeno) ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Kako radimo</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Od građevinske prašine do<br />
              <span className="italic font-normal text-[#3B82F6]">spremnog prostora.</span>
            </h2>
          </Reveal>

          {/* 4 koraka */}
          <div className="md:hidden max-w-sm mx-auto">
            <ProcessStepsAnimated steps={STEPS} />
          </div>
          <div className="hidden md:grid md:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} variant="up">
                <div className="group bg-[#FAFAF7] rounded-[20px] p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300 h-full">
                  <div className="font-extrabold text-4xl text-[#DBEAFE] group-hover:text-[#93C5FD] leading-none mb-3 transition-colors">{s.n}</div>
                  <h3 className="font-semibold text-[#0A0A0A] text-[15px] mb-1.5">{s.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Što ulazi u uslugu */}
          <Reveal variant="up" delay={120} className="mt-10 rounded-[22px] bg-[#FAFAF7] border border-black/5 p-7 lg:p-9">
            <h3 className="font-semibold text-[#0A0A0A] text-[18px] lg:text-[20px] tracking-tight mb-5" style={{ fontFamily: "var(--font-v3-display)" }}>
              Što ulazi u čišćenje nakon građevinskih radova
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-2.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-[#3F3F3F] leading-[1.5]">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#DBEAFE] text-[#3B82F6] flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── GALERIJA — NAŠ RAD ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-10 max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-3">Galerija</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Naš rad nakon <span className="italic font-normal text-[#3B82F6]">izgradnje.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <PhotoGallery
              images={[
                { src: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-zagreb-1.jpg", alt: "Čišćenje nakon izgradnje — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-zagreb-2.jpg", alt: "Uklanjanje građevinske prašine — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-nakon-renovacije-zagreb.jpg", alt: "Završno čišćenje novogradnje — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-prije.jpg", alt: "Pranje podova nakon radova — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-nakon-izgradnje-poslije.jpg", alt: "Detaljno čišćenje prostora nakon izgradnje — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-novogradnje-prije.jpg", alt: "Čišćenje stakla i površina nakon gradnje — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-gradjevinske-prasine-zagreb.jpg", alt: "Priprema prostora za useljenje — Pro Clean Zagreb" },
                { src: "/images/photos/izgradnja/ciscenje-stana-nakon-izgradnje.jpg", alt: "Završno poliranje nakon izgradnje — Pro Clean Zagreb" },
                { src: "/images/photos/vukovarska/vukovarska-strojno-pranje.jpg", alt: "Strojno pranje podova nakon građevinskih radova — poslovni objekt Zagreb" },
                { src: "/images/photos/vukovarska/vukovarska-pranje-stakla.jpg", alt: "Uklanjanje zaštitne folije i naslaga sa staklenih stijena nakon gradnje" },
                { src: "/images/photos/vukovarska/vukovarska-fasada-ljestve.jpg", alt: "Pranje prozora na fasadi poslovne zgrade nakon izgradnje" },
                { src: "/images/photos/vukovarska/vukovarska-usisavanje.jpg", alt: "Uklanjanje građevinske prašine iz ureda nakon radova" },
                { src: "/images/photos/vukovarska/vukovarska-ured.jpg", alt: "Uredski prostor spreman za primopredaju nakon završnog čišćenja" },
                { src: "/images/photos/vukovarska/vukovarska-stubiste.jpg", alt: "Očišćeno stubište poslovnog objekta nakon građevinskih radova" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ── ZAŠTO PRO CLEAN — TrustV3 minimal ── */}
      <section className="border-y border-black/5 bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal className="mb-14 lg:mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">Zašto Pro Clean</p>
            <h2 className="font-semibold text-[#0A0A0A] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-v3-display)" }}>
              Iskustvo koje<br />
              <span className="italic font-normal text-[#3B82F6]">se vidi.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {WHY.map((it, i) => (
              <Reveal key={it.title} delay={i * 120} variant="up">
                <div className="group relative">
                  <span
                    className="absolute -top-3 left-0 h-[2px] w-8 bg-[#3B82F6] origin-left"
                    style={{ animation: "iz-line-grow 800ms cubic-bezier(0.16,1,0.3,1) backwards", animationDelay: `${i * 120}ms` }}
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

          <style>{`@keyframes iz-line-grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
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
                href: "/usluge/stubiste", title: "Čišćenje stubišta", sub: "Redovito i jednokratno",
                icon: <ServiceIcon slug="stubiste" />,
              },
              {
                href: "/usluge/garaza", title: "Čišćenje garaža", sub: "Strojno ribanje poda",
                icon: <ServiceIcon slug="garaza" />,
              },
              {
                href: "/usluge/prozori", title: "Pranje prozora", sub: "Iznutra i izvana · na visini",
                icon: <ServiceIcon slug="prozori" />,
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
