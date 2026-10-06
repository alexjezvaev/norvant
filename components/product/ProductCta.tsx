import { CtaSection } from "@/components/shared/CtaSection";

export function ProductCta() {
  return (
    <CtaSection
      title="Need help choosing the right pair?"
      body="Tell us the model, quantity, and delivery destination — we will get back with availability and pricing."
      actionLabel="Contact sales"
      actionHref="/contacts"
    />
  );
}
