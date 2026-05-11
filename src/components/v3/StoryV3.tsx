import Image from "next/image";

export function StoryV3() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden border-y border-black/5">
      {/* Side glow */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/2 -translate-y-1/2 -z-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[24px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-25px_rgba(59,130,246,0.25)]">
              <Image
                src="/images/photos/img-0426.jpg"
                alt="Pro Clean — stambena zgrada u održavanju, Zagreb"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-5 right-3 sm:-bottom-6 sm:-right-6 lg:-right-12 max-w-[240px] sm:max-w-[260px] bg-white text-[#0A0A0A] rounded-[16px] p-4 sm:p-5 border border-[#3B82F6]/15 shadow-[0_20px_60px_-20px_rgba(59,130,246,0.3)]">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] mb-1.5 sm:mb-2 font-medium">Aktivno održavamo</p>
              <p
                className="text-[24px] sm:text-[28px] leading-none font-semibold"
                style={{ fontFamily: "var(--font-v3-display)" }}
              >
                100+ zgrada
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#3F3F3F] mt-1">u Zagrebu i okolici</p>
            </div>
          </div>

          {/* COPY */}
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-6">
              Tko stoji iza Pro Cleana
            </p>

            <h2
              className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Mi ne čistimo<br />
              <span className="text-[#3B82F6] italic font-normal">da bude “ok”.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-[1.65] text-[#3F3F3F] max-w-[520px]">
              <p>
                Čistimo da te ljudi pitaju tko je radio. Svaka stambena zajednica
                koju održavamo dobiva istu ekipu, istu opremu, isti standard.
              </p>
              <p>
                Naša filozofija je jednostavna: <span className="text-[#0A0A0A]">prostor u kojem boraviš
                oblikuje kako se osjećaš</span>. Zato pristupamo svakom poslu — od malog
                stana nakon adaptacije do podzemne garaže od 2.000 m² —
                s istom pažnjom.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[460px] border-t border-black/8 pt-8">
              <div>
                <p
                  className="text-[36px] leading-none font-semibold tracking-tight text-[#3B82F6]"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  2h
                </p>
                <p className="mt-2 text-[12px] text-[#6B7280] leading-snug">Prosječno čekanje na odgovor</p>
              </div>
              <div>
                <p
                  className="text-[36px] leading-none font-semibold tracking-tight text-[#3B82F6]"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  R1
                </p>
                <p className="mt-2 text-[12px] text-[#6B7280] leading-snug">Račun za pravna lica</p>
              </div>
              <div>
                <p
                  className="text-[36px] leading-none font-semibold tracking-tight text-[#3B82F6]"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  100%
                </p>
                <p className="mt-2 text-[12px] text-[#6B7280] leading-snug">Eko sredstva i biorazgradiva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
