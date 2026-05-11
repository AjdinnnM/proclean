const FAQ = [
  { q: "Koliko košta čišćenje?", a: "Cijena ovisi o površini, učestalosti i specifičnim zahtjevima. Za stambene zajednice nudimo besplatno probno čišćenje prije ugovora. Pošalji upit i odgovaramo s konkretnom ponudom unutar 2 sata." },
  { q: "Tko sve može biti klijent?", a: "Stambene zajednice, upravitelji zgrada, tvrtke, hoteli, butici, kao i privatni korisnici. Radimo i jednokratne i kontinuirane angažmane." },
  { q: "Izdajete li R1 račun?", a: "Da, R1 račun za pravna lica izdajemo bez dodatnih troškova. Tako pravne osobe i stambene zajednice imaju potpuno transparentan račun za knjigovodstvo." },
  { q: "Koja sredstva koristite?", a: "100% biorazgradiva, ekološka sredstva — sigurna za stanare, kućne ljubimce i okoliš. Posebne tretmane provodimo profesionalnim koncentratima." },
  { q: "Koliko brzo dolazite na termin?", a: "Odgovor na upit šaljemo unutar 2 sata radnim danom. Termin se u pravilu dogovara unutar 7 dana — hitno i unutar 48h." },
  { q: "Što ako nisam zadovoljan rezultatom?", a: "Vraćamo se i ponavljamo posao bez dodatnih troškova. Naš standard je da te ljudi pitaju tko je radio — ako to nismo postigli, ispravljamo." },
];

export function FaqV3() {
  return (
    <section className="py-20 lg:py-32 bg-white border-y border-black/5">
      <div className="max-w-[920px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">
            Često postavljana pitanja
          </p>
          <h2
            className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Najvažnije,<br />
            <span className="text-[#3B82F6] italic font-normal">odgovoreno.</span>
          </h2>
        </div>

        <div className="divide-y divide-black/8 border-y border-black/8">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5 lg:py-6 cursor-pointer">
              <summary className="flex items-center justify-between gap-6 list-none">
                <h3
                  className="text-[18px] lg:text-[22px] text-[#0A0A0A] font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-v3-display)" }}
                >
                  {f.q}
                </h3>
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[#0A0A0A] group-open:rotate-45 group-open:bg-[#3B82F6] group-open:text-white group-open:border-[#3B82F6] transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </summary>
              <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.6] text-[#3F3F3F] max-w-[680px]">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[14px] text-[#6B7280] mb-4">Imaš drugo pitanje?</p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#3B82F6] underline underline-offset-4 hover:text-[#2563EB] transition-colors"
          >
            Pošalji nam direktno
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
