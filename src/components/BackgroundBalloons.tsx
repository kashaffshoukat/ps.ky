import React, { useMemo } from 'react';

interface SlopedBalloon {
  id: number;
  left: number; // percentage from left
  size: number;
  duration: number;
  delay: number;
  driftAngle: number;
  color: string;
  stringColor: string;
  opacity: number;
  wobbleDuration: number;
  highlightColor: string;
}

export const BackgroundBalloons: React.FC = () => {
  // Theme-matching animated balloons in bulk across the entire website in smooth, relaxing speed
  // Colors: Dusty Rose (#C78D95), Blush Pink (#E8C5C8), Sage Green (#5A7755), Champagne Gold (#C5A059), Soft Cream (#FFF9F5)
  const balloons: SlopedBalloon[] = useMemo(() => [
    { id: 1, left: 3, size: 52, duration: 28, delay: -2, driftAngle: 5, color: '#F7C5CC', stringColor: '#C78D95', opacity: 0.32, wobbleDuration: 4.8, highlightColor: '#FFFFFF' },
    { id: 2, left: 9, size: 62, duration: 34, delay: -14, driftAngle: -4, color: '#C78D95', stringColor: '#B06F78', opacity: 0.28, wobbleDuration: 5.5, highlightColor: '#FFE7EA' },
    { id: 3, left: 15, size: 48, duration: 26, delay: -7, driftAngle: 6, color: '#5A7755', stringColor: '#384C37', opacity: 0.25, wobbleDuration: 4.2, highlightColor: '#E6EFE5' },
    { id: 4, left: 21, size: 58, duration: 31, delay: -21, driftAngle: -5, color: '#C5A059', stringColor: '#A88439', opacity: 0.28, wobbleDuration: 5.2, highlightColor: '#FFF3DA' },
    { id: 5, left: 27, size: 44, duration: 24, delay: -4, driftAngle: 4, color: '#F7C5CC', stringColor: '#C78D95', opacity: 0.34, wobbleDuration: 3.9, highlightColor: '#FFFFFF' },
    { id: 6, left: 33, size: 66, duration: 36, delay: -18, driftAngle: -6, color: '#C78D95', stringColor: '#B06F78', opacity: 0.30, wobbleDuration: 5.8, highlightColor: '#FFE7EA' },
    { id: 7, left: 39, size: 50, duration: 27, delay: -11, driftAngle: 5, color: '#5A7755', stringColor: '#384C37', opacity: 0.24, wobbleDuration: 4.5, highlightColor: '#E6EFE5' },
    { id: 8, left: 45, size: 60, duration: 32, delay: -25, driftAngle: -4, color: '#C5A059', stringColor: '#A88439', opacity: 0.28, wobbleDuration: 5.4, highlightColor: '#FFF3DA' },
    { id: 9, left: 51, size: 46, duration: 25, delay: -8, driftAngle: 6, color: '#F7C5CC', stringColor: '#C78D95', opacity: 0.32, wobbleDuration: 4.1, highlightColor: '#FFFFFF' },
    { id: 10, left: 57, size: 64, duration: 33, delay: -16, driftAngle: -5, color: '#5A7755', stringColor: '#384C37', opacity: 0.26, wobbleDuration: 5.6, highlightColor: '#E6EFE5' },
    { id: 11, left: 63, size: 54, duration: 29, delay: -3, driftAngle: 6, color: '#C78D95', stringColor: '#B06F78', opacity: 0.30, wobbleDuration: 4.9, highlightColor: '#FFE7EA' },
    { id: 12, left: 69, size: 68, duration: 37, delay: -22, driftAngle: -7, color: '#C5A059', stringColor: '#A88439', opacity: 0.27, wobbleDuration: 6.0, highlightColor: '#FFF3DA' },
    { id: 13, left: 75, size: 48, duration: 26, delay: -12, driftAngle: 4, color: '#F7C5CC', stringColor: '#C78D95', opacity: 0.32, wobbleDuration: 4.3, highlightColor: '#FFFFFF' },
    { id: 14, left: 81, size: 62, duration: 33, delay: -6, driftAngle: -6, color: '#5A7755', stringColor: '#384C37', opacity: 0.25, wobbleDuration: 5.5, highlightColor: '#E6EFE5' },
    { id: 15, left: 87, size: 52, duration: 28, delay: -19, driftAngle: 5, color: '#C78D95', stringColor: '#B06F78', opacity: 0.29, wobbleDuration: 4.7, highlightColor: '#FFE7EA' },
    { id: 16, left: 93, size: 58, duration: 30, delay: -9, driftAngle: -5, color: '#F7C5CC', stringColor: '#C78D95', opacity: 0.30, wobbleDuration: 5.1, highlightColor: '#FFFFFF' },
    { id: 17, left: 97, size: 46, duration: 24, delay: -15, driftAngle: 6, color: '#C5A059', stringColor: '#A88439', opacity: 0.26, wobbleDuration: 4.0, highlightColor: '#FFF3DA' },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: '-160px',
            animation: `bulkBalloonFloat ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
            transform: `rotate(${b.driftAngle}deg)`,
          }}
        >
          <div
            style={{
              animation: `bulkBalloonSway ${b.wobbleDuration}s ease-in-out infinite alternate`,
              width: `${b.size}px`,
            }}
            className="flex flex-col items-center"
          >
            {/* Balloon Body with 3D Radial Depth */}
            <div
              style={{
                width: `${b.size}px`,
                height: `${b.size * 1.25}px`,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                background: `radial-gradient(circle at 32% 26%, ${b.highlightColor} 0%, ${b.color} 58%, rgba(35, 43, 37, 0.28) 100%)`,
                boxShadow: `inset -3px -5px 12px rgba(35, 43, 37, 0.15), 0 10px 24px rgba(35, 43, 37, 0.08)`,
              }}
              className="relative"
            >
              {/* Glossy highlight */}
              <div
                className="absolute top-2.5 left-2.5 rounded-full bg-white/80 blur-[0.3px]"
                style={{
                  width: `${b.size * 0.26}px`,
                  height: `${b.size * 0.42}px`,
                  transform: 'rotate(-28deg)',
                }}
              />

              {/* Balloon knot */}
              <div
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2 rounded-b-xs shadow-xs"
                style={{ backgroundColor: b.stringColor }}
              />
            </div>

            {/* Wavy Ribbon String */}
            <svg
              width="26"
              height="80"
              viewBox="0 0 26 80"
              fill="none"
              className="overflow-visible"
              style={{ marginTop: '-1px' }}
            >
              <path
                d="M13 0 C18 20, 6 42, 17 60 C21 68, 11 74, 14 80"
                stroke={b.stringColor}
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
                opacity="0.60"
              />
            </svg>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes bulkBalloonFloat {
          0% {
            transform: translateY(115vh) translateX(0px);
          }
          50% {
            transform: translateY(0vh) translateX(20px);
          }
          100% {
            transform: translateY(-135vh) translateX(40px);
          }
        }
        @keyframes bulkBalloonSway {
          0% {
            transform: rotate(-6deg) translateX(-6px);
          }
          100% {
            transform: rotate(7deg) translateX(8px);
          }
        }
      `}</style>
    </div>
  );
};
