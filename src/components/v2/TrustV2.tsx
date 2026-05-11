const ITEMS = [
  {
    title: "R1 račun",
    desc: "Za stambene zajednice, tvrtke i upravitelje zgrada — bez dodatnih troškova.",
  },
  {
    title: "Vlastita oprema",
    desc: "Profesionalni kärcheri, strojevi za ribanje, alpinistička oprema za visine.",
  },
  {
    title: "Ekološka sredstva",
    desc: "100% biorazgradiva, sigurna za stanare, kućne ljubimce i okoliš.",
  },
  {
    title: "Bez ugovora",
    desc: "Probno čišćenje besplatno. Plaćaš tek nakon što provjeriš rezultat.",
  },
];

export function TrustV2() {
  return (
    <section className="bg-white border-y border-black/5 py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {ITEMS.map((it, i) => (
            <div key={it.title} className="relative">
              {/* Number */}
              <p
                className="text-[12px] text-[#9CA3AF] tabular-nums mb-3"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                0{i + 1}
              </p>
              <h3
                className="text-[18px] lg:text-[22px] text-[#0A0A0A] font-semibold mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                {it.title}
              </h3>
              <p className="text-[13px] lg:text-[14px] text-[#3F3F3F] leading-[1.55]">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
