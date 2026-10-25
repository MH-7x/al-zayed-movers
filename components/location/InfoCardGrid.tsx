import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCard {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

interface InfoCardGridProps {
  items: InfoCard[];
  /** columns on large screens */
  cols?: 2 | 3;
  className?: string;
}

export function InfoCardGrid({
  items,
  cols = 3,
  className,
}: InfoCardGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2",
        cols === 3 ? "lg:grid-cols-3" : "",
        className,
      )}
    >
      {items.map((item, i) => (
        <article
          key={i}
          className="flex flex-col rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg"
        >
          {item.icon && (
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
          )}
          <h3 className="mb-2 text-lg font-bold leading-snug">{item.title}</h3>
          <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {item.children}
          </div>
        </article>
      ))}
    </div>
  );
}
