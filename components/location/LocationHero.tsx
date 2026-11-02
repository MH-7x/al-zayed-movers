import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Clock, Phone, Truck } from "lucide-react";
import { containerCls } from "@/components/ui/Section";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/services/constants";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";

interface LocationHeroProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  /** intro paragraphs (<p> elements) shown under the actions */
  children: ReactNode;
  whatsappLabel: string;
  /** omit on pages that only have a WhatsApp button (the phone is in the contact strip) */
  callLabel?: string;
  /** contact-strip texts; defaults match the emirate pages */
  phoneLabel?: string;
  hoursLabel?: string;
  hoursText?: string;
  bookLabel?: string;
}

/**
 * Hero + contact strip shared by every emirate page (it used to be copy-pasted inline).
 * Mobile: photo (2:1) → H1 → actions → contact strip → intro paragraphs.
 * ≥1024: copy at the start, 4:3 photo at the end, intro below.
 */
export function LocationHero({
  image,
  imageAlt,
  title,
  children,
  whatsappLabel,
  callLabel,
  phoneLabel = "الهاتف",
  hoursLabel = "ساعات العمل",
  hoursText = "خدمة 7 أيام في الأسبوع",
  bookLabel = "احجز نقل أثاثك الآن",
}: LocationHeroProps) {
  return (
    <section className="bg-linear-to-b from-navy-50 to-background pt-4 pb-12 md:pb-16 lg:pt-8 lg:pb-20">
      <div className={containerCls}>
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="flex flex-col">
            {/* emirate titles run ~10 words: one step smaller than the global H1 keeps them to 3 lines */}
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl">{title}</h1>
            <div className="flex flex-wrap gap-3 max-sm:[&>a]:w-full">
              <WhatsAppButton>{whatsappLabel}</WhatsAppButton>
              {callLabel && (
                <CallButton>
                  {callLabel} <bdi className="ltr-isolate">{PHONE_DISPLAY}</bdi>
                </CallButton>
              )}
            </div>
          </div>

          <div className="relative order-first aspect-2/1 overflow-hidden rounded-lg border border-border shadow-md lg:order-0 lg:aspect-4/3">
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-3">
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
            <Truck className="size-6 shrink-0" strokeWidth={1.8} aria-hidden="true" />
            <span className="text-lg underline underline-offset-4">{bookLabel}</span>
          </a>
        </div>

        <div className="mt-8 max-w-3xl space-y-3 border-s-[3px] border-primary ps-4 text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
