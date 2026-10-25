import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LocationSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Standard page section: vertical rhythm + centred 6xl container. */
export function LocationSection({
  id,
  className,
  children,
}: LocationSectionProps) {
  return (
    <section id={id} className={cn("pt-16 lg:pt-28", className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
