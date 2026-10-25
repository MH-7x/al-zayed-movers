interface Fact {
  label: string;
  value: string;
}

/** Compact "at a glance" cards shown right under the hero contact bar. */
export function FactsStrip({ facts }: { facts: Fact[] }) {
  return (
    <section className="pt-12 lg:pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {facts.map((fact, i) => (
            <div
              key={i}
              className={`rounded-2xl border-t-4 border-primary bg-card p-5 shadow-sm ring-1 ring-border ${
                i === 0 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <dt className="text-xs font-bold text-primary">{fact.label}</dt>
              <dd className="mt-2 text-sm font-semibold leading-snug text-secondary">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
