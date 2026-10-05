import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { BuiltForDifferentIndustries } from "@/components/about/BuiltForDifferentIndustries";
import { Hero } from "@/components/about/Hero";
import { InternationalPerspective } from "@/components/about/InternationalPerspective";
import { OurApproach } from "@/components/about/OurApproach";
import { SpecialisedProduction } from "@/components/about/SpecialisedProduction";
import { WhoWeAre } from "@/components/about/WhoWeAre";

export const metadata: Metadata = {
  title: "About",
  description:
    "NORVANT work footwear: durability, comfort, and protection for people who work hard every day.",
};

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
