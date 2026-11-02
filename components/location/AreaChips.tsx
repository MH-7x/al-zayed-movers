import { MapPin } from "lucide-react";

export function AreaChips({
  areas,
}: {
  areas: string[];
  /** kept for API compatibility: chips are always start-aligned */
  center?: boolean;
}) {
  return (
    <ul className="flex flex-wrap items-center gap-2.5">
      {areas.map((area, i) => (
        <li
          key={i}
          className="flex min-h-11 items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-bold text-secondary"
        >
          <MapPin className="size-4 text-brand" strokeWidth={1.8} aria-hidden="true" />
          {area}
        </li>
      ))}
    </ul>
  );
}
