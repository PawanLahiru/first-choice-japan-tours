import { stats } from "@/data/stats";
import { Container } from "@/components/layout/Container";
import { Counter } from "@/components/common/counter";

export function Stats() {
  return (
    <section className="bg-[#0f172a] py-20 text-white">
      <Container>
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-5xl font-bold text-[#FACC15]">
                <Counter
                  end={item.value}
                  suffix={item.suffix}
                />
              </h2>

              <p className="mt-3 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}