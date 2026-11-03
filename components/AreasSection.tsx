import Link from "next/link";
import { MapPin, Building2, Home, Landmark } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { locationItems } from "@/lib/utils";

interface AreaGroup {
  icon: React.ReactNode;
  title: string;
  areas: string[];
  note: string;
}

const iconCls = "size-6 text-brand";

const areaGroups: AreaGroup[] = [
  {
    icon: <Building2 strokeWidth={1.6} className={iconCls} />,
    title: "نقل اثاث في وسط دبي والمناطق الفاخرة",
    areas: [
      "وسط مدينة دبي (داون تاون) — الأبراج المحيطة ببرج خليفة ودبي مول",
      "دبي مارينا وجي بي آر (JBR)",
      "الخليج التجاري (Business Bay)",
      "نخلة جميرا (Palm Jumeirah)",
      "أبراج بحيرات جميرا (JLT)",
      "تلال الإمارات (Emirates Hills)",
      "جميرا (Jumeirah)",
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
      "ديرة وبر دبي",
      "الكرامة والسطوة",
      "البرشاء والقوز",
      "القصيص ومردف",
      "واحة السيليكون (Dubai Silicon Oasis)",
      "المدينة العالمية (International City)",
      "قرية جميرا الدائرية (JVC) وقرية جميرا المثلثة (JVT)",
      "جبل علي (Jebel Ali)",
    ],
    note: "",
  },
];

const chip =
  "inline-flex min-h-11 items-center rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-bold text-secondary";

// Emirates without a page yet (no `href`) render as plain chips.
const otherEmirates = locationItems.slice(0, 6);

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
              {group.areas.map((area) => (
                <li key={area}>
                  <span className={chip}>{area}</span>
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
            <li key={e.title}>
              {e.href ? (
                <Link href={e.href} className={`${chip} hover:border-primary hover:text-brand`}>
                  {e.title}
                </Link>
              ) : (
                <span className={chip}>{e.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
