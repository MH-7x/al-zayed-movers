import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";

const features = [
  {
    title: "خبرة تزيد عن 12 سنة في نقل الاثاث بدبي",
    description:
      "فريقنا يشتغل في دبي كل يوم. نعرف أبراج داون تاون ومارينا والخليج التجاري، ونعرف فلل المرابع ودبي هيلز ونخلة جميرا. والأهم، نعرف إجراءات كل مطور عقاري: إعمار، نخيل، داماك، ودبي للعقارات. هذه الخبرة توفر عليك وقت ومتاعب كثيرة يوم النقل.",
    image: "/12-icon.jpg",
  },
  {
    title: "تأمين شامل وضمان مكتوب ضد التلف",
    description:
      'كثير من شركات نقل الاثاث في دبي تقول "مؤمنة" بدون ما توضح شنو يعني هذا الكلام. عندنا، التأمين يغطي الكسر والخدش أثناء النقل. لو صار أي ضرر — وهو شيء نادر — نصلح أو نعوض وفق سياسة مكتوبة وواضحة تستلمها مع عرض السعر. مو كلام عام. ضمان مكتوب وموقع.',
    image: "/Insurance.jpg",
  },
  {
    title: "أسعار ثابتة ومكتوبة — بدون دفعة مقدمة",
    description:
      'السعر اللي نتفق عليه هو السعر النهائي. ما في رسوم تُضاف يوم النقل، ولا تكاليف "مفاجئة" للسلالم أو الكراتين. وما نطلب أي دفعة مقدمة. تدفع بعد ما ننتهي وأنت راضي عن كل شيء.',
    image: "/Pricing.jpg",
  },
  {
    title: "فريق عمل مدرب ومتفرغ — ليسوا عمالة يومية",
    description:
      "الفرق بيننا وبين كثير من شركات نقل الاثاث هو إن فريقنا ثابت. نفس الأشخاص يشتغلون معنا بشكل دائم، مو عمال مياومة يتغيرون كل يوم. كل واحد فيهم متدرب على التعامل مع الاثاث الحساس والثقيل، ويلبس زي موحد ويحمل بطاقة تعريف.",
    image: "/team.jpg",
  },
  {
    title: "خدمة 7 أيام في الأسبوع مع تنظيف بعد النقل",
    description:
      "متاحين كل أيام الأسبوع، بما فيها الجمعة والعطلات. وبعد ما ننتهي من النقل والتركيب، فريقنا ينظف الموقع ويرفع كل مخلفات التغليف والكراتين. تستلم بيتك الجديد نظيف وجاهز.",
    image: "/7-service.jpg",
  },
  {
    title: "شاحنات مغلقة ومكيّفة",
    description:
      "عندنا أسطول سيارات نقل اثاث مغلقة بأحجام مختلفة (1.5 طن، 3 طن، 7 طن). كلها مجهزة بأنظمة تثبيت تمنع الاثاث من الحركة أثناء الطريق. والأهم إنها مغلقة ومكيّفة، فاثاثك محمي من حرارة دبي والغبار.",
    image: "/truck.jpg",
  },
];

/** Six reasons. <1024: icon at the start, text beside it (compact). ≥1024: three-column stacked cards. */
export function WhySection() {
  return (
    <Section id="why" tone="alt">
      <SectionHeading title="لماذا الأمين نقل اثاث من افضل شركات نقل الاثاث في دبي؟" />
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="grid grid-cols-[56px_1fr] items-start gap-x-4 rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-4 shadow-sm lg:block lg:p-6"
          >
            <Image
              src={f.image}
              alt={f.title}
              width={64}
              height={64}
              sizes="64px"
              className="row-span-3 size-14  object-contain lg:mb-4 lg:size-16"
            />
            <h3 className="text-xl leading-snug lg:mb-2">{f.title}</h3>
            <p className="mt-1 text-sm lg:mt-2">{f.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
