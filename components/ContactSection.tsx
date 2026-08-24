"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, PhoneCall } from "lucide-react";

export interface ContactSectionProps {
  title?: string;
  description?: string;
}

export function ContactSection({
  title = "تواصل معنا الآن — الزايد نقل اثاث دبي",
  description = "جاهز للانتقال؟ تواصل مع الزايد نقل اثاث دبي واحصل على عرض سعر مجاني خلال دقائق.",
}: ContactSectionProps) {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden pt-16 md:pt-28"
      id="contact"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
        {/* Contact Card (Inspired by the reference image) */}
        <div className="overflow-hidden rounded-2xl bg-white">
          {/* Card Map Header / Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-primary/20 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.552660857166!2d55.33738229999999!3d25.251987800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d45216441a9%3A0x67473b5b7917568c!2z2KfZhNiy2KfZitivINmG2YLZhCDYp9ir2KfYqyDYr9io2Yo!5e0!3m2!1sen!2sae!4v1787226739846!5m2!1sen!2sae"
              className="object-cover absolute inset-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              title="الزايد نقل اثاث دبي on Google Maps"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* Card Body Information */}
          <div className="p-5 sm:p-7 space-y-4">
            {/* Address */}
            <div className="flex items-center gap-3.5">
              <MapPin className="size-6 text-primary" strokeWidth={1.3} />

              <div className="flex-1 text-right">
                <span className="block text-xs font-semibold text-muted-foreground">
                  العنوان الرسمي
                </span>
                <p className="mt-0.5 text-sm font-medium text-foreground leading-snug">
                  B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha -
                  Dubai
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-3.5">
              <Phone className="size-6 text-primary" strokeWidth={1.3} />

              <div className="flex-1 text-right">
                <span className="block text-xs font-semibold text-muted-foreground">
                  اتصل الآن
                </span>
                <a
                  href={`tel:+971556461731`}
                  dir="ltr"
                  className="mt-0.5 inline-block text-sm font-bold text-foreground transition-colors hover:text-primary"
                >
                  055 646 1731
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3.5">
              <Clock className="size-6 text-primary" strokeWidth={1.3} />

              <div className="flex-1 text-right">
                <span className="block text-xs font-semibold text-muted-foreground">
                  ساعات العمل
                </span>
                <p className="mt-0.5 text-sm font-medium text-foreground">
                  متاحين 7 أيام في الأسبوع على مدار الساعة open 24/7
                </p>
              </div>
            </div>

            {/* Actions / Buttons using the provided Button component */}
          </div>
        </div>
        {/* Dynamic Section Header */}
        <div>
          <div className="mb-3 text-xs font-semibold text-primary sm:text-sm">
            خدمة عملاء سريعة ومباشرة
          </div>

          <h2 className="text-2xl font-extrabold text-secondary sm:text-3xl leading-tight">
            {title}
          </h2>

          <p className="mt-6  text-muted-foreground ">{description}</p>
          <p className="mt-2  text-muted-foreground ">
            نقدم خدمات نقل الاثاث في دبي و أبوظبي والشارقة وعجمان ورأس الخيمة
            والفجيرة وأم القيوين والعين. تواصل معنا على الرقم 0556461731
          </p>
          <div className="mt-5 flex gap-2.5">
            <Button variant="default" size="lg">
              <PhoneCall className="size-4 ml-2" />
              <span>اتصال فوري</span>
            </Button>
            <a
              href={"https://maps.app.goo.gl/7LnAPhkv2uQi1sAD6"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                <ExternalLink className="size-4 ml-2" />
                <span>موقعنا على الخريطة</span>
              </Button>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
