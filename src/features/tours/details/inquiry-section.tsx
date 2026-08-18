"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Container } from "@/components/layout/Container";

export function InquirySection({
  tour,
}: {
  tour: string;
}) {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold">
            Send an Inquiry
          </h2>

          <p className="mt-4 text-center text-slate-300">
            Interested in <strong>{tour}</strong>? Fill
            out the form below and we'll get back to you
            shortly.
          </p>

          <form className="mt-10 space-y-5">
            <Input
              placeholder="Your Name"
              className="bg-white text-black"
            />

            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white text-black"
            />

            <Input
              placeholder="Travel Date"
              className="bg-white text-black"
            />

            <Input
              placeholder="Number of Travelers"
              className="bg-white text-black"
            />

            <Textarea
              rows={6}
              placeholder="Tell us about your trip..."
              className="bg-white text-black"
            />

            <Button
              size="lg"
              className="w-full"
            >
              Send Inquiry
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}