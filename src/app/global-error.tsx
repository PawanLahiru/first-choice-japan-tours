"use client";

type GlobalErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  console.error(error);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white px-6">
          <div className="max-w-lg text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Something went wrong
            </h1>

            <p className="mt-4 text-slate-600">
              A serious application error occurred.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white"
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}