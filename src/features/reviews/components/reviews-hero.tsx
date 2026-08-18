import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function ReviewsHero() {
  return (
    <section className="relative h-[50vh]">
      <Image
        src="/images/reviews/reviews-hero.png"
        alt="Customer Reviews"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative flex h-full items-center">
        <div className="max-w-3xl text-white">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Testimonials
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            What Our Guests Say
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            Real experiences from travelers who explored Japan with us.
          </p>
        </div>
      </Container>
    </section>
  );
}