import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Generalno čišćenje stanova i ureda Zagreb — Pro Clean",
  description:
    "Jednokratno dubinsko čišćenje stanova, kuća i ureda u Zagrebu. Čišćenje pri doseljenju, iseljenju ili proljetnom čišćenju. Pozovite 099 484 0416.",
  keywords: ["generalno čišćenje Zagreb", "čišćenje stana Zagreb", "dubinsko čišćenje Zagreb", "čišćenje ureda Zagreb", "Pro Clean Zagreb"],
  alternates: { canonical: "https://proclean.hr/usluge/generalke" },
};

const INCLUDES = [
  "Pranje prozora iznutra",
  "Čišćenje kuhinje — štednjak, hladnjak, mikrovalka, uređaji",
  "Čišćenje kupaonice i WC-a do detalja",
  "Usisavanje i mokro pranje svih podova",
  "Brisanje namještaja, polica i prašine sa svih površina",
  "Čišćenje unutar i izvana ormarića po potrebi",
  "Uklanjanje nakupljene prašine i plijesni",
  "Završno prozračivanje i kontrola kvalitete",
];

const WHY = [
  { icon: "🏠", title: "Stan, kuća, ured", desc: "Jednokratno dubinsko čišćenje za stambene i poslovne prostore svih veličina." },
  { icon: "🚪", title: "Doseljenje / iseljenje", desc: "Predaj stan u savršenom stanju ili primi ga čistog — bez stresa." },
  { icon: "🌸", title: "Proljetno čišćenje", desc: "Jednom godišnje temeljito — čistimo sve što redovno čišćenje ne doseže." },
  { icon: "🏨", title: "Airbnb / najam", desc: "Između gostiju ili stanara — pripremljenost koja se vidi i osjeća." },
  { icon: "⏱️", title: "Jedan dolazak", desc: "Dolazimo s opremom i sredstvima, radimo temeljito i predajemo vam čist prostor." },
  { icon: "✅", title: "Garancija zadovoljstva", desc: "Ako nisi zadovoljan rezultatom, vraćamo se i popravljamo — bez dodatnih troškova." },
];

const FAQ = [
  { q: "Trebam li biti doma za vrijeme čišćenja?", a: "Nije obavezno. Mnogi klijenti nam ostave ključ ili šifru i mi odradimo sve dok su na poslu. Prostor predajemo čist i zaključan." },
  { q: "Što trebam pripremiti?", a: "Samo slobodan pristup prostoru. Mi dolazimo s vlastitim sredstvima i opremom. Preporuča se ukloniti krupne stvari s podova za efikasnije čišćenje." },
  { q: "Koliko traje generalno čišćenje?", a: "Za prosječan stan (50–70 m²) tipično 3–5 sati s jednim radnikom, 2–3 sata s dvojicom. Za veće prostore ili posebno zapuštene slučajeve dolazimo na procjenu." },
  { q: "Razlikuje li se od redovnog čišćenja?", a: "Da — generalno čišćenje je temeljitiji zahvat. Čistimo iza i ispod namještaja, unutar uređaja, fugne, prozore i sve detalje koje redovno čišćenje ne pokriva." },
  { q: "Čistite li i poslovne prostore?", a: "Da — uredi, ordinacije, studiji, butici. Prilagođavamo se radnom vremenu i dolazimo van radnog vremena ako je potrebno." },
  { q: "Kako se određuje cijena?", a: "Cijena ovisi o kvadraturi, broju prostorija i stanju prostora. Pošalji nam opis i fotografije — šaljemo ponudu unutar nekoliko sati." },
];

export default function GeneralkePage() {
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
              <a href="/kontakt?usluga=generalke" className="bg-[#0266f0] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#0052c9] active:scale-[0.97] transition-all shadow-sm shadow-blue-200">
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
                  <span className="text-xs text-gray-500 font-medium">Generalno čišćenje</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0266f0] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 border border-blue-200">
                  🧹 Jednokratno · bez ugovora
                </div>
                <h1 className="font-extrabold text-[#0d1f3c] text-4xl md:text-5xl xl:text-[56px] leading-[1.06] tracking-tight mb-5">
                  Čisto do<br />
                  <span className="text-[#0266f0]">zadnjeg kutka.</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                  Generalno dubinsko čišćenje stanova, kuća i ureda.
                  Doseljenje, iseljenje, proljetno čišćenje ili priprema za goste — jednim dolaskom.
                </p>
                <ul className="space-y-3 mb-9">
                  {[
                    "Stan, kuća, ured — svi prostori",
                    "Dolazimo s opremom i sredstvima",
                    "Garancija zadovoljstva",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm font-semibold">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-blue-100 text-[#0266f0] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="/kontakt?usluga=generalke" className="inline-flex items-center gap-2 bg-[#0266f0] text-white font-extrabold px-7 py-4 rounded-2xl hover:bg-[#0052c9] active:scale-[0.97] transition-all text-base shadow-lg shadow-blue-200">
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
                    src="/images/services/apartment.jpg"
                    alt="Generalno čišćenje stana — Pro Clean Zagreb"
                    fill priority
                    className="object-cover"
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4 whitespace-nowrap">
                    <div className="text-xl font-extrabold text-[#0266f0] leading-none">Jedan dolazak</div>
                    <div className="text-xs text-gray-500 font-medium leading-tight">sve gotovo</div>
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
                Temeljito — bez iznimke
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

        {/* ── RAZLOZI ── */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-[#0266f0] uppercase tracking-widest mb-3">Kada nas zovete</p>
              <h2 className="font-extrabold text-[#0d1f3c] text-3xl md:text-4xl tracking-tight">
                Za svaku prigodu
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY.map((w) => (
                <div key={w.title} className="bg-[#f7f9fc] rounded-2xl p-7 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <span className="text-3xl block mb-4">{w.icon}</span>
                  <h3 className="font-extrabold text-[#0d1f3c] text-base mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0266f0] py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-extrabold text-white text-3xl md:text-4xl mb-4">
              Trebate dubinsko čišćenje?
            </h2>
            <p className="text-blue-100/80 text-base md:text-lg mb-8">
              Pošaljite kvadraturu i opis prostora — ponudu dobivate unutar nekoliko sati.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+385994840416" className="inline-flex items-center justify-center gap-2 bg-white text-[#0266f0] font-extrabold px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-sm shadow-lg">
                📞 099 484 0416
              </a>
              <a href="/kontakt?usluga=generalke" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all text-sm">
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
                { href: "/usluge/stubiste", emoji: "🏢", title: "Čišćenje stubišta", sub: "Redovito i jednokratno" },
                { href: "/usluge/garaza",   emoji: "🚗", title: "Čišćenje garaža",   sub: "Strojno ribanje poda" },
                { href: "/usluge/prozori",  emoji: "🪟", title: "Pranje prozora",     sub: "Iznutra i izvana" },
                { href: "/usluge/strojno",  emoji: "⚙️", title: "Strojno pranje podova", sub: "Industrijska oprema" },
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
