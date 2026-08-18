import { itinerary } from "@/data/tour-details";
import { Container } from "@/components/layout/Container";

export function TourItinerary() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold">
            Tour Itinerary
          </h2>

          <div className="mt-12 space-y-8">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    {index + 1}
                  </div>

                  {index !== itinerary.length - 1 && (
                    <div className="mt-2 h-full w-px bg-slate-300" />
                  )}
                </div>

                <div className="pb-10">
                  <p className="font-semibold text-red-600">
                    {item.time}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Enjoy this part of your journey with your
                    private guide and flexible schedule.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}