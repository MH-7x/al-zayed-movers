import { locationItems, serviceItems } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

export default function Navbar() {
  return (
    <header className="w-full bg-background  text-foreground ">
      {/* 1. Top Bar */}
      <div className="bg-secondary  text-xs sm:text-sm py-2 px-4 w-full md:block hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-muted">
          {/* Address */}
          <address className="not-italic flex items-center gap-2 text-center sm:text-right">
            <svg
              className="w-4 h-4 text-primary shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>
              B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha -
              Dubai
            </span>
          </address>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a
              href="tel:0556461731"
              dir="ltr"
              className="hover:text-primary transition-colors font-medium text-muted"
            >
              055 646 1731
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto md:px-0 px-4 ">
        <div className="flex items-center justify-between  h-18">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="md:w-52 w-44  h-10  relative"
              aria-label="الصفحة الرئيسية"
            >
              <Image
                src={"/logo.svg"}
                alt="Al Zayed Movers Logo"
                fill
                className="object-contain object-center"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-secondary group-hover:text-primary transition-colors cursor-pointer"
                  aria-haspopup="true"
                >
                  <span>خدماتنا</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute top-full right-0 w-64 pt-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 overflow-hidden">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations Dropdown (with nested Dubai Areas) */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-secondary group-hover:text-primary transition-colors cursor-pointer"
                  aria-haspopup="true"
                >
                  <span>المواقع</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute top-full right-0 w-64 pt-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 overflow-visible">
                    {locationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Sub Location Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-secondary group-hover:text-primary transition-colors cursor-pointer"
                  aria-haspopup="true"
                >
                  <span>مناطق دبي</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute top-full right-0 w-64 pt-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 overflow-hidden">
                    {dubaiAreaItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Static Links */}
              <Link
                href="/من-نحن"
                className="px-3 py-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                من نحن
              </Link>
              <Link
                href="/اتصل-بنا"
                className="px-3 py-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                اتصل بنا
              </Link>
            </nav>
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/اتصل-بنا"
              className="md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full shadow-sm hover:shadow transition-all duration-200  hidden"
            >
              طلب تسعيرة
            </Link>

            {/* Pure CSS Mobile Menu Trigger Checkbox */}
            <input
              type="checkbox"
              id="mobile-nav-toggle"
              className="hidden peer"
              aria-label="تبديل القائمة"
            />

            {/* Hamburger Button Icon */}
            <label
              htmlFor="mobile-nav-toggle"
              className="lg:hidden p-2 rounded-md border border-border text-secondary hover:bg-muted cursor-pointer select-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>

            {/* Mobile Drawer (No JS / CSS driven by checkbox state) */}
            <div className="peer-checked:block hidden fixed inset-x-0 top-[72px] sm:top-[115px] bottom-0 bg-background/95 backdrop-blur-sm z-50 border-t border-border overflow-y-auto px-6 py-6 lg:hidden">
              <nav className="flex flex-col gap-4 text-base">
                {/* Mobile Services Accordion */}
                <details className="group/details border-b border-border/40 pb-2">
                  <summary className="font-bold text-secondary hover:text-primary list-none flex justify-between items-center cursor-pointer py-1">
                    <span>خدماتنا</span>
                    <span className="text-xs transition-transform group-open/details:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="flex flex-col gap-2 mt-2 pr-4 text-sm text-muted-foreground">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-primary py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Mobile Locations Accordion */}
                <details className="group/details border-b border-border/40 pb-2">
                  <summary className="font-bold text-secondary hover:text-primary list-none flex justify-between items-center cursor-pointer py-1">
                    <span>المواقع</span>
                    <span className="text-xs transition-transform group-open/details:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="flex flex-col gap-2 mt-2 pr-4 text-sm text-muted-foreground">
                    {locationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-primary py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Mobile sub locations Accordion */}
                <details className="group/details border-b border-border/40 pb-2">
                  <summary className="font-bold text-secondary hover:text-primary list-none flex justify-between items-center cursor-pointer py-1">
                    <span>مناطق دبي</span>
                    <span className="text-xs transition-transform group-open/details:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="flex flex-col gap-2 mt-2 pr-4 text-sm text-muted-foreground">
                    {dubaiAreaItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-primary py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                <Link
                  href="/من-نحن"
                  className="font-bold text-secondary hover:text-primary py-1 border-b border-border/40"
                >
                  من نحن
                </Link>
                <Link
                  href="/اتصل-بنا"
                  className="font-bold text-secondary hover:text-primary py-1 border-b border-border/40"
                >
                  اتصل بنا
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
