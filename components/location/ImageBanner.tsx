import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

/** Photo placed between sections: 16:10 on phones, 16:7 from 768px, never wider than the container. */
export function ImageBanner({ src, alt, className }: ImageBannerProps) {
  return (
    <div
      className={cn(
        "relative aspect-16/10 w-full overflow-hidden rounded-lg border border-border bg-muted md:aspect-16/7",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes="(min-width: 1280px) 1076px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
