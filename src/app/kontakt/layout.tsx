import { HeaderV3 } from "@/components/v3/HeaderV3";
import { FooterV3 } from "@/components/v3/FooterV3";

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderV3 />
      <main>{children}</main>
      <FooterV3 />
    </>
  );
}
