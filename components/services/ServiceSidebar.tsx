import Link from "next/link";
import {
  Boxes,
  Building,
  Building2,
  Castle,
  Clock,
  HouseIcon,
  MessageCircle,
  PhoneCall,
  Truck,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn, serviceItems } from "@/lib/utils";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_HREF,
  whatsappLink,
} from "./constants";

const serviceIcons: Record<string, LucideIcon> = {
  [SERVICE_HREF.house]: HouseIcon,
  [SERVICE_HREF.apartments]: Building,
  [SERVICE_HREF.villas]: Castle,
  [SERVICE_HREF.offices]: Building2,
  [SERVICE_HREF.packing]: Boxes,
  [SERVICE_HREF.assembly]: Wrench,
  [SERVICE_HREF.storage]: Warehouse,
};

export function ServiceSidebar({
  currentHref,
  whatsappText,
}: {
  currentHref: string;
  whatsappText: string;
}) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
      <div className="relative isolate overflow-hidden rounded-2xl bg-secondary p-6 text-white shadow-xl">
        <Truck
          aria-hidden
          className="absolute -bottom-6 -start-6 -z-10 size-36 text-white/5"
          strokeWidth={1}
        />
        <span
          aria-hidden
          className="absolute -top-10 -end-10 -z-10 size-32 rounded-full bg-primary/30 blur-2xl"
        />
        <p className="text-xl font-extrabold">احصل على عرض سعر مجاني</p>
        <p className="mt-2 text-sm leading-7 text-white/75">
          أرسل صور الأثاث عبر واتساب وسنرد عليك بسعر واضح خلال دقائق.
        </p>

        <div className="mt-5 space-y-3">
          <a
            href={whatsappLink(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 w-full gap-2 text-base font-bold",
            )}
          >
            <MessageCircle className="size-5" aria-hidden />
            واتساب
          </a>
          <a
            href={PHONE_TEL}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 w-full gap-2 border-white/25 bg-white/10 text-base font-bold text-white hover:bg-white/20 hover:text-white",
            )}
          >
            <PhoneCall className="size-5" aria-hidden />
            <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
        </div>

        <p className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-xs text-white/75">
          <Clock className="size-4 shrink-0 text-primary" aria-hidden />
          متاحون 7 أيام في الأسبوع على مدار الساعة
        </p>
      </div>

      <nav
        aria-label="خدماتنا"
        className="rounded-2xl border bg-card p-3 shadow-sm"
      >
        <p className="px-3 pb-2 pt-1 text-sm font-extrabold text-secondary">
          خدماتنا
        </p>
        <ul className="space-y-1">
          {serviceItems.map((item) => {
            const Icon = serviceIcons[item.href] ?? Truck;
            const active = item.href === currentHref;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "bg-primary/10 font-bold text-primary"
                      : "font-medium text-foreground/80 hover:bg-muted hover:text-secondary",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-secondary",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.6} aria-hidden />
                  </span>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
