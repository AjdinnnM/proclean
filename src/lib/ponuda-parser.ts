// Croatian NLP parser for Pro Clean Zagreb ponuda generator
// Rule-based, no external API calls

export interface PonudaItem {
  desc: string;
  qty: number;
  unit: string;
  price: number;
}

export interface PonudaClientZgrada {
  bldgAddr?: string;
  bldgRecipient?: string;
  bldgEmail?: string;
}

export interface PonudaClientFirma {
  name?: string;
  addr?: string;
  oib?: string;
  contact?: string;
  email?: string;
}

export interface PonudaClientOsoba {
  personName?: string;
  personAddr?: string;
  personPhone?: string;
}

export type PonudaClient = PonudaClientZgrada | PonudaClientFirma | PonudaClientOsoba;

export interface PonudaMeta {
  date?: string;
  valid?: string;
  project?: string;
}

export interface PonudaFill {
  clientType?: "zgrada" | "firma" | "osoba";
  client?: PonudaClient;
  meta?: PonudaMeta;
  items?: PonudaItem[];
  serviceDesc?: string;
  notes?: string;
}

// ---------------------------------------------------------------------------
// Service descriptions (from real PDF templates)
// ---------------------------------------------------------------------------

const SERVICE_DESCS: Record<string, string> = {
  garaza: `* Uklanjanje paučine sa zidova, stropova i svih površina
* Brisanje i uklanjanje prašine na instalacijama (cijevima)
* Metenje garaže (uklanjanje prašine, pijeska i krupne nečistoće)
* Strojno pranje garaže (prolaz za vozila, zajedničke površine i dostupna parkirna mjesta)
* Čišćenje vrata od garaže
USLUGA OBUHVAĆA:
čišćenje prolaza za vozila (podovi, paučina, cijevi) čišćenje privatnih parkirnih mjesta (isključivo ona koja su slobodna)
metenje i čišćenje prilaza garaži (rampa/spust)`,

  stubiste: `* Detaljno metenje i uklanjanje nečistoća i hodnika na svim katovima
* Detaljno strojno pranje hodnika na svim katovima
* Detaljno pranje stubišta
* Detaljno pranje i čišćenje ograde i rukohvata
* Detaljno pranje i čišćenje liftova
* Pranje zidne keramike oko liftova na svim etažama
* Čišćenje hodnika kod spremišta na -1 etaži
* Detaljno metenje elektro sobe
* Pranje prostora ispred ulaza u zgradu
* Uklanjanje paučine iz zajedničkih prostora zgrade
* Uklanjanje građevinske prašine i sitnih nečistoća iz zajedničkih prostora
* Generalno čišćenje svih zajedničkih prostora stambene zgrade`,

  prozori: `* Pranje prozora iznutra i izvana
* Čišćenje prozorskih okvira i klupica
* Brisanje stakla do suha bez tragova
* Čišćenje roletnih kaseta i vodilica`,

  izgradnja: `* Uklanjanje građevinske prašine s podova, zidova i stropova
* Čišćenje boje, silikona i ostataka građevinskog materijala
* Pranje svih površina (podovi, zidovi, stolarija)
* Čišćenje sanitarnih čvorova i kuhinja
* Fino čišćenje i poliranje površina
* Objekt spreman za useljenje`,

  generalno: `* Generalno čišćenje svih prostorija
* Pranje podova i tvrdih površina
* Brisanje prašine s namještaja i opreme
* Čišćenje sanitarnih čvorova
* Pranje prozora iznutra
* Usisavanje i/ili pranje tepiha i presvlaka`,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalise(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Strip zip code and city from address for use in project name
function addressShort(addr: string): string {
  return addr
    .replace(/,?\s*\d{5}\s+[A-Za-zčćšžđĐČĆŠŽ]+\s*$/, "")
    .replace(/,?\s*Zagreb\s*$/i, "")
    .trim();
}

// Ensure address ends with ", 10000 Zagreb"
function normalizeAddress(raw: string): string {
  const clean = raw.trim();
  // Already has zip code — return as is
  if (/\d{5}/.test(clean)) return clean;
  // Already has Zagreb — return as is
  if (/Zagreb/i.test(clean)) return clean;
  return `${clean}, 10000 Zagreb`;
}

// ---------------------------------------------------------------------------
// Client type detection
// ---------------------------------------------------------------------------

function detectClientType(text: string): "zgrada" | "firma" | "osoba" | undefined {
  const n = normalise(text);

  // Firma first (most explicit)
  if (
    /\bd\.o\.o\.?/i.test(text) ||
    /\bd\.d\.?/i.test(text) ||
    /\bj\.d\.o\.o\.?/i.test(text) ||
    /\bfirma\b/.test(n) ||
    /\btvrtka\b/.test(n) ||
    /\bpoduzece\b/.test(n) ||
    /\bpodjetje\b/.test(n) ||
    /\bposlodavac\b/.test(n) ||
    /poslovni\s+prostor/.test(n) ||
    /posl\.\s*prostor/.test(n) ||
    /\brenovaci/.test(n) ||
    /nakon\s+renovaci/.test(n)
  ) return "firma";

  // Zgrada (stambena zgrada OR mention of garaža/stubište without explicit firma)
  if (
    /stambena\s+zgrada/.test(n) ||
    /stamb\.\s*zgr\./.test(n) ||
    /\bzgrada\b/.test(n) ||
    /\bstambena\b/.test(n) ||
    /\bsoliter\b/.test(n) ||
    /\bblok\b/.test(n) ||
    /\bgaraz[ae]\b/.test(n) ||
    /\bstubist[ea]\b/.test(n)
  ) return "zgrada";

  // Izgradnja/novogradnja → firma
  if (/\bizgradnj/.test(n) || /\bnovogradnj/.test(n)) return "firma";

  return undefined;
}

// ---------------------------------------------------------------------------
// Address extraction
// ---------------------------------------------------------------------------

const STREET_SUFFIXES = "ulica|cesta|nasip|avenija|trg|put|aleja|promenada|obala|prolaz|staza|ulica";

// "Savska cesta 10" / "Trnjanski nasip IV 8" / "Makarska Ulica 76"
const STREET_REGEX_LONG = new RegExp(
  `([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+(?:\\s+[A-Za-zčćšžđĐČĆŠŽIVXivx]+)*)\\s+(?:${STREET_SUFFIXES})\\s+(?:[IVXLCDM]+\\s+)?\\d+[a-zA-Z]?`,
  "i"
);

// "Ilica 5" / "Maksimirska 88"
const STREET_REGEX_SHORT = /([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)\s+(\d+[a-zA-Z]?)\b/g;

function extractAddress(text: string): string | undefined {
  const longMatch = STREET_REGEX_LONG.exec(text);
  if (longMatch) return longMatch[0].trim();

  const candidates: string[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(STREET_REGEX_SHORT.source, "gi");
  const skipWords = /^(Ana|Ivan|Pero|Marko|Tomislav|Renato|Ajdin|Melina|Pro|Clean|Zagreb|Stambena|Zgrada|Firma|Ponuda|Napomena)$/i;
  while ((m = re.exec(text)) !== null) {
    if (skipWords.test(m[1])) continue;
    const num = parseInt(m[2], 10);
    if (num > 0 && num < 10000) candidates.push(m[0].trim());
  }
  return candidates.sort((a, b) => b.length - a.length)[0];
}

// ---------------------------------------------------------------------------
// Contact fields
// ---------------------------------------------------------------------------

function extractOib(text: string): string | undefined {
  const m = /\b(\d{11})\b/.exec(text);
  return m ? m[1] : undefined;
}

function extractEmail(text: string): string | undefined {
  const m = /\b([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})\b/.exec(text);
  return m ? m[1] : undefined;
}

function extractPhone(text: string): string | undefined {
  const m = /\b(0\d[\s\-]?\d{3}[\s\-]?\d{3,4})\b/.exec(text);
  return m ? m[1].replace(/[\s\-]/g, " ").trim() : undefined;
}

// ---------------------------------------------------------------------------
// Price extraction
// ---------------------------------------------------------------------------

function extractPrice(text: string): number | undefined {
  const patterns = [
    /(\d+(?:[.,]\d+)?)\s*(?:€|eur(?:a|o)?)\b/i,
    /(?:€|eur(?:a|o)?)\s*(\d+(?:[.,]\d+)?)\b/i,
  ];
  for (const p of patterns) {
    const m = p.exec(text);
    if (m) return parseFloat(m[1].replace(",", "."));
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Quantity extraction
// ---------------------------------------------------------------------------

interface QtyHint { qty: number; unit: string; ctx: string; }

function extractQtyHints(text: string): QtyHint[] {
  const hints: QtyHint[] = [];
  const patterns: Array<{ re: RegExp; unit: string; ctx: string }> = [
    { re: /(\d+)\s*prozora?\b/i,    unit: "kom",  ctx: "prozori" },
    { re: /(\d+)\s*katova?\b/i,     unit: "kat",  ctx: "katovi"  },
    { re: /(\d+(?:[.,]\d+)?)\s*(?:m²|m2)\b/i, unit: "m²", ctx: "m2" },
    { re: /(\d+)\s*eta[žz]e?\b/i,   unit: "m²",  ctx: "etaze"   },
    { re: /(\d+)\s*kom\b/i,         unit: "kom",  ctx: "kom"     },
  ];
  for (const { re, unit, ctx } of patterns) {
    const m = re.exec(text);
    if (m) hints.push({ qty: parseFloat(m[1].replace(",", ".")), unit, ctx });
  }
  return hints;
}

// ---------------------------------------------------------------------------
// Service detection → items
// ---------------------------------------------------------------------------

interface ServiceRule {
  key: string;
  patterns: RegExp[];
  itemDesc: string;
  projectLabel: string;
  unit: string;
  qtyContexts?: string[];
}

const SERVICE_RULES: ServiceRule[] = [
  {
    key: "garaza",
    patterns: [/\bgara[žz][ae]?\b/i],
    itemDesc: "Strojno pranje garaže — etaža 1",
    projectLabel: "Garaža",
    unit: "m²",
    qtyContexts: ["m2", "etaze"],
  },
  {
    key: "stubiste",
    patterns: [/stubi[šs]t[ea]\b/i, /\bstubiste\b/i],
    itemDesc: "Generalnoč čišćenje stubišta",
    projectLabel: "Stubište",
    unit: "kom",
    qtyContexts: ["katovi", "etaze"],
  },
  {
    key: "prozori",
    patterns: [/\bprozor/i],
    itemDesc: "Pranje prozora",
    projectLabel: "Prozori",
    unit: "kom",
    qtyContexts: ["prozori"],
  },
  {
    key: "izgradnja",
    patterns: [/nakon\s+izgradnje/i, /\bizgradnj/i, /\bpostigradnj/i, /\bnovogradnj/i],
    itemDesc: "Čišćenje nakon izgradnje",
    projectLabel: "Izgradnja",
    unit: "kom",
    qtyContexts: ["m2"],
  },
  {
    key: "generalno",
    patterns: [/\bgeneralna?\b/i, /\bgeneralno\b/i, /poslovni\s+prostor/i, /posl\.\s*prostor/i],
    itemDesc: "Generalno čišćenje",
    projectLabel: "Generalno",
    unit: "kom",
    qtyContexts: ["m2"],
  },
];

function detectService(text: string): ServiceRule | undefined {
  for (const rule of SERVICE_RULES) {
    if (rule.patterns.some((p) => p.test(text))) return rule;
  }
  return undefined;
}

function buildItems(rule: ServiceRule, text: string): PonudaItem[] {
  const price = extractPrice(text) ?? 0;
  const hints = extractQtyHints(text);

  let qty = 1;
  let unit = rule.unit;
  if (rule.qtyContexts) {
    for (const ctx of rule.qtyContexts) {
      const hint = hints.find((h) => h.ctx === ctx);
      if (hint) { qty = hint.qty; unit = hint.unit; break; }
    }
  }

  // Garaža: multiple etaže → multiple rows
  if (rule.key === "garaza") {
    const etazeHint = hints.find((h) => h.ctx === "etaze");
    if (etazeHint && etazeHint.qty > 1) {
      return Array.from({ length: etazeHint.qty }, (_, i) => ({
        desc: `Strojno pranje garaže — etaža ${i + 1}`,
        qty: hints.find((h) => h.ctx === "m2")?.qty ?? 1,
        unit: "m²",
        price: price > 0 ? (i === 0 ? price : 0) : 0,
      }));
    }
  }

  return [{ desc: rule.itemDesc, qty, unit, price }];
}

// ---------------------------------------------------------------------------
// Notes extraction
// ---------------------------------------------------------------------------

function extractNotes(text: string): string | undefined {
  const m = /(?:napomena|biljezka|napomene|biljeska)\s*:?\s*(.+?)(?:\n|$)/i.exec(text);
  return m ? m[1].trim() : undefined;
}

// ---------------------------------------------------------------------------
// Name extraction
// ---------------------------------------------------------------------------

const SKIP_NAMES = new Set([
  "Pro", "Clean", "Zagreb", "Stambena", "Zgrada", "Firma", "Tvrtka",
  "Savska", "Ilica", "Garaža", "Stubište", "Prozori", "Ponuda",
]);

function extractPersonName(text: string, address?: string): string | undefined {
  const m = /\b([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)\s+([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)\b/.exec(text);
  if (!m) return undefined;
  if (SKIP_NAMES.has(m[1]) || SKIP_NAMES.has(m[2])) return undefined;
  if (address && address.startsWith(m[0])) return undefined;
  return m[0];
}

function extractCompanyName(text: string): string | undefined {
  const m = /([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ\s]+?)\s+(?:d\.o\.o\.?|d\.d\.?|j\.d\.o\.o\.?)/i.exec(text);
  return m ? m[1].trim() : undefined;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function parsePonuda(text: string): PonudaFill {
  const clientType = detectClientType(text) ?? "zgrada"; // default to zgrada
  const rawAddress = extractAddress(text);
  const address = rawAddress ? normalizeAddress(rawAddress) : undefined;
  const email = extractEmail(text);
  const phone = extractPhone(text);
  const oib = extractOib(text);
  const notes = extractNotes(text);
  const service = detectService(text);
  const items = service ? buildItems(service, text) : [];

  // Project name: "Garaža · Makarska Ulica 76" (street without zip/city)
  const projectLabel = service?.projectLabel ?? "Čišćenje";
  const streetShort = address ? addressShort(address) : undefined;
  const project = streetShort ? `${projectLabel} · ${streetShort}` : projectLabel;

  // Build client
  let client: PonudaClient | undefined;

  if (clientType === "zgrada") {
    const personName = extractPersonName(text, address);
    // bldgRecipient: always "Predstavnik suvlasnika — " + name (empty if no name)
    const bldgRecipient = personName
      ? `Predstavnik suvlasnika — ${personName}`
      : "Predstavnik suvlasnika — ";
    const zgrada: PonudaClientZgrada = { bldgRecipient };
    if (address) zgrada.bldgAddr = address;
    if (email) zgrada.bldgEmail = email;
    client = zgrada;
  } else if (clientType === "firma") {
    const firma: PonudaClientFirma = {};
    const name = extractCompanyName(text);
    if (name) firma.name = name;
    if (address) firma.addr = address;
    if (oib) firma.oib = oib;
    if (email) firma.email = email;
    if (phone) firma.contact = phone;
    if (Object.keys(firma).length > 0) client = firma;
  } else {
    const osoba: PonudaClientOsoba = {};
    const name = extractPersonName(text, address);
    if (name) osoba.personName = name;
    if (address) osoba.personAddr = address;
    if (phone) osoba.personPhone = phone;
    if (Object.keys(osoba).length > 0) client = osoba;
  }

  const result: PonudaFill = {
    clientType,
    meta: { project },
  };

  if (client) result.client = client;
  if (items.length > 0) result.items = items;
  if (service && SERVICE_DESCS[service.key]) result.serviceDesc = SERVICE_DESCS[service.key];
  if (notes) result.notes = notes;

  return result;
}

// ---------------------------------------------------------------------------
// Mapbox address enrichment (correct diacritics + proper street name from geocoder)
// ---------------------------------------------------------------------------

const MAPBOX_TOKEN = "pk.eyJ1IjoiYWpkaW5uIiwiYSI6ImNtb2JvcTQ2ZTAyZXMycHNhM2phZHoxM2kifQ.V_7gxBDn5tQWr9kt5wXSfw";

interface MapboxContext {
  id: string;
  text: string;
}

interface MapboxFeature {
  text: string;
  address?: string;
  context?: MapboxContext[];
}

interface MapboxResponse {
  features?: MapboxFeature[];
}

function getClientAddr(fill: PonudaFill): string | undefined {
  if (!fill.client) return undefined;
  const c = fill.client as Record<string, string | undefined>;
  return c["bldgAddr"] ?? c["addr"] ?? c["personAddr"];
}

function setClientAddr(fill: PonudaFill, addr: string): void {
  if (!fill.client) return;
  const c = fill.client as Record<string, string>;
  if ("bldgAddr" in c) c["bldgAddr"] = addr;
  else if ("addr" in c) c["addr"] = addr;
  else if ("personAddr" in c) c["personAddr"] = addr;
}

export async function enrichWithMapbox(fill: PonudaFill): Promise<PonudaFill> {
  const rawAddr = getClientAddr(fill);
  if (!rawAddr) return fill;

  try {
    const query = encodeURIComponent(rawAddr + " Zagreb Croatia");
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json` +
      `?country=HR&proximity=15.9819,45.8150&language=hr&types=address&limit=1` +
      `&access_token=${MAPBOX_TOKEN}`;

    const res = await fetch(url);
    if (!res.ok) return fill;

    const data: MapboxResponse = await res.json();
    const feature = data.features?.[0];
    if (!feature) return fill;

    const streetName = feature.text ?? "";
    const houseNum = feature.address ?? "";
    const postcode =
      feature.context?.find((c) => c.id.startsWith("postcode"))?.text ?? "10000";
    const city =
      feature.context?.find((c) => c.id.startsWith("place"))?.text ?? "Zagreb";

    if (!streetName) return fill;

    const properAddr = `${streetName}${houseNum ? " " + houseNum : ""}, ${postcode} ${city}`;
    const enriched: PonudaFill = { ...fill, client: { ...fill.client } };
    setClientAddr(enriched, properAddr);

    // Also update project name with corrected street
    if (enriched.meta?.project) {
      const label = enriched.meta.project.split("·")[0].trim();
      const shortStreet = addressShort(properAddr);
      enriched.meta = { ...enriched.meta, project: `${label} · ${shortStreet}` };
    }

    return enriched;
  } catch {
    return fill;
  }
}

// ---------------------------------------------------------------------------
// Summary helper
// ---------------------------------------------------------------------------

export function summarizeParsed(p: PonudaFill): string {
  const parts: string[] = [];

  if (p.clientType === "zgrada") parts.push("**Stambena zgrada**");
  else if (p.clientType === "firma") parts.push("**Firma**");
  else if (p.clientType === "osoba") parts.push("**Osoba**");

  const c = (p.client ?? {}) as Record<string, string | undefined>;
  const addr = c["bldgAddr"] ?? c["addr"] ?? c["personAddr"];
  if (addr) parts.push(`adresa: ${addr}`);

  const recipient = c["bldgRecipient"];
  if (recipient && recipient !== "Predstavnik suvlasnika — ") parts.push(`kontakt: ${recipient}`);

  if (p.meta?.project) parts.push(`projekt: ${p.meta.project}`);

  if (p.items && p.items.length > 0) {
    const s = p.items.map((i) => {
      const pr = i.price > 0 ? ` · ${i.price}€` : "";
      return `${i.desc} (${i.qty} ${i.unit})${pr}`;
    }).join(", ");
    parts.push(`usluga: ${s}`);
  }

  if (p.notes) parts.push(`napomena: ${p.notes}`);

  if (parts.length === 0) return "Nisam pronašao dovoljno podataka. Pokušaj opisati uslugu i adresu.";
  return `Pronašao sam: ${parts.join(" · ")}`;
}
