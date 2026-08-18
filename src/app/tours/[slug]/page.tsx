import { notFound } from "next/navigation";
import { Metadata } from "next";

import { tours } from "@/data/tours";

import { TourHero } from "@/features/tours/details/tour-hero";
import { TourOverview } from "@/features/tours/details/tour-overview";
import { TourHighlights } from "@/features/tours/details/tour-highlights";
import { TourItinerary } from "@/features/tours/details/tour-itinerary";
import { TourIncluded } from "@/features/tours/details/tour-included";
import { TourGallery } from "@/features/tours/details/tour-gallery";
import { TourMap } from "@/features/tours/details/tour-map";
import { ReviewSection } from "@/features/tours/details/review-section";
import { RelatedTours } from "@/features/tours/details/related-tours";
import { InquirySection } from "@/features/tours/details/inquiry-section";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return {};
  }

  return {
    title: `${tour.title} | First Choice Japan Tours`,
    description: tour.location,
  };
}

export default async function TourDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
  <TourHero tour={tour} />

  <TourOverview tour={tour} />

  <TourHighlights />

  <TourGallery />

  <TourItinerary />

  <TourIncluded />

  <TourMap />

  <ReviewSection />

  <RelatedTours currentTour={tour.id} />

  <InquirySection tour={tour.title} />
</>
  );
}