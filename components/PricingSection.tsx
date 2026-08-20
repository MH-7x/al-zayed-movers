import { Phone, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingRow {
  type: string;
  price: string;
  includes: string;
  duration: string;
  highlighted?: boolean;
}

const pricingData: PricingRow[] = [
  {
    type: "استوديو",
    price: "400 – 700",
    includes: "فك + تغليف + نقل + تركيب",
    duration: "2 – 3 ساعات",
  },
  {
    type: "شقة غرفة وصالة",
    price: "700 – 1,200",
    includes: "فك + تغليف + نقل + تركيب",
    duration: "3 – 5 ساعات",
  },
  {
    type: "شقة غرفتين وصالة",
    price: "1,200 – 1,800",
    includes: "فك + تغليف + نقل + تركيب + تنظيف",
    duration: "5 – 7 ساعات",
    highlighted: true,
  },
  {
    type: "شقة 3 غرف نوم",
    price: "1,800 – 2,800",
    includes: "فك + تغليف + نقل + تركيب + تنظيف",
    duration: "6 – 8 ساعات",
  },
  {
    type: "فيلا (3-5 غرف)",
    price: "2,500 – 4,500",
    includes: "كل الخدمات + ونش إن لزم",
    duration: "يوم كامل",
  },
  {
    type: "مكتب تجاري",
    price: "يبدأ من 1,000",
    includes: "حسب الحجم والتجهيزات",
    duration: "حسب الاتفاق",
  },
];

export function PricingSection() {
  return (
    <section className="pt-16 lg:pt-28" id="pricing">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          {/* Eyebrow — matches the site pattern */}
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
            <div className="flex items-center gap-1">
              <span className="h-4 w-1.5 -skew-x-12 rounded-xs bg-primary" />
              <span className="h-4 w-1.5 -skew-x-12 rounded-xs bg-primary" />
            </div>
            <span>الأسعار</span>
          </div>

          <h2 className="md:text-4xl text-3xl font-extrabold leading-tight max-w-3xl mx-auto">
            أسعار نقل الاثاث في دبي — شفافية كاملة بدون رسوم خفية
          </h2>

          <p className="mt-5  leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            تكلفة نقل الاثاث في دبي تعتمد على أشياء كثيرة: حجم الاثاث، الطابق،
            هل يوجد مصعد أم لا، المسافة بين الموقعين، ونوع الخدمات المطلوبة. في
            الزايد، نعطيك سعر واضح من البداية. ما في مفاجآت يوم النقل.
          </p>
        </div>

        {/* ── Desktop Table ── */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th className="py-4 px-6 text-sm font-bold">نوع السكن</th>
                <th className="py-4 px-6 text-sm font-bold">
                  السعر التقريبي (درهم)
                </th>
                <th className="py-4 px-6 text-sm font-bold">يشمل</th>
                <th className="py-4 px-6 text-sm font-bold">المدة المتوقعة</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, i) => (
                <tr
                  key={i}
                  className={`
                    border-b border-border/40 
                  
                    ${i === pricingData.length - 1 ? "border-b-0" : ""}
                  `}
                >
                  {/* Type */}
                  <td className="py-4.5 px-6 font-bold text-secondary text-sm">
                    <div className="flex items-center gap-2.5">
                      {row.highlighted && (
                        <span className="inline-block h-2 w-2 rounded-full bg-primary shrink-0 animate-pulse" />
                      )}
                      {row.type}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-4.5 px-6">
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                      {row.price}
                      <span className="text-[11px] font-medium text-primary/70">
                        درهم
                      </span>
                    </span>
                  </td>

                  {/* Includes */}
                  <td className="py-4.5 px-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      {row.includes}
                    </div>
                  </td>

                  {/* Duration */}
                  <td className="py-4.5 px-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      {row.duration}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mobile Cards ── */}
        <div className="md:hidden space-y-4">
          {pricingData.map((row, i) => (
            <div
              key={i}
              className={`
                rounded-xl border p-5 transition-all duration-200
                border-border/60 bg-card shadow-sm
              `}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-secondary flex items-center gap-2">
                  {row.highlighted && (
                    <span className="inline-block h-2 w-2 rounded-full bg-primary shrink-0 animate-pulse" />
                  )}
                  {row.type}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-lg bg-primary/5 px-3 py-1.5 text-sm font-bold text-primary">
                  {row.price}
                  <span className="text-[10px] font-medium text-primary/70">
                    درهم
                  </span>
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary/60 shrink-0" />
                  <span>{row.includes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary/60 shrink-0" />
                  <span>{row.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Disclaimer + Trust Signal ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-xl bg-secondary/[0.04]  px-5 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            هذه أسعار تقريبية. السعر النهائي يعتمد على تفاصيل حالتك (الطابق،
            المنطقة، الموسم). تواصل معنا عبر الواتساب أو اطلب معاينة مجانية
            ونعطيك سعر ثابت ومكتوب.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="gap-2 px-6 h-12 text-base cursor-pointer"
          >
            <Phone className="size-4" />
            <span>احصل على عرض سعر مجاني </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
