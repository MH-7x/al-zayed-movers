import { CheckCircle2 } from "lucide-react";

export function CheckGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 rounded-2xl bg-card p-4 text-sm font-semibold shadow-sm ring-1 ring-border"
        >
          <CheckCircle2
            className="size-6 shrink-0 text-primary"
            strokeWidth={1.5}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
