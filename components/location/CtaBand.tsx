import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

interface CtaBandProps {
  title: string;
  desc: ReactNode;
  actions: ReactNode;
  footer?: ReactNode;
}

/** Navy decision band. Buttons inside use the white-outline variant automatically (Section tone="navy"). */
export function CtaBand({ title, desc, actions, footer }: CtaBandProps) {
  return (
    <Section tone="navy">
      <div className="max-w-3xl">
        <h2 className="border-s-4 border-primary ps-4 text-white">{title}</h2>
        <div className="mt-4 space-y-3 text-white/85 md:text-lg">{desc}</div>
        <div className="mt-6">{actions}</div>
        {footer && (
          <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/85">{footer}</div>
        )}
      </div>
    </Section>
  );
}
