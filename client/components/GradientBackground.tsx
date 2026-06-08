export default function GradientBackground() {
  return (
    <>
      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -30px);
          }
          50% {
            transform: translate(0, -60px);
          }
          75% {
            transform: translate(-30px, -30px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-40px, 40px);
          }
          50% {
            transform: translate(0, 60px);
          }
          75% {
            transform: translate(40px, 40px);
          }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
        {/* First gradient blob - orange to purple */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            left: '-10%',
            top: '10%',
            background: 'linear-gradient(180deg, #FF9F39 0%, rgba(178, 178, 245, 0.52) 100%)',
            filter: 'blur(110px)',
            opacity: 0.6,
            animation: 'float1 8s ease-in-out infinite'
          }}
        />

        {/* Second gradient blob - purple to dark blue */}
        <div
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            right: '-15%',
            top: '15%',
            background: 'linear-gradient(135deg, rgba(156, 57, 255, 0.6) 0%, rgba(34, 34, 108, 0.52) 100%)',
            filter: 'blur(110px)',
            opacity: 0.55,
            animation: 'float2 10s ease-in-out infinite'
          }}
        />

        {/* Soft white wash to lift contrast for body text */}
        <div className="absolute inset-0 bg-white/30" />
      </div>
    </>
  );
}
