import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface ProcessStep {
  number: string;
  label: string;
  title: string;
  description: ReactNode;
}
const processImages = [
  {
    name: "معاينة-مجانية-نقل-اثاث-الزايد-دبي.jpg",
    alt: "معاينة مجانية لنقل الأثاث من شركة الزايد نقل اثاث في دبي - فريق يفحص الأثاث ويقدم عرض سعر",
  },
  {
    name: "فك-وتغليف-اثاث-احترافي-الزايد-دبي.jpg",
    alt: "عمال شركة الزايد نقل اثاث يقومون بفك وتغليف الأثاث بشكل احترافي واستخدام مواد تغليف عالية الجودة",
  },
  {
    name: "تحميل-ونقل-اثاث-امن-شاحنة-الزايد-دبي.jpg",
    alt: "شاحنة شركة الزايد نقل اثاث المكيفة تنقل الأثاث بأمان في دبي مع تثبيت كامل للقطع",
  },
  {
    name: "تركيب-وتنظيف-اثاث-بعد-النقل-الزايد-دبي.jpg",
    alt: "فريق الزايد نقل اثاث يقوم بتركيب الأثاث وترتيبه وتنظيف المنزل الجديد في دبي بعد النقل",
  },
  {
    name: "الدفع-بعد-الرضا-نقل-اثاث-الزايد-دبي.jpg",
    alt: "عميل يدفع لشركة الزايد نقل اثاث بعد التأكد من رضاه الكامل عن خدمة نقل الأثاث في دبي",
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
          اتصل فينا على 0556461731 أو ارسل لنا واتساب. لو تبي تقدير سريع، ارسل
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

export function ProcessSection() {
  return (
    <section className="pt-16 lg:pt-28" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mb-10">
          <h2 className="md:text-4xl text-3xl font-extrabold leading-tight">
            خطوات عملية نقل الاثاث مع <br className="hidden md:block" /> الزايد
            نقل اثاث دبي
          </h2>
          <p className="text-primary text-xl sm:text-2xl font-bold mt-1"></p>
        </div>

        {/* ── Steps ── */}
        <div className="space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={step.number}>
                {/* ── Separator line with step number + label ── */}
                <div className="flex items-center justify-between border-t border-border py-4">
                  <span className="text-sm font-bold text-primary tracking-wide">
                    {step.number}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground tracking-wide">
                    {step.label}
                  </span>
                </div>

                {/* ── Content row: image + text, alternating ── */}
                <div
                  className={`
                    grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16
                    pt-6 pb-14 lg:pb-20 items-center
                  `}
                >
                  {/* Image placeholder */}
                  <div
                    className={`
                      md:col-span-5
                      ${isEven ? "md:order-1" : "md:order-2"}
                    `}
                  >
                    {/* 4:3 aspect ratio placeholder — replace with your image */}
                    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                      <Image
                        src={`/${processImages[i].name}`}
                        alt={processImages[i].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div
                    className={`
                      md:col-span-7 flex flex-col justify-center
                      ${isEven ? "md:order-2" : "md:order-1"}
                    `}
                  >
                    <h3 className="text-2xl lg:text-[1.7rem] font-bold leading-snug">
                      {step.title}
                    </h3>
                    <div className="mt-4 text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="border-t border-border pt-10 pb-4 text-center">
          <Button
            size="lg"
            className="gap-2 px-6 h-12 text-base cursor-pointer"
          >
            <span> تواصل معنا الآن عبر الواتساب</span>
            <ArrowLeft className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
