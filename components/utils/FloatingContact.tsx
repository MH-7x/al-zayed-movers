"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/components/services/constants";

/**
 * Two round sticky buttons, bottom-RIGHT on every breakpoint (WhatsApp above, Call below).
 * `right` is deliberately physical: the owner asked for the bottom-right corner, which is the
 * reading-start side in RTL. To avoid covering the first words of lines, the pair slides off the
 * right edge while the user scrolls DOWN and returns on scroll-up, after 700ms of no scrolling,
 * on keyboard focus, and always within the first 240px of the page. Toggled via a data attribute
 * (no React re-render per scroll event).
 */
export default function FloatingContact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let lastY = window.scrollY;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const set = (stow: boolean) => {
      el.dataset.stow = stow ? "true" : "false";
    };
    const onScroll = () => {
      const delta = window.scrollY - lastY;
      lastY = window.scrollY;
      if (delta > 6 && window.scrollY > 240) set(true);
      else if (delta < -6) set(false);
      clearTimeout(timer);
      timer = setTimeout(() => set(false), 700);
    };
    const onFocus = () => set(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("focusin", onFocus);
    return () => {
      window.removeEventListener("scroll", onScroll);
      el.removeEventListener("focusin", onFocus);
      clearTimeout(timer);
    };
  }, []);

  const base =
    "grid size-14 place-items-center rounded-full shadow-fab transition-transform duration-150 hover:scale-105 motion-reduce:transition-none";

  return (
    <div
      ref={ref}
      data-stow="false"
      role="group"
      aria-label="اتصال فوري"
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 transition-transform duration-150 data-[stow=true]:translate-x-[calc(100%+24px)] motion-reduce:transition-none"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا الآن عبر الواتساب"
        className={`${base} bg-primary text-primary-foreground`}
      >
        <MessageCircle className="size-6.5" aria-hidden="true" />
      </a>
      <a
        href={PHONE_TEL}
        aria-label="اتصال فوري"
        className={`${base} bg-secondary text-white outline-2 -outline-offset-2 outline-white`}
      >
        <Phone className="size-6.5" aria-hidden="true" />
      </a>
    </div>
  );
}
