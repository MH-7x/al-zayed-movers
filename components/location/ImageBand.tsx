import Image, { type StaticImageData } from "next/image";
import { LocationSection } from "./LocationSection";

interface ImageBandProps {
  src: StaticImageData;
  alt: string;
  title: string;
}

/**
 * Photo band with a navy wash and a title. Contained to the page width (≤1076px) instead of
 * full-bleed, so the ~1000px sources are never stretched past ~1.1×.
 */
export function ImageBand({ src, alt, title }: ImageBandProps) {
  return (
    <LocationSection>
      <div className="relative isolate overflow-hidden rounded-lg px-6 py-14 md:py-20">
        <Image
          src={src}
          alt={alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1280px) 1076px, 100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-secondary/80" />
        <h2 className="mx-auto max-w-3xl text-center text-white">{title}</h2>
      </div>
    </LocationSection>
  );
}
