import Image from "next/image";
import { Check, Clock, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/services/constants";
import BackgroundImage from "@/public/شركة-الأمين-نقل-اثاث-دبي.jpg";

export interface ContactSectionProps {
  title?: string;
  description?: string;
  /** reverse the column order (info card first) */
  rev?: boolean;
  /** label of the primary WhatsApp button */
  whatsappLabel?: string;
  whatsappMessage?: string;
  /** heading level of the title: `h1` when the section is the whole page (Contact page) */
  as?: "h1" | "h2";
}

const trust = [
  "معاينة مجانية",
  "بدون دفعة مقدمة",
  "تأمين شامل",
  "خبرة +12 عاماً",
];

const infoIcon =
  "grid size-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand";

/**
 * Navy contact band shown at the bottom of every page: the fleet photo sits under a heavy navy wash,
 * copy + actions + trust points at the start, a white info card (address, phone, hours) at the end.
 * Stacks on mobile (actions go full width); two columns from lg.
 */
export function ContactSection({
  title = "تواصل معنا الآن — الأمين نقل اثاث دبي",
  description = "جاهز للانتقال؟ تواصل مع الأمين نقل اثاث دبي واحصل على عرض سعر مجاني خلال دقائق.",
  rev = false,
  whatsappLabel = "احصل على عرض سعر مجاني",
  whatsappMessage,
  as: Heading = "h2",
}: ContactSectionProps) {
  return (
    <Section
      id="contact"
      tone="navy"
      className="relative isolate overflow-hidden"
    >
      <Image
        src={BackgroundImage}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-l from-secondary/95 via-secondary/90 to-navy-950/95"
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className={rev ? "lg:order-2" : ""}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-primary"
            />
            خدمة عملاء سريعة ومباشرة
          </p>
          <Heading className="mb-4 text-3xl text-white md:text-4xl">
            {title}
          </Heading>
          <p className="max-w-xl text-lg text-white/90">{description}</p>
          <p className="mt-3 max-w-xl text-white/80">
            نقدم خدمات نقل الاثاث في دبي و أبوظبي والشارقة وعجمان ورأس الخيمة
            والفجيرة وأم القيوين والعين. تواصل معنا على الرقم{" "}
            <bdi className="ltr-isolate">0567878464</bdi>
          </p>

          <div className="mt-7 flex flex-wrap gap-3 max-sm:[&>a]:w-full">
            <WhatsAppButton size="lg" message={whatsappMessage}>
              {whatsappLabel}
            </WhatsAppButton>
            <CallButton size="lg" variant="outlineLight">
              اتصال فوري
            </CallButton>
          </div>

          <ul className="mt-8 grid max-w-xl grid-cols-2 gap-x-4 gap-y-3 border-t border-white/15 pt-6">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-bold text-white md:text-base"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check
                    className="size-3.5"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg bg-card text-foreground shadow-xl">
          <div className="border-b border-border bg-muted px-6 py-4">
            <p className="text-lg font-extrabold text-secondary">
              بيانات التواصل
            </p>
          </div>
          <ul className="divide-y divide-border">
            <li className="flex items-start gap-4 p-6">
              <span className={infoIcon}>
                <MapPin
                  className="size-6"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>
              <div className="min-w-0">
                <span className="block text-sm font-bold text-muted-foreground">
                  العنوان الرسمي
                </span>
                <address className="font-bold text-secondary not-italic">
                  <bdi>
                    B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha
                    - Dubai
                  </bdi>
                </address>
              </div>
            </li>
            <li className="flex items-start gap-4 p-6">
              <span className={infoIcon}>
                <Phone
                  className="size-6"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>
              <div>
                <span className="block text-sm font-bold text-muted-foreground">
                  اتصل الآن
                </span>
                <a
                  href={PHONE_TEL}
                  className="inline-flex min-h-11 items-center text-2xl font-extrabold text-secondary hover:text-brand md:text-3xl"
                >
                  <bdi className="ltr-isolate">{PHONE_DISPLAY}</bdi>
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 p-6">
              <span className={infoIcon}>
                <Clock
                  className="size-6"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>
              <div>
                <span className="block text-sm font-bold text-muted-foreground">
                  ساعات العمل
                </span>
                <p className="font-bold text-secondary">
                  متاحين 7 أيام في الأسبوع على مدار الساعة open 24/7
                </p>
              </div>
            </li>
          </ul>
          <span aria-hidden="true" className="block h-1.5 bg-primary" />
        </div>
      </div>
    </Section>
  );
}
