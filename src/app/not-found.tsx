import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-7xl font-bold text-red-600">
          404
        </p>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>

        <Button asChild className="mt-8">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </main>
  );
}