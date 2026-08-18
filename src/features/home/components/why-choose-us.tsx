import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/section-heading";

import { features } from "@/data/features";
import { FeatureCard } from "./feature-card";

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeading
          center
          badge="Why Choose Us"
          title="Travel Japan With Confidence"
          description="Every journey is carefully planned to provide a comfortable, authentic and unforgettable experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}