import type { Metadata } from "next";
import { ContactActions } from "@/components/contacts/ContactActions";
import { GetInTouch } from "@/components/contacts/GetInTouch";
import { Hero } from "@/components/contacts/Hero";
import { absolutePageMetadata } from "@/lib/seo";

export const metadata: Metadata = absolutePageMetadata("contacts");

export default function ContactsPage() {
  return (
    <>
      <Hero />
      <ContactActions />
      <GetInTouch />
    </>
  );
}
