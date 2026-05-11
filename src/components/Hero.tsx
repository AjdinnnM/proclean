import Image from "next/image";
import { site } from "@/content/site";
import { CheckIcon, StarIcon } from "./icons";

export function Hero() {
  const { hero } = site;
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#FAFAF7]"
      />

      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-200)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-brand-700)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-500)] animate-pulse" />
            {hero.eyebrow}
          </span>

          <h1
            className="mt-5 text-[44px] sm:text-[60px] lg:text-[80px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#0A0A0A]"
            style={{ fontFamily: "var(--font-v2-display)" }}
          >
            {hero.heading}
            <br />
            <span className="italic font-normal text-[#3F3F3F]">
              {hero.highlight}
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {hero.subheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)] active:scale-[0.98] px-7 py-4 text-[15px] font-semibold text-white transition-all"
            >
              Zatraži besplatnu ponudu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:+385994840416"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-foreground hover:border-foreground/30 active:scale-[0.98] px-7 py-4 text-[15px] font-semibold border border-border transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Nazovi nas
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[var(--color-brand-300)] to-[var(--color-brand-600)]"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-[var(--color-accent-500)]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                <span className="font-semibold text-foreground">500+</span> zadovoljnih klijenata u Zagrebu
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden soft-shadow ring-1 ring-black/5">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-950)]/35 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 md:-left-8 rounded-2xl bg-white soft-shadow ring-1 ring-black/5 p-4 flex items-center gap-3 max-w-xs">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
              <CheckIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Odgovor unutar 24h</p>
              <p className="text-xs text-muted-foreground">Javljamo se odmah sljedeći radni dan</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-2 md:-right-6 rounded-2xl bg-white soft-shadow ring-1 ring-black/5 p-4 max-w-[220px]">
            <p className="text-xs text-muted-foreground">Ekološka sredstva</p>
            <p className="mt-1 text-lg font-bold text-foreground">100% biorazgradiva</p>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-white/50 backdrop-blur-sm">
        <div className="container-page py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {hero.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start">
              <span className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-brand-700)] tracking-tight">
                {s.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
