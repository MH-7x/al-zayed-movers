import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface AboutPhotoProps {
  src: StaticImageData;
  alt: string;
  /** Tailwind aspect utility matching the photo, e.g. "aspect-4/3". */
  aspect: string;
  /** Rendered width hint so the browser downloads the smallest adequate file. */
  sizes: string;
  /** Mark the above-the-fold hero photo as high priority. */
  preload?: boolean;
  className?: string;
}

export function AboutPhoto({
  src,
  alt,
  aspect,
  sizes,
  preload,
  className,
}: AboutPhotoProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-secondary/10",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}
