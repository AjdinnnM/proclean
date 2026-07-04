import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strojno pranje podova Zagreb — Pro Clean | Garaže i poslovni prostori",
  description:
    "Profesionalno strojno pranje i ribanje tvrdih podova u Zagrebu. Garaže, parkirališta, skladišta, poslovni prostori. Industrijska oprema. Pozovite 099 484 0416.",
  keywords: ["strojno pranje podova Zagreb", "ribanje podova Zagreb", "čišćenje garaže Zagreb", "profesionalno čišćenje podova", "Pro Clean Zagreb"],
  alternates: { canonical: "https://proclean.hr/usluge/strojno" },
};

const INCLUDES = [
  "Strojno ribanje poda dvodiskim strojem ili autostrojem",
  "Uklanjanje masnih naslaga, ulja i goriva",
  "Čišćenje fugni i spojnica između pločica",
  "Ispiranje i ekstrakcija prljave vode",
  "Dezinfekcijsko sredstvo po potrebi",
  "Uklanjanje gumenih tragova od guma",
  "Poliranje i zaštita poda (opcionalno)",
  "Čišćenje rubova i teže dostupnih mjesta",
];

const TYPES = [
  { icon: "🚗", title: "Garaže i parkirališta", desc: "Stambene i poslovne garaže, podzemna parkirališta — strojno ribanje do savršene čistoće." },
  { icon: "🏭", title: "Skladišta", desc: "Industrijski i logistički prostori s velikim površinama — brzo i efikasno strojevima." },
  { icon: "🏢", title: "Poslovni lobiji i hodnici", desc: "Reprezentativni ulazi i hodnici koji svaki dan moraju izgledati besprijekorno." },
  { icon: "🏪", title: "Trgovački prostori", desc: "Supermarketi, shopping centri, restorani — čišćenje van radnog vremena." },
  { icon: "⚽", title: "Sportski objekti", desc: "Dvorane, svlačionice, wellness centri — higijenska čistoća profesionalnom opremom." },
  { icon: "🔧", title: "Servisne radionice", desc: "Automehaničarske i industrijske radionice s teškim naslasima ulja i masti." },
];

const FAQ = [
  { q: "Za koje vrste podova radite strojno pranje?", a: "Beton, epoksid, keramičke pločice, kamen, laminat otporan na vlagu, PVC i ostali tvrdi podovi. Za parkete i osjetljive materijale dolazimo na pregled i procjenu." },
  { q: "Može li prostor biti u upotrebi za vrijeme čišćenja?", a: "Za manje prostoru — da, radimo sekcijama. Za veće površine (garaže, skladišta) preporučamo čišćenje izvan radnog vremena radi efikasnosti i sigurnosti." },
  { q: "Koliko traje strojno pranje?", a: "Ovisi o površini i stanju poda. 200 m² tipično 2–3 sata. Za veće površine dolazimo s više strojeva ili rasporedimo u više navrata." },
  { q: "Treba li pod biti prazan?", a: "Idealno da — za najefikasnije čišćenje. U garažama možemo raditi i dok su auta prisutna, ali rezultat je bolji bez njih." },
  { q: "Koliko često treba strojno prati pod?", a: "Garaže stambenih zgrada — 1–2x godišnje. Industrijski i poslovni prostori s intenzivnom upotrebom — po potrebi, češće. Možemo dogovoriti redovni servis." },
  { q: "Kako se određuje cijena?", a: "Cijena ovisi o kvadraturi, vrsti poda i stupnju zaprljanosti. Pošaljite nam opis i fotografije — ponudu šaljemo unutar 24 sata." },
];

