import Link from "next/link";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    href: "/usluge/generalke",
    emoji: "🧹",
    title: "Generalno čišćenje",
    desc: "Jednokratno dubinsko čišćenje poslovnih prostora i stanova — doseljenje, iseljenje, proljetno čišćenje, Airbnb i uredi.",
  },
  {
    href: "/usluge/strojno",
    emoji: "⚙️",
    title: "Strojno pranje podova",
    desc: "Profesionalno strojno ribanje tvrdih podova — garaže, parkirališta, skladišta, lobiji i industrijski prostori.",
  },
];

export function AdditionalServices() {
  return (
    <section className="bg-[var(--color-brand-50)]/40 section-padding">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            Dodatne usluge
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Nudimo i ovo
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Pored četiri glavne usluge, imamo i dodatne specijalizirane usluge za posebne potrebe.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-6">
          {ITEMS.map((item, i) => (
            <Reveal key={item.href} delay={i * 100}>
              <Link
                href={item.href}
                className="group flex items-start gap-4 bg-white border border-border rounded-3xl p-6 md:p-7 hover:border-[var(--color-brand-300)] hover:shadow-lg transition-all h-full"
              >
                <span className="text-3xl shrink-0 leading-none">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-[var(--color-brand-700)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-700)]">
                    Saznaj više →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
