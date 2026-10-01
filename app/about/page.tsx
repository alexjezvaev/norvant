import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { Quality } from "@/components/about/Quality";
import { WorkFootwear } from "@/components/about/WorkFootwear";

export const metadata: Metadata = {
  title: "About",
  description:
    "NORVANT work footwear: durability, comfort, and protection for people who work hard every day.",
};

export default function AboutPage() {
  return (
    <>
      <WorkFootwear />
      <Quality />
      <AboutCta />
    </>
  );
}
