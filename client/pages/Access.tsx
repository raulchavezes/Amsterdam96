import { useState } from "react";
import { Link } from "react-router-dom";
import GradientBackground from "@/components/GradientBackground";

type TabType = "main-gate" | "apartment";

export default function Access() {
  const [activeTab, setActiveTab] = useState<TabType>("main-gate");

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Gradient Background with reduced opacity */}
      <div className="opacity-30">
        <GradientBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-7 pt-6 pb-4">
          <Link
            to="/"
            className="inline-block text-base font-normal italic tracking-[0.06em] underline decoration-from-font"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            back
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 px-14 py-4">
          <button
            onClick={() => setActiveTab("main-gate")}
            className={`text-2xl font-light tracking-[0.06em] transition-all ${
              activeTab === "main-gate" 
                ? "underline decoration-from-font" 
                : ""
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            main gate
          </button>
          <button
            onClick={() => setActiveTab("apartment")}
            className={`text-2xl font-light tracking-[0.06em] transition-all ${
              activeTab === "apartment" 
                ? "underline decoration-from-font" 
                : ""
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            apartment
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-8 pb-24 overflow-y-auto">
          {activeTab === "main-gate" ? <MainGateContent /> : <ApartmentContent />}
        </div>

        {/* Home Indicator */}
        <div className="w-full flex justify-center pb-5 pt-4">
          <div className="w-32 h-1 bg-black/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function MainGateContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2
          className="text-base font-normal tracking-[-0.02em]"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          How to get into the building?
        </h2>
        <p
          className="text-xl font-light tracking-[-0.02em]"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Code: 1133
        </p>
      </div>

      <div className="space-y-6">
        {/* Video */}
        <div className="rounded-lg overflow-hidden">
          <video
            src="https://cdn.builder.io/o/assets%2F4e6b85d030c74f6387398b4b4e289006%2Faed09d53dda34ecda8052779d50cb92a?alt=media&token=35b20b38-3108-4dab-bb5c-acb8e83809dc&apiKey=4e6b85d030c74f6387398b4b4e289006"
            autoPlay
            loop
            muted
            controls
            className="w-full h-auto object-cover bg-black"
          />
        </div>

        {/* Instructions */}
        <p
          className="text-xs font-normal leading-[125.5%] tracking-[-0.02em]"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Find the access control and enter the code. The gate should open automatically.
        </p>
      </div>
    </div>
  );
}

function ApartmentContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 
          className="text-base font-normal tracking-[-0.02em]"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          How to get into the apartment?
        </h2>
        <p 
          className="text-xl font-light tracking-[-0.02em]"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Code: 0117
        </p>
      </div>

      <div className="space-y-6">
        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cb2d92a5f8e0176063f1ba16e52aeb651efd1631"
            alt="Apartment Yale access control"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Instructions */}
        <p 
          className="text-xs font-normal leading-[125.5%] tracking-[-0.02em]"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Locate apartment 9A, on the third floor on the apartments that are "closer" to the street. The other row of apartments are part of "building B".
          {"\n\n"}
          Find the Yale & Nest Access Control. Tap on the Yale logo to activate the keyboard, enter your code and tap on the lower right corner on the checkmark ✔️
        </p>
      </div>
    </div>
  );
}
