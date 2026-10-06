import { readdirSync } from "node:fs";
import path from "node:path";

export type ProductSpecs = {
  season: string;
  toeCap: string;
  soleMaterial: string;
  upperMaterial: string;
};

export type ProductCharacteristics = {
  productType: string;
  upper: string;
  lining: string;
  toeCap: string;
  outsole: string;
  closure: string;
  sizes: string;
  standard: string;
};

export type ProductProtectiveProperty = {
  title: string;
  body: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  /** Numbered gallery shots: 01.jpg, 02.jpg, … — first is cover, second is catalog hover. */
  images: string[];
  specs: ProductSpecs;
  characteristics: ProductCharacteristics;
  protectiveProperties: ProductProtectiveProperty[];
  popular?: boolean;
};

export const productSpecLabels: {
  key: keyof ProductSpecs;
  label: string;
}[] = [
  { key: "season", label: "Season" },
  { key: "toeCap", label: "Toe cap" },
  { key: "soleMaterial", label: "Sole material" },
  { key: "upperMaterial", label: "Upper material" },
];

export const productCharacteristicLabels: {
  key: keyof ProductCharacteristics;
  label: string;
}[] = [
  { key: "productType", label: "Product type" },
  { key: "upper", label: "Upper" },
  { key: "lining", label: "Lining" },
  { key: "toeCap", label: "Toe cap" },
  { key: "outsole", label: "Outsole" },
  { key: "closure", label: "Closure" },
  { key: "sizes", label: "Sizes" },
  { key: "standard", label: "Standard" },
];

const GALLERY_FILE = /^\d{2}\.(jpe?g|png|webp)$/i;

