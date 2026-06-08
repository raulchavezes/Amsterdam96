import GuideLayout from "@/components/GuideLayout";
import Section from "@/components/guide/Section";
import { food } from "@/data/guide";

export default function Food() {
  return (
    <GuideLayout title="Food, Drinks & Groceries">
      <div className="space-y-6">
        {food.sections.map((s) => (
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
