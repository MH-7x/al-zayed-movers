import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "./constants";

/** H2 block: accent-bordered heading followed by prose. */
export function ServiceSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="border-s-4 border-primary ps-4 text-2xl font-extrabold leading-snug md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[15px] leading-8 text-foreground/80 md:text-base md:leading-8 [&_strong]:font-bold [&_strong]:text-secondary">
        {children}
      </div>
    </section>
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
      className="font-bold text-primary underline-offset-4 hover:underline"
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
    <div className="rounded-2xl border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md md:[&:last-child:nth-child(odd)]:col-span-2">
      <h3 className="flex items-center gap-2.5 text-base font-bold md:text-lg">
        <span aria-hidden className="size-2 shrink-0 rounded-full bg-primary" />
        {title}
      </h3>
      <div className="mt-2.5 text-sm leading-7 text-foreground/75">
        {children}
      </div>
    </div>
  );
}

/** "Why choose us" points: bold lead-in + sentence. */
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
          className="flex gap-3 rounded-2xl bg-primary/5 p-4 ring-1 ring-primary/10 sm:[&:last-child:nth-child(odd)]:col-span-2"
        >
          <CheckCircle2
            className="mt-0.5 size-6 shrink-0 text-primary"
            strokeWidth={1.8}
            aria-hidden
          />
          <div>
            <strong className="block text-secondary">{item.title}</strong>
            <span className="mt-1 block text-sm leading-7 text-foreground/75">
              {item.text}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Numbered timeline. */
export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative pb-8 ps-16 last:pb-0 before:absolute before:bottom-0 before:start-5 before:top-10 before:w-px before:bg-border last:before:hidden"
        >
          <span
            aria-hidden
            className="absolute start-0 top-0 flex size-10 items-center justify-center rounded-full bg-secondary text-base font-extrabold text-white ring-4 ring-background"
          >
            {i + 1}
          </span>
          <strong className="block pt-1.5 text-base text-secondary md:text-lg">
            {step.title}
          </strong>
          <p className="mt-1.5 text-sm leading-7 md:text-base md:leading-8">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

/**
 * Semantic table that turns into stacked cards when its own container is narrow.
 * `highlight` is the column index shown in the brand colour (the price column).
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
      className="@container overflow-x-auto rounded-2xl border bg-card shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <table className="w-full border-collapse text-sm @max-lg:block">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-secondary text-white @max-lg:hidden">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="px-4 py-3.5 text-start font-bold"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="@max-lg:block">
          {rows.map(([first, ...rest]) => (
            <tr
              key={first}
              className="border-t first:border-t-0 even:bg-muted/50 @max-lg:block @max-lg:p-4"
            >
              <th
                scope="row"
                className="px-4 py-3.5 text-start font-bold text-secondary @max-lg:block @max-lg:p-0 @max-lg:pb-2 @max-lg:text-base"
              >
                {first}
              </th>
              {rest.map((cell, j) => (
                <td
                  key={columns[j + 1]}
                  data-label={columns[j + 1]}
                  className={cn(
                    "px-4 py-3.5 before:hidden before:text-muted-foreground before:content-[attr(data-label)] @max-lg:flex @max-lg:justify-between @max-lg:gap-4 @max-lg:px-0 @max-lg:py-1.5 @max-lg:before:block",
                    j + 1 === highlight && "font-extrabold text-primary",
                  )}
                >
                  {cell}
                </td>
              ))}
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
          <span
            aria-hidden
            className="mt-3 size-2 shrink-0 rounded-full bg-primary"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Area pills; an item with `href` becomes a link to its area page. */
export function AreaChips({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const chip =
    "inline-flex items-center gap-1.5 rounded-full border bg-card px-3.5 py-2 text-sm font-medium text-secondary";
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                chip,
                "transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary",
              )}
            >
              <MapPin className="size-4 text-primary" aria-hidden />
              {item.label}
            </Link>
          ) : (
            <span className={chip}>
              <MapPin className="size-4 text-primary" aria-hidden />
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ServiceFigure({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <figure className="relative isolate">
      <span
        aria-hidden
        className="absolute -bottom-3 -start-3 -z-10 size-2/3 rounded-3xl bg-primary/15"
      />
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        sizes="(min-width: 1024px) 700px, 100vw"
        className="aspect-16/10 w-full rounded-3xl object-cover shadow-lg ring-1 ring-black/5"
      />
    </figure>
  );
}

/** Closing call to action of the content column. */
export function CtaBanner({
  children,
  whatsappText,
}: {
  children: React.ReactNode;
  whatsappText: string;
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-secondary p-6 text-white md:p-8">
      <span
        aria-hidden
        className="absolute -top-16 -end-16 -z-10 size-48 rounded-full bg-primary/30 blur-3xl"
      />
      <p className="max-w-xl text-base font-bold leading-8 md:text-lg">
        {children}
      </p>
      <a
        href={whatsappLink(whatsappText)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-5 h-11 gap-2 px-5 text-base font-bold",
        )}
      >
        <MessageCircle className="size-5" aria-hidden />
        تواصل عبر واتساب
      </a>
    </div>
  );
}
