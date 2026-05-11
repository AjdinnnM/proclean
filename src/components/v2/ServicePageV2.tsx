import Image from "next/image";
import Link from "next/link";
import { HeaderV2 } from "./HeaderV2";
import { FooterV2 } from "./FooterV2";
import { ContactV2 } from "./ContactV2";
import { StickyCTAv2 } from "./StickyCTAv2";

export type ServicePageData = {
  slug: string;
  breadcrumb: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  highlights: string[];
  steps: { n: string; title: string; desc: string }[];
  whatWeDo: string[];
  why: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  gallery?: string[];
  related: { href: string; title: string; sub: string; image: string }[];
};

export function ServicePageV2({ data }: { data: ServicePageData }) {
  return (
    <>
      <HeaderV2 />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#FAFAF7]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-8 pb-16 lg:pt-16 lg:pb-28">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8 lg:mb-12">
              <Link href="/v2" className="hover:text-[#0A0A0A] transition-colors">Pro·Clean</Link>
              <span>›</span>
              <span className="text-[#0A0A0A]">{data.breadcrumb}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              {/* LEFT — text */}
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-5">
                  {data.eyebrow}
                </p>
                <h1
                  className="text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.98] tracking-[-0.03em] text-[#0A0A0A] font-semibold"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  {data.heading}
                  <br />
                  <span className="italic font-normal text-[#3F3F3F]">{data.headingAccent}</span>
                </h1>
                <p className="mt-7 lg:mt-9 max-w-[560px] text-[16px] lg:text-[18px] leading-[1.55] text-[#3F3F3F]">
                  {data.description}
                </p>

                {/* Highlights */}
                <ul className="mt-8 lg:mt-10 space-y-3 max-w-[480px]">
                  {data.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[14px] lg:text-[15px] text-[#0A0A0A]">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0A0A0A] text-white shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 lg:mt-12 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`/v2#kontakt`}
                    className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-medium px-7 py-4 rounded-full text-[15px] hover:bg-black transition-all"
                  >
                    Zatraži besplatnu ponudu
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <a
                    href="tel:+385994840416"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-medium px-7 py-4 rounded-full text-[15px] border border-black/10 hover:border-black/30 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    099 484 0416
                  </a>
                </div>
              </div>

              {/* RIGHT — image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[24px] overflow-hidden bg-[#E5E5E0]">
                  <Image
                    src={data.heroImage}
                    alt={data.heroImageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section className="bg-white border-y border-black/5 py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="max-w-[680px] mb-14 lg:mb-20">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
                Naš proces
              </p>
              <h2
                className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                Kako radimo,<br />
                <span className="text-[#3F3F3F] italic font-normal">korak po korak.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {data.steps.map((s) => (
                <div key={s.n} className="relative">
                  <p
                    className="text-[12px] text-[#9CA3AF] mb-5 tabular-nums"
                    style={{ fontFamily: "var(--font-v2-display)" }}
                  >
                    {s.n}
                  </p>
                  <h3
                    className="text-[20px] lg:text-[22px] text-[#0A0A0A] font-semibold mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-v2-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] text-[#3F3F3F] leading-[1.6]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO + WHY split */}
        <section className="bg-[#FAFAF7] py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* LEFT — what we do checklist */}
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
                  Što je uključeno
                </p>
                <h2
                  className="text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-8 lg:mb-10"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  Sve što trebaš —<br />
                  <span className="text-[#3F3F3F] italic font-normal">u jednom dolasku.</span>
                </h2>
                <ul className="space-y-2.5">
                  {data.whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] lg:text-[15px] text-[#0A0A0A] bg-white border border-black/5 rounded-xl px-5 py-3.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0A0A0A] text-white shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT — why us */}
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
                  Zašto Pro Clean
                </p>
                <h2
                  className="text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.025em] text-[#0A0A0A] font-semibold mb-8 lg:mb-10"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  Razlika koja se<br />
                  <span className="text-[#3F3F3F] italic font-normal">odmah osjeti.</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {data.why.map((w, i) => (
                    <div key={w.title} className="bg-white border border-black/5 rounded-[16px] p-6">
                      <p
                        className="text-[12px] text-[#9CA3AF] mb-3 tabular-nums"
                        style={{ fontFamily: "var(--font-v2-display)" }}
                      >
                        0{i + 1}
                      </p>
                      <h3
                        className="text-[17px] lg:text-[18px] text-[#0A0A0A] font-semibold mb-2 tracking-tight"
                        style={{ fontFamily: "var(--font-v2-display)" }}
                      >
                        {w.title}
                      </h3>
                      <p className="text-[13px] text-[#3F3F3F] leading-[1.55]">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY (optional) */}
        {data.gallery && data.gallery.length > 0 && (
          <section className="bg-white border-t border-black/5 py-20 lg:py-28">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
              <div className="max-w-[680px] mb-12 lg:mb-16">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
                  Naš rad
                </p>
                <h2
                  className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
                  style={{ fontFamily: "var(--font-v2-display)" }}
                >
                  Iz arhive,<br />
                  <span className="text-[#3F3F3F] italic font-normal">bez retuša.</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {data.gallery.map((src) => (
                  <div key={src} className="relative aspect-square overflow-hidden rounded-[16px] bg-[#E5E5E0] group">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-[#FAFAF7] py-20 lg:py-28">
          <div className="max-w-[920px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-14 lg:mb-20">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
                Često postavljana pitanja
              </p>
              <h2
                className="text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                Najvažnije,<br />
                <span className="text-[#3F3F3F] italic font-normal">odgovoreno.</span>
              </h2>
            </div>
            <div className="divide-y divide-black/8 border-y border-black/8">
              {data.faq.map((f) => (
                <details key={f.q} className="group py-5 lg:py-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-6 list-none">
                    <h3
                      className="text-[17px] lg:text-[20px] text-[#0A0A0A] font-medium tracking-tight"
                      style={{ fontFamily: "var(--font-v2-display)" }}
                    >
                      {f.q}
                    </h3>
                    <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[#0A0A0A] group-open:rotate-45 group-open:bg-[#0A0A0A] group-open:text-white group-open:border-[#0A0A0A] transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-[14px] lg:text-[15px] leading-[1.6] text-[#3F3F3F] max-w-[680px]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <ContactV2 />

        {/* RELATED services */}
        {data.related && data.related.length > 0 && (
          <section className="bg-[#FAFAF7] py-16 lg:py-24 border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-3">
                Ostale usluge
              </p>
              <h2
                className="text-[28px] lg:text-[36px] leading-tight tracking-[-0.02em] text-[#0A0A0A] font-semibold mb-10"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                Pogledaj i:
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
                {data.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group relative overflow-hidden rounded-[16px] bg-white border border-black/5 hover:border-black/15 transition-all"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3
                          className="text-white text-[16px] lg:text-[18px] font-semibold tracking-tight"
                          style={{ fontFamily: "var(--font-v2-display)" }}
                        >
                          {r.title}
                        </h3>
                        <p className="text-white/75 text-[12px] mt-0.5">{r.sub}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <FooterV2 />
      <StickyCTAv2 />
    </>
  );
}
