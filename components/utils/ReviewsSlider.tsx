"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export interface Review {
  text: string;
  name: string;
  time: string; // مثال: "منذ أسبوع"، "منذ ٣ أسابيع"
}

interface ReviewsSliderProps {
  reviews: Review[];
  autoPlayInterval?: number; // ms, default 5000
}

/**
 * One review at a time with dot navigation.
 * Accessibility: autoplay is OFF for users who prefer reduced motion, and pauses while the
 * pointer is over the card or focus is inside it (WCAG 2.2.2). Dots are 44px targets.
 */
export default function ReviewsSlider({
  reviews,
  autoPlayInterval = 5000,
}: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reviews.length <= 1 || paused || reduceMotion) return;
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % reviews.length),
      autoPlayInterval,
    );
    return () => clearInterval(id);
  }, [reviews.length, autoPlayInterval, paused, reduceMotion]);

  if (!reviews || reviews.length === 0) return null;

  const review = reviews[currentIndex];
  const firstLetter = review.name ? review.name.trim().charAt(0) : "ع";

  return (
    <div
      className="mx-auto w-full max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <figure
        aria-live={paused ? "polite" : "off"}
        className="rounded-lg border border-border border-t-[3px] border-t-primary bg-card p-6 shadow-sm md:p-8"
      >
        <div className="mb-3 flex items-center gap-3">
          <Image src="/google-icon.svg" alt="google svg icon" width={30} height={30} />
          <span className="text-xl tracking-widest text-primary select-none" aria-hidden="true">
            ★★★★★
          </span>
        </div>
        <blockquote className="text-base font-medium text-foreground md:text-lg">
          {review.text}
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-lg font-extrabold text-white select-none">
            {firstLetter}
          </span>
          <span>
            <span className="block text-sm font-extrabold text-secondary md:text-base">
              {review.name}
            </span>
            <span className="block text-xs text-muted-foreground">{review.time}</span>
          </span>
        </figcaption>
      </figure>

      {reviews.length > 1 && (
        <div className="mt-2 flex items-center justify-center">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`الذهاب إلى التقييم رقم ${idx + 1}`}
              aria-current={idx === currentIndex}
              className="group grid size-11 cursor-pointer place-items-center"
            >
              <span
                className={`h-2 rounded-full transition-all duration-200 motion-reduce:transition-none ${
                  idx === currentIndex ? "w-6 bg-primary" : "w-2 bg-navy-100 group-hover:bg-secondary/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
