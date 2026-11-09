import React from 'react';
import { X, Heart, Trash2, ArrowRight, Camera } from 'lucide-react';
import { THEMES_DATA, SERVICES_DATA } from '../data/mockData';
import { ALL_55_GALLERY_PHOTOS } from '../data/galleryData';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: string[];
  onRemoveItem: (id: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  // Resolve saved items from Gallery Photos (55 photos), Themes, or Services
  const resolvedItems = savedItems.map((id) => {
    // 1. Check Gallery Photos
    const photo = ALL_55_GALLERY_PHOTOS.find((p) => p.id === id);
    if (photo) {
      return {
        id: photo.id,
        title: photo.caption,
        category: 'Gallery Photo',
        image: photo.image,
        subtitle: `${photo.themeTitle} • ${photo.location}`,
        themeId: photo.themeId,
        serviceId: undefined,
      };
    }

    // 2. Check Themes
    const theme = THEMES_DATA.find((t) => t.id === id);
    if (theme) {
      return {
        id: theme.id,
        title: theme.title,
        category: 'Theme',
        image: theme.image,
        subtitle: theme.category,
        themeId: theme.id,
        serviceId: undefined,
      };
    }

    // 3. Check Services
    const service = SERVICES_DATA.find((s) => s.id === id);
    if (service) {
      return {
        id: service.id,
        title: service.title,
        category: 'Package',
        image: service.image,
        subtitle: `From $${service.priceStartingAt} CI`,
        themeId: undefined,
        serviceId: service.id,
      };
    }

    return null;
  }).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* SUPER FIXED MODAL CONTAINER */}
      <div className="relative z-10 max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#5A7755]/20 my-auto max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="p-5 bg-[#FAF7F4] border-b border-[#5A7755]/15 text-[#232B25] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#C78D95] text-white flex items-center justify-center shadow-xs">
              <Heart className="w-4 h-4 fill-white text-white" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-black text-[#232B25]">Your Saved Wishlist</h3>
              <p className="text-xs text-[#5A7755] font-semibold">{resolvedItems.length} favorites saved in Grand Cayman</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#EFF4EE] text-[#232B25] flex items-center justify-center transition-colors cursor-pointer border border-[#5A7755]/20"
            aria-label="Close wishlist"
          >
            <X className="w-4 h-4 text-[#232B25]" />
          </button>
        </div>

        {/* List of items */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {resolvedItems.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#FAF7F4] border border-[#5A7755]/20 text-[#C78D95] flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-sans text-base font-black text-[#232B25]">Your Wishlist is Empty</h4>
              <p className="text-xs text-[#232B25]/70 max-w-xs mx-auto">
                Click the heart icon on any photo in the gallery or theme card to save it here. It will stay saved even after refreshing or leaving!
              </p>
            </div>
          ) : (
            resolvedItems.map((item) => (
              <div
                key={item!.id}
                className="flex items-center gap-3 p-3 rounded-2xl border border-[#5A7755]/15 bg-[#FAF7F4] hover:bg-white transition-all shadow-2xs"
              >
                <img
                  src={item!.image}
                  alt={item!.title}
                  className="w-16 h-16 rounded-xl object-cover border border-[#5A7755]/20 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C78D95] block">
                    {item!.category}
                  </span>
                  <h4 className="font-sans font-bold text-xs text-[#232B25] truncate">
                    {item!.title}
                  </h4>
                  <p className="text-[11px] text-[#232B25]/70 truncate">
                    {item!.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenBooking(item!.serviceId, item!.themeId);
                    }}
                    className="p-2 rounded-xl bg-[#5A7755] text-white hover:bg-[#384C37] transition-colors cursor-pointer shadow-xs"
                    title="Book now"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item!.id)}
                    className="p-2 rounded-xl bg-white hover:bg-red-50 text-[#232B25] hover:text-red-600 border border-[#5A7755]/20 transition-colors cursor-pointer"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {resolvedItems.length > 0 && (
          <div className="p-4 border-t border-[#5A7755]/15 bg-[#FAF7F4] shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-sm"
            >
              Book Selected Setup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
