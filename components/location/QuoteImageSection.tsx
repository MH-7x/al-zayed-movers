import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { LocationSection } from "./LocationSection";

interface QuoteImageSectionProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  children: ReactNode;
}

/** "Get a quote" text column + 4:3 photo with the +12 years badge. */
export function QuoteImageSection({
  title,
  image,
  imageAlt,
  children,
}: QuoteImageSectionProps) {
  return (
    <LocationSection>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start text-right lg:col-span-6">
          <h2 className="text-3xl font-black leading-tight md:text-4xl md:pl-28 sm:pl-0">
            {title}
          </h2>
          <div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
          <div className="absolute -top-5 md:-end-5 -end-2 z-20 flex size-28 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-primary-foreground shadow-xl ring-4 ring-background sm:-top-7 sm:-end-7 sm:size-36">
            <span className="text-2xl font-black leading-none sm:text-4xl">
              +12
            </span>
            <span className="mt-1 text-[11px] font-medium leading-tight sm:text-xs">
              عاماً من الخبرة والتميز
            </span>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-card">
            <Image
              src={image}
              alt={imageAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 540px, (min-width: 512px) 512px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </LocationSection>
  );
}
