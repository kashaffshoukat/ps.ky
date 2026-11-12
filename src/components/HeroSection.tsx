import React from 'react';
import { CuteSmileyCloud } from './CuteSmileyCloud';
interface HeroSectionProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

const MARQUEE_IMAGES = [
  '/assets/aistudio/1.jfif',
  '/assets/aistudio/55.jfif',
  '/assets/aistudio/33.jfif',

  '/assets/aistudio/77.jfif',
  '/assets/aistudio/66.jfif',

];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#4A5E51] via-[#6E6764] to-[#986668] text-white pt-6 pb-14 select-none">
      
      {/* Subtle Background Corner Objects (No Emojis) */}
      <div className="absolute top-10 left-6 pointer-events-none opacity-20 flex flex-col gap-2 z-0">
        <div className="w-6 h-6 border border-white/40 rounded-full animate-pulse" />
        <div className="w-4 h-4 bg-white/30 rotate-45 ml-2" />
      </div>

      <div className="absolute bottom-16 right-8 pointer-events-none opacity-20 flex flex-col items-end gap-2 z-0">
        <div className="w-5 h-5 bg-white/30 rounded-full animate-bounce" />
        <div className="w-7 h-7 border border-white/40 rounded-full" />
      </div>

      {/* Top Spacer */}
      <div className="h-12 sm:h-16" />

      {/* 1. Brand Title & Subtitle - Left Aligned with Increased Bottom Spacing */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 mb-8 sm:mb-10 text-left">
        <span className="block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white font-semibold mb-2.5 mt-[-20px]">
          Luxury Indoor Glamping • Grand Cayman

        </span>
        <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] drop-shadow-sm">
          Paradise Slumbers &nbsp;
         <CuteSmileyCloud size="md" className="shrink-0" />
        </h1>
      </div>

      {/* 2. Infinite Horizontal Image Marquee (Slower Speed via index.css) */}
      <div className="relative w-full overflow-hidden py-2 mb-12 sm:mb-14 group z-10">
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((imgSrc, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[360px] lg:w-[420px] h-[220px] sm:h-[290px] lg:h-[330px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-2 border-white/25 bg-white/10"
            >
              <img
                src={imgSrc}
                alt={`Paradise Slumbers Setup ${index + 1}`}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Rest of Current Text Content (Centered Below Marquee with Extra Spacing) */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-full space-y-9 flex flex-col items-center text-center">
          
          {/* Main Headline & Captivating Kid-Focused Subline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white drop-shadow-sm text-center mt-[-30px]">
              Where Little Dreamers
              <span className="block mt-2.5">
              
                Enjoy Under the Stars
                
              </span>
            </h2>
            
            <p className="text-xs sm:text-sm lg:text-base font-medium text-white tracking-wide text-center max-w-2xl mx-auto pt-3">
              Turning ordinary sleepovers into extraordinary childhood adventures across Grand Cayman
            </p>
          </div>

          {/* Dual Button Group - Centered */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('themes')}
              className="px-7 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-[#161B18] bg-white hover:bg-[#F5E6E7] transition-colors shadow-lg cursor-pointer"
            >
              Explore Catalog
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-black/25 hover:bg-black/40 backdrop-blur-md border border-white/35 transition-all cursor-pointer"
            >
              Book Setup
            </button>

          </div>

        

        </div>
      </div>

    </section>
  );
};