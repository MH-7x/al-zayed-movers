import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ title, children, className }: CalloutProps) {
  return (
    <aside
      className={cn(
        "rounded-2xl border-s-4 border-primary bg-primary/10 p-6",
        className,
      )}
    >
      {title && <h3 className="mb-2 text-lg font-bold">{title}</h3>}
      <div className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </aside>
  );
}
