import { site } from "@/content/site";
import { iconByName } from "./icons";
import { Reveal } from "./Reveal";

export function Benefits() {
  const { benefits } = site;
  return (
    <section className="section-padding bg-[var(--color-brand-50)]/60 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[600px] bg-[var(--color-brand-200)]/40 rounded-full blur-3xl -z-10"
      />
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            {benefits.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {benefits.heading}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {benefits.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.items.map((b, i) => {
            const Icon = iconByName[b.icon];
            return (
              <Reveal key={b.title} delay={i * 70} variant={i % 2 === 0 ? "left" : "right"}>
                <div className="group rounded-2xl bg-white p-6 border border-border card-hover h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)] group-hover:bg-[var(--color-brand-600)] group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
