"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
};

export function GalleryCard({ image, title }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/40" />

        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white transition duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-bold">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}