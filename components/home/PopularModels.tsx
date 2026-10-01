import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
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
      <ProductGrid products={popular} />
      <div className="mt-10">
        <Button href="/catalog" variant="secondary">
          Full catalog
        </Button>
      </div>
    </Section>
  );
}
