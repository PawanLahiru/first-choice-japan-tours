import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/section-heading";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          center
          badge="Testimonials"
          title="Loved by Travelers Worldwide"
          description="Thousands of guests have explored Japan with us."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}