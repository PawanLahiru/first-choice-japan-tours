import Image from "next/image";
import { Star } from "lucide-react";

type Props = {
  review: {
    name: string;
    country: string;
    image: string;
    rating: number;
    review: string;
    date: string;
  };
};

export function ReviewCard({ review }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src={review.image}
          alt={review.name}
          width={60}
          height={60}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold">
            {review.name}
          </h3>

          <p className="text-sm text-slate-500">
            {review.country}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-1">
        {Array.from({
          length: review.rating,
        }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-5 leading-8 text-slate-600">
        {review.review}
      </p>

      <p className="mt-5 text-sm text-slate-400">
        {review.date}
      </p>
    </div>
  );
}