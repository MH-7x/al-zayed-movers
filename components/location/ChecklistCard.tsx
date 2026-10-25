import type { ReactNode } from "react";
import { Check } from "lucide-react";

interface ChecklistItem {
  lead?: string;
  children: ReactNode;
}

export function ChecklistCard({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="mx-auto max-w-4xl divide-y divide-border rounded-2xl bg-card shadow-sm ring-1 ring-border">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 p-5 md:p-6">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-4" strokeWidth={3} />
          </span>
          <p className="leading-relaxed text-muted-foreground">
            {item.lead && (
              <strong className="me-1 font-bold text-secondary">
                {item.lead}
              </strong>
            )}
            {item.children}
          </p>
        </li>
      ))}
    </ul>
  );
}
