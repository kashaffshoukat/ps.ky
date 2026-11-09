import React from 'react';
import { ShieldCheck, Sparkles, Clock, Award, CheckCircle2, ArrowRight, Heart, Star } from 'lucide-react';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface WhyChooseUsSectionProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <section id="why-choose-us" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-transparent border-b border-[#5A7755]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A7755]/15 border border-[#5A7755]/30 text-[#5A7755] text-xs font-bold uppercase tracking-widest">
            <span>Why Cayman Parents Trust Us</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
            <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Why Choose Paradise Slumbers
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            We don't just drop off tents, we deliver an all-inclusive, fairy-tale experience that delights children and lets parents relax completely.
          </p>
        </div>

        {/* DISTINCTIVE 6-CARD BALANCED BENTO GRID (Zero blank cards on any screen size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Bento Card 1: Zero Stress White-Glove Service */}
          <div className="bento-card group bg-white rounded-3xl p-6 border border-[#5A7755]/20 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-2 bg-[#FAF7F4]">
                <img
                  src="https://paradiseslumbersky-btzm.vercel.app/4.jpeg"
                  alt="White Glove Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#5A7755] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Zero Stress
                </span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#5A7755]/15 text-[#5A7755] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#5A7755]" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#384C37]">
                White-Glove Setup &amp; Packdown
              </h3>
              <p className="text-xs sm:text-sm text-[#232B25]/75 leading-relaxed">
                Parents don't lift a finger. Our team arrives at your home, assembles the wooden A-frames, sets up beds, lights, and tables, then returns next morning to pack everything away.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#5A7755]/15 flex items-center gap-2 text-xs font-bold text-[#5A7755]">
              <CheckCircle2 className="w-4 h-4 text-[#5A7755]" />
              <span>Zero Cleaning, Zero Laundry</span>
            </div>
          </div>

          {/* Bento Card 2: 100% Steam Sanitization & Hygiene */}
          <div className="bento-card group bg-white rounded-3xl p-6 border border-[#C78D95]/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-2 bg-[#FAF7F4]">
                <img
                  src="https://paradiseslumbersky-btzm.vercel.app/3e.jfif"
                  alt="Sanitized Linens"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#B06F78] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  100% Sanitized
                </span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#C78D95]/15 text-[#C78D95] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#C78D95]" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#384C37]">
                Clinical Hygiene &amp; Hypoallergenic Linens
              </h3>
              <p className="text-xs sm:text-sm text-[#232B25]/75 leading-relaxed">
                Every bed sheet, blanket, mattress cover, and cushion is washed in fragrance-free, hypoallergenic baby detergent and sanitized with high-temperature steam.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#C78D95]/20 flex items-center gap-2 text-xs font-bold text-[#B06F78]">
              <CheckCircle2 className="w-4 h-4 text-[#B06F78]" />
              <span>Certified Child-Safe Detergents</span>
            </div>
          </div>

          {/* Bento Card 3: Timber Craftsmanship with Real Tent Image */}
          <div className="bento-card group bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-2 bg-[#FAF7F4]">
                <img
                  src="/src/assets/images/hero_teepee_slumber_1794212993402.jpg"
                  alt="Handcrafted Teepees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#C5A059] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Cayman Artisan
                </span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#384C37]">
                Custom Timber Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-[#232B25]/75 leading-relaxed">
                Unlike flimsy plastic pop-ups, our A-frame teepees are handcrafted from solid pine timber with slipcovers individually sewn by local Caymanian seamstresses.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#C5A059]/20 flex items-center gap-2 text-xs font-bold text-[#C5A059]">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Solid Hardwood Construction</span>
            </div>
          </div>

          {/* Bento Card 4: Curated Lighting, Breakfast Trays & Decor */}
          <div className="bento-card group bg-white rounded-3xl p-6 border border-[#5A7755]/20 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-2 bg-[#FAF7F4]">
                <img
                  src="https://paradiseslumbersky-btzm.vercel.app/4.jpeg"
                  alt="Curated Decor & Trays"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#5A7755] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Aesthetic Quality
                </span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#5A7755]/15 text-[#5A7755] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#5A7755]" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#384C37]">
                Curated Breakfast Trays &amp; Decor
              </h3>
              <p className="text-xs sm:text-sm text-[#232B25]/75 leading-relaxed">
                From cozy woodland fairy lights to glowing neon battle stations, every theme includes custom wooden breakfast tray tables, battery-operated tealights, themed pillows, and lightboards.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#5A7755]/15 flex items-center justify-between">
              <span className="text-xs font-bold text-[#5A7755]">10 Bespoke Themes</span>
              <button
                type="button"
                onClick={() => onNavigate('themes')}
                className="text-xs font-bold text-[#5A7755] hover:text-[#384C37] underline cursor-pointer"
              >
                View Themes →
              </button>
            </div>
          </div>

        

         
        </div>

        {/* Bottom CTA (Links to Contact Form) */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>Book Your Child's Dream Sleepover</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
