import { AboutMedia } from "@/components/about/shared/AboutMedia";
import { AboutSectionHeader } from "@/components/about/shared/AboutSectionHeader";
import { AboutSplit } from "@/components/about/shared/AboutSplit";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function InternationalPerspective() {
  return (
    <section className="bg-bg-subtle">
      <Container>
        <AboutSplit>
          <Reveal className="flex flex-col justify-center py-section md:py-section-md">
            <AboutSectionHeader
              eyebrow="Knowledge of market requirements"
              eyebrowTone="accent"
              title="International perspective"
              body="Our experience working with European countries has shaped our attention to standards, materials and long-term comfort. We understand the demands of professional users and design our products to perform in real working environments."
            />
          </Reveal>

          <Reveal delay={0.12} className="h-full min-h-72 md:min-h-0">
            <AboutMedia
              src="/about/europe-perspective.png"
              alt="Stylized map of Europe with connected locations"
              imageClassName="object-contain object-center opacity-[60%]"
            />
          </Reveal>
        </AboutSplit>
      </Container>
    </section>
  );
}
