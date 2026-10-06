import Image from "next/image";
import { AboutSectionHeader } from "@/components/about/shared/AboutSectionHeader";
import { DividedList } from "@/components/about/shared/DividedList";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const industries = [
  { icon: "/about/construction.svg", label: "Construction" },
  { icon: "/about/manufacturing.svg", label: "Manufacturing" },
  { icon: "/about/logistics.svg", label: "Logistics" },
  { icon: "/about/transport.svg", label: "Transport" },
  { icon: "/about/maintenance.svg", label: "Maintenance" },
] as const;

export function BuiltForDifferentIndustries() {
  return (
    <section className="relative isolate overflow-hidden py-section md:py-section-md">
      <Image
        src="/about/industries-worker-panorama.jpg"
        alt="Worker overlooking an industrial construction site at sunset"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-muted to-transparent to-100%"
        aria-hidden
      />

      <Container className="relative">
        <Reveal className="flex w-full flex-col justify-center space-y-stack md:w-[60%] md:space-y-stack-md">
          <AboutSectionHeader
            className="contents"
            eyebrow="Scope of application"
            eyebrowTone="white"
            title="Built for different industries"
            titleTone="white"
            body="NORVANT products are used across a wide range of working environments, from heavy construction to logistics and maintenance. We design for the real conditions you face on the job."
            bodyTone="white-soft"
          />

          <DividedList
            items={industries}
            className="mt-stack flex items-stretch justify-between"
            dividerClassName="w-px shrink-0 self-stretch bg-white/25"
            getKey={(item) => item.label}
            renderItem={(item) => (
              <li
                key={item.label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-icon-md shrink-0"
                />
                <Text variant="detail" tone="white">
                  {item.label}
                </Text>
              </li>
            )}
          />
        </Reveal>
      </Container>
    </section>
  );
}
