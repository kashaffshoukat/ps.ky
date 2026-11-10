import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { THEMES_DATA } from '../data/mockData';
import { CategoryTabsSlider } from './CategoryTabsSlider';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface ThemesExplorerProps {
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  onNavigate?: (view: string) => void;
  isDedicatedPage?: boolean;
  onToggleWishlist?: (id: string) => void;
  savedWishlistIds?: string[];
}

export const ThemesExplorer: React.FC<ThemesExplorerProps> = ({
  onOpenBooking,
  onNavigate,
  isDedicatedPage = false,
  onToggleWishlist,
  savedWishlistIds = [],
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  

  const filteredThemes = activeCategory === 'all'
    ? THEMES_DATA
    : THEMES_DATA.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleHeartClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(id);
    } else {
      try {
        const saved = JSON.parse(localStorage.getItem('paradise_slumbers_wishlist') || '[]');
        const updated = saved.includes(id) ? saved.filter((i: string) => i !== id) : [...saved, id];
        localStorage.setItem('paradise_slumbers_wishlist', JSON.stringify(updated));
        window.dispatchEvent(new Event('storage'));
      } catch {}
    }
  };

  const isSaved = (id: string) => {
    if (savedWishlistIds.length > 0) return savedWishlistIds.includes(id);
    try {
      const saved = JSON.parse(localStorage.getItem('paradise_slumbers_wishlist') || '[]');
      return saved.includes(id);
    } catch {
      return false;
    }
  };

  return (
    <section id="themes" className="relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Themes Collection</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Themes &amp; Styling Collections
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/85 text-xs sm:text-base leading-relaxed">
            Click any theme setup below to book or customize your child's sleepover experience across Grand Cayman.
          </p>
        </div>

       

        {/* ALL 10 THEMES GRID - STACKING OVERLAP EFFECT ON MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-8 items-stretch pb-6">
          {filteredThemes.map((theme, index) => {
            const saved = isSaved(theme.id);

            return (
              <div
                key={theme.id}
                onClick={() => onOpenBooking(undefined, theme.id)}
                className="sticky sm:relative top-24 sm:top-0 transition-transform duration-300 ease-out cursor-pointer group my-2 bg-[#FAF7F4] sm:bg-transparent p-2 sm:p-0 border border-[#5A7755]/20 sm:border-0 shadow-lg sm:shadow-none"
                style={{
                  zIndex: index + 1,
                  marginTop: index > 0 ? '0.5rem' : '0',
                }}
              >
                {/* Outer Offset Accent Frame Border (Bauhaus Style) */}
                <div className="absolute -bottom-2 -right-2 top-2 left-2 border-2 border-[#5A7755]/40 rounded-none pointer-events-none group-hover:border-[#5A7755] transition-colors hidden sm:block" />

                {/* Main Image Box */}
                <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden border-2 border-[#5A7755] bg-neutral-100 shadow-md">
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WQgx4k6zVgh0f0S-Bz4mSGitlehDZ-rplt8HMwrKtg&s=10'
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Wishlist Heart Icon */}
                  <button
                    type="button"
                    onClick={(e) => handleHeartClick(e, theme.id)}
                    className="absolute top-3 right-3 z-30 w-8 h-8 rounded-none bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90 border border-black/10"
                    title={saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  </button>

                  {/* Corner Overlapping Badge */}
                  <div className="absolute -bottom-1 -right-1 z-20 bg-[#5A7755] text-white p-2.5 sm:p-3 shadow-2xl border-2 border-white max-w-[80%] text-left">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#E8C5C8] block leading-none mb-1">
                      {theme.category}
                    </span>
                    <h4 className="font-sans text-xs sm:text-sm font-black uppercase tracking-tight text-white line-clamp-1">
                      {theme.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ThemesExplorer;