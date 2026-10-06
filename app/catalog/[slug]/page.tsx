import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PopularProducts } from "@/components/product/PopularProducts";
import { ProductCharacteristics } from "@/components/product/ProductCharacteristics";
import { ProductCta } from "@/components/product/ProductCta";
import { ProductDetail } from "@/components/product/ProductDetail";
import {
  getPopularProducts,
  getProductBySlug,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product" };
  }

  return {
    title: product.name,
    description: product.description || `${product.name} · ${site.name}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const popular = getPopularProducts(4, product.slug);

  return (
    <>
      <ProductDetail product={product} />
      <ProductCharacteristics product={product} />
      <PopularProducts products={popular} />
      <ProductCta />
    </>
  );
}
