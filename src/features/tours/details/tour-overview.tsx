import { Tour } from "@/types/tour";
import { Container } from "@/components/layout/Container";

export function TourOverview({
  tour,
}: {
  tour: Tour;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              Tour Overview
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Experience one of Japan&apos;s most unforgettable
              destinations with a fully customized private tour led by
              experienced local guides.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <div className="space-y-5">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  Duration
                </span>

                <span className="font-medium">
                  {tour.duration}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  Group Size
                </span>

                <span className="font-medium">
                  {tour.groupSize}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">
                  Rating
                </span>

                <span className="font-medium">
                  {tour.rating}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-t pt-5">
                <span className="font-bold">
                  Price
                </span>

                <span className="font-bold text-red-600">
                  ¥{tour.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}