"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Čišćenje stubišta",
  "Čišćenje garaže",
  "Čišćenje nakon izgradnje",
  "Pranje prozora",
  "Ostalo / nisam siguran",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll to top of form when success — so user actually SEES the confirmation,
  // otherwise the layout shrinks and the "Spremni za čist prostor" section
  // ends up where the form was, looking like nothing happened.
  useEffect(() => {
    if (status === "success" || status === "error") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      console.warn("[LeadForm] missing required fields", form);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        console.error("[LeadForm] API error", res.status);
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch (err) {
      console.error("[LeadForm] fetch failed", err);
      setStatus("error");
    }
  };

  return (
    <section ref={sectionRef} id="upit" className="section-padding bg-[var(--color-brand-50)]/40">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — copy */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
              Besplatni upit
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Ostavi kontakt — javimo se u roku 2 sata
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Bez obaveza. Upiši broj telefona i vrstu usluge, a mi ćemo ti
              poslati ponudu ili odmah nazvati.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {[
                "✅ Odgovaramo isti radni dan",
                "✅ Besplatni pregled i procjena",
                "✅ Bez skrivenih troškova",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={100}>
            {status === "success" ? (
              <div className="rounded-3xl bg-white border border-border p-10 text-center shadow-sm">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  Poruka primljena!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Hvala, {form.name.split(" ")[0]}! Javit ćemo se na{" "}
                  <strong>{form.phone}</strong> najkasnije do kraja radnog dana.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  className="mt-6 text-sm font-semibold text-[var(--color-brand-600)] hover:underline"
                >
                  Pošalji novi upit
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white border border-border p-8 shadow-sm flex flex-col gap-5"
              >
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Ime i prezime *">
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Pero Perić"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Broj telefona *">
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="099 123 4567"
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email (opcionalno)">
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="pero@email.hr"
                    className={inputClass}
                  />
                </Field>

                {/* Service */}
                <Field label="Vrsta usluge *">
                  <select
                    required
                    value={form.service}
                    onChange={set("service")}
                    className={cn(inputClass, "cursor-pointer")}
                  >
                    <option value="" disabled>Odaberi uslugu…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field label="Poruka (opcionalno)">
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Npr. broj katova, kvadratura, posebni zahtjevi…"
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Greška pri slanju. Pokušaj ponovo ili nas nazovi direktno.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)] text-white font-heading font-bold rounded-2xl py-4 text-base transition-colors active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Šaljem…</>
                  ) : (
                    "Pošalji upit →"
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Tvoji podatci koriste se isključivo za kontakt. Ne šaljemo spam.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const inputClass =
  "w-full rounded-xl border border-border bg-[var(--color-brand-50)]/40 px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[var(--color-brand-100)] transition-all";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}
