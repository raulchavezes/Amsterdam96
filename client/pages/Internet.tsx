import GuideLayout from "@/components/GuideLayout";
import Section from "@/components/guide/Section";
import InfoTable from "@/components/guide/InfoTable";
import { internet } from "@/data/guide";

export default function Internet() {
  return (
    <GuideLayout title="Internet setup">
      <InfoTable rows={internet.networks} />

      <div className="mt-8 space-y-6">
        {internet.sections.map((s) => (
          <div key={s.title} className="border-b border-gray-200 pb-5 last:border-0">
            <Section title={s.title}>
              <p>{s.text}</p>
            </Section>
          </div>
        ))}
      </div>
    </GuideLayout>
  );
}
