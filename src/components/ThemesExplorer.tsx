import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { THEMES_DATA } from '../data/mockData';
import { CategoryTabsSlider } from './CategoryTabsSlider';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface ThemesExplorerProps {
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  onToggleWishlist?: (id: string) => void;
  savedWishlistIds?: string[];
}

export const ThemesExplorer: React.FC<ThemesExplorerProps> = ({
  onOpenBooking,
  onToggleWishlist,
  savedWishlistIds = [],
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All 10 Themes' },
    { id: 'Fantasy & Magic', label: 'Fantasy & Magic' },
    { id: 'Adventure & Gaming', label: 'Adventure & Gaming' },
    { id: 'Movies & Whimsy', label: 'Movies & Whimsy' },
    { id: 'Custom', label: 'Bespoke Custom' },
  ];

  const filteredThemes = activeCategory === 'all'
    ? THEMES_DATA
    : THEMES_DATA.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
    <section id="themes" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-transparent border-b border-[#5A7755]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
            <span>10 Bespoke Slumber Themes</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Themes &amp; Styling Collections
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            Choose from any of the following themes. If you have a theme in mind you don't see here, we can create it!
          </p>
        </div>

        {/* RESPONSIVE CATEGORY TABS SLIDER */}
        <div className="mb-6">
          <CategoryTabsSlider
            tabs={categories}
            activeTab={activeCategory}
            onChange={(id) => setActiveCategory(id)}
          />
        </div>

        {/* HORIZONTAL THEMES SLIDER (Swipe text removed completely as requested!) */}
        <div className="relative mb-12">
          <div className="flex items-center justify-end mb-3 px-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider('left')}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/30 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider('right')}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/30 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {filteredThemes.map((theme) => {
              const saved = isSaved(theme.id);
              return (
                <div
                  key={theme.id}
                  onClick={() => onOpenBooking(undefined, theme.id)}
                  className="min-w-[260px] sm:min-w-[290px] max-w-[290px] snap-start bento-card bg-white rounded-2xl p-4 border border-[#5A7755]/20 hover:border-[#C78D95] transition-all cursor-pointer flex flex-col justify-between group relative"
                >
                  {/* Wishlist Heart Icon Button */}
                  <button
                    type="button"
                    onClick={(e) => handleHeartClick(e, theme.id)}
                    className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs transition-transform active:scale-90"
                    title={saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  </button>

                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-3 bg-[#FAF7F4]">
                      <img
                        src={theme.image}
                        alt={theme.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-2 bg-[#5A7755]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {theme.category}
                      </span>
                    </div>

                    <h4 className="font-sans font-black text-sm text-[#384C37] mb-1">
                      {theme.title}
                    </h4>

                    {/* Decor items pills (No color palettes) */}
                    <div className="flex flex-wrap gap-1 my-2">
                      {theme.decorElements.slice(0, 2).map((d, i) => (
                        <span key={i} className="text-[10px] bg-[#FAF7F4] text-[#232B25]/75 px-2 py-0.5 rounded-md border border-[#5A7755]/15">
                          {d}
                        </span>
                      ))}
                    </div>

                    <p className="text-[11px] text-[#232B25]/70 line-clamp-2">
                      {theme.popularFor}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#5A7755]/15 flex items-center justify-between text-xs font-bold text-[#5A7755]">
                    <span>Book Theme in Form</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5A7755]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            AUTHENTIC BENTO GRID FOR THEMES:
            Rich kids glamping setup photography, dark sage headings,
            NO color palette dots, direct booking into contact form!
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
          
          {/* Card 1: Large Featured Theme (CandyLand or First Filtered) */}
          {filteredThemes[0] && (
            <div
              onClick={() => onOpenBooking(undefined, filteredThemes[0].id)}
              className="md:col-span-2 lg:col-span-2 md:row-span-2 bento-card group relative rounded-3xl overflow-hidden border border-[#5A7755]/25 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px] p-6 sm:p-8"
            >
              <img
                src={filteredThemes[0].image}
                alt={filteredThemes[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Wishlist Button */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-[#B06F78] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {filteredThemes[0].category}
                </span>

                <button
                  type="button"
                  onClick={(e) => handleHeartClick(e, filteredThemes[0].id)}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs transition-transform active:scale-90"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isSaved(filteredThemes[0].id) ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                </button>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 text-white space-y-2 mt-auto pt-16">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E8C5C8]">
                  Signature Styling Theme
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-black text-white leading-tight">
                  {filteredThemes[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-2">
                  {filteredThemes[0].popularFor}
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(undefined, filteredThemes[0].id);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white text-[#384C37] hover:bg-[#FAF7F4] font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>Book This Theme</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#384C37]" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Cards 2 to 5 in Bento Grid */}
          {filteredThemes.slice(1, 5).map((theme) => {
            const saved = isSaved(theme.id);
            return (
              <div
                key={theme.id}
                onClick={() => onOpenBooking(undefined, theme.id)}
                className="bento-card group bg-white rounded-3xl p-5 border border-[#5A7755]/20 hover:border-[#C78D95] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between relative"
              >
                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={(e) => handleHeartClick(e, theme.id)}
                  className="absolute top-7 right-7 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs transition-transform active:scale-90"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                </button>

                <div>
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-3 bg-[#FAF7F4]">
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#5A7755]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      {theme.category}
                    </span>
                  </div>

                  <h4 className="font-sans text-base font-black text-[#384C37] mb-1">
                    {theme.title}
                  </h4>

                  <p className="text-xs text-[#232B25]/75 line-clamp-2 leading-relaxed">
                    {theme.popularFor}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#5A7755]/15 flex items-center justify-between text-xs font-bold text-[#5A7755]">
                  <span>Select in Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5A7755]" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
