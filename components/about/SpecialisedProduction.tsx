import { AboutMedia } from "@/components/about/shared/AboutMedia";
import { AboutSectionHeader } from "@/components/about/shared/AboutSectionHeader";
import { AboutSplit } from "@/components/about/shared/AboutSplit";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function SpecialisedProduction() {
  return (
    <Section>
      <AboutSplit>
        <Reveal className="h-full min-h-72 md:min-h-0">
          <AboutMedia
            src="/about/production-footwear.jpg"
            alt="Industrial stitching of NORVANT safety footwear"
            className="rounded-lg"
          />
        </Reveal>

        <Reveal
          delay={0.12}
          className="flex flex-col justify-center"
        >
          <AboutSectionHeader
            eyebrow="Specialised production"
            title="Specialised production"
            body={
              <>
                Manufactured at specialised facilities in China to NORVANT
                requirements, with attention to materials, construction and
                consistent quality.
                <br />
                <br />
                We work closely with our production partners to ensure our
                footwear and workwear meet the practical needs of professional
                users.
              </>
            }
          />
        </Reveal>
      </AboutSplit>
    </Section>
  );
}
