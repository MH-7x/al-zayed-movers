// Single source of truth for contact details. Import from here instead of hard-coding the number.
export const PHONE_DISPLAY = "055 6461731";
export const PHONE_TEL = "tel:+971556461731";
const WHATSAPP_NUMBER = "971556461731";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappLink = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

export const SERVICE_HREF = {
  house: "/نقل-اثاث-المنزل-في-دبي",
  apartments: "/نقل-اثاث-الشقق-في-دبي",
  villas: "/نقل-اثاث-الفلل-في-دبي",
  offices: "/نقل-اثاث-المكاتب-في-دبي",
  packing: "/تغليف-اثاث-في-دبي",
  assembly: "/فك-وتركيب-اثاث-في-دبي",
  storage: "/تخزين-اثاث-في-دبي",
} as const;

