import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/ContactButtons";

/** About block: copy at the start, sticky "+12" stat card at the end (≥1024). The photo moved to the hero. */
export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <SectionHeading
          className="mb-0 md:mb-0"
          eyebrow="من نحن"
          title="نحن افضل شركة نقل اثاث في دبي والإمارات"
          description="كل عملية نقل عندنا تشمل تأمين شامل على المنقولات، شاحنات مغلقة ومكيّفة، وفريق ثابت ومدرب يتعامل مع كل قطعة بعناية من أول صندوق حتى آخر قطعة. أسعارنا واضحة من البداية. ما نتفق عليه هو ما تدفعه. بدون رسوم خفية، وبدون دفعة مقدمة."
        />
        <aside className="rounded-md border border-border border-t-[3px] border-t-primary bg-card p-6 shadow-sm lg:sticky lg:top-28">
          <p className="flex items-baseline gap-3">
            <span className="text-5xl leading-none font-extrabold text-brand">+12</span>
            <span className="font-bold text-secondary">عاماً من الخبرة والتميز</span>
          </p>
          <div className="mt-6">
            <WhatsAppButton className="max-sm:w-full">تواصل معنا لـ نقل اثاث</WhatsAppButton>
          </div>
        </aside>
      </div>
    </Section>
  );
}
