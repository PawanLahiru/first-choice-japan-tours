import Image from "next/image";

import { Container } from "@/components/layout/Container";

export function FAQHero() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden">
      <Image
        src="/images/faq/faq-hero.png"
        alt="Traditional Japanese landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/65" />

      <Container className="relative py-24 text-center text-white">
        <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
          FAQ
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          Find helpful information about booking, transportation, payments,
          private tours, and traveling with us.
        </p>
      </Container>
    </section>
  );
}