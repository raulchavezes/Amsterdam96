import { MapPin, Home, PhoneCall } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavProps {
  onContactClick?: () => void;
}

export default function BottomNav({ onContactClick }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40">
      <div className="mx-3 mb-3 flex items-center justify-around rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg py-3">
        <button
          onClick={() => navigate("/landing")}
          aria-label="Location"
          className={`p-2 transition-colors ${
            isActive("/landing") ? "text-black" : "text-gray-400 hover:text-gray-700"
          }`}
        >
          <MapPin className="w-6 h-6" strokeWidth={1.6} />
        </button>
        <button
          onClick={() => navigate("/home")}
          aria-label="Home"
          className={`p-2 transition-colors ${
            isActive("/home") ? "text-black" : "text-gray-400 hover:text-gray-700"
          }`}
        >
          <Home className="w-6 h-6" strokeWidth={1.6} />
        </button>
        <button
          onClick={onContactClick}
          aria-label="Contact"
          className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <PhoneCall className="w-6 h-6" strokeWidth={1.6} />
        </button>
      </div>
    </nav>
  );
}
