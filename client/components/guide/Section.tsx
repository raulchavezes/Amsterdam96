import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** A titled content block: bold heading + body, used across detail screens. */
export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={className}>
      {title && (
        <h2
          className="text-lg font-bold tracking-[-0.01em] mb-1"
          style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
        >
          {title}
        </h2>
      )}
      <div
        className="text-sm leading-[150%] tracking-[-0.02em] space-y-3"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        {children}
      </div>
    </section>
  );
}
