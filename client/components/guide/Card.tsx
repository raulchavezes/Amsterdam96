import { useNavigate } from "react-router-dom";

interface CardProps {
  label: string;
  to?: string;
  image?: string;
  className?: string;
  /** When the supplied image already has its label + overlay baked in. */
  labelBaked?: boolean;
}

/**
 * Image card with a label overlaid bottom-left (The basics, Your apartment).
 * Falls back to a soft gradient block when no image is supplied yet.
 */
export default function Card({
  label,
  to,
  image,
  className = "",
  labelBaked = false,
}: CardProps) {
  const navigate = useNavigate();
  const showOverlay = !(image && labelBaked);

  return (
    <button
      onClick={() => to && navigate(to)}
      className={`relative overflow-hidden rounded-xl shadow-sm group ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(156, 57, 255, 0.55) 0%, rgba(34, 34, 108, 0.55) 100%)",
          }}
        />
      )}
      {showOverlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span
            className="absolute bottom-2 left-3 right-3 text-left text-sm font-medium text-white"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            {label}
          </span>
        </>
      )}
    </button>
  );
}
