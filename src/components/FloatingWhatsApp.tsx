import React, { useState } from 'react';
import { X, Tag, Gift } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenPromoModal?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenPromoModal,
}) => {
  const [promoDismissed, setPromoDismissed] = useState(false);

  return (
    <>
      {/* 1. LEFT CORNER: WhatsApp Floating Action Button */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 font-sans select-none">
        <a
          href="https://wa.me/13459253217?text=Hi%20Paradise%20Slumbers!%20I%20would%20love%20to%20inquire%20about%20booking%20an%20indoor%20glamping%20slumber%20party."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border-2 border-white/40"
        >
          <svg
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
        </a>
      </div>

      {/* 2. RIGHT CORNER: 15% Off Sign-Up & Repeat Booking Popup */}
      {!promoDismissed && (
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

            {/* Repeat Booking Notice */}
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