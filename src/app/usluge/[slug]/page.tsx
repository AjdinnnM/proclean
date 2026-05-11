import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { CheckIcon, PhoneIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return site.servicesSection.services
    .filter((s) => s.pageUrl)
    .map((s) => ({ slug: s.slug }));
}

export default async function UslugaPage({ params }: Props) {
  const { slug } = await params;
  const service = site.servicesSection.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = site.servicesSection.services.filter((s) => s.slug !== slug);

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: service.imagePosition ?? "center" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-950)]/80 via-[var(--color-brand-950)]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end container-page pb-10">
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Početna</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">{service.title}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {service.badge && (
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1 text-xs font-semibold text-white">
                  {service.badge}
                </span>
              )}
              <span className="inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-3 py-1 text-xs font-bold text-white">
                {service.priceLabel}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container-page py-12 md:py-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            {/* Left — description */}
            <div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                {service.longDescription}
              </p>

              <h2 className="mt-10 font-heading text-2xl font-bold text-foreground">
                Što je uključeno
              </h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-xl bg-[var(--color-brand-50)] p-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-600)] text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Other services */}
              {otherServices.filter(s => s.pageUrl).length > 0 && (
                <div className="mt-14">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-5">
                    Ostale usluge
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {otherServices.filter(s => s.pageUrl).map((s) => (
                      <Link
                        key={s.slug}
                        href={s.pageUrl!}
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 hover:border-[var(--color-brand-300)] hover:soft-shadow transition-all"
                      >
                        <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden">
                          <Image src={s.image} alt={s.title} fill className="object-cover" sizes="64px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-heading text-sm font-bold text-foreground truncate">{s.title}</p>
                          <p className="text-xs text-[var(--color-brand-600)] font-semibold mt-0.5">{s.priceLabel}</p>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-[var(--color-brand-600)] transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — CTA sticky box */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-4">
              <div className="rounded-3xl border border-border bg-white p-6 md:p-8 soft-shadow flex flex-col gap-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Cijena</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-[var(--color-brand-700)]">
                    {service.priceLabel}
                  </p>
                </div>

                <hr className="border-border" />

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Javi nam se — dolazimo na besplatni pregled i procjenu. Bez obaveza.
                </p>

                <Link
                  href={`/kontakt?usluga=${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)] text-white font-heading font-bold py-4 text-base transition-colors"
                >
                  Zatraži besplatnu ponudu
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>

                <a
                  href={`tel:${site.contact.phoneLink}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white hover:bg-muted text-foreground font-heading font-bold py-4 text-base transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.contact.phone}
                </a>

                {site.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading font-bold py-4 text-base transition-colors"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp
                  </a>
                )}

                <p className="text-center text-xs text-muted-foreground">
                  {site.contact.hours}
                </p>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
