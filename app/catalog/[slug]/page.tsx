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

  const title = product.name;
  const description =
    product.description || `${product.name} · ${site.name}`;
  const path = `/catalog/${product.slug}`;
  const image = product.images[0];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      ...(image ? { images: [{ url: image, alt: product.name }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
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
