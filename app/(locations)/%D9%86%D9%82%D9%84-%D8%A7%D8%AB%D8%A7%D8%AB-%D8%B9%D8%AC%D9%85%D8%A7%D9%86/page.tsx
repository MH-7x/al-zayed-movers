import { Button } from "@/components/ui/button";
import {
  BoxesIcon,
  Building2,
  Castle,
  Clock,
  HouseIcon,
  Phone,
  Truck,
} from "lucide-react";
import Image from "next/image";
// TODO: VERIFY THIS IMAGE — filename references Abu Dhabi ("ابوظبي"), not Ajman.
// This is the AJMAN page hero — confirm the correct Ajman-specific hero image is used here.
import HeroImage from "@/public/نقل-اثاث-ابوظبي.jpg";
import { Services } from "@/components/Services";
import { LocProcessSection } from "@/components/utils/LocProcessSection";
// TODO: VERIFY THIS IMAGE — filename references Sharjah ("الشارقة"), not Ajman.
// Used in the "areas we cover in Ajman" section — confirm this is the intended image.
import InterEmirateImage from "@/public/نقل الأثاث-بين-الشارقة.jpg";
import { FAQSection } from "@/components/utils/FaqsSection";
import { AjmanFaqs } from "@/lib/faqsData";
import { ContactSection } from "@/components/ContactSection";
export const AjmanPage = () => {
  return (
    <main>
      <section className="w-full relative overflow-hidden">
        <Image
          src={HeroImage}
          alt="نقل اثاث عجمان مع الزايد نقل اثاث "
          fill
          loading="eager"
          placeholder="blur"
          priority
          className="object-cover absolute -z-10"
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-center text-white leading-tight">
            نقل اثاث عجمان مع الزايد نقل اثاث
          </h1>
          <p className="text-center text-white/90 mt-5 md:px-24 leading-relaxed md:text-base text-sm">
            تحتاج إلى نقل اثاث عجمان بسرعة وأمان؟ الزايد نقل اثاث شركة نقل اثاث
            تقدّم خدمة نقل الأثاث في عجمان للشقق والفلل والمكاتب، بخبرة تتجاوز
            12 عامًا في نقل الأثاث بمختلف إمارات الدولة.
          </p>
          <p className="text-center text-white/90 mt-3 md:px-24 leading-relaxed md:text-base text-sm">
            نوفر توصيلًا في نفس اليوم إلى باقي الإمارات، وأسعارًا واضحة بدون أي
            دفعة مقدمة أو رسوم مخفية. تواصل معنا عبر الواتساب للحصول على عرض سعر
            فوري لنقل أثاثك في عجمان.
          </p>
          <div className="mt-5 flex justify-center ">
            <Button size={"lg"} className={"md:px-5"}>
              أحصل على عرض سعر مجاني
            </Button>
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

          {/* Email */}
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

      <section className="pt-16 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="md:text-4xl text-3xl font-extrabold leading-tight mb-4">
              ماذا يشمل النقل مع الزايد في عجمان؟
            </h2>
            {/* تمت إضافة المقدمة هنا لضمان عدم حذف أي جزء من النص */}
            <p className="text-muted-foreground md:*:text-lg leading-relaxed">
              كل عملية نقل أثاث في عجمان مع الزايد نقل اثاث تشمل مجموعة من
              الخدمات الأساسية دون أي تكلفة إضافية مخفية، بحيث تعرف بالضبط ما
              تحصل عليه من البداية حتى نهاية عملية النقل.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 font-bold ">
            <li className="fLi">
              معاينة ميدانية مجانية مع عرض سعر فوري — يمكن أيضًا الحصول على
              تقدير سعر أونلاين دون الحاجة لزيارة الموقع
            </li>
            <li className="fLi">
              تأمين شامل على الأثاث أثناء التحميل والنقل والتفريغ
            </li>
            <li className="fLi">
              مواد تغليف عالية الجودة تحمي القطع الحساسة والأثاث الخشبي
            </li>
            <li className="fLi">
              شاحنات مغلقة ومكيّفة تحافظ على الأثاث من الغبار والحرارة أثناء
              الطريق
            </li>
            <li className="fLi">خدمة على مدار 7 أيام في الأسبوع</li>
            <li className="fLi">فك وتركيب كامل للأثاث كجزء من الخدمة</li>
            <li className="fLi">تنظيف شامل بعد النقل للموقع الجديد</li>
            <li className="fLi">
              بدون أي دفعة مقدمة — الدفع يتم بعد إتمام العملية
            </li>
          </ul>
        </div>
      </section>

      <section className="pt-16 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Content Column */}
          <div className="flex flex-col text-right lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-5">
              التوصيل في نفس اليوم من عجمان <br /> إلى باقي الإمارات
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              عند الانتقال من عجمان إلى إمارة أخرى، غالبًا ما يكون الوقت عاملًا
              حاسمًا، خصوصًا عند وجود موعد تسليم شقة أو انتهاء عقد إيجار خلال
              يوم أو يومين. لهذا السبب، توفّر الزايد نقل اثاث خدمة توصيل في نفس
              اليوم لجميع أنحاء الإمارات، بحيث يتم نقل الأثاث من عجمان وتسليمه
              في نفس اليوم دون الحاجة لتخزينه مؤقتًا أو تأجيل الانتقال.
            </p>

            <div className="bg-muted/60 border border-border/80 rounded-2xl p-5 mb-6">
              <p className="font-bold text-foreground mb-3 text-sm sm:text-base">
                تناسب هذه الخدمة بشكل خاص:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    من يحتاج إلى إخلاء الشقة أو الفيلا قبل موعد تجديد الإيجاري
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    من يواجه موعدًا نهائيًا ضيقًا لتسليم المفتاح للمالك أو
                    المستأجر الجديد
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    من ينتقل بين عجمان وإمارة أخرى ولا يريد دفع تكلفة تخزين مؤقت
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-5">
              نحدد إمكانية التوصيل في نفس اليوم بعد معرفة حجم الأثاث والوجهة،
              لذلك يُفضّل التواصل معنا مبكرًا في يوم الانتقال لتأكيد الموعد.
            </p>
          </div>

          {/* 4:3 Image Placeholder Column */}
          <div className="w-full lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-red-300"></div>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="md:text-4xl text-3xl font-extrabold leading-tight mb-4">
              لماذا يختار سكان عجمان الزايد نقل اثاث؟
            </h2>
            {/* تمت إضافة المقدمة هنا لضمان عدم حذف أي جزء من النص */}
            <p className="text-muted-foreground md:*:text-lg leading-relaxed">
              نعمل في الزايد نقل اثاث على أساس بسيط: لا تلف في أثاثك، مهما كانت
              المسافة أو حجم النقل. لتحقيق ذلك، نعتمد على مجموعة من الممارسات
              الثابتة في كل عملية نقل:
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col bg-card text-card-foreground shadow-lg p-5 items-center text-center rounded-2xl"
              >
                <div className="mb-5 relative overflow-hidden size-16 ">
                  <Image
                    src={feature.image}
                    alt={`image icon ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-muted-foreground text-sm ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="w-full relative overflow-hidden mt-16 md:mt-24 py-20 md:py-28">
        <Image
          src={InterEmirateImage}
          alt="المناطق التي نغطيها في عجمان"
          fill
          placeholder="blur"
          className="object-cover absolute inset-0 -z-20"
        />
        <div className="absolute inset-0 bg-secondary/75 -z-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            المناطق التي نغطيها في عجمان
          </h2>
          <div className="space-y-4 text-white/90 text-sm sm:text-base  leading-relaxed max-w-3xl mx-auto">
            <p>
              نخدم عملاءنا في مختلف مناطق عجمان، بما يشمل النعيمية والراشدية،
              وهما من أكثر المناطق السكنية كثافة في الإمارة، إضافة إلى كورنيش
              عجمان حيث تنتشر الأبراج السكنية التي قد تحتاج ترتيبًا خاصًا لنقل
              الأثاث عبر المصاعد.
            </p>
            <p>
              كما نغطي منطقة الجرف بما تضمه من مكاتب ومنشآت تجارية، ومنطقة مشيرف
              المعروفة بمجمعات الفلل، بالإضافة إلى الروضة والزهراء وغيرها من
              مناطق عجمان.
            </p>
            <p>
              سواء كان موقعك في شقة داخل برج، أو فيلا في أحد الأحياء السكنية، أو
              مكتب في منطقة تجارية، يمكن لفريق الزايد نقل اثاث الوصول إليك
              وتنفيذ عملية النقل بالكامل.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pt-16 lg:pt-28">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight">
          العوامل المؤثرة في تكلفة نقل الأثاث في عجمان
        </h2>
        <p className="text-muted-foreground mt-5">
          لا توجد تكلفة ثابتة لنقل الأثاث، لأن كل عملية نقل تختلف حسب عدة عوامل.
          لهذا نوفر معاينة مجانية أو تقدير أونلاين لتحديد السعر الفعلي بدقة، لكن
          من المفيد معرفة العوامل التي تؤثر عادة على التكلفة قبل طلب عرض السعر:
        </p>
        <div className="w-full bg-primary/20 aspect-video mt-10 rounded-2xl relative overflow-hidden">
          {/* TODO: VERIFY THIS IMAGE — filename/alt references Dubai ("دبي"), not Ajman. */}
          <Image
            src={"/شركة-الزايد-نقل-اثاث-دبي.jpg"}
            alt="شركة الزايد نقل اثاث دبي"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              المسافة بين موقعي الاستلام والتسليم
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              كلما زادت المسافة، سواء داخل عجمان أو بين عجمان وإمارة أخرى، زاد
              الوقت والجهد اللازمين للنقل، وهو ما ينعكس على السعر.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              حجم الأثاث والمنقولات
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              عدد القطع وحجمها يحدد نوع الشاحنة المطلوبة وعدد العمال اللازمين
              لإتمام النقل، وبالتالي يؤثر بشكل مباشر على التكلفة الإجمالية.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              طبيعة المبنى وسهولة الوصول
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              الانتقال من أو إلى شقة في برج، مثل الأبراج المنتشرة في كورنيش
              عجمان، قد يتطلب وقتًا إضافيًا مقارنة بفيلا أو وحدة أرضية، خصوصًا
              إذا كان الوصول إلى المصعد أو موقع التحميل يحتاج ترتيبًا خاصًا.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              مستوى الخدمة المطلوب
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              الاعتماد على تغليف كامل لجميع القطع يختلف تكلفته عن نقل الأثاث فقط
              دون تغليف إضافي، لذلك يُفضّل تحديد نوع الخدمة المطلوبة عند طلب عرض
              السعر.
            </p>
          </div>
        </div>
      </section>
      <FAQSection
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
    icon: <HouseIcon className="text-primary" strokeWidth={1} size={60} />,
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
    icon: <Castle className="text-primary" strokeWidth={1} size={60} />,
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
    icon: <Building2 className="text-primary" strokeWidth={1} size={60} />,
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
    icon: <BoxesIcon className="text-primary" strokeWidth={1} size={60} />,
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
