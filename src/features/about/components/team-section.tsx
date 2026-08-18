import Image from "next/image";
import { Container } from "@/components/layout/Container";

const team = [
  {
    name: "Professional Guide",
    role: "Founder & Tour Director",
    image: "/images/team/team-1.png",
  },
  {
    name: "Local Expert",
    role: "Senior Travel Guide",
    image: "/images/team/team-2.png",
  },
  {
    name: "Travel Consultant",
    role: "Customer Experience",
    image: "/images/team/team-3.png",
  },
];

export function TeamSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Meet Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Friendly Local Experts
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>

                <p className="mt-2 text-slate-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}