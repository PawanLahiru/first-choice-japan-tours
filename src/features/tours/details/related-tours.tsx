import { tours } from "@/data/tours";
import { Container } from "@/components/layout/Container";
import { TourCard } from "@/features/tours/components/tour-card";

export function RelatedTours({
  currentTour,
}: {
  currentTour: string;
}) {
  const related = tours
    .filter((tour) => tour.id !== currentTour)
    .slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl font-bold">
          Related Tours
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((tour) => (
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