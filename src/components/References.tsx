import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

const SERVICE_COLORS: Record<string, string> = {
  "Čišćenje stubišta":        "bg-blue-100 text-blue-700",
  "Čišćenje garaža":          "bg-slate-100 text-slate-700",
  "Čišćenje nakon izgradnje": "bg-orange-100 text-orange-700",
  "Pranje prozora":            "bg-cyan-100 text-cyan-700",
};

export function References() {
  const { references: r } = site;

  return (
    <section id="reference" className="section-padding bg-[var(--color-brand-50)]/40">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            {r.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {r.heading}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {r.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {r.items.map((ref, i) => (
            <Reveal key={ref.name} delay={i * 70}>
              <article className="group rounded-3xl bg-white border border-border overflow-hidden flex flex-col h-full card-hover">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={ref.image}
                    alt={ref.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-950)]/50 via-transparent to-transparent" />
                  <span className={`absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm ${SERVICE_COLORS[ref.service] ?? "bg-white/80 text-foreground"}`}>
                    {ref.service}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-base font-bold text-foreground leading-snug">
                      {ref.name}
                    </h3>
                    <span className="shrink-0 text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {ref.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ref.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
