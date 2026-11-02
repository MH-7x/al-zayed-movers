import Link from "next/link";
import { MapPin, Building2, Home, Landmark } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { locationItems } from "@/lib/utils";

/* ── Area item: plain text OR a linkable item ── */
type AreaItem =
  | { text: string; href: string } // whole item is a link
  | { parts: { text: string; href?: string }[] } // compound item with inline links
  | string; // plain text, no link

interface AreaGroup {
  icon: React.ReactNode;
  title: string;
  areas: AreaItem[];
  note: string;
}

const iconCls = "size-6 text-brand";

const areaGroups: AreaGroup[] = [
  {
    icon: <Building2 strokeWidth={1.6} className={iconCls} />,
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
    icon: <Home strokeWidth={1.6} className={iconCls} />,
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
    icon: <Landmark strokeWidth={1.6} className={iconCls} />,
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

const chip =
  "inline-flex min-h-11 items-center rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-bold text-secondary";
const linkCls =
  "underline decoration-primary/60 underline-offset-4 transition-colors hover:text-brand";

/* ── Renders a single area item as a chip ── */
function AreaItemContent({ item }: { item: AreaItem }) {
  if (typeof item === "string") return <span className={chip}>{item}</span>;

  if ("text" in item && "href" in item) {
    return (
      <Link href={item.href} className={`${chip} ${linkCls} hover:border-primary`}>
        {item.text}
      </Link>
    );
  }

  return (
    <span className={chip}>
      {item.parts.map((part, k) => (
        <span key={k}>
          {k > 0 && <span className="font-normal text-muted-foreground"> و</span>}
          {part.href ? (
            <Link href={part.href} className={`${linkCls} inline-flex min-h-11 items-center`}>
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

// The five emirate pages that exist; Umm Al Quwain has no page yet, so it stays a no-op anchor.
const otherEmirates = [
  { name: "نقل اثاث ابوظبي", href: locationItems[0].href },
  { name: "نقل اثاث الشارقة", href: locationItems[1].href.trim() },
  { name: "نقل اثاث عجمان", href: locationItems[2].href },
  { name: "نقل اثاث راس الخيمة", href: locationItems[3].href },
  { name: "نقل اثاث العين", href: locationItems[4].href },
  { name: "نقل الاثاث ام القيوين", href: "#" },
];

export function AreasSection() {
  return (
    <Section id="areas" tone="alt">
      <SectionHeading
        eyebrow="مناطق الخدمة"
        title="المناطق التي نغطيها لنقل الاثاث في دبي"
        description="مقرنا في عود ميثاء بدبي، ونوصل لجميع مناطق الإمارة."
      />

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {areaGroups.map((group) => (
          <article key={group.title} className="rounded-md border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-brand-soft">
                {group.icon}
              </span>
              <h3 className="text-xl leading-snug">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.areas.map((area, j) => (
                <li key={j}>
                  <AreaItemContent item={area} />
                </li>
              ))}
            </ul>
            {group.note && <p className="mt-4 text-sm text-muted-foreground">{group.note}</p>}
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-md border border-border bg-card p-5">
        <p className="flex items-start gap-3">
          <MapPin className="mt-1.5 size-5 shrink-0 text-brand" aria-hidden="true" />
          <span>كما تصل خدماتنا إلى باقي إمارات الدولة: </span>
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {otherEmirates.map((e) => (
            <li key={e.name}>
              <Link href={e.href} className={`${chip} hover:border-primary hover:text-brand`}>
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
