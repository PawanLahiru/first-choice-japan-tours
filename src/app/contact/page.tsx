import { Metadata } from "next";

import { ContactHero } from "@/features/contact/components/contact-hero";
import { ContactInfo } from "@/features/contact/components/contact-info";
import { ContactFormSection } from "@/features/contact/components/contact-form-section";
import { ContactMap } from "@/features/contact/components/contact-map";

export const metadata: Metadata = {
  title: "Contact Us | First Choice Japan Tours",
  description:
    "Contact First Choice Japan Tours to plan your unforgettable journey across Japan.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
    </>
  );
}