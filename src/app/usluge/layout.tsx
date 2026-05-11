import { HeaderV3 } from "@/components/v3/HeaderV3";
import { FooterV3 } from "@/components/v3/FooterV3";
import { StickyCTAv3 } from "@/components/v3/StickyCTAv3";

export default function UslugeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderV3 />
      <main>{children}</main>
      <FooterV3 />
      <StickyCTAv3 />
    </>
  );
}
