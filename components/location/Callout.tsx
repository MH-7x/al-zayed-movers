import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Note card: white surface, 4px orange start rule (text stays on white for contrast). */
export function Callout({ title, children, className }: CalloutProps) {
  return (
    <aside
      className={cn(
        "rounded-md border border-border border-s-4 border-s-primary bg-card p-6 shadow-sm",
        className,
      )}
    >
      {title && <h3 className="mb-2 text-lg">{title}</h3>}
      <div className="space-y-2 text-sm md:text-base">{children}</div>
    </aside>
  );
}
