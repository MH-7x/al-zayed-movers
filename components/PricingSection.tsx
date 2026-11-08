import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/ContactButtons";

interface PricingRow {
  type: string;
  price: string;
  includes: string;
  duration: string;
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

const th = "bg-secondary px-6 py-4 text-start text-sm font-bold text-secondary-foreground";

/**
 * One <table> for all sizes (no duplicated mobile DOM). ≥768: a real table with a navy header.
 * <768: each row becomes a stacked entry — type + price on one line, the other fields labelled
 * beneath — so no column is ever hidden behind a horizontal scroll.
 */
export function PricingSection() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="الأسعار"
        title="أسعار نقل الاثاث في دبي — شفافية كاملة بدون رسوم خفية"
        description="تكلفة نقل الاثاث في دبي تعتمد على أشياء كثيرة: حجم الاثاث، الطابق، هل يوجد مصعد أم لا، المسافة بين الموقعين، ونوع الخدمات المطلوبة. في الأمين، نعطيك سعر واضح من البداية. ما في مفاجآت يوم النقل."
      />

      <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
        <table className="w-full text-start max-md:block">
          <thead className="max-md:sr-only">
            <tr>
              <th scope="col" className={th}>نوع السكن</th>
              <th scope="col" className={th}>السعر التقريبي (درهم)</th>
              <th scope="col" className={th}>يشمل</th>
              <th scope="col" className={th}>المدة المتوقعة</th>
            </tr>
          </thead>
          <tbody className="max-md:block">
            {pricingData.map((row) => (
              <tr
                key={row.type}
                className="border-b border-border last:border-b-0 odd:bg-card even:bg-surface max-md:grid max-md:grid-cols-[1fr_auto] max-md:items-baseline max-md:gap-x-4 max-md:gap-y-1 max-md:p-4"
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-start text-base font-extrabold text-secondary max-md:p-0 max-md:text-lg"
                >
                  {row.type}
                </th>
                <td className="px-6 py-4 font-extrabold whitespace-nowrap text-secondary max-md:col-start-2 max-md:row-start-1 max-md:p-0">
                  {row.price}{" "}
                  <span className="text-xs font-bold text-muted-foreground">درهم</span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground max-md:col-span-full max-md:p-0">
                  <span className="font-bold text-foreground md:hidden">يشمل: </span>
                  {row.includes}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground max-md:col-span-full max-md:p-0">
                  <span className="font-bold text-foreground md:hidden">المدة المتوقعة: </span>
                  {row.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-[68ch] text-sm text-muted-foreground">
        هذه أسعار تقريبية. السعر النهائي يعتمد على تفاصيل حالتك (الطابق، المنطقة،
        الموسم). تواصل معنا عبر الواتساب أو اطلب معاينة مجانية ونعطيك سعر ثابت
        ومكتوب.
      </p>

      <div className="mt-8">
        <WhatsAppButton className="max-sm:w-full">احصل على عرض سعر مجاني</WhatsAppButton>
      </div>
    </Section>
  );
}
