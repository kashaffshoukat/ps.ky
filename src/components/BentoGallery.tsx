import React from 'react';
import { Camera, ArrowRight, Heart } from 'lucide-react';
import { ALL_55_GALLERY_PHOTOS } from '../data/galleryData';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

interface BentoGalleryProps {
  onOpenBooking?: (serviceId?: string, themeId?: string) => void;
  onNavigate?: (view: string) => void;
  isDedicatedPage?: boolean;
  onToggleWishlist?: (id: string) => void;
  savedWishlistIds?: string[];
}

export const BentoGallery: React.FC<BentoGalleryProps> = ({
  onOpenBooking,
  onNavigate,
  isDedicatedPage = false,
  onToggleWishlist,
  savedWishlistIds = [],
}) => {
  const displayedPhotos = isDedicatedPage 
    ? ALL_55_GALLERY_PHOTOS 
    : ALL_55_GALLERY_PHOTOS.slice(0, 6);

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

  return (
    <section 
      id="gallery" 
      className="pt-24 sm:pt-28 py-12 sm:py-16 scroll-mt-28 relative z-10 border-b border-[#5A7755]/20 font-sans select-none transition-colors duration-300 bg-white text-[#232B25] overflow-hidden"
    >
      {/* Animated Background Balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-10 left-[5%] w-24 h-32 rounded-full bg-gradient-to-b from-[#C78D95]/40 to-[#C78D95]/10 animate-bounce duration-1000 blur-[1px]" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-20 right-[8%] w-28 h-36 rounded-full bg-gradient-to-b from-[#C78D95]/30 to-[#C78D95]/5 animate-pulse duration-1000 blur-[1px]" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-[2%] w-16 h-20 rounded-full bg-gradient-to-b from-[#C78D95]/25 to-transparent animate-bounce blur-[1px]" style={{ animationDuration: '7s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Grand Cayman's Slumber Top Picks</span>
            </div>
            <CuteSmileyCloud size="md" className="hidden sm:inline-block mx-auto" />

          </ScrollReveal>


          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#384C37]">
                {isDedicatedPage ? 'Photo Gallery' : 'Sleepover Setup Showcase'}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-sm sm:text-base leading-relaxed text-[#232B25]/80">
              {isDedicatedPage
                ? 'Browse our complete catalog of authentic sleepovers, themed teepees, custom timber A-frames, and bedroom makeovers.'
                : 'Authentic Cayman slumber setups photographed on island.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {displayedPhotos.map((photo, index) => {
            const saved = isSaved(photo.id);
            const imageUrl = (photo as any).url || (photo as any).image || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';

            return (
              <ScrollReveal key={photo.id} animation="scale-in" delay={(index % 6) * 60}>
                <div
                  onClick={() => {
                    if (onOpenBooking) {
                      onOpenBooking(undefined, photo.themeId);
                    }
                  }}
                  className="relative rounded-lg overflow-hidden bg-white/95 backdrop-blur-sm border-2 border-white shadow-lg aspect-[4/3] flex flex-col justify-between group hover:border-[#C78D95]/50 transition-all cursor-pointer h-full"
                >
                  {/* Full Image Container */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-200">
                    <img
                      src={imageUrl}
                      alt={photo.caption || `Setup #${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Top Right Wishlist Button */}
                  <div className="relative z-10 p-3 flex items-end justify-end">
                    <button
                      type="button"
                      onClick={(e) => handleHeartClick(e, photo.id)}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#232B25] hover:text-[#C78D95] flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer border border-white/40"
                      title={saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : 'text-[#232B25]'}`} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View Full Gallery Button on Homepage */}
        {!isDedicatedPage && onNavigate && (
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mt-10 sm:mt-12 text-center">
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#384C37] hover:bg-[#C78D95] text-white hover:text-[#384C37] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer border-2 border-white group/btn"
              >
                <Camera className="w-4 h-4 text-white group-hover/btn:text-[#384C37] transition-colors" />
                <span>View Full Gallery Pictures</span>
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-[#384C37] transition-colors" />
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};

export default BentoGallery;