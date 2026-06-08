import { Plus, LockKeyholeOpen } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";
import StepGrid from "@/components/guide/StepGrid";
import { apartmentAccess } from "@/data/guide";

export default function Access() {
  return (
    <GuideLayout title="How to get in?">
      {/* Apartment */}
      <h2
        className="text-lg font-bold tracking-[-0.01em]"
        style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
      >
        How to get into the apartment?
      </h2>

      {/* Code */}
      <div
        className="mt-3 flex items-center gap-2"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        <span className="text-sm">Code:</span>
        <span className="text-lg font-bold tracking-wide">{apartmentAccess.code}</span>
        <Plus className="w-5 h-5" strokeWidth={1.8} />
        <LockKeyholeOpen className="w-5 h-5" strokeWidth={1.8} />
      </div>

      <div className="mt-5">
        <StepGrid steps={apartmentAccess.steps} />
      </div>

      {/* Building */}
      <h2
        className="mt-10 text-lg font-bold tracking-[-0.01em]"
        style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
      >
        How to get into the building?
      </h2>
      <div className="mt-4">
        <StepGrid steps={apartmentAccess.building.intro} />
      </div>

      <p
        className="mt-6 text-sm leading-[150%] tracking-[-0.02em]"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        {apartmentAccess.building.note}
      </p>

      <h3
        className="mt-8 mb-3 text-base font-bold tracking-[-0.01em]"
        style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
      >
        Keybox
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square overflow-hidden rounded-lg">
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(156,57,255,0.4) 0%, rgba(34,34,108,0.45) 100%)",
            }}
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,159,57,0.5) 0%, rgba(178,178,245,0.5) 100%)",
            }}
          />
        </div>
      </div>
      <p
        className="mt-4 text-sm leading-[150%] tracking-[-0.02em]"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        {apartmentAccess.building.keyboxNote}
      </p>
    </GuideLayout>
  );
}
