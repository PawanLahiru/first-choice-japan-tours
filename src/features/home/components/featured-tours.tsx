import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { tours } from "@/data/tours";
import { Container } from "@/components/layout/Container";
import { TourCard } from "@/features/tours/components/tour-card";

export function FeaturedTours() {
  const featuredTours = tours.filter((tour) => tour.featured).slice(0, 3);

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D90429]">
              Explore Japan
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Featured private tours
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Discover Japan through carefully planned private experiences
              led by knowledgeable local guides.
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429] focus-visible:ring-offset-2"
            >
            View all tours
            <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Container>
    </section>
  );
}