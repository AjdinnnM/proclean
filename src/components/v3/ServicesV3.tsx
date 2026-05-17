import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    slug: "stubiste",
    title: "Čišćenje stubišta",
    desc: "Redovito i jednokratno održavanje stubišta u stambenim zgradama Zagreba.",
    image: "/images/services/staircase-real.jpg",
    href: "/usluge/stubiste",
    tags: ["Stambene zajednice", "Tjedno · Mjesečno"],
  },
  {
    slug: "garaza",
    title: "Čišćenje garaža",
    desc: "Strojno ribanje, metenje, paučina i završno usisavanje.",
    image: "/images/photos/garaza/IMG_3342.jpg",
    href: "/usluge/garaza",
    tags: ["Podzemne i nadzemne", "Vlastita oprema"],
  },
  {
    slug: "prozori",
    title: "Pranje prozora",
    desc: "Iznutra i izvana, na visini, za hotele, urede i privatne klijente.",
    image: "/images/photos/prozori/IMG_3288.jpg",
    href: "/usluge/prozori",
    tags: ["Visine · Fasade", "Hoteli · Trgovine"],
  },
  {
    slug: "izgradnja",
    title: "Čišćenje nakon izgradnje",
    desc: "Spremno za useljenje — uklanjamo prašinu, boju, silikon i ostatke.",
    image: "/images/services/izgradnja-popup.jpg",
    href: "/usluge/izgradnja",
    tags: ["Novogradnja", "Renovacije"],
  },
  {
    slug: "poslovni-prostori",
    title: "Generalno čišćenje poslovnih prostora",
    desc: "Ugostiteljstvo, uredi, cvjećarne, butici, stanovi i kuće — jednokratno generalno čišćenje.",
    image: "/images/photos/img-2105.jpg",
    href: "/usluge/poslovni-prostori",
    tags: ["Generalno", "Jednokratno"],
  },
];

export function ServicesV3() {
  const [feature, ...rest] = SERVICES;

  return (
    <section id="usluge" className="py-20 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[640px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#3B82F6] font-medium mb-4">
              Što radimo
            </p>
            <h2
              className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Pet usluga.
              <br />
              <span className="text-[#3B82F6] italic font-normal">Bez improvizacije.</span>
            </h2>
          </div>
          <p className="hidden lg:block text-[14px] text-[#6B7280] max-w-[260px] mb-2">
            Svaka usluga ima vlastitu opremu, ekipu i dokazani proces. Bez improvizacije.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <ServiceCard service={feature} large />
          {rest.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes service-shine {
          0% { transform: skewX(-12deg) translateX(-100%) }
          100% { transform: skewX(-12deg) translateX(700%) }
        }
        @keyframes service-badge-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59,130,246,0.4) }
          50% { transform: scale(1.06); box-shadow: 0 0 0 8px rgba(59,130,246,0) }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, large = false }: { service: typeof SERVICES[0]; large?: boolean }) {
  return (
    <Link
      href={service.href}
      className={`group relative col-span-12 ${
        large ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5 sm:col-span-6"
      } overflow-hidden rounded-[20px] bg-white border border-black/5 hover:border-[#3B82F6]/40 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.2)] transition-all`}
    >
      <div className={`relative ${large ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[5/4]"} overflow-hidden`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Shine sweep on hover */}
        <span
          aria-hidden
          className="absolute -inset-y-8 -left-1/4 w-1/3 pointer-events-none opacity-0 group-hover:opacity-100 z-10"
          style={{
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
            transform: "skewX(-12deg) translateX(-100%)",
            animation: "service-shine 1.2s cubic-bezier(0.65,0,0.35,1)",
          }}
        />

        {/* NEW badge */}
        {service.badge && (
          <div className="absolute top-5 right-5 z-20">
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-bold text-white bg-[#3B82F6] rounded-full shadow-lg"
              style={{ animation: "service-badge-pulse 2.4s ease-in-out infinite" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {service.badge}
            </span>
          </div>
        )}

        {/* Tags */}
        {service.tags && (
          <div className="absolute top-5 left-5 right-20 flex flex-wrap gap-1.5">
            {service.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] font-medium text-white bg-white/10 backdrop-blur-md rounded-full border border-white/15"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3
              className={`text-white font-semibold ${large ? "text-[28px] lg:text-[36px]" : "text-[20px] lg:text-[22px]"} leading-[1.05] tracking-[-0.02em]`}
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              {service.title}
            </h3>
            <p className={`text-white/75 mt-1.5 ${large ? "text-[14px] lg:text-[15px]" : "text-[13px]"} leading-snug`}>
              {service.desc}
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#3B82F6] text-white group-hover:rotate-[-45deg] transition-transform shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
