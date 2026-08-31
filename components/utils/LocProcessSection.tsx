import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface processSteps {
  className?: string;
  process: {
    title: string;
    description: string;
  }[];
  headline: React.ReactNode;
  desc?: string;
}

const LocProcessSection = ({
  className,
  process,
  headline,
  desc,
}: processSteps) => {
  return (
    <section className={cn("pt-16 md:pt-32", className)}>
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="space-y-5 max-w-3xl mx-auto text-center">
          <div className=" text-3xl md:text-4xl">
            {" "}
            <h2 className=" relative font-extrabold">{headline}</h2>
          </div>
          <p className="text-base text-muted-foreground">
            {desc ? (
              desc
            ) : (
              <>
                {" "}
                عندما تختار شركة نقل اثاث في أبوظبي، فإنك تحتاج إلى عملية واضحة
                ومنظمة. في الزايد نقل اثاث، صممنا خطوات نقل اثاث ابوظبي لتكون
                بسيطة ومريحة:
              </>
            )}
          </p>
          <div className="flex justify-center">
            <Button className={"md:px-5"} size={"lg"}>
              احجز خدمة النقل الآن
            </Button>
          </div>
        </div>
        <ol className="relative w-full grid mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {process.map((step, index) => (
            <li
              key={index}
              className="relative flex flex-col justify-between gap-5 border-t md:pt-8 pt-4 md:flex-row"
            >
              <div className="flex size-12 items-center justify-center bg-white rounded-2xl px-4 py-1 tracking-tighter">
                0{index + 1}
              </div>
              <div className="">
                <p className="mb-4 md:text-2xl text-xl font-bold text-secondary">
                  {step.title}
                </p>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { LocProcessSection };
