"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FAQ() {
  const { faq } = site;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[var(--color-brand-50)]/40">
      <div className="container-page grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            {faq.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {faq.heading}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {faq.subheading}
          </p>
          <a
            href="#kontakt"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-600)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-700)] transition-colors"
          >
            Kontaktiraj nas
          </a>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 70}>
              <div
                className={cn(
                  "rounded-2xl border border-border bg-white overflow-hidden transition-all",
                  isOpen && "soft-shadow",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center gap-4 p-5 md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 font-heading text-base md:text-lg font-semibold text-foreground">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen
                        ? "bg-[var(--color-brand-600)] text-white"
                        : "bg-[var(--color-brand-50)] text-[var(--color-brand-700)]",
                    )}
                  >
                    {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
