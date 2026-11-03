"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/**
 * Floating Call + WhatsApp circular buttons pinned to the right edge of the screen.
 * Slides away while the quote form (#estimate) is on screen so it never covers it.
 */
export function StickyContactBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("estimate");
    if (!form) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      {
        threshold: 0.15,
      },
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed right-3 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 sm:right-5 sm:bottom-6 sm:gap-4 motion-safe:transition-transform motion-safe:duration-200 ${
        hidden ? "translate-x-24" : "translate-x-0"
      }`}
      inert={hidden}
    >
      <a
        href={`tel:${+971556461731}`}
        aria-label={`Call 055 6461731`}
        title={`Call 055 6461731`}
        className="flex size-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg sm:size-16"
      >
        <Phone className="size-6 shrink-0 sm:size-7" aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/971556461731?text=Hello%20`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp Us"
        className="relative flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg sm:size-16"
      >
        <WhatsAppIcon className="size-6 shrink-0 sm:size-7" />
        <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 ring-2 ring-white motion-safe:animate-pulse sm:size-4.5">
          <span className="sr-only">New message</span>
        </span>
      </a>
    </div>
  );
}

export default StickyContactBar;
