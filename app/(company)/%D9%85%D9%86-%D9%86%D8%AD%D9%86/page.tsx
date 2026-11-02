import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Briefcase,
  Camera,
  Castle,
  CalendarDays,
  Check,
  ClipboardList,
  Eye,
  FileCheck2,
  HouseIcon,
  Boxes,
  Building2,
  MapPin,
  MessageCircle,
  PackageCheck,
  Quote,
  Search,
  ShieldCheck,
  Snowflake,
  Target,
  Truck,
  Wallet,
  Warehouse,
  Wrench,
  Building,
} from "lucide-react";
import { AboutPhoto } from "@/components/about/AboutPhoto";
import TeamPhoto from "@/public/img/فريق-الزايد-نقل-اثاث-دبي.jpg";
import StoryPhoto from "@/public/img/قصة-الزايد-نقل-اثاث.jpg";
import MovingDayPhoto from "@/public/img/يوم-نقل-الاثاث-الزايد.jpg";
import FleetPhoto from "@/public/img/اسطول-شاحنات-الزايد-نقل-اثاث.jpg";
import CrewPhoto from "@/public/img/عامل-نقل-اثاث-الزايد-بطاقة-تعريف.jpg";
import CarpenterPhoto from "@/public/img/نجار-فك-وتركيب-اثاث-الزايد.jpg";
import { SectionHeading } from "@/components/location/SectionHeading";
import { QuoteActions } from "@/components/location/QuoteActions";
import { CtaBand } from "@/components/location/CtaBand";
import { FAQSection } from "@/components/utils/FaqsSection";
import { AboutFaqs } from "@/lib/faqsData";
import { AREA_HREF, SERVICE_HREF } from "@/components/services/constants";

export const metadata: Metadata = {
  title: "من نحن | الزايد نقل اثاث دبي - خبرة 12 سنة",
  description:
    "الزايد نقل اثاث دبي، شركة مرخصة بخبرة أكثر من 12 سنة. سعر ثابت، تأمين وضمان مكتوب، وبدون دفعة مقدمة. اطلب عرض سعر فوري عبر الواتساب.",
};

const linkClass =
  "font-bold text-primary underline underline-offset-4 hover:text-primary/80";

const quickFacts = [
  {
    icon: Award,
    text: "أكثر من 12 سنة خبرة في نقل الأثاث وتغليفه وفكه وتركيبه",
  },
  {
    icon: BadgeCheck,
    text: "شركة مرخصة في دبي، وخدمتنا تصل إلى كل إمارات الدولة",
  },
  {
    icon: CalendarDays,
    text: "نشتغل 7 أيام في الأسبوع، حتى الجمعة والعطلات",
  },
  { icon: Wallet, text: "سعر ثابت مكتوب، وبدون دفعة مقدمة" },
  {
    icon: ShieldCheck,
    text: "تأمين شامل على كل ما ننقله، وضمان كتابي ضد الكسر والخدش",
  },
];

