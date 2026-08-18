import { CheckCircle2 } from "lucide-react";

import { highlights } from "@/data/tour-details";
import { Container } from "@/components/layout/Container";

export function TourHighlights() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <h2 className="text-3xl font-bold">
          Tour Highlights
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white p-6 shadow"
            >
              <CheckCircle2 className="text-green-600" />
              {item}
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}