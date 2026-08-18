import { Container } from "@/components/layout/Container";
import { Counter } from "@/components/common/counter";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Guests" },
  { value: 500, suffix: "+", label: "Private Tours" },
  { value: 50, suffix: "+", label: "Destinations" },
  { value: 4.9, suffix: "★", label: "Average Rating" },
];

export function CompanyStats() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold text-yellow-400">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="mt-3 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}