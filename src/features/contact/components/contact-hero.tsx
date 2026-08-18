import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function ContactHero() {
  return (
    <section className="relative h-[55vh]">
      <Image
        src="/images/contact/contact-hero.png"
        alt="Contact First Choice Japan Tours"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative flex h-full items-center">
        <div className="max-w-3xl text-white">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
            Let's Plan Your Perfect Japan Adventure
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            We'd love to help you create a personalized travel experience.
          </p>
        </div>
      </Container>
    </section>
  );
}