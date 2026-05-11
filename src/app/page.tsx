import { HeaderV3 } from "@/components/v3/HeaderV3";
import { HeroV3 } from "@/components/v3/HeroV3";
import { TrustV3 } from "@/components/v3/TrustV3";
import { ServicesV3 } from "@/components/v3/ServicesV3";
import { StoryV3 } from "@/components/v3/StoryV3";
import { PartnersV3 } from "@/components/v3/PartnersV3";
import { TestimonialsV3 } from "@/components/v3/TestimonialsV3";
import { FaqV3 } from "@/components/v3/FaqV3";
import { ContactV3 } from "@/components/v3/ContactV3";
import { FooterV3 } from "@/components/v3/FooterV3";
import { StickyCTAv3 } from "@/components/v3/StickyCTAv3";

export default function Home() {
  return (
    <>
      <HeaderV3 />
      <main>
        <HeroV3 />
        <TrustV3 />
        <ServicesV3 />
        <StoryV3 />
        <PartnersV3 />
        <TestimonialsV3 />
        <FaqV3 />
        <ContactV3 />
      </main>
      <FooterV3 />
      <StickyCTAv3 />
    </>
  );
}
