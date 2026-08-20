"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export interface Review {
  text: string;
  name: string;
  time: string; // مثال: "منذ أسبوع"، "منذ ٣ أسابيع"
}

interface ReviewsSliderProps {
  reviews: Review[];
  autoPlayInterval?: number; // الوقت بالملي ثانية، القيمة الافتراضية 5000 (5 ثوانٍ)
}

export default function ReviewsSlider({
  reviews,
  autoPlayInterval = 5000,
}: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsFading(false);
    }, 300); // يتوافق مع مدة تلاشي الـ transition (duration-300)
  }, [reviews.length]);

  useEffect(() => {
    if (!reviews || reviews.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [reviews, autoPlayInterval, handleNext]);

  // التحقق من وجود بيانات لتفادي أخطاء الرندر
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentIndex];
  // استخراج الحرف الأول من الاسم للصورة الرمزية
  const firstLetter = currentReview.name
    ? currentReview.name.trim().charAt(0)
    : "ع";

  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center relative">
        {/* رمز اقتباس خلفي ناعم وجمالي */}
        <div className="absolute -top-6 text-primary/10 text-8xl font-serif select-none pointer-events-none">
          ”
        </div>

        {/* حاوية التقييم النشط مع تأثير تلاشي ناعم */}
        <div
          className={`w-full flex flex-col items-center gap-3 transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* نجوم التقييم الخماسية بلون الهوية */}
          <div className="flex items-center gap-1 text-primary select-none">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">
                ★
              </span>
            ))}
          </div>
          <Image
            src={"/google-icon.svg"}
            alt="google svg icon"
            width={30}
            height={30}
          />
          {/* نص التقييم الرئيسي */}
          <p className="text-base md:text-lg text-foreground leading-relaxed font-medium max-w-xl">
            {currentReview.text}
          </p>

          {/* معلومات العميل والصورة الرمزية */}
          <div className="flex items-center gap-3.5 mt-2">
            {/* الصورة الرمزية بالحرف الأول */}
            <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-black text-lg select-none shrink-0">
              {firstLetter}
            </div>

            {/* الاسم والتوقيت */}
            <div className="text-right">
              <span className="block font-bold text-sm md:text-base text-secondary">
                {currentReview.name}
              </span>
              <span className="block text-xs text-muted-foreground mt-0.5">
                {currentReview.time}
              </span>
            </div>
          </div>
        </div>

        {/* مؤشرات التمرير السفلية (Dots) */}
        {reviews.length > 1 && (
          <div className="flex items-center gap-2 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsFading(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsFading(false);
                  }, 300);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-secondary-foreground hover:bg-background/50"
                }`}
                aria-label={`الذهاب إلى التقييم رقم ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
