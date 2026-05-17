import { ContactV3 } from "@/components/v3/ContactV3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Pro Clean Zagreb | Zatraži besplatnu ponudu",
  description: "Pošalji upit za čišćenje stubišta, garaža, prozora ili prostora nakon izgradnje. Odgovaramo unutar 2 sata.",
};

export default function KontaktPage() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pt-6 pb-0">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] mb-2">
          <a href="/" className="hover:text-[#3B82F6] transition-colors">Pro Clean</a>
          {" › "}
          <span>Kontakt</span>
        </p>
      </div>
      <ContactV3 />
    </div>
  );
}
