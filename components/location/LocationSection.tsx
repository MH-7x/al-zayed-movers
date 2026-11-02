import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

interface LocationSectionProps {
  id?: string;
  className?: string;
  /** `auto` (default) alternates white / grey by position; pass `navy` for a dark band. */
  tone?: "default" | "alt" | "navy" | "auto";
  children: ReactNode;
}

/** Standard page section: symmetric rhythm + the shared 1140px container. */
export function LocationSection({
  id,
  className,
  tone = "auto",
  children,
}: LocationSectionProps) {
  return (
    <Section id={id} tone={tone} className={className}>
      {children}
    </Section>
  );
}
