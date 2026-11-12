import React from 'react';
import { Heart, ArrowRight, Sparkles, Tent, Star, ShieldCheck, Award } from 'lucide-react';
import { CuteSmileyCloud } from './CuteSmileyCloud';
interface WhoWeAreSectionProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <section id="who-we-are" className="relative z-10 bg-transparent overflow-hidden border-b border-[#5A7755]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}<br/><br/>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5  bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Slumber Story</span>
          </div>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
            Who We Are &amp; What We Do
          </h2>

          <p className="text-[#232B25]/80 text-xs sm:text-base leading-relaxed">
            Grand Cayman's premier luxury indoor glamping experience, providing bespoke themed sleepovers for children.
          </p>
        </div>

        {/* UNIQUE SINGLE IMAGE + DECORATED STRIPS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* LEFT: Wider Compact Image with Subtle Bauhaus Sage & Rose Geometric Framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Bauhaus Geometric Offset Backdrops */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#5A7755]/30 bg-[#5A7755]/5 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#C78D95]/30 bg-[#C78D95]/5 pointer-events-none" />

              {/* Main Wider Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#5A7755]/40 shadow-xl bg-white aspect-[16/11]">
                <img
                  src="./src/assets/images/ttt.jfif"
                  alt="Paradise Slumbers Luxury Setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B18]/90 via-[#161B18]/20 to-transparent" />

                {/* Bottom Caption on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
                  <p className="text-[10px] font-bold text-[#C78D95] uppercase tracking-widest">Handcrafted Teepees</p>
                  <h3 className="text-sm font-bold text-white leading-tight">Bespoke Indoor Glamping Oasis</h3>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Content Strips (2 Columns on Mobile, 1 Column on Desktop) */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              
              {/* Strip 1: Core Identity */}
              <div className="relative overflow-hidden bg-white rounded-2xl p-4 sm:p-5 border border-[#5A7755]/20 shadow-sm hover:border-[#5A7755]/50 hover:shadow-md transition-all flex flex-col lg:flex-row items-start gap-3 sm:gap-4 group">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#5A7755]" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#5A7755]/10 text-[#5A7755] flex items-center justify-center flex-shrink-0 font-black text-xs sm:text-sm">
                  01
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#384C37] leading-snug">Indoor Glamping Experience</h4>
                  <p className="text-[11px] sm:text-xs text-[#232B25]/80 leading-relaxed">
                    Bespoke themed sleepovers for kids aged 6 and over across Grand Cayman for birthdays and special occasions.
                  </p>
                </div>
              </div>

              {/* Strip 2: Full-Service Experience */}
              <div className="relative overflow-hidden bg-white rounded-2xl p-4 sm:p-5 border border-[#C78D95]/30 shadow-sm hover:border-[#C78D95]/60 hover:shadow-md transition-all flex flex-col lg:flex-row items-start gap-3 sm:gap-4 group">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#C78D95]" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#C78D95]/15 text-[#B06F78] flex items-center justify-center flex-shrink-0 font-black text-xs sm:text-sm">
                  02
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#384C37] leading-snug">Full-Service Delivery</h4>
                  <p className="text-[11px] sm:text-xs text-[#232B25]/80 leading-relaxed">
                    We deliver, assemble, and style teepees, mattresses, fairy lights, and accessories, then pack it all away next morning.
                  </p>
                </div>
              </div>

              {/* Strip 3: Interior Design Service */}
              <div className="relative overflow-hidden bg-white rounded-2xl p-4 sm:p-5 border border-[#5A7755]/20 shadow-sm hover:border-[#5A7755]/50 hover:shadow-md transition-all flex flex-col lg:flex-row items-start gap-3 sm:gap-4 group col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#5A7755]" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#5A7755]/10 text-[#5A7755] flex items-center justify-center flex-shrink-0 font-black text-xs sm:text-sm">
                  03
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#384C37] leading-snug">Signature Kids Interior Design</h4>
                  <p className="text-[11px] sm:text-xs text-[#232B25]/80 leading-relaxed">
                    Permanent bedroom and playroom makeovers transformed from top to bottom by interior designer Candice Hall.
                  </p>
                </div>
              </div>

            </div>

            {/* Professional Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 ml-auto">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-xl bg-[#5A7755]/10 hover:bg-[#5A7755]/20 text-[#5A7755] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Enquire Here
                </button>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-xl bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Taller Marquee Strip at the End */}
      <div className="w-full bg-[#5A7755]/10 border-t border-[#5A7755]/20 py-6 sm:py-7 overflow-hidden whitespace-nowrap select-none">
        <div className="inline-flex animate-marquee items-center gap-12 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#384C37]">
          <span className="inline-flex items-center gap-2"> Grand Cayman’s 1st Luxury Indoor Glamping</span>
          <span className="text-[#C78D95]">•</span>
          <span className="inline-flex items-center gap-2"> Fully Delivered, Styled &amp; Packaged Away</span>
          <span className="text-[#C78D95]">•</span>
          <span className="inline-flex items-center gap-2"> Bespoke Kids Interior Design by Candice Hall</span>
          <span className="text-[#C78D95]">•</span>
          <span className="inline-flex items-center gap-2"> Turnkey Party Setup &amp; Takedown</span>
        </div>
      </div>

    </section>
  );
};