import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";

const items = [
  {
    title: "تصريح الانتقال (Move-in / Move-out Permit)",
    text: "أغلب المباني والمجمعات في دبي تطلب تصريح خروج أو دخول قبل يوم النقل. المطورين الكبار مثل إعمار ونخيل وداماك لهم إجراءات خاصة: تسوية فواتير الخدمات، تقديم نسخة من عقد الإيجار الجديد، وأحياناً دفع وديعة مؤقتة. فريقنا يساعدك في كل هذه الخطوات ويتواصل مع إدارة المبنى نيابةً عنك.",
  },
  {
    title: "حجز مصعد الخدمة وتنسيق المبنى",
    text: "في الأبراج السكنية، لازم تحجز مصعد الخدمة مسبقاً. عادة قبل 48 إلى 72 ساعة من موعد النقل. لو ما حجزت، ممكن يكون المصعد محجوز لساكن ثاني وتضطر تأجل. نحن نتولى الحجز والتنسيق مع أمن المبنى.",
  },
  {
    title: "إجراءات ديوا (DEWA) وإيجاري (Ejari)",
    text: "قبل ما تغادر بيتك القديم، تأكد من تسوية فواتير ديوا (الكهرباء والماء) وقدم طلب نقل الخدمة أو إلغائها. وكمان انقل عقد إيجاري إلى عنوانك الجديد عشان ما يصير عندك مشاكل مع الإيجار أو تجديد التأشيرة لاحقاً.",
  },
];

export function RequirementsSection() {
  return (
    <Section id="requirements">
      <SectionHeading
        title="متطلبات وتصاريح نقل الاثاث في دبي — دليل عملي"
        description="كثير من الناس لا يعرفون إن النقل في دبي يحتاج إجراءات رسمية مع المبنى. لو ما سويتها مسبقاً، ممكن تتفاجأ إن الأمن يمنعك من إدخال أو إخراج الاثاث."
      />
      {/* source 1100×614 → 16:10 mobile, 16:7 ≥768 (≤1076px wide: never upscaled) */}
      <div className="relative mb-8 aspect-16/10 overflow-hidden rounded-lg md:aspect-16/7">
        <Image
          src="/شركة-الأمين-نقل-اثاث-دبي.jpg"
          alt="شركة الأمين نقل اثاث دبي"
          fill
          sizes="(min-width: 1280px) 1076px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            className="rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-6 shadow-sm"
          >
            <h3 className="mb-2 text-xl leading-snug">{it.title}</h3>
            <p className="text-sm">{it.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
