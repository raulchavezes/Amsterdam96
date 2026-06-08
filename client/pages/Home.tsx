import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Wifi, Info, KeyRound, ChevronRight } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import BottomNav from "@/components/BottomNav";
import WiFiModal from "@/components/WiFiModal";
import ContactModal from "@/components/ContactModal";
import Card from "@/components/guide/Card";
import PhotoCarousel from "@/components/guide/PhotoCarousel";
import LinkRow from "@/components/guide/LinkRow";
import {
  property,
  basicsCards,
  apartmentCards,
  apartmentPhotos,
  neighborhoodLinks,
} from "@/data/guide";

const sectionHeading =
  "text-xl font-bold tracking-[-0.01em] mb-3";

export default function Home() {
  const navigate = useNavigate();
  const [wifiOpen, setWifiOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <div className="mx-auto w-full max-w-md px-6 md:px-8 pt-8 pb-28">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p
              className="text-base tracking-[-0.02em]"
              style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
            >
              Welcome home,
            </p>
            <h1
              className="text-[28px] font-bold leading-tight"
              style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
            >
              {property.guests}
            </h1>
          </div>
          <Info className="w-6 h-6 mt-1 text-[#212530]" strokeWidth={1.6} />
        </div>

        {/* Address + wifi */}
        <div className="mt-4 flex items-center justify-between">
          <a
            href={property.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
          >
            <MapPin className="w-5 h-5 shrink-0" strokeWidth={1.6} />
            <span className="text-sm tracking-[-0.02em]">{property.address}</span>
          </a>
          <button
            onClick={() => setWifiOpen(true)}
            aria-label="Wi-Fi"
            className="p-1 text-[#212530] hover:opacity-70 transition-opacity"
          >
            <Wifi className="w-6 h-6" strokeWidth={1.6} />
          </button>
        </div>

        {/* The basics */}
        <section className="mt-8">
          <h2 className={sectionHeading} style={{ fontFamily: "Merriweather, serif", color: "#212530" }}>
            The basics
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {basicsCards.map((c) => (
              <Card key={c.to} label={c.label} to={c.to} image={c.image} labelBaked={c.labelBaked} className="h-24" />
            ))}
          </div>
          <button
            onClick={() => navigate("/access")}
            className="mt-3 flex w-full items-center justify-between gap-3 text-left hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
          >
            <span className="text-sm font-medium tracking-[-0.02em]">
              How to get into the apartment?
            </span>
            <span className="flex items-center gap-1 shrink-0">
              <KeyRound className="w-5 h-5" strokeWidth={1.6} />
              <ChevronRight className="w-5 h-5" strokeWidth={1.6} />
            </span>
          </button>
        </section>

        {/* Your apartment */}
        <section className="mt-8">
          <h2 className={sectionHeading} style={{ fontFamily: "Merriweather, serif", color: "#212530" }}>
            Your apartment
          </h2>
          <PhotoCarousel photos={apartmentPhotos} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            {apartmentCards.map((c) => (
              <Card key={c.to} label={c.label} to={c.to} image={c.image} labelBaked={c.labelBaked} className="h-24" />
            ))}
          </div>
        </section>

        {/* Your neighborhood & city */}
        <section className="mt-8">
          <h2 className={sectionHeading} style={{ fontFamily: "Merriweather, serif", color: "#212530" }}>
            Your neighborhood &amp; city
          </h2>
          <div className="border-t border-gray-200">
            {neighborhoodLinks.map((l) => (
              <LinkRow key={l.label} label={l.label} to={l.to} />
            ))}
          </div>
        </section>
      </div>

      <BottomNav onContactClick={() => setContactOpen(true)} />
      <WiFiModal isOpen={wifiOpen} onClose={() => setWifiOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
