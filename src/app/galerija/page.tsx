import type { Metadata } from "next";
import { HeaderV3 } from "@/components/v3/HeaderV3";
import { FooterV3 } from "@/components/v3/FooterV3";
import { GalleryV3 } from "@/components/v3/GalleryV3";

export const metadata: Metadata = {
  title: "Galerija radova — Pro Clean Zagreb",
  description: "Pogledajte naše radove — čišćenje stubišta, garaža, pranje prozora i čišćenje nakon izgradnje. Zagreb i okolica.",
  alternates: { canonical: "https://proclean.hr/galerija" },
};

export default function GalerijaPage() {
  return (
    <>
      <HeaderV3 />
      <main>
        <GalleryV3 />
      </main>
      <FooterV3 />
    </>
  );
}
