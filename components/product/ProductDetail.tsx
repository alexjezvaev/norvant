import Link from "next/link";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import type { Product } from "@/lib/products";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const { characteristics } = product;

  return (
    <section className="border-b border-border py-section md:py-section-md">
      <Container>
        <Reveal immediate>
          <nav aria-label="Breadcrumb" className="mb-split">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link
                  href="/catalog"
                  className="text-muted transition hover:text-ink"
                >
                  Catalog
                </Link>
              </li>
              <li aria-hidden className="text-border">
                /
              </li>
              <li>
                <Text variant="detail" as="span" className="text-ink">
                  {product.name}
                </Text>
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid items-start gap-split md:grid-cols-2 md:gap-split-md lg:gap-split-lg">
          <Reveal immediate delay={0.05}>
            <ProductGallery product={product} />
          </Reveal>

          <Reveal
            immediate
            delay={0.12}
            className="flex flex-col space-y-stack md:space-y-stack-md"
          >
            <div className="space-y-stack">
              <Text variant="eyebrow">{characteristics.productType}</Text>
              <Text variant="h2" as="h1">
                {product.name}
              </Text>
              <Text variant="body">{product.description}</Text>
            </div>

            <dl className="grid gap-4 border-y border-border py-cell sm:grid-cols-2">
              <div className="space-y-1">
                <Text variant="meta">Standard</Text>
                <Text variant="detail" as="dd">
                  {characteristics.standard}
                </Text>
              </div>
              <div className="space-y-1">
                <Text variant="meta">Sizes</Text>
                <Text variant="detail" as="dd">
                  {characteristics.sizes}
                </Text>
              </div>
              <div className="space-y-1">
                <Text variant="meta">Toe cap</Text>
                <Text variant="detail" as="dd">
                  {characteristics.toeCap}
                </Text>
              </div>
              <div className="space-y-1">
                <Text variant="meta">Outsole</Text>
                <Text variant="detail" as="dd">
                  {characteristics.outsole}
                </Text>
              </div>
            </dl>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contacts" size="lg">
                Request a quote
              </Button>
              <Button href="/catalog" variant="secondary" size="lg">
                Back to catalog
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
