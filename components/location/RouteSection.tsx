import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Truck } from "lucide-react";
import { LocationSection } from "./LocationSection";

interface RouteSectionProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  /** short line shown over the image */
  badge?: string;
  children: ReactNode;
}

/** Text column + image column, for inter-emirate transfer content. */
export function RouteSection({
  title,
  image,
  imageAlt,
  badge,
  children,
}: RouteSectionProps) {
  return (
    <LocationSection>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl">
            {title}
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:col-span-5">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg lg:aspect-4/5">
            <Image
              src={image}
              alt={imageAlt}
              fill
              placeholder="blur"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/10 to-transparent" />
            {badge && (
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-white/95 p-4 text-sm font-bold text-secondary">
                <Truck
                  className="size-6 shrink-0 text-primary"
                  strokeWidth={1.5}
                />
                <span>{badge}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </LocationSection>
  );
}
