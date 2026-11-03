import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import HeroImage from "@/public/img/نقل-اثاث-عجمان-كورنيش.jpg";
import QuoteImage from "@/public/img/عرض-سعر-نقل-اثاث-عجمان.jpg";
import AreasImage from "@/public/img/مناطق-نقل-اثاث-عجمان.jpg";
import CostImage from "@/public/img/تكلفة-نقل-اثاث-عجمان-تحميل.jpg";
import { Services } from "@/components/Services";
import { serviceImages } from "@/components/services/service-images";
import { LocProcessSection } from "@/components/utils/LocProcessSection";
import { ImageBanner } from "@/components/location/ImageBanner";
import { QuoteImageSection } from "@/components/location/QuoteImageSection";
import { FAQSection } from "@/components/utils/FaqsSection";
import { AjmanFaqs } from "@/lib/faqsData";
import { ContactSection } from "@/components/ContactSection";
import { LocationHero } from "@/components/location/LocationHero";
import { LocationSection } from "@/components/location/LocationSection";
import { SectionHeading } from "@/components/location/SectionHeading";
import { CheckGrid } from "@/components/location/CheckGrid";
import { Callout } from "@/components/location/Callout";
import { IconFeatureGrid } from "@/components/location/IconFeatureGrid";
import { RouteSection } from "@/components/location/RouteSection";
import { InfoCardGrid } from "@/components/location/InfoCardGrid";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

export const metadata: Metadata = MetadataTemplate({
  title: "نقل اثاث عجمان | شركة نقل اثاث في عجمان بخبرة 12 سنة",
  desc:
    "الزايد نقل اثاث عجمان بخبرة 12 سنة: نقل عفش الشقق والفلل والمكاتب، تغليف وفك وتركيب، تأمين شامل، سعر ثابت وبدون دفعة مقدمة. واتساب 055 646 1731.",
  path: "/%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%B9%D8%AC%D9%85%D8%A7%D9%86",
  image: {
    path: "/img/نقل-اثاث-عجمان-كورنيش.jpg",
    alt: "شاحنة الزايد نقل اثاث أمام أبراج كورنيش عجمان",
  },
});

