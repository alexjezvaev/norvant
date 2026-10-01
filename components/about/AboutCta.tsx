import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function AboutCta() {
  return (
    <Section>
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Ready to pick a pair?
          </h2>
          <p className="mt-2 text-muted">Open the catalog or write to {site.email}</p>
        </div>
        <Button href="/catalog" size="lg">
          Open catalog
        </Button>
      </div>
    </Section>
  );
}
