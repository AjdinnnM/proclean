import type { MetadataRoute } from "next";
import { abs } from "@/lib/site-url";

/** Slike po stranici — ulaze u image sitemap (Google Images). */
const IMAGES: Record<string, string[]> = {
  "/": [
    "/images/services/staircase-real.jpg",
    "/images/services/garaza-karcher.jpg",
    "/images/photos/prozori/pranje-prozora-stambena-zgrada.jpg",
    "/images/services/izgradnja-popup.jpg",
    "/images/photos/cvjecarnica-skrinjaric.jpg",
  ],
  "/usluge/stubiste": [
    "/images/photos/stubiste-lobby.jpg",
    "/images/photos/stubiste/ciscenje-stubista-zagreb-ulaz.jpg",
    "/images/photos/stubiste/strojno-ciscenje-ulaza-zgrade.jpg",
    "/images/photos/stubiste/strojno-pranje-plocica-stubiste.jpg",
    "/images/photos/stubiste/stroj-za-ribanje-poda-stubiste.jpg",
    "/images/photos/stubiste/strojno-stubiste-prije.jpg",
    "/images/photos/stubiste/strojno-stubiste-poslije.jpg",
  ],
  "/usluge/garaza": [
    "/images/services/garaza-karcher.jpg",
    "/images/photos/garaza/garaza-prije.jpg",
    "/images/photos/garaza/garaza-poslije.jpg",
    "/images/photos/garaza/garaza-prije-3.jpg",
    "/images/photos/garaza/garaza-poslije-3.jpg",
    "/images/photos/garaza/garaza-prije-4.jpg",
    "/images/photos/garaza/garaza-poslije-4.jpg",
    "/images/photos/garaza/garaza-rad-1.jpg",
    "/images/photos/garaza/garaza-rad-2.jpg",
    "/images/photos/garaza/strojno-pranje-poda-garaze.jpg",
    "/images/photos/garaza/ciscenje-garaze-zagreb-nakon-ribanja.jpg",
  ],
  "/usluge/izgradnja": [
    "/images/services/izgradnja-popup.jpg",
    "/images/photos/izgradnja/ciscenje-nakon-izgradnje-zagreb-1.jpg",
    "/images/photos/izgradnja/ciscenje-nakon-izgradnje-prije.jpg",
    "/images/photos/izgradnja/ciscenje-nakon-izgradnje-poslije.jpg",
    "/images/photos/izgradnja/ciscenje-gradjevinske-prasine-zagreb.jpg",
    "/images/photos/izgradnja/ciscenje-stana-nakon-izgradnje.jpg",
  ],
  "/usluge/prozori": [
    "/images/photos/prozori/pranje-prozora-profesionalno-zagreb.jpg",
    "/images/photos/prozori/pranje-prozora-na-visini-zagreb.jpg",
    "/images/photos/prozori/dizalica-za-pranje-prozora-zagreb.jpg",
    "/images/photos/prozori/pranje-fasadnog-stakla-dizalica.jpg",
    "/images/photos/prozori/pranje-prozora-stambena-zgrada.jpg",
  ],
  "/usluge/poslovni-prostori": ["/images/photos/cvjecarnica-skrinjaric.jpg"],
  "/usluge/generalke": ["/images/services/office.jpg"],
  "/usluge/strojno": ["/images/services/garaza-karcher.jpg"],
  "/reference/vukovarska-56": [
    "/images/photos/vukovarska/vukovarska-zgrada.jpg",
    "/images/photos/vukovarska/vukovarska-fasada-ljestve.jpg",
    "/images/photos/vukovarska/vukovarska-strojno-pranje.jpg",
    "/images/photos/vukovarska/vukovarska-pranje-stakla.jpg",
    "/images/photos/vukovarska/vukovarska-ured.jpg",
    "/images/photos/vukovarska/vukovarska-stubiste.jpg",
  ],
  "/reference/kalea-family-mall": [
    "/images/photos/kalea/kalea-salon-gotovo.jpg",
    "/images/photos/kalea/kalea-izlog-opening-soon.jpg",
    "/images/photos/kalea/kalea-pranje-izloga.jpg",
    "/images/photos/kalea/kalea-usisavanje-salona.jpg",
    "/images/photos/kalea/kalea-ciscenje-polica.jpg",
    "/images/photos/kalea/kalea-salon-fotelje.jpg",
  ],
  "/reference/kalea-sajam-arena": [
    "/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-ulaz-stand.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-stand-police.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-ekipa-ljestve.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-ciscenje-zida.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-ciscenje-natpisa.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-stand-gotovo.jpg",
    "/images/photos/kalea-sajam/kalea-sajam-kuhinja.jpg",
  ],
  "/reference/novotel": ["/images/photos/prozori/pranje-prozora-novotel-zagreb.jpg"],
  "/reference/garderoba": ["/images/photos/izgradnja/ciscenje-nakon-adaptacije-kafic.jpg"],
  "/reference/cvjecarna-skrinjaric": ["/images/reference/cvjecarna-skrinjaric.jpg"],
  "/galerija": [],
  "/kontakt": [],
  "/politika-privatnosti": [],
};

const PRIORITY: Record<string, number> = {
  "/": 1,
  "/usluge/stubiste": 0.9,
  "/usluge/garaza": 0.9,
  "/usluge/izgradnja": 0.9,
  "/usluge/prozori": 0.9,
  "/usluge/poslovni-prostori": 0.8,
  "/usluge/strojno": 0.8,
  "/usluge/generalke": 0.8,
  "/reference/vukovarska-56": 0.8,
  "/reference/kalea-family-mall": 0.8,
  "/reference/kalea-sajam-arena": 0.8,
  "/kontakt": 0.7,
  "/galerija": 0.6,
  "/politika-privatnosti": 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.keys(IMAGES).map((path) => ({
    url: abs(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: PRIORITY[path] ?? 0.6,
    images: IMAGES[path].map((img) => abs(img)),
  }));
}
