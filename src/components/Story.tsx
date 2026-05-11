import Image from "next/image";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* IMAGE */}
          <Reveal variant="left" className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[24px] overflow-hidden">
              <Image
                src="/images/photos/img-2381.jpg"
                alt="Pro Clean — ekipa za posla u Zagrebu"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating credential card — visible on all sizes */}
            <div className="absolute -bottom-5 right-3 sm:-bottom-6 sm:-right-6 lg:-right-12 max-w-[240px] sm:max-w-[260px] bg-white text-[#0A0A0A] rounded-[16px] p-4 sm:p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#6B7280] mb-1.5 sm:mb-2">Aktivno održavamo</p>
              <p
                className="text-[24px] sm:text-[28px] leading-none font-semibold"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                100+ zgrada
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#3F3F3F] mt-1">u Zagrebu i okolici</p>
            </div>
          </Reveal>

          {/* COPY */}
          <Reveal variant="right" className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/55 font-medium mb-6">
              Tko stoji iza Pro Cleana
            </p>

            <h2
              className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] font-semibold"
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              Mi ne čistimo<br />
              <span className="text-white/60 italic font-normal">da bude “ok”.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-[1.65] text-white/80 max-w-[520px]">
              <p>
                Čistimo da te ljudi pitaju tko je radio. Svaka stambena zajednica
                koju održavamo dobiva istu ekipu, istu opremu, isti standard.
              </p>
              <p>
                Naša filozofija je jednostavna: <span className="text-white">prostor u kojem boraviš
                oblikuje kako se osjećaš</span>. Zato pristupamo svakom poslu — od malog
                stana nakon adaptacije do podzemne garaže od 2.000 m² —
                s istom pažnjom.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[460px] border-t border-white/10 pt-8">
              <div>
                <p
                  className="text-[36px] leading-none font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  2h
                </p>
                <p className="mt-2 text-[12px] text-white/55 leading-snug">Prosječno čekanje na odgovor</p>
              </div>
              <div>
                <p
                  className="text-[36px] leading-none font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  R1
                </p>
                <p className="mt-2 text-[12px] text-white/55 leading-snug">Račun za pravna lica</p>
              </div>
              <div>
                <p
                  className="text-[36px] leading-none font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  100%
                </p>
                <p className="mt-2 text-[12px] text-white/55 leading-snug">Eko sredstva i biorazgradiva</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
