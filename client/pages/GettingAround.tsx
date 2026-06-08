import GuideLayout from "@/components/GuideLayout";
import Section from "@/components/guide/Section";
import { gettingAround } from "@/data/guide";

export default function GettingAround() {
  return (
    <GuideLayout title="Getting around" subtitle="Transportation & getting around">
      <p
        className="text-sm leading-[150%] tracking-[-0.02em] mb-6"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        {gettingAround.intro}
      </p>

      <div className="space-y-6">
        {gettingAround.sections.map((s) => (
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