const values = [
  {
    icon: Camera,
    lead: "ما يتضرر أثاثك.",
    text: "نصوّر القطع قبل الفك، ونكتب رقم الصندوق واسم الغرفة عليه، ونثبّت كل شي داخل شاحنات مغلقة ومكيّفة. فلما توصل البيت الجديد، تعرف وين كل صندوق قبل ما تفتحه.",
  },
  {
    icon: Wallet,
    lead: "السعر اللي اتفقنا عليه هو اللي تدفعه.",
    text: "ما في رسوم خفية ولا مفاجآت عند التحميل. اللي يُكتب في العرض هو اللي يظهر في الفاتورة.",
  },
  {
    icon: Check,
    lead: "ما نطلب دفعة مقدمة.",
    text: "تدفع بعد ما ينتهي العمل وترتاح للنتيجة.",
  },
  {
    icon: FileCheck2,
    lead: "مسؤولية مكتوبة، مو كلام.",
    text: "تأمين شامل على كل ما ننقله، وضمان كتابي ضد الكسر والخدش. وإذا صار ضرر نصلحه أو نعوّضك حسب السياسة المكتوبة.",
  },
  {
    icon: MessageCircle,
    lead: "تواصل واضح وسريع.",
    text: "تراسلنا على الواتساب وتاخذ عرض سعر بدون ما تنتظر.",
  },
  {
    icon: Building,
    lead: "نشيل عنك هم المبنى.",
    text: "نحجز مصعد الخدمة، ونرتّب تصريح الانتقال (NOC) نيابةً عنك.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    lead: "تراسلنا على الواتساب.",
    text: "تكتب لنا عدد الغرف، والمنطقة، والطابق، وأي قطع كبيرة أو حساسة عندك. وإذا تقدر ترسل صور، يصير التقدير أدق. نرد عليك بعرض سعر فوري.",
  },
  {
    icon: Search,
    lead: "معاينة مجانية.",
    text: "إذا تحب، نجي ونشوف الأثاث في مكانه ونأكد لك السعر في الموقع. المعاينة مجانية.",
  },
  {
    icon: ClipboardList,
    lead: "نجهّز كل شي قبل اليوم الموعود.",
    text: "نصوّر القطع قبل الفك، ونغلّفها بمواد تغليف عالية الجودة، ونكتب على كل صندوق رقمه واسم غرفته. ونرتّب مصعد الخدمة وتصريح الانتقال مع المبنى.",
  },
  {
    icon: Truck,
    lead: "التحميل والنقل.",
    text: "نحمّل الأثاث في شاحنة مغلقة ومكيّفة بنظام تثبيت، تتحمل حرارة دبي وزحمة شوارعها.",
  },
  {
    icon: PackageCheck,
    lead: "التركيب والتسليم.",
    text: "نفك ونركّب كل قطعة في مكانها، ونرفع مخلفات التغليف وننظّف الموقع. وبعد ما تتأكد أن كل شي تمام، تدفع.",
  },
];

const audiences = [
  {
    icon: Building2,
    lead: "سكان الشقق:",
    text: "غالباً المبنى هو التحدي. مصعد خدمة بموعد محدد، وتصريح انتقال، وممرات ضيقة. هنا نرتّب إجراءات المبنى معك ونجهّز الأثاث بحيث يخرج ويدخل بدون خدوش.",
  },
  {
    icon: Castle,
    lead: "أصحاب الفلل:",
    text: "قطع أكثر وأثقل، وغرف أكثر. نوزّع العمل على الفريق، ونكتب اسم الغرفة على كل صندوق حتى يرجع كل شي مكانه.",
  },
  {
    icon: Briefcase,
    lead: "الشركات وأصحاب المكاتب:",
    text: "نقل مكاتب وأثاث شركات، بفريق ثابت يعرف كيف يتعامل مع الأثاث الحساس.",
  },
];

const services = [
  {
    icon: HouseIcon,
    lead: "نقل أثاث المنزل والشقق",
    rest: " في دبي.",
    href: SERVICE_HREF.house,
  },
  {
    icon: Castle,
    lead: "نقل أثاث الفلل",
    rest: " في دبي وباقي الإمارات.",
    href: SERVICE_HREF.villas,
  },
  {
    icon: Building2,
    lead: "نقل أثاث المكاتب والشركات",
    rest: ".",
    href: SERVICE_HREF.offices,
  },
  {
    icon: Boxes,
    lead: "التغليف والتعبئة",
    rest: " بمواد جيدة، مشمولة في السعر.",
    href: SERVICE_HREF.packing,
  },
  {
    icon: Wrench,
    lead: "فك وتركيب الأثاث",
    rest: "، مع نجّارين متخصصين.",
    href: SERVICE_HREF.assembly,
  },
  {
    icon: Warehouse,
    lead: "تخزين الأثاث",
    rest: " في مستودعات مكيّفة ومراقبة.",
    href: SERVICE_HREF.storage,
  },
  {
    icon: Truck,
    lead: "نقل عفش القطع الفردية",
    rest: "، إذا كان عندك قطعة أو قطعتين فقط.",
    href: undefined,
  },
];

const included = [
  "معاينة ميدانية مجانية مع عرض سعر في الموقع",
  "تقدير سعر فوري عبر الإنترنت إذا ما تحتاج زيارة",
  "تأمين شامل على كل ما ننقله",
  "مواد تغليف عالية الجودة",
  "شاحنات مغلقة ومكيّفة",
  "فك وتركيب كامل للأثاث",
  "تنظيف بعد النقل",
  "خدمة 7 أيام في الأسبوع",
  "بدون أي دفعة مقدمة",
];

