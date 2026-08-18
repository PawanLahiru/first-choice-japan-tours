import { gallery } from "@/data/gallery";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/section-heading";
import { GalleryCard } from "./gallery-card";

export function Gallery() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          center
          badge="Gallery"
          title="Experience Japan Through Our Tours"
          description="A glimpse of the unforgettable places you'll visit with us."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}