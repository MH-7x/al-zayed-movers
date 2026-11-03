import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceImages } from "@/components/services/service-images";
import { SERVICE_HREF } from "@/components/services/constants";
import { InlineLink } from "@/components/services/ServiceContent";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  title: string;
  description: ReactNode;
  /** photo of the service, shown at the top of its card */
  image?: StaticImageData;
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
            سواء كنت في استوديو صغير أو{" "}
            <InlineLink href={SERVICE_HREF.apartments}>شقة 3 غرف نوم</InlineLink>
            ، نتولى كل شيء. نبدأ بفك{" "}
            <InlineLink href={SERVICE_HREF.assembly}>
              غرف النوم والخزائن واثاث ايكيا
            </InlineLink>{" "}
            وهوم سنتر، ونغلف كل قطعة على حدة. المطبخ والأواني الزجاجية والتحف لها تغليف خاص بمواد حماية متعددة
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
      image: serviceImages.house,
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
            نوفر فرق عمل كبيرة تتراوح بين 6 و10 أشخاص لإتمام{" "}
            <InlineLink href={SERVICE_HREF.villas}>
              نقل الفيلا خلال يوم واحد
            </InlineLink>
            . ولو كانت قطعة اثاث لا تمر من الباب أو السلم، عندنا أوناش
            كهربائية لرفعها وتنزيلها عبر الشرفة أو النافذة. نعمل في المرابع
            العربية ودبي هيلز ونخلة جميرا وتلال الإمارات وداماك هيلز، ونعرف
            متطلبات كل مجمع وإجراءات الدخول والخروج فيه.
          </p>
        </>
      ),
      image: serviceImages.villas,
    },
    {
      title: "نقل اثاث المكاتب والشركات في دبي",
      description: (
        <>
          <p>
            <InlineLink href={SERVICE_HREF.offices}>نقل المكاتب</InlineLink>{" "}
            يختلف
            لأن أي تأخير يعني تعطل العمل. لهذا نجدول النقل
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
      image: serviceImages.offices,
    },
    {
      title: "تغليف وتعبئة الاثاث",
      description: (
        <>
          <p>
            كل <InlineLink href={SERVICE_HREF.packing}>مواد التغليف</InlineLink>{" "}
            مشمولة في السعر المتفق عليه، بدون تكلفة إضافية.
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
      image: serviceImages.packing,
    },
    {
      title: "فك وتركيب الاثاث في دبي",
      description: (
        <>
          <p>
            معنا نجارون متخصصون{" "}
            <InlineLink href={SERVICE_HREF.assembly}>
              يفكون ويركبون كل أنواع الاثاث
            </InlineLink>
            : ايكيا، هوم سنتر،
            الاثاث الإيطالي والعصري. غرف النوم، الخزائن، طاولات الطعام، الستائر،
            رفوف الحائط، وحتى تثبيت التلفزيون على الجدار.
          </p>
          <p>
            قبل فك أي قطعة، نصورها. هذا يضمن إعادة تركيبها بالشكل الصحيح في
            الموقع الجديد بدون أي خلل.
          </p>
        </>
      ),
      image: serviceImages.assembly,
    },
    {
      title: "تخزين الاثاث في دبي ",
      description: (
        <>
          <p>
            أحياناً ما بين تسليم البيت القديم واستلام الجديد تكون هناك فترة
            فاصلة. في هذه الحالة، نوفر{" "}
            <InlineLink href={SERVICE_HREF.storage}>مستودعات تخزين اثاث</InlineLink>{" "}
            نظيفة وجافة ومتحكم
            بدرجة حرارتها لحماية الاثاث من رطوبة دبي وحرارتها.
          </p>
          <p>
            المستودعات مراقبة بكاميرات CCTV على مدار الساعة. تقدر تخزن لأسبوع أو
            لعدة أشهر، حسب ما تحتاج.
          </p>
        </>
      ),
      image: serviceImages.storage,
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
      image: serviceImages.fleet,
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
  const items = experience.slice(0, 7);
  return (
    <Section id="services" tone={tone} className={className}>
      <SectionHeading
        title={heading ?? "خدمات نقل الاثاث في دبي"}
        description={desc}
      />
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {items.map((exp, index) => {
          // an odd last card spans both columns and lays its photo beside the text
          const wide = items.length % 2 === 1 && index === items.length - 1;
          return (
            <article
              key={index}
              className={cn(
                "flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm",
                wide && "md:col-span-2 md:flex-row",
              )}
            >
              {exp.image && (
                <div
                  className={cn(
                    "relative aspect-2/1 shrink-0 overflow-hidden",
                    wide && "md:aspect-auto md:w-1/2",
                  )}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 570px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1 bg-primary"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2 text-xl leading-snug">{exp.title}</h3>
                <div className="space-y-3 text-sm">{exp.description}</div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};
