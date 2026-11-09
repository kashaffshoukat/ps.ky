import React from 'react';

interface CuteRainbowProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CuteRainbow: React.FC<CuteRainbowProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-48 h-28',
    md: 'w-64 h-36 sm:w-72 sm:h-40',
    lg: 'w-80 h-44 sm:w-96 sm:h-52',
  }[size];

  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 280 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md animate-bounce-gentle"
      >
        <defs>
          {/* Subtle Pink Blush Gradient */}
          <radialGradient id="rainbowBlush" cx="50%" cy="50%" r="50%">
            <stop stopColor="#F9A8B6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F9A8B6" stopOpacity="0" />
          </radialGradient>

          {/* Cloud Fill Gradient */}
          <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F3EFEA" />
          </linearGradient>
        </defs>

        {/* ========================================================
            PASTEL RAINBOW ARCS (Curved from left cloud to right cloud)
            Palette: Dusty Rose, Peach, Buttercup Gold, Sage Mint, Sky Blue
            ======================================================== */}
        {/* Arc 1 (Outer - Dusty Rose) */}
        <path
          d="M 50 120 A 90 90 0 0 1 230 120"
          stroke="#C78D95"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arc 2 (Peach Coral) */}
        <path
          d="M 61 120 A 79 79 0 0 1 219 120"
          stroke="#EAA491"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arc 3 (Buttercup Champagne Gold) */}
        <path
          d="M 72 120 A 68 68 0 0 1 208 120"
          stroke="#E6C875"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arc 4 (Soft Pastel Sage Green) */}
        <path
          d="M 83 120 A 57 57 0 0 1 197 120"
          stroke="#88A882"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arc 5 (Pastel Sky Breeze Blue) */}
        <path
          d="M 94 120 A 46 46 0 0 1 186 120"
          stroke="#9ACEEB"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sparkle Glints around Rainbow */}
        {/* Top Center Sparkle */}
        <path
          d="M 140 10 L 142 16 L 148 18 L 142 20 L 140 26 L 138 20 L 132 18 L 138 16 Z"
          fill="#C5A059"
          className="animate-pulse"
        />
        {/* Left Sparkle */}
        <path
          d="M 75 32 L 77 37 L 82 38 L 77 40 L 75 45 L 73 40 L 68 38 L 73 37 Z"
          fill="#C78D95"
        />
        {/* Right Sparkle */}
        <path
          d="M 205 32 L 207 37 L 212 38 L 207 40 L 205 45 L 203 40 L 198 38 L 203 37 Z"
          fill="#5A7755"
        />

        {/* ========================================================
            LEFT CUTE SMILEY CLOUD
            ======================================================== */}
        <g transform="translate(15, 80)">
          {/* Cloud Outline */}
          <path
            d="M 20 48 C 10 48 2 40 2 30 C 2 20 10 13 18 14 C 21 5 30 0 40 1 C 50 2 58 8 60 18 C 68 18 75 25 75 34 C 75 43 67 48 58 48 Z"
            fill="url(#cloudGrad)"
            stroke="#5A7755"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Smiley Eyes ^ ^ */}
          <path d="M 28 26 C 29 22 33 22 34 26" stroke="#384C37" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 44 26 C 45 22 49 22 50 26" stroke="#384C37" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Sweet Smile */}
          <path d="M 36 32 C 37.5 35 40.5 35 42 32" stroke="#384C37" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Pink Cheeks */}
          <ellipse cx="23" cy="30" rx="4" ry="2.8" fill="url(#rainbowBlush)" />
          <ellipse cx="55" cy="30" rx="4" ry="2.8" fill="url(#rainbowBlush)" />
        </g>

        {/* ========================================================
            RIGHT CUTE SMILEY CLOUD
            ======================================================== */}
        <g transform="translate(190, 80)">
          {/* Cloud Outline */}
          <path
            d="M 20 48 C 10 48 2 40 2 30 C 2 20 10 13 18 14 C 21 5 30 0 40 1 C 50 2 58 8 60 18 C 68 18 75 25 75 34 C 75 43 67 48 58 48 Z"
            fill="url(#cloudGrad)"
            stroke="#5A7755"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Smiley Eyes ^ ^ */}
          <path d="M 28 26 C 29 22 33 22 34 26" stroke="#384C37" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 44 26 C 45 22 49 22 50 26" stroke="#384C37" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Sweet Smile */}
          <path d="M 36 32 C 37.5 35 40.5 35 42 32" stroke="#384C37" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Pink Cheeks */}
          <ellipse cx="23" cy="30" rx="4" ry="2.8" fill="url(#rainbowBlush)" />
          <ellipse cx="55" cy="30" rx="4" ry="2.8" fill="url(#rainbowBlush)" />
        </g>
      </svg>

      <style>{`
        @keyframes bounceGentle {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }
          50% {
            transform: translateY(-8px) rotate(1.5deg);
          }
        }
        .animate-bounce-gentle {
          animation: bounceGentle 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
