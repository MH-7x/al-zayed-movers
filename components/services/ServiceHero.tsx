import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Check, ChevronLeft } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";
import { containerCls } from "@/components/ui/Section";
import { PHONE_DISPLAY } from "./constants";

export interface ServiceHeroProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  whatsappText: string;
  children: React.ReactNode;
}

const highlights = [
  "معاينة مجانية",
  "بدون دفعة مقدمة",
  "تأمين شامل",
  "خبرة +12 عاماً",
];

const crumb =
  "inline-flex min-h-11 items-center text-sm text-muted-foreground";

/**
 * Service hero (Direction A). The photo is shown as a photo (no navy wash over it).
 * Mobile: photo (2:1) → H1 → CTAs → proof → intro paragraphs; ≥1024: copy at the start,
 * photo (4:3) at the end, intro below. The source is 1000×495, so the slot is never upscaled.
 */
export function ServiceHero({
  title,
  image,
  imageAlt,
  whatsappText,
  children,
}: ServiceHeroProps) {
  return (
    <section className="bg-linear-to-b from-navy-50 to-background pt-2 pb-12 md:pb-16 lg:pb-20">
      <div className={containerCls}>
        <nav aria-label="مسار التنقل">
          <ol className="flex flex-wrap items-center">
            <li className="flex items-center">
              <Link href="/" className={`${crumb} hover:text-brand`}>
                الرئيسية
              </Link>
              <ChevronLeft className="mx-1 size-3.5 text-muted-foreground" aria-hidden />
            </li>
            <li className="flex items-center">
              <span className={crumb}>خدماتنا</span>
              <ChevronLeft className="mx-1 size-3.5 text-muted-foreground" aria-hidden />
            </li>
            <li>
              <span aria-current="page" className={`${crumb} font-bold text-secondary`}>
                {title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-2 grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="flex flex-col">
            <h1 className="mb-4">{title}</h1>
            <div className="mb-6 flex flex-wrap gap-3 max-sm:[&>a]:w-full">
              <WhatsAppButton message={whatsappText}>اطلب عرض سعر مجاني</WhatsAppButton>
              <CallButton>{PHONE_DISPLAY}</CallButton>
            </div>
            <ul className="grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-card">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className={`flex min-h-11 items-center gap-2.5 p-3 text-sm font-bold text-secondary ${
                    i % 2 === 0 ? "border-e" : ""
                  } ${i < 2 ? "border-b" : ""}`}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-first aspect-2/1 overflow-hidden rounded-lg border border-border shadow-md lg:order-none lg:aspect-4/3">
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 max-w-3xl space-y-3 border-s-[3px] border-primary ps-4 text-lg [&_a]:font-bold [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
    </section>
  );
}
