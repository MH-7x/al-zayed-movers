import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronLeft,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "./constants";

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

export function ServiceHero({
  title,
  image,
  imageAlt,
  whatsappText,
  children,
}: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Navy wash: solid enough on the text side, lets the photo show through on the other */}
      <div className="absolute inset-0 -z-10 bg-secondary/70 bg-linear-to-l from-secondary/95 via-secondary/80 to-secondary/30" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[22px_22px]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-primary" />

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-24">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none">
          <nav
            aria-label="مسار التنقل"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/70 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-white">
              الرئيسية
            </Link>
            <ChevronLeft className="size-3.5" aria-hidden />
            <span>خدماتنا</span>
            <ChevronLeft className="size-3.5" aria-hidden />
            <span aria-current="page" className="font-medium text-white">
              {title}
            </span>
          </nav>

          <h1 className="text-white">{title}</h1>
          <span
            aria-hidden
            className="mt-5 block h-1 w-20 rounded-full bg-primary"
          />

          <div className="mt-6 max-w-2xl space-y-3 text-sm leading-8 text-white/85 md:text-base [&_a]:font-bold [&_a]:text-white [&_a]:underline [&_a]:decoration-primary [&_a]:decoration-2 [&_a]:underline-offset-4">
            {children}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 gap-2 px-6 text-base font-bold shadow-lg shadow-primary/30",
              )}
            >
              <MessageCircle className="size-5" aria-hidden />
              اطلب عرض سعر مجاني
            </a>
            <a
              href={PHONE_TEL}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 gap-2 border-white/30 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white",
              )}
            >
              <PhoneCall className="size-5" aria-hidden />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/90 sm:text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
