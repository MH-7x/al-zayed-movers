export const PHONE_DISPLAY = "055 646 1731";
export const PHONE_TEL = "tel:+971556461731";
const WHATSAPP_NUMBER = "971556461731";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SERVICE_HREF = {
  house: "/نقل-اثاث-المنزل-في-دبي",
  apartments: "/نقل-اثاث-الشقق-في-دبي",
  villas: "/نقل-اثاث-الفلل-في-دبي",
  offices: "/نقل-اثاث-المكاتب-في-دبي",
  packing: "/تغليف-اثاث-في-دبي",
  assembly: "/فك-وتركيب-اثاث-في-دبي",
  storage: "/تخزين-اثاث-في-دبي",
} as const;

// Same URLs the Navbar already links to.
export const AREA_HREF = {
  marina: "/مناطق-دبي/نقل-اثاث-دبي-مارينا",
  downtown: "/مناطق-دبي/نقل-اثاث-وسط-مدينة-دبي",
  jlt: "/مناطق-دبي/نقل-اثاث-أبراج-بحيرات-جميرا",
  businessBay: "/مناطق-دبي/نقل-اثاث-الخليج-التجاري",
  jvc: "/مناطق-دبي/نقل-اثاث-قرية-جميرا-الدائرية",
  palm: "/مناطق-دبي/نقل-اثاث-نخلة-جميرا",
  barsha: "/مناطق-دبي/نقل-اثاث-البرشاء",
  deira: "/مناطق-دبي/نقل-اثاث-ديرة",
  burDubai: "/مناطق-دبي/نقل-اثاث-بر-دبي",
  jumeirah: "/مناطق-دبي/نقل-اثاث-جميرا",
} as const;
