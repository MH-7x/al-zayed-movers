import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/ContactButtons";
import { cn } from "@/lib/utils";

type Tone = "default" | "alt";

/**
 * H2 band. `tone` and `after` are injected by ServicePageLayout (alternating white / grey bands;
 * `after` is the figure that belongs to this section).
 */
export function ServiceSection({
  id,
  title,
  children,
  tone = "default",
  after,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  tone?: Tone;
  after?: React.ReactNode;
}) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} />
      <div className="space-y-5 [&>p]:max-w-[68ch] [&_strong]:font-bold [&_strong]:text-secondary">
        {children}
      </div>
      {after}
    </Section>
  );
}

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-bold text-brand underline underline-offset-4 hover:no-underline"
    >
      {children}
    </Link>
  );
}

/** Grid of H3 cards. */
export function SubServices({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>;
}

export function SubService({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-5 shadow-sm md:[&:last-child:nth-child(odd)]:col-span-2">
      <h3 className="text-lg leading-snug md:text-xl">{title}</h3>
      <div className="mt-2.5 text-sm">{children}</div>
    </div>
  );
}

/** "Why choose us" points: bold lead-in + sentence, with a check disc. */
export function FeatureList({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex gap-3 rounded-md border border-border bg-card p-4 shadow-sm sm:[&:last-child:nth-child(odd)]:col-span-2"
        >
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
            <Check className="size-4" strokeWidth={3} aria-hidden />
          </span>
          <div>
            <strong className="block text-secondary">{item.title}</strong>
            <span className="mt-1 block text-sm">{item.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Numbered timeline: 44px navy numerals joined by a rule. */
export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative pb-8 ps-16 last:pb-0 before:absolute before:start-[21px] before:top-11 before:-bottom-0 before:w-0.5 before:bg-border last:before:hidden"
        >
          <span
            aria-hidden
            className="absolute start-0 top-0 grid size-11 place-items-center rounded-full bg-secondary text-base font-extrabold text-white"
          >
            {i + 1}
          </span>
          <strong className="block pt-2 text-base text-secondary md:text-lg">
            {step.title}
          </strong>
          <p className="mt-1">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

/**
 * Semantic table, driven by its OWN width (container query). Wide: a real table with a navy header.
 * Narrow: each row stacks — first cell + highlighted (price) cell on one line, the rest labelled
 * beneath — so no column ever hides behind a horizontal scroll.
 * `highlight` is the column index emphasised in navy (the price column).
 */
export function DataTable({
  caption,
  columns,
  rows,
  highlight = 1,
}: {
  caption: string;
  columns: string[];
  rows: string[][];
  highlight?: number | null;
}) {
  return (
    <div
      role="region"
      tabIndex={0}
      aria-label={caption}
      className="@container overflow-hidden rounded-md border border-border bg-card shadow-sm"
    >
      <table className="w-full border-collapse text-sm @max-lg:block">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-secondary text-secondary-foreground @max-lg:sr-only">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3.5 text-start font-bold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="@max-lg:block">
          {rows.map(([first, ...rest]) => (
            <tr
              key={first}
              className="border-t border-border first:border-t-0 even:bg-surface @max-lg:grid @max-lg:grid-cols-[1fr_auto] @max-lg:items-baseline @max-lg:gap-x-4 @max-lg:gap-y-1 @max-lg:p-4"
            >
              <th
                scope="row"
                className="px-4 py-3.5 text-start font-extrabold text-secondary @max-lg:p-0 @max-lg:text-base"
              >
                {first}
              </th>
              {rest.map((cell, j) => {
                const isHighlight = j + 1 === highlight;
                return (
                  <td
                    key={columns[j + 1]}
                    className={cn(
                      "px-4 py-3.5 text-muted-foreground @max-lg:col-span-full @max-lg:p-0",
                      isHighlight &&
                        "font-extrabold text-secondary @max-lg:col-span-1 @max-lg:col-start-2 @max-lg:row-start-1 @max-lg:whitespace-nowrap",
                    )}
                  >
                    {!isHighlight && (
                      <span className="font-bold text-foreground @lg:hidden">
                        {columns[j + 1]}:{" "}
                      </span>
                    )}
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span aria-hidden className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Area chips (≥44px); an item with `href` becomes a link to its area page. */
export function AreaChips({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const chip =
    "inline-flex min-h-11 items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-bold text-secondary";
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className={cn(chip, "transition-colors hover:border-primary hover:text-brand")}
            >
              <MapPin className="size-4 text-brand" aria-hidden />
              {item.label}
            </Link>
          ) : (
            <span className={chip}>
              <MapPin className="size-4 text-brand" aria-hidden />
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Figure inside a section. Sources are 800px wide, so the slot is capped at 800px
 * (16:10 mobile, 16:7 ≥768) and never stretched.
 */
export function ServiceFigure({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <figure className="relative mt-8 aspect-16/10 max-w-200 overflow-hidden rounded-lg border border-border md:aspect-16/7">
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 800px, 100vw"
        className="object-cover"
      />
    </figure>
  );
}

/** Closing call to action of the content: a quiet callout card with one WhatsApp button. */
export function CtaBanner({
  children,
  whatsappText,
}: {
  children: React.ReactNode;
  whatsappText: string;
}) {
  return (
    <div className="rounded-md border border-border border-s-4 border-s-primary bg-card p-6 shadow-sm md:p-8">
      <p className="max-w-xl text-base font-bold text-secondary md:text-lg">{children}</p>
      <div className="mt-5">
        <WhatsAppButton message={whatsappText} className="max-sm:w-full">
          تواصل عبر واتساب
        </WhatsAppButton>
      </div>
    </div>
  );
}
