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
        title="ماذا يقول سكان دبي عن الأمين نقل اثاث دبي ؟"
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
                className="md:h-28 h-10 md:w-37 w-18 object-contain"
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
    name: "أحمد المنصوري",
    time: "قبل أسبوع",
    text: "تعاملنا مع شركة الأمين في نقل أثاث البيت، والشباب ما قصروا أبد. وصلوا بالوقت وكل شي وصل مرتب وسليم الحمدلله.",
  },
  {
    name: "خالد الشامسي",
    time: "قبل أسبوعين",
    text: "كنت شايل هم نقل الأثاث خصوصاً غرفة النوم، بس الفريق فكها وركبها بكل احترافية. شغل نظيف وتعامل راقٍ.",
  },
  {
    name: "محمد العلي",
    time: "قبل 3 أسابيع",
    text: "نقلنا من دبي للشارقة وكانت التجربة ممتازة. الشباب متعاونين ويهتمون بالأغراض كأنها أغراضهم.",
  },
  {
    name: "عبدالله الكعبي",
    time: "قبل شهر",
    text: "بصراحة ما توقعت النقل يخلص بهالسهولة. من التغليف للتركيب كل شي كان منظم، يعطيهم العافية.",
  },
  {
    name: "فاطمة الزعابي",
    time: "قبل شهرين",
    text: "أكثر شي عجبني اهتمامهم بالتفاصيل، حتى الأشياء الزجاجية غلفوها بعناية. الحمدلله وصل كل شي بدون مشاكل.",
  },
  {
    name: "يوسف الحمادي",
    time: "قبل 3 أشهر",
    text: "جربت شركات نقل قبل، لكن هالمرة كان التعامل أريح بكثير. السعر واضح من البداية وما كانت فيه مفاجآت.",
  },
  {
    name: "سالم المهيري",
    time: "قبل 4 أشهر",
    text: "نقلت أثاث شقتي في عجمان مع الأمين، وكانوا ملتزمين بالموعد. الفريق محترم وسريع ويعرف شغله عدل.",
  },
  {
    name: "مريم السويدي",
    time: "قبل 5 أشهر",
    text: "عندي أثاث ثقيل وكنت خايفة يتخدش أثناء النقل. الشباب تعاملوا معاه بحرص وركبوا كل شي بمكانه.",
  },
  {
    name: "إبراهيم الحوسني",
    time: "قبل 6 أشهر",
    text: "من أول اتصال لين خلص النقل والتعامل كان ممتاز. تجاوب سريع وشغل مرتب، الله يعطيهم العافية.",
  },
  {
    name: "ناصر البلوشي",
    time: "قبل 8 أشهر",
    text: "احتجت أنقل أثاث البيت خلال وقت قصير، والفريق ساعدني ورتب كل شي. تجربة مريحة والخدمة كانت على مستوى.",
  },
];
