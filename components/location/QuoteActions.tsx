import type { ReactNode } from "react";
import { CallButton, WhatsAppButton as WhatsApp } from "@/components/ui/ContactButtons";
import { PHONE_DISPLAY } from "@/components/services/constants";

export function WhatsAppButton({ children }: { children: ReactNode }) {
  return <WhatsApp>{children}</WhatsApp>;
}

/** WhatsApp (primary) + call (outline) pair. The outline button turns white inside navy bands. */
export function QuoteActions({
  whatsappLabel,
  callLabel,
}: {
  whatsappLabel: string;
  callLabel: string;
}) {
  return (
    <div className="flex flex-wrap gap-3 max-sm:[&>a]:w-full">
      <WhatsApp>{whatsappLabel}</WhatsApp>
      <CallButton>
        {callLabel} <bdi className="ltr-isolate">{PHONE_DISPLAY}</bdi>
      </CallButton>
    </div>
  );
}
