import { destinations } from "@/data/destinations";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/section-heading";
import { DestinationCard } from "./destination-card";

export function PopularDestinations() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <SectionHeading
          badge="Destinations"
          title="Explore Japan's Most Loved Places"
          description="Handpicked destinations offering unforgettable experiences across Japan."
          center
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <div className="lg:row-span-2">
            <DestinationCard destination={destinations[0]} />
          </div>

          <DestinationCard destination={destinations[1]} />

          <DestinationCard destination={destinations[2]} />

          <DestinationCard destination={destinations[3]} />

          <DestinationCard destination={destinations[4]} />

        </div>

      </Container>
    </section>
  );
}