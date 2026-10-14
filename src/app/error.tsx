"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-start justify-center px-6 pt-24">
      <h1 className="font-display text-4xl text-[#1c1916]">Something went wrong</h1>
      <p className="mt-4 text-[#5e584f]">This page could not be shown. You can try again.</p>
      {error.digest ? (
        <p className="mt-2 text-xs text-[#6f675e]">Reference: {error.digest}</p>
      ) : null}
      <button type="button" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#1c1916] px-5 text-sm font-medium text-white" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
