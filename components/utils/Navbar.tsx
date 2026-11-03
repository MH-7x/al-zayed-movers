import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { locationItems, serviceItems } from "@/lib/utils";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/components/services/constants";
import { buttonVariants } from "@/components/ui/button";

const menus: {
  id: "services" | "locations" | "areas";
  label: string;
  items: { title: string; href: string }[];
}[] = [
  { id: "services", label: "خدماتنا", items: serviceItems },
  { id: "locations", label: "المواقع", items: locationItems },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/alnimramovers",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alnimramovers",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

/** Nav link: bold navy text with an orange underline that grows from the centre on hover / focus. */
const linkCls =
  "relative inline-flex min-h-11 items-center px-3.5 text-[0.9375rem] font-extrabold text-secondary transition-colors hover:text-brand focus-visible:text-brand after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";

/** Top-bar link. The ::after widens the hit area to ≥44px without making the 36px row taller. */
const topLinkCls =
  "relative inline-flex items-center font-bold text-secondary transition-colors hover:text-brand after:absolute after:-inset-x-1 after:-inset-y-3";

const mobileRowCls =
  "flex min-h-12 items-center border-b border-border font-extrabold text-secondary hover:text-brand";

const NAV_TOGGLE = "nav-toggle";

function Separator({ tone }: { tone: "primary" | "secondary" }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-4 w-0.5 shrink-0 rounded-full ${tone === "primary" ? "bg-primary" : "bg-secondary/40"}`}
    />
  );
}

/**
 * Server component, no client JS.
 *  - A light utility bar (welcome text, quick links, socials, phone) scrolls away with the page;
 *    the logo + navigation bar below it is sticky.
 *  - Desktop dropdowns open on hover and on keyboard focus (`group-hover` / `group-focus-within`).
 *  - The mobile panel is driven by a visually-hidden checkbox read through `group-has-[#nav-toggle:checked]`;
 *    its groups are native <details>.
 * `app/template.tsx` re-mounts the navbar on every navigation, which resets the checkbox, so the
 * mobile panel closes after a link is followed.
 */
export default function Navbar() {
  return (
    <>
      {/* 1. Utility bar */}
      <div className="border-b border-border bg-muted text-xs md:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col px-4 md:h-11 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row md:gap-4">
            <p className="flex h-9 items-center text-foreground md:h-auto md:block hidden">
              <span className="font-extrabold text-secondary">
                شركة الزايد نقل اثاث
              </span>
            </p>

            <ul className="flex h-9  items-center justify-center gap-3 md:h-auto md:max-lg:hidden">
              <li className="hidden md:block">
                <Separator tone="primary" />
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={topLinkCls}
                >
                  واتساب : 0556461731
                </a>
              </li>
              <li>
                <Separator tone="primary" />
              </li>
              <li className="text-foreground">مفتوح 24 ساعة</li>
            </ul>
          </div>

          <div className="hidden items-stretch gap-1 md:flex md:self-stretch">
            <ul className="flex items-center">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center text-secondary transition-colors hover:text-brand"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={s.d} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={PHONE_TEL}
              className="ms-2 flex h-full items-center gap-2.5 bg-card px-5 font-bold text-secondary transition-colors hover:text-brand"
            >
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main bar (sticky) */}
      <header className="group/nav sticky top-0 z-50 w-full border-b border-border bg-background text-foreground shadow-xs">
        <input
          id={NAV_TOGGLE}
          type="checkbox"
          className="sr-only"
          aria-label="القائمة"
        />

        <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 md:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="الصفحة الرئيسية"
            className="relative me-auto flex h-8 w-40 items-center md:w-52"
          >
            <Image
              src="/logo.svg"
              alt="Al Zayed Movers Logo"
              width={180}
              height={40}
              preload
            />
          </Link>

          {/* Desktop navigation (lg+) */}
          <nav
            aria-label="القائمة الرئيسية"
            className="hidden items-center lg:flex"
          >
            {menus.map((m) => (
              <div key={m.id} className="group/menu relative">
                <button
                  type="button"
                  className={`${linkCls} cursor-pointer gap-1.5 group-focus-within/menu:text-brand group-hover/menu:text-brand group-focus-within/menu:after:scale-x-100 group-hover/menu:after:scale-x-100`}
                >
                  {m.label}
                  <ChevronDown
                    className="size-4 transition-transform group-focus-within/menu:rotate-180 group-hover/menu:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </button>
                {/* top-full with no gap (the pt-2 belongs to the hover target) so the pointer can travel to the list */}
                <div className="invisible absolute start-0 top-full z-50 pt-2 opacity-0 transition-opacity group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100 motion-reduce:transition-none">
                  <ul
                    id={`menu-${m.id}`}
                    className="max-h-[70vh] w-72 overflow-y-auto rounded-lg  bg-card p-2 shadow-xl"
                  >
                    {m.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-foreground transition-colors hover:bg-muted hover:text-brand"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
            className={`${buttonVariants({ size: "sm" })} max-md:hidden`}
          >
            طلب تسعيرة
          </Link>

          {/* Mobile / tablet toggle (<lg): a label for the hidden checkbox */}
          <label
            htmlFor={NAV_TOGGLE}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-border text-secondary transition-colors hover:bg-muted group-has-[#nav-toggle:checked]/nav:bg-secondary group-has-[#nav-toggle:checked]/nav:text-secondary-foreground group-has-[#nav-toggle:focus-visible]/nav:outline-3 group-has-[#nav-toggle:focus-visible]/nav:outline-offset-3 group-has-[#nav-toggle:focus-visible]/nav:outline-ring lg:hidden"
          >
            <span className="sr-only">القائمة</span>
            <Menu
              className="size-6 group-has-[#nav-toggle:checked]/nav:hidden"
              aria-hidden="true"
            />
            <X
              className="hidden size-6 group-has-[#nav-toggle:checked]/nav:block"
              aria-hidden="true"
            />
          </label>
        </div>

        {/* Mobile panel — sits directly under the sticky bar. The utility bar above can still be in view
            (36+36px on phones, 44px from md), so the max-height leaves room for it. */}
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full hidden max-h-[calc(100dvh-7.25rem)] overflow-y-auto border-t-2 border-t-primary border-b border-border bg-background px-10 pt-2 pb-6 shadow-xl md:max-h-[calc(100dvh-7.25rem)] md:px-6 max-lg:group-has-[#nav-toggle:checked]/nav:block"
        >
          <nav aria-label="القائمة الرئيسية" className="mx-auto max-w-3xl">
            {menus.map((m) => (
              <details key={m.id} className="group border-b border-border">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between font-extrabold text-secondary group-open:text-brand">
                  {m.label}
                  <ChevronDown
                    className="size-5 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="mb-2 border-s-2 border-primary ps-3">
                  {m.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex min-h-11 items-center text-sm text-muted-foreground hover:text-brand"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <Link href="/من-نحن" className={mobileRowCls}>
              من نحن
            </Link>
            <Link href="/اتصل-بنا" className={mobileRowCls}>
              اتصل بنا
            </Link>

            <Link
              href="/اتصل-بنا"
              className={`${buttonVariants()} mt-5 w-full`}
            >
              طلب تسعيرة
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={PHONE_TEL}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <Phone aria-hidden="true" />
                اتصل الآن
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <MessageCircle aria-hidden="true" />
                واتساب
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
