import React, { useState } from 'react';
import { X, Mail, Tag, Heart, CheckCircle2, Sparkles } from 'lucide-react';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (email: string) => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (onSubmit) {
      onSubmit(email);
    }

    // Show success view state
    setIsSubmitted(true);

    // Auto close modal after 2.5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      onClose();
    }, 2500);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div 
        className="relative flex flex-row w-full max-w-[720px] bg-white rounded-none shadow-2xl overflow-hidden border border-[#5A7755]/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-6 h-6 sm:w-7 sm:h-7 bg-white/90 hover:bg-neutral-100 text-[#232B25] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* LEFT COLUMN: Image with overlay text */}
        <div className="relative w-1/2 flex-shrink-0 bg-neutral-900 flex flex-col justify-end overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnCBeasbUXduTNeE91h1ISd8qRsKUgZiJdAy32ztqrw&s=10"
            alt="Paradise Slumbers Setup"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Bottom Overlay Info */}
          <div className="relative z-10 p-2.5 sm:p-5 space-y-1">
            <span className="inline-block px-1.5 py-0.5 bg-[#5A7755] text-white text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider rounded-none">
              VIP CLUB
            </span>
            <h3 className="text-xs sm:text-lg md:text-xl font-black text-white uppercase tracking-tight leading-snug drop-shadow-sm">
              15% OFF + POPCORN BAR
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN: Form or Success Message */}
        <div className="w-1/2 p-3 sm:p-6 md:p-8 flex flex-col justify-center bg-white">
          {isSubmitted ? (
            /* BEAUTIFUL SUCCESS MESSAGE STATE */
            <div className="space-y-2 sm:space-y-3 text-center py-2 animate-in zoom-in-95 fade-in duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#5A7755]/15 text-[#5A7755] rounded-full flex items-center justify-center mx-auto border border-[#5A7755]/30">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-extrabold text-[#B06F78] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#B06F78]" />
                  <span>Welcome To VIP Club</span>
                </div>
                <h2 className="text-sm sm:text-xl font-black text-[#232B25] uppercase tracking-tight">
                  You're On The List!
                </h2>
                <p className="text-[9px] sm:text-xs text-[#232B25]/75 leading-relaxed">
                  Your 15% discount code <strong className="text-[#384C37] underline decoration-[#5A7755]">VIPSLUMBER15</strong> has been activated.
                </p>
              </div>

            
            </div>
          ) : (
            /* STANDARD FORM STATE */
            <div className="space-y-2.5 sm:space-y-4">
              {/* Top Pink Tag */}
              <div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-[#F9ECEE] border border-[#F1D6D9] text-[#B06F78] text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                  <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#B06F78]" />
                  <span>JOIN THE VIP SLUMBER CLUB</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-0.5 sm:space-y-1">
                <h2 className="text-sm sm:text-2xl font-black text-[#232B25] tracking-tight leading-tight">
                  Subscribe & Save
                </h2>
                <p className="text-[9px] sm:text-xs text-[#232B25]/70 leading-normal sm:leading-relaxed">
                  Sign up for exclusive discounts, early theme access, and 15% off your first slumber party.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 pt-0.5 sm:pt-1">
                <div className="space-y-1">
                  <label 
                    htmlFor="promo-email" 
                    className="block text-[8px] sm:text-[11px] font-extrabold text-[#232B25] uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <input
                      type="email"
                      id="promo-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@paradiseslumbers.ky"
                      className="w-full pl-6 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2.5 bg-neutral-50/50 border border-neutral-300 rounded-none text-[10px] sm:text-xs text-[#232B25] placeholder:text-neutral-400 focus:outline-none focus:border-[#5A7755] transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 px-2 sm:px-4 bg-[#5A7755] hover:bg-[#384C37] text-white text-[9px] sm:text-xs font-black uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5 sm:gap-2 border border-[#5A7755] cursor-pointer"
                >
                  <Tag className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>GET MY 15% OFF</span>
                </button>
              </form>

              {/* Footer Opt-out Link */}
              <div className="text-center pt-0.5 sm:pt-1">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-[8px] sm:text-[11px] text-neutral-400 hover:text-neutral-600 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoModal;