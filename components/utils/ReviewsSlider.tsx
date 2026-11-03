import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Review {
  text: string;
  name: string;
  time: string; // مثال: "قبل أسبوع"، "قبل 3 أشهر"
  /** 1–5, defaults to 5 */
  rating?: number;
}

interface ReviewsSliderProps {
  reviews: Review[];
  /** prefix of the ids that tie each card's "read more" checkbox to its label */
  id?: string;
}

/** Avatar discs: navy-family and warm tones, all with white text at ≥4.5:1. */
const avatarTones = [
  "bg-secondary",
  "bg-navy-700",
  "bg-[#9a3d0e]",
  "bg-[#0f6b4f]",
  "bg-[#6b3fa0]",
  "bg-[#a02b4d]",
];

const readMore =
  "mt-auto inline-flex min-h-11 cursor-pointer items-center pt-3 text-sm font-extrabold text-secondary hover:text-brand peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-ring";

/**
 * Native carousel buttons. They live here, not in globals.css: the CSS pipeline does not know
 * `::scroll-button()` yet and warns on every build. React hoists this <style> into <head> once.
 * Where unsupported (everything but Chromium 135+) the track keeps a thin scrollbar and touch users swipe.
 */
const carouselCss = `
.reviews-track {
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
@supports selector(::scroll-button(*)) {
  @media (min-width: 768px) {
    .reviews-track {
      anchor-name: --reviews;
      scrollbar-width: none;
    }
    .reviews-track::scroll-button(*) {
      position: fixed;
      position-anchor: --reviews;
      top: anchor(center);
      translate: 0 -50%;
      z-index: 1;
      direction: ltr;
      display: grid;
      place-items: center;
      width: 2.75rem;
      height: 2.75rem;
      padding: 0 0 0.2rem;
      border: 1px solid var(--border);
      border-radius: 9999px;
      background: var(--card);
      color: var(--secondary);
      font-size: 1.75rem;
      line-height: 1;
      box-shadow: 0 4px 14px -4px rgb(5 44 81 / 0.14);
      cursor: pointer;
    }
    .reviews-track::scroll-button(left) {
      content: "‹" / "السابق";
      left: calc(anchor(left) - 1.375rem);
    }
    .reviews-track::scroll-button(right) {
      content: "›" / "التالي";
      right: calc(anchor(right) - 1.375rem);
    }
    .reviews-track::scroll-button(*):hover {
      background: var(--muted);
    }
    .reviews-track::scroll-button(*):disabled {
      opacity: 0.4;
      cursor: default;
    }
    .reviews-track::scroll-button(*):focus-visible {
      outline: 3px solid var(--ring);
      outline-offset: 3px;
    }
  }
}
`;

/** Texts shorter than this fit the 4-line clamp, so they get no "read more". */
const CLAMP_CHARS = 110;

/**
 * Server-rendered review carousel, no client JS.
 *  - Cards sit in a horizontal CSS scroll-snap track (swipe / wheel / keyboard-scroll everywhere);
 *    4 cards on desktop, 2 on tablet, 1 (+ a peek of the next) on mobile.
 *  - Prev / next arrows are the native `::scroll-button()` pseudo-elements (see globals.css `.reviews-track`);
 *    browsers without them keep a thin scrollbar instead.
 *  - "Read more" is a visually-hidden checkbox + label that lifts the 4-line clamp.
 */
export default function ReviewsSlider({
  reviews,
  id = "review",
}: ReviewsSliderProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <>
      <style href="reviews-carousel" precedence="default">
        {carouselCss}
      </style>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="تقييمات العملاء"
        tabIndex={0}
        className="reviews-track flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 motion-reduce:scroll-auto"
      >
        {reviews.map((review, i) => {
          const rating = Math.min(5, Math.max(0, review.rating ?? 5));
          const initial = review.name.trim().charAt(0) || "ع";
          const long = review.text.length > CLAMP_CHARS;
          const cardId = `${id}-${i}`;
          return (
            <figure
              key={cardId}
              aria-roledescription="slide"
              className="relative flex w-[84%] shrink-0 snap-start flex-col rounded-lg border border-border bg-card p-5 shadow-xs sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
            >
              <figcaption className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-full text-lg font-extrabold text-white select-none",
                    avatarTones[i % avatarTones.length],
                  )}
                >
                  {initial}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-base leading-snug font-extrabold text-secondary">
                    {review.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {review.time}
                  </span>
                </span>
                <Image
                  src="/google-icon.svg"
                  alt="Google"
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
              </figcaption>

              <p
                role="img"
                aria-label={`${rating} من 5 نجوم`}
                className="mt-4 text-xl leading-none tracking-wider text-[#fbbc04] select-none"
              >
                {"★".repeat(rating)}
                <span className="text-border">{"★".repeat(5 - rating)}</span>
              </p>

              {long && (
                <input
                  id={cardId}
                  type="checkbox"
                  className="peer sr-only"
                  aria-label="عرض النص كاملاً"
                />
              )}
              <blockquote
                className={cn(
                  "mt-3 text-sm text-foreground",
                  long && "line-clamp-4 peer-checked:line-clamp-none",
                )}
              >
                {review.text}
              </blockquote>
              {long && (
                <>
                  <label
                    htmlFor={cardId}
                    className={cn(readMore, "peer-checked:hidden")}
                  >
                    قراءة المزيد
                  </label>
                  <label
                    htmlFor={cardId}
                    className={cn(readMore, "hidden peer-checked:inline-flex")}
                  >
                    عرض أقل
                  </label>
                </>
              )}
            </figure>
          );
        })}
      </div>
    </>
  );
}
