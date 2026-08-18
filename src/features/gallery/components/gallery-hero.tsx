import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function GalleryHero() {
  return (
    <section className="relative h-[55vh]">
      <Image
        src="/images/gallery/gallery-hero.png"
        alt="Japan Gallery"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative flex h-full items-center">
        <div className="max-w-3xl text-white">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Gallery
          </p>

          <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
            Explore Japan Through Our Lens
          </h1>

          <p className="mt-6 text-xl text-slate-200">
            Beautiful memories captured from our unforgettable private tours.
          </p>
        </div>
      </Container>
    </section>
  );
}