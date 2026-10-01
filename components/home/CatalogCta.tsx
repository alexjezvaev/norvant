import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CatalogCta() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-hero px-6 py-10 text-white md:flex-row md:items-center md:px-10 md:py-12">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Need a pair for a specific job?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            Browse the full catalog, or write to us and we will match a model to
            the protection rating and the work.
          </p>
        </div>
        <Button href="/catalog" size="lg">
          Go to catalog
        </Button>
      </div>
    </Section>
  );
}
