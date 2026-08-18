import { reviews } from "@/data/reviews";
import { Container } from "@/components/layout/Container";
import { ReviewCard } from "./review-card";

export function ReviewSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold uppercase tracking-widest text-red-600">
              Reviews
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              What Travelers Say
            </h2>
          </div>

          <div className="text-right">
            <h3 className="text-5xl font-bold">
              4.9
            </h3>

            <p className="text-slate-500">
              Average Rating
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}