import Link from "next/link";
import Image from "next/image";

export function FooterV3() {
  return (
    <footer className="bg-[#FAFAF7] border-t border-black/5 py-16 lg:py-20 pb-28 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/proclean-logo-blue.png"
                alt="Pro Clean logo"
                width={140}
                height={38}
                className="object-contain"
              />
            </Link>
            <p className="mt-5 text-[14px] text-[#3F3F3F] leading-[1.65] max-w-[360px]">
              Profesionalno čišćenje stubišta, garaža, prozora i prostora nakon
              izgradnje. Zagreb i okolica.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a href="https://www.instagram.com/proclean_hr/" target="_blank" rel="noopener" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#3B82F6]/30 text-[#3B82F6] hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://wa.me/385994840416" target="_blank" rel="noopener" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#3B82F6]/30 text-[#3B82F6] hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              </a>
            </div>
            <a
              href="https://procleanzg.com"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              procleanzg.com
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] font-medium mb-5">Usluge</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/usluge/stubiste" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">Čišćenje stubišta</Link></li>
              <li><Link href="/usluge/garaza" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">Čišćenje garaža</Link></li>
              <li><Link href="/usluge/izgradnja" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">Čišćenje nakon izgradnje</Link></li>
              <li><Link href="/usluge/prozori" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">Pranje prozora</Link></li>
              <li><Link href="/usluge/poslovni-prostori" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">Generalno čišćenje</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] font-medium mb-5">Kontakt</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="tel:+385994840416" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">099 484 0416</a></li>
              <li><a href="mailto:proclean.hr@outlook.com" className="text-[#0A0A0A] hover:text-[#3B82F6] transition-colors">proclean.hr@outlook.com</a></li>
              <li className="text-[#3F3F3F]">Pon–Sub · 08:00–20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#6B7280]">© 2026 Pro Clean. Sva prava pridržana.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/radnici"
              className="group inline-flex items-center gap-2 text-[12px] text-[#6B7280] hover:text-[#3B82F6] transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Portal za radnike
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="opacity-60 group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <span className="hidden md:inline text-[#E5E7EB]">·</span>
            <p className="text-[12px] text-[#9CA3AF]">Made with care in Zagreb</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
