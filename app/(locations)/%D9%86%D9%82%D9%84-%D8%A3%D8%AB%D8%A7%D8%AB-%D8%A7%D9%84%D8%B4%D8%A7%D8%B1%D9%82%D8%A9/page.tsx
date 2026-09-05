import { Services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { LocProcessSection } from "@/components/utils/LocProcessSection";
import HeroImage from "@/public/نقل-اثاث-ابوظبي.jpg";
import InterEmirateImage from "@/public/نقل الأثاث-بين-الشارقة.jpg";
import {
  Boxes,
  Building2,
  Castle,
  Clock,
  HouseIcon,
  Phone,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { FAQSection } from "@/components/utils/FaqsSection";
import { SharjahFaqs } from "@/lib/faqsData";
import { ContactSection } from "@/components/ContactSection";
const SharjahPage = () => {
  return (
    <main>
      <section className="w-full relative overflow-hidden">
        <Image
          src={HeroImage}
          alt="نقل أثاث الشارقة مع الزايد نقل اثاث"
          fill
          loading="eager"
          placeholder="blur"
          priority
          className="object-cover absolute -z-10"
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-center text-white leading-tight">
            نقل أثاث الشارقة مع الزايد نقل اثاث
          </h1>
          <p className="text-center text-white/90 mt-5 md:px-24 leading-relaxed md:text-base text-sm">
            الزايد نقل اثاث شركة متخصصة في نقل الأثاث تغطي الشارقة بكافة
            مناطقها، بخبرة تتجاوز 12 عامًا في نقل المنازل والشقق والفلل
            والمكاتب. مهمتنا الأساسية هي حماية أثاثك من أي تلف خلال النقل، من
            أول قطعة حتى آخرها.
          </p>
          <div className="mt-5 flex justify-center ">
            <Button size={"lg"} className={"md:px-5"}>
              أحصل على عرض سعر مجاني
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-secondary/80 z-10" />
      </section>

      <section className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16  mb-16">
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

      <section className=" overflow-hidden  pt-16 ">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Content & Description */}
            <div className="flex flex-col items-start text-right lg:col-span-6">
              {/* Main Heading */}
              <h2 className="text-3xl font-black leading-tight md:text-4xl md:pl-28 sm:pl-0 ">
                احصل على عرض سعر لنقل الأثاث في الشارقة خلال دقائق
              </h2>

              {/* Description */}
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                للحصول على عرض السعر، لدينا طريقتان سريعتان: تقدير فوري عبر
                الإنترنت دون الحاجة لزيارة الموقع، أو معاينة ميدانية مجانية
                يطّلع خلالها فريقنا على تفاصيل أثاثك ليمنحك سعرًا دقيقًا على
                الفور.
              </p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                سواء كنت تبحث عن نقل عفش الشارقة أو نقل اثاث الشارقه، يمكنك
                التواصل مع فريقنا مباشرة عبر الواتساب.
              </p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                تواصل معنا اليوم عبر واتساب على الرقم 0556461731، وسنرتب لك
                خطوتك القادمة بتسعير فوري وبدون أي التزامات.
              </p>
            </div>
            {/* Right Column: Image with Experience Badge */}
            <div className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
              {/* Experience Floating Badge */}
              <div className="absolute -top-5 md:-end-5 -end-2 z-20 flex size-28 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-primary-foreground shadow-xl ring-4 ring-background sm:-top-7 sm:-end-7 sm:size-36">
                <span className="text-2xl font-black leading-none sm:text-4xl">
                  +12
                </span>
                <span className="mt-1 text-[11px] font-medium leading-tight sm:text-xs">
                  عاماً من الخبرة والتميز
                </span>
              </div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border-card bg-card aspect-4/3">
                <Image
                  src="/الزايد-نقل-اثاث-دبي.jpg"
                  alt="الزايد نقل اثاث دبي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold text-center">
          المناطق التي نغطيها في الشارقة
        </h2>
        <p className="text-muted-foreground mt-5 text-center">
          يغطي فريق الزايد نقل اثاث معظم مناطق الشارقة الرئيسية، سواء كنت تسكن
          في شقة أو فيلا أو تدير مكتبًا تجاريًا. من أبرز المناطق التي ننقل
          الأثاث فيها بانتظام:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            {
              t: "النهدة",
              l: "#",
            },
            {
              t: "المجاز",
              l: "#",
            },
            {
              t: "الخان",
              l: "#",
            },
            {
              t: "التعاون",
              l: "#",
            },
            {
              t: "مويلح",
              l: "#",
            },
            {
              t: "القاسمية",
              l: "#",
            },
            {
              t: "المناطق الصناعية بالشارقة",
              l: "#",
            },
            {
              t: "الروضة والرولة",
              l: "#",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white text-foreground  px-4  py-2 text-sm rounded-4xl flex items-center gap-2"
            >
              <span className="text-primary"> ✔</span>{" "}
              {/* <Link href={t.l}>{t.t} </Link> */}
              <p>{t.t} </p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-5 text-center max-w-4xl mx-auto">
          إذا كانت منطقتك غير مذكورة أعلاه، تواصل معنا عبر الواتساب للتأكد من
          التغطية، فخدماتنا تمتد عمليًا إلى باقي أحياء الإمارة.
        </p>
      </section>
      <section className="pt-16  max-w-6xl mx-auto px-4 md:px-0">
        <div className="border-b border-border py-8">
          {/* Group header row */}

          <h3 className="text-xl sm:text-2xl font-bold  pb-6">
            نقل الأثاث في خورفكان
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-2 max-w-4xl">
            <p>
              بالإضافة إلى مدينة الشارقة، نقدم أيضًا خدمة نقل الأثاث في خورفكان،
              رغم بعدها الجغرافي عن مركز الإمارة على الساحل الشرقي. يتطلب النقل
              إلى خورفكان أو منها وقتًا إضافيًا للتنقل مقارنة بمناطق الشارقة
              الأقرب، ونأخذ ذلك بعين الاعتبار عند تحديد موعد النقل وتنسيق
              الرحلة.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-16 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="md:text-4xl text-3xl font-extrabold leading-tight mb-4">
              لماذا تختار الزايد لنقل الأثاث في الشارقة؟
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
      <Services
        nums={4}
        heading="خدمات نقل الأثاث التي نقدمها في الشارقة"
        desc={
          <>
            <p>
              يقدم فريق الزايد نقل اثاث مجموعة كاملة من خدمات نقل الأثاث في
              الشارقة، تغطي المنازل والشقق والفلل والمكاتب، إضافة إلى خدمات
              التغليف والفك والتركيب والتخزين.
            </p>
          </>
        }
        experience={services}
      />

      <LocProcessSection
        headline={<>كيف تسير عملية نقل الأثاث في الشارقة معنا؟</>}
        desc="لتسهيل تجربة النقل، تمر كل عملية مع الزايد نقل اثاث بخطوات واضحة من أول تواصل حتى الاستقرار في المكان الجديد:"
        process={[
          {
            title: "طلب عرض السعر",
            description:
              "تبدأ العملية بطلب عرض سعر، ولديك طريقتان لذلك: تقدير فوري عبر الإنترنت دون الحاجة لزيارة الموقع، أو معاينة ميدانية مجانية يقوم فيها فريقنا بمعاينة الأثاث في موقعك لتحديد السعر بدقة أكبر، خاصة في حالات الفلل أو المكاتب الكبيرة.",
          },
          {
            title: "التغليف",
            description:
              "بعد تأكيد الموعد، يصل فريقنا مزودًا بمواد التغليف المناسبة لكل قطعة، ويبدأ بتغليف الأثاث والأدوات المنزلية بما في ذلك القطع الزجاجية والحساسة.",
          },
          {
            title: "يوم النقل",
            description:
              "يتم فك الأثاث الكبير عند الحاجة، ثم تحميله في شاحنات مغلقة ومكيّفة تحافظ عليه من حرارة الشارقة أثناء الطريق، سواء كان الانتقال داخل الشارقة أو إلى إمارة أخرى.",
          },
          {
            title: "التركيب في الموقع الجديد",
            description:
              "عند الوصول، يقوم الفريق بإعادة تركيب الأثاث المفكوك وترتيب القطع في الموقع الجديد حسب رغبتك.",
          },
          {
            title: "التنظيف بعد الانتقال",
            description:
              "تُختتم عملية النقل بتنظيف شامل، لتصبح جاهزًا للاستقرار في مكانك الجديد دون مهام إضافية.",
          },
        ]}
      />

      <section className="w-full relative overflow-hidden mt-16 md:mt-24 py-20 md:py-28">
        <Image
          src={InterEmirateImage}
          alt="نقل الأثاث بين الشارقة ودبي والإمارات الأخرى"
          fill
          placeholder="blur"
          className="object-cover absolute inset-0 -z-20"
        />
        <div className="absolute inset-0 bg-secondary/75 -z-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            نقل الأثاث بين الشارقة ودبي والإمارات الأخرى
          </h2>
          <div className="space-y-4 text-white/90 text-sm sm:text-base  leading-relaxed max-w-3xl mx-auto">
            <p>
              نظرًا لقرب الشارقة من دبي، يحتاج كثير من سكان الشارقة إلى نقل اثاث
              الشارقة دبي أو العكس، خاصة مع انتقال الكثيرين للعمل بين الإمارتين.
              يقدم فريق الزايد نقل اثاث هذه الخدمة بانتظام، مع مراعاة أوقات
              الازدحام المروري على الطرق الرئيسية بين الإمارتين عند تحديد موعد
              النقل لتفادي التأخير.
            </p>
            <p>
              كذلك نوفر خدمة نقل اثاث الشارقة عجمان، وننقل الأثاث فعليًا إلى
              باقي إمارات الدولة، بما في ذلك أبوظبي والعين ورأس الخيمة والفجيرة
              وأم القيوين.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4  pt-16 lg:pt-28">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight ">
          أشياء يجب معرفتها قبل نقل الأثاث في الشارقة
        </h2>
        <p className="text-muted-foreground mt-5">
          قبل موعد النقل، هناك بعض الأمور العملية التي تساعد على إتمام العملية
          بسلاسة:
        </p>
        <div className="w-full bg-primary/20 aspect-video mt-10 rounded-2xl relative overflow-hidden">
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
              حجز المصعد والحصول على إذن الإدارة
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              في كثير من أبراج السكن بالشارقة، تشترط إدارة المبنى حجز المصعد
              مسبقًا أو الحصول على إذن لنقل الأثاث في وقت محدد. من الأفضل التأكد
              من هذا الإجراء مع إدارة مبناك قبل يوم النقل بوقت كافٍ، لتفادي أي
              تأخير في اليوم نفسه.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              اختيار وقت مناسب لتفادي الازدحام
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              إذا كان النقل يشمل التنقل بين الشارقة ودبي أو إمارة أخرى، يُفضّل
              تجنب أوقات الذروة الصباحية والمسائية على الطرق الرئيسية، حيث يساعد
              ذلك في إنجاز النقل بشكل أسرع وأكثر تنظيمًا.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              التغليف المناسب لحرارة الشارقة
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              نظرًا لارتفاع درجات الحرارة في الشارقة معظم أيام السنة، من المهم
              استخدام مواد تغليف تحمي القطع الخشبية والإلكترونية من التأثر
              بالحرارة أثناء النقل، خاصة إذا كانت مدة النقل تستغرق وقتًا أطول من
              المعتاد.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        openFirst
        title="الأسئلة الشائعة حول نقل الأثاث في الشارقة"
        faqs={SharjahFaqs}
      />

      <ContactSection
        title="جاهز لنقل أثاثك في الشارقة؟"
        description="تواصل مع فريق الزايد نقل اثاث الآن للحصول على عرض سعر فوري بدون أي دفعة مقدمة، وسيتولى فريقنا كل التفاصيل من التغليف حتى التركيب في موقعك الجديد."
      />
    </main>
  );
};

export default SharjahPage;

const features = [
  {
    description:
      "بدون أي دفعة مقدمة، وأسعار واضحة من أول عرض سعر حتى الفاتورة النهائية، دون رسوم خفية",

    image: "/Payment.jpg", // يمكنك تعديل مسار الصورة
  },
  {
    description:
      "تواصل سريع عبر الواتساب للرد على استفساراتك وتنسيق موعد النقل",
    // image: "/Insurance.jpg",
    image: "/whatsapp.jpg",
  },
  {
    description:
      "شاحنات مغلقة ومكيّفة تحافظ على أثاثك من حرارة الشارقة ورطوبتها أثناء النقل",
    image: "/truck.jpg",
  },
  {
    description:
      "خدمة على مدار 7 أيام في الأسبوع، مع فك وتركيب كامل للأثاث وتنظيف شامل بعد الانتقال",
    image: "/7-service.jpg",
  },
  {
    description: "خبرة تتجاوز 12 عامًا في نقل الأثاث السكني والتجاري.",
    image: "/12-icon.jpg",
  },
  {
    description: "تأمين شامل على كل قطعة من أثاثك أثناء النقل",
    image: "/Insurance.jpg",
  },
];

const services = [
  {
    title: "نقل اثاث المنزل في الشارقة",
    description: (
      <>
        {" "}
        <p>
          يشمل نقل اثاث المنزل كل ما يحتاجه البيت من أثاث غرف النوم والصالة
          والمطبخ، بأحجام وأنواع مختلفة. نبدأ بتقييم عدد القطع وحجمها لتحديد عدد
          العمال والشاحنة المناسبة، ثم ننتقل إلى التغليف والنقل والتركيب في
          الموقع الجديد.
        </p>{" "}
        <p>هذه الخدمة مناسبة سواء كنت تنتقل داخل الشارقة أو إلى إمارة أخرى.</p>
      </>
    ),
    icon: <HouseIcon className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث الشقق في الشارقة",
    description: (
      <>
        {" "}
        <p>
          نقل اثاث الشقق في الشارقة له اعتبارات خاصة، أبرزها التنسيق مع إدارة
          المبنى لحجز المصعد وتحديد موعد النقل بما يتوافق مع أوقات العمل في
          المبنى.
        </p>{" "}
        <p>
          نحرص على تنظيم عملية النقل بالكامل بدءًا من الشقة وحتى الشاحنة بأقل
          قدر من الإزعاج للجيران والمبنى. مناسبة للشقق الصغيرة والمفروشة بالكامل
          على حد سواء.
        </p>
      </>
    ),
    icon: <Building2 className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث الفلل في الشارقة",
    description: (
      <>
        {" "}
        <p>
          يختلف نقل اثاث الفلل عن الشقق من حيث عدد الغرف والطوابق، إضافة إلى
          أثاث الحديقة والمساحات الخارجية إن وُجدت.
        </p>{" "}
        <p>
          نوزع فريق العمل على مراحل النقل بما يتناسب مع حجم الفيلا، مع إيلاء
          عناية خاصة للقطع الثقيلة والزجاجية أثناء النقل بين الطوابق.
        </p>
      </>
    ),
    icon: <Castle className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث المكاتب في الشارقة",
    description: (
      <>
        {" "}
        <p>
          يتطلب نقل اثاث المكاتب في الشارقة تنسيقًا دقيقًا لتقليل تأثير النقل
          على سير العمل، لذلك نوفر إمكانية الجدولة خارج أوقات الدوام الرسمي عند
          الحاجة.
        </p>{" "}
        <p>
          تشمل الخدمة نقل المكاتب والكراسي وخزائن الملفات، مع التعامل بحذر مع
          الأجهزة الإلكترونية والمعدات المكتبية.
        </p>
      </>
    ),
    icon: <Building2 className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "تغليف اثاث في الشارقة",
    description: (
      <>
        {" "}
        <p>
          نستخدم مواد تغليف مخصصة حسب نوع القطعة: فقاعات هوائية وبطانيات ناعمة
          للقطع الخشبية، وصناديق مقواة للأدوات الزجاجية والمرايا.
        </p>{" "}
        <p>
          تختلف طريقة التغليف أيضًا حسب الغرض، فتغليف القطع للتخزين المؤقت يختلف
          عن تغليف القطع لنقلها لمسافات أطول بين الإمارات.
        </p>
      </>
    ),
    icon: <Boxes className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "فك وتركيب اثاث في الشارقة",
    description: (
      <>
        {" "}
        <p>
          تشمل خدمة فك وتركيب الأثاث القطع الكبيرة مثل غرف النوم والدواليب
          والمكتبات، إضافة إلى الأثاث القابل للطي مثل بعض قطع الإيكيا.
        </p>{" "}
        <p>
          يقوم فريقنا بالفك في الموقع القديم وإعادة التركيب في الموقع الجديد ضمن
          نفس عملية النقل، دون الحاجة للتعامل مع طرف خارجي منفصل.
        </p>
      </>
    ),
    icon: <Wrench className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "تخزين اثاث في الشارقة",
    description: (
      <>
        {" "}
        <p>
          إذا كانت هناك فترة فاصلة بين إخلاء المنزل الحالي واستلام المنزل
          الجديد، نوفر خدمة تخزين الأثاث لحين الجاهزية.
        </p>{" "}
        <p>
          تناسب هذه الخدمة أيضًا حالات تجديد المنزل أو السفر لفترة مؤقتة، مع
          مراعاة الحماية من الرطوبة والحرارة أثناء فترة التخزين.
        </p>
      </>
    ),
    icon: <Warehouse className="text-primary" strokeWidth={1} size={60} />,
  },
];
