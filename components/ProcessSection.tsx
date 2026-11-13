import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/ContactButtons";
import { ReactNode } from "react";

interface ProcessStep {
  number: string;
  label: string;
  title: string;
  description: ReactNode;
}
const processImages = [
  {
    name: "معاينة-مجانية-نقل-اثاث-الأمين-دبي.jpg",
    alt: "معاينة مجانية لنقل الأثاث من شركة الأمين نقل اثاث في دبي - فريق يفحص الأثاث ويقدم عرض سعر",
  },
  {
    name: "فك-وتغليف-اثاث-احترافي-الأمين-دبي.jpg",
    alt: "عمال شركة الأمين نقل اثاث يقومون بفك وتغليف الأثاث بشكل احترافي واستخدام مواد تغليف عالية الجودة",
  },
  {
    name: "تحميل-ونقل-اثاث-امن-شاحنة-الأمين-دبي.jpg",
    alt: "شاحنة شركة الأمين نقل اثاث المكيفة تنقل الأثاث بأمان في دبي مع تثبيت كامل للقطع",
  },
  {
    name: "تركيب-وتنظيف-اثاث-بعد-النقل-الأمين-دبي.jpg",
    alt: "فريق الأمين نقل اثاث يقوم بتركيب الأثاث وترتيبه وتنظيف المنزل الجديد في دبي بعد النقل",
  },
  {
    name: "الدفع-بعد-الرضا-نقل-اثاث-الأمين-دبي.jpg",
    alt: "عميل يدفع لشركة الأمين نقل اثاث بعد التأكد من رضاه الكامل عن خدمة نقل الأثاث في دبي",
  },
];
const steps: ProcessStep[] = [
  {
    number: "01",
    label: "التواصل",
    title: "التواصل والمعاينة المجانية",
    description: (
      <>
        <p>
          اتصل فينا على 0567878464 أو ارسل لنا واتساب. لو تبي تقدير سريع، ارسل
          صور أو فيديو قصير للاثاث عبر الواتساب ونعطيك سعر تقريبي خلال دقائق. أو
          لو تفضل تقدير أدق، نرسل فريقنا يزورك في الموقع ويعمل معاينة مجانية.
        </p>
        <p>
          أثناء المعاينة، نحسب عدد القطع ونوعها ونشوف الطابق وحالة المصعد
          والممرات. بعدها تستلم عرض سعر ثابت ومكتوب يشمل كل التفاصيل: عدد
          العمال، عدد الشاحنات، مواد التغليف، والوقت المتوقع. هذا السعر ما يتغير
          يوم النقل.
        </p>
      </>
    ),
  },
  {
    number: "02",
    label: "التغليف",
    title: "الفك والتغليف الاحترافي",
    description: (
      <>
        <p>
          يوم النقل، الفريق يوصل في الموعد المحدد ومعه كل مواد التغليف المطلوبة.
          يبدأ النجارون بفك غرف النوم والخزائن والطاولات، وكل قطعة تُصور قبل
          الفك عشان نضمن إعادة تركيبها بالشكل الصحيح.
        </p>
        <p>
          بعد الفك، يبدأ التغليف: الأواني الزجاجية والمطبخ تُلف ببابل رول وفوم
          حماية، والاثاث الخشبي يُغطى ببطانيات ونايلون ستريتش. كل صندوق يُرقم
          ويُكتب عليه اسم الغرفة ومحتوياته لتوفير ساعات عند فتح الصناديق في
          البيت الجديد.
        </p>
      </>
    ),
  },
  {
    number: "03",
    label: "النقل",
    title: "التحميل والنقل الآمن",
    description: (
      <>
        <p>
          الاثاث يُحمّل في شاحنات مغلقة ومكيّفة بأحجام تناسب حجم النقل (1.5 طن،
          3 طن، أو 7 طن). كل قطعة تُثبت داخل الشاحنة بأحزمة وأنظمة تثبيت تمنع
          الحركة والانزلاق، وتوضع القطع الحساسة في أماكن مخصصة.
        </p>
        <p>
          الشاحنة مغلقة ومكيّفة لحماية الاثاث من حرارة دبي والغبار حتى في عز
          الصيف. سائقونا يعرفون شوارع دبي وأوقات الزحام لاختيار أفضل المسارات
          بأسرع وقت وأقل اهتزاز.
        </p>
      </>
    ),
  },
  {
    number: "04",
    label: "التركيب",
    title: "التفريغ والتركيب والتنظيف",
    description: (
      <>
        <p>
          في البيت الجديد، الفريق يبدأ بتفريغ الشاحنة ونقل الصناديق والقطع لكل
          غرفة حسب الأرقام المكتوبة. يبدأ النجارون بتركيب غرف النوم، الخزائن،
          الستائر، رفوف الحائط وتثبيت التلفزيون حسب رغبتك.
        </p>
        <p>
          بعد التركيب والترتيب، الفريق ينظف الموقع بالكامل ويجمع كل الكراتين
          الفارغة ومخلفات التغليف ليرفعها معه، فتستلم بيتك الجديد نظيفاً وجاهزاً
          للسكن من أول يوم.
        </p>
      </>
    ),
  },
  {
    number: "05",
    label: "الدفع",
    title: "الدفع بعد الرضا الكامل",
    description: (
      <>
        <p>
          ما نطلب أي مبلغ مقدم. تدفع فقط بعد ما تتأكد إن كل شيء في مكانه وبحالة
          ممتازة. لو لاحظت أي ملاحظة على التركيب أو الترتيب، نعدلها فوراً قبل
          المغادرة.
        </p>
        <p>
          الدفع نقداً أو بتحويل بنكي حسب ما يناسبك، وتستلم إيصالاً رسمياً
          بالمبلغ المدفوع وتفاصيل الخدمات المقدمة.
        </p>
      </>
    ),
  },
];

/** Numbered timeline. Photos are 800×597 sources shown at ≈475×356 (≥1024) → never upscaled. */
export function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeading title="خطوات عملية نقل الاثاث مع الأمين نقل اثاث دبي" />

      <ol className="space-y-8 md:space-y-12">
        {steps.map((step, i) => (
          <li key={step.number} className="grid gap-4 md:grid-cols-12 md:items-center md:gap-x-10 md:gap-y-4">
            <div className="flex items-center gap-3 md:col-span-12">
              <span className="grid size-11 place-items-center rounded-full bg-secondary text-sm font-extrabold text-white">
                {step.number}
              </span>
              <span className="font-bold text-muted-foreground">{step.label}</span>
            </div>

            <div
              className={`relative aspect-video overflow-hidden rounded-lg border border-border md:col-span-5 md:aspect-4/3 ${
                i % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={`/${processImages[i].name}`}
                alt={processImages[i].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 475px, (min-width: 768px) 40vw, 100vw"
              />
            </div>

            <div className={`md:col-span-7 ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
              <h3 className="mb-3 text-2xl leading-snug">{step.title}</h3>
              <div className="space-y-3">{step.description}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <WhatsAppButton className="max-sm:w-full">تواصل معنا الآن عبر الواتساب</WhatsAppButton>
      </div>
    </Section>
  );
}
