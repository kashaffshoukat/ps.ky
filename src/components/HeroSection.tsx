import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';
import { CuteRainbow } from './CuteRainbow';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface HeroSectionProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const showcaseCards = [
    {
      id: 'indoor-teepee',
      title: 'Indoor Glamping Slumbers',
      subtitle: 'Signature Sleepovers',
      price: 'From $275 CI',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxxkpXuihisQC8NqNMjWBL9Iiq9BKCtlzpjKQG4_5Ig&s=10',
      badge: 'Most Popular',
      accent: 'border-[#5A7755]/30',
      tagBg: 'bg-[#5A7755] text-white',
    },
    {
      id: 'custom-tents',
      title: 'Custom Made Tents',
      subtitle: 'To Keep at Home',
      price: '$195 CI',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszzRSh085iUV_syt22W5yiOI9Cyf0pmgUCf70TUZYdw&s=10',
      badge: 'Permanent Decor',
      accent: 'border-[#C78D95]/30',
      tagBg: 'bg-[#C78D95] text-white',
    },
    {
      id: 'interior-design',
      title: 'Kids Interior Design',
      subtitle: 'By Candice Hall',
      price: 'Free Consult',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyk4oHjM4L1CqCKZlik4vlHgR6pvjos_fukDfnxxo81Q&s=10',
      badge: 'Room Makeovers',
      accent: 'border-[#C5A059]/30',
      tagBg: 'bg-[#C5A059] text-white',
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-[#5A7755]/15 bg-transparent">
      
      {/* Decorative Floating Smiley Clouds in Corners */}
      <div className="absolute top-4 left-6 hidden lg:block opacity-85">
        <CuteSmileyCloud size="md" />
      </div>
      <div className="absolute top-8 right-8 hidden lg:block opacity-85">
        <CuteSmileyCloud size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between space-y-10 sm:space-y-12">
        
        {/* CENTERED DISPLAY HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          {/* Eye-Catching Cute Rainbow with Smiling Clouds at Both Ends */}
          <div className="flex justify-center -mb-2">
            <CuteRainbow size="md" />
          </div>

          {/* Badge */}
          {/* Heading in Dark Sage Green (User requested dark sage green instead of black) */}
          <h1 className="font-sans text-4xl sm:text-4xl lg:text-4xl font-black tracking-tight text-[#384C37] leading-[1.12]">
            Creating Magical Memories for Kids Across Grand Cayman
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#232B25]/85 leading-relaxed max-w-2xl mx-auto font-medium">
            Bespoke indoor A-frame glamping sleepovers, custom made bedroom tents to keep, and signature kids interior design makeovers. Fully delivered, styled, and packed away!
          </p>

          {/* Action CTAs (No modals: both link directly to Contact Form) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Book Your Slumber</span>
            </button>

            <button
              onClick={() => onNavigate('themes')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-black text-[#384C37] bg-white hover:bg-[#FDF5F6] border border-[#C78D95]/40 transition-all cursor-pointer shadow-xs hover:border-[#C78D95]"
            >
              <span>Explore 11 Themes</span>
              <ArrowRight className="w-4 h-4 text-[#C78D95]" />
            </button>
          </div>

         
        </div>

        {/* 3 CORE SHOWCASE CARDS (Bento Style with Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {showcaseCards.map((card) => (
            <div
              key={card.id}
              className="bento-card bg-white rounded-3xl p-5 border border-[#5A7755]/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#FAF7F4] mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 ${card.tagBg} text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-xs`}>
                  {card.badge}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#384C37] text-xs font-black px-3 py-1 rounded-full shadow-xs border border-[#5A7755]/15">
                  {card.price}
                </span>
              </div>

              <div className="px-1 space-y-1 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C78D95] block">
                  {card.subtitle}
                </span>
                <h3 className="font-sans text-lg font-black text-[#384C37]">
                  {card.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-[#5A7755]/15">
                <button
                  onClick={() => onOpenBooking(card.id)}
                  className="w-full py-2.5 rounded-xl bg-[#5A7755] text-white hover:bg-[#384C37] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-95"
                >
                  <span>Select Experience</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
