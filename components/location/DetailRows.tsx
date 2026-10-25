import type { ReactNode } from "react";

interface DetailRow {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

/** Editorial rows: icon + title on one side, prose on the other. */
export function DetailRows({ items }: { items: DetailRow[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl bg-card shadow-sm ring-1 ring-border">
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-1 gap-5 p-6 md:grid-cols-12 md:gap-10 md:p-10"
        >
          <div className="flex items-start gap-4 md:col-span-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h3 className="pt-1 text-xl font-bold leading-snug">
              {item.title}
            </h3>
          </div>
          <div className="space-y-3 leading-relaxed text-muted-foreground md:col-span-8">
            {item.children}
          </div>
        </div>
      ))}
    </div>
  );
}
