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

export function InfoCardGrid({ items, cols = 3, className }: InfoCardGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6",
        cols === 3 ? "lg:grid-cols-3" : "",
        className,
      )}
    >
      {items.map((item, i) => (
        <article
          key={i}
          className="flex flex-col rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-6 shadow-sm"
        >
          {item.icon && (
            <div className="mb-4 grid size-12 place-items-center rounded-md bg-brand-soft text-brand">
              {item.icon}
            </div>
          )}
          <h3 className="mb-2 text-lg leading-snug md:text-xl">{item.title}</h3>
          <div className="space-y-2 text-sm">{item.children}</div>
        </article>
      ))}
    </div>
  );
}
