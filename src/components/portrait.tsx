import Image from "next/image";

export function Portrait({
  shape,
  eager = false,
  decorative = false,
}: {
  shape: "circle" | "blob";
  eager?: boolean;
  decorative?: boolean;
}) {
  return (
    <div
      className={`relative aspect-square overflow-hidden ${
        shape === "circle" ? "rounded-full" : "blob-mask"
      }`}
    >
      <Image
        src="/avatar.png"
        alt={
          decorative
            ? ""
            : "Illustrated portrait of Raj Sanja, smiling, with round glasses, a short beard, and a pink shirt"
        }
        fill
        sizes={
          shape === "circle"
            ? "(max-width: 1024px) 78vw, 420px"
            : "(max-width: 1024px) 80vw, 380px"
        }
        loading={eager ? "eager" : "lazy"}
        className="object-cover"
      />
    </div>
  );
}