export const AjmanPage = () => {
  const schema = buildPageSchema({
    page: "ajman",
    name: String(metadata.title),
    description: String(metadata.description),
    image: "/img/نقل-اثاث-عجمان-كورنيش.jpg",
    imageWidth: 1000,
    imageHeight: 495,
  });
  return (
    <main>
      <JsonLd data={schema} />
      <LocationHero
        image={HeroImage}
        imageAlt="شاحنة الزايد نقل اثاث أمام أبراج كورنيش عجمان"
        title="نقل اثاث عجمان مع الزايد نقل اثاث"
      >
        <p>
          تحتاج إلى نقل اثاث عجمان بسرعة وأمان؟ الزايد نقل اثاث شركة نقل اثاث
          تقدّم خدمة نقل الأثاث في عجمان للشقق والفلل والمكاتب، بخبرة تتجاوز 12
          عامًا في نقل الأثاث بمختلف إمارات الدولة.
        </p>
        <p>
          نوفر توصيلًا في نفس اليوم إلى باقي الإمارات، وأسعارًا واضحة بدون أي
          دفعة مقدمة أو رسوم مخفية. تواصل معنا عبر الواتساب للحصول على عرض سعر
          فوري لنقل أثاثك في عجمان.
        </p>
      </LocationHero>

      <QuoteImageSection
        title="احصل على عرض سعر لنقل الأثاث في عجمان خلال دقائق"
        image={QuoteImage}
        imageAlt="عرض سعر نقل اثاث على باب شقة في برج بعجمان"
      >
        <p>
          لديك طريقتان سريعتان للحصول على عرض السعر: تقدير فوري عبر الواتساب من
          صور أثاثك دون الحاجة لزيارة الموقع، أو معاينة ميدانية مجانية يطّلع
          خلالها فريقنا على أثاثك في شقتك أو فيلتك ليمنحك سعرًا دقيقًا على
          الفور.
        </p>
        <p>
          سواء كنت في برج على كورنيش عجمان أو في فيلا بمشيرف، تواصل معنا اليوم
          عبر واتساب على الرقم <bdi className="ltr-isolate">0556461731</bdi>،
          وسنرتب لك خطوتك القادمة بتسعير فوري، وبدون أي دفعة مقدمة أو رسوم
          مخفية.
        </p>
      </QuoteImageSection>

      <Services
        tone="auto"
        nums={4}
        heading="خدماتنا لنقل الأثاث في عجمان"
        desc={
          <>
            <p>
              يقدّم فريق الزايد نقل اثاث في عجمان مجموعة متكاملة من خدمات نقل
              الأثاث تغطي المنازل والشقق والفلل والمكاتب، مع تغليف وتخزين عند
              الحاجة. كل خدمة مصممة لتناسب طبيعة الأثاث ونوع المبنى، من الشقق في
              الأبراج إلى الفلل الواسعة.
            </p>
          </>
        }
        experience={services}
      />

      <LocationSection>
        <SectionHeading
          title="ماذا يشمل النقل مع الزايد في عجمان؟"
          desc={
            <p>
              كل عملية نقل أثاث في عجمان مع الزايد نقل اثاث تشمل مجموعة من
              الخدمات الأساسية دون أي تكلفة إضافية مخفية، بحيث تعرف بالضبط ما
              تحصل عليه من البداية حتى نهاية عملية النقل.
            </p>
          }
        />
        <CheckGrid
          items={[
            "معاينة ميدانية مجانية مع عرض سعر فوري — يمكن أيضًا الحصول على تقدير سعر أونلاين دون الحاجة لزيارة الموقع",
            "تأمين شامل على الأثاث أثناء التحميل والنقل والتفريغ",
            "مواد تغليف عالية الجودة تحمي القطع الحساسة والأثاث الخشبي",
            "شاحنات مغلقة ومكيّفة تحافظ على الأثاث من الغبار والحرارة أثناء الطريق",
            "خدمة على مدار 7 أيام في الأسبوع",
            "فك وتركيب كامل للأثاث كجزء من الخدمة",
            "تنظيف شامل بعد النقل للموقع الجديد",
            "بدون أي دفعة مقدمة — الدفع يتم بعد إتمام العملية",
          ]}
        />
      </LocationSection>

      <LocationSection>
        <SectionHeading
          title={
            <>
              التوصيل في نفس اليوم من عجمان <br className="hidden md:block" />{" "}
              إلى باقي الإمارات
            </>
          }
          desc={
            <p>
              عند الانتقال من عجمان إلى إمارة أخرى، غالبًا ما يكون الوقت عاملًا
              حاسمًا، خصوصًا عند وجود موعد تسليم شقة أو انتهاء عقد إيجار خلال
              يوم أو يومين. لهذا السبب، توفّر الزايد نقل اثاث خدمة توصيل في نفس
              اليوم لجميع أنحاء الإمارات، بحيث يتم نقل الأثاث من عجمان وتسليمه
              في نفس اليوم دون الحاجة لتخزينه مؤقتًا أو تأجيل الانتقال.
            </p>
          }
        />
        <Callout>
          <p className="font-bold text-secondary">تناسب هذه الخدمة بشكل خاص:</p>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5">
              <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" />
              <span>
                من يحتاج إلى إخلاء الشقة أو الفيلا قبل موعد تجديد الإيجاري
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" />
              <span>
                من يواجه موعدًا نهائيًا ضيقًا لتسليم المفتاح للمالك أو المستأجر
                الجديد
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" />
              <span>
                من ينتقل بين عجمان وإمارة أخرى ولا يريد دفع تكلفة تخزين مؤقت
              </span>
            </li>
          </ul>
        </Callout>
        <p className="mt-6 max-w-[68ch]">
          نحدد إمكانية التوصيل في نفس اليوم بعد معرفة حجم الأثاث والوجهة، لذلك
          يُفضّل التواصل معنا مبكرًا في يوم الانتقال لتأكيد الموعد.
        </p>
      </LocationSection>

      <LocationSection>
        <SectionHeading
          title="لماذا يختار سكان عجمان الزايد نقل اثاث؟"
          desc={
            <p>
              نعمل في الزايد نقل اثاث على أساس بسيط: لا تلف في أثاثك، مهما كانت
              المسافة أو حجم النقل. لتحقيق ذلك، نعتمد على مجموعة من الممارسات
              الثابتة في كل عملية نقل:
            </p>
          }
        />
        <IconFeatureGrid items={features} />
      </LocationSection>

      <LocProcessSection
        grid={2}
        headline={<>كيف تتم عملية النقل خطوة بخطوة؟</>}
        desc="لتسهيل تجربة نقل الأثاث في عجمان، تمر عملية النقل مع الزايد نقل اثاث بأربع خطوات واضحة من أول تواصل حتى تسليم الأثاث في موقعه الجديد."
        process={[
          {
            title: "التواصل وطلب عرض السعر",
            description:
              "يبدأ الأمر بالتواصل معنا عبر الواتساب أو الهاتف لتحديد تفاصيل النقل، مثل نوع المكان (شقة، فيلا، مكتب) وحجم الأثاث والوجهة المطلوبة. بناءً على هذه المعلومات، يتم تقديم عرض سعر فوري، أو يمكن ترتيب معاينة ميدانية مجانية إذا احتجت لتقدير أدق.",
          },
          {
            title: "المعاينة والتغليف",
            description:
              "عند تأكيد الموعد، يقوم الفريق بتغليف الأثاث باستخدام مواد مناسبة لكل نوع من القطع، من الأثاث الخشبي إلى الأجهزة الكهربائية والمرايا والقطع الحساسة، لضمان وصولها دون أي ضرر.",
          },
          {
            title: "يوم النقل",
            description:
              "في يوم النقل، يتم تحميل الأثاث في شاحنات مغلقة ومكيّفة، ونقله إلى الموقع الجديد داخل عجمان أو إلى أي إمارة أخرى، مع الالتزام بالموعد المتفق عليه.",
          },
          {
            title: "إعادة التركيب والتسليم",
            description:
              "بعد الوصول، يقوم الفريق بفك التغليف وإعادة تركيب الأثاث في الموقع الجديد، مع تنظيف شامل قبل تسليم المكان بشكله النهائي.",
          },
        ]}
      />

      <RouteSection
        title="المناطق التي نغطيها في عجمان"
        image={AreasImage}
        imageAlt="مناطق عجمان وشاحنة الزايد نقل اثاث في الطريق"
      >
        <p>
          نخدم عملاءنا في مختلف مناطق عجمان، بما يشمل النعيمية والراشدية، وهما
          من أكثر المناطق السكنية كثافة في الإمارة، إضافة إلى كورنيش عجمان حيث
          تنتشر الأبراج السكنية التي قد تحتاج ترتيبًا خاصًا لنقل الأثاث عبر
          المصاعد.
        </p>
        <p>
          كما نغطي منطقة الجرف بما تضمه من مكاتب ومنشآت تجارية، ومنطقة مشيرف
          المعروفة بمجمعات الفلل، بالإضافة إلى الروضة والزهراء وغيرها من مناطق
          عجمان.
        </p>
        <p>
          سواء كان موقعك في شقة داخل برج، أو فيلا في أحد الأحياء السكنية، أو
          مكتب في منطقة تجارية، يمكن لفريق الزايد نقل اثاث الوصول إليك وتنفيذ
          عملية النقل بالكامل.
        </p>
      </RouteSection>

      <LocationSection>
        <SectionHeading
          title="العوامل المؤثرة في تكلفة نقل الأثاث في عجمان"
          desc={
            <p>
              لا توجد تكلفة ثابتة لنقل الأثاث، لأن كل عملية نقل تختلف حسب عدة
              عوامل. لهذا نوفر معاينة مجانية أو تقدير أونلاين لتحديد السعر
              الفعلي بدقة، لكن من المفيد معرفة العوامل التي تؤثر عادة على
              التكلفة قبل طلب عرض السعر:
            </p>
          }
        />
        <ImageBanner
          src={CostImage}
          alt="فريق الزايد نقل اثاث يحمل الاثاث عبر الدرج والمصعد في عجمان"
          className="mb-8"
        />
        <InfoCardGrid
          cols={2}
          items={[
            {
              title: "المسافة بين موقعي الاستلام والتسليم",
              children: (
                <p>
                  كلما زادت المسافة، سواء داخل عجمان أو بين عجمان وإمارة أخرى،
                  زاد الوقت والجهد اللازمين للنقل، وهو ما ينعكس على السعر.
                </p>
              ),
            },
            {
              title: "حجم الأثاث والمنقولات",
              children: (
                <p>
                  عدد القطع وحجمها يحدد نوع الشاحنة المطلوبة وعدد العمال
                  اللازمين لإتمام النقل، وبالتالي يؤثر بشكل مباشر على التكلفة
                  الإجمالية.
                </p>
              ),
            },
            {
              title: "طبيعة المبنى وسهولة الوصول",
              children: (
                <p>
                  الانتقال من أو إلى شقة في برج، مثل الأبراج المنتشرة في كورنيش
                  عجمان، قد يتطلب وقتًا إضافيًا مقارنة بفيلا أو وحدة أرضية،
                  خصوصًا إذا كان الوصول إلى المصعد أو موقع التحميل يحتاج ترتيبًا
                  خاصًا.
                </p>
              ),
            },
            {
              title: "مستوى الخدمة المطلوب",
              children: (
                <p>
                  الاعتماد على تغليف كامل لجميع القطع يختلف تكلفته عن نقل الأثاث
                  فقط دون تغليف إضافي، لذلك يُفضّل تحديد نوع الخدمة المطلوبة عند
                  طلب عرض السعر.
                </p>
              ),
            },
          ]}
        />
      </LocationSection>

      <FAQSection
        tone="auto"
        openFirst
        title="أسئلة شائعة حول نقل الأثاث في عجمان"
        faqs={AjmanFaqs}
      />
      <ContactSection
        title="تواصل مع الزايد نقل اثاث لحجز خدمتك في عجمان"
        description="سواء كنت تنقل أثاث شقة أو فيلا أو مكتب في عجمان، أو تحتاج توصيلًا في نفس اليوم إلى إمارة أخرى، فريق الزايد نقل اثاث جاهز لمساعدتك من أول عرض سعر حتى تسليم آخر قطعة أثاث. تواصل معنا عبر الواتساب أو الهاتف للحصول على عرض سعر فوري، بدون أي دفعة مقدمة وبدون رسوم خفية."
      />
    </main>
  );
};

