import { Container } from "@/components/layout/Container";

export function ContactMap() {
  return (
    <section className="pb-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Tokyo&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            className="border-0"
          />
        </div>
      </Container>
    </section>
  );
}