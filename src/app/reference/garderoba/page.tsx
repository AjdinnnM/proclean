import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageLightbox } from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "Garderoba Store — Čišćenje nakon renovacije coffee shopa | Pro Clean",
  description:
    "Pro Clean angažiran za grubo čišćenje i završnu pripremu prostora coffee shopa Garderoba Store u Zagrebu nakon renovacije. Izvođač adaptacije: Creato adaptacije i dizajn.",
  alternates: { canonical: "https://proclean.hr/reference/garderoba" },
  openGraph: {
    title: "Garderoba Store — Čišćenje nakon renovacije | Pro Clean Zagreb",
    description: "Završno čišćenje coffee shopa Garderoba Store nakon adaptacije — stolarija, stakla, sanitarni čvorovi. Izvođač: Creato.",
    url: "https://proclean.hr/reference/garderoba",
    siteName: "Pro Clean Zagreb",
    locale: "hr_HR",
    type: "website",
    images: [{ url: "https://proclean.hr/images/photos/izgradnja/IMG_2991.jpg", width: 1200, height: 630, alt: "Garderoba Store coffee shop — Pro Clean Zagreb" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Garderoba Store — Čišćenje nakon renovacije coffee shopa",
  description: "Pro Clean angažiran za grubo čišćenje i završnu pripremu prostora coffee shopa Garderoba Store u Zagrebu nakon adaptacije.",
  author: { "@type": "Organization", name: "Pro Clean", url: "https://proclean.hr" },
  image: "https://proclean.hr/images/photos/izgradnja/IMG_2991.jpg",
};

const PAIRS = [
  { before: "/images/photos/izgradnja/IMG_2990.jpg", after: "/images/photos/izgradnja/IMG_2991.jpg", label: "Glavni prostor" },
  { before: "/images/photos/izgradnja/IMG_3018.jpg", after: "/images/photos/izgradnja/IMG_3044.jpg", label: "Detalj interijera" },
  { before: "/images/photos/izgradnja/IMG_2968.jpg", after: "/images/photos/izgradnja/IMG_3040.jpg", label: "WC školjka" },
  { before: "/images/photos/izgradnja/IMG_2973.jpg", after: "/images/photos/izgradnja/IMG_3058.jpg", label: "Kupaonica" },
];

export default function GarzedobaReferencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#FAFAF7] pt-8 pb-0">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
            <Link href="/" className="hover:text-[#3B82F6] transition-colors">Pro Clean</Link>
            {" › "}
            <Link href="/usluge/izgradnja" className="hover:text-[#3B82F6] transition-colors">Čišćenje nakon izgradnje</Link>
            {" › "}
            <span>Garderoba Store</span>
          </p>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/8", minHeight: "220px" }}>
        <Image
          src="/images/photos/izgradnja/IMG_2991.jpg"
          alt="Garderoba Store coffee shop — Pro Clean Zagreb"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-5 pb-8 md:pb-14">
          <span className="inline-flex items-center gap-2 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
            Čišćenje nakon renovacije
          </span>
          <h1 className="font-extrabold text-white text-xl sm:text-3xl md:text-5xl xl:text-[52px] leading-tight tracking-tight max-w-3xl" style={{ fontFamily: "var(--font-v3-display)" }}>
            Garderoba Store —<br className="hidden sm:block" /> završno čišćenje coffee shopa
          </h1>
        </div>
      </section>

      {/* ── UVOD ── */}
      <section className="bg-[#FAFAF7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Sidebar */}
            <div className="lg:order-2">
              <div className="bg-white rounded-[20px] p-7 border border-gray-100 shadow-sm sticky top-24">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5">O projektu</p>
                <dl className="space-y-4">
                  {[
                    { label: "Projekt", value: "Garderoba Store — Coffee Shop" },
                    { label: "Izvođač adaptacije", value: "Creato adaptacije i dizajn" },
                    { label: "Vrsta posla", value: "Čišćenje nakon renovacije" },
                    { label: "Uloga Pro Clean", value: "Grubo čišćenje i finish priprema" },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <dt className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</dt>
                      <dd className="text-sm font-bold text-[#0A0A0A]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <a href="/kontakt" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-medium px-6 py-3.5 rounded-full hover:bg-[#2563EB] transition-all text-sm">
                  Zatraži ponudu za vaš projekt →
                </a>
              </div>
            </div>

            {/* Tekst */}
            <div className="lg:col-span-2 lg:order-1">
              <p className="text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.18em] mb-4">Kako je nastao ovaj projekt</p>
              <h2 className="font-extrabold text-[#0A0A0A] text-2xl md:text-3xl tracking-tight mb-6" style={{ fontFamily: "var(--font-v3-display)" }}>
                Renovacija coffee shopa — od gradilišta do otvaranja
              </h2>

              <div className="space-y-5 text-gray-500 text-base leading-relaxed">
                <p>
                  Garderoba Store odlučila je otvoriti vlastiti coffee shop unutar svog prostora u Zagrebu.
                  Adaptaciju i dizajn interijera preuzeo je <strong className="text-[#0A0A0A]">Creato adaptacije i dizajn</strong>,
                  a Pro Clean je angažiran za grubo čišćenje i završnu pripremu prostora — onaj korak između
                  kraja građevinskih radova i prvog dana rada.
                </p>
                <p>
                  Prostor je po završetku adaptacije zahtijevao temeljito čišćenje: prašina od bušenja i
                  rezanja, ostaci ljepila i naljepnica na staklima, zaprljana nova stolarija te sanitarni
                  čvorovi koje nitko nije dirao dok su trajali radovi. Naš zadatak bio je ostaviti sve
                  u stanju u kakvom se može otvoriti sutradan.
                </p>
                <p>
                  Čistili smo stolariju detaljno — okvire, šarke, pragove i klupčice. Stakla smo ribali
                  od ljepila i zaštitnih folija, skidali naljepnice s novih površina i polirali do
                  kristalne čistoće. Sanitarni čvorovi su dezinficirani i pripremljeni za upotrebu.
                  Cijeli pod, zidovi i svi detalji pregledani su na kraju još jedanput.
                </p>
                <p>
                  Rezultat je prostor koji je spreman za otvaranje — čist do zadnjeg kuta, bez tragova
                  gradilišta, s uređenjem koje je Creato pažljivo osmislio i koje smo mi jednako pažljivo
                  zaštitili i pripremili.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIJE / POSLIJE + LIGHTBOX ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-5">
          <p className="text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.18em] mb-6 text-center">Fotografije s projekta</p>
          <ImageLightbox
            pairs={PAIRS}
            extras={[
              "/images/photos/izgradnja/IMG_2983.jpg",
              "/images/photos/izgradnja/IMG_3036.jpg",
              "/images/photos/izgradnja/IMG_3060.jpg",
            ]}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-5">Zatraži ponudu</p>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-4" style={{ fontFamily: "var(--font-v3-display)" }}>
            Završavate renovaciju?<br />
            <span className="text-[#3B82F6] italic font-normal">Tu smo za vas.</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] text-[#3F3F3F] leading-[1.65] max-w-[500px] mx-auto mb-10">
            Surađujemo s izvođačima i investitorima na završnom čišćenju nakon adaptacija i izgradnje.
            Kontaktirajte nas — dogovaramo termin prema vašem roku.
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
