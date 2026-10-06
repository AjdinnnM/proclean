import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti — Pro Clean Zagreb",
  description:
    "Politika privatnosti web stranice procleanzg.com — kako Pro Clean prikuplja, koristi i štiti vaše osobne podatke u skladu s GDPR-om.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://procleanzg.com/politika-privatnosti" },
};

export default function PolitikaPrivatnostiPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen">
      <div className="max-w-[820px] mx-auto px-6 lg:px-10 pt-6 pb-20">
        {/* Breadcrumb */}
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] mb-6">
          <a href="/" className="hover:text-[#3B82F6] transition-colors">Pro Clean</a>
          {" › "}
          <span>Politika privatnosti</span>
        </p>

        {/* Title */}
        <h1
          className="font-semibold text-[#0A0A0A] text-[34px] lg:text-[46px] leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontFamily: "var(--font-v3-display)" }}
        >
          Politika privatnosti
        </h1>
        <p className="text-[13px] text-[#6B7280] mb-10">
          Objavljeno: 01.06.2026. · Primjenjuje se od: 01.06.2026.
        </p>

        {/* Body */}
        <div className="prose-legal space-y-6 text-[15px] leading-[1.7] text-[#3F3F3F]">
          {/* VODITELJ OBRADE */}
          <section>
            <h2 className="legal-h2">Voditelj obrade podataka</h2>
            <p>
              Web stranica <strong>procleanzg.com</strong> u vlasništvu je obrta{" "}
              <strong>Pro Clean, obrt za usluge</strong> sa sjedištem u Zagrebu (u daljnjem
              tekstu: „Pro Clean“). Za sva pitanja vezana uz obradu osobnih podataka možete
              nas kontaktirati na{" "}
              <a href="mailto:proclean.hr@outlook.com" className="legal-link">proclean.hr@outlook.com</a>{" "}
              ili na broj <a href="tel:+385994840416" className="legal-link">099 484 0416</a>.
            </p>
            <p>
              Pro Clean veliku pažnju posvećuje zaštiti osobnih podataka, a ova Politika
              privatnosti opisuje i uređuje na koji način Pro Clean postupa s Vašim podacima
              prilikom korištenja naših usluga i web stranice.
            </p>
          </section>

          {/* 1. UVOD */}
          <section>
            <h2 className="legal-h2">1. Uvod</h2>
            <p>
              Ova Politika privatnosti opisuje kako Pro Clean prikuplja, koristi i čuva Vaše
              osobne podatke, te objašnjava Vaša zakonska prava kojima kontrolirate našu
              upotrebu tih podataka. Korištenjem stranice procleanzg.com potvrđujete da ste
              pročitali i razumjeli ovu Politiku privatnosti.
            </p>
          </section>

          {/* 2. OPĆI UVJETI */}
          <section>
            <h2 className="legal-h2">2. Opći uvjeti</h2>
            <p>
              U ovom dokumentu obrt Pro Clean, obrt za usluge može se nazivati i „Pro Clean“,
              „web stranica“, „stranica“, „mi“, „nas“ ili „naše“.
            </p>
          </section>

          {/* 3. GDPR */}
          <section>
            <h2 className="legal-h2">3. Uredba o zaštiti osobnih podataka (GDPR)</h2>
            <p>
              Obradu osobnih podataka provodimo u skladu s Općom uredbom o zaštiti podataka
              (GDPR) i važećim propisima Republike Hrvatske. Naše zakonske osnove za obradu
              uključuju:
            </p>
            <ul className="legal-ul">
              <li>
                <strong>Provođenje ugovora:</strong> potrebni su nam Vaši podaci kako bismo
                ispunili ugovornu obvezu pružanja usluge ili odgovorili na Vaš upit.
              </li>
              <li>
                <strong>Pravna usklađenost:</strong> u pojedinim slučajevima zakon nalaže
                prikupljanje i čuvanje podataka (npr. izdavanje računa, prosljeđivanje
                nadležnim tijelima u slučaju prijevare).
              </li>
              <li>
                <strong>Legitimni interesi:</strong> imamo opravdan razlog za korištenje
                Vaših podataka na način koji ne ugrožava Vaša prava — npr. analiza korištenja
                stranice radi poboljšanja usluge i, uz Vaš pristanak, slanje ponuda.
              </li>
            </ul>
          </section>

          {/* 4. PODATCI KOJE PRIKUPLJAMO */}
          <section>
            <h2 className="legal-h2">4. Podaci koje prikupljamo</h2>
            <h3 className="legal-h3">a) Osobni podaci</h3>
            <p>Prilikom slanja upita ili zahtjeva za ponudu možemo prikupiti:</p>
            <ul className="legal-ul">
              <li>ime i prezime</li>
              <li>adresu objekta / lokaciju usluge</li>
              <li>telefonski (kontakt) broj</li>
              <li>e-mail adresu</li>
              <li>sadržaj Vaše poruke ili upita</li>
              <li>IP adresu te približan zemljopisni položaj uređaja</li>
              <li>datum i vrijeme upita</li>
            </ul>

            <h3 className="legal-h3">b) Podaci o kolačićima</h3>
            <p>
              Koristimo kolačiće za upravljanje sesijama, pamćenje postavki i mjerenje
              posjećenosti. Za analitiku koristimo <strong>Google Analytics 4</strong>, koji
              postavlja kolačiće radi statistike korištenja stranice. Kolačići su male
              tekstualne datoteke koje se pohranjuju na Vaš uređaj. Svoj preglednik možete
              postaviti da odbije sve ili neke kolačiće; u tom slučaju pojedini dijelovi
              stranice možda neće ispravno funkcionirati.
            </p>

            <h3 className="legal-h3">c) Podaci o uređaju</h3>
            <p>
              Prilikom posjeta stranici automatski se mogu prikupiti podaci poput vrste
              uređaja, IP adrese, operativnog sustava i vrste preglednika te načina na koji
              koristite stranicu — u statističke i sigurnosne svrhe.
            </p>
          </section>

          {/* 5. ZAŠTO I KAKO KORISTIMO */}
          <section>
            <h2 className="legal-h2">5. Zašto nam trebaju Vaši podaci i kako ih koristimo</h2>
            <ul className="legal-ul">
              <li>kako bismo odgovorili na Vaš upit i dostavili ponudu</li>
              <li>kako bismo pružili i naplatili ugovorenu uslugu čišćenja</li>
              <li>kako bismo Vas kontaktirali (e-mailom, telefonom ili SMS-om) u vezi s uslugom</li>
              <li>kako bismo Vam pružili korisničku podršku</li>
              <li>za analizu i poboljšanje rada i kvalitete web stranice i usluge</li>
              <li>za sprječavanje prijevara i osiguravanje sigurnog okruženja</li>
              <li>uz Vaš pristanak, za slanje promotivnih obavijesti i ponuda</li>
            </ul>
            <h3 className="legal-h3">Kontakt broj telefona</h3>
            <p>
              Vaš kontakt broj koristimo kako bismo Vas nazvali ili poslali poruke u vezi s
              uslugom, u administrativne te, ako ste za to dali dopuštenje, marketinške svrhe.
            </p>
          </section>

          {/* 6. DIJELJENJE */}
          <section>
            <h2 className="legal-h2">6. Dijeljenje prikupljenih podataka</h2>
            <p>
              Dijelimo samo podatke opisane u ovom dokumentu ili u trenutku njihova
              prikupljanja. Vaše podatke <strong>ne prodajemo</strong> trećim stranama.
            </p>
            <h3 className="legal-h3">a) Pružatelji usluga i partneri</h3>
            <p>
              Možemo koristiti usluge pouzdanih pružatelja (npr. za analitiku ili slanje
              poruka) isključivo u svrhu pružanja i unaprjeđenja naše usluge. Takvi
              pružatelji obrađuju podatke u naše ime i sukladno ovoj Politici.
            </p>
            <h3 className="legal-h3">b) Zakonske obveze</h3>
            <p>
              Osobne podatke možemo otkriti trećoj strani ako to zahtijeva zakon ili sudski
              nalog, odnosno radi zaštite prava, sigurnosti i imovine korisnika i Pro Cleana.
            </p>
          </section>

          {/* 7. PRAVO NA BRISANJE */}
          <section>
            <h2 className="legal-h2">7. Pravo na ograničenje obrade i brisanje podataka</h2>
            <p>
              U svakom trenutku možete zatražiti brisanje osobnih podataka ili ograničenje
              njihove obrade, djelomično ili u cijelosti. Zadržavamo pravo odbiti zahtjev ako
              ne možemo potvrditi Vaš identitet ili ako postoje zakonska ograničenja (npr.
              obveza čuvanja računa).
            </p>
            <p>
              Zahtjev možete poslati e-mailom na{" "}
              <a href="mailto:proclean.hr@outlook.com" className="legal-link">proclean.hr@outlook.com</a>{" "}
              ili putem kontakt obrasca na stranici. Po zaprimljenom zahtjevu potvrdit ćemo
              primitak i pokrenuti postupak brisanja u skladu s propisima.
            </p>
          </section>

          {/* 8. ZADRŽAVANJE + PRAVA */}
          <section>
            <h2 className="legal-h2">8. Zadržavanje osobnih podataka i Vaša prava</h2>
            <p>
              Osobne podatke čuvamo onoliko dugo koliko je potrebno za ispunjenje svrhe zbog
              koje su prikupljeni te sukladno zakonskim rokovima, nakon čega ih brišemo.
            </p>
            <p>U određenim okolnostima imate pravo:</p>
            <ul className="legal-ul">
              <li>zatražiti kopiju osobnih podataka koje o Vama posjedujemo</li>
              <li>zatražiti ispravak ili brisanje podataka</li>
              <li>zatražiti ograničenje obrade</li>
              <li>usprotiviti se daljnjoj obradi, uključujući slanje marketinških obavijesti</li>
              <li>povući privolu u bilo kojem trenutku, bez utjecaja na zakonitost prethodne obrade</li>
            </ul>
            <p>
              Ako Vaš zahtjev nije riješen na zadovoljavajući način, možete se obratiti
              nadležnom nadzornom tijelu — <strong>Agenciji za zaštitu osobnih podataka
              (AZOP)</strong>.
            </p>
          </section>

          {/* 9. ZAŠTITA */}
          <section>
            <h2 className="legal-h2">9. Zaštita Vaših podataka</h2>
            <p>
              Poduzimamo razumne tehničke i organizacijske mjere kako bi Vaši podaci bili
              sigurni. Napominjemo da prijenos podataka putem interneta nije 100% siguran, pa
              ne možemo jamčiti apsolutnu sigurnost podataka koje nam šaljete.
            </p>
          </section>

          {/* 10. PROMJENE + KONTAKT */}
          <section>
            <h2 className="legal-h2">10. Obavijesti o promjenama i kontakt</h2>
            <p>
              Ova Politika privatnosti povremeno se pregledava i po potrebi ažurira. Potičemo
              Vas da je povremeno pročitate kako biste bili upoznati s njezinim odredbama.
            </p>
            <p>
              Za sva pitanja kontaktirajte nas putem kontakt obrasca na stranici ili e-mailom
              na{" "}
              <a href="mailto:proclean.hr@outlook.com" className="legal-link">proclean.hr@outlook.com</a>{" "}
              (tel. <a href="tel:+385994840416" className="legal-link">099 484 0416</a>).
            </p>
          </section>

          <p className="text-[13px] text-[#6B7280] pt-4 border-t border-black/5 uppercase tracking-wide">
            Nastavkom korištenja web stranice procleanzg.com potvrđujete da ste upoznati s
            odredbama ove Politike privatnosti te da pristajete na obradu podataka u navedene
            svrhe.
          </p>
        </div>
      </div>
    </div>
  );
}
