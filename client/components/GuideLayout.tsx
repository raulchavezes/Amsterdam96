import { ReactNode, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GradientBackground from "./GradientBackground";
import BottomNav from "./BottomNav";
import ContactModal from "./ContactModal";

interface GuideLayoutProps {
  title: string;
  /** Optional small line under the title (e.g. "Let’s start with the basics"). */
  subtitle?: string;
  children: ReactNode;
  /** Where the back chevron goes. Defaults to /home. */
  backTo?: string;
}

export default function GuideLayout({
  title,
  subtitle,
  children,
  backTo = "/home",
}: GuideLayoutProps) {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <div className="mx-auto w-full max-w-md px-6 md:px-8 pt-6 pb-28">
        {/* Header */}
        <button
          onClick={() => navigate(backTo)}
          aria-label="Back"
          className="-ml-1 mb-2 p-1 text-black hover:opacity-70 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={1.8} />
        </button>

        <h1
          className="text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.01em]"
          style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-2 text-base tracking-[-0.02em]"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
          >
            {subtitle}
          </p>
        )}

        <div className="mt-6">{children}</div>
      </div>

      <BottomNav onContactClick={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
