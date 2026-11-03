import Image from "next/image";

interface IconFeature {
  /** optional bold heading above the sentence */
  title?: string;
  description: string;
  /** public/ path of the 314px square icon */
  image: string;
  alt?: string;
}

/**
 * Icon + sentence cards ("why choose us"). Icons are 314px JPGs shown at 56–64px, so they are
 * requested at exactly 64px (not `100vw`). <1024: icon at the start, text beside it; ≥1024: stacked.
 */
export function IconFeatureGrid({ items }: { items: IconFeature[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <li
          key={i}
          className="grid grid-cols-[56px_1fr] items-start gap-x-4 rounded-md border border-border border-t-[3px] border-t-secondary bg-card p-4 shadow-sm lg:block lg:p-6"
        >
          <Image
            src={f.image}
            alt={f.alt ?? f.title ?? `image icon ${i}`}
            width={64}
            height={64}
            sizes="64px"
            className="row-span-2 size-14 object-contain lg:mb-4 lg:size-16"
          />
          {f.title && (
            <h3 className="text-xl leading-snug lg:mb-2">{f.title}</h3>
          )}
          <p className="text-sm">{f.description}</p>
        </li>
      ))}
    </ul>
  );
}
