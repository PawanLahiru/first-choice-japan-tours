"use client";

import Image from "next/image";
import { gallery } from "@/data/gallery";
import { Container } from "@/components/layout/Container";

export function GalleryGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative mb-6 overflow-hidden rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={1000}
                className="h-auto w-full transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black to-transparent p-6 text-white transition duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}