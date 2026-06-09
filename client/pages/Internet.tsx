import GuideLayout from "@/components/GuideLayout";
import Section from "@/components/guide/Section";
import { wifi, internet } from "@/data/guide";

function NetRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-start justify-between gap-4 py-2.5"
      style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
    >
      <span className="text-sm tracking-[-0.02em]">{label}</span>
      <span className="text-sm tracking-[-0.02em] text-right text-gray-500">{value}</span>
    </div>
  );
}

export default function Internet() {
  return (
    <GuideLayout title="Internet setup">
      {/* Networks — grouped like the Wi-Fi modal: one divider on top and
          one between the primary and support groups (none within a group). */}
      <div className="border-t border-gray-200">
        <NetRow label="Wi Fi Network" value={wifi.primary.name} />
        <NetRow label="Password" value={wifi.primary.password} />
        <div className="border-t border-gray-200 my-1" />
        <NetRow label="Support Wi Fi Network" value={wifi.support.name} />
        <NetRow label="Password" value={wifi.support.password} />
      </div>

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
