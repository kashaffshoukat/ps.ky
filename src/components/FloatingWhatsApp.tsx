import React, { useState, useEffect } from 'react';
import { X, Sparkles, Tag, Gift } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenPromoModal?: () => void;
  isDismissed?: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenPromoModal,
  isDismissed = false,
}) => {
  const [promoDismissed, setPromoDismissed] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Smooth auto-close timer after 3 seconds
  useEffect(() => {
    if (promoDismissed || isDismissed) return;

    // 2.5 seconds ke baad fade-out animation start hogi
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Exact 3 seconds ke baad component completely hide ho jayega
    const hideTimer = setTimeout(() => {
      setPromoDismissed(true);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [promoDismissed, isDismissed]);

  const shouldHidePromo = promoDismissed || isDismissed;

  return (
    <>
      {/* 1. LEFT CORNER: WhatsApp Floating Action Button */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 font-sans select-none">
        {/* ... WhatsApp Button Code Agar Koi Ho ... */}
      </div>

      {/* 2. RIGHT CORNER: Special Cayman Offers Popup with Smooth 3s Auto-Close */}
      {!shouldHidePromo && (
        <div 
          className={`fixed bottom-4 right-4 z-40 max-w-[260px] sm:max-w-[320px] bg-white rounded-none p-3 sm:p-4 border-2 border-[#5A7755]/40 shadow-2xl font-sans select-none transition-all duration-500 transform ${
            isFadingOut ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0 animate-in slide-in-from-bottom-5'
          }`}
        >
          <button
            type="button"
            onClick={() => setPromoDismissed(true)}
            className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-none bg-neutral-100 hover:bg-neutral-200 text-[#232B25] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Dismiss discount popup"
          >
            <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          <div className="space-y-2 pr-3">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
              <Gift className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>Special Cayman Offers</span>
            </div>

            <div>
              <h4 className="font-sans text-xs sm:text-sm font-black text-[#384C37] uppercase tracking-tight">
                Get 20% Off Your First Party!
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#232B25]/80 leading-relaxed mt-0.5">
                Sign up now for our VIP Slumber Club and unlock instant savings.
              </p>
            </div>

            <div className="pt-1.5 border-t border-[#5A7755]/15 text-[9px] sm:text-[10px] text-[#5A7755] font-bold leading-snug">
               We love repeat bookings! Enjoy <strong className="text-[#384C37]">20% off</strong> when you book us to come back again.
            </div>

            <button
              type="button"
              onClick={() => {
                if (onOpenPromoModal) {
                  onOpenPromoModal();
                }
              }}
              className="w-full mt-1 py-2 px-2.5 rounded-none text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 border border-[#5A7755]"
            >
              <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Claim My 20% Off ➔</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;