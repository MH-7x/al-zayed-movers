import Link from "next/link";
import { MapPin, Building2, Home, Landmark, ArrowLeft } from "lucide-react";

/* ── Area item: plain text OR a linkable item ── */
type AreaItem =
  | { text: string; href: string } // whole item is a link
  | { parts: { text: string; href?: string }[] } // compound item with inline links
  | string; // plain text, no link

/* ── Area groups data ── */
interface AreaGroup {
  icon: React.ReactNode;
  title: string;
  areas: AreaItem[];
  note: string;
}

const areaGroups: AreaGroup[] = [
  {
    icon: <Building2 strokeWidth={1.4} className="size-7 text-primary" />,
    title: "نقل اثاث في وسط دبي والمناطق الفاخرة",
    areas: [
      {
        text: "وسط مدينة دبي (داون تاون) — الأبراج المحيطة ببرج خليفة ودبي مول",
        href: "/مناطق-دبي/نقل-اثاث-وسط-مدينة-دبي",
      },
      {
        text: "دبي مارينا وجي بي آر (JBR)",
        href: "/مناطق-دبي/نقل-اثاث-دبي-مارينا",
      },
      {
        text: "الخليج التجاري (Business Bay)",
        href: "/مناطق-دبي/نقل-اثاث-الخليج-التجاري",
      },
      {
        text: "نخلة جميرا (Palm Jumeirah)",
        href: "/مناطق-دبي/نقل-اثاث-نخلة-جميرا",
      },
      {
        text: "أبراج بحيرات جميرا (JLT)",
        href: "/مناطق-دبي/نقل-اثاث-أبراج-بحيرات-جميرا",
      },
      "تلال الإمارات (Emirates Hills)",
      {
        text: "جميرا (Jumeirah)",
        href: "/مناطق-دبي/نقل-اثاث-جميرا",
      },
    ],
    note: "هذه المناطق فيها أبراج شاهقة وإجراءات دخول وخروج صارمة. نحن نتعامل مع هذه المتطلبات يومياً: حجز مصعد الخدمة، التنسيق مع الأمن، واستخراج تصاريح الانتقال.",
  },
  {
    icon: <Home strokeWidth={1.4} className="size-7 text-primary" />,
    title: "نقل اثاث في المجمعات السكنية والفلل",
    areas: [
      "دبي هيلز استيت (Dubai Hills)",
      "المرابع العربية (Arabian Ranches)",
      "داماك هيلز (DAMAC Hills)",
      "الينابيع (The Springs)",
      "الفرجان (Al Furjan)",
      "ند الشبا (Nad Al Sheba)",
    ],
    note: "",
  },
  {
    icon: <Landmark strokeWidth={1.4} className="size-7 text-primary" />,
    title: "نقل اثاث في مناطق دبي القديمة والسكنية",
    areas: [
      {
        parts: [
          { text: "ديرة", href: "/مناطق-دبي/نقل-اثاث-ديرة" },
          { text: "بر دبي", href: "/مناطق-دبي/نقل-اثاث-بر-دبي" },
        ],
      },
      "الكرامة والسطوة",
      {
        parts: [
          { text: "البرشاء", href: "/مناطق-دبي/نقل-اثاث-البرشاء" },
          { text: "القوز" },
        ],
      },
      "القصيص ومردف",
      "واحة السيليكون (Dubai Silicon Oasis)",
      "المدينة العالمية (International City)",
      {
        parts: [
          {
            text: "قرية جميرا الدائرية (JVC)",
            href: "/مناطق-دبي/نقل-اثاث-قرية-جميرا-الدائرية",
          },
          { text: "قرية جميرا المثلثة (JVT)" },
        ],
      },
      "جبل علي (Jebel Ali)",
    ],
    note: "",
  },
];

/* ── Renders a single area item ── */
function AreaItemContent({ item }: { item: AreaItem }) {
  // Plain string
  if (typeof item === "string") {
    return (
      <span className="text-[15px] text-foreground leading-relaxed">
        {item}
      </span>
    );
  }

  // Single link item
  if ("text" in item && "href" in item) {
    return (
      <Link
        href={item.href}
        className="
          group/link inline-flex items-center gap-1
          text-[15px] text-foreground leading-relaxed
          underline decoration-primary/30 underline-offset-4
          transition-colors duration-200
          hover:text-primary hover:decoration-primary/60
        "
      >
        <span>{item.text}</span>
        <ArrowLeft className="size-3 text-primary opacity-0 -translate-x-0.5 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0 shrink-0" />
      </Link>
    );
  }

  // Compound item with parts
  if ("parts" in item) {
    return (
      <span className="text-[15px] text-foreground leading-relaxed">
        {item.parts.map((part, k) => (
          <span key={k}>
            {k > 0 && <span className="text-muted-foreground"> و</span>}
            {part.href ? (
              <Link
                href={part.href}
                className="
                  group/link inline-inline-flex items-center gap-0.5
                  underline decoration-primary/30 underline-offset-4
                  transition-colors duration-200
                  hover:text-primary hover:decoration-primary/60
                "
              >
                {part.text}
              </Link>
            ) : (
              part.text
            )}
          </span>
        ))}
      </span>
    );
  }

  return null;
}

export function AreasSection() {
  return (
    <section className="pt-16 lg:pt-28" id="areas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-14 lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
            <div className="flex items-center gap-1">
              <span className="h-4 w-1.5 -skew-x-12 rounded-xs bg-primary" />
              <span className="h-4 w-1.5 -skew-x-12 rounded-xs bg-primary" />
            </div>
            <span>مناطق الخدمة</span>
          </div>

          <h2 className="md:text-4xl text-3xl font-extrabold leading-tight max-w-3xl">
            المناطق التي نغطيها لنقل الاثاث في دبي
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            مقرنا في عود ميثاء بدبي، ونوصل لجميع مناطق الإمارة.
          </p>
        </div>

        {/* ── Area Groups ── */}
        <div className="space-y-0">
          {areaGroups.map((group, i) => (
            <div key={i} className="border-t border-border">
              {/* Group header row */}
              <div className="flex items-center gap-3 pt-8 pb-6">
                <div className="flex items-center justify-center size-11 rounded-xl bg-primary/[0.08]">
                  {group.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{group.title}</h3>
              </div>

              {/* Areas grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 pb-4">
                {group.areas.map((area, j) => (
                  <div key={j} className="flex items-start gap-2.5 py-1">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                    <AreaItemContent item={area} />
                  </div>
                ))}
              </div>

              {/* Contextual note */}
              {group.note && (
                <p className="text-sm text-muted-foreground leading-relaxed pb-8 max-w-3xl">
                  {group.note}
                </p>
              )}

              {!group.note && <div className="pb-8" />}
            </div>
          ))}
        </div>

        {/* ── Other Emirates banner ── */}
        <div className="mt-2  rounded-xl bg-primary/10 px-5 py-4">
          <div className="flex items-start gap-3">
            <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm sm:text-[15px] ">
              كما تصل خدماتنا إلى باقي إمارات الدولة:{" "}
            </p>
          </div>
          <p className="font-bold text-secondary mt-3 flex gap-3 flex-wrap">
            <a href="#">نقل اثاث ابوظبي</a>
            <a href="#">نقل اثاث الشارقة</a>
            <a href="#">نقل اثاث عجمان</a>
            <a href="#">نقل اثاث راس الخيمة</a>
            <a href="#">نقل اثاث العين</a>
            <a href="#">نقل الاثاث ام القيوين</a>
          </p>
        </div>
      </div>
    </section>
  );
}
