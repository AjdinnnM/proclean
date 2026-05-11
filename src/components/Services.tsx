import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

// Per-service short tags shown on the cards (kept minimal — no long descriptions)
const TAGS: Record<string, string[]> = {
  stubiste:  ["Stambene zajednice", "Tjedno · Mjesečno", "Besplatno probno čišćenje"],
  garaza:    ["Podzemne i nadzemne", "Strojno ribanje", "Vlastita oprema"],
  izgradnja: ["Novogradnja", "Adaptacije", "Spremno za useljenje"],
  prozori:   ["Iznutra i izvana", "Visine i fasade", "Hoteli · Trgovine"],
};

export function Services() {
  const { servicesSection: s } = site;
  const [feature, ...rest] = s.services;

  return (
    <section id="usluge" className="section-padding bg-[#FAFAF7]">
      <div className="container-page">
        {/* Heading row */}
        <Reveal>
          <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-[640px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
                {s.eyebrow}
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                {s.heading}
              </h2>
            </div>
            <p className="hidden lg:block text-sm text-muted-foreground max-w-[260px] mb-2">
              Svaka usluga ima vlastitu opremu, ekipu i dokazani proces. Bez improvizacije.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric grid: 1 large featured + 3 smaller */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <Reveal variant="up" className="col-span-12 lg:col-span-7 lg:row-span-2">
            <ServiceCard service={feature} large />
          </Reveal>
          {rest.map((service, i) => (
            <Reveal
              key={service.slug}
              variant={i % 2 === 0 ? "right" : "up"}
              delay={i * 80}
              className="col-span-12 sm:col-span-6 lg:col-span-5"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  large = false,
}: {
  service: typeof site.servicesSection.services[number];
  large?: boolean;
}) {
  const tags = TAGS[service.slug] ?? [];

  return (
    <Link
      href={service.pageUrl ?? `/kontakt?usluga=${service.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-white border border-border hover:border-[var(--color-brand-300)] transition-all h-full"
    >
      <div
        className={`relative ${
          large ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[5/4]"
        } overflow-hidden`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: service.imagePosition ?? "center" }}
        />
        {/* Bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-950)]/65 via-[var(--color-brand-950)]/10 to-transparent" />

        {/* Tags top */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] font-semibold text-white bg-white/15 backdrop-blur-md rounded-full border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Title + arrow bottom */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={`text-white font-semibold tracking-[-0.02em] leading-[1.05] ${
                large ? "text-[26px] md:text-[32px] lg:text-[40px]" : "text-[20px] lg:text-[24px]"
              }`}
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              {service.title}
            </h3>
            <p
              className={`text-white/85 mt-1.5 leading-snug ${
                large ? "text-sm lg:text-base" : "text-xs lg:text-sm"
              }`}
            >
              {service.shortDescription}
            </p>
          </div>
          <span
            className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-[var(--color-brand-700)] group-hover:bg-[var(--color-brand-600)] group-hover:text-white group-hover:rotate-[-45deg] transition-all"
            aria-hidden
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
