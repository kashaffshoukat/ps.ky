import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { THEMES_DATA } from '../data/mockData';
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

  // Split themes into two sets of 6 for the two marquee lines
  const rowOneThemes = [...filteredThemes, ...filteredThemes].slice(0, 6);
  const rowTwoThemes = [...filteredThemes.reverse(), ...filteredThemes].slice(0, 6);

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
    <section id="themes" className="relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans py-14 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Themes Collection</span>
          </div>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Themes and Styling Collections
            </h2>
          </div>

          <p className="text-[#232B25]/85 text-xs sm:text-base leading-relaxed">
            Click any theme setup below to book or customize your child's sleepover experience across Grand Cayman.
          </p>
        </div>

      </div>

      {/* ==========================================================
          MARQUEE ROW 1 (Moving Left) - Larger Cards, Zero Space around Images
          ========================================================== */}
      <div className="relative w-full overflow-hidden py-4 group mb-8">
        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] px-3">
          {[...rowOneThemes, ...rowOneThemes].map((theme, index) => {
            const saved = isSaved(theme.id);
            return (
              <div
                key={`row1-${theme.id}-${index}`}
                onClick={() => onOpenBooking(undefined, theme.id)}
                className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white border-2 border-[#5A7755]/30 shadow-lg hover:border-[#5A7755] transition-all cursor-pointer flex flex-col rounded-none"
              >
                {/* Full-Bleed Image Box (Zero Padding/Spacing) */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-200 rounded-none">
                  <img
                    src={theme.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WQgx4k6zVgh0f0S-Bz4mSGitlehDZ-rplt8HMwrKtg&s=10'}
                    alt={theme.title}
                    className="w-full h-full object-cover rounded-none hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    type="button"
                    onClick={(e) => handleHeartClick(e, theme.id)}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-none bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90"
                    title="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  </button>
                </div>

                {/* Title & Two Lines of Description Below */}
                <div className="p-4 text-left bg-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B06F78] block mb-1">
                    {theme.category}
                  </span>
                  <h4 className="font-sans text-base font-black uppercase tracking-tight text-[#384C37] truncate">
                    {theme.title}
                  </h4>
                  <p className="text-xs text-[#232B25]/80 mt-1.5 line-clamp-2 leading-relaxed">
                    {theme.description || 'Transform any room into a magical wonderland with our signature handcrafted teepees and fairy lights.'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==========================================================
          MARQUEE ROW 2 (Moving Right) - Larger Cards, Zero Space around Images
          ========================================================== */}
      <div className="relative w-full overflow-hidden py-4 group">
        <div className="flex w-max gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] px-3">
          {[...rowTwoThemes, ...rowTwoThemes].map((theme, index) => {
            const saved = isSaved(theme.id);
            return (
              <div
                key={`row2-${theme.id}-${index}`}
                onClick={() => onOpenBooking(undefined, theme.id)}
                className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white border-2 border-[#5A7755]/30 shadow-lg hover:border-[#5A7755] transition-all cursor-pointer flex flex-col rounded-none"
              >
                {/* Full-Bleed Image Box (Zero Padding/Spacing) */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-200 rounded-none">
                  <img
                    src={theme.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WQgx4k6zVgh0f0S-Bz4mSGitlehDZ-rplt8HMwrKtg&s=10'}
                    alt={theme.title}
                    className="w-full h-full object-cover rounded-none hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    type="button"
                    onClick={(e) => handleHeartClick(e, theme.id)}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-none bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90"
                    title="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  </button>
                </div>

                {/* Title & Two Lines of Description Below */}
                <div className="p-4 text-left bg-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B06F78] block mb-1">
                    {theme.category}
                  </span>
                  <h4 className="font-sans text-base font-black uppercase tracking-tight text-[#384C37] truncate">
                    {theme.title}
                  </h4>
                  <p className="text-xs text-[#232B25]/80 mt-1.5 line-clamp-2 leading-relaxed">
                    {theme.description || 'Transform any room into a magical wonderland with our signature handcrafted teepees and fairy lights.'}
                  </p>
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