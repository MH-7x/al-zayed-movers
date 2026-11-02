import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface processSteps {
  className?: string;
  process: {
    title: string;
    description: string;
  }[];
  headline: React.ReactNode;
  desc?: string;
  grid?: number;
}

/** Numbered step cards (3 columns, or 2 when `grid` is set) + a button that jumps to the contact band. */
const LocProcessSection = ({
  className,
  process,
  headline,
  desc,
  grid,
}: processSteps) => {
  return (
    <Section id="process" tone="auto" className={className}>
      <SectionHeading
        title={headline}
        description={
          desc ? (
            desc
          ) : (
            <>
              {" "}
              عندما تختار شركة نقل اثاث في أبوظبي، فإنك تحتاج إلى عملية واضحة
              ومنظمة. في الزايد نقل اثاث، صممنا خطوات نقل اثاث ابوظبي لتكون
              بسيطة ومريحة:
            </>
          )
        }
      />
      <ol
        className={cn(
          "grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6",
          grid ? "" : "lg:grid-cols-3",
        )}
      >
        {process.map((step, index) => (
          <li
            key={index}
            className="rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-6 shadow-sm"
          >
            <span className="mb-4 grid size-11 place-items-center rounded-full bg-secondary text-sm font-extrabold text-white">
              0{index + 1}
            </span>
            <p className="mb-2 text-xl font-extrabold text-secondary">{step.title}</p>
            <p className="text-sm">{step.description}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <a href="#contact" className={cn(buttonVariants(), "max-sm:w-full")}>
          احجز خدمة النقل الآن
        </a>
      </div>
    </Section>
  );
};

export { LocProcessSection };
