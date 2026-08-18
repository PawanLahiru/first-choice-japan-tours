import { Hero } from "@/features/home/components/hero";
import { FeaturedTours } from "@/features/home/components/featured-tours";
import { WhyChooseUs } from "@/features/home/components/why-choose-us";
import { PopularDestinations } from "@/features/home/components/popular-destinations";
import { Stats } from "@/features/home/components/stats";
import { Testimonials } from "@/features/home/components/testimonials";
import { Gallery } from "@/features/home/components/gallery"; 
import { CTA } from "@/features/home/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTours />
      <WhyChooseUs />
      <PopularDestinations />
      <Stats />
      <Testimonials />
      <Gallery /> 
      <CTA />
    </>
  );
}