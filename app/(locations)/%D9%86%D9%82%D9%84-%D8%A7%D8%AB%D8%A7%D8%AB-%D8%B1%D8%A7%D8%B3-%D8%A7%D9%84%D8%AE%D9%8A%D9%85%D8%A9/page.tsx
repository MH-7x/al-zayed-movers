import { CircleHelp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import HeroImage from "@/public/img/نقل-اثاث-راس-الخيمة-امام-المنزل.jpg";
import QuoteImage from "@/public/img/معاينة-نقل-اثاث-فيلا-راس-الخيمة.jpg";
import RouteImage from "@/public/img/نقل-اثاث-دبي-راس-الخيمة-طريق-الامارات.jpg";
import AreasImage from "@/public/img/نقل-اثاث-ميناء-العرب-راس-الخيمة.jpg";
import { Services } from "@/components/Services";
import { serviceImages } from "@/components/services/service-images";
import { LocProcessSection } from "@/components/utils/LocProcessSection";
import { FAQSection } from "@/components/utils/FaqsSection";
import { RasAlKhaimahFaqs } from "@/lib/faqsData";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/location/LocationSection";
import { SectionHeading } from "@/components/location/SectionHeading";
import { QuoteActions } from "@/components/location/QuoteActions";
import { LocationHero } from "@/components/location/LocationHero";
import { FactsStrip } from "@/components/location/FactsStrip";
import { RouteSection } from "@/components/location/RouteSection";
import { ImageBanner } from "@/components/location/ImageBanner";
import { QuoteImageSection } from "@/components/location/QuoteImageSection";
import { InfoCardGrid } from "@/components/location/InfoCardGrid";
import { AreaChips } from "@/components/location/AreaChips";
import { DataTable } from "@/components/location/DataTable";
import { Callout } from "@/components/location/Callout";
import { ChecklistCard } from "@/components/location/ChecklistCard";
import { CtaBand } from "@/components/location/CtaBand";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

export const metadata: Metadata = MetadataTemplate({
  title: "شركة نقل اثاث راس الخيمة | نقل اثاث رأس الخيمة – الزايد",
  desc:
    "الزايد نقل اثاث راس الخيمة بخبرة 12 سنة: نقل داخل الإمارة ومن دبي والشارقة، فك وتركيب وتغليف، تأمين شامل، بدون دفعة مقدمة. واتساب 055 6461731.",
  path: "/%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%B1%D8%A7%D8%B3-%D8%A7%D9%84%D8%AE%D9%8A%D9%85%D8%A9",
  image: {
    path: "/img/نقل-اثاث-راس-الخيمة-امام-المنزل.jpg",
    alt: "شاحنة الزايد نقل اثاث أمام منزل في رأس الخيمة مع جبل جيس في الخلفية",
  },
});

const linkClass = "font-bold text-brand underline underline-offset-4";
const whiteLinkClass = "font-bold text-white underline underline-offset-4";

export const RasAlKhaimahPage = () => {
  const schema = buildPageSchema({
    page: "rasAlKhaimah",
    name: "شركة نقل اثاث راس الخيمة | نقل اثاث رأس الخيمة – الزايد",
    description: "الزايد نقل اثاث راس الخيمة بخبرة 12 سنة: نقل داخل الإمارة ومن دبي والشارقة، فك وتركيب وتغليف، تأمين شامل، بدون دفعة مقدمة. واتساب 055 6461731.",
    image: "/img/نقل-اثاث-راس-الخيمة-امام-المنزل.jpg",
    imageWidth: 1000,
    imageHeight: 495,
  });
  return (
    <main>
      <JsonLd data={schema} />
      <LocationHero
        image={HeroImage}
        imageAlt="شاحنة الزايد نقل اثاث أمام منزل في رأس الخيمة مع جبل جيس في الخلفية"
        title="نقل اثاث راس الخيمة: نقل آمن داخل الإمارة ومن دبي إليها"
      >
        <p>
          تنتقل إلى شقة في أبراج جلفار؟ أو تترك فيلتك في دبي لتسكن في ميناء
          العرب؟ في الحالتين سيخطر لك سؤالان: من سينقل كل هذا الأثاث بأمان، وكم
          سيكلّف؟
        </p>
        <p>
          نتولى في الزايد لنقل الاثاث نقل اثاث راس الخيمة للمنازل والفلل
          والمكاتب: داخل الإمارة نفسها، أو بينها وبين دبي والشارقة وباقي
          الإمارات. خبرتنا في هذا العمل تزيد عن 12 سنة، وكل نقلة معنا تشمل الفك
          والتركيب والتغليف، وشاحنات مغلقة ومكيّفة، وتأميناً شاملاً على كل قطعة
          ننقلها. ولن نطلب منك أي دفعة مقدمة.
        </p>
        <p>
          أرسل صور أثاثك وعنواني الانطلاق والوصول على واتساب، ونرد عليك بتقدير
          فوري للسعر. وإذا كنت تفضّل أن نرى المكان بأنفسنا، نأتيك بمعاينة مجانية
          ونعطيك السعر في الموقع. وإن كنت تقارن بين أكثر من شركة نقل اثاث في رأس
          الخيمة، فستجد في هذه الصفحة الأسئلة التي تستحق أن تطرحها على أي شركة
          قبل الحجز.
        </p>
      </LocationHero>

      <FactsStrip facts={facts} />

      <QuoteImageSection
        title="احصل على عرض سعر لنقل الأثاث في رأس الخيمة خلال دقائق"
        image={QuoteImage}
        imageAlt="معاينة نقل اثاث فيلا في رأس الخيمة"
      >
        <p>
          أرسل صور غرفك وعنواني الانطلاق والوصول على واتساب، ونرد عليك بتقدير
          فوري للسعر. وإذا كنت تفضّل أن نرى المكان بأنفسنا، نأتيك بمعاينة مجانية
          في الفيلا أو الشقة ونعطيك السعر في الموقع.
        </p>
        <p>
          عرض السعر واضح قبل الحجز، وما نتفق عليه هو ما تدفعه في النهاية، بدون
          دفعة مقدمة وبدون رسوم خفية. تواصل معنا اليوم على واتساب على الرقم
          0556461731.
        </p>
      </QuoteImageSection>

      <Services
        tone="auto"
        nums={4}
        heading="خدمات نقل اثاث رأس الخيمة حسب نوع العقار"
        experience={services}
      />

      <RouteSection
        title="نقل اثاث من دبي إلى رأس الخيمة (والعكس)"
        image={RouteImage}
        imageAlt="شاحنة الزايد نقل اثاث على طريق الإمارات بين دبي ورأس الخيمة"
        badge="دبي ⇄ رأس الخيمة: نحو 110 – 120 كم في الاتجاهين"
      >
        <p>
          ننقل الأثاث بين دبي ورأس الخيمة في الاتجاهين. المسافة بينهما تقارب 110
          إلى 120 كيلومتراً حسب الطريق: شارع الشيخ محمد بن زايد (E311) مروراً
          بالشارقة، أو شارع الإمارات (E611) وهو أطول قليلاً. نختار الطريق يوم
          النقل حسب نقطة الانطلاق في دبي وحركة السير في ذلك الوقت.
        </p>
        <p>
          الطريق نفسه ليس الجزء الأصعب. النقلة بين إمارتين فيها ثلاث مراحل:
          التحميل في دبي، ثم الرحلة، ثم التفريغ والتركيب في رأس الخيمة، ولكل
          مبنى شروطه. قد يسمح البرج في دبي باستخدام المصعد صباحاً فقط، وقد يغلق
          المجمع في رأس الخيمة بوابة الشاحنات بعد ساعة معينة. لهذا نسألك عن شروط
          المبنيين قبل أن نحدد الموعد، ونبني الجدول عليهما معاً.
        </p>
        <p>
          في رحلة طريق سريع تستغرق ساعة أو أكثر، الاهتزاز هو ما يضر الأثاث
          غالباً. نثبّت الحمولة داخل الشاحنة، ونفصل الزجاج والرخام عن القطع
          الخشبية، ونغلّف الكنب بطريقة لا تحبس الغبار على القماش. وفي أشهر الصيف
          تبقى الحمولة كلها داخل شاحنة مغلقة ومكيّفة، بعيداً عن الشمس طوال
          الطريق.
        </p>
        <p>
          ومن رأس الخيمة إلى دبي نتبع الترتيب نفسه، مع انتباه إضافي لمواقف
          التحميل في أبراج دبي لأنها محدودة في كثير من المباني.
        </p>

        <h3 className="pt-4 text-2xl font-bold">
          نقل اثاث من الشارقة وعجمان إلى رأس الخيمة
        </h3>
        <p>
          الشارقة وعجمان أقرب إلى رأس الخيمة من دبي، فتكون الرحلة أقصر، لكن
          التخطيط للمبنيين يبقى كما هو. وإذا كنت تنقل عفشك من{" "}
          <Link href="/نقل-أثاث-الشارقة" className={linkClass}>
            الشارقة
          </Link>{" "}
          أو{" "}
          <Link href="/نقل-اثاث-عجمان" className={linkClass}>
            عجمان
          </Link>{" "}
          أو أم القيوين، نتعامل معه بالطريقة نفسها.
        </p>
        <Callout className="mt-2">
          <p className="font-semibold text-secondary">
            تنتقل بين إمارتين؟ اكتب لنا على واتساب من أين وإلى أين، ونخبرك
            بالتكلفة والموعد المناسب للمبنيين.
          </p>
        </Callout>
      </RouteSection>

      <LocationSection>
        <ImageBanner
          src={AreasImage}
          alt="تحميل اثاث فيلا في ميناء العرب برأس الخيمة"
          className="mb-10 lg:mb-14"
        />
        <SectionHeading
          title="مناطق رأس الخيمة التي ننقل منها وإليها"
          desc={
            <p>
              ننقل الأثاث في المناطق السكنية الرئيسية في رأس الخيمة. ولأن كل
              منطقة لها طابع سكني مختلف، يختلف ما نحضّره لكل نقلة:
            </p>
          }
        />
        <InfoCardGrid
          cols={2}
          items={areasData.map((area) => ({
            title: area.type,
            children: (
              <>
                <AreaChips areas={area.areas} center={false} />
                <p className="pt-2">
                  <strong className="text-secondary">ما نحضّره للنقلة: </strong>
                  {area.prep}
                </p>
              </>
            ),
          }))}
        />
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          منطقتك ليست في الجدول؟ اكتب لنا اسمها على واتساب، ونخبرك مباشرة إن كنا
          ننقل العفش إليها ضمن خدمة نقل اثاث في راس الخيمه.
        </p>
      </LocationSection>

      <LocationSection>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              align="start"
              className="mb-6 lg:mb-8"
              title="كم سعر نقل اثاث في راس الخيمة؟"
              desc={
                <>
                  <p>
                    لا يوجد سعر ثابت لنقل الأثاث في رأس الخيمة، لأن كل نقلة
                    تختلف في حجمها ومسافتها وما تحتاجه. اسعار نقل الاثاث تتحدد
                    بعد أن نرى صور أثاثك أو نعاين المكان، ثم نعطيك عرضاً واضحاً
                    قبل الحجز. وما نتفق عليه هو ما تدفعه في النهاية، بدون رسوم
                    خفية.
                  </p>
                </>
              }
            />
            <Callout title="هل ارخص شركة نقل اثاث في رأس الخيمة هي الخيار الأوفر؟">
              <p>
                ليس دائماً. عرض السعر المنخفض قد لا يشمل التغليف، أو قد يُحسب
                الفك والتركيب لاحقاً كتكلفة إضافية. عند المقارنة بين عرضين، اسأل
                عن ثلاثة أشياء: ماذا يشمل السعر بالتحديد، وهل الأثاث مؤمَّن، ومن
                يتحمل التكلفة إذا تضررت قطعة. إذا كانت الإجابات واضحة ومكتوبة،
                فالمقارنة بالسعر بعدها عادلة.
              </p>
            </Callout>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-4 font-bold text-secondary">
              هذه هي العوامل التي تحدد التكلفة:
            </p>
            <DataTable
              columns={["العامل", "كيف يؤثر على السعر"]}
              rows={factorsData.map((f) => [f.factor, f.effect])}
            />
          </div>
        </div>
      </LocationSection>

      <LocProcessSection
        grid={2}
        headline={<>خطوات نقل اثاثك في رأس الخيمة معنا</>}
        desc="ثماني خطوات واضحة من أول رسالة على واتساب حتى تنظيف المكان بعد النقل."
        process={[
          {
            title: "تواصل معنا",
            description:
              "أرسل صور الأثاث وعنواني الانطلاق والوصول على واتساب، أو اتصل بنا.",
          },
          {
            title: "احصل على السعر",
            description:
              "نعطيك تقديراً فورياً من الصور، أو نأتي لمعاينة مجانية ونحدد السعر في الموقع.",
          },
          {
            title: "أكّد الموعد",
            description: "نتفق على اليوم والوقت حسب شروط المبنيين.",
          },
          {
            title: "التغليف والفك",
            description: "يصل الفريق ويغلّف الأثاث ويفك القطع الكبيرة.",
          },
          {
            title: "التحميل",
            description: "نحمّل الأثاث في شاحنة مغلقة ومكيّفة ونثبّته جيداً.",
          },
          {
            title: "النقل",
            description:
              "داخل رأس الخيمة، أو عبر E311 أو E611 إذا كانت النقلة من دبي.",
          },
          {
            title: "التفريغ والتركيب",
            description: "نُدخل كل قطعة إلى الغرفة التي تحددها ونعيد تركيبها.",
          },
          {
            title: "التنظيف",
            description: "نزيل مواد التغليف ونترك المكان نظيفاً بعد النقل.",
          },
        ]}
      />

      <LocationSection>
        <SectionHeading
          title="كيف تختار افضل شركة نقل اثاث في راس الخيمة؟"
          desc={
            <p>
              شركات نقل الاثاث في راس الخيمه كثيرة، والفرق بينها يظهر يوم النقل
              لا في الإعلان. قبل أن تحجز مع أي شركة، اسأل هذه الأسئلة:
            </p>
          }
        />
        <InfoCardGrid
          items={chooseQuestions.map((q) => ({
            title: q.question,
            icon: <CircleHelp className="size-6" strokeWidth={1.5} />,
            children: <p>{q.answer}</p>,
          }))}
        />
        <Callout
          title="ماذا تحصل عليه مع الزايد لنقل الاثاث"
          className="mx-auto mt-10 max-w-4xl"
        >
          <p>
            نعمل في نقل الأثاث منذ أكثر من 12 سنة، وننقل المنازل والفلل والمكاتب
            في رأس الخيمة وباقي الإمارات. عرض السعر واضح من أول رسالة حتى
            الفاتورة، والتأمين يشمل كل ما ننقله، وشاحناتنا مغلقة ومكيّفة. الفك
            والتركيب والتنظيف بعد النقل جزء من الخدمة، ولا نطلب أي دفعة مقدمة.
            نعمل 7 أيام في الأسبوع، ونتواصل معك على واتساب لأن صور الغرف تختصر
            كثيراً من الشرح بالهاتف.
          </p>
          <p>
            اقرأ تقييمات عملائنا على{" "}
            <a
              href="https://www.google.com/maps/place/?cid=7441982173312669324"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ملفنا في خرائط Google
            </a>
            .
          </p>
        </Callout>
      </LocationSection>

      <ReviewsSection tone="auto" />

      <LocationSection>
        <SectionHeading title="قبل الانتقال إلى رأس الخيمة: قائمة تحقق سريعة" />
        <ChecklistCard items={checklist.map((text) => ({ children: text }))} />
      </LocationSection>

      <FAQSection
        tone="auto"
        openFirst
        title="الأسئلة الشائعة عن نقل الاثاث في رأس الخيمة"
        faqs={RasAlKhaimahFaqs}
      />

      <CtaBand
        title="اطلب عرض سعر لنقل اثاثك في رأس الخيمة الآن"
        desc="صوّر غرفك وأرسل الصور مع العنوانين على واتساب، أو اتصل بنا لنحدد موعد معاينة مجانية. فريق الزايد جاهز لنقل اثاث راس الخيمة من أول كرتون حتى آخر قطعة."
        actions={
          <QuoteActions
            whatsappLabel="اطلب عرض سعر على واتساب"
            callLabel="اتصل الآن"
          />
        }
        footer={
          <p>
            <strong className="text-white">نخدم أيضاً:</strong>{" "}
            <Link href="/" className={whiteLinkClass}>
              نقل اثاث دبي
            </Link>{" "}
            ·{" "}
            <Link href="/نقل-أثاث-الشارقة" className={whiteLinkClass}>
              نقل اثاث الشارقة
            </Link>{" "}
            ·{" "}
            <Link href="/نقل-اثاث-عجمان" className={whiteLinkClass}>
              نقل اثاث عجمان
            </Link>{" "}
            · نقل الاثاث ام القيوين · نقل الاثاث الفجيرة ·{" "}
            <Link href="/نقل-اثاث-ابوظبي" className={whiteLinkClass}>
              نقل اثاث ابوظبي
            </Link>{" "}
            ·{" "}
            <Link href="/نقل-اثاث-العين" className={whiteLinkClass}>
              نقل اثاث العين
            </Link>
          </p>
        }
      />

      <ContactSection
        title="تواصل مع الزايد لنقل الاثاث في رأس الخيمة"
        description="فريق الزايد جاهز لنقل اثاث راس الخيمة من أول كرتون حتى آخر قطعة. أرسل صور غرفك مع العنوانين على واتساب أو اتصل بنا، وسنعطيك عرض سعر واضحاً بدون دفعة مقدمة وبدون رسوم خفية."
      />
    </main>
  );
};

export default RasAlKhaimahPage;

const facts = [
  {
    label: "نطاق الخدمة",
    value: "داخل رأس الخيمة، ومن دبي والشارقة وعجمان وباقي الإمارات إليها",
  },
  {
    label: "عرض السعر",
    value: "تقدير فوري عبر واتساب أو معاينة ميدانية مجانية",
  },
  { label: "الدفع", value: "بدون أي دفعة مقدمة" },
  { label: "حماية الأثاث", value: "تأمين شامل وشاحنات مغلقة ومكيّفة" },
  { label: "أيام العمل", value: "7 أيام في الأسبوع" },
];

const areasData = [
  {
    type: "مجتمعات ساحلية مسوّرة",
    areas: ["قرية الحمرا", "جزيرة المرجان", "ميناء العرب"],
    prep: "تنسيق موعد الدخول مع أمن المجمع، وخطة تناسب الأبراج والفلل معاً",
  },
  {
    type: "وسط المدينة والأبراج",
    areas: ["النخيل", "دفن النخيل", "أبراج جلفار", "السير"],
    prep: "حجز المصعد، وتجهيز الحمولة لمواقف تحميل ضيقة",
  },
  {
    type: "أحياء فلل سكنية",
    areas: ["خزام", "الظيت", "المعيريض", "قرية الياسمين"],
    prep: "خطة لفك القطع الكبيرة وتحميل الأثاث الثقيل",
  },
  {
    type: "مناطق شمالية وقديمة",
    areas: ["الرمس", "الجزيرة الحمراء"],
    prep: "معاينة الطريق والمداخل قبل يوم النقل",
  },
];

const factorsData = [
  {
    factor: "حجم المنزل وعدد الغرف",
    effect: "يحدد عدد العمال والشاحنات ومدة العمل",
  },
  {
    factor: "المسافة",
    effect: "النقل داخل رأس الخيمة أقل تكلفة من النقل بين دبي ورأس الخيمة",
  },
  {
    factor: "الطابق والمصعد",
    effect: "السلالم أو انتظار المصعد يضيفان وقتاً للتحميل والتفريغ",
  },
  {
    factor: "مواد التغليف",
    effect: "كمية الكراتين والبطانيات والفقاعات حسب عدد القطع",
  },
  {
    factor: "القطع الخاصة",
    effect: "الزجاج والرخام والأجهزة الكبيرة تحتاج تغليفاً ووقتاً إضافيين",
  },
  {
    factor: "التخزين",
    effect: "مدة التخزين وحجم الأثاث المخزّن",
  },
];

const chooseQuestions = [
  {
    question: "هل عرض السعر مكتوب وواضح؟",
    answer: "العرض المكتوب يحميك من أي تكلفة تظهر يوم النقل.",
  },
  {
    question: "هل الأثاث مؤمَّن أثناء النقل؟",
    answer: "اسأل عن التأمين قبل أن تحتاجه، لا بعد أن تنكسر قطعة.",
  },
  {
    question: "هل الشاحنات مغلقة؟",
    answer: "الشاحنة المكشوفة تعرّض الأثاث للغبار والحرارة طوال الطريق.",
  },
  {
    question: "هل الفك والتركيب ضمن السعر؟",
    answer: "بعض الشركات تضيفهما كبنود منفصلة.",
  },
  {
    question: "هل تطلب الشركة دفعة مقدمة؟",
    answer: "إذا دفعت قبل النقل، تقل قدرتك على الاعتراض إن ساء شيء.",
  },
  {
    question: "هل لديها تقييمات حقيقية؟",
    answer: "راجع ملفها على خرائط جوجل وما يكتبه العملاء.",
  },
];

const checklist = [
  "احجز مصعد الخدمة أو تصريح الدخول في المبنى القديم والجديد قبل الموعد.",
  "سجّل عقد الإيجار ووثّقه لدى بلدية رأس الخيمة عبر منصة رأس الخيمة الرقمية، فالتسجيل مطلوب عند الاستئجار ويتجدد سنوياً.",
  "عند تقديم طلب توثيق العقد عبر البوابة الرقمية، لا تحتاج إلى زيارة منفصلة لشركة الاتحاد للماء والكهرباء لتفعيل الخدمات.",
  "قِس الأبواب والممرات في السكن الجديد إذا كان لديك كنب أو خزانة كبيرة.",
  "افصل الغسالة والثلاجة وأفرغهما قبل يوم من النقل.",
  "جهّز حقيبة صغيرة لليلة الأولى: ملابس وأدوية وشاحن هاتف وأوراقك المهمة.",
];

const services = [
  {
    title: "نقل اثاث الفلل في رأس الخيمة",
    description: (
      <>
        <p>
          فلل ميناء العرب وقرية الحمرا وخزام والظيت تحمل عادة أثاثاً أثقل وأكثر
          تنوعاً من الشقق: غرف نوم موزعة على طابقين، ومجالس كبيرة، وأجهزة مطبخ،
          وأغراض حديقة. نبدأ بفك الأسرّة والخزائن وطاولات الطعام الكبيرة، ونغلّف
          كل قطعة بما يناسب مادتها، ثم نحمّل القطع الثقيلة أولاً حتى لا تضغط على
          الأخف منها.
        </p>
        <p>
          في المجمعات المسوّرة نتفق معك مسبقاً على موعد الدخول، حتى لا تقف
          الشاحنة عند البوابة وأنت تنتظر. وتجد تفاصيل أكثر في صفحة{" "}
          <Link href="/نقل-اثاث-الفلل-في-دبي" className={linkClass}>
            نقل اثاث الفلل
          </Link>
          .
        </p>
      </>
    ),
    image: serviceImages.villas,
  },
  {
    title: "نقل اثاث الشقق والأبراج في رأس الخيمة",
    description: (
      <>
        <p>
          في أبراج جلفار وشقق جزيرة المرجان والحمرا والنخيل، المصعد هو ما يحدد
          إيقاع اليوم كله. إذا كان المبنى يشترط حجز مصعد الخدمة، احجزه قبل
          الموعد بيوم أو أكثر. نحمي أرضية الممر وجدران المصعد قبل أن نبدأ، ونفك
          الخزائن الكبيرة لتمر من الأبواب بدل أن نحاول إدخالها كاملة ونخدش
          الإطار، ونكرر الشيء نفسه في الشقة الجديدة. اقرأ المزيد عن{" "}
          <Link href="/نقل-اثاث-الشقق-في-دبي" className={linkClass}>
            نقل اثاث الشقق
          </Link>
          .
        </p>
      </>
    ),
    image: serviceImages.apartments,
  },
  {
    title: "نقل اثاث المكاتب والشركات في راس الخيمة",
    description: (
      <>
        <p>
          كثير من الشركات في الإمارة تعمل داخل المنطقة الاقتصادية لرأس الخيمة
          (راكز)، في منطقة الأعمال بالنخيل أو في الحمرا. وكل يوم يتوقف فيه
          المكتب له تكلفة، لذلك نرتب موعد النقل حول ساعات عملك، ويمكن أن يكون في
          نهاية الأسبوع. نرقّم المكاتب والكراتين والملفات حسب القسم، فيعرف فريقك
          أين يجد كل شيء في المكتب الجديد من أول صباح. التفاصيل في صفحة{" "}
          <Link href="/نقل-اثاث-المكاتب-في-دبي" className={linkClass}>
            نقل اثاث المكاتب
          </Link>
          .
        </p>
      </>
    ),
    image: serviceImages.offices,
  },
  {
    title: "الفك والتركيب والتغليف والتخزين",
    description: (
      <>
        <p>
          الفك والتركيب جزء من كل نقلة معنا، ولا يُحسب كخدمة منفصلة تُضاف
          لاحقاً. نغلّف الأثاث بمواد تغليف جيدة: بطانيات للخشب، وفقاعات للزجاج،
          وكراتين مقوّاة لأدوات المطبخ. وإذا كان موعد استلامك للسكن الجديد لا
          يتوافق مع موعد خروجك من القديم، نخزّن أثاثك حتى يجهز المكان.
        </p>
        <p>
          اقرأ أكثر عن{" "}
          <Link href="/تغليف-اثاث-في-دبي" className={linkClass}>
            تغليف الاثاث
          </Link>{" "}
          و
          <Link href="/فك-وتركيب-اثاث-في-دبي" className={linkClass}>
            فك وتركيب الاثاث
          </Link>{" "}
          و
          <Link href="/تخزين-اثاث-في-دبي" className={linkClass}>
            تخزين الاثاث
          </Link>
          .
        </p>
      </>
    ),
    image: serviceImages.packing,
  },
];
