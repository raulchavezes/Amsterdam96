import GuideLayout from "@/components/GuideLayout";

export default function ComingSoon() {
  return (
    <GuideLayout title="Coming soon">
      <div
        className="flex flex-col items-center justify-center text-center py-16"
        style={{ fontFamily: "Open Sans, sans-serif", color: "#212530" }}
      >
        <p className="text-base font-medium">We’re still putting this one together.</p>
        <p className="mt-2 text-sm text-gray-500 max-w-xs">
          Check back soon — more recommendations for your stay are on the way.
        </p>
      </div>
    </GuideLayout>
  );
}
