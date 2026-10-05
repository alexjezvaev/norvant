import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getPopularProducts } from "@/lib/products";

export function PopularModels() {
  const popular = getPopularProducts(4);

  return (
    <Section
      className="bg-surface"
      eyebrow="Catalog"
      title="Popular models"
      description="The pairs most often chosen for the warehouse, the floor, and outdoor work."
    >
      <Reveal delay={0.08}>
        <ProductGrid products={popular} />
      </Reveal>
      <Reveal delay={0.16} className="mt-cell-md">
        <Button href="/catalog" variant="secondary">
          Full catalog
        </Button>
      </Reveal>
    </Section>
  );
}
