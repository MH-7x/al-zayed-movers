import type { ReactNode } from "react";
import { SectionHeading as Heading } from "@/components/ui/Section";

interface SectionHeadingProps {
  title: ReactNode;
  eyebrow?: string;
  desc?: ReactNode;
  /** kept for API compatibility: headings are always start-aligned in the new system */
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({ title, eyebrow, desc, className }: SectionHeadingProps) {
  return <Heading title={title} eyebrow={eyebrow} description={desc} className={className} />;
}
