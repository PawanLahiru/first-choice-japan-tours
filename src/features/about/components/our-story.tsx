import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function OurStory() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/about/our-story.png"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Passionate About Showing the Real Japan
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              First Choice Japan Tours was founded with a simple mission: to
              provide personalized travel experiences that go beyond traditional
              sightseeing.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you're exploring Tokyo, Kyoto, Osaka, Nara, or Mount Fuji,
              our experienced guides ensure every journey is comfortable,
              memorable, and tailored to your interests.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}