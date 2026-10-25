import { MapPin } from "lucide-react";

export function AreaChips({
  areas,
  center = true,
}: {
  areas: string[];
  center?: boolean;
}) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      {areas.map((area, i) => (
        <li
          key={i}
          className="flex items-center gap-1.5 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-border"
        >
          <MapPin className="size-4 text-primary" strokeWidth={1.5} />
          {area}
        </li>
      ))}
    </ul>
  );
}
