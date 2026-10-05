import Image from "next/image";
import { AboutSectionHeader } from "@/components/about/shared/AboutSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Text } from "@/components/ui/Text";

const points = [
  {
    icon: "/about/materials.svg",
    label: "Materials",
    text: "Carefully selected materials for demanding work environments.",
  },
  {
    icon: "/about/fit.svg",
    label: "Fit",
    text: "Designed for all-day comfort and reliable support.",
  },
  {
    icon: "/about/protective-elements.svg",
    label: "Protective elements",
    text: "Integrated features for enhanced safety on the job.",
  },
  {
    icon: "/about/outsole-stability.svg",
    label: "Outsole stability",
    text: "Outsoles designed for reliable grip and stability.",
  },
  {
    icon: "/about/durability.svg",
    label: "Durability",
    text: "Built to withstand tough working conditions.",
  },
  {
    icon: "/about/consistent-quality.svg",
    label: "Consistent quality",
    text: "Ongoing production control to ensure reliable quality.",
  },
] as const;

export function OurApproach() {
  return (
    <Section className="!pb-0 md:!pb-0">
      <Reveal className="max-w-2xl">
        <AboutSectionHeader
          eyebrow="Our Approach"
          title="Quality in every detail"
          body="From material selection to the finished product, we focus on the details that make a real difference in safety, comfort and long-term performance."
        />
      </Reveal>

      <Stagger
        as="ul"
        delay={0.08}
        className="mt-stack grid md:grid-cols-3"
      >
        {points.map((item) => (
          <StaggerItem
            as="li"
            key={item.label}
            className="flex items-start gap-icon-gap border-border py-cell not-last:border-b md:border-r md:px-cell-x md:py-cell-md md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(-n+3)]:border-b md:[&:nth-child(n+4)]:border-b-0 md:[&:nth-child(3n+1)]:pl-0 md:[&:nth-child(3n)]:pr-0"
          >
            <Image
              src={item.icon}
              alt=""
              width={64}
              height={64}
              className="size-icon-lg shrink-0"
            />
            <div className="min-w-0 space-y-2">
              <Text variant="h3">{item.label}</Text>
              <Text variant="body">{item.text}</Text>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
