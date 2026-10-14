"use client";

export function PrintButton() {
  return (
    <button type="button" className="inline-flex min-h-11 items-center rounded-full border border-[#e4d8c8] bg-white px-4 text-sm" onClick={() => window.print()}>
      Print or save as PDF
    </button>
  );
}
