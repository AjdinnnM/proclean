import type { JSX } from "react";

/**
 * Jedinstvene ikone usluga — isti set koji koristi roll-down meni (HeaderV3)
 * i "Ostale usluge" sekcije na stranicama usluga.
 */
export type ServiceSlug =
  | "stubiste"
  | "garaza"
  | "prozori"
  | "izgradnja"
  | "poslovni-prostori"
  | "strojno"
  | "generalke";

const PATHS: Record<ServiceSlug, JSX.Element> = {
  stubiste: <path d="M3 21h4v-5h5v-5h5V6h4" />,
  garaza: (
    <>
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M7 21v-5h10v5" />
      <path d="M7 13h10" />
    </>
  ),
  prozori: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M12 3v18M3 12h18" />
    </>
  ),
  izgradnja: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  "poslovni-prostori": (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10" />
      <path d="M8 8h3M8 12h3M8 16h3" />
      <path d="M3 21h18" />
    </>
  ),
  strojno: (
    <>
      <path d="M4 19h16" />
      <ellipse cx="9" cy="16" rx="4" ry="2.2" />
      <path d="M13 15V7a2 2 0 0 1 2-2h2" />
      <path d="M17 3h3v4h-3z" />
    </>
  ),
  generalke: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
};

export function ServiceIcon({ slug, size = 20 }: { slug: ServiceSlug; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[slug]}
    </svg>
  );
}
