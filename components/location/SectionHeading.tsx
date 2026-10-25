import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: ReactNode;
  eyebrow?: string;
  desc?: ReactNode;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  desc,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 lg:mb-14 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold text-primary sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
        {title}
      </h2>
      {desc && (
        <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground md:text-lg">
          {desc}
        </div>
      )}
    </div>
  );
}
