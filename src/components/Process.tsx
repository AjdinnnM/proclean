import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Process() {
  const { process: p } = site;
  return (
    <section id="proces" className="section-padding bg-white">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            {p.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {p.heading}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {p.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5 md:gap-6 relative">
          {p.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 110} variant={i === 0 ? "left" : i === p.steps.length - 1 ? "right" : "up"}>
              <div className="relative rounded-3xl bg-gradient-to-br from-white to-[var(--color-brand-50)]/60 p-8 border border-border h-full">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-5xl font-bold text-[var(--color-brand-600)]/20">
                    {step.number}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-white font-heading text-sm font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {p.note && (
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl bg-[var(--color-brand-900)] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-500)]/20 text-[var(--color-accent-500)] font-heading font-bold text-xl">
                %
              </div>
              <p className="text-sm md:text-base leading-relaxed">{p.note}</p>
              <a
                href="#kontakt"
                className="md:ml-auto shrink-0 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-900)] hover:bg-[var(--color-brand-50)] transition-colors"
              >
                Zatraži ponudu
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
