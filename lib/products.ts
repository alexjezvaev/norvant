export type ProductSpecs = {
  season: string;
  toeCap: string;
  soleMaterial: string;
  upperMaterial: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  image: string;
  imageHover: string;
  specs: ProductSpecs;
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

const image = "/products/8731_1.jpg";
const imageHover = "/products/8731_2.jpg";

export const products: Product[] = [
  {
    id: "1",
    slug: "8731-1-2kv",
    name: "Low Shoes 8731/1-2KV",
    image,
    imageHover,
    specs: {
      season: "Mid-season",
      toeCap: "Composite",
      soleMaterial: "PU/PU",
      upperMaterial: "Textile",
    },
    popular: true,
  },
  {
    id: "2",
    slug: "forge-s1p-shoe",
    name: "Forge S1P Shoes",
    image,
    imageHover,
    specs: {
      season: "All-season",
      toeCap: "Composite",
      soleMaterial: "PU/TPU",
      upperMaterial: "Leather",
    },
    popular: true,
  },
  {
    id: "3",
    slug: "tundra-s5-boot",
    name: "Tundra S5 Wellingtons",
    image,
    imageHover,
    specs: {
      season: "All-season",
      toeCap: "Steel",
      soleMaterial: "PVC",
      upperMaterial: "PVC",
    },
    popular: true,
  },
  {
    id: "4",
    slug: "ventil-sb-sandal",
    name: "Ventil SB Sandals",
    image,
    imageHover,
    specs: {
      season: "Summer",
      toeCap: "Steel",
      soleMaterial: "PU/PU",
      upperMaterial: "Leather",
    },
  },
  {
    id: "5",
    slug: "granite-s3-boot",
    name: "Granite S3 Boots",
    image,
    imageHover,
    specs: {
      season: "All-season",
      toeCap: "Steel",
      soleMaterial: "PU/Rubber",
      upperMaterial: "Leather",
    },
    popular: true,
  },
  {
    id: "6",
    slug: "shift-s1-shoe",
    name: "Shift S1 Shoes",
    image,
    imageHover,
    specs: {
      season: "Mid-season",
      toeCap: "Composite",
      soleMaterial: "PU/PU",
      upperMaterial: "Textile",
    },
  },
  {
    id: "7",
    slug: "delta-s4-boot",
    name: "Delta S4 Wellingtons",
    image,
    imageHover,
    specs: {
      season: "All-season",
      toeCap: "Steel",
      soleMaterial: "PVC",
      upperMaterial: "PVC",
    },
  },
  {
    id: "8",
    slug: "summit-s3-boot",
    name: "Summit S3 WR Boots",
    image,
    imageHover,
    specs: {
      season: "Winter",
      toeCap: "Composite",
      soleMaterial: "PU/Rubber",
      upperMaterial: "Leather + membrane",
    },
  },
];

export function getPopularProducts(limit = 4): Product[] {
  return products.filter((p) => p.popular).slice(0, limit);
}
