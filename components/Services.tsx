import {
  Boxes,
  Building2Icon,
  Castle,
  Download,
  HouseIcon,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      icon: <HouseIcon className="text-primary" strokeWidth={1} size={60} />,
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
      icon: <Castle className="text-primary" strokeWidth={1} size={60} />,
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
        <Building2Icon className="text-primary" strokeWidth={1} size={60} />
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
      icon: <Boxes className="text-primary" strokeWidth={1} size={60} />,
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
      icon: <Wrench className="text-primary" strokeWidth={1} size={60} />,
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
      icon: <Warehouse className="text-primary" strokeWidth={1} size={60} />,
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
      icon: <Truck className="text-primary" strokeWidth={1} size={60} />,
    },
  ],
  className,
  desc,
  nums,
  heading,
}: Experience1Props) => {
  return (
    <section className={cn("pt-16 lg:pt-28 md:px-0 px-4", className)}>
      <div className="max-w-6xl mx-auto space-y-10 ">
        {heading ? (
          <>
            <h2 className="md:text-4xl font-extrabold text-3xl">{heading}</h2>
          </>
        ) : (
          <>
            <h2 className="md:text-4xl font-extrabold text-3xl">
              خدمات نقل الاثاث في دبي
            </h2>{" "}
          </>
        )}
        {desc && (
          <>
            <div className="mt-5 text-muted-foreground max-w-4xl flex flex-wrap gap-y-1">
              {desc}
            </div>
          </>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {experience.slice(0, nums || 4).map((exp, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-b pb-10"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                {exp.icon}
              </div>
              <div className="">
                <h3 className="my-4 text-2xl font-bold tracking-tighter">
                  {exp.title}
                </h3>
                <div className="text-muted-foreground space-y-2">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {experience.slice(nums || 4, 7).map((exp, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-b pb-10"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                {exp.icon}
              </div>
              <div className="">
                <h3 className="my-4 text-2xl font-bold tracking-tighter">
                  {exp.title}
                </h3>
                <div className="text-muted-foreground space-y-2">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
