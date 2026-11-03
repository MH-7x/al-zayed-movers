import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Clock, Phone, Truck } from "lucide-react";
import { containerCls } from "@/components/ui/Section";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/services/constants";

interface LocationHeroProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  /** intro paragraphs (<p> elements) shown under the contact strip */
  children: ReactNode;
  /** contact-strip texts; defaults match the emirate pages */
  phoneLabel?: string;
  hoursLabel?: string;
  hoursText?: string;
  bookLabel?: string;
}

/**
 * Hero + contact strip shared by every emirate page.
 * The photo is the hero background (navy wash for legibility) with the H1 centred on it; the contact
 * strip overlaps the hero's bottom edge, the intro paragraphs follow. The card is capped at the page
 * container (≤1200px) so the 1000px-wide sources are never stretched much past their size.
 */
export function LocationHero({
  image,
  imageAlt,
  title,
  children,
  phoneLabel = "الهاتف",
  hoursLabel = "ساعات العمل",
  hoursText = "خدمة 7 أيام في الأسبوع",
  bookLabel = "احجز نقل أثاثك الآن",
}: LocationHeroProps) {
  return (
    <section className="bg-linear-to-b from-navy-50 to-background pt-3 pb-12 md:pb-16 lg:pt-6 lg:pb-20">
      <div className={containerCls}>
        <div className="relative isolate grid min-h-72 place-items-center overflow-hidden rounded-lg px-5 py-16 text-center shadow-md sm:min-h-80 md:min-h-96 md:px-10 md:py-20 lg:min-h-112">
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
            className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/70 via-navy-950/55 to-navy-950/80"
          />
          {/* emirate titles run ~10 words: one step smaller than the global H1 keeps them to 3 lines */}
          <h1 className="max-w-4xl text-3xl text-white drop-shadow-sm md:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>

        <div className="relative z-10 mx-3 -mt-10 grid overflow-hidden rounded-lg border border-border bg-card shadow-lg md:mx-8 md:-mt-12 md:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-border p-5 md:border-e md:border-b-0">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
              <Phone className="size-6" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <p className="font-extrabold text-secondary">{phoneLabel}</p>
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-11 items-center text-xl font-extrabold text-secondary hover:text-brand"
              >
                <bdi className="ltr-isolate">{PHONE_DISPLAY}</bdi>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b border-border p-5 md:border-e md:border-b-0">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
              <Clock className="size-6" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <p className="font-extrabold text-secondary">{hoursLabel}</p>
              <p className="font-bold text-muted-foreground">{hoursText}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="group flex min-h-20 items-center justify-center gap-3 bg-primary p-5 font-extrabold text-primary-foreground transition-[filter] hover:brightness-105"
          >
            <Truck
              className="size-6 shrink-0"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span className="text-lg underline underline-offset-4">
              {bookLabel}
            </span>
          </a>
        </div>

        <div className="mt-8 max-w-3xl space-y-3 border-s-[3px] border-primary ps-4 text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
