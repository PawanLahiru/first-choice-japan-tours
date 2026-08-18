"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  destination: {
    id: number;
    name: string;
    image: string;
    tours: number;
    description: string;
  };
};

export function DestinationCard({ destination }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link
        href={`/tours?destination=${destination.name}`}
        className="relative block overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[4/5]">

          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-lg">
            {destination.tours} Tours
          </span>

          <div className="absolute bottom-0 w-full p-6 text-white">

            <h3 className="text-3xl font-bold">
              {destination.name}
            </h3>

            <p className="mt-3 text-sm text-slate-200">
              {destination.description}
            </p>

            <div className="mt-6 flex items-center gap-2 font-medium">
              Explore
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </div>

          </div>

        </div>
      </Link>
    </motion.div>
  );
}