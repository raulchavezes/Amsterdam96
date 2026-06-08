import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LinkRowProps {
  label: string;
  to: string;
  disabled?: boolean;
}

/** A list row with a right chevron; grayed + non-navigating when disabled. */
export default function LinkRow({ label, to, disabled = false }: LinkRowProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => !disabled && navigate(to)}
      disabled={disabled}
      className={`flex w-full items-center justify-between gap-4 border-b border-gray-200 py-2.5 text-left transition-colors ${
        disabled
          ? "text-gray-300 cursor-default"
          : "text-[#212530] hover:text-black"
      }`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <span className="text-sm tracking-[-0.02em]">{label}</span>
      <ChevronRight className="w-5 h-5 shrink-0" strokeWidth={1.6} />
    </button>
  );
}
