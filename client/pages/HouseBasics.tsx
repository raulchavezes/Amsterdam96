import GuideLayout from "@/components/GuideLayout";
import Section from "@/components/guide/Section";
import { houseBasics } from "@/data/guide";

export default function HouseBasics() {
  return (
    <GuideLayout title="House Basics">
      <div className="space-y-6">
        {houseBasics.sections.map((s) => (
          <div key={s.title} className="border-b border-gray-200 pb-5 last:border-0">
            <Section title={s.title}>
              <p>{s.text}</p>
            </Section>
          </div>
        ))}

        <Section title={houseBasics.questionTitle}>
          <p>{houseBasics.questionText}</p>
        </Section>
      </div>
    </GuideLayout>
  );
}
