import React from 'react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroSectionProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#161B18] text-white py-10 lg:py-14 select-none text-center">
      
      {/* 1. Full Bleed Background Image with Deep Cinematic Dark Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={'https://lifeslittlecelebrations.org/wp-content/uploads/2022/01/1G5A0024-scaled.jpg'}
          alt="Paradise Slumbers Indoor Glamping Setup"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.70] contrast-[1.05]"
        />
        {/* Soft dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-[#121614]/40 to-[#121614]/60" />
      </div>

      {/* Spacer for Top Floating Navbar */}
      <div className="h-16 sm:h-24" />

      {/* 2. Content Container (Fully Center-Aligned Layout) */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10 my-auto pb-4 flex flex-col items-center justify-center">
        
        <div className="w-full space-y-8 flex flex-col items-center text-center">
          
          {/* Main Headline & Sub-heading Stack (Larger & Stylish on Mobile) */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white drop-shadow-lg text-center">
              <span className="block font-sans tracking-wide">ELEVATED INDOOR</span>
              <span className="block font-serif italic font-normal text-white capitalize tracking-normal text-3xl sm:text-5xl lg:text-6xl mt-1">
                Glamping Experiences
              </span>
            </h2>
            
            <p className="text-xs sm:text-sm lg:text-base font-semibold text-white tracking-widest uppercase text-center max-w-2xl mx-auto">
              Bespoke Sleepover Styling &amp; Luxury Children's Interior Transformations
            </p>
          </div>

          {/* Dual Button Group - Centered */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onNavigate('themes')}
              className="px-7 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-[#161B18] bg-[#E8D0D1] hover:bg-[#D8A4A6] transition-colors shadow-lg cursor-pointer"
            >
              Explore Catalog
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white/90 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 transition-all cursor-pointer"
            >
              Book Setup
            </button>
          </div>

          {/* Center Paragraph Descriptions */}
          <div className="space-y-2 max-w-2xl mx-auto text-center pt-2">
            <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
              Seamless, magical, and crafted to last your indoor glamping experience, done right.
            </p>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              Crafted from concept to completion, we design and set up bespoke indoor teepee sleepovers and kids' bedroom makeovers that feel truly yours across Grand Cayman.
            </p>
          </div>

          {/* 3-Column Center Metric Counters */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-6 border-t border-white/10 w-full max-w-2xl mx-auto justify-center">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                500+
              </h3>
              <p className="text-[10px] sm:text-xs text-white/60 font-medium leading-tight mt-1.5">
                happy Cayman kids
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                180+
              </h3>
              <p className="text-[10px] sm:text-xs text-white/60 font-medium leading-tight mt-1.5">
                completed sleepovers
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                10+
              </h3>
              <p className="text-[10px] sm:text-xs text-white/60 font-medium leading-tight mt-1.5">
                custom themes
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};