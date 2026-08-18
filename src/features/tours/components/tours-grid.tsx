"use client";

import { Container } from "@/components/layout/Container";
import { TourCard } from "./tour-card";
import { useTourFilter } from "../hooks/use-tour-filter";

export function ToursGrid() {
  const { filteredTours } = useTourFilter();

  return (
    <section className="py-20">
      <Container>

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            {filteredTours.length} Tours Found
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}