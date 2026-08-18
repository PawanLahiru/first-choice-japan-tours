import { features } from "@/data/features";
import { Container } from "@/components/layout/Container";
import { FeatureCard } from "@/features/home/components/feature-card";

export function WhyTravelWithUs() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Travel Japan with Confidence
          </h2>

          <p className="mt-6 text-slate-600">
            Our experienced local guides, personalized itineraries, and
            exceptional customer service make every journey unforgettable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}