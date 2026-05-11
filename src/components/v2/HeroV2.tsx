import Image from "next/image";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">

          {/* LEFT — text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-8 lg:mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0A]" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium">
                Zagreb · Stambene zajednice · Tvrtke
              </span>
            </div>

            <h1
              className="text-[44px] sm:text-[60px] lg:text-[88px] leading-[0.98] tracking-[-0.03em] text-[#0A0A0A] font-semibold"
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              Tvoj prostor.
              <br />
              <span className="italic font-normal text-[#3F3F3F]">Naša briga.</span>
            </h1>

            <p className="mt-7 lg:mt-10 max-w-[560px] text-[16px] lg:text-[18px] leading-[1.55] text-[#3F3F3F]">
              Profesionalno čišćenje stubišta, garaža, prozora i prostora nakon
              izgradnje. Vlastita oprema, ekološka sredstva, ekipa kojoj možeš prepustiti
              ključeve bez razmišljanja.
            </p>

            <div className="mt-9 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-medium px-7 py-4 rounded-full text-[15px] hover:bg-black transition-all"
              >
                Zatraži besplatnu ponudu
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="tel:+385994840416"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-medium px-7 py-4 rounded-full text-[15px] border border-black/10 hover:border-black/30 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Nazovi nas
              </a>
            </div>

            {/* Trust strip — discrete, specific (no fake round numbers) */}
            <div className="mt-12 lg:mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-[12px] text-[#6B7280]">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Odgovor unutar 2 sata
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                R1 račun za pravna lica
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Bez ugovora i obveze
              </span>
            </div>
          </div>

          {/* RIGHT — single hero photo, full bleed feel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[24px] overflow-hidden bg-[#E5E5E0]">
              <Image
                src="/images/services/garaza-karcher.jpg"
                alt="Pro Clean — strojno ribanje garaže u Zagrebu"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              {/* Subtle bottom fade for caption legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[11px] uppercase tracking-[0.16em] opacity-80">U akciji</p>
                <p
                  className="mt-1 text-[18px] lg:text-[20px] leading-tight font-medium"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  Strojno ribanje podzemne garaže —
                  <br /> Maksimir, Zagreb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
