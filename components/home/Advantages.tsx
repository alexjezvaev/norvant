import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Text } from "@/components/ui/Text";

const advantages = [
  {
    title: "Rated protection",
    text: "S1–S5 models with steel or composite toe caps and puncture-resistant midsoles.",
  },
  {
    title: "Built for the shift",
    text: "Pairs for the shop floor, the warehouse, the site, and work outdoors.",
  },
  {
    title: "Comfort all day",
    text: "Cushioning, breathable uppers, and a last shaped so your feet last the shift.",
  },
] as const;

export function Advantages() {
  return (
    <Section
      className="bg-bg-subtle"
      eyebrow="Why Norvant"
      title="Footwear for the job, not just another boot"
      description="What the NORVANT Sport Line range is built around."
    >
      <Stagger
        as="ul"
        delay={0.08}
        className="grid gap-split border-t border-border pt-split md:grid-cols-3 md:gap-cell-md"
      >
        {advantages.map((item, index) => (
          <StaggerItem as="li" key={item.title} className="space-y-2">
            <Text variant="eyebrow">0{index + 1}</Text>
            <Text variant="h3">{item.title}</Text>
            <Text variant="body-sm">{item.text}</Text>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
