import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "@/public/logo-1.svg";
import { locationItems, serviceItems } from "@/lib/utils";
import { PHONE_TEL } from "@/components/services/constants";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/alzayedmoversuae",
    external: false,
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/alzayedmoversuae",
    external: true,
    d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/alzayedmoversuae",
    external: true,
    d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.166-1.495-.694-2.433-2.878-2.433-4.616 0-3.763 2.73-7.213 7.87-7.213 4.131 0 7.34 2.944 7.34 6.88 0 4.105-2.586 7.41-6.18 7.41-1.209 0-2.345-.626-2.73-1.361l-.744 2.828c-.269 1.027-1 2.317-1.492 3.116 1.12.348 2.31.536 3.546.536 6.62 0 11.987-5.365 11.987-11.987C23.99 5.362 18.624 0 12.017 0z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alzayedmoversuae",
    external: true,
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "YouTube",
    href: "/",
    external: false,
    d: "M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const quickLinks = [
  { name: "من نحن", href: "/من-نحن" },
  { name: "مناطق دبي" },
  { name: "مدونات", href: "/" },
  { name: "اتصل بنا", href: "/اتصل-بنا" },
];

const listLink =
  "group inline-flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-primary";
const colTitle =
  "mb-4 inline-block border-s-4 border-primary ps-3 text-lg leading-none font-extrabold text-white";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-12  text-white/80 md:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-5 lg:px-8">
        {/* Brand + about */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Image
            src={logo}
            alt="Al Zayed Movers Logo"
            width={192}
            height={47}
            className="h-auto w-48"
          />
          <p className="text-sm leading-relaxed text-white/80">
            الزايد نقل اثاث دبي هي شركة نقل محترفة و افضل شركة نقل الاثاث في دبي
            ، ولديها خبرة تزيد عن 12 سنوات في خدمات نقل. تغطي خدماتنا دولة
            الإمارات العربية المتحدة، بما في ذلك أبوظبي والشارقة وعجمان ورأس
            الخيمة والفجيرة وأم القيوين والعين. تواصل معنا على الرقم{" "}
            <bdi className="ltr-isolate">0556461731</bdi>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 text-sm">
            <span className="inline-flex min-h-11 items-center text-white/80">
              سياسة الخصوصية
            </span>
            <span className="text-white/30" aria-hidden="true">
              |
            </span>
            <span className="inline-flex min-h-11 items-center text-white/80">
              شروط الخدمة
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <svg
                    className="size-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={s.d} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className={colTitle}>خدماتنا</h3>
          <ul>
            {serviceItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={listLink}>
                  <ArrowLeft
                    className="size-3.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className={colTitle}>مواقع الخدمة</h3>
          <ul>
            <li>
              <span className={listLink}>
                <ArrowLeft
                  className="size-3.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                مناطق خدماتنا في دبي
              </span>
            </li>
            {locationItems.map((item) => (
              <li key={item.title}>
                {item.href ? (
                  <a href={item.href} className={listLink}>
                    <ArrowLeft
                      className="size-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </a>
                ) : (
                  <span className={listLink}>
                    <ArrowLeft
                      className="size-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={colTitle}>معلومات الاتصال</h3>
          <ul className="flex flex-col gap-5 text-sm">
            <li>
              <span className="mb-1 block text-xs font-bold text-white/70">
                العنوان
              </span>
              <address className="text-sm leading-relaxed not-italic">
                <bdi className="ltr-isolate">
                  B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha -
                  Dubai
                </bdi>
              </address>
            </li>
            <li>
              <span className="mb-1 block text-xs font-bold text-white/70">
                رقم التليفون
              </span>
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-11 items-center font-bold hover:text-primary"
              >
                <bdi className="ltr-isolate">0556461731</bdi>
              </a>
            </li>
            <li>
              <span className="mb-1 block text-xs font-bold text-white/70">
                ساعات العمل
              </span>
              <time className="block">مفتوح 24 ساعة</time>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-4 pt-6 md:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-2 text-sm md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} الزايد نقل اثاث دبي. جميع الحقوق
            محفوظة.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center hover:text-primary"
                  >
                    {link.name}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center">
                    {link.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-1 text-xs text-white/70">
          <bdi className="ltr-isolate">
            Development & Maintenance by{" "}
            <a
              href="https://mashalhuraira.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-primary"
            >
              Mashal Huraira
            </a>
          </bdi>
        </p>
      </div>
    </footer>
  );
}
