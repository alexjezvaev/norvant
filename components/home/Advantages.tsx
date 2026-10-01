import { Section } from "@/components/ui/Section";

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
      eyebrow="Why Norvant"
      title="Footwear for the job, not just another boot"
      description="What the NORVANT Sport Line range is built around."
    >
      <ul className="grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-10">
        {advantages.map((item, index) => (
          <li key={item.title} className="space-y-2">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              0{index + 1}
            </p>
            <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted md:text-base">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
