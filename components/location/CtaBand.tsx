import type { ReactNode } from "react";
import { Truck } from "lucide-react";

interface CtaBandProps {
  title: string;
  desc: ReactNode;
  actions: ReactNode;
  footer?: ReactNode;
}

export function CtaBand({ title, desc, actions, footer }: CtaBandProps) {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-secondary px-6 py-12 text-center text-secondary-foreground md:px-14 md:py-16">
        <Truck
          className="pointer-events-none absolute -bottom-6 -left-6 size-48 text-white/5"
          strokeWidth={1}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/80">
            {desc}
          </p>
          <div className="mt-8">{actions}</div>
          {footer && (
            <div className="mt-8 border-t border-white/15 pt-6 text-sm leading-loose text-white/80">
              {footer}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
