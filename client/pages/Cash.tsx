import GuideLayout from "@/components/GuideLayout";
import { cash } from "@/data/guide";

export default function Cash() {
  return (
    <GuideLayout title="Cash, ATMs & XE">
      <p
        className="text-sm leading-[150%] tracking-[-0.02em]"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        {cash.text}
      </p>
    </GuideLayout>
  );
}
