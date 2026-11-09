import React, { useState, useEffect, useRef } from 'react';
import { Camera, MapPin, ArrowRight, ChevronLeft, ChevronRight, Heart, Home, X, Maximize2 } from 'lucide-react';
import { ALL_55_GALLERY_PHOTOS, TOTAL_GALLERY_PICTURES } from '../data/galleryData';
import { ThemeGalleryPhoto } from '../types';
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
  { id: 'all', label: 'All 55 Photos' },
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = activeFilter === 'all'
    ? ALL_55_GALLERY_PHOTOS
    : ALL_55_GALLERY_PHOTOS.filter((p) => p.themeId === activeFilter);

  // Exact client requirement: "show just 4 images in gallery section on homepage rest should be on his dedicated page"
  const displayedPhotos = isDedicatedPage ? filteredPhotos : filteredPhotos.slice(0, 4);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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

  // Keyboard navigation for Full Image Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : displayedPhotos.length - 1
        );
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null && prev < displayedPhotos.length - 1 ? prev + 1 : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayedPhotos]);

  const activePhoto = lightboxIndex !== null ? displayedPhotos[lightboxIndex] : null;

  const tabOptions = CATEGORY_TABS.map((t) => ({
    id: t.id,
    label: t.label,
    count: t.id === 'all'
      ? ALL_55_GALLERY_PHOTOS.length
      : ALL_55_GALLERY_PHOTOS.filter((p) => p.themeId === t.id).length,
  }));

  return (
    <section id="gallery" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-white border-b border-[#5A7755]/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb if on dedicated page */}
        {isDedicatedPage && onNavigate && (
          <div className="mb-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A7755] bg-[#FAF7F4] hover:bg-[#EFF4EE] transition-colors cursor-pointer px-4 py-2 rounded-full border border-[#5A7755]/20 shadow-xs"
            >
              <Home className="w-3.5 h-3.5 text-[#5A7755]" />
              <span>← Back to Home</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A7755]/15 border border-[#5A7755]/30 text-[#5A7755] text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-[#5A7755]" />
            <span>Grand Cayman Gallery</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
            <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              {isDedicatedPage
                ? `Complete Photo Gallery (${TOTAL_GALLERY_PICTURES} Pictures)`
                : 'Sleepover Setup Showcase'}
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            {isDedicatedPage
              ? 'Browse our complete catalog of 55 authentic sleepovers, themed teepees, custom timber A-frames, and bedroom makeovers. Click any image to view in full screen.'
              : 'Authentic Cayman slumber setups photographed on island. Click any image for full-screen view or to select in booking form.'}
          </p>
        </div>

        {/* Responsive Tabs Slider on dedicated page */}
        {isDedicatedPage && (
          <div className="mb-6">
            <CategoryTabsSlider
              tabs={tabOptions}
              activeTab={activeFilter}
              onChange={(id) => setActiveFilter(id)}
            />
          </div>
        )}

        {/* HORIZONTAL SLIDER ON DEDICATED PAGE (No swipe text as requested!) */}
        {isDedicatedPage && (
          <div className="relative mb-10">
            <div className="flex items-center justify-end mb-3 px-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollSlider('left')}
                  className="w-8 h-8 rounded-full bg-[#FAF7F4] hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/30 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider('right')}
                  className="w-8 h-8 rounded-full bg-[#FAF7F4] hover:bg-[#EFF4EE] text-[#5A7755] border border-[#5A7755]/30 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory no-scrollbar"
            >
              {filteredPhotos.map((photo, index) => {
                const saved = isSaved(photo.id);
                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(index)}
                    className="min-w-[210px] sm:min-w-[250px] max-w-[250px] snap-start relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF7F4] border border-[#5A7755]/20 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
                  >
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 p-3 flex flex-col justify-end text-white">
                      <span className="text-[9px] uppercase font-bold text-[#E8C5C8]">{photo.themeTitle}</span>
                      <p className="text-[11px] font-bold line-clamp-1">{photo.caption}</p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, photo.id)}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs transition-transform active:scale-90"
                      title={saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            HOMEPAGE VIEW: SHOW EXACTLY 4 IMAGES IN BENTO GRID
            Clicking image opens FULL-SCREEN LIGHTBOX!
            ======================================================== */}
        {!isDedicatedPage ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* Card 1: Large Featured (Span 2 cols on md/lg, span 2 rows) */}
            {displayedPhotos[0] && (
              <div
                onClick={() => setLightboxIndex(0)}
                className="md:col-span-2 md:row-span-2 bento-card group relative rounded-3xl overflow-hidden border border-[#5A7755]/20 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[360px] sm:min-h-[420px] p-6 sm:p-7"
              >
                <img
                  src={displayedPhotos[0].image}
                  alt={displayedPhotos[0].caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-[#5A7755] text-white text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {displayedPhotos[0].themeTitle}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, displayedPhotos[0].id)}
                      className="w-8 h-8 rounded-full bg-white/95 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-sm"
                    >
                      <Heart className={`w-4 h-4 ${isSaved(displayedPhotos[0].id) ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>
                </div>

                <div className="relative z-10 text-white space-y-2 mt-auto pt-16">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#E8C5C8]">
                    Featured Setup • Grand Cayman
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-black text-white">
                    {displayedPhotos[0].caption}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/80">
                    <MapPin className="w-3.5 h-3.5 text-[#E8C5C8]" />
                    <span>{displayedPhotos[0].location}</span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <span className="text-xs text-white/90 underline font-semibold flex items-center gap-1">
                      <span>Click to View Full Photo</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Cards 2, 3, 4 (Right Column / Grid) */}
            <div className="flex flex-col gap-5">
              {displayedPhotos.slice(1, 4).map((photo, idx) => {
                const saved = isSaved(photo.id);
                const actualIndex = idx + 1;
                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(actualIndex)}
                    className="bento-card group relative rounded-2xl overflow-hidden border border-[#5A7755]/20 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-end p-4 min-h-[160px] sm:min-h-[175px]"
                  >
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center">
                        <Maximize2 className="w-3 h-3" />
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleHeartClick(e, photo.id)}
                        className="w-7 h-7 rounded-full bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs"
                      >
                        <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                      </button>
                    </div>

                    <div className="relative z-10 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8C5C8] block">
                        {photo.themeTitle}
                      </span>
                      <h4 className="font-sans text-xs sm:text-sm font-bold text-white line-clamp-1 mt-0.5">
                        {photo.caption}
                      </h4>
                      <span className="text-[10px] text-white/70 block mt-0.5">
                        {photo.location}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          /* DEDICATED GALLERY PAGE: All 55 photos in Bento Grid, clicking opens Lightbox */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedPhotos.map((photo, index) => {
              const saved = isSaved(photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="bento-card group relative rounded-2xl overflow-hidden border border-[#5A7755]/20 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-end p-5 min-h-[260px]"
                >
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="bg-[#5A7755] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {photo.themeTitle}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleHeartClick(e, photo.id)}
                        className="w-8 h-8 rounded-full bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs"
                      >
                        <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                      </button>
                    </div>
                  </div>

                  <div className="relative z-10 text-white mt-auto">
                    <h4 className="font-sans text-sm font-bold text-white line-clamp-2">
                      {photo.caption}
                    </h4>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-xs">
                      <span className="text-[11px] text-[#E8C5C8]">{photo.location}</span>
                      <span className="text-white font-bold flex items-center gap-1">
                        View Full Screen →
                      </span>
                    </div>
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
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Camera className="w-4 h-4 text-[#E8C5C8]" />
              <span>View Full Gallery ({TOTAL_GALLERY_PICTURES} Pictures)</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        )}

      </div>

      {/* ========================================================
          FULL-SCREEN IMAGE LIGHTBOX MODAL (On-click option requested!)
          ======================================================== */}
      {activePhoto && lightboxIndex !== null && (
        <div className="fixed inset-0 z-[10000] overflow-y-auto bg-black/92 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
          <div
            className="fixed inset-0 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close backdrop"
          />

          {/* Prominent Fixed Close (X) Icon */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Full Image"
            title="Close (Esc)"
            className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[10002] w-12 h-12 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl border-2 border-white/50 hover:scale-105 active:scale-95"
          >
            <X className="w-6 h-6 text-white stroke-[2.5]" />
          </button>

          {/* Modal Container */}
          <div className="relative z-[10001] max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center my-auto pointer-events-auto">
            
            {/* Top Bar with Counter */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#5A7755] text-white px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs">
                  {lightboxIndex + 1} / {displayedPhotos.length}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8C5C8]">
                  {activePhoto.themeTitle}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>

            {/* Photo Viewport with Chevrons */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-[#5A7755]/30 shadow-2xl">
              <img
                src={activePhoto.image}
                alt={activePhoto.caption}
                className="max-h-[64vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : displayedPhotos.length - 1
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5A7755]/90 hover:bg-[#5A7755] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/30 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null && prev < displayedPhotos.length - 1 ? prev + 1 : 0
                  );
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5A7755]/90 hover:bg-[#5A7755] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/30 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div className="w-full mt-3 p-4 rounded-2xl bg-[#FAF7F4] border border-[#5A7755]/25 text-[#232B25] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
              <div>
                <h4 className="font-sans text-sm sm:text-base font-black text-[#384C37]">
                  {activePhoto.caption}
                </h4>
                <div className="flex items-center gap-3 text-xs text-[#232B25]/75 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#5A7755]" />
                    {activePhoto.location}
                  </span>
                  <span>•</span>
                  <span className="text-[#C78D95] font-bold">{activePhoto.tag}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={(e) => handleHeartClick(e, activePhoto.id)}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-[#232B25] bg-white hover:bg-[#EFF4EE] border border-[#5A7755]/30 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved(activePhoto.id) ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  <span>{isSaved(activePhoto.id) ? 'Saved' : 'Wishlist'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const tid = activePhoto.themeId;
                    setLightboxIndex(null);
                    onOpenBooking(undefined, tid);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book This Look</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
