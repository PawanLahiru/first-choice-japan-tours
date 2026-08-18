import { Container } from "@/components/layout/Container";

export function ToursHero() {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FACC15]">
            Private Experiences
          </p>

          <h1 className="mt-5 text-5xl font-bold">
            Explore Our Tours
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Discover unforgettable journeys through Japan with
            experienced local guides.
          </p>
        </div>
      </Container>
    </section>
  );
}