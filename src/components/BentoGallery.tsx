import React, { useState, useRef } from 'react';
import { Camera, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { ALL_55_GALLERY_PHOTOS } from '../data/galleryData';
import { CategoryTabsSlider } from './CategoryTabsSlider';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface BentoGalleryProps {
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  onNavigate?: (view: string) => void;
  isDedicatedPage?: boolean;
  onToggleWishlist?: (id: string) => void;
  savedWishlistIds?: string[];
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Photos' },
  { id: 'candyland', label: 'CandyLand' },
  { id: 'unicorns', label: 'Unicorns' },
  { id: 'fortnite', label: 'Fortnite' },
  { id: 'frozen', label: 'Frozen' },
  { id: 'harry-potter', label: 'Harry Potter' },
  { id: 'pirates', label: 'Pirates' },
  { id: 'glow-party', label: 'Glow Party' },
  { id: 'enchanted-forest', label: 'Enchanted Forest' },
  { id: 'custom-tents', label: 'Custom Tents' },
  { id: 'interior-design', label: 'Interior Design' },
  { id: 'extras', label: 'Magical Extras' },
];

export const BentoGallery: React.FC<BentoGalleryProps> = ({
  onOpenBooking,
  onNavigate,
  isDedicatedPage = false,
  onToggleWishlist,
  savedWishlistIds = [],
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = activeFilter === 'all'
    ? ALL_55_GALLERY_PHOTOS
    : ALL_55_GALLERY_PHOTOS.filter((p) => p.themeId === activeFilter);

  const displayedPhotos = isDedicatedPage ? filteredPhotos : filteredPhotos.slice(0, 6);

  const handleHeartClick = (e: React.MouseEvent, photoId: string) => {
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(photoId);
    } else {
      try {
        const saved = JSON.parse(localStorage.getItem('paradise_slumbers_wishlist') || '[]');
        const updated = saved.includes(photoId)
          ? saved.filter((id: string) => id !== photoId)
          : [...saved, photoId];
        localStorage.setItem('paradise_slumbers_wishlist', JSON.stringify(updated));
        window.dispatchEvent(new Event('storage'));
      } catch {}
    }
  };

  const isSaved = (photoId: string) => {
    if (savedWishlistIds.length > 0) return savedWishlistIds.includes(photoId);
    try {
      const saved = JSON.parse(localStorage.getItem('paradise_slumbers_wishlist') || '[]');
      return saved.includes(photoId);
    } catch {
      return false;
    }
  };

  const tabOptions = CATEGORY_TABS.map((t) => ({
    id: t.id,
    label: t.label,
    count: t.id === 'all'
      ? ALL_55_GALLERY_PHOTOS.length
      : ALL_55_GALLERY_PHOTOS.filter((p) => p.themeId === t.id).length,
  }));

  return (
    <section 
      id="gallery" 
      className={`pt-24 sm:pt-28 py-12 sm:py-16 scroll-mt-28 relative z-10 border-b font-sans select-none transition-colors duration-300 ${
        isDedicatedPage 
          ? 'bg-white text-[#232B25] border-[#5A7755]/20' 
          : 'bg-[#5A7755] text-white border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 border text-xs font-bold uppercase tracking-widest shadow-sm ${
            isDedicatedPage 
              ? 'bg-[#C78D95]/15 border-[#C78D95]/30 text-[#B06F78]' 
              : 'bg-white/20 border-white/30 text-white'
          }`}>
            <Heart className={`w-3.5 h-3.5 ${isDedicatedPage ? 'fill-[#C78D95]' : 'fill-white text-white'}`} />
            <span>Grand Cayman's Slumber Top Picks</span>
          </div>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <h2 className={`font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
              isDedicatedPage ? 'text-[#384C37]' : 'text-white'
            }`}>
              {isDedicatedPage
                ? `Photo Gallery`
                : 'Sleepover Setup Showcase'}
            </h2>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDedicatedPage ? 'text-[#232B25]/80' : 'text-white/90'
          }`}>
            {isDedicatedPage
              ? 'Browse our complete catalog of authentic sleepovers, themed teepees, custom timber A-frames, and bedroom makeovers.'
              : 'Authentic Cayman slumber setups photographed on island.'}
          </p>
        </div>

        {/* Responsive Tabs Slider on dedicated page */}
        {isDedicatedPage && (
          <div className="mb-8 bg-[#FBF9F6] p-2 rounded-2xl border border-[#5A7755]/25 shadow-sm">
            <CategoryTabsSlider
              tabs={tabOptions}
              activeTab={activeFilter}
              onChange={(id) => setActiveFilter(id)}
            />
          </div>
        )}

        {/* ========================================================
            EDITABLE TEXT CARDS GRID (Replacing Image Assets)
            ======================================================== */}
        {!isDedicatedPage ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPhotos.map((photo, index) => {
              const saved = isSaved(photo.id);
              return (
                <div
                  key={photo.id}
                  className="relative rounded-2xl overflow-hidden bg-[#FAF7F4] border-4 border-white shadow-xl aspect-[4/3] p-6 flex flex-col justify-between group hover:border-[#C78D95]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5A7755]/10 text-[#384C37] text-[11px] font-extrabold uppercase tracking-wider border border-[#5A7755]/20">
                      <Sparkles className="w-3 h-3 text-[#5A7755]" />
                      <span>Setup #{index + 1}</span>
                    </span>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, photo.id)}
                      className="w-9 h-9 rounded-full bg-white text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer border border-neutral-200"
                      title={saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>

                  {/* Editable Text Content */}
                  <div className="space-y-2 text-center my-auto">
                    <h3 className="font-sans font-black text-lg sm:text-xl text-[#384C37] uppercase tracking-tight">
                      {photo.themeId ? photo.themeId.replace('-', ' ') : 'Luxury Slumber Theme'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#232B25]/80 font-medium leading-relaxed px-2">
                      {photo.caption || 'Custom teepees, fairy lights, and magical styling tailored across Grand Cayman.'}
                    </p>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      [ Text Placeholder Card ]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPhotos.map((photo, index) => {
              const saved = isSaved(photo.id);
              return (
                <div
                  key={photo.id}
                  className="relative rounded-2xl overflow-hidden bg-[#FAF7F4] border-4 border-[#5A7755] shadow-xl aspect-[4/3] p-6 flex flex-col justify-between group hover:border-[#C78D95] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5A7755]/15 text-[#384C37] text-[11px] font-extrabold uppercase tracking-wider border border-[#5A7755]/30">
                      <Sparkles className="w-3 h-3 text-[#5A7755]" />
                      <span>Setup #{index + 1}</span>
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, photo.id)}
                      className="w-9 h-9 rounded-full bg-white text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer border border-[#5A7755]/30"
                    >
                      <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>

                  <div className="space-y-2 text-center my-auto">
                    <h3 className="font-sans font-black text-lg sm:text-xl text-[#384C37] uppercase tracking-tight">
                      {photo.themeId ? photo.themeId.replace('-', ' ') : 'Luxury Slumber Theme'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#232B25]/80 font-medium leading-relaxed px-2">
                      {photo.caption || 'Custom teepees, fairy lights, and magical styling tailored across Grand Cayman.'}
                    </p>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      [ Text Placeholder Card ]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Full Gallery Button on Homepage */}
        {!isDedicatedPage && onNavigate && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F4] text-[#384C37] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer border-2 border-white"
            >
              <Camera className="w-4 h-4 text-[#5A7755]" />
              <span>View Full Gallery Pictures</span>
              <ArrowRight className="w-4 h-4 text-[#5A7755]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default BentoGallery;