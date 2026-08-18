import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function AboutHero() {
  return (
    <section className="relative h-[60vh]">
      <Image
        src="/images/about/about-hero1.png"
        alt="About First Choice Japan Tours"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative flex h-full items-center">
        <div className="max-w-3xl text-white">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
            Discover Japan with Local Experts
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            We create authentic private experiences that showcase the beauty,
            culture, and traditions of Japan.
          </p>
        </div>
      </Container>
    </section>
  );
}