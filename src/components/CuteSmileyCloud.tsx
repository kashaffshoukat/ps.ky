import React from 'react';

interface CuteSmileyCloudProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CuteSmileyCloud: React.FC<CuteSmileyCloudProps> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions = {
    sm: 'w-10 h-7',
    md: 'w-14 h-9',
    lg: 'w-20 h-13',
  }[size];

  return (
    <div
      className={`inline-block select-none pointer-events-none transition-transform hover:scale-105 ${dimensions} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm filter"
      >
        <defs>
          {/* Soft White Cloud Gradient */}
          <linearGradient id="cloudBodyGrad" x1="50" y1="5" x2="50" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.8" stopColor="#F8F6F2" />
            <stop offset="1" stopColor="#EFECE6" />
          </linearGradient>
          {/* Subtle Pink Blush */}
          <radialGradient id="blushPink" cx="50%" cy="50%" r="50%">
            <stop stopColor="#F9A8B6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F9A8B6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Puffy Cloud Outline / Silhouette */}
        <path
          d="M25 55 C12 55 5 45 6 34 C7 24 16 18 24 19 C28 9 39 4 50 5 C62 6 72 13 74 23 C83 23 92 30 92 40 C92 50 83 55 75 55 Z"
          fill="url(#cloudBodyGrad)"
          stroke="#5A7755"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Adorable closed happy smiling eyes ^ ^ */}
        <path
          d="M38 31 C39 27 43 27 44 31"
          stroke="#384C37"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M56 31 C57 27 61 27 62 31"
          stroke="#384C37"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sweet Gentle Smile */}
        <path
          d="M47 37 C48.5 40 51.5 40 53 37"
          stroke="#384C37"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Rosy Pink Blush Cheeks */}
        <ellipse cx="32" cy="35" rx="5" ry="3.5" fill="url(#blushPink)" />
        <ellipse cx="68" cy="35" rx="5" ry="3.5" fill="url(#blushPink)" />
      </svg>
    </div>
  );
};
