import type { Metadata } from "next";
import { ContactActions } from "@/components/contacts/ContactActions";
import { GetInTouch } from "@/components/contacts/GetInTouch";
import { Hero } from "@/components/contacts/Hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacts",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactsPage() {
  return (
    <>
      <Hero />
      <ContactActions />
      <GetInTouch />
    </>
  );
}
