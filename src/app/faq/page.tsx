import type { Metadata } from "next";

import { FAQHero } from "@/features/faq/components/faq-hero";
import { FAQList } from "@/features/faq/components/faq-list";
import { CTA } from "@/features/home/components/cta";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about booking, private tours, transportation, payments, customized itineraries, and traveling in Japan with First Choice Japan Tours.",
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQList />
      <CTA />
    </>
  );
}