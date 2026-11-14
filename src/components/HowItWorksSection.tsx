import React from 'react';
import { Heart } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

interface HowItWorksSectionProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return ( 
    <section className="w-full py-8 sm:py-12 px-2 sm:px-6 lg:px-8 bg-white/20 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <br/> 
      
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 relative">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Grand Cayman's Slumber Story</span>
            </div>
              <CuteSmileyCloud size="md" className="shrink-0 mx-auto" />

          </ScrollReveal>

          
          
          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
             Four Simple Steps to Magic
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-[#232B25]/80 text-xs sm:leading-relaxed">
               Four Simple Steps to Magic From your first theme idea to<br/> next-day pack-away across Grand Cayman..
            </p>
          </ScrollReveal>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 columns in one row on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden shadow-2xl border border-[#5A7755]/25 w-full">
          
          {/* ==============================================================
              CARD 1: CHOOSE YOUR THEME (Sage Green)
              ============================================================== */}
          <ScrollReveal animation="scale-in" delay={100} className="h-full">
            <div
              onClick={() => onNavigate('themes')}
              className="group relative h-[250px] sm:h-[300px] bg-[#5A7755] overflow-hidden cursor-pointer flex flex-col justify-between border-[0.5px] border-white p-4 sm:p-6 text-center items-center transform hover:scale-[1.02] transition-all"
            >
              {/* Larger Logo & Step */}
              <div className="flex flex-col items-center">
                <div className="p-1.5 rounded-full bg-white shadow-md border border-white mb-1.5">
                  <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                  Step 01
                </span>
              </div>

              {/* Centered Heading & Subtext */}
              <div className="flex flex-col items-center my-auto space-y-3.5">
                <span className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight">
                  Choose Your Theme
                </span>
                <p className="text-[11px] sm:text-xs text-white/90 max-w-[220px] font-medium leading-snug">
                  Explore our curated collection of enchanting indoor glamping styles.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ==============================================================
              CARD 2: SELECT YOUR PACKAGE (Dusty Rose)
              ============================================================== */}
          <ScrollReveal animation="scale-in" delay={200} className="h-full">
            <div
              onClick={() => onNavigate('services')}
              className="group relative h-[250px] sm:h-[300px] bg-[#A56069] overflow-hidden cursor-pointer flex flex-col justify-between border-[0.5px] border-white p-4 sm:p-6 text-center items-center transform hover:scale-[1.02] transition-all"
            >
              {/* Larger Logo & Step */}
              <div className="flex flex-col items-center">
                <div className="p-1.5 rounded-full bg-white shadow-md border border-white mb-1.5">
                  <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                  Step 02
                </span>
              </div>

              {/* Centered Heading & Subtext */}
              <div className="flex flex-col items-center my-auto space-y-3.5">
                <span className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight">
                  Select Your Package
                </span>
                <p className="text-[11px] sm:text-xs text-white/90 max-w-[220px] font-medium leading-snug">
                  Choose guest count and customize with cozy add-ons and garlands.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ==============================================================
              CARD 3: LOCK IN YOUR DATE (Sage Green)
              ============================================================== */}
          <ScrollReveal animation="scale-in" delay={300} className="h-full">
            <div
              onClick={() => onOpenBooking()}
              className="group relative h-[250px] sm:h-[300px] bg-[#5A7755] overflow-hidden cursor-pointer flex flex-col justify-between border-[0.5px] border-white p-4 sm:p-6 text-center items-center transform hover:scale-[1.02] transition-all"
            >
              {/* Larger Logo & Step */}
              <div className="flex flex-col items-center">
                <div className="p-1.5 rounded-full bg-white shadow-md border border-white mb-1.5">
                  <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                  Step 03
                </span>
              </div>

              {/* Centered Heading & Subtext */}
              <div className="flex flex-col items-center my-auto space-y-3.5">
                <span className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight">
                  Send Your Details
                </span>
                <p className="text-[11px] sm:text-xs text-white/90 max-w-[220px] font-medium leading-snug">
                  Share your preferred date and theme for instant availability.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ==============================================================
              CARD 4: WE WILL HANDLE IT (Dusty Rose)
              ============================================================== */}
          <ScrollReveal animation="scale-in" delay={400} className="h-full">
            <div
              onClick={() => onOpenBooking()}
              className="group relative h-[250px] sm:h-[300px] bg-[#A56069] overflow-hidden cursor-pointer flex flex-col justify-between border-[0.5px] border-white p-4 sm:p-6 text-center items-center transform hover:scale-[1.02] transition-all"
            >
              {/* Larger Logo & Step */}
              <div className="flex flex-col items-center">
                <div className="p-1.5 rounded-full bg-white shadow-md border border-white mb-1.5">
                  <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                  Step 04
                </span>
              </div>

              {/* Centered Heading & Subtext */}
              <div className="flex flex-col items-center my-auto space-y-3.5">
                <span className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight">
                  Sit Back, We Will Handle It.
                </span>
                <p className="text-[11px] sm:text-xs text-white/95 max-w-[220px] font-medium leading-snug">
                  Delivered, styled, and 100% steam-sanitized before bedtime.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;