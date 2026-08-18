import { CheckCircle2, XCircle } from "lucide-react";

import {
  included,
  excluded,
} from "@/data/tour-details";

import { Container } from "@/components/layout/Container";

export function TourIncluded() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Included
            </h2>

            <div className="mt-8 space-y-5">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Not Included
            </h2>

            <div className="mt-8 space-y-5">
              {excluded.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <XCircle className="text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}