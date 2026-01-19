import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Wifi } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import WiFiModal from "@/components/WiFiModal";

export default function Index() {
  const [isWiFiModalOpen, setIsWiFiModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-7 py-12">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-start w-full max-w-md">
          <div className="space-y-2 mb-auto pt-32">
            <h1 
              className="text-[32px] font-normal leading-normal"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Hello Kari
            </h1>
            <p 
              className="text-2xl font-light tracking-[0.06em] leading-normal"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              welcome home
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-md space-y-8 mb-8">
          {/* WiFi Icon */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsWiFiModalOpen(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="View WiFi details"
            >
              <Wifi className="w-8 h-8 text-black" />
            </button>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 px-16">
            <MapPin className="w-6 h-6 text-black flex-shrink-0" />
            <a
              href="https://maps.google.com/?q=Carmina+Selva+Viva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-normal text-center tracking-[0.06em] underline decoration-from-font"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Carmina Selva Viva
            </a>
          </div>

          {/* Apartment Info */}
          <div className="text-center space-y-1">
            <p 
              className="text-xl font-light tracking-[0.06em]"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Apartment 9A
            </p>
            <Link
              to="/access"
              className="block text-base font-normal italic tracking-[0.06em] underline decoration-from-font"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              how to get in?
            </Link>
          </div>
        </div>

        {/* Home Indicator (iOS style) */}
        <div className="w-full flex justify-center pb-2">
          <div className="w-32 h-1 bg-black/80 rounded-full" />
        </div>
      </div>

      {/* WiFi Modal */}
      <WiFiModal 
        isOpen={isWiFiModalOpen} 
        onClose={() => setIsWiFiModalOpen(false)} 
      />
    </div>
  );
}
