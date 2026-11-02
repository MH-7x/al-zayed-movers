import type { ComponentProps, ReactNode } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PHONE_TEL, WHATSAPP_URL, whatsappLink } from "@/components/services/constants";
import { cn } from "@/lib/utils";

type Look = Pick<NonNullable<Parameters<typeof buttonVariants>[0]>, "variant" | "size">;

/** True when a label is just a phone number: it then needs an LTR isolate inside RTL text. */
const isPhone = (c: ReactNode) => typeof c === "string" && /^[\d\s+]+$/.test(c);

function Label({ children }: { children: ReactNode }) {
  return isPhone(children) ? <bdi className="ltr-isolate">{children}</bdi> : <span>{children}</span>;
}

/** WhatsApp link-button. Always an <a> (never <Button> inside <a>). Opens in a new tab. */
export function WhatsAppButton({
  children,
  message,
  variant = "default",
  size,
  className,
  ...rest
}: Look & { children: ReactNode; message?: string } & Omit<ComponentProps<"a">, "href" | "children">) {
  return (
    <a
      href={message ? whatsappLink(message) : WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      <MessageCircle aria-hidden="true" />
      <Label>{children}</Label>
    </a>
  );
}

/** Call link-button (tel:). */
export function CallButton({
  children,
  variant = "outline",
  size,
  className,
  ...rest
}: Look & { children: ReactNode } & Omit<ComponentProps<"a">, "href" | "children">) {
  return (
    <a href={PHONE_TEL} className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      <Phone aria-hidden="true" />
      <Label>{children}</Label>
    </a>
  );
}
