import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function CTA() {
  return (
    <section className="bg-[#D90429] py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Ready to Explore Japan?
          </h2>

          <p className="mt-6 text-lg text-red-100">
            Let us create an unforgettable private tour tailored just for you.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-10"
          >
            <Link href="/contact">
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}