"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Error
        </p>

        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-600">
          We could not load this page. Please try again.
        </p>

        <Button
          type="button"
          className="mt-8"
          onClick={reset}
        >
          Try Again
        </Button>
      </div>
    </main>
  );
}