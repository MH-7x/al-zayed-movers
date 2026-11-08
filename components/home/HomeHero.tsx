import Image from "next/image";
import { Check } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";
import { containerCls } from "@/components/ui/Section";

const proof = [
  "شركة مرخصة في دبي",
  "تأمين شامل على كل المنقولات",
  "خدمة 7 أيام في الأسبوع",
  "بدون دفعة مقدمة",
];

/**
 * Home hero (Direction A).
 * Mobile order: photo (2:1) → eyebrow → H1 → CTAs → lead → proof, so the primary action lands
 * inside the first screen. ≥1024: copy at the start, photo at the end, lead above the CTAs.
 */
export function HomeHero() {
  return (
    <section className="bg-linear-to-b from-navy-50 to-background pt-4 pb-12 md:pb-16 lg:pt-8 lg:pb-20">
      <div className={containerCls}>
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="flex flex-col">
            <h1 className="mt-2 mb-4 lg:mb-4">
              <span className="block text-brand">الأمين نقل اثاث دبي - </span>{" "}
              فك وتغليف وتركيب بضمان شامل
            </h1>
            <div className="order-2 mb-6 flex flex-wrap gap-3 max-sm:[&>a]:w-full lg:order-3 lg:mb-0">
              <WhatsAppButton>احصل على عرض سعر مجاني</WhatsAppButton>
              <CallButton>اتصال فوري</CallButton>
            </div>
            <p className="order-3 text-lg lg:order-2 lg:mb-6">
              شركة نقل اثاث رائدة متخصصة بخبرة تزيد عن 12 سنة في نقل وتغليف وفك
              وتركيب أثاث الشقق والفلل والمكاتب في جميع المواقع الامارات : دبي،
              الشارقة، أبوظبي، عجمان، رأس الخيمة، الفجيرة، أم القيوين.
            </p>
          </div>

          <div className="relative order-first aspect-4/3 overflow-hidden rounded-lg border border-border shadow-md lg:order-none lg:aspect-5/4">
            <Image
              src="/الأمين-نقل-اثاث-دبي.jpg"
              alt="الأمين نقل اثاث دبي"
              fill
              preload
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-4">
          {proof.map((t, i) => (
            <li
              key={t}
              className={`flex min-h-11 items-center gap-2.5 p-3.5 text-sm font-bold text-secondary ${
                i % 2 === 0 ? "border-e" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""} ${i < 3 ? "lg:border-e" : "lg:border-e-0"}`}
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <Check
                  className="size-3.5"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
