import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";
import { buttonVariants } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/services/constants";

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

/** Navy contact band: copy + actions at the start, info card (with map) at the end. */
export function ContactSection({
  title = "تواصل معنا الآن — الزايد نقل اثاث دبي",
  description = "جاهز للانتقال؟ تواصل مع الزايد نقل اثاث دبي واحصل على عرض سعر مجاني خلال دقائق.",
  rev = false,
  whatsappLabel = "احصل على عرض سعر مجاني",
  whatsappMessage,
  as: Heading = "h2",
}: ContactSectionProps) {
  return (
    <Section id="contact" tone="navy">
      <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className={rev ? "lg:order-2" : ""}>
          <p className="mb-2 text-sm font-bold text-primary">خدمة عملاء سريعة ومباشرة</p>
          <Heading className="mb-4 text-3xl text-white">{title}</Heading>
          <p className="text-white/85">{description}</p>
          <p className="mt-3 text-white/85">
            نقدم خدمات نقل الاثاث في دبي و أبوظبي والشارقة وعجمان ورأس الخيمة
            والفجيرة وأم القيوين والعين. تواصل معنا على الرقم{" "}
            <bdi className="ltr-isolate">0556461731</bdi>
          </p>
          <div className="mt-6 flex flex-wrap gap-3 max-sm:[&>a]:w-full">
            <WhatsAppButton message={whatsappMessage}>{whatsappLabel}</WhatsAppButton>
            <CallButton variant="outlineLight">اتصال فوري</CallButton>
            <a
              href="https://maps.app.goo.gl/7LnAPhkv2uQi1sAD6"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outlineLight" })}
            >
              <ExternalLink aria-hidden="true" />
              <span>موقعنا على الخريطة</span>
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-card text-foreground shadow-md">
          <div className="relative aspect-video w-full bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.552660857166!2d55.33738229999999!3d25.251987800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d45216441a9%3A0x67473b5b7917568c!2z2KfZhNiy2KfZitivINmG2YLZhCDYp9ir2KfYqyDYr9io2Yo!5e0!3m2!1sen!2sae!4v1787226739846!5m2!1sen!2sae"
              className="absolute inset-0 h-full w-full"
              allowFullScreen
              loading="lazy"
              title="الزايد نقل اثاث دبي on Google Maps"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <ul className="space-y-5 p-6">
            <li className="flex items-start gap-3.5">
              <MapPin className="mt-1 size-6 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <span className="block text-sm font-bold text-muted-foreground">العنوان الرسمي</span>
                <address className="font-bold text-secondary not-italic">
                  <bdi className="ltr-isolate">
                    B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha - Dubai
                  </bdi>
                </address>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <Phone className="mt-1 size-6 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <span className="block text-sm font-bold text-muted-foreground">اتصل الآن</span>
                <a
                  href={PHONE_TEL}
                  className="inline-flex min-h-11 items-center text-2xl font-extrabold text-secondary hover:text-brand"
                >
                  <bdi className="ltr-isolate">{PHONE_DISPLAY}</bdi>
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <Clock className="mt-1 size-6 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <span className="block text-sm font-bold text-muted-foreground">ساعات العمل</span>
                <p className="font-bold text-secondary">
                  متاحين 7 أيام في الأسبوع على مدار الساعة open 24/7
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
