import { Button } from "@/components/ui/button";
import { Tour } from "@/types/tour";

export function StickyBookingCard({
  tour,
}: {
  tour: Tour;
}) {
  return (
    <aside className="sticky top-24 rounded-3xl border bg-white p-8 shadow-xl">
      <h3 className="text-3xl font-bold">
        ¥{tour.price.toLocaleString()}
      </h3>

      <p className="mt-2 text-slate-500">
        Per private tour
      </p>

      <div className="mt-8 space-y-4">
        <Button className="w-full">
          Book Now
        </Button>

        <Button
          variant="outline"
          className="w-full"
        >
          Contact Us
        </Button>
      </div>

      <div className="mt-8 space-y-3 text-sm text-slate-600">
        <p>✓ Instant confirmation</p>
        <p>✓ Free cancellation</p>
        <p>✓ Private guide included</p>
        <p>✓ Secure booking</p>
      </div>
    </aside>
)
}