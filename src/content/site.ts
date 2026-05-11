import type { SiteContent } from "@/types/content";

/**
 * PRO CLEAN — Zagreb
 *
 * Centralna datoteka sa sadržajem. Ovdje uređuješ tekst, cijene,
 * kontakt i slike. Sve slike u `/public/images/photos/`.
 */
export const site: SiteContent = {
  brand: {
    name: "Pro Clean",
    tagline: "Profesionalno čišćenje u Zagrebu",
    logoText: "Pro Clean",
  },

  contact: {
    phone: "099 484 0416",
    phoneLink: "+385994840416",
    email: "proclean.hr@outlook.com",
    address: "Liganjska 4, 10000 Zagreb",
    city: "Zagreb",
    serviceArea: "Zagreb i okolica",
    hours: "Pon – Sub: 08:00 – 20:00",
    whatsapp: "+385994840416",
  },

  nav: [
    { label: "Usluge", href: "/#usluge" },
    { label: "Kako radimo", href: "/#proces" },
    { label: "Galerija", href: "/#galerija" },
    { label: "Iskustva", href: "/#iskustva" },
    { label: "Česta pitanja", href: "/#faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  hero: {
    eyebrow: "Zagreb i okolica",
    heading: "Čisto stubište, blistava garaža",
    highlight: "bez tvog truda.",
    subheading:
      "Tvoje vrijeme vrijedi previše da bi ga trošio na čišćenje. Zato postojimo mi — vlastita oprema, ekološka sredstva i ekipa koja zna što radi.",
    primaryCta: { label: "Zatraži besplatnu ponudu", href: "#kontakt" },
    secondaryCta: { label: "Pogledaj usluge", href: "#usluge" },
    stats: [
      { value: "500+", label: "Zadovoljnih klijenata" },
      { value: "1000+", label: "Očišćenih objekata" },
      { value: "24h", label: "Odgovor na upit" },
      { value: "100%", label: "Ekološka sredstva" },
    ],
    image: "/images/photos/img-0426.jpg",
    imageAlt: "Pro Clean — profesionalno čišćenje u Zagrebu",
  },

  servicesSection: {
    eyebrow: "Naše usluge",
    heading: "Što radimo za tebe",
    subheading:
      "Specijalizirani smo za čišćenje stubišta i garaža, čišćenje nakon izgradnje ili renovacije, profesionalno pranje prozora te generalno čišćenje poslovnih prostora. Radimo za stambene zajednice, tvrtke i privatne korisnike.",
    services: [
      {
        slug: "stubiste",
        title: "Čišćenje stubišta",
        shortDescription:
          "Redovito ili jednokratno čišćenje stubišta — pod, rukohvati, ulazni prostor.",
        longDescription:
          "Redovito i jednokratno čišćenje stubišta u stambenim zgradama. Prvo čišćenje je uvijek generalno — metemo, skidamo paučinu, peremo pod, stepenice i rukohvate, brišemo vrata, ulazni prostor i poštanske sandučiće. Nudimo i besplatno probno čišćenje za stambene zajednice. Cijena se dogovara prema veličini i učestalosti.",
        priceLabel: "Cijena po dogovoru",
        badge: "Besplatno probno čišćenje",
        image: "/images/services/staircase-real.jpg",
        imagePosition: "center",
        pageUrl: "/usluge/stubiste",
        highlights: [
          "Prvo čišćenje je generalno",
          "Besplatno probno čišćenje",
          "Pranje podova, stepenica i rukohvata",
          "Tjedni, mjesečni ili jednokratni plan",
        ],
      },
      {
        slug: "garaza",
        title: "Čišćenje garaža",
        shortDescription:
          "Metenje, uklanjanje paučine, strojno pranje poda i uklanjanje mrlja.",
        longDescription:
          "Profesionalno čišćenje podzemnih i nadzemnih garaža. Prvo metemo i uklanjamo paučinu sa zidova i instalacija, zatim peremo pod profesionalnim strojem za pranje podova i uklanjamo mrlje, fleke i nakupljenu prljavštinu. Za veće površine odobravamo popust na kvadrat.",
        priceLabel: "Cijena po dogovoru",
        badge: "Popust na veće površine",
        image: "/images/services/garaza-karcher.jpg",
        pageUrl: "/usluge/garaza",
        highlights: [
          "Metenje i uklanjanje paučine",
          "Strojno ribanje podova (ne visokotlačno)",
          "Uklanjanje mrlja i fleka",
          "Popust na veće površine",
        ],
      },
      {
        slug: "izgradnja",
        title: "Čišćenje nakon izgradnje",
        shortDescription:
          "Generalno čišćenje nakon gradnje, adaptacije ili renovacije — spremno za useljenje.",
        longDescription:
          "Nakon završetka radova preuzimamo prostor i pripremamo ga za useljenje. Uklanjamo građevinsku prašinu, ostatke boje, ljepila, silikona i estriha. Peremo prozore, stolariju, radijatore, pločice i podove. Ostavljamo prostor spreman za ulazak stanara ili zaposlenika.",
        priceLabel: "Cijena po dogovoru",
        badge: "Novogradnja & adaptacija",
        image: "/images/services/izgradnja-real.jpg",
        pageUrl: "/usluge/izgradnja",
        highlights: [
          "Uklanjanje građevinske prašine",
          "Pranje stolarije, prozora, radijatora",
          "Skidanje ostataka boje i silikona",
          "Spremno za useljenje",
        ],
      },
      {
        slug: "prozori",
        title: "Profesionalno pranje prozora",
        shortDescription:
          "Obje strane (iznutra i izvana), bez tragova. Radimo i na visini.",
        longDescription:
          "Profesionalno pranje prozora, izloga i staklenih fasada. Cijena uključuje obje strane (iznutra i izvana). Radimo i pranje na visini te na teško dostupnim mjestima uz profesionalnu opremu i dizalice.",
        priceLabel: "Cijena po dogovoru",
        badge: "Iznutra i izvana",
        image: "/images/photos/prozori/IMG_3288.jpg",
        pageUrl: "/usluge/prozori",
        highlights: [
          "Obje strane stakla — iznutra i izvana",
          "Pranje prozora na visini",
          "Teško dostupna mjesta",
          "Stanovi, kuće, zgrade, poslovni prostori",
        ],
      },
    ],
  },

  benefits: {
    eyebrow: "Zašto Pro Clean",
    heading: "Razlog zašto nam stanari i vlasnici vjeruju",
    subheading:
      "Ne radimo brzopleto. Radimo temeljito, sigurno i transparentno — s jasnim cijenama i bez skrivenih troškova.",
    items: [
      {
        title: "Sigurno čišćenje",
        description:
          "Koristimo provjerene tehnike i profesionalnu opremu. Bez oštećenja površina i bez rizika za ukućane.",
        icon: "shield",
      },
      {
        title: "Ekološka sredstva",
        description:
          "Biorazgradiva i atestirana sredstva — učinkovita protiv prljavštine, sigurna za djecu i ljubimce.",
        icon: "leaf",
      },
      {
        title: "Držimo se dogovora",
        description:
          "Dolazimo na vrijeme, radimo koliko smo dogovorili i ostavljamo prostor onako kako bi ti to htio/htjela.",
        icon: "handshake",
      },
      {
        title: "Brz odziv",
        description:
          "Odgovor na upit unutar 24 sata i termin u pravilu unutar 7 dana od potvrde ponude.",
        icon: "clock",
      },
      {
        title: "Iskusna ekipa",
        description:
          "Više od 1000 očišćenih objekata u Zagrebu i okolici. Znamo što radimo i kako to napraviti kako treba.",
        icon: "award",
      },
      {
        title: "Vidljiv rezultat",
        description:
          "Prije i poslije — razlika je očita. Dokumentiramo posao fotografijama ako to klijent želi.",
        icon: "sparkles",
      },
    ],
  },

  process: {
    eyebrow: "Kako radimo",
    heading: "Od upita do čistog prostora — u 3 koraka",
    subheading:
      "Jednostavno pošalji upit, dogovori termin i prepusti ostalo nama. Bez stresa, bez skrivenih troškova.",
    steps: [
      {
        number: "01",
        title: "Pošalji upit",
        description:
          "Nazovi na 099 484 0416, pošalji poruku na WhatsApp ili mail. Odgovaramo unutar 24 sata s procjenom i cijenom.",
      },
      {
        number: "02",
        title: "Dogovori termin",
        description:
          "Kad potvrdiš ponudu, dogovaramo vrijeme izlaska — u pravilu unutar 7 dana. Po potrebi izlazimo na besplatan pregled ili probno čišćenje.",
      },
      {
        number: "03",
        title: "Uživaj u čistoći",
        description:
          "Naša ekipa dolazi s vlastitom opremom i sredstvima. Ti samo osiguraj pristup — za ostalo brinemo mi.",
      },
    ],
    note:
      "Svi stanari u zgradama koje održavamo ostvaruju pravo na popust na zasebne usluge čišćenja stana ili ureda.",
  },

  gallery: {
    eyebrow: "Prije i poslije",
    heading: "Rezultati koji se vide",
    subheading:
      "Stvarne fotografije naših radova u Zagrebu — povuci klizač lijevo–desno da vidiš razliku.",
    items: [
      {
        title: "Čišćenje stubišta",
        location: "Zagreb",
        before: "/images/gallery/staircase-before.jpg",
        after: "/images/gallery/staircase-after.jpg",
      },
      {
        title: "Čišćenje stubišta — hodnik",
        location: "Zagreb",
        before: "/images/gallery/staircase2-before.jpg",
        after: "/images/gallery/staircase2-after.jpg",
      },
      {
        title: "Pranje terasa i podova",
        location: "Zagreb",
        before: "/images/gallery/terrace-before.jpg",
        after: "/images/gallery/terrace-after.jpg",
      },
    ],
  },

  testimonials: {
    eyebrow: "Iskustva klijenata",
    heading: "Što kažu ljudi iz Zagreba",
    subheading:
      "Preko 500 zadovoljnih klijenata — od stambenih zajednica do privatnih korisnika.",
    items: [
      {
        name: "Marko Horvat",
        location: "Predstavnik stanara, Trešnjevka",
        quote:
          "Nakon godina zapuštenog stubišta, ekipa Pro Clean je u jednom danu napravila čudo. Stanari su oduševljeni, cijena fer, komunikacija top. Toplo preporučam.",
        rating: 5,
      },
      {
        name: "Ivana Kovač",
        location: "Vlasnica stana, Maksimir",
        quote:
          "Tražila sam dugo tim koji će ozbiljno pristupiti čišćenju garaže. Mrlje koje su bile godinama — nema ih više. Točni, precizni i jako ljubazni.",
        rating: 5,
      },
      {
        name: "Tomislav Barić",
        location: "Upravitelj zgrade, Novi Zagreb",
        quote:
          "Imamo ugovor s Pro Clean za mjesečno održavanje stubišta u tri zgrade. Nikad nisu propustili termin, a stubište uvijek izgleda kao novo.",
        rating: 5,
      },
      {
        name: "Ana Matić",
        location: "Vlasnica lokala, Centar",
        quote:
          "Angažirala sam ih nakon renovacije lokala. Ostavili su prostor spreman za otvaranje — brzi, profesionalni i diskretni.",
        rating: 5,
      },
      {
        name: "Damir Lukić",
        location: "Privatni korisnik, Dubrava",
        quote:
          "Očistili su mi garažu i oprali prozore. Razlika se vidi — staklo blista, pod je kao nov. Sigurno ih zovem opet.",
        rating: 5,
      },
      {
        name: "Petra Novak",
        location: "Predstavnik stanara, Sesvete",
        quote:
          "Korektni, točni i pošteni. Cijena koja je dogovorena je cijena koja se plaća — bez iznenađenja. Drago mi je da sam ih pronašla.",
        rating: 5,
      },
    ],
  },

  references: {
    eyebrow: "Naše reference",
    heading: "Projekti koji govore sami za sebe",
    subheading:
      "Radili smo za stambene zajednice, hotele, poslovne prostore i privatne klijente diljem Zagreba.",
    items: [
      {
        name: "Novotel Zagreb",
        service: "Čišćenje nakon izgradnje",
        location: "Zagreb centar",
        image: "/images/photos/img-2752.jpg",
        description: "Generalno čišćenje nakon renovacije hotelskih prostora — sobe, hodnici i zajednički prostori.",
      },
      {
        name: "Garderoba — poslovni prostor",
        service: "Čišćenje nakon izgradnje",
        location: "Zagreb",
        image: "/images/photos/img-2731.jpg",
        description: "Čišćenje novouređene garderobe nakon završetka adaptacije — priprema za otvaranje.",
      },
      {
        name: "Dućan — trgovački prostor",
        service: "Čišćenje nakon izgradnje",
        location: "Zagreb",
        image: "/images/photos/img-2781.jpg",
        description: "Generalno čišćenje novog prodajnog prostora — uklanjanje prašine, pranje izloga i podova.",
      },
      {
        name: "Stambena zgrada — 6 katova",
        service: "Čišćenje stubišta",
        location: "Trešnjevka, Zagreb",
        image: "/images/services/staircase-real.jpg",
        description: "Redovito tjedno čišćenje stubišta — 6 katova, 24 stana. Ugovorni klijent od 2023.",
      },
      {
        name: "Podzemna garaža",
        service: "Čišćenje garaža",
        location: "Novi Zagreb",
        image: "/images/services/garaza-karcher.jpg",
        description: "Strojno ribanje podova garaže s 80 parkirnih mjesta. Metenje, paučina i završno usisavanje.",
      },
      {
        name: "Stambena zgrada — pranje prozora",
        service: "Pranje prozora",
        location: "Maksimir, Zagreb",
        image: "/images/photos/prozori/IMG_3153.jpg",
        description: "Pranje prozora na svim katovima — iznutra i izvana, uključujući okvire i klupčice.",
      },
    ],
  },

  faq: {
    eyebrow: "Česta pitanja",
    heading: "Odgovori na najčešća pitanja",
    subheading: "Nešto nije jasno? Nazovi na 099 484 0416 — rado ćemo objasniti.",
    items: [
      {
        question: "Koliko košta čišćenje stubišta?",
        answer:
          "Cijena čišćenja stubišta je po dogovoru — ovisi o broju katova, površini i učestalosti. Prvo čišćenje je uvijek generalno, a za stambene zajednice nudimo besplatno probno čišćenje kako bi se stanari mogli uvjeriti u kvalitetu prije nego što potpišu ugovor.",
      },
      {
        question: "Koliko košta čišćenje garaže?",
        answer:
          "Cijena ovisi o kvadraturi i stanju prostora — pošalji upit za točnu ponudu. Čišćenje obuhvaća metenje, uklanjanje paučine, brisanje cijevi, strojno pranje poda i uklanjanje mrlja.",
      },
      {
        question: "Koliko košta čišćenje nakon izgradnje?",
        answer:
          "Cijena ovisi o kvadraturi i vrsti radova. Uključuje uklanjanje građevinske prašine, ostataka boje i silikona, pranje stolarije, prozora, radijatora, pločica i podova — prostor predajemo spreman za useljenje.",
      },
      {
        question: "Koliko košta pranje prozora?",
        answer:
          "Cijena ovisi o broju prozora, visini i dostupnosti. Uključuje obje strane prozora (iznutra i izvana). Radimo i pranje na visini te na teško dostupnim mjestima.",
      },
      {
        question: "Radite li u cijelom Zagrebu?",
        answer:
          "Da, pokrivamo cijeli Zagreb i okolicu — Trešnjevku, Maksimir, Centar, Dubravu, Novi Zagreb, Sesvete, Velika Gorica, Samobor i druge lokacije.",
      },
      {
        question: "Trebam li nešto pripremiti prije dolaska ekipe?",
        answer:
          "Ne. Dolazimo s vlastitom opremom, vodom (ako je potrebno) i sredstvima. Potrebno je samo osigurati pristup prostoru i eventualno uključiti utičnicu za naš uređaj.",
      },
      {
        question: "Koristite li ekološka sredstva?",
        answer:
          "Da. Radimo isključivo s biorazgradivim, atestiranim sredstvima koja su učinkovita protiv prljavštine, a sigurna za djecu, ljubimce i biljke.",
      },
      {
        question: "Nudite li ugovor o redovnom održavanju?",
        answer:
          "Da. Za stambene zgrade nudimo tjedne, dvotjedne ili mjesečne ugovore s fiksnom cijenom. Ugovorni klijenti imaju popust do 15% u odnosu na jednokratno čišćenje.",
      },
      {
        question: "Mogu li platiti karticom?",
        answer:
          "Da. Primamo gotovinu, karticu (na terenu) i bankovni transfer. Izdajemo R1 račun za poduzeća i stambene zajednice.",
      },
      {
        question: "Što ako nisam zadovoljan/a rezultatom?",
        answer:
          "Ako nakon čišćenja nešto nije u redu, ponovno dolazimo i popravljamo — bez dodatne naplate. Radi se dok nisi zadovoljan/a.",
      },
    ],
  },

  contactCta: {
    heading: "Spremni za čist prostor?",
    subheading:
      "Pošalji upit — javljamo se unutar 24 sata s jasnom ponudom i terminom.",
    primaryCta: { label: "Nazovi 099 484 0416", href: "tel:+385994840416" },
    secondaryCta: { label: "Pošalji poruku", href: "mailto:proclean.hr@outlook.com" },
  },

  footer: {
    description:
      "Pro Clean, obrt za usluge — tvoj partner za profesionalno čišćenje stubišta, garaža, prostora nakon izgradnje i pranje prozora u Zagrebu.",
    columns: [
      {
        title: "Usluge",
        links: [
          { label: "Čišćenje stubišta", href: "/usluge/stubiste" },
          { label: "Čišćenje garaža", href: "/usluge/garaza" },
          { label: "Čišćenje nakon izgradnje", href: "/usluge/izgradnja" },
          { label: "Pranje prozora", href: "/usluge/prozori" },
        ],
      },
      {
        title: "Tvrtka",
        links: [
          { label: "Kako radimo", href: "/#proces" },
          { label: "Iskustva", href: "/#iskustva" },
          { label: "Galerija", href: "/#galerija" },
          { label: "Česta pitanja", href: "/#faq" },
        ],
      },
      {
        title: "Kontakt",
        links: [
          { label: "099 484 0416", href: "tel:+385994840416" },
          { label: "proclean.hr@outlook.com", href: "mailto:proclean.hr@outlook.com" },
          { label: "Liganjska 4, 10000 Zagreb", href: "#" },
        ],
      },
    ],
    legal: "© 2026 Pro Clean, obrt za usluge. Sva prava pridržana.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/proclean_hr/", icon: "instagram" },
      { label: "Facebook", href: "#", icon: "facebook" },
    ],
  },
};
