import {
  Boxes,
  Building2,
  Castle,
  CircleHelp,
  Clock,
  HouseIcon,
  MapPinned,
  Phone,
  Route,
  ThermometerSun,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroImage from "@/public/نقل-اثاث-ابوظبي.jpg";
import { Services } from "@/components/Services";
import { LocProcessSection } from "@/components/utils/LocProcessSection";
import { FAQSection } from "@/components/utils/FaqsSection";
import { AlAinFaqs } from "@/lib/faqsData";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/location/LocationSection";
import { SectionHeading } from "@/components/location/SectionHeading";
import {
  QuoteActions,
  WhatsAppButton,
} from "@/components/location/QuoteActions";
import { DetailRows } from "@/components/location/DetailRows";
import { DataTable } from "@/components/location/DataTable";
import { Callout } from "@/components/location/Callout";
import { CheckGrid } from "@/components/location/CheckGrid";
import { InfoCardGrid } from "@/components/location/InfoCardGrid";
import { AreaChips } from "@/components/location/AreaChips";
import { ChecklistCard } from "@/components/location/ChecklistCard";
import { CtaBand } from "@/components/location/CtaBand";

export const metadata: Metadata = {
  title: "نقل اثاث العين | شركة نقل اثاث مرخصة ومؤمّنة – الزايد",
  description:
    "نقل اثاث العين مع الزايد: فك وتغليف ونقل وتركيب لفلل ومنازل ومكاتب العين، شركة مرخصة ومؤمّنة وبدون دفعة مقدمة. اطلب عرض سعرك عبر واتساب.",
};

const linkClass = "font-bold text-primary underline underline-offset-4";

export const AlAinPage = () => {
  return (
    <main>
      <section className="w-full relative overflow-hidden">
        <Image
          src={HeroImage}
          alt="نقل اثاث العين مع الزايد"
          fill
          loading="eager"
          placeholder="blur"
          priority
          className="object-cover absolute -z-10"
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-center text-white leading-tight">
            نقل اثاث العين مع الزايد: فك وتغليف ونقل وتركيب لفلل ومنازل ومكاتب
            العين
          </h1>
          <p className="text-center text-white/90 mt-5 md:px-24 leading-relaxed md:text-base text-sm">
            الزايد نقل اثاث شركة مرخصة ومؤمّنة، نقدّم خدمة نقل اثاث العين للفلل
            والمنازل والشقق والمكاتب في كل أحياء المدينة، وننقل أيضاً بين العين
            وباقي إمارات الدولة. نتولى العمل من أوله إلى آخره. نفك الأثاث
            ونغلّفه، ثم ننقله في شاحنات مغلقة ومكيّفة، ونعيد تركيبه في مكانك
            الجديد، ولا نغادر قبل أن ننظف المكان.
          </p>
          <p className="text-center text-white/90 mt-3 md:px-24 leading-relaxed md:text-base text-sm">
            فرقنا تنطلق من مقرنا في دبي، ووراءها أكثر من 12 سنة في نقل الأثاث
            داخل الإمارات. لهذا نحدد معك موعد النقل ووقت وصول الفريق قبل اليوم
            المحدد، حتى لا تقضي صباحك في الانتظار. السعر تعرفه قبل أن نلمس أي
            قطعة، ولا نطلب منك أي مبلغ مقدماً، ولن تجد في الفاتورة بنداً لم
            نتفق عليه.
          </p>
          <p className="text-center text-white/90 mt-3 md:px-24 leading-relaxed md:text-base text-sm">
            عندك عفش تريد نقله داخل العين، أو منها إلى دبي أو أبوظبي؟ أرسل لنا
            صور الأثاث على واتساب، ونرد عليك بتقدير سعر فوري. وإذا كان البيت
            كبيراً أو فيه قطع تحتاج تخطيطاً خاصاً، نأتيك لمعاينة مجانية في
            الموقع.
          </p>
          <div className="mt-6">
            <QuoteActions
              whatsappLabel="اطلب عرض سعر عبر واتساب"
              callLabel="اتصل الآن:"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-secondary/80 z-10" />
      </section>

      <section className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16  ">
        <div className="flex flex-col md:flex-row bg-card text-card-foreground rounded-2xl overflow-hidden">
          {/* Phone */}
          <div className="flex-1 p-6 md:p-8 flex items-center justify-center md:justify-start gap-4 border-b md:border-b-0 md:border-e border-border">
            <div className="bg-primary/10 p-3 sm:p-4 rounded-full text-primary shrink-0">
              <Phone className="size-6 sm:size-8" strokeWidth={1.3} />
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl">الهاتف</p>
              <a
                href="tel:+971556461731"
                className="text-primary font-bold text-lg sm:text-xl block mt-1"
                dir="ltr"
              >
                055 646 1731
              </a>
            </div>
          </div>

          {/* Working hours */}
          <div className="flex-1 p-6 md:p-8 flex items-center justify-center md:justify-start gap-4">
            <div className="bg-primary/10 p-3 sm:p-4 rounded-full text-primary shrink-0">
              <Clock className="size-6 sm:size-8" strokeWidth={1.3} />
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl">ساعات العمل</p>
              <p className="text-muted-foreground block mt-1 font-medium">
                خدمة 7 أيام في الأسبوع
              </p>
            </div>
          </div>

          {/* CTA Action */}
          <a
            href="#contact"
            className="flex-1 bg-primary text-primary-foreground flex items-center justify-center p-6 md:p-8 hover:opacity-95 transition-opacity group relative overflow-hidden"
          >
            {/* Decorative Truck Icon representing the background graphic */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 opacity-20 transition-transform duration-500 group-hover:scale-110">
              <Truck className="size-32 sm:size-40" />
            </div>
            <span className="font-bold text-xl sm:text-2xl underline underline-offset-8 decoration-2 relative z-10 text-center">
              احجز نقل أثاثك الآن
            </span>
          </a>
        </div>
      </section>

      <Services
        nums={6}
        heading="خدمات نقل الاثاث التي نقدمها في العين"
        desc={
          <>
            <p>
              يمكنك أن تطلب النقل كاملاً من الفك حتى التركيب، أو تختار منه الجزء
              الذي تحتاجه فقط.
            </p>
          </>
        }
        experience={services}
      />

      <LocationSection>
        <SectionHeading
          title="ما الذي يختلف في نقل الأثاث في العين؟"
          desc={
            <p>
              ثلاثة أمور تغيّر طريقة التخطيط لنقل الأثاث في العين مقارنة بدبي أو
              أبوظبي: الطقس، ونوع السكن، والمسافة.
            </p>
          }
        />
        <DetailRows
          items={[
            {
              title: "حرارة العين وتأثيرها على الأثاث",
              icon: <ThermometerSun className="size-6" strokeWidth={1.5} />,
              children: (
                <>
                  <p>
                    العين مدينة داخلية بعيدة عن البحر، وصيفها حار وجاف، وقد
                    تتجاوز الحرارة فيه 45 درجة مئوية في أشد الأيام. والهواء
                    داخل صندوق شاحنة معدني مغلق بلا تكييف يكون أسخن من الهواء
                    في الخارج.
                  </p>
                  <p>
                    هذه الحرارة تؤثر على الأثاث بطرق مختلفة. الخشب الطبيعي قد
                    يجف ويتشقق، والجلد يفقد مرونته. والغراء في القطع المكسوة
                    بالقشرة الخشبية قد يلين فتنفصل الطبقة عن الحافة. والأجهزة
                    الإلكترونية والبطاريات لا يناسبها البقاء ساعات في مكان شديد
                    الحرارة.
                  </p>
                  <p>
                    لهذا ننقل في شاحنات مغلقة ومكيّفة، خصوصاً أن الطريق من دبي
                    إلى العين، أو من العين إلى أبوظبي، ليس رحلة قصيرة. وفي أشهر
                    الصيف، نقترح أن يبدأ التحميل في الصباح الباكر قبل ذروة
                    الحر. أما الأدوية والمستندات والأجهزة الصغيرة الثمينة،
                    فالأفضل أن تنقلها بنفسك في سيارتك.
                  </p>
                </>
              ),
            },
            {
              title: "الفلل والمباني المنخفضة: تخطيط مختلف ليوم النقل",
              icon: <HouseIcon className="size-6" strokeWidth={1.5} />,
              children: (
                <>
                  <p>
                    أغلب السكن في العين فلل ومبانٍ منخفضة، وهذا يغيّر شكل
                    العمل. في البرج تكون المشكلة حجز المصعد. في الفيلا تكون
                    المشكلة المسافة من الغرف إلى الشاحنة، عبر الحوش والبوابة،
                    وكمية الأثاث الخارجي مثل جلسات الحديقة والمراجيح وأدوات
                    الشواء.
                  </p>
                  <p>
                    قبل يوم النقل نسألك عن عرض البوابة وأين يمكن أن تقف
                    الشاحنة. وإن كانت الفيلا في مجمع سكني، فمن الأفضل إبلاغ
                    إدارة المجمع مسبقاً. ويفيد أيضاً أن تقيس أبواب البيت الجديد
                    إن كان عندك قطعة كبيرة، مثل خزانة أو كنبة زاوية، حتى نعرف
                    إن كانت ستدخل كما هي أو تحتاج إلى فك.
                  </p>
                </>
              ),
            },
            {
              title: "من دبي إلى العين: كيف نرتّب موعدك",
              icon: <Route className="size-6" strokeWidth={1.5} />,
              children: (
                <p>
                  ليس لدينا فرع في العين، وفرقنا وشاحناتنا تنطلق من مقرنا في دبي
                  عبر طريق دبي العين. لهذا نتفق معك على الموعد ووقت وصول الفريق
                  مسبقاً، وكلما حجزت قبل موعد النقل بأيام، كان ترتيب الفريق
                  والشاحنات أسهل. وإن كان نقلك عاجلاً، أرسل لنا على واتساب،
                  ونخبرك بصراحة إن كان الموعد الذي تريده ممكناً.
                </p>
              ),
            },
          ]}
        />
      </LocationSection>

      <LocationSection>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              align="start"
              className="mb-6 lg:mb-8"
              title="كم تكلفة نقل الاثاث في العين؟"
              desc={
                <p>
                  اسعار شركات نقل الاثاث في العين لا تأتي برقم ثابت يناسب كل
                  بيت، لأن التكلفة تعتمد على حجم الأثاث والمسافة والخدمات التي
                  تحتاجها. ما نقدمه هو عرض سعر واضح ومحدد قبل بدء العمل، بعد أن
                  نرى صور الأثاث أو نعاينه في موقعك.
                </p>
              }
            />
            <div className="space-y-4">
              <Callout title="عرض سعر فوري عبر واتساب أو معاينة مجانية في موقعك">
                <p>
                  للنقل الصغير أو المتوسط، تكفي في الغالب صور الغرف والقطع
                  الكبيرة على واتساب لنعطيك تقديراً فورياً. وللفلل والمكاتب، أو
                  حين تريد سعراً نهائياً دقيقاً، نأتي لمعاينة مجانية في الموقع
                  ونعطيك السعر هناك.
                </p>
              </Callout>
              <Callout title="بدون دفعة مقدمة وبدون رسوم مخفية">
                <p>
                  لا تدفع شيئاً قبل النقل. والسعر الذي نتفق عليه في البداية هو
                  نفسه الذي تجده في الفاتورة النهائية، إلا إذا طلبت أنت خدمة
                  إضافية أثناء العمل.
                </p>
              </Callout>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="mb-4 text-xl font-bold">
              ما الذي يحدد سعر نقل عفش العين؟
            </h3>
            <DataTable
              columns={["العامل", "كيف يؤثر على السعر"]}
              rows={factorsData.map((f) => [f.factor, f.effect])}
            />
          </div>
        </div>
      </LocationSection>

      <LocationSection>
        <SectionHeading
          title="ما الذي يشمله كل عرض نقل اثاث في العين؟"
          desc={<p>كل عملية نقل مع الزايد تشمل:</p>}
        />
        <CheckGrid items={included} />
        <div className="mt-8 flex justify-center">
          <WhatsAppButton>احصل على عرض سعر لنقل عفشك في العين</WhatsAppButton>
        </div>
      </LocationSection>

      <LocProcessSection
        grid={2}
        headline={<>خطوات نقل عفش في العين مع الزايد</>}
        desc="خمس خطوات واضحة من أول رسالة على واتساب حتى تنظيف المكان بعد النقل."
        process={[
          {
            title: "تواصل معنا على واتساب",
            description: "أرسل صور الأثاث وعنوان البيتين والموعد الذي يناسبك.",
          },
          {
            title: "عرض السعر أو المعاينة",
            description:
              "نرسل لك تقديراً فورياً، أو نأتي لمعاينة مجانية إن كان النقل كبيراً.",
          },
          {
            title: "التغليف والفك",
            description:
              "يصل الفريق في الموعد المتفق عليه، فيغلّف الأثاث ويفك ما يحتاج إلى فك.",
          },
          {
            title: "النقل",
            description:
              "نحمّل الأثاث في شاحنة مغلقة ومكيّفة وننقله إلى بيتك أو مكتبك الجديد.",
          },
          {
            title: "التركيب والتنظيف",
            description:
              "نركّب الأثاث ونضعه في أماكنه، ثم ننظف بعد انتهاء العمل.",
          },
        ]}
      />

      <LocationSection>
        <SectionHeading
          title="كيف تختار افضل شركة نقل اثاث في العين؟"
          desc={
            <p>
              شركات نقل الاثاث في العين كثيرة، وعروضها تبدو متشابهة على الورق.
              الفرق يظهر في التفاصيل، لذلك قبل أن تتفق مع أي شركة نقل اثاث
              العين، اسألها هذه الأسئلة:
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
      </LocationSection>

      <LocationSection>
        <Callout
          title="لماذا تختار الزايد لنقل اثاثك في العين؟"
          className="mx-auto max-w-4xl"
        >
          <p>
            طبّق الأسئلة السابقة علينا. الزايد نقل اثاث شركة مرخصة، وكل ما ننقله
            مؤمّن عليه، والسعر مكتوب قبل البدء وبدون دفعة مقدمة. ننقل في شاحنات
            مغلقة ومكيّفة، والفك والتركيب والتنظيف بعد النقل جزء من الخدمة
            وليست إضافات بسعر منفصل. خلف ذلك أكثر من 12 سنة في نقل الأثاث داخل
            الإمارات، وتواصل سريع على واتساب من أول سؤال حتى آخر قطعة.
          </p>
        </Callout>
      </LocationSection>

      <ReviewsSection />

      <LocationSection>
        <SectionHeading
          title="نقل اثاث داخل العين وفي جميع مناطقها"
          desc={
            <p>
              نغطي مدينة العين كاملة، سواء كان نقلك من حي إلى آخر داخل المدينة
              أو من العين إلى إمارة أخرى. ومن المناطق التي نخدمها:
            </p>
          }
        />
        <AreaChips areas={areas} />
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          إذا لم تجد منطقتك في القائمة، أرسل لنا موقعك على واتساب، فنحن نصل إلى
          كل أحياء العين.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton>أرسل موقعك واحصل على عرض سعر</WhatsAppButton>
        </div>
      </LocationSection>

      <LocationSection>
        <SectionHeading title="نقل اثاث بين العين وباقي الإمارات" />
        <InfoCardGrid
          cols={2}
          items={[
            {
              title: "نقل اثاث من دبي إلى العين ومن العين إلى دبي",
              icon: <MapPinned className="size-6" strokeWidth={1.5} />,
              children: (
                <>
                  <p>
                    مقرنا في دبي، لذلك يبدأ كل نقل لنا إلى العين من دبي أصلاً.
                    سواء كنت تنتقل من دبي للسكن في العين أو العكس، يتولى الفريق
                    نفسه التغليف في البيت الأول والتركيب في البيت الثاني، فلا
                    تتعامل مع جهتين مختلفتين.
                  </p>
                  <p>
                    <Link href="/" className={linkClass}>
                      نقل اثاث دبي – الصفحة الرئيسية
                    </Link>
                  </p>
                </>
              ),
            },
            {
              title: "نقل اثاث بين العين وأبوظبي",
              icon: <MapPinned className="size-6" strokeWidth={1.5} />,
              children: (
                <>
                  <p>
                    العين جزء من إمارة أبوظبي، وننقل أثاثك من العين إلى مدينة
                    أبوظبي ومناطقها، ومن أبوظبي إلى العين أيضاً، بالخدمة نفسها
                    من الفك إلى التركيب.
                  </p>
                  <p>
                    <Link href="/نقل-اثاث-ابوظبي" className={linkClass}>
                      نقل اثاث ابوظبي
                    </Link>
                  </p>
                </>
              ),
            },
          ]}
        />
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          ونصل كذلك إلى{" "}
          <Link href="/نقل-اثاث-الشارقة" className={linkClass}>
            الشارقة
          </Link>{" "}
          و
          <Link href="/نقل-اثاث-عجمان" className={linkClass}>
            عجمان
          </Link>{" "}
          و
          <Link href="/نقل-اثاث-راس-الخيمة" className={linkClass}>
            رأس الخيمة
          </Link>{" "}
          وأم القيوين والفجيرة.
        </p>
      </LocationSection>

      <LocationSection>
        <SectionHeading title="قبل يوم النقل في العين: قائمة تجهيز سريعة" />
        <ChecklistCard
          items={[
            {
              lead: "الكهرباء والماء:",
              children: (
                <>
                  الجهة المسؤولة في العين الآن هي &quot;طاقة للتوزيع&quot; (TAQA
                  Distribution)، بعد دمج شركة العين للتوزيع وشركة أبوظبي
                  للتوزيع. قدّم طلب إغلاق الحساب أو نقله بتاريخ خروجك، فتُصدر
                  لك فاتورة نهائية حسب قراءة العداد.{" "}
                  <a
                    href="https://www.taqa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    موقع طاقة للتوزيع الرسمي
                  </a>
                </>
              ),
            },
            {
              lead: "عقد الإيجار في \"توثيق\":",
              children: (
                <>
                  إمارة أبوظبي تستخدم نظام &quot;توثيق&quot; وليس
                  &quot;إيجاري&quot; المعمول به في دبي. المالك أو شركة الإدارة
                  هو من يسجل العقد، وخدمات الكهرباء والماء في البيت الجديد
                  مرتبطة بتسجيله، فتأكد من أنه تم قبل موعد انتقالك.{" "}
                  <a
                    href="https://www.tamm.abudhabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    صفحة توثيق على منصة تم الرسمية
                  </a>
                </>
              ),
            },
            {
              lead: "إذن المبنى أو المجمع:",
              children:
                "اسأل الإدارة عن ساعات النقل المسموحة وأين يمكن أن تقف الشاحنة.",
            },
            {
              lead: "الثلاجة والغسالة:",
              children:
                "افصل الثلاجة قبل يوم من النقل لتذوب الثلوج وتجف، وأفرغ الماء من الغسالة.",
            },
            {
              lead: "ما لن تنقله:",
              children:
                "افرز الأغراض التي لا تحتاجها قبل التغليف، فكل قطعة زائدة تأخذ وقتاً ومكاناً في الشاحنة.",
            },
            {
              lead: "حقيبة اليوم الأول:",
              children:
                "ضع فيها الأدوية والمستندات والشواحن والمفاتيح، وخذها معك في سيارتك.",
            },
            {
              lead: "قياس الأبواب:",
              children: "قِس أبواب البيت الجديد إن كانت لديك قطع كبيرة.",
            },
          ]}
        />
      </LocationSection>

      <FAQSection
        openFirst
        title="أسئلة شائعة عن نقل اثاث العين"
        faqs={AlAinFaqs}
      />

      <CtaBand
        title="رقم شركة نقل اثاث العين: اطلب عرض سعرك الآن"
        desc={
          <>
            أرسل لنا صور الأثاث وعنوانك على واتساب على الرقم{" "}
            <span dir="ltr">055 646 1731</span>، وتحصل على تقدير سعر فوري. أو
            اتصل بنا لحجز معاينة مجانية في موقعك.
          </>
        }
        actions={
          <QuoteActions
            whatsappLabel="اطلب عرض سعر عبر واتساب"
            callLabel="اتصل الآن:"
          />
        }
      />

      <ContactSection
        title="تواصل مع الزايد لنقل اثاثك في العين"
        description="أرسل لنا صور الأثاث وعنوانك على واتساب، وتحصل على تقدير سعر فوري، أو اتصل بنا لحجز معاينة مجانية في موقعك. سعر واضح قبل بدء العمل، بدون دفعة مقدمة وبدون رسوم مخفية."
      />
    </main>
  );
};

export default AlAinPage;

const included = [
  "معاينة مجانية في الموقع مع عرض سعر فوري هناك",
  "تقدير سعر عبر الإنترنت دون الحاجة إلى زيارة",
  "تأمين شامل على كل ما ننقله",
  "مواد تغليف عالية الجودة",
  "شاحنات مغلقة ومكيّفة",
  "فك وتركيب كامل للأثاث",
  "تنظيف المكان بعد النقل",
  "خدمة متاحة سبعة أيام في الأسبوع",
  "بدون أي دفعة مقدمة",
];

const factorsData = [
  {
    factor: "حجم الأثاث وعدد الغرف",
    effect:
      "فيلا من خمس غرف مع مجلس تحتاج شاحنات وعمالاً ووقتاً أكثر من شقة بغرفتين",
  },
  {
    factor: "المسافة",
    effect:
      "النقل داخل العين يختلف عن النقل من العين إلى دبي أو أبوظبي أو إمارة أخرى",
  },
  {
    factor: "سهولة الوصول",
    effect:
      "الدرج بلا مصعد، والممرات الضيقة، وبُعد الشاحنة عن الباب، كلها تضيف وقتاً وجهداً",
  },
  {
    factor: "الخدمات المطلوبة",
    effect: "التغليف الكامل والفك والتركيب والتخزين، حسب ما تطلبه منها",
  },
  {
    factor: "القطع الخاصة",
    effect:
      "الخزائن الثقيلة والمرايا الكبيرة والتحف والقطع الهشة تحتاج تغليفاً وعناية إضافية",
  },
];

const chooseQuestions = [
  {
    question: "هل لديها رخصة تجارية سارية؟",
    answer: "الشركة المرخصة لها جهة يمكن الرجوع إليها إن حدثت مشكلة.",
  },
  {
    question: "هل الأثاث مؤمّن أثناء النقل؟",
    answer: 'اسأل ماذا يغطي التأمين بالضبط، ولا تكتفِ بكلمة "مؤمّن".',
  },
  {
    question: "هل عرض السعر مكتوب ويذكر الخدمات؟",
    answer: "السعر الشفهي يسهل تغييره يوم النقل.",
  },
  {
    question: "هل تطلب دفعة مقدمة؟",
    answer: "وإن طلبت، فكم، ومتى تستردها إن ألغيت؟",
  },
  {
    question: "ما نوع الشاحنات؟",
    answer: "الأثاث في شاحنة مكشوفة يتعرض للشمس والغبار طوال الطريق.",
  },
  {
    question: "هل الفك والتركيب ضمن السعر؟",
    answer: "بعض العروض الرخيصة لا تشمل إلا التحميل والتنزيل.",
  },
];

const areas = [
  "الجيمي",
  "المويجعي",
  "الهيلي",
  "زاخر",
  "فلج هزاع",
  "الطوية",
  "المقام",
  "الخبيصي",
  "المطوع",
  "الصاروج",
  "الجاهلي",
  "المعترض",
  "القطارة",
  "المسعودي",
  "الفوعة",
  "الياهر",
  "عشارج",
];

const services = [
  {
    title: "نقل اثاث الفلل في العين",
    description: (
      <>
        <p>
          الفلل في العين أكبر في الغالب من شقق المدن الساحلية. فيها غرف أكثر
          ومجلس وملحق، وأحياناً أثاث خارجي في الحوش. نقل فيلا بهذا الحجم لا
          ينجح بالارتجال يوم النقل، لذلك نبدأ بمعاينة مجانية نعدّ فيها القطع،
          ونحدد ما يحتاج إلى فك وما ينقل كما هو، وعدد الشاحنات والعمال المناسب
          للعمل.
        </p>
        <p>
          يوم النقل يشتغل الفريق غرفة بعد غرفة. نكتب على كل كرتون اسم الغرفة
          التي سيذهب إليها في الفيلا الجديدة، فيعرف العمال مكان كل شيء دون أن
          يسألوك عن كل صندوق. أما جلسات المجلس والكنب الكبير وطاولات الطعام،
          فنلفها بالكامل قبل أن تخرج من الباب، لأن أغلب الخدوش تحدث في الممرات
          والعتبات وليس داخل الشاحنة.
        </p>
        <p>
          <Link href="/نقل-اثاث-الفلل-في-دبي" className={linkClass}>
            نقل اثاث الفلل
          </Link>
        </p>
      </>
    ),
    icon: <Castle className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث المنازل والشقق في العين",
    description: (
      <>
        <p>
          في الشقة تكون المساحة أضيق والممرات أقصر، لكن المطبخ وحده قد يملأ
          عشرات الكراتين. نغلّف الأواني والزجاجيات كل قطعة على حدة، ونفك الأسرّة
          والخزائن التي لا تمر من الباب أو الدرج. وقبل الموعد، اسأل إدارة المبنى
          إن كانت تحدد ساعات معينة لنقل الأثاث، حتى نرتب وصول الفريق عليها.
        </p>
        <p>
          <Link href="/نقل-اثاث-الشقق-في-دبي" className={linkClass}>
            نقل اثاث الشقق
          </Link>
        </p>
      </>
    ),
    icon: <HouseIcon className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث المكاتب والشركات في العين",
    description: (
      <>
        <p>
          في نقل المكاتب، كل ساعة يتوقف فيها العمل لها كلفة. لذلك نتفق معك على
          موعد يقلل تعطّل الموظفين، وقد يكون في عطلة نهاية الأسبوع. ننقل
          المكاتب والكراسي وخزائن الملفات والأجهزة، ونعيد ترتيبها في المكتب
          الجديد حسب المخطط الذي تعطينا إياه.
        </p>
        <p>
          ننصحك أن يتولى فريق تقنية المعلومات لديك فصل الخوادم والشبكة ونسخ
          البيانات احتياطياً قبل النقل. نحن ننقل الأجهزة مغلفة ومحمية، أما
          البيانات وإعدادات الشبكة فيتولاها من يعرف نظامك.
        </p>
        <p>
          <Link href="/نقل-اثاث-المكاتب-في-دبي" className={linkClass}>
            نقل اثاث المكاتب
          </Link>
        </p>
      </>
    ),
    icon: <Building2 className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "تغليف الاثاث قبل النقل",
    description: (
      <>
        <p>
          نستخدم مواد تغليف عالية الجودة، ولكل مادة عمل محدد. الكراتين المقواة
          للكتب وأدوات المطبخ والملابس المطوية. فقاعات الهواء للزجاج والمرايا
          وشاشات التلفاز والتحف. أما الكنب والمراتب والقطع المنجّدة، فنلفها
          بالنايلون المطاطي (ستريتش) حتى لا يدخلها غبار الطريق. والقطع الخشبية
          نحمي حوافها وزواياها، لأنها أول ما يصطدم بالجدران والأبواب.
        </p>
        <p>
          <Link href="/تغليف-اثاث-في-دبي" className={linkClass}>
            تغليف اثاث
          </Link>
        </p>
      </>
    ),
    icon: <Boxes className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "فك وتركيب الاثاث وغرف النوم",
    description: (
      <>
        <p>
          نفك الأسرّة والخزائن وطاولات الطعام قبل النقل، ونعيد تركيبها في البيت
          الجديد ونثبتها. نضع البراغي والقطع الصغيرة لكل قطعة في كيس خاص بها،
          فلا يضيع شيء بين قطعتين متشابهتين.
        </p>
        <p>
          ملاحظة مفيدة قبل الفك: الأثاث المصنوع من الخشب المضغوط (MDF)، مثل
          كثير من أثاث المتاجر الجاهزة، يتحمل الفك والتركيب عدداً محدوداً من
          المرات قبل أن تضعف ثقوب البراغي فيه. إن كانت القطعة تمر من الباب كما
          هي، فقد ننصحك بنقلها دون فك.
        </p>
        <p>
          <Link href="/فك-وتركيب-اثاث-في-دبي" className={linkClass}>
            فك وتركيب اثاث
          </Link>
        </p>
      </>
    ),
    icon: <Wrench className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "تخزين الاثاث",
    description: (
      <>
        <p>
          أحياناً لا يتطابق موعد خروجك من بيتك القديم مع موعد تسلّم الجديد. في
          هذه الحالة نغلّف الأثاث وننقله إلى التخزين، ثم نوصله إليك حين يكون
          البيت جاهزاً.
        </p>
        <p>
          <Link href="/تخزين-اثاث-في-دبي" className={linkClass}>
            تخزين اثاث
          </Link>
        </p>
      </>
    ),
    icon: <Warehouse className="text-primary" strokeWidth={1} size={60} />,
  },
];
