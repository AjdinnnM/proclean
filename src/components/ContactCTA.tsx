import { site } from "@/content/site";
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  const { contact, contactCta } = site;
  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-page">
        <Reveal variant="fade">
        <div className="relative overflow-hidden rounded-[2.25rem] brand-gradient text-white p-8 md:p-14 lg:p-16">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-black/10 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {contactCta.heading}
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-lg">
                {contactCta.subheading}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={contactCta.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-brand-800)] hover:bg-[var(--color-brand-50)] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {contactCta.primaryCta.label}
                </a>
                <a
                  href={contactCta.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 border border-white/25 transition-colors"
                >
                  <MailIcon className="h-4 w-4" />
                  {contactCta.secondaryCta.label}
                </a>
              </div>

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Ili napiši nam na WhatsApp
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5">
                <PhoneIcon className="h-5 w-5 text-white/80" />
                <p className="mt-3 text-xs uppercase tracking-wider text-white/70">Telefon</p>
                <a href={`tel:${contact.phoneLink}`} className="mt-1 block text-base font-semibold hover:underline">
                  {contact.phone}
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5">
                <MailIcon className="h-5 w-5 text-white/80" />
                <p className="mt-3 text-xs uppercase tracking-wider text-white/70">E-mail</p>
                <a href={`mailto:${contact.email}`} className="mt-1 block text-base font-semibold hover:underline break-all">
                  {contact.email}
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 sm:col-span-2">
                <MapPinIcon className="h-5 w-5 text-white/80" />
                <p className="mt-3 text-xs uppercase tracking-wider text-white/70">Adresa & područje</p>
                <p className="mt-1 text-base font-semibold">{contact.address}</p>
                <p className="text-sm text-white/80 mt-1">
                  Radimo na području: <span className="font-semibold text-white">{contact.serviceArea}</span>
                </p>
                <p className="text-sm text-white/80 mt-1">Radno vrijeme: {contact.hours}</p>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
