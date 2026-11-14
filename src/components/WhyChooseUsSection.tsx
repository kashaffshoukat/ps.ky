import React from 'react';
import { ShieldCheck, Heart, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

interface WhyChooseUsSectionProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  const featuresList = [
    {
      number: '1',
      title: 'White-Glove Setup AND Packdown',
      desc: 'Parents don\'t lift a finger. We assemble wooden A-frames, beds, and lights, then return next morning.',
    },
    {
      number: '2',
      title: '100% Sanitized AND Hypoallergenic Linens',
      desc: 'Every bed sheet and cushion is washed in fragrance-free baby detergent and steam-sanitized.',
    },
    {
      number: '3',
      title: 'Cayman Artisan Timber Tents',
      desc: 'Handcrafted from solid pine timber with custom slipcovers sewn by local Caymanian seamstresses.',
    },
    {
      number: '4',
      title: 'Curated Breakfast Trays AND Lanterns',
      desc: 'Each setup includes individual wooden tray tables, safe battery LED tealights, and themed pillows.',
    },
    {
      number: '5',
      title: '10 Bespoke Themes AND Custom Concepts',
      desc: 'From CandyLand to Harry Potter and bespoke requests, tailored specifically to your child\'s dream.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Trust on Grand Cayman's Slumber</span>
            </div>
            <CuteSmileyCloud size="md" className="hidden sm:inline-block mx-auto" />

          </ScrollReveal>


          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
                Why Choose Paradise Slumbers
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-[#232B25]/80 text-xs sm:text-base leading-relaxed">
              We don't just drop off tents; we deliver an all-inclusive, fairy-tale experience that delights children and lets parents relax completely.
            </p>
          </ScrollReveal>
        </div>

        {/* TWO-COLUMN LAYOUT: REDUCED IMAGE ON LEFT, NUMBERED POINTS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Compact Featured Image with Dual Bahuas Layered Borders */}
          <div className="lg:col-span-5 relative group max-w-md mx-auto lg:max-w-none w-full">
            <ScrollReveal animation="scale-in" delay={150}>
              <div className="relative">
                {/* Outer Offset Accent Border */}
                <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border-2 border-[#5A7755]/30 rounded-none pointer-events-none group-hover:border-[#5A7755]/60 transition-colors" />

                {/* Inner Bordered Image Box */}
                <div className="relative rounded-none overflow-hidden border-2 border-[#5A7755] shadow-[0_15px_30px_rgba(35,49,34,0.15)] aspect-[4/3] bg-white/95">
                  <img
                    src="/assets/aistudio/why.jpeg"
                    alt="Paradise Slumbers Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/90 px-2.5 py-0.5 rounded-none text-[#384C37]">
                      Grand Cayman Luxury
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mt-1">
                      Magical Slumber Parties
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Numbered List Points */}
          <div className="lg:col-span-7 space-y-4">
            {featuresList.map((item, index) => (
              <ScrollReveal key={item.number} animation="slide-right" delay={100 + index * 80}>
                <div
                  className="bg-white/95 backdrop-blur-sm rounded-none p-4 sm:p-5 border-2 border-[#5A7755]/20 hover:border-[#5A7755]/60 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                >
                  {/* Number Badge (Squared) */}
                  <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-[#5A7755] text-white flex items-center justify-center font-black text-xs sm:text-base shadow-sm group-hover:bg-[#384C37] transition-colors">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="space-y-0.5">
                    <h3 className="font-sans text-sm sm:text-base font-black text-[#384C37] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#232B25]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Professional Action Bar */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 ml-auto">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-xl bg-white/90 hover:bg-white text-[#5A7755] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#5A7755]/20 shadow-xs backdrop-blur-sm"
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
        </ScrollReveal>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;