import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { Section } from "@/components/ui/Section";
import { ServiceHero, type ServiceHeroProps } from "./ServiceHero";
import { ServiceSidebar } from "./ServiceSidebar";
import { CtaBanner, ServiceFigure, ServiceSection } from "./ServiceContent";

interface ServicePageLayoutProps {
  /** Path of the page, used to highlight it in the "other services" navigation. */
  currentHref: string;
  hero: Omit<ServiceHeroProps, "children"> & {
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
 *   Hero → [content column | sidebar] → (below: reviews, FAQ, contact).
 * The content column holds the price table first → services (+figure) → why → steps (+figure)
 * → areas → closing CTA. The sidebar (quote card + other services) is the second grid column, which
 * in RTL is the physical left, sticky from lg up and stacked under the content below that.
 * Pages keep authoring their content as before; this layout (1) moves the section with
 * id="prices" to the front and (2) attaches each ServiceFigure to the section before it.
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
    .sort(
      (a, b) =>
        Number(b.el.props.id === "prices") - Number(a.el.props.id === "prices"),
    );

  return (
    <main>
      <ServiceHero {...heroProps}>{intro}</ServiceHero>

      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="min-w-0">
          {ordered.map(({ el, figure }) =>
            cloneElement(el, {
              key: el.props.title,
              embedded: true,
              after: figure,
            }),
          )}
          {cta && (
            <div className="border-t border-border pt-10 md:pt-12">
              {cta as ReactNode}
            </div>
          )}
        </div>
        <ServiceSidebar currentHref={currentHref} whatsappText={whatsappText} />
      </Section>

      {below}
    </main>
  );
}
