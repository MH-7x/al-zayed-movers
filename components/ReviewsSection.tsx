import Image from "next/image";
import ReviewsSlider from "./utils/ReviewsSlider";
import { Section, SectionHeading } from "@/components/ui/Section";

const badges = [
  { src: "/google-reviews-badge.png", alt: "google reviews badge" },
  { src: "/excellent-service-badge.png", alt: "excellent service badge" },
  { src: "/trip-advior-badge.png", alt: "trip advisor badge" },
];

export function ReviewsSection({
  tone = "alt",
}: {
  tone?: "alt" | "auto" | "default";
}) {
  return (
    <Section id="reviews" tone={tone}>
      <SectionHeading
        title="ماذا يقول سكان دبي عن الزايد نقل اثاث دبي ؟"
        description="سمعتنا هي رأسمالنا الحقيقي. نحن شركة نقل اثاث موثوقة في دبي لأننا نفي بوعودنا دائماً."
      />
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <ul className="flex flex-wrap items-center gap-3">
          {badges.map((b) => (
            <li
              key={b.src}
              className="rounded-md border border-border bg-card p-2 shadow-xs"
            >
              {/* sources are 163×137 / 343×150 / 201×150 → shown contained in a 149×112 box */}
              <Image
                src={b.src}
                alt={b.alt}
                width={149}
                height={112}
                className="md:h-28 h-20 md:w-37 w-28 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
      <ReviewsSlider reviews={mockReviews} />
    </Section>
  );
}

const mockReviews = [
  {
    name: "أحمد الشامسي",
    time: "قبل شهر",
    text: "نقلت شقتي من الشارقة لعجمان معاهم، الشباب كانوا سريعين وما انكسر شي الحمدلله. حتى الثلاجة الكبيرة نزلوها من الدور الثالث بدون ما يخدشون الجدران.",
  },
  {
    name: "فاطمة المزروعي",
    time: "قبل 3 أشهر",
    text: "بصراحة ما توقعت يخلصون بهالسرعة، جاوا بالوقت وكل شي وصل تمام. أختي هي اللي دلتني عليهم وفعلاً كانت محقة.",
  },
  {
    name: "خالد النعيمي",
    time: "قبل أسبوعين",
    text: "كلمتهم الصبح وجاوا نفس اليوم، والسعر كان حلو مقارنة بغيرهم. اللي عجبني إنهم جابوا كراتين وتغليف معاهم بدون ما أطلب.",
  },
  {
    name: "مريم عبدالله",
    time: "قبل 5 أشهر",
    text: "نقلوا لي كنب كبير وغرفة نوم كاملة بدون لف ودوران، شغل نظيف. كنت مستانسة إنهم ركبوا الدولاب بمكانه الجديد عادي ما قصروا.",
  },
  {
    name: "عمر حسين",
    time: "قبل شهرين",
    text: "مو أول مرة اتصل فيهم وكل مرة نفس الشغل الطيب، ما غيرهم صراحة. المرة هذي نقلت مكتبي الصغير وخلصوا قبل الظهر.",
  },
  {
    name: "نورة الكتبي",
    time: "قبل 4 أشهر",
    text: "كنت قايلة بروحي أكيد بينكسر شي من الزجاج بس لا غلفوا كل شي زين ووصل سليم. حتى طقم الشاي حق أمي اللي كنت خايفة عليه وصل بدون أي كسر.",
  },
];
