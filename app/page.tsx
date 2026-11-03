import { Services } from "@/components/Services";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AreasSection } from "@/components/AreasSection";
import { HomeHero } from "@/components/home/HomeHero";
import { AboutSection } from "@/components/home/AboutSection";
import { WhySection } from "@/components/home/WhySection";
import { RequirementsSection } from "@/components/home/RequirementsSection";
import { FAQSection } from "@/components/utils/FaqsSection";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { dubaiFaqs } from "@/lib/faqsData";

/** Direction A order: proof first, price before detail, one decision band per section. */

export const metadata = {
  title: "الزايد نقل اثاث دبي | افضل شركة نقل اثاث في دبي",
  description:
    "الزايد نقل اثاث دبي، شركة نقل اثاث في دبي بخبرة 12 سنة. تغليف وفك وتركيب، سعر ثابت، تأمين شامل، وبدون دفعة مقدمة. واتساب 055 6461731 لعرض سعر فوري.",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <AboutSection />
      <WhySection />
      <Services />
      <PricingSection />

      <ProcessSection />
      <AreasSection />
      <RequirementsSection />
      <ReviewsSection />
      <FAQSection
        title="الأسئلة الشائعة حول نقل الاثاث في دبي"
        faqs={dubaiFaqs}
      />
      <ContactSection
        title="تواصل معنا الآن — الزايد نقل اثاث دبي"
        description="جاهز للانتقال؟ تواصل مع الزايد نقل اثاث دبي واحصل على عرض سعر مجاني خلال دقائق."
      />
    </main>
  );
}
