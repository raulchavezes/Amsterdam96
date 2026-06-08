interface Step {
  step?: string;
  title?: string;
  caption: string;
  image?: string;
}

interface StepGridProps {
  steps: Step[];
}

/** 2-column grid of step cards: label, image, caption (How to get in). */
export default function StepGrid({ steps }: StepGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
      {steps.map((s, i) => (
        <div key={`${s.step}-${i}`} style={{ color: "#212530" }}>
          <p
            className="text-sm font-bold mb-1.5"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {s.title || s.step}
          </p>
          {s.title && s.step && (
            <p
              className="text-xs font-medium text-gray-500 -mt-1 mb-1.5"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {s.step}
            </p>
          )}
          <div className="aspect-square w-full overflow-hidden rounded-lg mb-1.5">
            {s.image ? (
              <img src={s.image} alt={s.title || s.step} className="h-full w-full object-cover" />
            ) : (
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(156, 57, 255, 0.4) 0%, rgba(34, 34, 108, 0.45) 100%)",
                }}
              />
            )}
          </div>
          <p
            className="text-xs leading-[140%] tracking-[-0.02em]"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            {s.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
