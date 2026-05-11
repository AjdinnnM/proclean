"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  "Čišćenje stubišta",
  "Čišćenje garaža",
  "Čišćenje nakon izgradnje",
  "Pranje prozora",
  "Ostalo / nisam siguran",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactV2() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "", email: "" });
  const [status, setStatus] = useState<Status>("idle");
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={sectionRef} id="kontakt" className="bg-[#0A0A0A] text-white py-20 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/55 font-medium mb-5">
              Zatraži ponudu
            </p>
            <h2
              className="text-[40px] lg:text-[60px] leading-[0.98] tracking-[-0.025em] font-semibold"
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              Javljamo se<br />
              <span className="text-white/60 italic font-normal">unutar 2 sata.</span>
            </h2>
            <p className="mt-6 text-[15px] lg:text-[16px] text-white/70 leading-[1.65] max-w-[380px]">
              Bez obveze, bez poziva po hladnom. Pošalji broj i uslugu, a mi ti
              vraćamo s konkretnom ponudom — ili zovemo prvi.
            </p>

            <div className="mt-10 space-y-3 text-[14px]">
              <a href="tel:+385994840416" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                099 484 0416
              </a>
              <a href="mailto:proclean.hr@outlook.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                proclean.hr@outlook.com
              </a>
              <a href="https://wa.me/385994840416" target="_blank" rel="noopener" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                </span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — form / success */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="bg-white text-[#0A0A0A] rounded-[20px] p-10 lg:p-12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A0A0A] text-white mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3
                  className="text-[28px] lg:text-[36px] leading-[1.05] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  Hvala — primili smo upit.
                </h3>
                <p className="mt-3 text-[15px] text-[#3F3F3F] leading-[1.6] max-w-[440px]">
                  Javljamo se na <span className="text-[#0A0A0A] font-medium">{form.phone}</span> u
                  najkraćem roku — najčešće unutar 2 sata, najkasnije do kraja radnog dana.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", service: "", message: "", email: "" }); }}
                  className="mt-8 text-[14px] font-medium text-[#0A0A0A] underline underline-offset-4"
                >
                  ← Pošalji novi upit
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white text-[#0A0A0A] rounded-[20px] p-7 lg:p-9 space-y-5">
                <FieldV2 label="Tvoje ime" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Pero Perić"
                    className="v2-input"
                  />
                </FieldV2>

                <FieldV2 label="Broj telefona" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="099 123 4567"
                    className="v2-input"
                  />
                </FieldV2>

                <FieldV2 label="Vrsta usluge" required>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="v2-input cursor-pointer"
                  >
                    <option value="" disabled>Odaberi uslugu…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </FieldV2>

                <FieldV2 label="Poruka (opcionalno)">
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Npr. broj katova, kvadratura, posebni zahtjevi…"
                    className="v2-input resize-none"
                  />
                </FieldV2>

                {status === "error" && (
                  <p className="text-[13px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                    Greška pri slanju. Probaj ponovo ili nas nazovi direktno.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-black text-white font-medium rounded-full py-4 text-[15px] disabled:opacity-60 transition-all"
                >
                  {status === "loading" ? (
                    <><span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Šaljem…</>
                  ) : (
                    <>Pošalji upit <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-[#6B7280] pt-2">
                  <span className="flex items-center gap-1.5">🔒 Sigurno</span>
                  <span className="flex items-center gap-1.5">⚡ Odgovor za 2h</span>
                  <span className="flex items-center gap-1.5">✓ Bez obveze</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .v2-input {
          width: 100%;
          background: #FAFAF7;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 16px;
          color: #0A0A0A;
          outline: none;
          transition: border-color 0.15s ease;
        }
        @media (min-width: 640px) {
          .v2-input { font-size: 14px; }
        }
        .v2-input::placeholder { color: #9CA3AF; }
        .v2-input:focus { border-color: #0A0A0A; }
      `}</style>
    </section>
  );
}

function FieldV2({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-[#6B7280] font-medium mb-2">
        {label}{required && <span className="text-[#0A0A0A] ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
