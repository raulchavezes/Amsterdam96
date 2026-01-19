export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* First gradient blob - orange to purple */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: '-10%',
          top: '10%',
          background: 'linear-gradient(180deg, #FF9F39 0%, rgba(178, 178, 245, 0.52) 100%)',
          filter: 'blur(100px)',
          opacity: 0.9
        }}
      />

      {/* Second gradient blob - purple to dark blue */}
      <div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          right: '-15%',
          top: '15%',
          background: 'linear-gradient(135deg, rgba(156, 57, 255, 0.6) 0%, rgba(34, 34, 108, 0.52) 100%)',
          filter: 'blur(100px)',
          opacity: 0.9
        }}
      />
    </div>
  );
}
