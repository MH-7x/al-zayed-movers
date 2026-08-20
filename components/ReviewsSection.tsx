import Image from "next/image";
import ReviewsSlider from "./utils/ReviewsSlider";
import { Button } from "./ui/button";

export function ReviewsSection() {
  return (
    <section className="md:pt-16 pt-28">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-center md:mb-0 mb-5">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight">
            ماذا يقول سكان دبي عن <br /> الزايد نقل اثاث دبي ؟
          </h2>
          <p className="text-muted-foreground text-sm my-5 ">
            سمعتنا هي رأسمالنا الحقيقي. نحن شركة نقل اثاث موثوقة في دبي لأننا
            نفي بوعودنا دائماً.
          </p>
          <Button variant={"outline"}>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJjeNo41ppXz4R34OmlNqaUBU"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⭐⭐⭐⭐⭐ شاهد تقييمات عملائنا على Google
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              src: "/google-reviews-badge.png",
              alt: "google reviews badge",
            },
            {
              src: "/excellent-service-badge.png",
              alt: "excellent service badge",
            },
            {
              src: "/trip-advior-badge.png",
              alt: "trip advisor badge",
            },
          ].map((badge, i) => (
            <div
              className="aspect-4/3 relative md:h-28 h-18 
                 overflow-hidden"
              key={i}
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <ReviewsSlider reviews={mockReviews} autoPlayInterval={3000} />
    </section>
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
