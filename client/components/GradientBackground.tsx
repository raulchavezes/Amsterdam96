export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="100" />
          </filter>
          <linearGradient id="gradient1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF9F39" />
            <stop offset="100%" stopColor="#B2B2F5" stopOpacity="0.52" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C39FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22226C" stopOpacity="0.52" />
          </linearGradient>
        </defs>
        
        {/* First gradient blob */}
        <ellipse
          cx="20%"
          cy="25%"
          rx="200"
          ry="200"
          fill="url(#gradient1)"
          filter="url(#blur1)"
          opacity="0.8"
        />
        
        {/* Second gradient blob */}
        <ellipse
          cx="70%"
          cy="40%"
          rx="220"
          ry="220"
          fill="url(#gradient2)"
          filter="url(#blur1)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
