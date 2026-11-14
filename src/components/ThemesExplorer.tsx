import React, { useState } from 'react';
import { Heart, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { THEMES_DATA } from '../data/mockData';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

interface ThemesExplorerProps {
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  onNavigate?: (view: string, themeId?: string) => void;
  isDedicatedPage?: boolean;
  onToggleWishlist?: (id: string) => void;
  savedWishlistIds?: string[];
}

const NEW_THEME_ITEM = {
  id: 'theme-dreaming-of-unicorn',
  title: 'Dreaming of Unicorn',
  category: 'Outdoor / Special Collection',
  description: 'Magical outdoor teepee setup featuring fresh floral garlands, charming unicorn bedding, twinkling lights, and lush garden styling.',
  image: '/assets/aistudio/dreaming.jfif',
};

const COMBINED_THEMES = [NEW_THEME_ITEM, ...THEMES_DATA];

export const ThemesExplorer: React.FC<ThemesExplorerProps> = ({
  onNavigate,
  onToggleWishlist,
  savedWishlistIds = [],
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredThemes = activeCategory === 'all'
    ? COMBINED_THEMES
    : COMBINED_THEMES.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const rowOneThemes = [...filteredThemes, ...filteredThemes].slice(0, 6);
  const rowTwoThemes = [...filteredThemes].reverse().concat(filteredThemes).slice(0, 6);

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

  const handleCardClick = (themeId: string) => {
    if (onNavigate) {
      onNavigate('theme-detail', themeId);
    }
  };

  return (
    <section id="themes" className="relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans py-14 sm:py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
   {/* SECTION HEADER */}
         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 relative">
           <ScrollReveal animation="fade-up" delay={0}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
               <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
               <span>Grand Cayman's Themes Collection</span>
             </div>
               <CuteSmileyCloud size="md" className="shrink-0 mx-auto" />
 
           </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
                Themes and Styling Collections
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-[#232B25]/85 text-xs sm:text-base leading-relaxed">
              Click any theme setup below to explore details or book your child's sleepover experience across Grand Cayman.
            </p>
          </ScrollReveal>
        </div>

      </div>

      {/* MARQUEE ROW 1 */}
      <ScrollReveal animation="fade-up" delay={150}>
        <div className="relative w-full overflow-hidden py-4 group mb-8">
          <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] px-3">
            {[...rowOneThemes, ...rowOneThemes].map((theme, index) => {
              const saved = isSaved(theme.id);
              return (
                <div
                  key={`row1-${theme.id}-${index}`}
                  onClick={() => handleCardClick(theme.id)}
                  className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white/95 backdrop-blur-sm border-2 border-[#5A7755]/30 shadow-lg hover:border-[#5A7755] transition-all cursor-pointer flex flex-col rounded-lg overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-200">
                    <img
                      src={theme.image || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'}
                      alt={theme.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, theme.id)}
                      className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90"
                      title="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>

                  <div className="p-4 text-left bg-white/95 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#B06F78] block mb-1">
                        {theme.category}
                      </span>
                      <h4 className="font-sans text-base font-black uppercase tracking-tight text-[#384C37] mb-2.5">
                        {theme.title}
                      </h4>

                      {/* Sleek Tick in Circle Bullet Points */}
                      <ul className="space-y-1.5 text-xs text-[#232B25]/80">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7755] flex-shrink-0" />
                          <span>Handcrafted premium A-frame teepees</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7755] flex-shrink-0" />
                          <span>Comfy foam mattresses with fresh linens</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7755] flex-shrink-0" />
                          <span>Magical fairy lights & themed decor styling</span>
                        </li>
                      </ul>
                    </div>

                    {/* See More Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(theme.id);
                      }}
                      className="w-full py-2.5 px-4 bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-black uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2"
                    >
                        <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
                      <span>See More About Theme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* MARQUEE ROW 2 */}
      <ScrollReveal animation="fade-up" delay={250}>
        <div className="relative w-full overflow-hidden py-4 group">
          <div className="flex w-max gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] px-3">
            {[...rowTwoThemes, ...rowTwoThemes].map((theme, index) => {
              const saved = isSaved(theme.id);
              return (
                <div
                  key={`row2-${theme.id}-${index}`}
                  onClick={() => handleCardClick(theme.id)}
                  className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white/95 backdrop-blur-sm border-2 border-[#5A7755]/30 shadow-lg hover:border-[#5A7755] transition-all cursor-pointer flex flex-col rounded-lg overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-200">
                    <img
                      src={theme.image || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'}
                      alt={theme.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, theme.id)}
                      className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90"
                      title="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>

                  <div className="p-4 text-left bg-white/95 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#B06F78] block mb-1">
                        {theme.category}
                      </span>
                      <h4 className="font-sans text-base font-black uppercase tracking-tight text-[#384C37] mb-2.5">
                        {theme.title}
                      </h4>

                      {/* Sleek Tick in Circle Bullet Points */}
                      <ul className="space-y-1.5 text-xs text-[#232B25]/80">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7755] flex-shrink-0" />
                          <span>Handcrafted premium A-frame teepees</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7755] flex-shrink-0" />
                          <span>Comfy foam mattresses with fresh linens</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A7755] flex-shrink-0" />
                          <span>Magical fairy lights & themed decor styling</span>
                        </li>
                      </ul>
                    </div>

                    {/* See More Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(theme.id);
                      }}
                      className="w-full py-2.5 px-4 bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-black uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2"
                    >
                      <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
                      <span>See More About Theme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
};

export default ThemesExplorer;