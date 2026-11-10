import React, { useState } from 'react';
import { Heart, MapPin, Sparkles, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';

interface PortfolioShowcaseProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject>(PORTFOLIO_PROJECTS[0]);
  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === selectedProject.id);

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : PORTFOLIO_PROJECTS.length - 1;
    setSelectedProject(PORTFOLIO_PROJECTS[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < PORTFOLIO_PROJECTS.length - 1 ? currentIndex + 1 : 0;
    setSelectedProject(PORTFOLIO_PROJECTS[nextIndex]);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 relative z-10 bg-white border-b border-[#5A7755]/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5  bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
                      <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
                      <span>Grand Cayman's Slumber Themes Collection</span>
                    </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#232B25] tracking-tight">
            Featured Island Celebrations
          </h2>
          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            Take a closer look at how we transform living rooms and bedrooms into magical luxury slumber retreats.
          </p>
        </div>

        {/* Featured Case Study Container */}
        <div className="bento-card bg-[#FAF7F4] rounded-3xl p-6 sm:p-10 border border-[#5A7755]/20 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden bg-white shadow-xs border border-[#5A7755]/15">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#5A7755] text-white text-xs font-bold px-3 py-1  uppercase shadow-xs">
                {selectedProject.theme}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C78D95] block mb-1">
                  {selectedProject.service}
                </span>
                <h3 className="font-sans text-2xl font-black text-[#232B25] leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#232B25]/70 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#5A7755]" />
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>{selectedProject.guestCount} Guests</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#232B25]/80 leading-relaxed font-normal">
                {selectedProject.story}
              </p>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-white border border-[#5A7755]/15 text-xs italic text-[#232B25]/85 shadow-2xs">
                "{selectedProject.quote}"
                <span className="block font-bold text-[#5A7755] not-italic mt-1.5">
                  • {selectedProject.client}
                </span>
              </div>

              {/* Highlights */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#232B25] block mb-2">
                  Memoir Highlights:
                </span>
                <div className="space-y-1.5">
                  {selectedProject.decorHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#232B25]">
                      <span className="w-2 h-2  bg-[#C78D95] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#5A7755]/15">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous memoir"
                    className="w-9 h-9  bg-white hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/25 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next memoir"
                    className="w-9 h-9  bg-white hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/25 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-[#232B25]/60 ml-2 font-mono">
                    {currentIndex + 1} of {PORTFOLIO_PROJECTS.length}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-2.5  bg-[#5A7755] text-white hover:bg-[#384C37] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Book Setup
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
