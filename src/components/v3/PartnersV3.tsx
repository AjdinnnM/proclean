import Image from "next/image";

const PARTNERS = [
  { name: "Creato", src: "/images/partners/creato.png", w: 130, h: 48 },
  { name: "Fugger upravljanje nekretninama", src: "/images/partners/fugger.png", w: 130, h: 48 },
  { name: "GSKG", src: "/images/partners/gskg.jpg", w: 100, h: 48 },
  { name: "Maksimus", src: "/images/partners/maksimus.webp", w: 140, h: 48 },
  { name: "Ordino Plus", src: "/images/partners/ordino.png", w: 130, h: 48 },
  { name: "Zapadstan", src: "/images/partners/zapadstan.png", w: 130, h: 48 },
  { name: "Upravitelj Gradnja", src: "/images/partners/upravitelj-gradnja.jpg", w: 110, h: 48 },
  { name: "Cvjecarnica Škrinjarić", src: "/images/partners/cvjecarnica.svg", w: 130, h: 48 },
  { name: "Garderoba", src: "/images/partners/garderoba.svg", w: 130, h: 48 },
  { name: "BMD", src: "/images/partners/bmd.png", w: 100, h: 48, darken: true },
];

export function PartnersV3() {
  return (
    <section className="bg-[#FAFAF7] py-16 lg:py-24 border-y border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">
            Reference
          </p>
          <h2
            className="text-[28px] lg:text-[40px] leading-[1.1] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Partneri koji nam vjeruju
          </h2>
          <p className="mt-3 text-[14px] lg:text-[15px] text-[#6B7280] max-w-[560px] mx-auto leading-[1.55]">
            Surađujemo s upraviteljima zgrada, tvrtkama i stambenim zajednicama diljem Zagreba.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center bg-white border border-black/5 rounded-2xl px-5 py-5 h-[84px] grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:border-[#3B82F6]/30 hover:shadow-[0_10px_30px_-12px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                className={`object-contain max-h-[44px] w-auto${p.darken ? " brightness-[0.35]" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
