/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "@/public/logo-1.svg";
import { locationItems, serviceItems } from "@/lib/utils";

export default function Footer() {
  const quickLinks = [
    { name: "من نحن", href: "/من-نحن" },
    { name: "مناطق دبي", href: "/مناطق-دبي" },
    { name: "مدونات", href: "/" },
    { name: "اتصل بنا", href: "/اتصل-بنا" },
  ];

  return (
    <footer className="bg-secondary text-background/90 pt-16 pb-6 border-t border-foreground/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* العمود الأول: الشعار ونبذة تعريفية */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          <div className="w-48 h-12 relative overflow-hidden  rounded-md">
            <Image
              src={logo}
              alt="شركة النمره نقل اثاث شعار"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-background/70">
            الزايد نقل اثاث دبي هي شركة نقل محترفة و افضل شركة نقل الاثاث في دبي
            ، ولديها خبرة تزيد عن 12 سنوات في خدمات نقل. تغطي خدماتنا دولة
            الإمارات العربية المتحدة، بما في ذلك أبوظبي والشارقة وعجمان ورأس
            الخيمة والفجيرة وأم القيوين والعين. تواصل معنا على الرقم 0556461731
          </p>
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="/سياسة-الخصوصية"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <span className="text-background/30">|</span>
            <Link
              href="/شروط-الخدمة"
              className="text-sm text-background/70 hover:text-primary transition-colors"
            >
              شروط الخدمة
            </Link>
          </div>
          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/alnimramovers"
              className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/alnimramovers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/alnimramovers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
              aria-label="Pinterest"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.166-1.495-.694-2.433-2.878-2.433-4.616 0-3.763 2.73-7.213 7.87-7.213 4.131 0 7.34 2.944 7.34 6.88 0 4.105-2.586 7.41-6.18 7.41-1.209 0-2.345-.626-2.73-1.361l-.744 2.828c-.269 1.027-1 2.317-1.492 3.116 1.12.348 2.31.536 3.546.536 6.62 0 11.987-5.365 11.987-11.987C23.99 5.362 18.624 0 12.017 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/alnimramovers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="/"
              className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* روابط قانونية */}
        </div>

        {/* العمود الثاني: الخدمات */}
        <div>
          <h3 className="text-background font-bold text-lg mb-6 border-s-4 border-primary ps-3 inline-block leading-none">
            خدماتنا
          </h3>
          <ul className="flex flex-col gap-3.5">
            {serviceItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-background/75 hover:text-primary transition-colors duration-200"
                >
                  <ArrowLeft
                    size={14}
                    className="text-primary/70 transition-transform group-hover:-translate-x-1"
                  />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: المواقع */}
        <div>
          <h3 className="text-background font-bold text-lg mb-6 border-s-4 border-primary ps-3 inline-block leading-none">
            مواقع الخدمة
          </h3>
          <ul className="flex flex-col gap-3.5">
            <li>
              <a
                href={"/مناطق-دبي"}
                className="group flex items-center gap-2 text-sm text-background/75 hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft
                  size={14}
                  className="text-primary/70 transition-transform group-hover:-translate-x-1"
                />
                مناطق خدماتنا في دبي
              </a>
            </li>
            {locationItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-background/75 hover:text-primary transition-colors duration-200"
                >
                  <ArrowLeft
                    size={14}
                    className="text-primary/70 transition-transform group-hover:-translate-x-1"
                  />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الرابع: معلومات الاتصال */}
        <div>
          <h3 className="text-background font-bold text-lg mb-6 border-s-4 border-primary ps-3 inline-block leading-none">
            معلومات الاتصال
          </h3>
          <ul className="flex flex-col gap-5 text-sm text-background/80">
            {/* العنوان */}
            <li className="">
              <div>
                <span className="block font-semibold text-xs text-background/50 mb-1">
                  العنوان
                </span>
                <address className="not-italic text-xs leading-relaxed">
                  B17 Owned by Al Nasr Sports Club - Office No. 1 - Oud Metha -
                  Dubai
                </address>
              </div>
            </li>

            {/* رقم الهاتف */}
            <li className="">
              <div>
                <span className="block font-semibold text-xs text-background/50 mb-1">
                  رقم التليفون
                </span>
                <a
                  href={"tel:+971556461731"}
                  dir="ltr"
                  className="hover:text-primary transition-colors block text-sm font-semibold text-end "
                >
                  0556461731
                </a>
              </div>
            </li>

            {/* ساعات العمل */}
            <li className="">
              <div>
                <span className="block font-semibold text-xs text-background/50 mb-1">
                  ساعات العمل
                </span>
                <time className="block text-xs font-medium">مفتوح 24 ساعة</time>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* الخط الفاصل */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-background/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* حقوق الملكية */}

          <p className="text-background/80">
            © {new Date().getFullYear()} الزايد نقل اثاث دبي. جميع الحقوق
            محفوظة.
          </p>

          {/* روابط سريعة سفلى */}
          <div className="flex flex-wrap items-center gap-5">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-background/80 text-sm text-center w-full mt-2">
        Development & Maintenance by{" "}
        <a
          href="https://mashalhuraira.vercel.app"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Mashal Huraira
        </a>
      </p>
    </footer>
  );
}
