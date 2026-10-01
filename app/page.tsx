import { Advantages } from "@/components/home/Advantages";
import { CatalogCta } from "@/components/home/CatalogCta";
import { HomeViewport } from "@/components/home/HomeViewport";
import { PopularModels } from "@/components/home/PopularModels";

export default function HomePage() {
  return (
    <>
      <HomeViewport />
      <Advantages />
      <PopularModels />
      <CatalogCta />
    </>
  );
}
