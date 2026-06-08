import GuideLayout from "@/components/GuideLayout";
import InfoTable from "@/components/guide/InfoTable";
import { mexicoBasics } from "@/data/guide";

export default function MexicoBasics() {
  return (
    <GuideLayout title="Mexico Basics" subtitle={mexicoBasics.subtitle}>
      <InfoTable rows={mexicoBasics.facts} />

      <h2
        className="mt-8 mb-3 text-lg font-bold tracking-[-0.01em]"
        style={{ fontFamily: "Merriweather, serif", color: "#212530" }}
      >
        {mexicoBasics.cityFactsTitle}
      </h2>
      <div className="space-y-3 border-t border-gray-200 pt-3">
        {mexicoBasics.cityFacts.map((fact, i) => (
          <p
            key={i}
            className="border-b border-gray-200 pb-3 text-sm leading-[150%] tracking-[-0.02em]"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
          >
            {fact}
          </p>
        ))}
      </div>
    </GuideLayout>
  );
}
