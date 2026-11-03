import Image from "next/image";
import Link from "next/link";
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

const menus: {
  id: "services" | "locations" | "areas";
  label: string;
  items: { title: string; href: string }[];
}[] = [
  { id: "services", label: "خدماتنا", items: serviceItems },
  { id: "locations", label: "المواقع", items: locationItems },
  { id: "areas", label: "مناطق دبي", items: dubaiAreaItems },
];

const linkCls =
  "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-secondary transition-colors hover:text-brand";

const NAV_TOGGLE = "nav-toggle";

/**
 * Server component, no client JS.
 *  - Desktop dropdowns open on hover and on keyboard focus (`group-hover` / `group-focus-within`).
 *  - The mobile panel is driven by a visually-hidden checkbox read through `group-has-[#nav-toggle:checked]`;
 *    its groups are native <details>.
 * `app/template.tsx` re-mounts the navbar on every navigation, which resets the checkbox, so the
 * mobile panel closes after a link is followed.
 */
export default function Navbar() {
  return (
    <header className="group/nav sticky top-0 z-50 w-full border-b border-border bg-background text-foreground">
      <input
        id={NAV_TOGGLE}
        type="checkbox"
        className="sr-only"
        aria-label="القائمة"
      />

      {/* 1. Utility bar (md+) */}
      <div className="hidden bg-secondary text-xs text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
          <address className="flex items-center gap-2 not-italic">
            <MapPin
              className="size-3.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span dir="ltr" className="ltr-isolate">
              B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha -
              Dubai
            </span>
          </address>
          <a
            href={PHONE_TEL}
            className="inline-flex min-h-11 items-center gap-2 font-bold hover:text-primary"
          >
            <Phone
              className="size-3.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span dir="ltr" className="ltr-isolate">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>

      {/* 2. Main bar */}
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
        <nav
          aria-label="القائمة الرئيسية"
          className="hidden items-center gap-1 lg:flex"
        >
          {menus.map((m) => (
            <div key={m.id} className="group/menu relative">
              <button
                type="button"
                className={`${linkCls} cursor-pointer gap-1.5 group-focus-within/menu:text-brand group-hover/menu:text-brand`}
              >
                {m.label}
                <ChevronDown
                  className="size-4 transition-transform group-focus-within/menu:rotate-180 group-hover/menu:rotate-180 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </button>
              {/* top-full with no gap (the pt-1 belongs to the hover target) so the pointer can travel to the list */}
              <div className="invisible absolute start-0 top-full z-50 pt-1 opacity-0 transition-opacity group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100 motion-reduce:transition-none">
                <ul
                  id={`menu-${m.id}`}
                  className="max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-border bg-card p-2 shadow-md"
                >
                  {m.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex min-h-11 items-center rounded-md px-3 text-sm text-foreground hover:bg-muted hover:text-brand"
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
          className={`${buttonVariants({ size: "sm" })} hidden! md:inline-flex`}
        >
          طلب تسعيرة
        </Link>

        {/* Mobile / tablet toggle (<lg): a label for the hidden checkbox */}
        <label
          htmlFor={NAV_TOGGLE}
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-border text-secondary hover:bg-muted group-has-[#nav-toggle:focus-visible]/nav:outline-3 group-has-[#nav-toggle:focus-visible]/nav:outline-offset-3 group-has-[#nav-toggle:focus-visible]/nav:outline-ring lg:hidden"
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

      {/* Mobile panel — sits directly under the header, no hard-coded offsets */}
      <div
        id="mobile-menu"
        className="absolute inset-x-0 top-full hidden max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background px-4 pt-2 pb-8 shadow-md md:px-6 max-lg:group-has-[#nav-toggle:checked]/nav:block"
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
            className="flex min-h-12 items-center border-b border-border font-extrabold text-secondary"
          >
            من نحن
          </Link>
          <Link
            href="/اتصل-بنا"
            className="flex min-h-12 items-center border-b border-border font-extrabold text-secondary"
          >
            اتصل بنا
          </Link>
          <Link href="/اتصل-بنا" className={`${buttonVariants()} mt-4 w-full`}>
            طلب تسعيرة
          </Link>
        </nav>
      </div>
    </header>
  );
}
