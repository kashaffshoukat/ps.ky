import React, { useState } from 'react';
import { X, Sparkles, Tag, Gift } from 'lucide-react';
interface FloatingWhatsAppProps {
  onOpenPromoModal?: () => void;
  isDismissed?: boolean; // <-- Yeh prop add karein
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenPromoModal,
  isDismissed = false, // <-- Destructure karein
}) => {
  const [promoDismissed, setPromoDismissed] = useState(false);

  // Agar parent se isDismissed true mil jaye, ya user ne khud dismiss kiya ho
  const shouldHidePromo = promoDismissed || isDismissed;

  return (
    <>
      {/* 1. LEFT CORNER: WhatsApp Floating Action Button */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 font-sans select-none">
        {/* ... WhatsApp Button Code ... */}
      </div>

      {/* 2. RIGHT CORNER: 15% Off Sign-Up Popup */}
      {!shouldHidePromo && (
        <div className="fixed bottom-6 right-6 z-40 max-w-[280px] sm:max-w-[320px] bg-white rounded-none p-4 border-2 border-[#5A7755]/40 shadow-2xl font-sans select-none animate-in slide-in-from-bottom-5 duration-300">
          <button
            type="button"
            onClick={() => setPromoDismissed(true)}
            className="absolute top-2 right-2 w-6 h-6 rounded-none bg-neutral-100 hover:bg-neutral-200 text-[#232B25] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Dismiss discount popup"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="space-y-2.5 pr-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-[10px] font-bold uppercase tracking-wider">
              <Gift className="w-3 h-3" />
              <span>Special Cayman Offers</span>
            </div>

            <div>
              <h4 className="font-sans text-sm font-black text-[#384C37] uppercase tracking-tight">
                Get 15% Off Your First Party!
              </h4>
              <p className="text-[11px] text-[#232B25]/80 leading-relaxed mt-0.5">
                Sign up now for our VIP Slumber Club and unlock instant savings.
              </p>
            </div>

            <div className="pt-2 border-t border-[#5A7755]/15 text-[10px] text-[#5A7755] font-bold leading-snug">
               We love repeat bookings! Enjoy <strong className="text-[#384C37]">10% off</strong> when you book us to come back again.
            </div>

            <button
              type="button"
              onClick={() => {
                if (onOpenPromoModal) {
                  onOpenPromoModal();
                }
              }}
              className="w-full mt-1 py-2.5 px-3 rounded-none text-[11px] font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 border border-[#5A7755]"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Claim My 15% Off ➔</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;