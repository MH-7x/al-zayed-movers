import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "اتصل بنا | الزايد نقل اثاث دبي",
  description:
    "تواصل مع الزايد نقل اثاث دبي عبر الواتساب أو الهاتف 055 646 1731 واحصل على عرض سعر فوري ومعاينة مجانية. نخدم دبي وكل الإمارات 7 أيام في الأسبوع.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection
        as="h1"
        title="تواصل معنا واحصل على عرض سعر فوري"
        description="أرسل لنا عدد الغرف ومنطقتك على الواتساب، ونرد عليك بعرض سعر فوري. المعاينة مجانية، وبدون دفعة مقدمة، ونخدم دبي وكل الإمارات 7 أيام في الأسبوع."
        rev
      />
    </main>
  );
}
