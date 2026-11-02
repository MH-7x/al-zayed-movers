import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** `auto`: alternates white / grey by position among <main>'s sections (see globals.css). */
type Tone = "default" | "alt" | "navy" | "auto";

const toneCls: Record<Tone, string> = {
  default: "",
  auto: "",
  alt: "bg-surface",
  navy: "bg-secondary text-white [--outline:#ffffff] [--outline-inv:var(--color-secondary)] [&_h2]:text-white [&_h3]:text-white",
};

/** Page container: 1140 → 1200 wide, gutter at every breakpoint. */
export const containerCls =
  "mx-auto w-full max-w-285 px-4 md:px-6 lg:px-8 2xl:max-w-300";

/**
 * Section band. Vertical rhythm is SYMMETRIC (48 → 64 → 80) — the old pages used top-only padding.
 * `tone="alt"` alternates white / cool-grey bands; `tone="navy"` is the dark band.
 */
export function Section({
  id,
  tone = "default",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn("py-12 md:py-16 lg:py-20", toneCls[tone], className)}
    >
      <div className={cn(containerCls, containerClassName)}>{children}</div>
    </section>
  );
}

/** Section heading: optional eyebrow, H2 with the 4px orange start rule, optional lead paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = "default",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  tone?: "default" | "navy";
}) {
  return (
    <header className={cn("mb-8 md:mb-10", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-2 ps-5 text-sm font-bold",
            tone === "navy" ? "text-primary" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="border-s-4 border-primary ps-4">{title}</h2>
      {description && (
        <div
          className={cn(
            "mt-4 max-w-[68ch] space-y-3 md:text-lg",
            tone === "navy" ? "text-white/85" : "text-foreground",
          )}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </header>
  );
}
