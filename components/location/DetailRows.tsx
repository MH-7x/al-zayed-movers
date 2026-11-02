import type { ReactNode } from "react";

interface DetailRow {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

/** Editorial rows: icon + title at the start, prose at the end. */
export function DetailRows({ items }: { items: DetailRow[] }) {
  return (
    <div className="divide-y divide-border rounded-md border border-border bg-card shadow-sm">
      {items.map((item, i) => (
        <div key={i} className="grid grid-cols-1 gap-4 p-5 md:grid-cols-12 md:gap-10 md:p-8">
          <div className="flex items-start gap-4 md:col-span-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
              {item.icon}
            </div>
            <h3 className="pt-1 text-xl leading-snug">{item.title}</h3>
          </div>
          <div className="space-y-3 md:col-span-8">{item.children}</div>
        </div>
      ))}
    </div>
  );
}