const services = [
  {
    title: "نقل اثاث المنازل والشقق في عجمان",
    description: (
      <>
        {" "}
        <p>
          ننقل أثاث الشقق والمنازل في عجمان بعناية كاملة، مع تغليف مناسب لكل
          قطعة وشاحنات مغلقة تحافظ على الأثاث أثناء الطريق. الخدمة تشمل الفك
          والتركيب الكامل، سواء كنت تنتقل بين حي وآخر داخل عجمان أو إلى إمارة
          أخرى.
        </p>{" "}
      </>
    ),
    image: serviceImages.house,
  },
  {
    title: "نقل اثاث الفلل في عجمان",
    description: (
      <>
        {" "}
        <p>
          نقل أثاث الفلل يحتاج تنظيمًا أكبر نظرًا لعدد القطع وتنوع أحجامها.
          نتعامل مع جميع أنواع أثاث الفلل، من غرف المعيشة وقطع الأثاث الثقيلة
          إلى المفروشات الحساسة، مع تغليف يحمي كل قطعة حتى الوصول.
        </p>{" "}
      </>
    ),
    image: serviceImages.villas,
  },
  {
    title: "نقل اثاث المكاتب والشركات في عجمان",
    description: (
      <>
        {" "}
        <p>
          نوفر خدمة نقل مكاتب في عجمان تشمل الأثاث المكتبي والأجهزة، مع التخطيط
          لتقليل توقف العمل قدر الإمكان أثناء النقل. هذه الخدمة مناسبة للشركات
          والمكاتب في المناطق التجارية والصناعية بعجمان.
        </p>{" "}
      </>
    ),
    image: serviceImages.offices,
  },
  {
    title: "تغليف وتخزين الأثاث في عجمان",
    description: (
      <>
        {" "}
        <p>
          إلى جانب النقل، نقدّم خدمة تغليف اثاث باستخدام مواد تحمي الأثاث من
          الخدوش والرطوبة، بالإضافة إلى خدمة تخزين اثاث لمن يحتاج إلى تخزين مؤقت
          بين موعدي الاستلام والتسليم.
        </p>{" "}
      </>
    ),
    image: serviceImages.packing,
  },
];
// NOTE: This array has 6 items, but the approved Section 5 content plan listed 5 points.
// The last item (تأمين شامل...) duplicates a claim already made in the "what's included" section above.
// Keep if the 6-card grid layout needs an even number; remove if you'd rather avoid the overlap.
const features = [
  {
    description:
      "أسعار واضحة من أول عرض سعر حتى الفاتورة النهائية، بدون رسوم خفية",
    image: "/Payment.jpg", // يمكنك تعديل مسار الصورة
  },
  {
    description: "تواصل سريع عبر الواتساب وعروض أسعار فورية دون انتظار طويل",
    // image: "/Insurance.jpg",
    image: "/whatsapp.jpg",
  },
  {
    description:
      "تغطية تصل إلى جميع مناطق عجمان وباقي إمارات الدولة، مع خدمة توصيل في نفس اليوم عند الحاجة",
    image: "/truck.jpg",
  },
  {
    description: "بدون أي دفعة مقدمة، حيث يتم الدفع بعد إتمام النقل",
    image: "/7-service.jpg",
  },
  {
    description:
      "خبرة تتجاوز 12 عامًا في نقل الأثاث بمختلف أنواعه، من الشقق الصغيرة إلى الفلل الكاملة والمكاتب",
    image: "/12-icon.jpg",
  },
  {
    description: "تأمين شامل على كل قطعة من أثاثك أثناء النقل",
    image: "/Insurance.jpg",
  },
];

export default AjmanPage;
