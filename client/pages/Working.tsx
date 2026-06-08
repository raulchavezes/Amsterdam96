import { MapPin } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";
import { working } from "@/data/guide";

export default function Working() {
  return (
    <GuideLayout title="Working from Condesa" subtitle={working.subtitle}>
      <div className="space-y-6">
        {working.places.map((p) => (
          <div
            key={p.name}
            className="border-b border-gray-200 pb-5"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
          >
            <h2
              className="text-lg font-bold tracking-[-0.01em]"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {p.name}
            </h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${p.name} ${p.address}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.6} />
              <span className="text-xs tracking-[-0.02em]">{p.address}</span>
            </a>
            <p className="mt-2 text-sm leading-[150%] tracking-[-0.02em]">{p.text}</p>
          </div>
        ))}

        <p
          className="text-sm italic leading-[150%] tracking-[-0.02em] text-center"
          style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
        >
          {working.outro}
        </p>
      </div>
    </GuideLayout>
  );
}
