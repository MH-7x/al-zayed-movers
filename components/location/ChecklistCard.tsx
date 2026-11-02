import type { ReactNode } from "react";
import { Check } from "lucide-react";

interface ChecklistItem {
  lead?: string;
  children: ReactNode;
}

export function ChecklistCard({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="divide-y divide-border rounded-md border border-border bg-card shadow-sm">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 p-5 md:p-6">
          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-4" strokeWidth={3} aria-hidden="true" />
          </span>
          <p>
            {item.lead && (
              <strong className="me-1 font-extrabold text-secondary">{item.lead}</strong>
            )}
            {item.children}
          </p>
        </li>
      ))}
    </ul>
  );
}
