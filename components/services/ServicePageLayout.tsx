import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { ServiceHero, type ServiceHeroProps } from "./ServiceHero";
import { ServiceSidebar } from "./ServiceSidebar";
import { CtaBanner, ServiceFigure, ServiceSection } from "./ServiceContent";

interface ServicePageLayoutProps {
  /** Path of the page, used to highlight it in the "other services" navigation. */
  currentHref: string;
  hero: Omit<ServiceHeroProps, "children" | "whatsappText"> & {
    intro: React.ReactNode;
  };
  /** Pre-filled WhatsApp message for the hero, sidebar and CTA buttons. */
  whatsappText: string;
  /** The service content: ServiceSection / ServiceFigure / CtaBanner elements. */
  children: React.ReactNode;
  /** Full-width sections rendered after the content (reviews, FAQs, contact). */
  below?: React.ReactNode;
}

type SectionEl = ReactElement<React.ComponentProps<typeof ServiceSection>>;

/**
 * Direction A service template.
 *   Hero → price table first → services (+figure) → why → steps (+figure) → areas
 *   → closing CTA + "other services" band → (below: reviews, FAQ, contact).
 * Pages keep authoring their content as before; this layout (1) moves the section with
 * id="prices" to the front, (2) attaches each ServiceFigure to the section before it,
 * (3) alternates white / grey bands, ending on grey so the white aside band, then grey reviews, white FAQ
 * and the navy contact band keep alternating.
 */
export function ServicePageLayout({
  currentHref,
  hero,
  whatsappText,
  children,
  below,
}: ServicePageLayoutProps) {
  const { intro, ...heroProps } = hero;

  const sections: SectionEl[] = [];
  const figures = new Map<number, ReactElement>();
  let cta: ReactElement | null = null;

  Children.toArray(children).forEach((child) => {
    if (!isValidElement(child)) return;
    if (child.type === ServiceSection) {
      sections.push(child as SectionEl);
    } else if (child.type === ServiceFigure && sections.length) {
      figures.set(sections.length - 1, child);
    } else if (child.type === CtaBanner) {
      cta = child;
    }
  });

  const ordered = sections
    .map((el, i) => ({ el, figure: figures.get(i) }))
    .sort((a, b) => Number(b.el.props.id === "prices") - Number(a.el.props.id === "prices"));

  const n = ordered.length;

  return (
    <main>
      <ServiceHero {...heroProps} whatsappText={whatsappText}>
        {intro}
      </ServiceHero>

      {ordered.map(({ el, figure }, i) =>
        cloneElement(el, {
          key: el.props.title,
          tone: (n - 1 - i) % 2 === 0 ? "alt" : "default",
          after: figure,
        }),
      )}

      <Section containerClassName="space-y-6">
        {cta as ReactNode}
        <ServiceSidebar currentHref={currentHref} whatsappText={whatsappText} />
      </Section>

      {below}
    </main>
  );
}
