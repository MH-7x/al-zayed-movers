import { Services } from "@/components/Services";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AreasSection } from "@/components/AreasSection";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/HeroSection";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { FAQSection } from "@/components/utils/FaqsSection";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { dubaiFaqs } from "@/lib/faqsData";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className=" overflow-hidden  pt-16 lg:pt-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Content & Description */}
            <div className="flex flex-col items-start text-right lg:col-span-6">
              {/* Sub-heading / Eyebrow with decorative bars */}
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
                <div className="flex items-center gap-1">
                  <span className="h-4 w-1.5 -skew-x-12 rounded-xs bg-primary" />
                  <span className="h-4 w-1.5 -skew-x-12 rounded-xs bg-primary" />
                </div>
                <span>من نحن</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl font-black leading-tight md:text-4xl md:pl-28 sm:pl-0 ">
                نحن افضل شركة نقل اثاث في دبي والإمارات
              </h2>

              {/* Description */}
              <p className="mt-5 text-base leading-relaxed sm:text-lg text-muted-foreground">
                كل عملية نقل عندنا تشمل تأمين شامل على المنقولات، شاحنات مغلقة
                ومكيّفة، وفريق ثابت ومدرب يتعامل مع كل قطعة بعناية من أول صندوق
                حتى آخر قطعة. أسعارنا واضحة من البداية. ما نتفق عليه هو ما
                تدفعه. بدون رسوم خفية، وبدون دفعة مقدمة.
              </p>

              {/* CTA Button using the provided Button component */}
              <div className="mt-8">
                <Button size="lg">
                  <span>تواصل معنا لـ نقل اثاث</span>
                  <ArrowLeft className="mr-2 size-4 " />
                </Button>
              </div>
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
      <section className={"pt-16 lg:pt-28"}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="md:text-4xl text-3xl font-extrabold leading-tight">
              لماذا الزايد نقل اثاث من <br /> افضل شركات نقل الاثاث في دبي؟
            </h2>
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
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Services />
      <PricingSection />
      <ProcessSection />
      <AreasSection />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-28">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight ">
          متطلبات وتصاريح نقل الاثاث في دبي — دليل عملي
        </h2>
        <p className="border-b pb-5 text-muted-foreground mt-5">
          كثير من الناس لا يعرفون إن النقل في دبي يحتاج إجراءات رسمية مع المبنى.
          لو ما سويتها مسبقاً، ممكن تتفاجأ إن الأمن يمنعك من إدخال أو إخراج
          الاثاث.
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
          <div className="md:col-span-2">
            <h3 className="font-bold md:text-2xl text-xl">
              تصريح الانتقال (Move-in / Move-out Permit)
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              أغلب المباني والمجمعات في دبي تطلب تصريح خروج أو دخول قبل يوم
              النقل. المطورين الكبار مثل إعمار ونخيل وداماك لهم إجراءات خاصة:
              تسوية فواتير الخدمات، تقديم نسخة من عقد الإيجار الجديد، وأحياناً
              دفع وديعة مؤقتة. فريقنا يساعدك في كل هذه الخطوات ويتواصل مع إدارة
              المبنى نيابةً عنك.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              حجز مصعد الخدمة وتنسيق المبنى
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              في الأبراج السكنية، لازم تحجز مصعد الخدمة مسبقاً. عادة قبل 48 إلى
              72 ساعة من موعد النقل. لو ما حجزت، ممكن يكون المصعد محجوز لساكن
              ثاني وتضطر تأجل. نحن نتولى الحجز والتنسيق مع أمن المبنى.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              إجراءات ديوا (DEWA) وإيجاري (Ejari)
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              قبل ما تغادر بيتك القديم، تأكد من تسوية فواتير ديوا (الكهرباء
              والماء) وقدم طلب نقل الخدمة أو إلغائها. وكمان انقل عقد إيجاري إلى
              عنوانك الجديد عشان ما يصير عندك مشاكل مع الإيجار أو تجديد التأشيرة
              لاحقاً.
            </p>
          </div>
        </div>
      </section>
      <FAQSection
        title="الأسئلة الشائعة حول نقل الاثاث في دبي"
        faqs={dubaiFaqs}
      />
      <ReviewsSection />
      <ContactSection
        title="تواصل معنا الآن — الزايد نقل اثاث دبي"
        description="جاهز للانتقال؟ تواصل مع الزايد نقل اثاث دبي واحصل على عرض سعر مجاني خلال دقائق."
      />
    </main>
  );
}

const features = [
  {
    title: "خبرة تزيد عن 12 سنة في نقل الاثاث بدبي",
    description:
      "فريقنا يشتغل في دبي كل يوم. نعرف أبراج داون تاون ومارينا والخليج التجاري، ونعرف فلل المرابع ودبي هيلز ونخلة جميرا. والأهم، نعرف إجراءات كل مطور عقاري: إعمار، نخيل، داماك، ودبي للعقارات. هذه الخبرة توفر عليك وقت ومتاعب كثيرة يوم النقل.",
    image: "/12-icon.jpg",
  },
  {
    title: "تأمين شامل وضمان مكتوب ضد التلف",
    description:
      'كثير من شركات نقل الاثاث في دبي تقول "مؤمنة" بدون ما توضح شنو يعني هذا الكلام. عندنا، التأمين يغطي الكسر والخدش أثناء النقل. لو صار أي ضرر — وهو شيء نادر — نصلح أو نعوض وفق سياسة مكتوبة وواضحة تستلمها مع عرض السعر. مو كلام عام. ضمان مكتوب وموقع.',
    image: "/Insurance.jpg",
  },
  {
    title: "أسعار ثابتة ومكتوبة — بدون دفعة مقدمة",
    description:
      'السعر اللي نتفق عليه هو السعر النهائي. ما في رسوم تُضاف يوم النقل، ولا تكاليف "مفاجئة" للسلالم أو الكراتين. وما نطلب أي دفعة مقدمة. تدفع بعد ما ننتهي وأنت راضي عن كل شيء.',
    image: "/Pricing.jpg",
  },

  {
    title: "فريق عمل مدرب ومتفرغ — ليسوا عمالة يومية",
    description:
      "الفرق بيننا وبين كثير من شركات نقل الاثاث هو إن فريقنا ثابت. نفس الأشخاص يشتغلون معنا بشكل دائم، مو عمال مياومة يتغيرون كل يوم. كل واحد فيهم متدرب على التعامل مع الاثاث الحساس والثقيل، ويلبس زي موحد ويحمل بطاقة تعريف.",
    image: "/team.jpg",
  },
  {
    title: "خدمة 7 أيام في الأسبوع مع تنظيف بعد النقل",
    description:
      "متاحين كل أيام الأسبوع، بما فيها الجمعة والعطلات. وبعد ما ننتهي من النقل والتركيب، فريقنا ينظف الموقع ويرفع كل مخلفات التغليف والكراتين. تستلم بيتك الجديد نظيف وجاهز.",
    image: "/7-service.jpg",
  },
  {
    title: "شاحنات مغلقة ومكيّفة",
    description:
      "عندنا أسطول سيارات نقل اثاث مغلقة بأحجام مختلفة (1.5 طن، 3 طن، 7 طن). كلها مجهزة بأنظمة تثبيت تمنع الاثاث من الحركة أثناء الطريق. والأهم إنها مغلقة ومكيّفة، فاثاثك محمي من حرارة دبي والغبار.",
    image: "/truck.jpg",
  },
];
