import { Plus } from "lucide-react";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { Section, SectionHeading } from "@/components/ui/Section";

export interface FAQData {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQData[];
  openFirst?: boolean;
  tone?: "default" | "auto" | "alt";
}

/**
 * Answers come from lib/faqsData.tsx as free-form JSX (links, tables, lists). Rather than editing
 * ~1000 lines of copy, the answer container normalises them with descendant selectors:
 * links → brand-text + underline, tables → scrollable bordered grid with start alignment.
 */
const answerCls =
  "space-y-3 px-4 pb-5 text-foreground md:text-base text-sm " +
  "[&_a]:font-bold [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 " +
  "[&_table]:w-full [&_table]:min-w-140 [&_table]:border-collapse [&_table]:text-start [&_table]:text-sm " +
  "[&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-2.5 [&_th]:text-start [&_th]:font-bold [&_th]:text-secondary " +
  "[&_td]:border [&_td]:border-border [&_td]:p-2.5 [&_td]:text-start " +
  "[&_ul]:list-disc [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5";

export const FAQItem: React.FC<{ faq: FAQData; openFirst?: boolean }> = ({
  faq,
  openFirst,
}) => {
  return (
    <details
      open={openFirst}
      className="group rounded-md border border-border bg-card open:border-secondary"
    >
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3">
        <h3 className="text-base leading-snug font-extrabold md:text-lg">{faq.question}</h3>
        <Plus
          className="size-5 shrink-0 text-secondary transition-transform group-open:rotate-45 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </summary>
      <div className={answerCls}>{faq.answer}</div>
    </details>
  );
};

/** Reusable FAQ section: bordered accordion, 56px summaries, FAQPage JSON-LD preserved. */
export const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "كل ما تحتاج لمعرفته حول خدمات النقل وعملياتنا",
  faqs,
  tone = "default",
}) => {
  const FaqsSchema = generateFAQSchema(convertFaqsForSchema(faqs));
  return (
    <>
      <script
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <Section id="faq" tone={tone} containerClassName="max-w-4xl 2xl:max-w-4xl">
        <SectionHeading title={title} description={subtitle} />
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <FAQItem key={`faq-${index}`} faq={faq} openFirst={index === 0} />
          ))}
        </div>
      </Section>
    </>
  );
};
