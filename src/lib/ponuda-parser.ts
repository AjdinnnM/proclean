// Croatian NLP parser for Pro Clean Zagreb ponuda (offer) generator
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
// Helpers
// ---------------------------------------------------------------------------

function normalise(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// ---------------------------------------------------------------------------
// Client type detection
// ---------------------------------------------------------------------------

function detectClientType(
  text: string
): "zgrada" | "firma" | "osoba" | undefined {
  const n = normalise(text);

  // Firma indicators
  if (
    /\bd\.o\.o\.?/i.test(text) ||
    /\bd\.d\.?/i.test(text) ||
    /\bj\.d\.o\.o\.?/i.test(text) ||
    /\bfirma\b/i.test(n) ||
    /\btvrtka\b/i.test(n) ||
    /\bpoduzece\b/i.test(n) ||
    /\bpodjetje\b/i.test(n)
  ) {
    return "firma";
  }

  // Zgrada indicators
  if (
    /stambena\s+zgrada/i.test(n) ||
    /stamb\.\s*zgr\./i.test(n) ||
    /\bzgrada\b/i.test(n) ||
    /\bstambena\b/i.test(n) ||
    /\bsoliter\b/i.test(n) ||
    /\bblok\b/i.test(n)
  ) {
    return "zgrada";
  }

  return undefined;
}

// ---------------------------------------------------------------------------
// Address extraction
// ---------------------------------------------------------------------------

const STREET_SUFFIXES =
  "ulica|cesta|nasip|avenija|trg|put|aleja|promenada|obala|prolaz|staza";
const STREET_REGEX = new RegExp(
  // "Savska cesta 10" style
  `([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+(?:\\s+[A-Za-zčćšžđĐČĆŠŽ]+)*)\\s+(?:${STREET_SUFFIXES})\\s+\\d+[a-zA-Z]?(?:,\\s*[A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)?`,
  "i"
);
const STREET_REGEX_SHORT = new RegExp(
  // "Ilica 5" — capitalised word directly followed by number
  `([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)\\s+(\\d+[a-zA-Z]?)(?:,\\s*[A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)?`,
  "g"
);

function extractAddress(text: string): string | undefined {
  const longMatch = STREET_REGEX.exec(text);
  if (longMatch) return longMatch[0].trim();

  // Try short form but avoid matching plain words
  const candidates: string[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(STREET_REGEX_SHORT.source, "gi");
  while ((m = re.exec(text)) !== null) {
    // Filter out things like "12 prozora" (starts with digit) already excluded by regex
    // Avoid matching year-like numbers
    const num = parseInt(m[2], 10);
    if (num > 0 && num < 10000) {
      candidates.push(m[0].trim());
    }
  }
  // Prefer longest match
  if (candidates.length > 0) {
    return candidates.sort((a, b) => b.length - a.length)[0];
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// OIB / email / phone
// ---------------------------------------------------------------------------

function extractOib(text: string): string | undefined {
  const m = /\b(\d{11})\b/.exec(text);
  return m ? m[1] : undefined;
}

function extractEmail(text: string): string | undefined {
  const m = /\b([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})\b/.exec(
    text
  );
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
  // "400€", "400 €", "400 eur", "400 eura", "eur 400", "€ 400"
  const patterns = [
    /(\d+(?:[.,]\d+)?)\s*(?:€|eur(?:a|o)?)\b/i,
    /(?:€|eur(?:a|o)?)\s*(\d+(?:[.,]\d+)?)\b/i,
  ];
  for (const p of patterns) {
    const m = p.exec(text);
    if (m) {
      return parseFloat(m[1].replace(",", "."));
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Quantity extraction
// ---------------------------------------------------------------------------

interface QtyHint {
  qty: number;
  ctx: string;
}

function extractQtyHints(text: string): QtyHint[] {
  const hints: QtyHint[] = [];
  const patterns: Array<{ re: RegExp; ctx: string }> = [
    { re: /(\d+)\s*prozora?\b/i, ctx: "prozori" },
    { re: /(\d+)\s*katova?\b/i, ctx: "katovi" },
    { re: /(\d+)\s*(?:m²|m2)\b/i, ctx: "m2" },
    { re: /(\d+)\s*eta[žz]e?\b/i, ctx: "etaze" },
    { re: /(\d+)\s*kom\b/i, ctx: "kom" },
  ];
  for (const { re, ctx } of patterns) {
    const m = re.exec(text);
    if (m) {
      hints.push({ qty: parseInt(m[1], 10), ctx });
    }
  }
  return hints;
}

// ---------------------------------------------------------------------------
// Services → items
// ---------------------------------------------------------------------------

interface ServiceRule {
  patterns: RegExp[];
  desc: string;
  unit: string;
  qtyContexts?: string[]; // which QtyHint ctx applies
}

const SERVICE_RULES: ServiceRule[] = [
  {
    patterns: [/stubi[šs]t[ea]/i, /\bstubi[šs]te\b/i],
    desc: "Čišćenje stubišta",
    unit: "kom",
    qtyContexts: ["katovi", "etaze"],
  },
  {
    patterns: [/\bgara[žz]a?\b/i],
    desc: "Čišćenje garaže",
    unit: "kom",
    qtyContexts: ["etaze", "m2"],
  },
  {
    patterns: [/\bprozor/i],
    desc: "Pranje prozora",
    unit: "kom",
    qtyContexts: ["prozori"],
  },
  {
    patterns: [/nakon\s+izgradnje/i, /\bizgradnja\b/i, /\bpostigradnja\b/i],
    desc: "Čišćenje nakon izgradnje",
    unit: "kom",
  },
  {
    patterns: [
      /generalna\s+(?:čišćenje|ciscenje)/i,
      /\bgeneralno\b/i,
      /\bgeneralna\b/i,
      /poslovni\s+prostori/i,
    ],
    desc: "Generalno čišćenje",
    unit: "kom",
    qtyContexts: ["m2"],
  },
];

function extractItems(text: string): PonudaItem[] {
  const globalPrice = extractPrice(text);
  const qtyHints = extractQtyHints(text);
  const items: PonudaItem[] = [];

  for (const rule of SERVICE_RULES) {
    const matched = rule.patterns.some((p) => p.test(text));
    if (!matched) continue;

    // Determine quantity
    let qty = 1;
    if (rule.qtyContexts) {
      for (const ctx of rule.qtyContexts) {
        const hint = qtyHints.find((h) => h.ctx === ctx);
        if (hint) {
          qty = hint.qty;
          break;
        }
      }
    }

    items.push({
      desc: rule.desc,
      qty,
      unit: rule.unit,
      price: 0, // filled below
    });
  }

  // Assign global price to single item, or first item
  if (globalPrice !== undefined && items.length > 0) {
    items[0] = { ...items[0], price: globalPrice };
  }

  return items;
}

// ---------------------------------------------------------------------------
// Notes extraction
// ---------------------------------------------------------------------------

function extractNotes(text: string): string | undefined {
  const m =
    /(?:napomena|biljezka|napomene|biljeska)\s*:\s*(.+?)(?:\n|$)/i.exec(text);
  return m ? m[1].trim() : undefined;
}

// ---------------------------------------------------------------------------
// Name extraction (person/company)
// ---------------------------------------------------------------------------

function extractPersonName(text: string): string | undefined {
  // Look for two-word capitalised combination not matching street or known keywords
  const skipWords = new Set([
    "Pro",
    "Clean",
    "Zagreb",
    "Stambena",
    "Zgrada",
    "Firma",
    "Tvrtka",
    "Savska",
    "Ilica",
  ]);
  // "Ime Prezime" — two consecutive Title Case words
  const m = /\b([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)\s+([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ]+)\b/.exec(
    text
  );
  if (m && !skipWords.has(m[1]) && !skipWords.has(m[2])) {
    // Avoid matching street address
    const combined = m[0];
    const addrMatch = extractAddress(text);
    if (!addrMatch || !addrMatch.startsWith(combined)) {
      return combined;
    }
  }
  return undefined;
}

function extractCompanyName(text: string): string | undefined {
  // Grab text before d.o.o. / d.d. / j.d.o.o.
  const m = /([A-ZČĆŠŽĐ][a-zA-ZčćšžđĐČĆŠŽ\s]+?)\s+(?:d\.o\.o\.?|d\.d\.?|j\.d\.o\.o\.?)/i.exec(
    text
  );
  return m ? m[1].trim() : undefined;
}

// ---------------------------------------------------------------------------
// Project name generation
// ---------------------------------------------------------------------------

function generateProjectName(
  items: PonudaItem[],
  address: string | undefined
): string {
  const service = items.length > 0 ? items[0].desc : "Čišćenje";
  if (address) return `${service} — ${address}`;
  return service;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function parsePonuda(text: string): PonudaFill {
  const clientType = detectClientType(text);
  const address = extractAddress(text);
  const email = extractEmail(text);
  const phone = extractPhone(text);
  const oib = extractOib(text);
  const items = extractItems(text);
  const notes = extractNotes(text);
  const projectName = generateProjectName(items, address);

  // Build client object based on type
  let client: PonudaClient | undefined;

  if (clientType === "zgrada") {
    const zgrada: PonudaClientZgrada = {};
    if (address) zgrada.bldgAddr = address;
    if (email) zgrada.bldgEmail = email;
    if (Object.keys(zgrada).length > 0) client = zgrada;
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
    // osoba (default when person name found or nothing matches)
    const osoba: PonudaClientOsoba = {};
    const name = extractPersonName(text);
    if (name) osoba.personName = name;
    if (address) osoba.personAddr = address;
    if (phone) osoba.personPhone = phone;
    if (Object.keys(osoba).length > 0) {
      client = osoba;
      // Only set clientType to osoba if we found some person data
      if (!clientType) {
        return {
          clientType: "osoba",
          client,
          meta: { project: projectName },
          items: items.length > 0 ? items : undefined,
          notes,
        };
      }
    }
  }

  const result: PonudaFill = {};

  if (clientType) result.clientType = clientType;
  else if (client) result.clientType = "osoba";

  if (client) result.client = client;

  const meta: PonudaMeta = {};
  if (projectName && items.length > 0) meta.project = projectName;
  if (Object.keys(meta).length > 0) result.meta = meta;

  if (items.length > 0) result.items = items;
  if (notes) result.notes = notes;

  return result;
}

// ---------------------------------------------------------------------------
// Summary helper
// ---------------------------------------------------------------------------

export function summarizeParsed(p: PonudaFill): string {
  const parts: string[] = [];

  // Client type
  if (p.clientType === "zgrada") {
    parts.push("**Stambena zgrada**");
  } else if (p.clientType === "firma") {
    parts.push("**Firma**");
  } else if (p.clientType === "osoba") {
    parts.push("**Osoba**");
  }

  // Address
  const addr = (() => {
    if (!p.client) return undefined;
    const c = p.client as Record<string, string | undefined>;
    return c["bldgAddr"] ?? c["addr"] ?? c["personAddr"];
  })();
  if (addr) parts.push(`adresa: ${addr}`);

  // Name / company
  const name = (() => {
    if (!p.client) return undefined;
    const c = p.client as Record<string, string | undefined>;
    return c["name"] ?? c["personName"];
  })();
  if (name) parts.push(`naziv: ${name}`);

  // Items
  if (p.items && p.items.length > 0) {
    const itemStrs = p.items.map((i) => {
      const priceStr = i.price > 0 ? ` · ${i.price}€` : "";
      return `${i.desc} ${i.qty}×${priceStr}`;
    });
    parts.push(`Usluga: ${itemStrs.join(", ")}`);
  }

  // Notes
  if (p.notes) parts.push(`Napomena: ${p.notes}`);

  if (parts.length === 0) return "Nisam pronašao dovoljno podataka. Pokušaj opisati uslugu i adresu.";

  return `Pronašao sam: ${parts.join(" · ")}`;
}
