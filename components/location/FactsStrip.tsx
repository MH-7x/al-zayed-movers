import { Section } from "@/components/ui/Section";

interface Fact {
  label: string;
  value: string;
}

/** Compact "at a glance" cells right under the hero. */
export function FactsStrip({ facts }: { facts: Fact[] }) {
  return (
    <Section tone="auto" className="py-8 md:py-10 lg:py-12">
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {facts.map((fact, i) => (
          <div
            key={i}
            className={`rounded-md border border-border border-t-[3px] border-t-primary bg-card p-5 shadow-sm ${
              i === 0 ? "col-span-2 lg:col-span-1" : ""
            }`}
          >
            <dt className="text-xs font-bold text-brand">{fact.label}</dt>
            <dd className="mt-2 text-sm leading-snug font-bold text-secondary">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
