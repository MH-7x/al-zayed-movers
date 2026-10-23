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
import HeroImage from "@/public/تركيب-وتنظيف-اثاث-بعد-النقل-الزايد-دبي.jpg";
import PackingImage from "@/public/فك-وتغليف-اثاث-احترافي-الزايد-دبي.jpg";
import SurveyImage from "@/public/معاينة-مجانية-نقل-اثاث-الزايد-دبي.jpg";

export const metadata: Metadata = {
  title: "فك وتركيب اثاث دبي | الزايد نقل اثاث دبي",
  description:
    "فك وتركيب اثاث في دبي على يد نجارين متخصصين: غرف النوم والخزائن وأثاث ايكيا، وتثبيت الشاشات والستائر. خدمة مستقلة أو ضمن النقل.",
};

const whatsappText = "مرحباً، أرغب في عرض سعر لخدمة فك وتركيب اثاث في دبي";

export default function AssemblyPage() {
  return (
    <ServicePageLayout
      currentHref={SERVICE_HREF.assembly}
      whatsappText={whatsappText}
      hero={{
        title: "فك وتركيب اثاث في دبي",
        image: HeroImage,
        imageAlt: "نجارو الزايد نقل اثاث يركبون سريراً ويثبتون شاشة في شقة بدبي",
        intro: (
          <>
            <p>
              خزانة تُفك بشكل خاطئ قد لا تعود أبوابها مستقيمة أبداً، وسرير يُركّب
              ببرغي ناقص يبدأ بالاهتزاز بعد أسابيع. لذلك نسند الفك والتركيب إلى
              نجارين متخصصين يعرفون أنظمة التثبيت المختلفة لكل نوع من الأثاث.
            </p>
            <p>
              تتوفر الخدمة ضمن <Link href="/">نقل اثاث دبي</Link> الكامل، أو
              مستقلة إذا اشتريت أثاثاً جديداً أو أردت إعادة ترتيب غرفة داخل
              المنزل نفسه.
            </p>
          </>
        ),
      }}
      below={
        <>
          <FAQSection title="أسئلة متكررة عن فك وتركيب الاثاث" faqs={faqs} />
          <ReviewsSection />
          <ContactSection
            title="احجز نجاراً لفك وتركيب اثاثك في دبي"
            description="أرسل لنا صور القطع أو أسماء موديلاتها، وسنرسل لك السعر وموعد زيارة النجار، مع ضمان على التركيب."
          />
        </>
      }
    >
      <ServiceSection id="services" title="خدماتنا في فك وتركيب الاثاث">
        <p>
          يحمل النجار معه أدوات كهربائية ويدوية ومستلزمات تثبيت احتياطية، فلا
          يتوقف العمل بسبب برغي مفقود.
        </p>
        <SubServices>
          <SubService title="غرف النوم والخزائن">
            نفك ونركب الأسرّة بكل أحجامها والخزائن ذات الأبواب المفصلية
            والمنزلقة. ونضبط المفاصل بعد التركيب حتى تغلق الأبواب باستواء.
          </SubService>
          <SubService title="تركيب اثاث ايكيا وهوم سنتر">
            نركب الأثاث الجديد المشترى في صناديق مسطحة، مثل خزائن PAX ووحدات
            التلفزيون والمكاتب. ونتبع تعليمات الشركة المصنعة، مع خبرة تختصر
            الوقت إلى نصفه.
          </SubService>
          <SubService title="تثبيت الأثاث في الجدار">
            نثبّت الخزائن الطويلة والأرفف في الجدار بمثابت الأمان المرفقة بها،
            خاصة في غرف الأطفال. هذه الخطوة تمنع انقلاب القطعة إذا تسلقها طفل.
          </SubService>
          <SubService title="تركيب الشاشات والستائر واللوحات">
            نثبت الشاشات على الجدار بحوامل تناسب وزنها، ونعلق الستائر واللوحات
            والمرايا والأرفف الجدارية بمستوى دقيق.
          </SubService>
          <SubService title="الفك الموثّق قبل النقل">
            نصور كل قطعة قبل فكها، ونحفظ براغيها في كيس مرقم يُلصق عليها. هكذا
            تُركّب في المنزل الجديد كما كانت، حتى لو ركبها نجار آخر.
          </SubService>
        </SubServices>
      </ServiceSection>

      <ServiceFigure
        src={PackingImage}
        alt="نجار الزايد نقل اثاث يفك سرير خشبي ويرقّم قطعه قبل النقل في دبي"
      />

      <ServiceSection title="لماذا تختارنا لفك وتركيب الاثاث؟">
        <FeatureList
          items={[
            {
              title: "نجارون متفرغون",
              text: "التركيب عملهم الأساسي، وليس مهمة جانبية يؤديها عامل نقل.",
            },
            {
              title: "أدوات ومستلزمات كاملة",
              text: "براغٍ ومفاصل احتياطية مع كل فريق.",
            },
            {
              title: "ضمان على التركيب",
              text: "إذا احتاج باب أو درج إلى ضبط خلال الأيام الأولى، نعود لضبطه.",
            },
            {
              title: "تنظيف بعد العمل",
              text: "نرفع الكراتين والفلين ونشارة الثقوب من الغرفة.",
            },
            {
              title: "سعر لكل قطعة",
              text: "تعرف التكلفة قبل بدء العمل، دون رسوم مفاجئة.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="خطوات فك وتركيب الاثاث معنا">
        <Steps
          steps={[
            {
              title: "أرسل القائمة",
              text: "صور القطع أو أسماء موديلاتها عبر واتساب على 055 646 1731.",
            },
            {
              title: "عرض سعر لكل قطعة",
              text: "نرسل التكلفة الإجمالية والوقت المتوقع.",
            },
            {
              title: "زيارة النجار",
              text: "يصل في الموعد ومعه الأدوات والمستلزمات.",
            },
            {
              title: "الفك أو التركيب والضبط",
              text: "نختبر الأبواب والأدراج والثبات بعد كل قطعة.",
            },
            {
              title: "التسليم والدفع",
              text: "تراجع العمل وتدفع بعد التأكد من كل شيء.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceFigure
        src={SurveyImage}
        alt="مشرف الزايد نقل اثاث يراجع قائمة القطع المطلوب تركيبها مع العميلة"
      />

      <ServiceSection id="prices" title="أسعار فك وتركيب الاثاث في دبي">
        <p>
          الفك والتركيب مشمولان في أي عملية نقل كاملة. أما الخدمة المستقلة
          فتُحسب لكل قطعة، بحد أدنى 150 درهماً للزيارة.
        </p>
        <DataTable
          caption="أسعار فك وتركيب الاثاث في دبي"
          columns={["القطعة", "السعر التقريبي (درهم)"]}
          rows={[
            ["سرير (فك أو تركيب)", "100 – 200"],
            ["خزانة بابين أو ثلاثة أبواب", "150 – 300"],
            ["خزانة كبيرة أو بأبواب منزلقة", "300 – 500"],
            ["طاولة طعام", "80 – 150"],
            ["تثبيت شاشة على الجدار", "100 – 150"],
            ["تركيب ستائر (للنافذة)", "50 – 80"],
            ["رف جداري أو لوحة", "50 – 80"],
          ]}
        />
        <p>يرتفع السعر للقطع المصنوعة حسب الطلب أو ذات الأنظمة المعقدة.</p>
      </ServiceSection>

      <ServiceSection title="المناطق التي نخدمها">
        <p>
          يصل نجارونا إلى كل مناطق دبي، وغالباً في اليوم نفسه أو اليوم التالي:
        </p>
        <AreaChips
          items={[
            { label: "قرية جميرا الدائرية", href: AREA_HREF.jvc },
            { label: "البرشاء", href: AREA_HREF.barsha },
            { label: "دبي مارينا", href: AREA_HREF.marina },
            { label: "أبراج بحيرات جميرا", href: AREA_HREF.jlt },
            { label: "وسط مدينة دبي", href: AREA_HREF.downtown },
            { label: "الخليج التجاري", href: AREA_HREF.businessBay },
            { label: "نخلة جميرا", href: AREA_HREF.palm },
            { label: "جميرا", href: AREA_HREF.jumeirah },
            { label: "ديرة", href: AREA_HREF.deira },
            { label: "بر دبي", href: AREA_HREF.burDubai },
          ]}
        />
        <p>
          وإذا كان التركيب جزءاً من انتقال كامل، راجع{" "}
          <InlineLink href={SERVICE_HREF.apartments}>
            نقل اثاث الشقق في دبي
          </InlineLink>{" "}
          أو{" "}
          <InlineLink href={SERVICE_HREF.villas}>
            نقل اثاث الفلل في دبي
          </InlineLink>
          .
        </p>
      </ServiceSection>

      <CtaBanner whatsappText={whatsappText}>
        أرسل صور القطع التي تحتاج إلى فك أو تركيب عبر واتساب على 055 646 1731،
        ونرسل لك السعر وموعد الزيارة.
      </CtaBanner>
    </ServicePageLayout>
  );
}

const faqs = [
  {
    question: "هل تركبون أثاث ايكيا الجديد من الصندوق؟",
    answer: (
      <p>
        نعم، نركب أثاث ايكيا وهوم سنتر وغيرهما من الصناديق المسطحة، ونرفع
        الكراتين بعد الانتهاء.
      </p>
    ),
  },
  {
    question: "هل تثبتون الخزائن في الجدار؟",
    answer: (
      <p>
        نعم، نثبت الخزائن الطويلة والأرفف بمثابت الأمان، وننصح بذلك دائماً في
        المنازل التي فيها أطفال.
      </p>
    ),
  },
  {
    question: "ماذا لو فُقدت بعض البراغي؟",
    answer: (
      <p>
        يحمل النجار مستلزمات احتياطية بالمقاسات الشائعة. وإذا كانت القطعة نادرة
        نأتي بها ونكمل التركيب في أقرب وقت.
      </p>
    ),
  },
  {
    question: "هل يمكن طلب الفك فقط؟",
    answer: (
      <p>
        نعم، مثلاً قبل بيع الأثاث المستعمل أو قبل الشحن. نفك القطع ونرقمها
        ونحفظ براغيها معها.
      </p>
    ),
  },
  {
    question: "هل تضمنون التركيب؟",
    answer: (
      <p>
        نعم، إذا احتاج باب أو درج إلى ضبط بعد التركيب بأيام قليلة، نعود
        ونضبطه دون تكلفة إضافية.
      </p>
    ),
  },
];
