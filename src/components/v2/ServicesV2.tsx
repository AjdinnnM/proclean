import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    slug: "stubiste",
    title: "Čišćenje stubišta",
    desc: "Redovito i jednokratno održavanje stubišta u stambenim zgradama Zagreba.",
    image: "/images/photos/stubiste-lobby.jpg",
    href: "/v2/usluge/stubiste",
    feature: true,
    tags: ["Stambene zajednice", "Tjedno · Mjesečno", "Besplatno probno čišćenje"],
  },
  {
    slug: "garaza",
    title: "Čišćenje garaža",
    desc: "Strojno ribanje, metenje, paučina i završno usisavanje.",
    image: "/images/photos/garaza/IMG_3342.jpg",
    href: "/v2/usluge/garaza",
    tags: ["Podzemne i nadzemne", "Vlastita oprema"],
  },
  {
    slug: "prozori",
    title: "Pranje prozora",
    desc: "Iznutra i izvana, na visini, za hotele, urede i privatne klijente.",
    image: "/images/photos/prozori/IMG_3288.jpg",
    href: "/v2/usluge/prozori",
    tags: ["Visina i fasade", "Hoteli · Trgovine"],
  },
  {
    slug: "izgradnja",
    title: "Čišćenje nakon izgradnje",
    desc: "Spremno za useljenje — uklanjamo prašinu, boju, silikon i ostatke.",
    image: "/images/services/izgradnja-popup.jpg",
    href: "/v2/usluge/izgradnja",
    tags: ["Novogradnja", "Renovacije"],
  },
];

export function ServicesV2() {
  const [feature, ...rest] = SERVICES;

  return (
    <section id="usluge" className="bg-[#FAFAF7] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Eyebrow + heading */}
        <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[640px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
              Što radimo
            </p>
            <h2
              className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              Četiri usluge.
              <br />
              <span className="text-[#3F3F3F] italic font-normal">Bez kompromisa.</span>
            </h2>
          </div>
          <p className="hidden lg:block text-[14px] text-[#6B7280] max-w-[260px] mb-2">
            Svaka usluga ima vlastitu opremu, ekipu i dokazani proces. Bez improvizacije.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Featured large card */}
          <ServiceCard service={feature} large />
          {/* Three smaller */}
          {rest.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, large = false }: { service: typeof SERVICES[0]; large?: boolean }) {
  return (
    <Link
      href={service.href}
      className={`group relative col-span-12 ${
        large ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5 sm:col-span-6"
      } overflow-hidden rounded-[20px] bg-white border border-black/5 hover:border-black/15 transition-all`}
    >
      <div className={`relative ${large ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[5/4]"} overflow-hidden`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top: tags */}
        {service.tags && (
          <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-1.5">
            {service.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] font-medium text-white bg-white/15 backdrop-blur-md rounded-full border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Bottom: title + arrow */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3
              className={`text-white font-semibold ${large ? "text-[28px] lg:text-[36px]" : "text-[20px] lg:text-[22px]"} leading-[1.05] tracking-[-0.02em]`}
              style={{ fontFamily: "var(--font-v2-display)" }}
            >
              {service.title}
            </h3>
            <p className={`text-white/85 mt-1.5 ${large ? "text-[14px] lg:text-[15px]" : "text-[13px]"} leading-snug`}>
              {service.desc}
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-[#0A0A0A] group-hover:rotate-[-45deg] transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
