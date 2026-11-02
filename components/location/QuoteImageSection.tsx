import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { LocationSection } from "./LocationSection";
import { SectionHeading } from "@/components/ui/Section";

interface QuoteImageSectionProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  children: ReactNode;
}

/** "Get a quote": copy + "+12" stat card at the start, 4:3 photo at the end (≥1024). */
export function QuoteImageSection({
  title,
  image,
  imageAlt,
  children,
}: QuoteImageSectionProps) {
  return (
    <LocationSection>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading title={title} description={children} className="mb-6 md:mb-6" />
          <p className="flex items-baseline gap-3 rounded-md border border-border border-t-[3px] border-t-primary bg-card p-5 shadow-sm">
            <span className="text-4xl leading-none font-extrabold text-brand">+12</span>
            <span className="font-bold text-secondary">عاماً من الخبرة والتميز</span>
          </p>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-card shadow-md">
          <Image
            src={image}
            alt={imageAlt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </LocationSection>
  );
}
