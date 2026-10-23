import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/utils/FaqsSection";
import { AREA_HREF, SERVICE_HREF } from "@/components/services/constants";
import {
  AreaChips,
  CtaBanner,
  DataTable,
  FeatureList,
  InlineLink,
  ServiceFigure,
  ServiceSection,
  Steps,
  SubService,
  SubServices,
} from "@/components/services/ServiceContent";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import HeroImage from "@/public/شركة-الزايد-نقل-اثاث-دبي.jpg";
import PackingImage from "@/public/فك-وتغليف-اثاث-احترافي-الزايد-دبي.jpg";
import VillaImage from "@/public/الزايد-نقل-اثاث-دبي.jpg";

export const metadata: Metadata = {
  title: "تخزين اثاث دبي | الزايد نقل اثاث دبي",
  description:
    "تخزين اثاث في دبي في مستودعات مكيّفة ومراقبة بالكاميرات 24 ساعة، من أسبوع إلى عدة أشهر، مع الاستلام من المنزل والتوصيل عند الطلب.",
};

const whatsappText = "مرحباً، أرغب في معرفة سعر تخزين اثاث في دبي";

export default function StoragePage() {
  return (
    <ServicePageLayout
      currentHref={SERVICE_HREF.storage}
      whatsappText={whatsappText}
      hero={{
        title: "تخزين اثاث في دبي",
        image: HeroImage,
        imageAlt: "شاحنة الزايد نقل اثاث المغلقة لنقل الأثاث إلى مستودع التخزين في دبي",
        intro: (
          <>
            <p>
              أحياناً ينتهي عقد الإيجار قبل أن يجهز المنزل الجديد، أو تبدأ أعمال
              تجديد تحتاج إفراغ الغرف، أو تسافر لأشهر ولا تريد دفع إيجار شقة
              لأثاث فقط. في هذه الحالات يكون التخزين المؤقت أوفر من أي حل آخر.
            </p>
            <p>
              في الزايد نقل اثاث دبي نوفر مستودعات تخزين اثاث نظيفة وجافة
              ومكيّفة، مراقبة بالكاميرات على مدار الساعة. نستلم الأثاث من منزلك،
              ونعيده إليك عند الطلب، ضمن خدمات <Link href="/">نقل اثاث دبي</Link>{" "}
              المتكاملة.
            </p>
          </>
        ),
      }}
      below={
        <>
          <FAQSection title="أسئلة متكررة عن تخزين الاثاث" faqs={faqs} />
          <ReviewsSection />
          <ContactSection
            title="احجز مساحة تخزين اثاث في دبي"
            description="أرسل لنا صور الأثاث ومدة التخزين المتوقعة، وسنرسل لك السعر الشهري مع قائمة جرد مصورة بكل القطع."
          />
        </>
      }
    >
      <ServiceSection id="services" title="خدماتنا في تخزين الاثاث">
        <p>نغطي التخزين من لحظة خروج الأثاث من المنزل حتى عودته إليه.</p>
        <SubServices>
          <SubService title="التخزين قصير المدة">
            من أسبوع إلى شهر، ويناسب الفترة بين تسليم المنزل القديم واستلام
            الجديد. نحمّل الأثاث من المنزل القديم مباشرة إلى المستودع، ثم ننقله
            إلى المنزل الجديد في الموعد الذي تحدده.
          </SubService>
          <SubService title="التخزين طويل المدة">
            لمدة عدة أشهر، للمسافرين أو للعائلات التي انتقلت إلى منزل أصغر.
            نغلف الأثاث هنا بطريقة مختلفة عن النقل العادي، تسمح بمرور الهواء
            وتمنع تكوّن الرطوبة.
          </SubService>
          <SubService title="تخزين أثاث المكاتب والأرشيف">
            نخزن المكاتب والكراسي الزائدة وصناديق الأرشيف للشركات، ضمن صناديق
            مغلقة ومرقمة. ويمكن ربطها بخدمة{" "}
            <InlineLink href={SERVICE_HREF.offices}>
              نقل اثاث المكاتب في دبي
            </InlineLink>{" "}
            عند الانتقال إلى مكتب أصغر.
          </SubService>
          <SubService title="قائمة جرد مصورة">
            قبل التخزين نصوّر كل قطعة ونسجلها في قائمة جرد تستلم نسخة منها.
            هكذا تعرف بالضبط ما يوجد في المستودع وحالته عند الاستلام.
          </SubService>
          <SubService title="استرجاع جزئي عند الحاجة">
            إذا احتجت قطعة معينة قبل نهاية المدة، نخرجها ونوصلها إليك بموعد
            مسبق، دون إخراج باقي الأثاث.
          </SubService>
        </SubServices>
      </ServiceSection>

      <ServiceFigure
        src={PackingImage}
        alt="تغليف الأثاث بالبطانيات والنايلون استعداداً لتخزينه في مستودع الزايد بدبي"
      />

      <ServiceSection title="لماذا تختارنا لتخزين الاثاث؟">
        <FeatureList
          items={[
            {
              title: "مستودعات مكيّفة",
              text: "درجة حرارة مضبوطة تحمي الخشب والجلد والأقمشة من حرارة دبي ورطوبتها.",
            },
            {
              title: "مراقبة مستمرة",
              text: "كاميرات مراقبة تعمل 24 ساعة طوال أيام الأسبوع.",
            },
            {
              title: "الأثاث مرفوع عن الأرض",
              text: "يُوضع على منصات خشبية بعيداً عن أي رطوبة أرضية.",
            },
            {
              title: "نقل وتخزين من جهة واحدة",
              text: "الفريق الذي يغلف أثاثك هو نفسه الذي يخزنه ويعيده.",
            },
            {
              title: "مدة مرنة",
              text: "تدفع حسب المدة التي تحتاجها، ويمكنك تمديدها برسالة واتساب.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="خطوات تخزين الاثاث معنا">
        <Steps
          steps={[
            {
              title: "تحديد المساحة",
              text: "من صور الأثاث نقدّر الحجم المطلوب والسعر الشهري.",
            },
            {
              title: "التغليف للتخزين",
              text: "نفك القطع الكبيرة ونغلفها بمواد تناسب مدة التخزين.",
            },
            {
              title: "الجرد والتوثيق",
              text: "تستلم قائمة مصورة بكل القطع.",
            },
            {
              title: "النقل إلى المستودع",
              text: "بشاحنة مغلقة ومكيّفة، ثم ترتيب الأثاث على المنصات.",
            },
            {
              title: "الإعادة والتركيب",
              text: "عند الطلب ننقل الأثاث إلى منزلك، ونركبه في مكانه.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceFigure
        src={VillaImage}
        alt="فريق الزايد نقل اثاث يحمّل أثاث فيلا في دبي لنقله إلى التخزين"
      />

      <ServiceSection id="prices" title="أسعار تخزين الاثاث في دبي">
        <p>
          يُحسب سعر التخزين شهرياً حسب حجم الأثاث، وللفترات الأقصر من شهر يُحسب
          حسب المدة الفعلية.
        </p>
        <DataTable
          caption="أسعار تخزين الاثاث في دبي"
          columns={["حجم الأثاث", "السعر الشهري التقريبي (درهم)"]}
          rows={[
            ["بضع قطع أو محتويات استوديو", "300 – 500"],
            ["شقة غرفة أو غرفتين", "500 – 900"],
            ["شقة ثلاث غرف", "900 – 1,300"],
            ["فيلا كاملة", "1,300 – 2,000"],
            ["أرشيف أو أثاث مكتب", "حسب عدد الصناديق"],
          ]}
        />
        <p>
          يُضاف سعر النقل من المنزل وإليه حسب الحجم والمنطقة، ويصلك مكتوباً مع
          عرض السعر.
        </p>
      </ServiceSection>

      <ServiceSection title="المناطق التي نخدمها">
        <p>نستلم الأثاث للتخزين من كل مناطق دبي، ومنها:</p>
        <AreaChips
          items={[
            { label: "نقل اثاث دبي مارينا", href: AREA_HREF.marina },
            { label: "أبراج بحيرات جميرا", href: AREA_HREF.jlt },
            { label: "وسط مدينة دبي", href: AREA_HREF.downtown },
            { label: "الخليج التجاري", href: AREA_HREF.businessBay },
            { label: "نخلة جميرا", href: AREA_HREF.palm },
            { label: "جميرا", href: AREA_HREF.jumeirah },
            { label: "البرشاء", href: AREA_HREF.barsha },
            { label: "قرية جميرا الدائرية", href: AREA_HREF.jvc },
            { label: "ديرة", href: AREA_HREF.deira },
            { label: "بر دبي", href: AREA_HREF.burDubai },
          ]}
        />
        <p>
          وللحصول على أفضل حماية للأثاث المخزن، راجع خدمة{" "}
          <InlineLink href={SERVICE_HREF.packing}>تغليف اثاث في دبي</InlineLink>
          ، أو{" "}
          <InlineLink href={SERVICE_HREF.villas}>
            نقل اثاث الفلل في دبي
          </InlineLink>{" "}
          إذا كان التخزين جزءاً من نقل فيلا.
        </p>
      </ServiceSection>

      <CtaBanner whatsappText={whatsappText}>
        أرسل صور الأثاث ومدة التخزين المتوقعة عبر واتساب على 055 646 1731، ونرسل
        لك السعر الشهري مباشرة.
      </CtaBanner>
    </ServicePageLayout>
  );
}

const faqs = [
  {
    question: "ما أقل مدة للتخزين؟",
    answer: (
      <p>
        يمكن تخزين الأثاث لأسبوع واحد، وتدفع حسب المدة الفعلية. ويمكن تمديد
        المدة برسالة واتساب.
      </p>
    ),
  },
  {
    question: "هل المستودعات مكيّفة ومراقبة؟",
    answer: (
      <p>
        نعم، المستودعات مكيّفة وجافة، ومراقبة بكاميرات تعمل 24 ساعة طوال أيام
        الأسبوع.
      </p>
    ),
  },
  {
    question: "هل يمكنني استرجاع بعض القطع قبل نهاية المدة؟",
    answer: (
      <p>
        نعم، نخرج القطعة المطلوبة ونوصلها إليك بموعد مسبق، دون إخراج باقي
        الأثاث.
      </p>
    ),
  },
  {
    question: "هل تستلمون الأثاث من المنزل وتعيدونه؟",
    answer: (
      <p>
        نعم، نغلف الأثاث وننقله من منزلك إلى المستودع، ثم نعيده ونركبه في
        العنوان الذي تحدده.
      </p>
    ),
  },
  {
    question: "كيف أعرف حالة أثاثي أثناء التخزين؟",
    answer: (
      <p>
        تستلم قائمة جرد مصورة بكل القطع عند التخزين، ونراجعها معك عند التسليم
        للتأكد من سلامة كل قطعة.
      </p>
    ),
  },
];