export default function StrojnoPage() {
  return (
    <>
      <div className="min-h-screen bg-white" style={{ fontFamily: "'Manrope', sans-serif" }}>

        {/* ── NAV ── */}
        <header className="sticky top-0 z-50 bg-white/96 backdrop-blur border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-5 h-[62px] flex items-center justify-between">
            <Link href="/"><Logo className="text-2xl" /></Link>
            <nav className="hidden md:flex gap-7 text-sm font-semibold text-gray-400">
              <Link href="/#usluge" className="hover:text-gray-800 transition-colors">Usluge</Link>
              <Link href="/#galerija" className="hover:text-gray-800 transition-colors">Galerija</Link>
              <Link href="/kontakt" className="hover:text-gray-800 transition-colors">Kontakt</Link>
            </nav>
            <div className="flex items-center gap-3">
              <a href="tel:+385994840416" className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-[#0266f0] transition-colors">
                <span className="text-base">📞</span> 099 484 0416
              </a>
              <a href="/kontakt?usluga=strojno" className="bg-[#0266f0] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#0052c9] active:scale-[0.97] transition-all shadow-sm shadow-blue-200">
                Zatraži ponudu
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="bg-white pt-14 pb-0 overflow-hidden">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="pb-14 lg:pb-20">
                <div className="flex items-center gap-2 mb-5">
                  <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Pro Clean</Link>
                  <span className="text-gray-300">›</span>
                  <span className="text-xs text-gray-500 font-medium">Strojno pranje podova</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0266f0] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 border border-blue-200">
                  ⚙️ Industrijska oprema
                </div>
                <h1 className="font-extrabold text-[#0d1f3c] text-4xl md:text-5xl xl:text-[56px] leading-[1.06] tracking-tight mb-5">
                  Pod čist<br />
                  <span className="text-[#0266f0]">do sjaja.</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                  Profesionalno strojno pranje i ribanje tvrdih podova.
                  Garaže, parkirališta, skladišta i poslovni prostori — industrijska oprema koja daje rezultate.
                </p>
                <ul className="space-y-3 mb-9">
                  {[
                    "Strojno ribanje — uklanjamo i najtvrdokornije naslage",
                    "Garaže, parkirališta, skladišta, lobiji",
                    "Dolazimo s opremom, kemikalijama i strojevima",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm font-semibold">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-blue-100 text-[#0266f0] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="/kontakt?usluga=strojno" className="inline-flex items-center gap-2 bg-[#0266f0] text-white font-extrabold px-7 py-4 rounded-2xl hover:bg-[#0052c9] active:scale-[0.97] transition-all text-base shadow-lg shadow-blue-200">
                    Zatraži besplatnu ponudu
                  </a>
                  <a href="tel:+385994840416" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-6 py-4 rounded-2xl hover:border-blue-400 hover:text-[#0266f0] transition-all text-sm">
                    📞 Nazovi nas
                  </a>
                </div>
              </div>

              <div className="relative lg:self-stretch flex items-end justify-center lg:justify-end">
                <div className="relative w-full max-w-lg lg:max-w-none h-[360px] lg:h-full lg:min-h-[520px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/images/services/garaza-karcher.jpg"
                    alt="Strojno pranje podova — Pro Clean Zagreb"
                    fill priority
                    className="object-cover"
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4 whitespace-nowrap">
                    <div className="text-xl font-extrabold text-[#0266f0] leading-none">Industrijski</div>
                    <div className="text-xs text-gray-500 font-medium leading-tight">strojevi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ŠTO JE UKLJUČENO ── */}
        <section className="bg-[#f7f9fc] py-20">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-[#0266f0] uppercase tracking-widest mb-3">Što je uključeno</p>
              <h2 className="font-extrabold text-[#0d1f3c] text-3xl md:text-4xl tracking-tight">
                Kompletna usluga od A do Ž
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                  <span className="h-5 w-5 rounded-full bg-[#0266f0] text-white flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VRSTE PROSTORA ── */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-[#0266f0] uppercase tracking-widest mb-3">Gdje radimo</p>
              <h2 className="font-extrabold text-[#0d1f3c] text-3xl md:text-4xl tracking-tight">
                Sve vrste prostora
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TYPES.map((t) => (
                <div key={t.title} className="bg-[#f7f9fc] rounded-2xl p-7 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <span className="text-3xl block mb-4">{t.icon}</span>
                  <h3 className="font-extrabold text-[#0d1f3c] text-base mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0266f0] py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-extrabold text-white text-3xl md:text-4xl mb-4">
              Trebate strojno pranje podova?
            </h2>
            <p className="text-blue-100/80 text-base md:text-lg mb-8">
              Pošaljite kvadraturu i fotografije poda — ponudu dobivate unutar 24 sata.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+385994840416" className="inline-flex items-center justify-center gap-2 bg-white text-[#0266f0] font-extrabold px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-sm shadow-lg">
                📞 099 484 0416
              </a>
              <a href="/kontakt?usluga=strojno" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all text-sm">
                Zatraži besplatnu ponudu →
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-[#0266f0] uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="font-extrabold text-[#0d1f3c] text-3xl md:text-4xl tracking-tight">Često postavljana pitanja</h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details key={f.q} className="group bg-[#f7f9fc] border border-gray-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-[#0d1f3c] text-sm md:text-base">
                    {f.q}
                    <span className="text-gray-400 text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOKACIJE ── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="font-extrabold text-[#0d1f3c] text-2xl mb-2">Radimo u cijelom Zagrebu i okolici</h2>
            <p className="text-gray-400 text-sm mb-7">Zagreb i okolica: Samobor, Karlovac, Zaprešić, Jastrebarsko, Lučko i šire.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Trešnjevka","Maksimir","Centar","Dubrava","Novi Zagreb","Sesvete","Črnomerec","Špansko","Stenjevec","Peščenica","Podsljeme","Velika Gorica","Samobor","Zaprešić","Karlovac","Lučko","Jastrebarsko","Sveta Nedelja","Bregana"].map((a) => (
                <span key={a} className="bg-white text-gray-600 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 shadow-sm">{a}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── OSTALE USLUGE ── */}
        <section className="py-14 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="font-extrabold text-[#0d1f3c] text-xl mb-6">Ostale usluge</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/usluge/stubiste",  emoji: "🏢", title: "Čišćenje stubišta",    sub: "Redovito i jednokratno" },
                { href: "/usluge/garaza",    emoji: "🚗", title: "Čišćenje garaža",      sub: "Strojno ribanje poda" },
                { href: "/usluge/prozori",   emoji: "🪟", title: "Pranje prozora",        sub: "Iznutra i izvana" },
                { href: "/usluge/generalke", emoji: "🧹", title: "Generalno čišćenje",   sub: "Poslovni prostori i stanovi" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue-300 hover:bg-blue-50/40 transition-all">
                  <span className="text-2xl shrink-0">{s.emoji}</span>
                  <div>
                    <h3 className="font-bold text-[#0d1f3c] text-sm group-hover:text-[#0266f0] transition-colors">{s.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
