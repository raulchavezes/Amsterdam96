import { MapPin } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";
import Section from "@/components/guide/Section";
import { property, contact, landing } from "@/data/guide";

export default function Landing() {
  return (
    <GuideLayout title="Landing in CDMX">
      {/* Address */}
      <h2
        className="text-lg font-bold tracking-[-0.01em] mb-2"
        style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
      >
        Your address
      </h2>
      <a
        href={property.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border-b border-gray-200 pb-4 hover:opacity-70 transition-opacity"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        <MapPin className="w-5 h-5 shrink-0" strokeWidth={1.6} />
        <span className="text-sm tracking-[-0.02em]">{property.fullAddress}</span>
      </a>

      <div className="mt-6 space-y-6">
        <Section title={landing.covidTitle}>
          <p>{landing.covidText}</p>
        </Section>
        <Section title={landing.gettingInTitle}>
          <p>{landing.gettingInText}</p>
        </Section>
        <Section title={landing.shareTitle}>
          <p>{landing.shareText}</p>
        </Section>

        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
        >
          <span className="text-sm font-medium tracking-[-0.02em]">
            {contact.name} · WhatsApp
          </span>
        </a>
      </div>
    </GuideLayout>
  );
}
