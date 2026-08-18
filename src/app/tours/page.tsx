import { Metadata } from "next";

import { ToursHero } from "@/features/tours/components/tours-hero";
import { ToursFilter } from "@/features/tours/components/tours-filter";
import { ToursGrid } from "@/features/tours/components/tours-grid";

export const metadata: Metadata = {
  title: "Tours | First Choice Japan Tours",
  description: "Discover our private guided tours across Japan.",
};

export default function ToursPage() {
  return (
    <>
      <ToursHero />
      <ToursFilter />
      <ToursGrid />
    </>
  );
}