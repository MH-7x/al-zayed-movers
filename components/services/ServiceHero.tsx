import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Check, ChevronLeft } from "lucide-react";
import { containerCls } from "@/components/ui/Section";

export interface ServiceHeroProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  children: React.ReactNode;
}

const highlights = [
  "معاينة مجانية",
  "بدون دفعة مقدمة",
  "تأمين شامل",
  "خبرة +12 عاماً",
];

const crumb = "inline-flex min-h-11 items-center text-sm text-white/85";

/**
 * Service hero. The photo is the background (navy wash for legibility), breadcrumbs sit at its top,
 * the H1 is centred and the four trust points are glass chips at the bottom. The card is capped at
 * the page container (≤1200px) so the 1000×495 sources are never stretched much past their size.
 * The intro paragraphs follow below the card.
 */
export function ServiceHero({
  title,
  image,
  imageAlt,
  children,
}: ServiceHeroProps) {
  return (
    <section className="bg-linear-to-b from-navy-50 to-background pt-3 pb-12 md:pb-16 lg:pt-6 lg:pb-20">
      <div className={containerCls}>
        <div className="relative isolate flex min-h-96 flex-col justify-between gap-6 overflow-hidden rounded-lg px-4 pt-2 pb-5 shadow-md md:min-h-112 md:px-8 md:pb-8 lg:min-h-120">
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1280px) 1140px, 100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/75 via-navy-950/55 to-navy-950/80"
          />

          <nav aria-label="مسار التنقل">
            <ol className="flex flex-wrap items-center">
              <li className="flex items-center">
                <Link href="/" className={`${crumb} hover:text-primary`}>
                  الرئيسية
                </Link>
                <ChevronLeft
                  className="mx-1 size-3.5 text-white/70"
                  aria-hidden
                />
              </li>
              <li className="flex items-center">
                <span className={crumb}>خدماتنا</span>
                <ChevronLeft
                  className="mx-1 size-3.5 text-white/70"
                  aria-hidden
                />
              </li>
              <li>
                <span
                  aria-current="page"
                  className={`${crumb} font-bold text-white`}
                >
                  {title}
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="mx-auto max-w-3xl text-center text-3xl text-white drop-shadow-sm md:text-4xl lg:text-5xl">
            {title}
          </h1>

          <ul className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-center text-sm font-bold text-white backdrop-blur-sm"
              >
                <Check
                  className="size-4 shrink-0 text-primary"
                  strokeWidth={3}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 max-w-3xl space-y-3 border-s-[3px] border-primary ps-4 text-lg [&_a]:font-bold [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
    </section>
  );
}
