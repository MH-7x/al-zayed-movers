import {
  Boxes,
  Building2Icon,
  Castle,
  HouseIcon,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import React, { ReactNode } from "react";

import { Section, SectionHeading } from "@/components/ui/Section";

interface ExperienceItem {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
}

interface Experience1Props {
  heading?: string;
  desc?: ReactNode;
  buttonText?: string;
  buttonUrl?: string;
  experience?: ExperienceItem[];
  className?: string;
  nums?: number;
  /** band tone: `alt` on the home page, `auto` on pages that alternate by position */
  tone?: "alt" | "auto" | "default";
}

export const Services = ({
  experience = [
    {
      title: "نقل اثاث المنازل والشقق في دبي",
      description: (
        <>
          {" "}
          <p>
            سواء كنت في استوديو صغير أو شقة 3 غرف نوم، نتولى كل شيء. نبدأ بفك
            غرف النوم والخزائن واثاث ايكيا وهوم سنتر، ونغلف كل قطعة على حدة.
            المطبخ والأواني الزجاجية والتحف لها تغليف خاص بمواد حماية متعددة
            الطبقات.
          </p>{" "}
          <p>
            وقبل يوم النقل، نتواصل مع إدارة المبنى لحجز مصعد الخدمة واستخراج
            تصريح الانتقال (NOC). هذه الخطوة يتجاهلها كثير من الناس ثم يتفاجؤون
            يوم النقل بأن الأمن لا يسمح لهم بالدخول. نحن نتولى هذا الموضوع
            بالكامل نيابةً عنك.
          </p>
        </>
      ),
      icon: <HouseIcon className="text-brand" strokeWidth={1.6} size={26} />,
    },
    {
      title: "نقل اثاث الفلل والقصور",
      description: (
        <>
          <p>
            الفلل لها متطلبات مختلفة عن الشقق. القطع أكبر حجماً (مجالس عربية،
            طاولات طعام طويلة، بيانو أحياناً)، والمساحات أوسع، وعدد الغرف أكثر.
          </p>
          <p>
            نوفر فرق عمل كبيرة تتراوح بين 6 و10 أشخاص لإتمام نقل الفيلا خلال يوم
            واحد. ولو كانت قطعة اثاث لا تمر من الباب أو السلم، عندنا أوناش
            كهربائية لرفعها وتنزيلها عبر الشرفة أو النافذة. نعمل في المرابع
            العربية ودبي هيلز ونخلة جميرا وتلال الإمارات وداماك هيلز، ونعرف
            متطلبات كل مجمع وإجراءات الدخول والخروج فيه.
          </p>
        </>
      ),
      icon: <Castle className="text-brand" strokeWidth={1.6} size={26} />,
    },
    {
      title: "نقل اثاث المكاتب والشركات في دبي",
      description: (
        <>
          <p>
            نقل المكاتب يختلف لأن أي تأخير يعني تعطل العمل. لهذا نجدول النقل
            خارج ساعات الدوام أو في عطلة نهاية الأسبوع حتى لا يتأثر فريقك.
          </p>
          <p>
            نتعامل مع أجهزة الكمبيوتر والسيرفرات ومعدات الشبكات بحذر. كل جهاز
            يُغلف بشكل منفصل ويُنقل في صناديق مخصصة. قواطع المكاتب والأرفف
            والمكاتب التنفيذية تُفك وتُعاد تركيبها في الموقع الجديد. والمستندات
            والملفات السرية تُعامل بخصوصية كاملة.
          </p>
        </>
      ),
      icon: (
        <Building2Icon className="text-brand" strokeWidth={1.6} size={26} />
      ),
    },
    {
      title: "تغليف وتعبئة الاثاث",
      description: (
        <>
          <p>
            كل مواد التغليف مشمولة في السعر المتفق عليه، بدون تكلفة إضافية.
            نستخدم كراتين مقواة وبابل رول (لفائف فقاعية) وفوم حماية وبطانيات
            ونايلون ستريتش.
          </p>
          <p>
            كل صندوق يُرقم ويُكتب عليه اسم الغرفة ومحتوياته. هذا يوفر عليك وقت
            كبير عند فتح الصناديق في البيت الجديد. القطع الحساسة مثل شاشات
            التلفزيون والثريات والتحف والمرايا واللوحات لها طريقة تغليف مختلفة
            تمنع الخدش والكسر تماماً.
          </p>
        </>
      ),
      icon: <Boxes className="text-brand" strokeWidth={1.6} size={26} />,
    },
    {
      title: "فك وتركيب الاثاث في دبي",
      description: (
        <>
          <p>
            معنا نجارون متخصصون يفكون ويركبون كل أنواع الاثاث: ايكيا، هوم سنتر،
            الاثاث الإيطالي والعصري. غرف النوم، الخزائن، طاولات الطعام، الستائر،
            رفوف الحائط، وحتى تثبيت التلفزيون على الجدار.
          </p>
          <p>
            قبل فك أي قطعة، نصورها. هذا يضمن إعادة تركيبها بالشكل الصحيح في
            الموقع الجديد بدون أي خلل.
          </p>
        </>
      ),
      icon: <Wrench className="text-brand" strokeWidth={1.6} size={26} />,
    },
    {
      title: "تخزين الاثاث في دبي ",
      description: (
        <>
          <p>
            أحياناً ما بين تسليم البيت القديم واستلام الجديد تكون هناك فترة
            فاصلة. في هذه الحالة، نوفر مستودعات تخزين اثاث نظيفة وجافة ومتحكم
            بدرجة حرارتها لحماية الاثاث من رطوبة دبي وحرارتها.
          </p>
          <p>
            المستودعات مراقبة بكاميرات CCTV على مدار الساعة. تقدر تخزن لأسبوع أو
            لعدة أشهر، حسب ما تحتاج.
          </p>
        </>
      ),
      icon: <Warehouse className="text-brand" strokeWidth={1.6} size={26} />,
    },
    {
      title: "نقل عفش دبي ",
      description: (
        <>
          <p>
            ما تحتاج تنقل بيت كامل عشان تتصل فينا. لو عندك ثلاجة جديدة تبي
            توصلها، أو أريكة تبي تنقلها من شقة لشقة، أو حتى خزنة (Safe) ثقيلة،
            ننقلها لك.
          </p>
          <p>
            عندنا سيارات نقل اثاث بأحجام مختلفة: بيك أب 1.5 طن، 3 طن، وشاحنات
            مغلقة أكبر. الخدمة متوفرة في نفس اليوم داخل دبي.
          </p>
        </>
      ),
      icon: <Truck className="text-brand" strokeWidth={1.6} size={26} />,
    },
  ],
  className,
  desc,
  nums,
  heading,
  tone = "alt",
}: Experience1Props) => {
  // `nums` / `className` are kept for API compatibility with the emirate pages.
  void nums;
  return (
    <Section id="services" tone={tone} className={className}>
      <SectionHeading title={heading ?? "خدمات نقل الاثاث في دبي"} description={desc} />
      <div className="grid gap-4 md:grid-cols-2">
        {experience.slice(0, 7).map((exp, index) => (
          <article
            key={index}
            className="rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-6 shadow-sm"
          >
            {exp.icon && (
              <div className="mb-4 grid size-12 place-items-center rounded-md bg-brand-soft [&>svg]:size-6.5 [&>svg]:text-brand [&>svg]:[stroke-width:1.6]">
                {exp.icon}
              </div>
            )}
            <h3 className="mb-2 text-xl leading-snug">{exp.title}</h3>
            <div className="space-y-3 text-sm">{exp.description}</div>
          </article>
        ))}
      </div>
    </Section>
  );
};
