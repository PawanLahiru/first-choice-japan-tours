import { Metadata } from "next";

import { GalleryHero } from "@/features/gallery/components/gallery-hero";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";
import { CTA } from "@/features/home/components/cta";

export const metadata: Metadata = {
  title: "Gallery | First Choice Japan Tours",
  description:
    "Explore unforgettable moments from our private tours across Japan.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <CTA />
    </>
  );
}