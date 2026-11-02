import type { ReactNode } from "react";

interface DataTableProps {
  columns: string[];
  rows: ReactNode[][];
}

/**
 * One <table> for all sizes. ≥768: navy header, first column emphasised.
 * <768: each row stacks — the first cell is the row title and every other cell is labelled with its
 * column name — so nothing is ever hidden behind a horizontal scroll (and the DOM is not duplicated).
 */
export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
      <table className="w-full border-collapse text-start text-sm max-md:block">
        <thead className="bg-secondary text-secondary-foreground max-md:sr-only">
          <tr>
            {columns.map((col, i) => (
              <th key={i} scope="col" className="px-5 py-4 text-start font-bold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-md:block">
          {rows.map((row, r) => (
            <tr
              key={r}
              className="border-t border-border first:border-t-0 even:bg-surface max-md:grid max-md:gap-2 max-md:p-4"
            >
              {row.map((cell, c) =>
                c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className="px-5 py-4 text-start align-top font-extrabold text-secondary max-md:p-0 max-md:pb-1 max-md:text-base"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={c}
                    className="px-5 py-4 align-top text-muted-foreground max-md:p-0"
                  >
                    <span className="block text-xs font-bold text-brand md:hidden">
                      {columns[c]}
                    </span>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
