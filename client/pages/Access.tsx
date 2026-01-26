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
        <div className="flex justify-center gap-4 md:gap-8 px-4 md:px-14 py-4 pb-6">
          <button
            onClick={() => setActiveTab("main-gate")}
            className={`text-lg md:text-2xl font-light tracking-[0.06em] transition-all whitespace-nowrap ${
              activeTab === "main-gate"
                ? "underline decoration-from-font"
                : ""
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            edificio
          </button>
          <button
            onClick={() => setActiveTab("apartment")}
            className={`text-lg md:text-2xl font-light tracking-[0.06em] transition-all whitespace-nowrap ${
              activeTab === "apartment"
                ? "underline decoration-from-font"
                : ""
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            departamento
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-4 md:px-8 pb-24 overflow-y-auto w-full flex justify-center">
          {activeTab === "main-gate" ? <MainGateContent /> : <ApartmentContent />}
        </div>

        {/* Home Indicator */}
        <div className="fixed bottom-3 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <div className="w-32 h-1 bg-black rounded-full opacity-30" />
        </div>
      </div>
    </div>
  );
}

function MainGateContent() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-3">
        <h2
          className="text-base font-normal tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          ¿Cómo acceder al edificio?
        </h2>
        <p
          className="text-xl font-light tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Code: 1133
        </p>
      </div>

      <div className="space-y-6">
        {/* Video */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden w-full max-w-xs">
            <video
              src="https://cdn.builder.io/o/assets%2F4e6b85d030c74f6387398b4b4e289006%2Faed09d53dda34ecda8052779d50cb92a?alt=media&token=35b20b38-3108-4dab-bb5c-acb8e83809dc&apiKey=4e6b85d030c74f6387398b4b4e289006"
              loop
              muted
              controls
              className="w-full h-auto max-h-56 object-cover bg-black"
            />
          </div>
        </div>

        {/* Instructions */}
        <p
          className="text-xs font-normal leading-[125.5%] tracking-[-0.02em] text-left"
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
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-3">
        <h2
          className="text-base font-normal tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          How to get into the apartment?
        </h2>
        <p
          className="text-xl font-light tracking-[-0.02em] text-left"
          style={{ fontFamily: 'Open Sans, sans-serif', color: '#212530' }}
        >
          Code: 0117
        </p>
      </div>

      <div className="space-y-6">
        {/* Video */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden w-full max-w-xs">
            <video
              src="https://cdn.builder.io/o/assets%2F4e6b85d030c74f6387398b4b4e289006%2F978fa66f33824aa1af31113989b0e6f8?alt=media&token=a15d6393-0ede-4c9c-8f1c-e1e83451556f&apiKey=4e6b85d030c74f6387398b4b4e289006"
              loop
              muted
              controls
              className="w-full h-auto max-h-56 object-cover bg-black"
            />
          </div>
        </div>

        {/* Instructions */}
        <p
          className="text-xs font-normal leading-[125.5%] tracking-[-0.02em] text-left"
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
