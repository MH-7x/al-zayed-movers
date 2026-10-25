import type { ReactNode } from "react";

interface DataTableProps {
  columns: string[];
  rows: ReactNode[][];
}

/** Table on md+, stacked labelled cards on mobile. First column is emphasised. */
export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border md:block">
        <table className="w-full border-collapse text-right text-sm">
          <thead>
            <tr className="bg-secondary text-secondary-foreground">
              {columns.map((col, i) => (
                <th key={i} className="px-5 py-4 font-bold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, r) => (
              <tr key={r} className="transition-colors hover:bg-muted/60">
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={
                      c === 0
                        ? "px-5 py-4 align-top font-bold text-secondary"
                        : "px-5 py-4 align-top leading-relaxed text-muted-foreground"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {rows.map((row, r) => (
          <div
            key={r}
            className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border"
          >
            <p className="mb-3 border-b border-border pb-3 font-bold text-secondary">
              {row[0]}
            </p>
            <dl className="space-y-3">
              {row.slice(1).map((cell, c) => (
                <div key={c}>
                  <dt className="text-xs font-bold text-primary">
                    {columns[c + 1]}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {cell}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}
