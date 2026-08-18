import Image from "next/image";

import { Tour } from "@/types/tour";
import { Container } from "@/components/layout/Container";

export function TourHero({
  tour,
}: {
  tour: Tour;
}) {
  return (
    <section className="relative h-[70vh]">
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <Container className="relative flex h-full items-end pb-20">
        <div className="text-white">
          <p className="text-yellow-400">
            {tour.location}
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {tour.title}
          </h1>

          <p className="mt-5 text-xl">
            From ¥{tour.price.toLocaleString()}
          </p>
        </div>
      </Container>
    </section>
  );
}