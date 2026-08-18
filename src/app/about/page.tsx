import { Metadata } from "next";

import { AboutHero } from "@/features/about/components/about-hero";
import { OurStory } from "@/features/about/components/our-story";
import { WhyTravelWithUs } from "@/features/about/components/why-travel-with-us";
import { TeamSection } from "@/features/about/components/team-section";
import { CompanyStats } from "@/features/about/components/company-stats";
import { CTA } from "@/features/home/components/cta";

export const metadata: Metadata = {
  title: "About Us | First Choice Japan Tours",
  description:
    "Learn more about First Choice Japan Tours and our passion for creating unforgettable travel experiences across Japan.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CompanyStats />
      <WhyTravelWithUs />
      <TeamSection />
      <CTA />
    </>
  );
}