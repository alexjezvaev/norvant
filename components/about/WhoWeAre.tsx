import Image from "next/image";
import { AboutMedia } from "@/components/about/shared/AboutMedia";
import { AboutSectionHeader } from "@/components/about/shared/AboutSectionHeader";
import { AboutSplit } from "@/components/about/shared/AboutSplit";
import { DividedList } from "@/components/about/shared/DividedList";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

const highlights = [
  {
    icon: "/about/purpose-led-design.svg",
    label: "Purpose-led design",
  },
  {
    icon: "/about/everyday-comfort.svg",
    label: "Everyday comfort",
  },
  {
    icon: "/about/reliable-protection.svg",
    label: "Reliable protection",
  },
] as const;

export function WhoWeAre() {
  return (
    <Section>
      <AboutSplit>
        <Reveal className="flex flex-col justify-center">
          <AboutSectionHeader
            eyebrow="Who we are"
            title={
              <>
                Protection designed <br /> around the work
              </>
            }
            body={
              <>
                NORVANT is a manufacturer of specialised safety footwear and
                professional workwear. We develop products for people who need
                dependable protection and comfort throughout the working day.
                <br />
                <br />
                Our approach starts with the conditions in which the product will
                be used. We consider the demands of different industries, then
                focus on the details that matter in practice: protective
                performance, fit, freedom of movement and durability.
                <br />
                <br />
                From the choice of materials to the construction of each model, we
                aim to make safety equipment practical for everyday use. The
                result is a functional range created for real professional tasks,
                with a contemporary look that does not compromise its purpose.
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.12} className="h-full min-h-72 md:min-h-0">
          <AboutMedia
            src="/about/who-we-are-worker-footwear.jpg"
            alt="Worker wearing NORVANT safety footwear on a construction site"
            className="rounded-lg"
            priority
          />
        </Reveal>
      </AboutSplit>

      <Reveal delay={0.08}>
        <DividedList
          items={highlights}
          className="mt-block flex flex-col gap-8 md:mt-block-md md:flex-row md:items-center md:justify-between"
          dividerClassName="h-px w-full shrink-0 bg-border md:h-auto md:w-px md:self-stretch"
          getKey={(item) => item.label}
          renderItem={(item) => (
            <li key={item.label} className="flex items-center gap-icon-gap">
              <Image
                src={item.icon}
                alt=""
                width={64}
                height={64}
                className="size-icon-lg shrink-0"
              />
              <Text variant="h3">{item.label}</Text>
            </li>
          )}
        />
      </Reveal>
    </Section>
  );
}
