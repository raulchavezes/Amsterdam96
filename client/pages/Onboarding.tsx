import { useNavigate } from "react-router-dom";
import { property } from "@/data/guide";

// Real splash photo can be dropped in here later: place it at
// client/assets/guide/splash.jpg and `import splashImage from "@/assets/guide/splash.jpg"`.
// Until then we fall back to a deep-red neon-evoking gradient.
const splashImage: string | undefined = undefined;

export default function Onboarding() {
  const navigate = useNavigate();
  const enter = () => navigate("/home");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 35%, #7a0f12 0%, #4a0a0c 60%, #2a0506 100%)",
        }}
      />
      {splashImage && (
        <img
          src={splashImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-8 pt-20 pb-10">
        <h1
          className="text-center text-[34px] font-bold leading-tight text-white"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          {property.name}
        </h1>
        <p
          className="mt-3 max-w-[16rem] text-center text-base font-medium text-white/90"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {property.tagline}
        </p>

        <div className="flex-1" />

        <button
          onClick={enter}
          className="w-full rounded-xl bg-white py-3.5 text-center text-base font-medium text-[#212530] shadow-lg transition-transform hover:scale-[1.02]"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Get started
        </button>
        <button
          onClick={enter}
          className="mt-4 text-sm text-white/90 underline underline-offset-4 hover:text-white"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          skip
        </button>
      </div>
    </div>
  );
}
