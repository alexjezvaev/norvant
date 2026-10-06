import { AboutSectionHeader } from "@/components/about/shared/AboutSectionHeader";
import { AboutSplit } from "@/components/about/shared/AboutSplit";
import { AboutVideo } from "@/components/about/shared/AboutVideo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function SpecialisedProduction() {
  return (
    <Section>
      <AboutSplit>
        <Reveal className="h-full min-h-72 md:min-h-0">
          <AboutVideo
            src="/about/specialised-production.mp4"
            poster="/about/production-footwear.jpg"
            label="Industrial stitching of NORVANT safety footwear"
            className="rounded-lg"
          />
        </Reveal>

        <Reveal
          delay={0.12}
          className="flex flex-col justify-center"
        >
          <AboutSectionHeader
            eyebrow="Protective footwear and clothing are our specialty"
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
