import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <Image
        src="/images/hero/japan.png"
        alt="Beautiful Japanese landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col justify-center py-20 text-white">
          <p className="mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Premium private tours across Japan
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Discover Japan
            <span className="block text-[#FACC15]">Like Never Before</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Explore Tokyo, Kyoto, Osaka, Nara and Mount Fuji through
            unforgettable private tours led by experienced local guides.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/tours">Explore Tours</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-slate-950"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}