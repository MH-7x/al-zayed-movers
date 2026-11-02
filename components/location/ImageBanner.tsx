import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

/** Full-width 16:9 photo placed between location page sections. */
export function ImageBanner({ src, alt, className }: ImageBannerProps) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-primary/20",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes="(min-width: 1152px) 1120px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
