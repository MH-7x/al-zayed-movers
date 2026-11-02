import Link from "next/link";
import {
  Boxes,
  Building,
  Building2,
  Castle,
  Clock,
  HouseIcon,
  Truck,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/ui/ContactButtons";
import { cn, serviceItems } from "@/lib/utils";
import { PHONE_DISPLAY, SERVICE_HREF } from "./constants";

const serviceIcons: Record<string, LucideIcon> = {
  [SERVICE_HREF.house]: HouseIcon,
  [SERVICE_HREF.apartments]: Building,
  [SERVICE_HREF.villas]: Castle,
  [SERVICE_HREF.offices]: Building2,
  [SERVICE_HREF.packing]: Boxes,
  [SERVICE_HREF.assembly]: Wrench,
  [SERVICE_HREF.storage]: Warehouse,
};

/**
 * Former sticky sidebar, now an in-flow band (the round buttons and the hero already provide the
 * persistent actions): a navy quote card + the "other services" navigation with the current page marked.
 */
export function ServiceSidebar({
  currentHref,
  whatsappText,
}: {
  currentHref: string;
  whatsappText: string;
}) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
      <aside className="rounded-lg bg-secondary p-6 text-white shadow-md md:p-8">
        <p className="text-xl font-extrabold text-white">احصل على عرض سعر مجاني</p>
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
      </aside>

      <nav aria-label="خدماتنا" className="rounded-lg border border-border bg-card p-3 shadow-sm">
        <p className="px-3 pt-1 pb-2 text-lg font-extrabold text-secondary">خدماتنا</p>
        <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {serviceItems.map((item) => {
            const Icon = serviceIcons[item.href] ?? Truck;
            const active = item.href === currentHref;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-brand-soft font-extrabold text-brand"
                      : "font-bold text-secondary hover:bg-muted hover:text-brand",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-md",
                      active ? "bg-primary text-primary-foreground" : "bg-muted text-secondary",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.8} aria-hidden />
                  </span>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
