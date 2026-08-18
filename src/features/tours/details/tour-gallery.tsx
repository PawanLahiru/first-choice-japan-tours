import Image from "next/image";

import { Container } from "@/components/layout/Container";

export function TourGallery() {
  const images = [
    "/images/gallery/gallery-1..png",
    "/images/gallery/gallery-2..png",
    "/images/gallery/gallery-3..png",
    "/images/gallery/gallery-4..png",
  ];

  return (
    <section className="py-20">
      <Container>

        <h2 className="mb-10 text-3xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {images.map((image) => (
            <div
              key={image}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}