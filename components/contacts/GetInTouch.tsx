import { ContactCard } from "@/components/contacts/ContactCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function GetInTouch() {
  return (
    <Section className="bg-bg-subtle" eyebrow="Get in touch">
      <Reveal className="flex flex-col gap-split md:flex-row md:gap-split-md lg:gap-split-lg">
        <ContactCard
          eyebrow="Products & orders"
          iconSrc="/contacts/email-icon.svg"
          title="Sales enquiries"
          description={
            <>
              Product selection, pricing, availability and
              <br />
              order support.
            </>
          }
          email="sales@norvantsafety.com"
          actionLabel="Email sales"
          tip="For a quote, include the model, quantity and delivery destination."
        />
        <ContactCard
          eyebrow="Company & cooperation"
          iconSrc="/contacts/email-icon.svg"
          title="General enquiries"
          description={
            <>
              Company information, cooperation proposals
              <br />
              and other questions.
            </>
          }
          email="info@norvantsafety.com"
          actionLabel="Email us"
          tip="Not sure which email to use? Start here."
        />
      </Reveal>
    </Section>
  );
}