/** Collects `/products/<folder>/01.jpg`, `02.jpg`, … in order. */
export function getGalleryImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "products", folder);

  try {
    return readdirSync(dir)
      .filter((file) => GALLERY_FILE.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/products/${folder}/${file}`);
  } catch {
    return [];
  }
}

const images = getGalleryImages("8731");

/** Shared while all models reuse 8731 media. */
const protectiveProperties: ProductProtectiveProperty[] = [
  {
    title: "Protective toe",
    body: "A reinforced toe area designed to help protect against workplace impacts.",
    image: "/products/8731/toe-cap.jpg",
  },
  {
    title: "Grip and stability",
    body: "A sculpted outsole supports stable movement on everyday working surfaces.",
    image: "/products/8731/outsole.jpg",
  },
  {
    title: "Durable upper",
    body: "Technical textile and reinforced overlays are made for repeated wear.",
    image: "/products/8731/upper.jpg",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "8731-1-2kv",
    name: "Low Shoes 8731/1-2KV",
    description:
      "Lightweight safety low shoes for everyday industrial work. Technical textile upper, breathable mesh lining, and a composite toe keep weight down without cutting protection.",
    images,
    specs: {
      season: "Mid-season",
      toeCap: "Composite",
      soleMaterial: "PU/PU",
      upperMaterial: "Textile",
    },
    characteristics: {
      productType: "Safety low shoes",
      upper: "Technical textile",
      lining: "Breathable mesh",
      toeCap: "Composite",
      outsole: "Dual-density PU",
      closure: "Laces",
      sizes: "38–46",
      standard: "EN ISO 20345:2022",
    },
    protectiveProperties,
    popular: true,
  },
  {
    id: "2",
    slug: "forge-s1p-shoe",
    name: "Forge S1P Shoes",
    description:
      "All-season S1P shoes with a leather upper and puncture-resistant midsole. Built for workshops and logistics floors where impact and sharp debris are part of the shift.",
    images,
    specs: {
      season: "All-season",
      toeCap: "Composite",
      soleMaterial: "PU/TPU",
      upperMaterial: "Leather",
    },
    characteristics: {
      productType: "Safety low shoes",
      upper: "Full-grain leather",
      lining: "Moisture-wicking textile",
      toeCap: "Composite",
      outsole: "PU/TPU",
      closure: "Laces",
      sizes: "38–47",
      standard: "EN ISO 20345:2022 S1P",
    },
    protectiveProperties,
    popular: true,
  },
  {
    id: "3",
    slug: "tundra-s5-boot",
    name: "Tundra S5 Wellingtons",
    description:
      "Waterproof S5 wellingtons for wet and cold outdoor work. A steel toe and PVC build keep feet dry and protected in mud, wash-down areas, and outdoor yards.",
    images,
    specs: {
      season: "All-season",
      toeCap: "Steel",
      soleMaterial: "PVC",
      upperMaterial: "PVC",
    },
    characteristics: {
      productType: "Safety wellingtons",
      upper: "PVC",
      lining: "Textile fleece",
      toeCap: "Steel",
      outsole: "PVC cleated",
      closure: "Pull-on",
      sizes: "39–47",
      standard: "EN ISO 20345:2022 S5",
    },
    protectiveProperties,
    popular: true,
  },
  {
    id: "4",
    slug: "ventil-sb-sandal",
    name: "Ventil SB Sandals",
    description:
      "Open SB sandals for warm environments where airflow matters. Leather straps and a steel toe deliver basic impact protection without trapping heat.",
    images,
    specs: {
      season: "Summer",
      toeCap: "Steel",
      soleMaterial: "PU/PU",
      upperMaterial: "Leather",
    },
    characteristics: {
      productType: "Safety sandals",
      upper: "Leather straps",
      lining: "Open mesh",
      toeCap: "Steel",
      outsole: "Dual-density PU",
      closure: "Adjustable buckle",
      sizes: "38–46",
      standard: "EN ISO 20345:2022 SB",
    },
    protectiveProperties,
  },
  {
    id: "5",
    slug: "granite-s3-boot",
    name: "Granite S3 Boots",
    description:
      "S3 ankle boots for wet and abrasive sites. Leather upper, waterproof membrane, and a steel toe make them a solid default for construction and outdoor maintenance.",
    images,
    specs: {
      season: "All-season",
      toeCap: "Steel",
      soleMaterial: "PU/Rubber",
      upperMaterial: "Leather",
    },
    characteristics: {
      productType: "Safety ankle boots",
      upper: "Full-grain leather",
      lining: "Waterproof membrane",
      toeCap: "Steel",
      outsole: "PU/Rubber",
      closure: "Laces",
      sizes: "39–48",
      standard: "EN ISO 20345:2022 S3",
    },
    protectiveProperties,
    popular: true,
  },
  {
    id: "6",
    slug: "shift-s1-shoe",
    name: "Shift S1 Shoes",
    description:
      "Breathable mid-season S1 shoes for indoor production lines. A textile upper and composite toe keep the pair light across long standing shifts.",
    images,
    specs: {
      season: "Mid-season",
      toeCap: "Composite",
      soleMaterial: "PU/PU",
      upperMaterial: "Textile",
    },
    characteristics: {
      productType: "Safety low shoes",
      upper: "Technical textile",
      lining: "Breathable mesh",
      toeCap: "Composite",
      outsole: "Dual-density PU",
      closure: "Laces",
      sizes: "38–46",
      standard: "EN ISO 20345:2022 S1",
    },
    protectiveProperties,
  },
  {
    id: "7",
    slug: "delta-s4-boot",
    name: "Delta S4 Wellingtons",
    description:
      "S4 wellingtons for wash-down and food-industry floors. Easy to rinse, quick to pull on, and built around a steel toe for everyday splash zones.",
    images,
    specs: {
      season: "All-season",
      toeCap: "Steel",
      soleMaterial: "PVC",
      upperMaterial: "PVC",
    },
    characteristics: {
      productType: "Safety wellingtons",
      upper: "PVC",
      lining: "Smooth textile",
      toeCap: "Steel",
      outsole: "PVC anti-slip",
      closure: "Pull-on",
      sizes: "39–47",
      standard: "EN ISO 20345:2022 S4",
    },
    protectiveProperties,
  },
  {
    id: "8",
    slug: "summit-s3-boot",
    name: "Summit S3 WR Boots",
    description:
      "Insulated winter S3 boots with a water-resistant leather upper and membrane. Composite toe and rubber outsole for cold outdoor shifts without metal chill.",
    images,
    specs: {
      season: "Winter",
      toeCap: "Composite",
      soleMaterial: "PU/Rubber",
      upperMaterial: "Leather + membrane",
    },
    characteristics: {
      productType: "Safety winter boots",
      upper: "Leather + membrane",
      lining: "Insulated textile",
      toeCap: "Composite",
      outsole: "PU/Rubber",
      closure: "Laces",
      sizes: "39–48",
      standard: "EN ISO 20345:2022 S3 WR",
    },
    protectiveProperties,
  },
];

export function getPopularProducts(limit = 4, excludeSlug?: string): Product[] {
  return products
    .filter((p) => p.popular && p.slug !== excludeSlug)
    .slice(0, limit);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
