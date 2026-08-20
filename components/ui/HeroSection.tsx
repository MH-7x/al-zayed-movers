"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Award,
  Clock,
  CreditCard,
  PhoneCall,
  User,
  MapPin,
  Calendar,
  SendHorizontal,
} from "lucide-react";

const trustBadges = [
  {
    icon: Award,
    title: "شركة مرخصة في دبي",
  },
  {
    icon: ShieldCheck,
    title: "تأمين شامل على كل المنقولات",
  },
  {
    icon: Clock,
    title: "خدمة 7 أيام في الأسبوع",
  },
  {
    icon: CreditCard,
    title: "بدون دفعة مقدمة",
  },
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    serviceDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote submission logic
    console.log("Quote Request:", formData);
  };

  return (
    <>
      {" "}
      <section className="relative w-full  ">
        <div className="container mx-auto max-w-6xl px-4 pt-28 pb-36 z-10">
          {/* Top Header & Copy */}
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium  backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              الزايد نقل اثاث دبي — باحترافية وضمان كامل
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 ">
              <span className="text-primary block">الزايد نقل اثاث دبي</span> فك
              وتغليف وتركيب بضمان شامل
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              شركة نقل اثاث رائدة متخصصة بخبرة تزيد عن 12 سنة في نقل وتغليف وفك
              وتركيب أثاث الشقق والفلل والمكاتب في جميع المواقع الامارات : دبي،
              الشارقة، أبوظبي، عجمان، رأس الخيمة، الفجيرة، أم القيوين.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 w-full">
              {trustBadges.map((badge, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white/55 px-3 py-2 md:text-sm text-xs font-medium text-secondary "
                  >
                    <span>{badge.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-16 mx-auto max-w-5xl md:rounded-2xl border border-primary/20 bg-background p-6 shadow-2xl backdrop-blur-md md:p-8 text-foreground">
        <div className="mb-6 flex flex-col items-center justify-between gap-2 border-b border-border pb-4 text-center sm:flex-row sm:text-right">
          <div>
            <h2 className="text-xl font-bold text-secondary md:text-2xl">
              احصل على عرض سعر مجاني فوري
            </h2>
            <p className="text-muted-foreground mt-2">
              تواصل معنا الآن للحصول على خدمة سريعة لنقل الأثاث بأعلى جودة
            </p>
          </div>

          <Button variant={"outline"} className={"border-primary/10"}>
            اتصال مباشر: 0556461731
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {/* Name Field */}
            <div className="relative">
              <label className="mb-1.5 block text-xs font-medium text-foreground">
                الاسم الكريم
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  placeholder="مثال: أحمد المنصوري"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="h-10 w-full rounded-md border border-input bg-card pr-9 pl-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label className="mb-1.5 block text-xs font-medium text-foreground">
                رقم الهاتف / واتساب
              </label>
              <div className="relative">
                <PhoneCall className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="05x xxx xxxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="h-10 w-full rounded-md border border-input bg-card pr-3 pr-9 text-sm text-right text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Location Field */}
            <div className="relative">
              <label className="mb-1.5 block text-xs font-medium text-foreground">
                من / إلى (المنطقة)
              </label>
              <div className="relative">
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="من المارينا إلى البرشاء"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="h-10 w-full rounded-md border border-input bg-card pr-9 pl-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Date Field */}
            <div className="relative">
              <label className="mb-1.5 block text-xs font-medium text-foreground">
                موعد النقل المطلوب
              </label>
              <div className="relative">
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="date"
                  value={formData.serviceDate}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceDate: e.target.value })
                  }
                  className="h-10 w-full rounded-md border border-input bg-card pr-9 pl-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* CTA Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              className="w-full h-11 text-base font-bold shadow-md cursor-pointer transition-all hover:scale-[1.005]"
            >
              <SendHorizontal className="size-4 ml-2" />
              احصل على عرض سعر مجاني الآن
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
