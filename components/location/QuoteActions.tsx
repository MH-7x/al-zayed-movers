import type { ReactNode } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/971556461731";
const PHONE_URL = "tel:+971556461731";

export function WhatsAppButton({ children }: { children: ReactNode }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <Button size="lg" className="md:px-5">
        {children}
      </Button>
    </a>
  );
}

/** WhatsApp + call buttons, styled for dark (hero / CTA band) backgrounds. */
export function QuoteActions({
  whatsappLabel,
  callLabel,
}: {
  whatsappLabel: string;
  callLabel: string;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <WhatsAppButton>{whatsappLabel}</WhatsAppButton>
      <a href={PHONE_URL}>
        <Button
          size="lg"
          variant="outline"
          className="md:px-5 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white dark:bg-white/10"
        >
          <PhoneCall className="size-4 ml-2" />
          <span>{callLabel}</span>
          <span dir="ltr" className="ms-1">
            055 646 1731
          </span>
        </Button>
      </a>
    </div>
  );
}
