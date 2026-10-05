import { CtaSection } from "@/components/shared/CtaSection";

export function CatalogCta() {
  return (
    <CtaSection
      title="Need a pair for a specific job?"
      body="Browse the full catalog, or write to us and we will match a model to the protection rating and the work."
      actionLabel="Go to catalog"
      actionHref="/catalog"
    />
  );
}
