import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, Clock, CreditCard } from "lucide-react";

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
  return (
    <>
      {" "}
      <section className="relative w-full  ">
        <div className="container mx-auto max-w-6xl px-4 pt-28  z-10">
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
    </>
  );
}
