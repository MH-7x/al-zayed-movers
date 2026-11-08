import type { Metadata } from "next";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { ContactSection } from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

export const metadata: Metadata = MetadataTemplate({
  title: "اتصل بنا | الأمين نقل اثاث دبي",
  desc:
    "تواصل مع الأمين نقل اثاث دبي عبر الواتساب أو الهاتف 055 646 1731 واحصل على عرض سعر فوري ومعاينة مجانية. نخدم دبي وكل الإمارات 7 أيام في الأسبوع.",
  path: "/%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7",
});

export default function ContactPage() {
  const schema = buildPageSchema({
    page: "contact",
    name: "اتصل بنا | الأمين نقل اثاث دبي",
    description: "تواصل مع الأمين نقل اثاث دبي عبر الواتساب أو الهاتف 055 646 1731 واحصل على عرض سعر فوري ومعاينة مجانية. نخدم دبي وكل الإمارات 7 أيام في الأسبوع.",
  });
  return (
    <main>
      <JsonLd data={schema} />
      <ContactSection
        as="h1"
        title="تواصل معنا واحصل على عرض سعر فوري"
        description="أرسل لنا عدد الغرف ومنطقتك على الواتساب، ونرد عليك بعرض سعر فوري. المعاينة مجانية، وبدون دفعة مقدمة، ونخدم دبي وكل الإمارات 7 أيام في الأسبوع."
        rev
      />
    </main>
  );
}
