import Image from "next/image";
import HeroImage from "@/public/نقل-اثاث-ابوظبي.jpg";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  HouseIcon,
  Boxes,
  Wrench,
  Castle,
  Building2,
  Warehouse,
  Tv,
} from "lucide-react";
import { Services } from "@/components/Services";
import Link from "next/link";
import { LocProcessSection } from "@/components/utils/LocProcessSection";
import {
  Truck,
  ThermometerSnowflake,
  Navigation,
  ArrowLeft,
} from "lucide-react";
import { FAQSection } from "@/components/utils/FaqsSection";
import { AbuDhabiFaqs } from "@/lib/faqsData";
import { ContactSection } from "@/components/ContactSection";

const AbuDhabiPage = () => {
  return (
    <main>
      <section className="w-full relative overflow-hidden">
        <Image
          src={HeroImage}
          alt="الزايد نقل اثاث ابوظبي"
          fill
          loading="eager"
          placeholder="blur"
          priority
          className="object-cover absolute -z-10"
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-center text-white leading-tight">
            نقل اثاث ابوظبي - افضل شركة نقل اثاث
          </h1>
          <p className="text-center text-white/90 mt-5 md:px-24 leading-relaxed md:text-base text-sm">
            {" "}
            إذا كنت تبحث عن خدمة نقل اثاث ابوظبي تلبي احتياجاتك وترفع عنك هذا
            العبء، فأنت في المكان الصحيح. نحن في الزايد نقل اثاث نملك خبرة
            تتجاوز 12 عاما في هذا المجال، ونغطي كافة مناطق الإمارات انطلاقا من
            ابوظبي . نتعامل مع أثاثك وممتلكاتك كأنها تخصنا، ونستخدم مواد تغليف
            قوية وسيارات مجهزة لضمان وصول كل شيء بأمان.
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
              <Mail className="size-6 sm:size-8" strokeWidth={1.3} />
            </div>
            <div>
              <p className="font-bold text-lg sm:text-xl">ساعات العمل</p>
              <p className="text-muted-foreground block mt-1 font-medium">
                مفتوح 24/7
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
                خدمة نقل اثاث بضمان الحماية الكاملة
              </h2>

              {/* Description */}
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                الانتقال من منزل إلى آخر يستهلك الكثير من الجهد والوقت، خاصة مع
                وتيرة الحياة السريعة في أبوظبي. التفكير في تفكيك الأغراض
                وتغليفها ونقلها بأمان يسبب قلقا لا يحتاجه أحد.
              </p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                لذلك صممنا خدماتنا لتوفر لك راحة البال من لحظة التخطيط وحتى
                ترتيب آخر قطعة في بيتك الجديد. نهدف لتكون تجربة نقل اثاث في
                ابوظبي سلسة وخالية من أي تعقيدات.
              </p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                تواصل معنا اليوم عبر واتساب على الرقم 0556461731، وخلنا نرتب لك
                خطوتك الجاية بتسعير فوري وبدون أي التزامات.
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
      <section className="pt-16 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="md:text-4xl text-3xl font-extrabold leading-tight mb-4">
              لماذا الزايد أفضل شركة نقل اثاث <br className="md:block hidden" />{" "}
              في ابوظبي؟
            </h2>
            {/* تمت إضافة المقدمة هنا لضمان عدم حذف أي جزء من النص */}
            <p className="text-muted-foreground md:*:text-lg leading-relaxed">
              عندما تقرر تغيير سكنك، فإن اختيار افضل شركة نقل اثاث في ابوظبي
              يصنع فارقا كبيرا في تجربتك ويجنبك كثيرا من المتاعب. نجمع في عملنا
              بين الدقة في التنفيذ والشفافية التامة، وهذا ما يجعلنا من افضل
              شركات نقل الاثاث في ابوظبي التي يعتمد عليها العملاء. ونلتزم
              بمعايير واضحة تضمن حقوقك وراحتك في كل خطوة كشركة نقل اثاث ابوظبي.
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
      <Services
        nums={8}
        heading="خدمات نقل الاثاث في ابوظبي — ماذا نقدم لك؟"
        desc={
          <>
            <p>
              {" "}
              عند البحث عن خدمات نقل اثاث في ابوظبي، تختلف احتياجات كل عميل بين
              شقة صغيرة وفيلا كبيرة أو مقر عمل. نوفر في الزايد نقل اثاث خدمات
              متكاملة تغطي كافة مراحل النقل من الباب إلى الباب من خلال شاحنات
              مغلقة ومكيفة لحماية منقولاتك.
            </p>

            <p>
              كواحدة من شركات نقل الاثاث في ابوظبي، نعتمد على خبرة تتجاوز 12
              عاما وتغطية تأمينية شاملة لتوفير حلول عملية وآمنة تناسب متطلباتك.
            </p>
          </>
        }
        experience={experience}
      />
      <section className="pt-16  md:px-0 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-3xl md:text-4xl leading-tight">
              نقل الاثاث من ابوظبي إلى الإمارات الأخرى
            </h2>
          </div>

          {/* 3 Route Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Card 1: Dubai */}
            <article className="group relative flex flex-col justify-between rounded-2xl bg-card p-6 ">
              <div>
                {/* Route Indicator */}
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <div className="flex items-center gap-2">
                    <span className=" text-xs font-bold text-secondary">
                      أبوظبي
                    </span>
                    <span className="text-xs font-bold text-primary">←</span>
                    <span className=" text-xs font-bold text-primary">دبي</span>
                  </div>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-secondary">
                    <Truck className="size-4.5" />
                  </div>
                </div>

                {/* Title & Body */}
                <h3 className="mt-5 text-xl font-bold ">
                  نقل اثاث من ابوظبي إلى دبي
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  تستغرق الرحلة عبر شارع الشيخ زايد حوالي ساعة ونصف. ندير مسار{" "}
                  <Link
                    href="/نقل-اثاث-دبي"
                    className="font-bold text-primary underline underline-offset-4 "
                  >
                    نقل اثاث دبي
                  </Link>{" "}
                  اليومي لضمان توصيل سريع بين الإمارتين. ونقدم أسعاراً تنافسية
                  تناسب حركة الانتقال المستمرة للعمل أو السكن.
                </p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <Link
                  href="/نقل-اثاث-دبي"
                  className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                >
                  <span>تفاصيل خدمة دبي</span>
                  <ArrowLeft className="mr-1.5 size-3.5 " />
                </Link>
              </div>
            </article>

            {/* Card 2: Al Ain */}
            <article className="group relative flex flex-col justify-between rounded-2xl bg-card p-6 ">
              <div>
                {/* Route Indicator */}
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <div className="flex items-center gap-2">
                    <span className=" text-xs font-bold text-secondary">
                      أبوظبي
                    </span>
                    <span className="text-xs font-bold text-primary">←</span>
                    <span className=" text-xs font-bold text-primary">
                      العين
                    </span>
                  </div>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-secondary">
                    <ThermometerSnowflake className="size-4.5" />
                  </div>
                </div>

                {/* Title & Body */}
                <h3 className="mt-5 text-xl font-bold text-secondary">
                  نقل اثاث من ابوظبي إلى العين
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  يمتد الطريق عبر شارع E22 لحوالي ساعتين. تتطلب خطة{" "}
                  <Link
                    href="/نقل-اثاث-العين"
                    className="font-bold text-primary underline underline-offset-4 "
                  >
                    نقل اثاث العين
                  </Link>{" "}
                  شاحنات مكيفة لحماية الأثاث والأجهزة الكهربائية من حرارة
                  الصحراء. نثبت الحمولة جيداً لتفادي أي اهتزازات خلال الرحلة
                  الطويلة.
                </p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <Link
                  href="/نقل-اثاث-العين"
                  className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                >
                  <span>تفاصيل خدمة العين</span>
                  <ArrowLeft className="mr-1.5 size-3.5 " />
                </Link>
              </div>
            </article>

            {/* Card 3: Sharjah & Ajman */}
            <article className="group relative flex flex-col justify-between rounded-2xl bg-card p-6 ">
              <div>
                {/* Route Indicator */}
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <div className="flex items-center gap-2">
                    <span className=" text-xs font-bold text-secondary">
                      أبوظبي
                    </span>
                    <span className="text-xs font-bold text-primary">←</span>
                    <span className=" text-xs font-bold text-primary">
                      الشارقة وعجمان
                    </span>
                  </div>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-secondary ">
                    <Navigation className="size-4.5" />
                  </div>
                </div>

                {/* Title & Body */}
                <h3 className="mt-5 text-xl font-bold text-secondary">
                  نقل اثاث من ابوظبي إلى الشارقة وعجمان
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  ننظم رحلات مجدولة لخدمات{" "}
                  <Link
                    href="/نقل-اثاث-الشارقة"
                    className="font-bold text-primary underline underline-offset-4 "
                  >
                    نقل اثاث الشارقة
                  </Link>{" "}
                  وتغطية مجمعات{" "}
                  <Link
                    href="/نقل-اثاث-عجمان"
                    className="font-bold text-primary underline underline-offset-4 "
                  >
                    نقل اثاث عجمان
                  </Link>
                  . ندرس مسارات الطرق لتجنب الازدحام المروري في الشوارع الفاصلة
                  بين الإمارات الشمالية.
                </p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <Link
                  href="/نقل-اثاث-الشارقة"
                  className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                >
                  <span>تفاصيل خدمة الشارقة وعجمان</span>
                  <ArrowLeft className="mr-1.5 size-3.5 " />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <LocProcessSection
        headline={
          <>
            خطوات عملية نقل الاثاث مع <br className="md:block hidden" /> الزايد
            نقل اثاث
          </>
        }
        process={[
          {
            title: "التواصل والاستفسار",
            description:
              " يمكنك التواصل معنا عبر واتساب على الرقم 055 646 1731 أو بالاتصال المباشر. فريقنا يرد فورا للإجابة على جميع أسئلتك وتحديد موعد مبدئي للمعاينة.",
          },
          {
            title: "المعاينة المجانية",
            description:
              "نرسل خبيرا إلى موقعك لتقييم حجم الأثاث والمتطلبات الخاصة. هذه الزيارة تساعدنا في تحديد عدد العمال وسيارات النقل المطلوبة بدقة.",
          },
          {
            title: "عرض السعر الشفاف",
            description:
              "بناء على المعاينة، نقدم لك تسعيرا مفصلا يشمل كافة الخدمات. لا نطلب أي دفعات مقدمة، وتكلفة الخدمة تكون واضحة بدون أي مفاجآت لاحقة.",
          },
          {
            title: "التجهيز والتغليف",
            description:
              "يصل فريقنا في الموعد المحدد مع مواد التغليف والمعدات اللازمة. نبدأ بفك الأثاث وتغليفه لحمايته من أي خدوش أثناء النقل.",
          },
          {
            title: "النقل الآمن",
            description:
              "نحمل الأثاث ونرتبه داخل سيارات نقل مغلقة ومجهزة من الداخل. نضمن وصول كل قطعة بأمان تام إلى موقعك الجديد بفضل تأميننا الشامل.",
          },
          {
            title: "التركيب والتسليم",
            description:
              "بعد الوصول، نقوم بتركيب كل قطعة أثاث في المكان الذي تحدده. ننظف المكان من مواد التغليف ونتأكد من رضاك التام قبل المغادرة.",
          },
        ]}
      />
      {/* Pricing Section */}
      <section className="pt-16 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight mb-4">
              أسعار نقل الاثاث في ابوظبي — دليل الأسعار التقريبية
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              معرفة اسعار شركات نقل الاثاث في ابوظبي يساعدك في وضع ميزانية دقيقة
              لعملية الانتقال. وفرنا لك هذا الدليل المبدئي لتكون الصورة واضحة
              قبل التواصل.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card/50 border border-border/80 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-4">
              أسعار نقل الاثاث حسب حجم المسكن
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-border/60 text-muted-foreground text-sm font-semibold">
                    <th className="py-3 px-4">نوع المسكن</th>
                    <th className="py-3 px-4 text-left">
                      نطاق السعر (درهم إماراتي)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-sm">
                  {pricingData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-bold text-secondary">
                        {item.type}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-primary text-left">
                        {item.price} درهم
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 pt-4 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              هذه الأسعار تقريبية وتعطي فكرة عامة عن التكلفة المتوقعة. السعر
              النهائي يعتمد على تفاصيل المعاينة المجانية وتحديد المتطلبات
              الدقيقة لكل عملية نقل.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-16  max-w-6xl mx-auto px-4 md:px-0">
        <div className="border-b border-border pb-8">
          {/* Group header row */}

          <h3 className="text-xl sm:text-2xl font-bold  pb-6">
            العوامل المؤثرة على تكلفة نقل الاثاث
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-2 max-w-4xl">
            <p>
              تختلف تكلفة النقل بناء على عدة عوامل يجب أخذها في الاعتبار. كمية
              الأثاث وعدد الغرف تحدد حجم سيارة النقل وعدد العمال المطلوبين.
              والمسافة بين الموقع القديم والجديد تؤثر أيضا على السعر النهائي.
            </p>
            <p>
              وجود مصعد يسهل العملية، بينما الحاجة لاستخدام السلالم تتطلب جهدا
              ووقتا إضافيا من العمال. والأثاث الثقيل مثل البيانو أو الخزائن
              الضخمة يحتاج إلى معدات وعناية خاصة. الخدمات الإضافية كفك وتركيب
              المكيفات أو التغليف الخاص للتحف تزيد من التكلفة.
            </p>
            <p>
              وقت النقل يلعب دورا أيضا، حيث تكون الأسعار أعلى في نهاية الشهر
              بسبب زيادة الطلب. وأخيرا، يجب مراعاة أي رسوم قد تفرضها إدارة
              البناية لاستخدام المصعد أو استخراج تصاريح النقل.
            </p>
          </div>
        </div>
        <div className="border-b border-border py-8">
          {/* Group header row */}

          <h3 className="text-xl sm:text-2xl font-bold  pb-6">
            نصائح لتوفير تكاليف النقل
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-2 max-w-4xl">
            <p>
              يمكنك تقليل تكلفة النقل بخطوات بسيطة. تخلص من الأغراض التي لم تعد
              بحاجة إليها قبل موعد الانتقال لتقليل حجم المنقولات. واجمع الأغراض
              الشخصية الصغيرة والملابس في صناديق بنفسك لتقليل الوقت والجهد على
              فريق النقل.
            </p>
            <p>
              احجز موعد النقل مبكرا، ويفضل قبل أسبوعين، لضمان الحصول على سعر
              مناسب وتوافر الفريق. وتجنب النقل في نهاية الشهر أو أيام العطلات
              حيث يرتفع الطلب والأسعار. اطلب عروض أسعار من 3 شركات على الأقل
              وقارن بينها لتختار الأنسب لميزانيتك.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4  pt-16 lg:pt-28">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight ">
          مناطق خدمة نقل الاثاث في ابوظبي
        </h2>

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
              نقل اثاث مصفح (المنطقة الصناعية والسكنية)
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تتطلب طبيعة المباني في مدينة آيكاد والمستودعات في مصفح الصناعية
              تعاملا خاصا مع المداخل الواسعة والممرات. نوفر خدمات نقل اثاث مصفح
              تلبي احتياجات القطاع التجاري والمنازل في الشعبية. عند طلب نقل اثاث
              في مصفح، نجهز شاحنات تناسب الشوارع العريضة والمناطق المزدحمة في
              الأحياء السكنية والعمالية.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث الرويس ابوظبي{" "}
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تبعد مدينة الرويس عن العاصمة مسافة تستدعي تخطيطا دقيقا للرحلة.
              تخدم فرقنا المجمعات السكنية التابعة لأدنوك وتدير عمليات نقل اثاث
              الرويس بمركبات مجهزة للمسافات الطويلة في منطقة الظفرة. نوفر مواد
              تغليف تتحمل ظروف الطريق السريع لضمان وصول الممتلكات بأمان.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث مدينة خليفة ابوظبي
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تتكون مدينة خليفة أ وب بشكل رئيسي من الفلل والتاون هاوس القريبة من
              مطار أبوظبي. نستخدم معدات مصممة للمنازل ذات الطوابق المتعددة
              والسلالم الداخلية. تشمل خدماتنا تفكيك وتركيب الأثاث الخشبي الضخم
              الذي يميز ديكورات الفلل في هذه المنطقة.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث جزيرة الريم
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تحتاج الأبراج الشاهقة مثل أبراج صن آند سكاي وشمس أبوظبي ومارينا
              سكوير إلى تنسيق مسبق مع إدارة المباني. نتولى حجز المصاعد وتوفير
              تصاريح العمل المطلوبة. نرسل عمالة مدربة للتعامل مع الممرات الضيقة
              وأنظمة الحماية في الأبراج.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث جزيرة ياس
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تتميز مجمعات ياس إيكرز وويست ياس بالبنية التحتية الحديثة والمنازل
              الجديدة. ندير عمليات النقل بالقرب من ياس مول والوجهات الترفيهية مع
              مراعاة أوقات الذروة المرورية. ونحرص على حماية الأرضيات والجدران
              المنجزة حديثا أثناء إدخال وتركيب قطع الأثاث الكبيرة.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث بني ياس ومحمد بن زايد
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              ترتبط هذه المناطق بجسر الشيخ زايد وتضم مزيجا من الشقق والفلل
              السكنية بأسعار اقتصادية. نوفر باقات نقل تناسب ميزانية الأسر
              المقيمة هنا. ونوزع فرق العمل لتغطية المسافات بين المجمعات السكنية
              وتسريع عملية الفك والتركيب في نفس اليوم.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث الخالدية والمرور والكورنيش
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تواجهنا تحديات قلة المواقف وضيق المداخل في المباني القديمة بوسط
              أبو ظبي. نخطط مسبقا لأوقات التحميل وتأمين مساحات وقوف الشاحنات
              بالقرب من المداخل. ونعتمد على أوناش الرفع الخارجية لتجاوز سلالم
              البنايات القديمة الخالية من مصاعد الخدمات.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              نقل اثاث جزيرة السعديات
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تتطلب الفلل في شاطئ السعديات والمنطقة الثقافية قرب متحف اللوفر
              عناية مضاعفة. نستخدم مواد تغليف أوروبية لحماية التحف واللوحات
              والأثاث الراقي. فريقنا مدرب للتعامل مع القطع ذات القيمة العالية.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              مناطق أخرى نخدمها في ابوظبي
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تمتد تغطيتنا لتشمل أحياء الشهامة والوثبة والعين الفايضة. نصل
              بأسطولنا إلى مدينة زايد والباهية والغدير. كما نوفر فرق عمل جاهزة
              لخدمة مناطق الشامخة والمفرق والسمحة مع الالتزام بالمواعيد المحددة.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4  pt-16 lg:pt-28">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight ">
          سيارات ومعدات نقل الاثاث في ابوظبي
        </h2>

        <div className="w-full bg-primary/20 aspect-video mt-10 rounded-2xl relative overflow-hidden">
          <Image
            src={"/شركة-الزايد-نقل-اثاث-دبي.jpg"}
            alt="شركة الزايد نقل اثاث دبي"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              سيارات نقل مغلقة ومبطنة
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              نمتلك أسطولا من الشاحنات المغلقة بالكامل والمزودة بأنظمة تحكم
              بالحرارة. تبدأ سعة الشاحنات من 3 طن لتناسب الشقق الصغيرة وتصل إلى
              10 طن للفلل الكبيرة. جميع الصناديق مبطنة من الداخل لحماية الألواح
              الخشبية والأجهزة من الخدوش والاحتكاك أثناء القيادة.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              بيك اب لنقل القطع الفردية
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              نخصص سيارات بيك اب نقل عفش لنقل الأغراض القليلة أو القطع المنفردة
              بتكلفة اقتصادية. تناسب هذه السيارات تحريك الكنب والأجهزة
              الكهربائية بين الأحياء القريبة. وتتميز بمرونة التنقل في الشوارع
              الضيقة ومواقف الأقبية.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-2xl text-xl">
              أوناش ورافعات هيدروليكية
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              تعتمد طواقمنا على الأوناش الهيدروليكية لرفع الأثاث الضخم إلى
              الطوابق العليا في حال ضيق السلالم أو صغر حجم المصعد. توفر الرافعات
              وقتا وجهدا وتمنع تضرر قطع الأثاث الكبيرة والمداخل المشتركة في
              البنايات.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4  pt-16 ">
        <h2 className="md:text-4xl text-3xl font-extrabold leading-tight ">
          نصائح مهمة قبل نقل الاثاث في ابوظبي
        </h2>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-bold md:text-2xl text-xl">
            قائمة التجهيز قبل يوم النقل
          </h3>
          <p className="my-3 text-muted-foreground ">
            تبدأ عملية نقل اثاث في ابوظبي الناجحة قبل أسابيع من يوم الانتقال.
            هذه قائمة تجهيز تسهل عليك العملية:
          </p>
          <ol className=" list-decimal space-y-3 pr-5 text-muted-foreground ">
            <li className="pr-1">
              <strong className="">قبل أسبوعين:</strong> تواصل مع إدارة البناية
              الجديدة والقديمة واحجز المصعد ليوم النقل. يجب أيضا إخطار شركة
              أبوظبي للتوزيع (ADDC) لترتيب فصل وتشغيل الخدمات.
            </li>
            <li className="pr-1">
              <strong className="">قبل أسبوع:</strong> قم بفرز الأغراض وتخلص من
              الكراكيب. يمكنك بيع أو التبرع بما لا تحتاجه لتقليل حجم المنقولات.
            </li>
            <li className="pr-1">
              <strong className="">قبل 3 أيام:</strong> ابدأ بتعبئة الأغراض
              الشخصية والأشياء الثمينة. افصل الأجهزة الكهربائية مثل الثلاجات
              ليذوب الثلج تماما.
            </li>
            <li className="pr-1">
              <strong className="">يوم النقل:</strong> تأكد من تجهيز ممر واضح
              لتسهيل حركة العمال. وافحص توفر مواقف قريبة لشاحنات النقل.
            </li>
            <li className="pr-1">
              <strong className="">بعد النقل:</strong> قم بجرد المنقولات بمجرد
              وصولها. تأكد من إتمام تركيب الأثاث في أماكنه الصحيحة، ثم وقع محضر
              التسليم مع المشرف.
            </li>
          </ol>
          <h3 className="font-bold md:text-2xl text-xl mt-10">
            أفضل وقت للانتقال في ابوظبي
          </h3>
          <p className="my-3 text-muted-foreground ">
            يؤثر توقيت الانتقال على التكلفة وسلامة الأثاث. تجنب الانتقال خلال
            أشهر الصيف (يونيو إلى أغسطس)، حيث تؤثر الحرارة الشديدة على بعض
            المواد والأجهزة. أفضل الأشهر للانتقال هي من أكتوبر إلى مارس.
          </p>
          <p className="my-3 text-muted-foreground ">
            حاول تجنب نهاية وبداية الشهر لأن الطلب يكون مرتفعا مما يؤدي لزيادة
            الأسعار. الأيام من الأحد إلى الأربعاء هي الأنسب. وابدأ النقل في
            الصباح الباكر (بين 6 إلى 7 صباحا) لتفادي الازدحام المروري وحرارة
            منتصف النهار.
          </p>
        </div>
      </section>
      <FAQSection
        openFirst
        title="الأسئلة الشائعة حول نقل الاثاث في ابوظبي"
        faqs={AbuDhabiFaqs}
      />
      <ContactSection
        title="تواصل معنا - احصل على عرض سعر مجاني لنقل اثاثك في ابوظبي"
        description="هل تبحث عن شركة نقل اثاث ابوظبي توفر لك خدمة سريعة ومضمونة؟ نحن في الزايد هنا لمساعدتك في إنجاز المهمة بدون توتر. تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر يناسب ميزانيتك. نجيك لعندك ونقيّم حجم النقل بدون أي التزام."
      />
    </main>
  );
};

export default AbuDhabiPage;

const pricingData = [
  { type: "استوديو", price: "400 – 900" },
  { type: "غرفة وصالة", price: "650 – 1,500" },
  { type: "غرفتين وصالة", price: "800 – 1,800" },
  { type: "3 غرف وصالة", price: "1,200 – 2,200" },
  { type: "4 غرف فأكثر", price: "1,500 – 2,500+" },
  { type: "فيلا صغيرة", price: "2,000 – 4,000" },
  { type: "فيلا كبيرة", price: "3,500 – 6,000+" },
  { type: "نقل قطعة واحدة (بيك اب)", price: "200 – 500" },
];

const features = [
  {
    title: "العمل بدون أي دفعة مقدمة",
    description:
      "أول ما يميزنا هو العمل بدون أي دفعة مقدمة. أنت غير ملزم بدفع أي مبالغ قبل بدء العمل أو أثناءه. نقوم بتنفيذ عملية النقل بالكامل وتجهيز المكان، ولا يتم سداد التكاليف إلا بعد الانتهاء التام وتأكدك من جودة الخدمة.",
    image: "/Payment.jpg", // يمكنك تعديل مسار الصورة
  },
  {
    title: "التزام بضمان صفر تلف",
    description:
      "نقدم لك التزاما مكتوبا بضمان صفر تلف وحماية كل قطعة أثاث من الخدش أو الكسر. يحرص فريقنا على تغليف وتحميل الأغراض بعناية تمنع أي أضرار مهما كان حجمها أو وزنها.",
    image: "/Guarantee.jpg",
  },
  {
    title: "تأمين شامل وتعويض فوري",
    description:
      "في حال حدوث أي ضرر غير متوقع، نعوضك بشكل فوري من خلال تأمين شامل نوفره لجميع العملاء. هذه التغطية تشمل ممتلكاتك بالكامل وتمنحك أمانا إضافيا طوال فترة النقل والتركيب.",
    image: "/Insurance.jpg",
  },
  {
    title: "تسعير شفاف",
    description:
      "التسعير لدينا شفاف تماما. المبلغ الذي نتفق عليه في البداية هو السعر النهائي الذي تدفعه. لا توجد رسوم خفية أو مفاجآت مالية تظهر بعد إتمام العمل.",
    image: "/Pricing.jpg",
  },
  {
    title: "شاحنات مغلقة ومكيفة",
    description:
      "تتطلب أجواء أبوظبي الحارة حماية خاصة للأثاث من التمدد والغبار. نستخدم شاحنات مغلقة ومكيفة تحافظ على مقتنياتك من تقلبات الطقس وتضمن وصولها بحالتها الأصلية.",
    image: "/truck.jpg",
  },
  {
    title: "تواصل فوري عبر واتساب",
    description:
      "فريقنا متاح للتواصل الفوري عبر واتساب للرد على استفساراتك وتقديم عروض الأسعار خلال دقائق. يمكنك مشاركة تفاصيل طلبك أو الحصول على استشارة سريعة بضغطة زر.",
    image: "/whatsapp.jpg",
  },
  {
    title: "خدمة 7 أيام بالأسبوع",
    description:
      "ندرك أن التزاماتك قد تتطلب مرونة في المواعيد. لذلك نقدم خدماتنا طوال 7 أيام بالأسبوع لتتمكن من اختيار الوقت الذي يناسب جدولك.",
    image: "/7-service.jpg",
  },
  {
    title: "تنظيف شامل بعد النقل",
    description:
      "لا تنتهي مهمتنا عند تفريغ الأثاث وتركيبه في المكان الجديد. يقوم فريقنا بتنظيف شامل بعد النقل وإزالة جميع مخلفات التغليف والكرتون، لتستلم بيتك مرتبا وجاهزا للسكن.",
    image: "/cleaning.jpg",
  },
];

const experience = [
  {
    title: "فك وتركيب الاثاث في ابوظبي",
    description: (
      <>
        {" "}
        <p>
          تبدأ عملية النقل الآمنة بتفكيك الأثاث لضمان سهولة تحريكه عبر الممرات
          الضيقة وحمايته من التضرر. يضم فريقنا نجارين محترفين يمتلكون خبرة واسعة
          في التعامل مع كافة التصاميم الخشبية والمعدنية.
        </p>{" "}
        <p>
          نتولى فك وتركيب غرف نوم بالكامل، بما في ذلك الأسرة المزدوجة، الخزائن
          الكبيرة، دواليب المطبخ، ووحدات التلفزيون. كما نتعامل بكفاءة مع أثاث
          ايكيا الذي يتطلب دقة خاصة في التعامل مع البراغي والمفصلات لتجنب تلف
          الخشب المضغوط.
        </p>
        <p>
          نقوم بترقيم أجزاء الأثاث وتجميع البراغي في أكياس مخصصة لضمان عدم ضياع
          أي قطعة أثناء النقل. يمكنك الاعتماد على{" "}
          <a
            className="underline text-primary underline-offset-4"
            href="/فك-وتركيب-اثاث-في-دبي"
          >
            خدمة فك وتركيب الاثاث
          </a>{" "}
          لدينا لإعادة تجميع كل شيء في منزلك الجديد بشكل يطابق حالته الأصلية.
        </p>
      </>
    ),
    icon: <Wrench className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "تغليف الاثاث باحترافية",
    description: (
      <>
        {" "}
        <p>
          استخدام مواد تغليف عالية الجودة هو ما يضمن وصول ممتلكاتك بدون خدش
          واحد. نعتمد في الزايد على بابل راب مبطن لحماية القطع الزجاجية والمرايا
          والتحف القابلة للكسر.
        </p>{" "}
        <p>
          ونوفر كراتين متينة بمقاسات مختلفة لتعبئة الأغراض الشخصية والكتب وأدوات
          المطبخ، مع استخدام فلين لحماية الحواف والزوايا. ونستخدم بطانيات واقية
          لتغطية الأجهزة المنزلية والقطع الخشبية الكبيرة، مع لفها بطبقات من شرنك
          راب لتثبيت الأبواب والأدراج ومنع دخول الأتربة.
        </p>
        <p>
          كل خطوة في عملية{" "}
          <Link href="/تغليف-اثاث-في-دبي">تغليف اثاث احترافي </Link> تتم
          حسب طبيعة كل قطعة. نخصص صناديق مبطنة للإلكترونيات والأطباق الصينية،
          ونتأكد من إغلاق الصناديق بشريط لاصق قوي وتسميتها بمحتوياتها والغرفة
          المخصصة لها. هذه العملية متضمنة في خدماتنا، ولا تحتاج للبحث عن أو شراء
          أي مواد تغليف إضافية.
        </p>
      </>
    ),
    icon: <Boxes className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث الشقق والاستوديوهات",
    description: (
      <>
        {" "}
        <p>
          سواء كنت تنتقل من استوديو صغير أو شقة بأربع غرف وصالة، ننظم عملية
          النقل لتناسب طبيعة المبنى السكني. نتولى بالنيابة عنك التنسيق مع إدارة
          المبنى لتأمين تصاريح الخروج والدخول، وحجز المصاعد في الأوقات المسموحة
          لتجنب أي غرامات تأخير.
        </p>{" "}
        <p>
          خدمة نقل اثاث شقق لدينا تراعي ضيق الممرات ومساحات التحميل المحدودة في
          الأبراج السكنية في أبوظبي. ونحرص على توفير عدد كاف من العمال لإنهاء
          نقل استوديو أو شقة بالكامل في نفس اليوم
        </p>
      </>
    ),
    icon: <HouseIcon className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث الفلل في ابوظبي",
    description: (
      <>
        {" "}
        <p>
          تتطلب الفلل تجهيزات مختلفة بسبب كثرة الغرف وحجم الأثاث وتعدد الطوابق
          والمساحات الخارجية. نقدم خدمات نقل اثاث فلل متكاملة تشمل تفكيك ونقل
          غرف النوم المتعددة، أطقم الكنب الكبيرة، المظلات، ومعدات الحدائق
          بالكامل.
        </p>{" "}
        <p>
          وفي حال وجود قطع ضخمة يصعب تمريرها من الأبواب أو السلالم المنحنية،
          نوفر اوناش رفع الأثاث لتنزيلها أو رفعها بأمان عبر النوافذ والشرفات.
          فريقنا مجهز للتعامل مع ممتلكات الفلل، من غرف المعيشة والثريات إلى
          معدات الصالات الرياضية المنزلية.
        </p>
      </>
    ),
    icon: <Castle className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل اثاث المكاتب والشركات",
    description: (
      <>
        {" "}
        <p>
          نقل مقار العمل يتطلب سرعة ودقة لتجنب تعطيل أعمالك اليومية وتأخير
          الموظفين. ننفذ خدمات نقل اثاث تجاري ومكتبي بمرونة، حيث يمكننا جدولة
          النقل خلال عطلات نهاية الأسبوع أو خارج أوقات العمل.
        </p>{" "}
        <p>
          نتولى تفكيك ونقل المكاتب ومحطات العمل والكراسي والخزائن المعدنية.
          ونولي اهتماما خاصا لسرية وأمان الملفات والوثائق أثناء عملية نقل اثاث
          مكتبي. يتم نقل أجهزة تكنولوجيا المعلومات والخوادم بآليات مخصصة
          لحمايتها من الصدمات، ونعيد ترتيب الأثاث حسب المخطط المعتمد لمكتبك.
        </p>
      </>
    ),
    icon: <Building2 className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "نقل الأجهزة الكهربائية والإلكترونيات",
    description: (
      <>
        {" "}
        <p>
          الأجهزة المنزلية والإلكترونيات حساسة وتتطلب تعاملا دقيقا لتجنب
          الأعطال. يضم فريقنا فنيين مدربين على فصل وتوصيل الغسالات والثلاجات
          وأفران الغاز وشاشات التلفزيون المسطحة. كما نوفر خدمة فك وتركيب مكيفات
          السبليت لضمان انتقالها وعملها في موقعك الجديد.
        </p>{" "}
        <p>
          عند نقل أجهزة كهربائية، نستخدم مواد تغليف مضادة للشحنات الساكنة لحماية
          الأجزاء الإلكترونية. ونهتم بتثبيت الحلة الداخلية للغسالات وتأمين
          الأرفف الزجاجية داخل الثلاجات لتفادي أي أضرار من الاهتزاز أثناء النقل.
        </p>
      </>
    ),
    icon: <Tv className="text-primary" strokeWidth={1} size={60} />,
  },
  {
    title: "تخزين الاثاث في ابوظبي",
    description: (
      <>
        {" "}
        <p>
          قد تواجه فجوة زمنية بين انتهاء عقد إيجارك الحالي واستلام مفاتيح منزلك
          الجديد، أو ربما تقوم بتجديدات في منزلك. إذا كنت تبحث عن تخزين اثاث
          ابوظبي، نوفر مستودعات تخزين آمنة ومجهزة بأنظمة تحكم في درجات الحرارة
          لحماية أثاثك من حرارة الصيف والرطوبة.
        </p>{" "}
        <p>
          يمكنك الاستفادة من خدمة تخزين اثاث آمن لفترات قصيرة تمتد لأسابيع أو
          طويلة لعدة أشهر. مستودعاتنا مزودة بكاميرات مراقبة وتخضع لحراسة مستمرة.
        </p>
      </>
    ),
    icon: <Warehouse className="text-primary" strokeWidth={1} size={60} />,
  },
];
