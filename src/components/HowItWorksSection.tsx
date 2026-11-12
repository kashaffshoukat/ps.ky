import React from 'react';
import { Heart, ArrowRight, Phone, MapPin, Mail, Sparkles } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';
import { CuteSmileyCloud } from './CuteSmileyCloud';
interface HowItWorksSectionProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return ( 
    <section className="w-full py-8 sm:py-12 px-2 sm:px-6 lg:px-8 bg-[#FAF7F4]">
      <div className="max-w-7xl mx-auto w-full">
         <br/> 
      
  {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5  bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Slumber Story</span>
          </div>
         <CuteSmileyCloud size="md" className="shrink-0" />
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
           Four Simple Steps to Magic
          </h2>

          <p className="text-[#232B25]/80 text-xs sm: leading-relaxed">
             Four Simple Steps to Magic  From your first theme idea to<br/> next-day pack-away across Grand Cayman..
          </p>
        </div>
        {/* Responsive Grid: 2 columns on mobile, 4 columns in one row on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden shadow-2xl border border-[#5A7755]/25 w-full">
          
          {/* ==============================================================
              CARD 1: CHOOSE YOUR THEME
              ============================================================== */}
          <div
            onClick={() => onNavigate('themes')}
            className="group relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#5A7755] via-[#6B8A66] to-[#485E44] overflow-hidden cursor-pointer flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/20 p-4 sm:p-6 text-center items-center"
          >
            {/* Larger Logo & Step */}
            <div className="flex flex-col items-center">
              <div className="p-1.5 rounded-full bg-white shadow-md border border-white/50 mb-1.5">
                <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                Step 01
              </span>
            </div>

            {/* Centered Heading & Subtext */}
            <div className="flex flex-col items-center my-auto space-y-3.5">
              <span className=" sm:text-xl font-black text-white leading-tight tracking-tight">
                Choose Your Theme
              </span>
              <p className="text-[11px] sm:text-xs text-white/90 max-w-[220px] font-medium leading-snug">
                Explore our curated collection of enchanting indoor glamping styles.
              </p>
            </div>

          

            <CardFooterBar />
          </div>

          {/* ==============================================================
              CARD 2: SELECT YOUR PACKAGE
              ============================================================== */}
          <div
            onClick={() => onNavigate('services')}
            className="group relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#6B8A66] via-[#8C7A7C] to-[#A56069] overflow-hidden cursor-pointer flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/20 p-4 sm:p-6 text-center items-center"
          >
            {/* Larger Logo & Step */}
            <div className="flex flex-col items-center">
              <div className="p-1.5 rounded-full bg-white shadow-md border border-white/50 mb-1.5">
                <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                Step 02
              </span>
            </div>

            {/* Centered Heading & Subtext */}
            <div className="flex flex-col items-center my-auto space-y-3.5">
              <span className=" sm:text-xl font-black text-white leading-tight tracking-tight">
                Select Your Package
              </span>
              <p className="text-[11px] sm:text-xs text-white/90 max-w-[220px] font-medium leading-snug">
                Choose guest count and customize with cozy add-ons &amp; garlands.
              </p>
            </div>

           

            <CardFooterBar />
          </div>

          {/* ==============================================================
              CARD 3: LOCK IN YOUR DATE
              ============================================================== */}
          <div
            onClick={() => onOpenBooking()}
            className="group relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#8C7A7C] via-[#9E6D70] to-[#735456] overflow-hidden cursor-pointer flex flex-col justify-between border-r border-white/25 p-4 sm:p-6 text-center items-center"
          >
            {/* Larger Logo & Step */}
            <div className="flex flex-col items-center">
              <div className="p-1.5 rounded-full bg-white shadow-md border border-white/50 mb-1.5">
                <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                Step 03
              </span>
            </div>

            {/* Centered Heading & Subtext */}
            <div className="flex flex-col items-center my-auto space-y-3.5">
              <span className=" sm:text-xl font-black text-white leading-tight tracking-tight">
                Send Your Details
              </span>
              <p className="text-[11px] sm:text-xs text-white/90 max-w-[220px] font-medium leading-snug">
                Share your preferred date and theme for instant availability.
              </p>
            </div>

        
            <CardFooterBar />
          </div>

          {/* ==============================================================
              CARD 4: WE WILL HANDLE IT
              ============================================================== */}
          <div
            onClick={() => onOpenBooking()}
            className="group relative h-[250px] sm:h-[300px] bg-gradient-to-br from-[#A56069] via-[#8E656B] to-[#5A7755] overflow-hidden cursor-pointer flex flex-col justify-between p-4 sm:p-6 text-center items-center"
          >
            {/* Larger Logo & Step */}
            <div className="flex flex-col items-center">
              <div className="p-1.5 rounded-full bg-white shadow-md border border-white/50 mb-1.5">
                <img src={LOGO_IMAGE} alt="Paradise Slumbers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white">
                Step 04
              </span>
            </div>

            {/* Centered Heading & Subtext */}
            <div className="flex flex-col items-center my-auto space-y-3.5">
              <span className=" sm:text-xl font-black text-white leading-tight tracking-tight">
                Sit Back, We Will Handle It.
              </span>
              <p className="text-[11px] sm:text-xs text-white/95 max-w-[220px] font-medium leading-snug">
                Delivered, styled, and 100% steam-sanitized before bedtime.
              </p>
            </div>

          

            <CardFooterBar />
          </div>

        </div>
      </div>
    </section>
  );
};

/* Bottom Contact Strip */
const CardFooterBar: React.FC = () => (
  <div className="w-full absolute bottom-0 left-0 right-0 z-10 bg-black/35 backdrop-blur-md text-white px-2 py-1.5 border-t border-white/15">
    <div className="flex items-center justify-center gap-3 text-[9px] sm:text-[10px] font-medium">
      <span className="inline-flex items-center gap-1">
        <Phone className="w-2 h-2" />
        +1 (345) 555-0199
      </span>
      <span className="inline-flex items-center gap-1">
        <MapPin className="w-2 h-2" />
        Grand Cayman
      </span>
    </div>
  </div>
);