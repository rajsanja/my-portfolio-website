import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-start justify-center px-6">
      <p className="text-xs font-semibold tracking-[0.2em] text-[#c4784a] uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl text-[#1c1916]">This page is not on the site</h1>
      <p className="mt-4 text-[#5e584f]">The link may be old, or the address was typed wrong.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#1c1916] px-5 text-sm font-medium text-white">
        Back home
      </Link>
    </div>
  );
}
