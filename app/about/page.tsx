import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { BuiltForDifferentIndustries } from "@/components/about/BuiltForDifferentIndustries";
import { Hero } from "@/components/about/Hero";
import { InternationalPerspective } from "@/components/about/InternationalPerspective";
import { OurApproach } from "@/components/about/OurApproach";
import { SpecialisedProduction } from "@/components/about/SpecialisedProduction";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { absolutePageMetadata } from "@/lib/seo";

export const metadata: Metadata = absolutePageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <InternationalPerspective />
      <SpecialisedProduction />
      <BuiltForDifferentIndustries />
      <OurApproach />
      <AboutCta />
    </>
  );
}
