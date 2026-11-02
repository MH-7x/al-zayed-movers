import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Truck } from "lucide-react";
import { LocationSection } from "./LocationSection";
import { SectionHeading } from "@/components/ui/Section";

interface RouteSectionProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  /** short line shown under the image */
  badge?: string;
  children: ReactNode;
}

/** Copy at the start, sticky 4:3 photo at the end, for inter-emirate transfer content. */
export function RouteSection({ title, image, imageAlt, badge, children }: RouteSectionProps) {
  return (
    <LocationSection>
      <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <SectionHeading title={title} description={children} className="mb-0 md:mb-0" />

        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-border shadow-md">
            <Image
              src={image}
              alt={imageAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </div>
          {badge && (
            <p className="mt-3 flex items-center gap-3 rounded-md border border-border bg-card p-4 text-sm font-bold text-secondary">
              <Truck className="size-6 shrink-0 text-brand" strokeWidth={1.6} aria-hidden />
              <span>{badge}</span>
            </p>
          )}
        </div>
      </div>
    </LocationSection>
  );
}
