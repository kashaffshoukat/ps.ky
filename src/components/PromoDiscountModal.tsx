import React, { useState } from 'react';
import { Heart, X, Mail, Sparkles, Tag, CheckCircle2 } from 'lucide-react';

interface PromoDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimDiscount?: (code: string) => void;
}

export const PromoDiscountModal: React.FC<PromoDiscountModalProps> = ({
  isOpen,
  onClose,
  onClaimDiscount,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (onClaimDiscount) {
      onClaimDiscount('PARADISE15');
    }
    setSubmitted(true);
    
    // Smooth auto close after showing success state
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 2200);
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-sans animate-in fade-in duration-200 select-none">
      {/* Backdrop */}
      <div className="fixed inset-0 cursor-pointer" onClick={handleCloseModal} aria-hidden="true" />

      {/* Modal Container with Strict Square Corners (rounded-none) */}
      <div className="relative z-10 max-w-3xl w-full bg-[#FAF7F4] rounded-none overflow-hidden shadow-2xl border-2 border-[#5A7755]/30 flex flex-row text-[#232B25] my-auto">
        
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-3 right-3 z-20 w-7 h-7 rounded-none bg-white/90 hover:bg-white text-[#384C37] flex items-center justify-center transition-colors cursor-pointer border border-[#384C37]/20 shadow-md"
          aria-label="Close modal"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* LEFT SIDE: Compact Left-Side Image Cover (w-5/12) */}
        <div className="w-5/12 relative bg-[#233122] overflow-hidden min-h-[280px] sm:min-h-[340px] border-r-2 border-[#5A7755]/30 flex flex-col justify-end">
          <img
            src="https://paradiseslumbersky-btzm.vercel.app/4.jpeg"
            alt="Paradise Slumbers Setup"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Overlay Badge */}
          <div className="relative z-10 p-4 text-white space-y-0.5">
            <span className="bg-[#5A7755] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-none uppercase tracking-wider">
              VIP Club
            </span>
            <h3 className="text-xs sm:text-base font-black tracking-tight text-white uppercase line-clamp-1">
              15% Off + Popcorn Bar
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE: Subscribe Form or Success View (w-7/12) */}
        <div className="w-7/12 p-5 sm:p-8 flex flex-col justify-center bg-white">
          
          {submitted ? (
            /* BEAUTIFUL PROFESSIONAL SUCCESS MESSAGE */
            <div className="py-4 text-center space-y-3 animate-in zoom-in-95 fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#5A7755]/15 text-[#5A7755] flex items-center justify-center mx-auto border border-[#5A7755]/30 shadow-sm">
                <CheckCircle2 className="w-7 h-7 animate-bounce" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[9px] font-extrabold text-[#B06F78] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#B06F78]" />
                  <span>Welcome To VIP Club</span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-[#384C37] uppercase tracking-tight">
                  You're On The List!
                </h4>
                <p className="text-[11px] text-[#232B25]/80 leading-relaxed">
                  Your 15% discount code <strong className="text-[#384C37] underline decoration-[#5A7755]">PARADISE15</strong> is now active.
                </p>
              </div>

            </div>
          ) : (
            /* STANDARD FORM */
            <div className="space-y-4">
              {/* Badge */}
              <div>
                
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-[#384C37] tracking-tight">
                  Subscribe &amp; Save
                </h2>
                <p className="text-[11px] sm:text-xs text-[#232B25]/80 leading-relaxed">
                  Sign up for exclusive discounts, early theme access, and 15% off your first slumber party.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-[#384C37]">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-3.5 h-3.5 text-[#5A7755]" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="parent@paradiseslumbers.ky"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF7F4] border-2 border-neutral-300 rounded-none pl-9 pr-3 py-2.5 text-[11px] sm:text-xs text-[#232B25] placeholder-neutral-400 focus:outline-none focus:border-[#5A7755] transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-none text-[11px] sm:text-xs font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all shadow-md cursor-pointer active:scale-98 flex items-center justify-center gap-1.5 border border-[#5A7755]"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Get My 15% Off</span>
                </button>
              </form>

              {/* Dismiss Option */}
              <div className="text-center pt-0.5">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-[11px] text-neutral-500 hover:text-[#384C37] transition-colors cursor-pointer underline underline-offset-4"
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

export default PromoDiscountModal;