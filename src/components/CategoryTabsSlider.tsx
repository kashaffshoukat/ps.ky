import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface TabOption {
  id: string;
  label: string;
  count?: number;
}

interface CategoryTabsSliderProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const CategoryTabsSlider: React.FC<CategoryTabsSliderProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollDistance = direction === 'left' ? -220 : 220;
      containerRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative max-w-4xl mx-auto px-1 sm:px-4 ${className}`}>
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Left Scroll Button (Always available on small screens, subtle on desktop) */}
        <button
          type="button"
          onClick={() => scroll('left')}
          className="shrink-0 w-8 h-8 rounded-full bg-white hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/25 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
          aria-label="Previous tabs"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Tabs Track: single line, no wrapping, snap scroll */}
        <div
          ref={containerRef}
          className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 px-0.5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onChange(tab.id)}
                className={`snap-start shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#5A7755] text-white border-[#5A7755] shadow-xs scale-[1.02]'
                    : 'bg-white text-[#232B25] border-[#5A7755]/20 hover:border-[#5A7755]/50 hover:bg-[#FAF7F4]'
                }`}
              >
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && (
                  <span className={`ml-1.5 text-[11px] font-normal ${isActive ? 'text-white/90' : 'text-[#5A7755]'}`}>
                    ({tab.count})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          type="button"
          onClick={() => scroll('right')}
          className="shrink-0 w-8 h-8 rounded-full bg-white hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/25 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
          aria-label="Next tabs"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
