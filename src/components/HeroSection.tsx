import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <section className="relative w-full pt-12 pb-8 sm:py-0 sm:min-h-screen sm:flex sm:flex-col sm:justify-center overflow-hidden bg-[#0B0E14] text-white select-none">
      {/* Background Hero Image with Dusty Rose Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/aistudio/bg.jpg"
          alt="Luxury Indoor Glamping Teepees Under Starry Sky"
          className="w-full h-full object-cover object-center scale-[1.01] animate-fade-in"
        />
        {/* Soft dusty rose / mauve color wash overlay */}
        <div className="absolute inset-0 bg-[#A6757D]/100 mix-blend-multiply" />
        {/* Subtle dark vignette so text remains crisp and readable */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Subtle Geometric Corner Accents */}
      <div className="pointer-events-none absolute -top-8 -left-8 w-28 h-28 rounded-full bg-white/[0.06] z-10" />
      <div className="pointer-events-none absolute top-44 -right-6 w-16 h-16 rounded-lg bg-white/[0.08] z-10 hidden sm:block" />

      {/* Single Flow Container */}
      <div className="relative z-20 max-w-[1380px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-2 pb-6 sm:py-24 flex flex-col">
        
        {/* Kicker Tag */}
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="text-xs sm:text-sm font-medium text-white/90 tracking-wide drop-shadow-md">
            Luxury Indoor Glamping &bull; Grand Cayman
          </p>
        </ScrollReveal>

        {/* Brand Heading with Responsive Stack for Mobile */}
        <ScrollReveal animation="fade-up" delay={150}>
          <h1 className="font-extrabold uppercase text-white tracking-[-0.02em] leading-[0.95] text-[clamp(2.1rem,6.8vw,6.85rem)] drop-shadow-lg mt-3 sm:mt-4 mb-5 sm:mb-6">
            PARADISE <span className="block sm:inline">SLUMBERS</span>
          </h1>
        </ScrollReveal>

        {/* Content Block */}
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
          {/* Subtitle / Tagline */}
          <ScrollReveal animation="fade-up" delay={250}>
            <span className="font-extrabold text-xl sm:text-3xl xl:text-[34px] leading-[1.18] tracking-tight text-white drop-shadow-md block">
              Where Little Dreamers Enjoy under the Stars!
            </span>
          </ScrollReveal>

          {/* Description Paragraph */}
          <ScrollReveal animation="fade-up" delay={350}>
            <p className="text-xs sm:text-[15px] font-medium text-white leading-relaxed drop-shadow max-w-2xl">
              Seamless, precise, and built to last your indoor adventure, done right.
              Turning ordinary sleepovers into extraordinary childhood adventures across Grand
              Cayman. Every detail is thoughtfully executed from the first teepee setup to the
              final dream.
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal animation="fade-up" delay={450}>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('themes')}
                className="px-6 sm:px-7 py-3 rounded-[5px] text-xs sm:text-sm font-semibold text-[#111317] bg-[#E5E7EB] hover:bg-white transition-colors shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                See Our Packages
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="px-7 sm:px-8 py-3 rounded-[5px] text-xs sm:text-sm font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                Book Setup
              </button>
            </div>
          </ScrollReveal>

          {/* Stats Row */}
          <ScrollReveal animation="fade-up" delay={550}>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-2xl border-t border-white/15">
              <div className="flex items-start gap-2.5 sm:gap-3 transform hover:scale-105 transition-transform">
                <span className="w-[3px] h-7 sm:h-9 bg-white rounded-full mt-1 shrink-0 shadow" />
                <div>
                  <div className="text-xl sm:text-3xl lg:text-[34px] font-bold leading-none tracking-tight text-white drop-shadow-md">200+</div>
                  <div className="text-[10px] sm:text-xs text-white/90 font-medium mt-1.5 leading-snug drop-shadow">Happy Kids</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 transform hover:scale-105 transition-transform">
                <span className="w-[3px] h-7 sm:h-9 bg-white rounded-full mt-1 shrink-0 shadow" />
                <div>
                  <div className="text-xl sm:text-3xl lg:text-[34px] font-bold leading-none tracking-tight text-white drop-shadow-md">180+</div>
                  <div className="text-[10px] sm:text-xs text-white/90 font-medium mt-1.5 leading-snug drop-shadow">Completed Slumbers</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 transform hover:scale-105 transition-transform">
                <span className="w-[3px] h-7 sm:h-9 bg-white rounded-full mt-1 shrink-0 shadow" />
                <div>
                  <div className="text-xl sm:text-3xl lg:text-[34px] font-bold leading-none tracking-tight text-white drop-shadow-md">20+</div>
                  <div className="text-[10px] sm:text-xs text-white/90 font-medium mt-1.5 leading-snug drop-shadow">Crafted Themes</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};