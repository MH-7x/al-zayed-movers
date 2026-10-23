import { ServiceHero, type ServiceHeroProps } from "./ServiceHero";
import { ServiceSidebar } from "./ServiceSidebar";

interface ServicePageLayoutProps {
  /** Path of the page, used to highlight it in the sidebar. */
  currentHref: string;
  hero: Omit<ServiceHeroProps, "children" | "whatsappText"> & {
    intro: React.ReactNode;
  };
  /** Pre-filled WhatsApp message for the hero, sidebar and CTA buttons. */
  whatsappText: string;
  /** Main (right-hand) column: the service content. */
  children: React.ReactNode;
  /** Full-width sections rendered under the two columns (FAQs, reviews, contact). */
  below?: React.ReactNode;
}

export function ServicePageLayout({
  currentHref,
  hero,
  whatsappText,
  children,
  below,
}: ServicePageLayoutProps) {
  const { intro, ...heroProps } = hero;
  return (
    // `main` is overflow-hidden globally, which would break the sticky sidebar.
    <main className="overflow-x-clip overflow-y-visible">
      <ServiceHero {...heroProps} whatsappText={whatsappText}>
        {intro}
      </ServiceHero>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-12">
        <article className="min-w-0 space-y-14 md:space-y-16">
          {children}
        </article>
        <ServiceSidebar
          currentHref={currentHref}
          whatsappText={whatsappText}
        />
      </div>

      {below}
    </main>
  );
}
