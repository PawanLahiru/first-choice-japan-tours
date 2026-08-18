import { Metadata } from "next";

import { ReviewsHero } from "@/features/reviews/components/reviews-hero";
import { ReviewSection } from "@/features/tours/details/review-section";
import { CTA } from "@/features/home/components/cta";

export const metadata: Metadata = {
  title: "Reviews | First Choice Japan Tours",
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <ReviewSection />
      <CTA />
    </>
  );
}