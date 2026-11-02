"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { locationItems, serviceItems } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/services/constants";
import { buttonVariants } from "@/components/ui/button";

const dubaiAreaItems = [
  { title: "نقل اثاث دبي مارينا", href: "/مناطق-دبي/نقل-اثاث-دبي-مارينا" },
  {
    title: "نقل اثاث وسط مدينة دبي",
    href: "/مناطق-دبي/نقل-اثاث-وسط-مدينة-دبي",
  },
  {
    title: "نقل اثاث أبراج بحيرات جميرا",
    href: "/مناطق-دبي/نقل-اثاث-أبراج-بحيرات-جميرا",
  },
  {
    title: "نقل اثاث الخليج التجاري",
    href: "/مناطق-دبي/نقل-اثاث-الخليج-التجاري",
  },
  {
    title: "نقل اثاث قرية جميرا الدائرية",
    href: "/مناطق-دبي/نقل-اثاث-قرية-جميرا-الدائرية",
  },
  { title: "نقل اثاث نخلة جميرا", href: "/مناطق-دبي/نقل-اثاث-نخلة-جميرا" },
  { title: "نقل اثاث البرشاء", href: "/مناطق-دبي/نقل-اثاث-البرشاء" },
  { title: "نقل اثاث ديرة", href: "/مناطق-دبي/نقل-اثاث-ديرة" },
  { title: "نقل اثاث بر دبي", href: "/مناطق-دبي/نقل-اثاث-بر-دبي" },
  { title: "نقل اثاث جميرا", href: "/مناطق-دبي/نقل-اثاث-جميرا" },
];

type MenuId = "services" | "locations" | "areas" | "mobile";

const menus: { id: Exclude<MenuId, "mobile">; label: string; items: { title: string; href: string }[] }[] = [
  { id: "services", label: "خدماتنا", items: serviceItems },
  { id: "locations", label: "المواقع", items: locationItems },
  { id: "areas", label: "مناطق دبي", items: dubaiAreaItems },
];

const linkCls =
  "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-secondary transition-colors hover:text-brand";

export default function Navbar() {
  const pathname = usePathname();
  // The open menu is remembered together with the path it was opened on, so navigating
  // closes it without an effect.
  const [state, setState] = useState<{ id: MenuId | null; path: string }>({ id: null, path: pathname });
  const open = state.path === pathname ? state.id : null;
  const rootRef = useRef<HTMLElement>(null);

  const toggle = (id: MenuId) =>
    setState({ id: open === id ? null : id, path: pathname });
  const close = () => setState({ id: null, path: pathname });

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setState((s) => ({ ...s, id: null }));
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setState((s) => ({ ...s, id: null }));
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-50 w-full border-b border-border bg-background text-foreground"
    >
      {/* 1. Utility bar (md+) */}
      <div className="hidden bg-secondary text-xs text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
          <address className="flex items-center gap-2 not-italic">
            <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span dir="ltr" className="ltr-isolate">
              B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha - Dubai
            </span>
          </address>
          <a
            href={PHONE_TEL}
            className="inline-flex min-h-11 items-center gap-2 font-bold hover:text-primary"
          >
            <Phone className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span dir="ltr" className="ltr-isolate">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>

      {/* 2. Main bar — gutter at EVERY breakpoint (was px-0 from md up) */}
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center gap-4 px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="الصفحة الرئيسية"
          className="relative me-auto flex h-11 w-44 items-center md:w-52"
        >
          <Image
            src="/logo.svg"
            alt="Al Zayed Movers Logo"
            width={208}
            height={51}
            preload
            className="h-auto w-full"
          />
        </Link>

        {/* Desktop navigation (lg+) */}
        <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-1 lg:flex">
          {menus.map((m) => (
            <div key={m.id} className="relative">
              <button
                type="button"
                aria-expanded={open === m.id}
                aria-controls={`menu-${m.id}`}
                onClick={() => toggle(m.id)}
                className={`${linkCls} cursor-pointer gap-1.5 ${open === m.id ? "text-brand" : ""}`}
              >
                {m.label}
                <ChevronDown
                  className={`size-4 transition-transform motion-reduce:transition-none ${open === m.id ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {open === m.id && (
                <ul
                  id={`menu-${m.id}`}
                  className="absolute start-0 top-full z-50 mt-1 max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-border bg-card p-2 shadow-md"
                >
                  {m.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex min-h-11 items-center rounded-md px-3 text-sm text-foreground hover:bg-muted hover:text-brand"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link href="/من-نحن" className={linkCls}>
            من نحن
          </Link>
          <Link href="/اتصل-بنا" className={linkCls}>
            اتصل بنا
          </Link>
        </nav>

        <Link
          href="/اتصل-بنا"
          className={`${buttonVariants({ size: "sm" })} hidden md:inline-flex`}
        >
          طلب تسعيرة
        </Link>

        {/* Mobile / tablet toggle (<lg) */}
        <button
          type="button"
          aria-expanded={open === "mobile"}
          aria-controls="mobile-menu"
          aria-label="القائمة"
          onClick={() => toggle("mobile")}
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-border text-secondary hover:bg-muted lg:hidden"
        >
          {open === "mobile" ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile panel — sits directly under the header, no hard-coded offsets */}
      {open === "mobile" && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background px-4 pt-2 pb-8 shadow-md md:px-6 lg:hidden"
        >
          <nav aria-label="القائمة الرئيسية" className="mx-auto max-w-3xl">
            {menus.map((m) => (
              <details key={m.id} className="group border-b border-border">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between font-extrabold text-secondary">
                  {m.label}
                  <ChevronDown
                    className="size-5 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="pb-2 ps-3">
                  {m.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex min-h-11 items-center text-sm text-muted-foreground hover:text-brand"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <Link
              href="/من-نحن"
              onClick={close}
              className="flex min-h-12 items-center border-b border-border font-extrabold text-secondary"
            >
              من نحن
            </Link>
            <Link
              href="/اتصل-بنا"
              onClick={close}
              className="flex min-h-12 items-center border-b border-border font-extrabold text-secondary"
            >
              اتصل بنا
            </Link>
            <Link
              href="/اتصل-بنا"
              onClick={close}
              className={`${buttonVariants()} mt-4 w-full`}
            >
              طلب تسعيرة
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
