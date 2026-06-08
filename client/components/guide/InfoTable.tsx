interface InfoRow {
  label: string;
  value: string;
}

interface InfoTableProps {
  rows: InfoRow[];
}

/** label-left / value-right rows separated by thin dividers (Mexico Basics, Internet). */
export default function InfoTable({ rows }: InfoTableProps) {
  return (
    <div
      className="border-t border-gray-200"
      style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
    >
      {rows.map((row, i) => (
        <div
          key={`${row.label}-${i}`}
          className="flex items-start justify-between gap-4 border-b border-gray-200 py-2.5"
        >
          <span className="text-sm tracking-[-0.02em]">{row.label}</span>
          <span className="text-sm tracking-[-0.02em] text-right text-gray-500">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
