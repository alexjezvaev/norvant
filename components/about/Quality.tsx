import { Section } from "@/components/ui/Section";

const points = [
  {
    title: "Certification",
    text: "Descriptions list the protection class (SB, S1, S1P, S3, and up) and the key properties.",
  },
  {
    title: "Purpose",
    text: "Office shoes and shop-floor shoes stay separate. Each model is for a specific kind of work.",
  },
  {
    title: "Wear",
    text: "We look at the sole, the seams, and the last — the pair has to hold up to daily load.",
  },
] as const;

export function Quality() {
  return (
    <Section
      className="bg-surface"
      eyebrow="Trust"
      title="What the quality rests on"
      description="A short checklist of what we look at when we pick a model."
    >
      <ul className="grid gap-8 md:grid-cols-3">
        {points.map((item) => (
          <li key={item.title} className="space-y-2">
            <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted md:text-base">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
