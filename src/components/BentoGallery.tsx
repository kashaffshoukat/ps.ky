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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = activeFilter === 'all'
    ? ALL_55_GALLERY_PHOTOS
    : ALL_55_GALLERY_PHOTOS.filter((p) => p.themeId === activeFilter);

  // Exact client requirement: show 6 images on homepage, rest on dedicated page
  const displayedPhotos = isDedicatedPage ? filteredPhotos : filteredPhotos.slice(0, 6);

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
    <section id="gallery" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-white border-b border-[#5A7755]/15 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5  bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Slumber Top Picks</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
            <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              {isDedicatedPage
                ? `Photo Gallery `
                : 'Sleepover Setup Showcase'}
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            {isDedicatedPage
              ? 'Browse our complete catalog of 55 authentic sleepovers, themed teepees, custom timber A-frames, and bedroom makeovers. Click any image to view in full screen.'
              : 'Authentic Cayman slumber setups photographed on island. Hover over any image and click to view full screen.'}
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

        {/* ========================================================
            HOMEPAGE VIEW: 2 IMAGES PER LINE (6 IMAGES TOTAL)
            NO TEXT ON IMAGES, HOVER SHOWS "Click to view full image"
            ======================================================== */}
        {!isDedicatedPage ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {displayedPhotos.map((photo, index) => {
              const saved = isSaved(photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="relative rounded-none overflow-hidden border-2 border-[#5A7755]/20 shadow-sm hover:shadow-lg transition-all cursor-pointer group aspect-[4/3] bg-neutral-100"
                >
                  {/* Clean Image with NO text overlays */}
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxxkpXuihisQC8NqNMjWBL9Iiq9BKCtlzpjKQG4_5Ig&s=10'
                    alt="Paradise Slumbers Setup"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={(e) => handleHeartClick(e, photo.id)}
                    className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-none bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs transition-transform active:scale-90"
                    title={saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  </button>

                  {/* Hover Overlay: Exactly as requested ("Click to view full image") */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center z-10">
                    <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#5A7755]/90 px-4 py-2 rounded-none border border-white/20 shadow-md">
                      Click to view full image
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* DEDICATED GALLERY PAGE: All photos grid with lightbox trigger */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedPhotos.map((photo, index) => {
              const saved = isSaved(photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="relative rounded-none overflow-hidden border-2 border-[#5A7755]/20 shadow-sm hover:shadow-lg transition-all cursor-pointer group aspect-[4/3] bg-neutral-100"
                >
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxxkpXuihisQC8NqNMjWBL9Iiq9BKCtlzpjKQG4_5Ig&s=10'
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <button
                    type="button"
                    onClick={(e) => handleHeartClick(e, photo.id)}
                    className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-none bg-white/90 text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-xs transition-transform active:scale-90"
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                  </button>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center z-10">
                    <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#5A7755]/90 px-4 py-2 rounded-none border border-white/20 shadow-md">
                      Click to view full image
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
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-none bg-[#5A7755] hover:bg-[#384C37] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer border border-[#5A7755]"
            >
              <Camera className="w-4 h-4 text-[#E8C5C8]" />
              <span>View Full Gallery Pictures</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        )}

      </div>

      {/* ========================================================
          FULL-SCREEN IMAGE LIGHTBOX MODAL
          ======================================================== */}
      {activePhoto && lightboxIndex !== null && (
        <div className="fixed inset-0 z-[10000] overflow-y-auto bg-black/92 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 select-none">
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
            className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[10002] w-12 h-12 rounded-none bg-[#5A7755] hover:bg-[#384C37] text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl border-2 border-white/50 hover:scale-105 active:scale-95"
          >
            <X className="w-6 h-6 text-white stroke-[2.5]" />
          </button>

          {/* Modal Container */}
          <div className="relative z-[10001] max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center my-auto pointer-events-auto">
            
            {/* Top Bar with Counter */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#5A7755] text-white px-3 py-1 rounded-none text-xs font-mono font-bold shadow-xs">
                  {lightboxIndex + 1} / {displayedPhotos.length}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8C5C8]">
                  {activePhoto.themeTitle}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/20 hover:bg-white/30 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>

            {/* Photo Viewport with Chevrons */}
            <div className="relative w-full rounded-none overflow-hidden bg-black flex items-center justify-center border border-[#5A7755]/30 shadow-2xl">
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxxkpXuihisQC8NqNMjWBL9Iiq9BKCtlzpjKQG4_5Ig&s=10'
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-none bg-[#5A7755]/90 hover:bg-[#5A7755] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/30 shadow-lg"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-none bg-[#5A7755]/90 hover:bg-[#5A7755] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/30 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div className="w-full mt-3 p-4 rounded-none bg-[#FAF7F4] border border-[#5A7755]/25 text-[#232B25] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
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
                  className="px-4 py-2.5 rounded-none text-xs font-bold text-[#232B25] bg-white hover:bg-[#EFF4EE] border border-[#5A7755]/30 flex items-center gap-1.5 cursor-pointer shadow-xs"
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
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
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