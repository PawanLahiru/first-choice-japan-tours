import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import type { Tour } from "@/types/tour";
import { formatCurrency } from "@/lib/format-currency";

type TourCardProps = {
  tour: Tour;
};

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/tours/${tour.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-[#D90429] px-4 py-2 text-xs font-semibold text-white shadow-lg">
          Featured
        </span>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
          <MapPin className="h-4 w-4" />
          {tour.location}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 font-semibold text-slate-900">
            <Star className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
            {tour.rating}
          </div>

          <span className="text-slate-400">
            ({tour.reviewCount} reviews)
          </span>
        </div>

        <Link href={`/tours/${tour.slug}`}>
          <h3 className="mt-3 text-xl font-bold text-slate-900 transition group-hover:text-[#D90429]">
            {tour.title}
          </h3>
        </Link>

        <div className="mt-5 flex flex-wrap gap-4 border-b border-slate-100 pb-5 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-[#D90429]" />
            {tour.duration}
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#D90429]" />
            {tour.groupSize}
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>

            <p className="text-2xl font-bold text-slate-900">
              {formatCurrency(tour.price)}
            </p>

            <p className="text-xs text-slate-500">per group</p>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#D90429] px-4 text-sm font-medium text-white transition hover:bg-[#b90322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429] focus-visible:ring-offset-2"
            >
            View Tour
            <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
      </div>
    </article>
  );
}