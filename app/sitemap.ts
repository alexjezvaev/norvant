import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { pageSeo } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = Object.values(pageSeo).map(
    (page) => {
      const isHome = page.path === "/";
      const isCatalog = page.path === "/catalog";

      return {
        url: `${base}${isHome ? "" : page.path}`,
        lastModified: new Date(),
        changeFrequency: isHome || isCatalog ? "weekly" : "monthly",
        priority: isHome ? 1 : isCatalog ? 0.9 : 0.7,
      };
    },
  );

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${base}/catalog/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
