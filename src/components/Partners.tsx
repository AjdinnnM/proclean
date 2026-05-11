import Image from "next/image";
import { Reveal } from "./Reveal";

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

export function Partners() {
  return (
    <section className="section-padding bg-white border-y border-black/5">
      <div className="container-page">
        <Reveal className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
            Reference
          </span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Partneri koji nam vjeruju
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Surađujemo s upraviteljima zgrada, tvrtkama i stambenim zajednicama diljem Zagreba.
          </p>
        </Reveal>

        {/* Logo grid */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center bg-[var(--color-brand-50)]/40 border border-border/50 rounded-2xl px-6 py-5 h-[80px] grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-[var(--color-brand-200)]"
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
        </Reveal>
      </div>
    </section>
  );
}
