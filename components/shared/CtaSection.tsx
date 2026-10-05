import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

type CtaSectionProps = {
  title: string;
  body: string;
  actionLabel: string;
  actionHref: string;
};

export function CtaSection({
  title,
  body,
  actionLabel,
  actionHref,
}: CtaSectionProps) {
  return (
    <Section className="bg-brand">
      <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="space-y-stack md:space-y-stack-md">
          <Text variant="h2" tone="white">
            {title}
          </Text>
          <Text variant="body" tone="white-soft">
            {body}
          </Text>
        </div>
        <Button
          href={actionHref}
          size="lg"
          className="shrink-0 border-transparent bg-white text-brand hover:bg-white/90 focus-visible:outline-white"
        >
          {actionLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
