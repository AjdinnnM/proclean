/**
 * Kanonska domena stranice — koristi se za canonical URL-ove, OpenGraph,
 * sitemap i strukturirane podatke.
 *
 * Kad se preseli na proclean.hr, promijeni SAMO ovu vrijednost
 * (i postavi 301 redirect sa stare domene na novu).
 */
export const SITE_URL = "https://www.procleanzg.com";

/** Pomoćna funkcija za apsolutni URL: abs("/usluge/garaza") */
export function abs(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
