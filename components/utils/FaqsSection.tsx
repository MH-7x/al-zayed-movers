import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";

export interface FAQData {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQData[];
  openFirst?: boolean;
}

export const FAQItem: React.FC<{ faq: FAQData; openFirst?: boolean }> = ({
  faq,
  openFirst,
}) => {
  return (
    <details
      open={openFirst}
      className="group [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-start between md:gap-6 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4 rounded-sm">
        <span className="me-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-open:rotate-180 group-open:border-slate-300 group-open:bg-slate-50 group-hover:bg-slate-50">
          <svg
            className="h-4 w-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
        <h3 className="md:text-lg  font-bold">{faq.question}</h3>
      </summary>

      {/* Answer Content */}
      <div className="text-muted-foreground mb-4 space-y-2 leading-relaxed md:text-base text-sm ">
        {faq.answer}
      </div>
    </details>
  );
};

/**
 * Main Reusable FAQ Section Component
 */
export const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "كل ما تحتاج لمعرفته حول خدمات النقل وعملياتنا",
  faqs,
}) => {
  const FaqsSchema = generateFAQSchema(convertFaqsForSchema(faqs));
  return (
    <>
      <script
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <section id="faq" className="md:pt-28 pt-16 px-4 md:max-w-4xl mx-auto">
        <div className="">
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ List */}
          <div className="border-t border-slate-200">
            {faqs.map((faq, index) => (
              <FAQItem key={`faq-${index}`} faq={faq} openFirst={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
