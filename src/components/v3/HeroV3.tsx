import Image from "next/image";

export function HeroV3() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft blue glow background */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">
            <h1
              className="text-[44px] sm:text-[60px] lg:text-[88px] leading-[0.98] tracking-[-0.03em] text-[#0A0A0A] font-semibold"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Tvoj prostor.
              <br />
              <span className="italic font-normal text-[#3B82F6]">
                Naša briga.
              </span>
            </h1>

            <p className="mt-7 lg:mt-10 max-w-[560px] text-[16px] lg:text-[18px] leading-[1.55] text-[#3F3F3F]">
              Profesionalno čišćenje stubišta, garaža, prozora i prostora nakon
              izgradnje. Vlastita oprema, ekološka sredstva, ekipa kojoj možeš prepustiti
              ključeve bez razmišljanja.
            </p>

            <div className="mt-9 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-medium px-7 py-4 rounded-full text-[15px] hover:bg-[#2563EB] active:scale-[0.98] transition-all shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)] overflow-hidden"
              >
                {/* Shine on hover */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 -left-1/2 w-1/3 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
                    transform: "skewX(-12deg)",
                    animation: "btn-shine 1.1s cubic-bezier(0.65,0,0.35,1)",
                  }}
                />
                <span className="relative">Zatraži besplatnu ponudu</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="relative group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="tel:+385994840416"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-medium px-7 py-4 rounded-full text-[15px] border border-black/10 hover:border-[#3B82F6]/40 active:scale-[0.98] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Nazovi nas
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 lg:mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-[12px] text-[#6B7280]">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Odgovor unutar 2 sata
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                R1 račun za pravna lica
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Bez ugovora i obveze
              </span>
            </div>
          </div>

          {/* RIGHT — samo desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)]">
              <Image
                src="/images/services/izgradnja-popup.jpg"
                alt="Pro Clean — čišćenje nakon izgradnje"
                fill
                priority
                sizes="480px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Periodic shine sweep — every ~7s */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none overflow-hidden"
              >
                <div
                  className="absolute -inset-y-12 w-1/3"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                    transform: "skewX(-12deg) translateX(-50%)",
                    animation: "hero-shine 7s ease-in-out 3s infinite",
                  }}
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#93C5FD]">Usluga</p>
                <p
                  className="mt-1 text-[18px] lg:text-[20px] leading-tight font-medium"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  Čišćenje nakon izgradnje
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes hero-shine {
          0%, 70% { transform: skewX(-12deg) translateX(-200%); opacity: 0 }
          78% { opacity: 1 }
          92% { opacity: 1 }
          100% { transform: skewX(-12deg) translateX(700%); opacity: 0 }
        }
        @keyframes btn-shine {
          0% { transform: skewX(-12deg) translateX(0%) }
          100% { transform: skewX(-12deg) translateX(500%) }
        }
      `}</style>
    </section>
  );
}