const checklist = [
  "هل الشركة مرخصة، وعندها مقر تقدر تزوره؟",
  "هل في تأمين على الأثاث، وهل الضمان مكتوب؟",
  "هل السعر مكتوب وثابت، أم يتغير يوم النقل؟",
  "هل تطلب دفعة مقدمة قبل ما يبدأ العمل؟",
  "هل الفريق ثابت ومعروف، أم عمالة تختلف كل مرة؟",
  "هل الشاحنات مغلقة ومكيّفة، أم مكشوفة تحت الشمس؟",
];

const truckSizes = ["1.5 طن", "3 طن", "7 طن"];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "من نحن | الزايد نقل اثاث دبي - خبرة 12 سنة",
      description:
        "الزايد نقل اثاث دبي، شركة مرخصة بخبرة أكثر من 12 سنة. سعر ثابت، تأمين وضمان مكتوب، وبدون دفعة مقدمة. اطلب عرض سعر فوري عبر الواتساب.",
      inLanguage: "ar-AE",
      about: { "@id": "#movingcompany" },
    },
    {
      "@type": "MovingCompany",
      "@id": "#movingcompany",
      name: "الزايد نقل اثاث دبي",
      telephone: "+971556461731",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B17 Owned by Al Nasr Sports Club - Office No. 1",
        addressLocality: "عود ميثاء",
        addressRegion: "دبي",
        addressCountry: "AE",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: [
        "دبي",
        "أبوظبي",
        "الشارقة",
        "عجمان",
        "رأس الخيمة",
        "الفجيرة",
        "أم القيوين",
        "العين",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <script
        id="AboutSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-secondary px-4 pt-14 pb-32 sm:px-6 md:pt-20 md:pb-36 lg:px-8">
        <Truck
          className="pointer-events-none absolute -bottom-10 -start-10 size-72 text-white/5"
          strokeWidth={1}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-white">أثاثك يوصل كما غادر بيتك</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              أكثر من 12 سنة في نقل الأثاث بدبي وباقي الإمارات، بسعر ثابت،
              وتأمين مكتوب، وبدون دفعة مقدمة.
            </p>
            <div className="mt-8 items-start">
              <QuoteActions
                whatsappLabel="احصل على عرض سعر عبر الواتساب"
                callLabel="اتصل بنا:"
              />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="absolute -top-5 -end-2 z-20 flex size-28 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-primary-foreground shadow-xl ring-4 ring-secondary sm:-top-7 sm:-end-6 sm:size-32">
              <span className="text-3xl font-black leading-none sm:text-4xl">
                +12
              </span>
              <span className="mt-1 text-[11px] font-medium leading-tight sm:text-xs">
                سنة خبرة
              </span>
            </div>
            <AboutPhoto
              src={TeamPhoto}
              alt="فريق الزايد نقل اثاث بالزي الموحد أمام شاحنة الشركة"
              aspect="aspect-4/5"
              sizes="(min-width: 1024px) 480px, (min-width: 448px) 448px, 100vw"
              preload
            />
          </div>
        </div>
      </section>

      {/* ───────── الزايد في سطور ───────── */}
      <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-card p-6 shadow-xl ring-1 ring-border md:p-10">
          <h2 className="mb-8 text-center text-2xl font-extrabold md:text-3xl">
            الزايد في سطور
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {quickFacts.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex flex-col items-center gap-3 rounded-2xl bg-muted/60 p-5 text-center"
              >
                <span className="rounded-full bg-primary/10 p-3 text-primary">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-card-foreground">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── ليش بدأنا؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              ليش بدأنا؟
            </h2>
            <div className="mt-6 space-y-4 leading-loose text-muted-foreground md:text-lg">
              <p>
                اللي ينتقل في دبي يعرف القصة. خزانة وصلت بخدش، أو سعر تغيّر وقت
                التحميل، أو عربون اندفع لشخص ما عاد يرد، أو عمال جدد كل مرة ما
                يعرفون وين يحطون الأغراض. وفوقها المبنى يطلب تصريح انتقال وحجز
                مصعد الخدمة قبل ما تلحق.
              </p>
              <p className="border-s-4 border-primary ps-5 font-medium text-secondary">
                شفنا هالمشاكل تتكرر، وقررنا نشتغل بطريقة ثانية. بدل ما نعدك
                بكلام عام، كتبنا وعودنا وصرنا نلتزم فيها: رد سريع على الواتساب،
                سعر واضح من أول رسالة، وعناية بكل قطعة من أول صندوق إلى آخر
                قطعة.
              </p>
              <p>
                اليوم، بعد أكثر من 12 سنة، نحن شركة نقل أثاث مرخصة في دبي، نخدم
                أهل الشقق وأصحاب الفلل والمكاتب والشركات، داخل دبي وبين
                الإمارات.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <AboutPhoto
              src={StoryPhoto}
              alt="مؤسس الزايد نقل اثاث مع الفريق أثناء العمل"
              aspect="aspect-4/3"
              sizes="(min-width: 1024px) 540px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ───────── رسالتنا ورؤيتنا ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="رسالتنا ورؤيتنا" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 text-secondary-foreground md:p-10">
              <Target
                className="pointer-events-none absolute -bottom-6 -start-6 size-40 text-white/5"
                strokeWidth={1}
              />
              <div className="relative">
                <span className="inline-flex rounded-full bg-primary/20 p-3 text-primary">
                  <Target className="size-7" strokeWidth={1.5} />
                </span>
                <p className="mt-5 leading-loose text-white/90 md:text-lg">
                  <strong className="text-white">رسالتنا:</strong> نحمي أثاثك من
                  أي تلف، نهائياً. ولتحقيق هذا نعتمد على ثلاثة أشياء: تواصل سريع
                  عبر الواتساب، وعرض سعر فوري، وعناية مباشرة بكل قطعة.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
              <Eye
                className="pointer-events-none absolute -bottom-6 -start-6 size-40 text-white/10"
                strokeWidth={1}
              />
              <div className="relative">
                <span className="inline-flex rounded-full bg-white/20 p-3 text-white">
                  <Eye className="size-7" strokeWidth={1.5} />
                </span>
                <p className="mt-5 leading-loose text-white md:text-lg">
                  <strong>رؤيتنا:</strong> نبي نكون أول شركة تخطر ببالك لما تقول
                  «بنتنقل»، وأول شركة توصي فيها أهلك وجيرانك وزملاءك في العمل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── قيمنا ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="قيمنا: وعود نكتبها ونلتزم فيها" />
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, lead, text }, i) => (
              <li
                key={lead}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-lg"
              >
                <span
                  aria-hidden
                  className="absolute top-4 end-5 text-5xl font-black text-secondary/5"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <p className="mt-4 leading-loose text-muted-foreground">
                  <strong className="text-secondary">{lead}</strong> {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── كيف يتم نقلك معنا؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                كيف يتم نقلك معنا؟
              </h2>
              <AboutPhoto
                src={MovingDayPhoto}
                alt="فريق الزايد يحمل كنبة مغلفة إلى داخل المبنى"
                aspect="aspect-4/5"
                sizes="(min-width: 1024px) 460px, 100vw"
                className="mt-8 hidden lg:block"
              />
            </div>
          </div>
          <ol className="relative space-y-8 before:absolute before:inset-y-2 before:start-5 before:w-px before:bg-border lg:col-span-7">
            {steps.map(({ icon: Icon, lead, text }, i) => (
              <li key={lead} className="relative flex gap-5">
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground ring-4 ring-background">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl bg-card p-5 ring-1 ring-border">
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon className="size-5 text-primary" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold">{lead}</h3>
                  </div>
                  <p className="mt-2 leading-loose text-muted-foreground">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── لمن نشتغل؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="لمن نشتغل؟"
            desc={<p>نشتغل مع ثلاث فئات، ولكل واحدة احتياجها:</p>}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map(({ icon: Icon, lead, text }) => (
              <div
                key={lead}
                className=" border-t-4 border-primary bg-card p-6 shadow-sm ring-1 ring-border"
              >
                <span className="inline-flex rounded-full bg-secondary p-3 text-white">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <p className="mt-4 leading-loose text-muted-foreground">
                  <strong className="text-secondary">{lead}</strong> {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── وش نقدم؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="وش نقدم؟"
            desc={<p>نغطي كل أنواع النقل السكني والتجاري:</p>}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, lead, rest, href }) => (
              <li
                key={lead}
                className="relative flex items-start gap-4 rounded-2xl bg-card p-5 ring-1 ring-border transition-shadow focus-within:shadow-lg hover:shadow-lg"
              >
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <p className="leading-loose text-muted-foreground">
                  {href ? (
                    <Link
                      href={href}
                      className="font-bold text-secondary after:absolute after:inset-0 hover:text-primary"
                    >
                      {lead}
                    </Link>
                  ) : (
                    <strong className="text-secondary">{lead}</strong>
                  )}
                  {rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── شاحناتنا ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-3xl bg-secondary p-6 md:p-12 lg:grid-cols-2">
          <div className="relative">
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              شاحناتنا
            </h2>
            <p className="mt-4 leading-loose text-white/85 md:text-lg">
              نشتغل بشاحنات مغلقة ومكيّفة بثلاثة أحجام: 1.5 طن و3 طن و7 طن،
              وكلها مجهزة بأنظمة تثبيت. نرشّح لك الحجم المناسب حسب حمولتك.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {truckSizes.map((size, i) => (
                <li
                  key={size}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20"
                >
                  {i === 0 ? (
                    <Snowflake className="size-4 text-primary" />
                  ) : (
                    <Truck className="size-4 text-primary" />
                  )}
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <AboutPhoto
            src={FleetPhoto}
            alt="أسطول شاحنات الزايد نقل اثاث المغلقة والمكيفة"
            aspect="aspect-16/10"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </section>

      {/* ───────── الناس اللي بيشتغلون على أغراضك ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            <AboutPhoto
              src={CrewPhoto}
              alt="أحد أفراد فريق الزايد نقل اثاث بالزي الموحد وبطاقة التعريف"
              aspect="aspect-3/4"
              sizes="(min-width: 1024px) 230px, 45vw"
            />
            <AboutPhoto
              src={CarpenterPhoto}
              alt="نجار الزايد نقل اثاث مع أدوات التركيب"
              aspect="aspect-3/4"
              sizes="(min-width: 1024px) 230px, 45vw"
              className="mt-8"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              الناس اللي بيشتغلون على أغراضك
            </h2>
            <div className="mt-6 space-y-4 leading-loose text-muted-foreground md:text-lg">
              <p>
                اللي يوصل بيتك مو عمالة يومية تتغيّر كل مرة. هو فريق ثابت تدرّب
                على التعامل مع الأثاث الثقيل والحساس، يلبس زياً موحداً ويحمل
                بطاقة تعريف، فتعرف مين دخل بيتك.
              </p>
              <p>
                معنا نجّارون متخصصون في الفك والتركيب، وفنيّو صيانة يركّبون
                الشاشات والستائر. وبعد ما نخلّص التركيب، نرفع مخلفات التغليف
                وننظّف المكان، وتدخل بيتك الجديد جاهز.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── وين نخدم؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-card p-6 ring-1 ring-border md:p-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary/10 p-3 text-primary">
              <MapPin className="size-6" strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              وين نخدم؟
            </h2>
          </div>
          <div className="mt-6 space-y-5 leading-loose text-muted-foreground md:text-lg">
            <p>
              مقرنا في عود ميثاء بدبي، ونغطي أغلب مناطق المدينة، منها:{" "}
              <Link href={AREA_HREF.marina} className={linkClass}>
                دبي مارينا
              </Link>
              ،{" "}
              <Link href={AREA_HREF.downtown} className={linkClass}>
                وسط مدينة دبي
              </Link>
              ،{" "}
              <Link href={AREA_HREF.jlt} className={linkClass}>
                أبراج بحيرات جميرا
              </Link>
              ،{" "}
              <Link href={AREA_HREF.businessBay} className={linkClass}>
                الخليج التجاري
              </Link>
              ،{" "}
              <Link href={AREA_HREF.jvc} className={linkClass}>
                قرية جميرا الدائرية
              </Link>
              ،{" "}
              <Link href={AREA_HREF.palm} className={linkClass}>
                نخلة جميرا
              </Link>
              ،{" "}
              <Link href={AREA_HREF.barsha} className={linkClass}>
                البرشاء
              </Link>
              ،{" "}
              <Link href={AREA_HREF.deira} className={linkClass}>
                ديرة
              </Link>
              ،{" "}
              <Link href={AREA_HREF.burDubai} className={linkClass}>
                بر دبي
              </Link>
              ، و
              <Link href={AREA_HREF.jumeirah} className={linkClass}>
                جميرا
              </Link>
              .
            </p>
            <p>
              وخدمتنا تصل إلى باقي الإمارات:{" "}
              <Link href="/نقل-اثاث-ابوظبي" className={linkClass}>
                أبوظبي
              </Link>
              ،{" "}
              <Link href="/نقل-اثاث-الشارقة" className={linkClass}>
                الشارقة
              </Link>
              ،{" "}
              <Link href="/نقل-اثاث-عجمان" className={linkClass}>
                عجمان
              </Link>
              ،{" "}
              <Link href="/نقل-اثاث-راس-الخيمة" className={linkClass}>
                رأس الخيمة
              </Link>
              ،{" "}
              <Link href="/نقل-الاثاث-الفجيرة" className={linkClass}>
                الفجيرة
              </Link>
              ،{" "}
              <Link href="/نقل-الاثاث-ام-القيوين" className={linkClass}>
                أم القيوين
              </Link>
              ، و
              <Link href="/نقل-اثاث-العين" className={linkClass}>
                العين
              </Link>
              .
            </p>
            <p className="rounded-2xl bg-primary/10 p-5 font-medium text-secondary">
              سواء كنت تنتقل بين طابقين في نفس المبنى، أو من إمارة إلى إمارة
              ثانية، نتولى التفاصيل كلها من أول صندوق إلى آخر قطعة.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── وش يشمل السعر؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="وش يشمل السعر؟"
            desc={<p>كل عملية نقل معنا تشمل:</p>}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-card p-4 ring-1 ring-border"
              >
                <span className="rounded-full bg-primary p-1 text-primary-foreground">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-card-foreground md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-secondary p-5 text-center font-bold leading-loose text-white">
            وبعد ما تقبل العرض، السعر يبقى ثابتاً من أول عرض إلى الفاتورة
            النهائية.
          </p>
        </div>
      </section>

      {/* ───────── كيف تختار شركة نقل؟ ───────── */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
          <div className="rounded-3xl bg-secondary p-8 text-white md:p-10 lg:col-span-5">
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              كيف تختار شركة نقل؟
            </h2>
            <p className="mt-4 leading-loose text-white/85 md:text-lg">
              قبل ما تحجز مع أي شركة، اسألها هالأسئلة. إجاباتها تقول لك كل شي:
            </p>
            <p className="mt-8 border-t border-white/15 pt-6 font-bold leading-loose text-white">
              نحن نجاوب على هالأسئلة كلها بوضوح، وبالكتابة إذا طلبت.
            </p>
          </div>
          <ul className="grid gap-3 lg:col-span-7">
            {checklist.map((q, i) => (
              <li
                key={q}
                className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border md:p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
                  {i + 1}
                </span>
                <span className="font-medium leading-relaxed text-card-foreground">
                  {q}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <FAQSection title="أسئلة يسألها عملاؤنا" subtitle="" faqs={AboutFaqs} />

      {/* ───────── CTA ───────── */}
      <CtaBand
        title="جاهز تنتقل؟"
        desc="أرسل لنا رسالة على الواتساب بعدد الغرف ومنطقتك، ونرسل لك عرض سعر فوري. وإذا تحب نجي ونعاين الموقع، المعاينة مجانية والسعر يتأكد في المكان."
        actions={
          <QuoteActions
            whatsappLabel="احصل على عرض سعر عبر الواتساب"
            callLabel="اتصل بنا:"
          />
        }
        footer={
          <span className="inline-flex items-center justify-center gap-2">
            <MapPin className="size-4 shrink-0 text-primary" />
            <span>
              B17 Owned by Al Nasr Sports Club - Office No. 1 - عود ميثاء - دبي
            </span>
          </span>
        }
      />
      <div className="pb-16 lg:pb-28" />
    </main>
  );
}
