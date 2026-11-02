import { Check } from "lucide-react";

export function CheckGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-sm font-bold text-secondary shadow-sm"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
            <Check className="size-4" strokeWidth={3} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
