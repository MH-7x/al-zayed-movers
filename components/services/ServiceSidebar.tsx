import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";
import { cn, serviceItems } from "@/lib/utils";
import { PHONE_DISPLAY } from "./constants";
import { serviceImageByHref } from "./service-images";

/**
 * Sidebar of the service pages: a navy quote card + the "other services" navigation (service photo,
 * current page marked). ServicePageLayout puts it in the second grid column, which in RTL is the
 * physical LEFT; below lg it stacks under the content (two columns from md).
 * The outer div is the grid cell, the inner <aside> is what sticks (a stretched grid item can't).
 */
export function ServiceSidebar({
  currentHref,
  whatsappText,
}: {
  currentHref: string;
  whatsappText: string;
}) {
  return (
    <div>
      <aside className="grid items-start gap-6 md:grid-cols-2 lg:sticky lg:top-32 lg:max-h-[calc(100dvh-9rem)] lg:grid-cols-1 lg:overflow-y-auto lg:overscroll-contain">
        <div className="rounded-lg bg-secondary p-6 text-white shadow-md">
          <p className="text-xl font-extrabold text-white">
            احصل على عرض سعر مجاني
          </p>
          <p className="mt-2 text-sm text-white/85">
            أرسل صور الأثاث عبر واتساب وسنرد عليك بسعر واضح خلال دقائق.
          </p>
          <div className="mt-5 grid gap-3">
            <WhatsAppButton message={whatsappText}>واتساب</WhatsAppButton>
            <CallButton variant="outlineLight">{PHONE_DISPLAY}</CallButton>
          </div>
          <p className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-sm text-white/85">
            <Clock className="size-4 shrink-0 text-primary" aria-hidden />
            متاحون 7 أيام في الأسبوع على مدار الساعة
          </p>
        </div>

        <nav
          aria-label="خدماتنا"
          className="rounded-lg border border-border bg-card p-3 shadow-sm"
        >
          <p className="px-3 pt-1 pb-2 text-lg font-extrabold text-secondary">
            خدماتنا
          </p>
          <ul className="grid gap-1">
            {serviceItems.map((item) => {
              const image =
                serviceImageByHref[
                  item.href as keyof typeof serviceImageByHref
                ];
              const active = item.href === currentHref;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center gap-3 rounded-md p-2 text-sm transition-colors",
                      active
                        ? "bg-brand-soft font-extrabold text-brand"
                        : "font-bold text-secondary hover:bg-muted hover:text-brand",
                    )}
                  >
                    {image && (
                      <span
                        className={cn(
                          "relative size-10 shrink-0 overflow-hidden rounded-md",
                          active &&
                            "outline-2 outline-offset-1 outline-primary",
                        )}
                      >
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </span>
                    )}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
