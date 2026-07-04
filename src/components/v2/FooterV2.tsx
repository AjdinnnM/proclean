import Link from "next/link";

export function FooterV2() {
  return (
    <footer className="bg-[#FAFAF7] border-t border-black/5 py-16 lg:py-20 pb-28 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Link href="/v2" className="inline-flex items-baseline gap-1.5">
              <span
                className="text-[22px] font-semibold tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                Pro·Clean
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">Zagreb</span>
            </Link>
            <p className="mt-5 text-[14px] text-[#3F3F3F] leading-[1.65] max-w-[360px]">
              Profesionalno čišćenje stubišta, garaža, prozora i prostora nakon
              izgradnje. Zagreb i okolica — od 2019.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/proclean_hr/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-black/10 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.422-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a
                href="https://wa.me/385994840416"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-black/10 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] font-medium mb-5">Usluge</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/v2/usluge/stubiste" className="text-[#0A0A0A] hover:opacity-60 transition-opacity">Čišćenje stubišta</Link></li>
              <li><Link href="/v2/usluge/garaza" className="text-[#0A0A0A] hover:opacity-60 transition-opacity">Čišćenje garaža</Link></li>
              <li><Link href="/v2/usluge/izgradnja" className="text-[#0A0A0A] hover:opacity-60 transition-opacity">Čišćenje nakon izgradnje</Link></li>
              <li><Link href="/v2/usluge/prozori" className="text-[#0A0A0A] hover:opacity-60 transition-opacity">Pranje prozora</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] font-medium mb-5">Kontakt</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="tel:+385994840416" className="text-[#0A0A0A] hover:opacity-60 transition-opacity">099 484 0416</a></li>
              <li><a href="mailto:proclean.hr@outlook.com" className="text-[#0A0A0A] hover:opacity-60 transition-opacity">proclean.hr@outlook.com</a></li>
              <li className="text-[#3F3F3F]">Pon–Sub · 08:00–20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#6B7280]">© 2026 Pro Clean. Sva prava pridržana.</p>
          <p className="text-[12px] text-[#9CA3AF]">
            Made with care in Zagreb
          </p>
        </div>
      </div>
    </footer>
  );
}
