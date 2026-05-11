import Image from "next/image";

const SHOTS = [
  {
    src: "/images/photos/garaza-prije-poslije.jpg",
    label: "Podzemna garaža · Maksimir",
    sub: "Strojno ribanje · 1 dolazak",
  },
  {
    src: "/images/photos/prozori/IMG_3151.jpg",
    label: "Pranje prozora · Novotel",
    sub: "Staklena fasada · ekipa od 3",
  },
  {
    src: "/images/photos/izgradnja/IMG_3035.jpg",
    label: "Nakon izgradnje · Trešnjevka",
    sub: "Stan 88 m² · spremno za useljenje",
  },
  {
    src: "/images/photos/stubiste-ulaz-1.jpg",
    label: "Stubište · Centar",
    sub: "Mjesečno održavanje · 6 katova",
  },
];

export function ResultsV2() {
  return (
    <section id="rad" className="bg-[#FAFAF7] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-12 lg:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
              Naš rad
            </p>
            <h2
              className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              Rezultat koji
              <br />
              <span className="text-[#3F3F3F] italic font-normal">govori sam.</span>
            </h2>
          </div>
          <a
            href="/v2#kontakt"
            className="hidden md:inline-flex items-center gap-2 text-[14px] font-medium text-[#0A0A0A] underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Naruči svoju procjenu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {SHOTS.map((s, i) => (
            <figure
              key={s.src}
              className={`col-span-12 ${
                i === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5 sm:col-span-6"
              } group`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/5] lg:aspect-[6/7]" : "aspect-[5/4]"} overflow-hidden rounded-[20px] bg-[#E5E5E0]`}>
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                <p
                  className={`${i === 0 ? "text-[18px]" : "text-[15px]"} font-medium text-[#0A0A0A]`}
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  {s.label}
                </p>
                <p className="text-[12px] text-[#6B7280] text-right">{s.sub}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
