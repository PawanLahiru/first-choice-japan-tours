import { Container } from "@/components/layout/Container";

export function TourMap() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="mb-8 text-3xl font-bold">
          Tour Location
        </h2>

        <div className="overflow-hidden rounded-3xl border">
          <iframe
            src="https://www.google.com/maps?q=Tokyo&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />
        </div>
      </Container>
    </section>
  );
}