import React, { useState } from 'react';
import { X, Mail, Sparkles, Tag, CheckCircle2, Gift } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';

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
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-sans animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} aria-hidden="true" />

      {/* Modal Container with 2-Column Side-by-Side Layout */}
      <div className="relative z-10 max-w-4xl w-full bg-[#FAF7F4] rounded-3xl overflow-hidden shadow-2xl border border-[#5A7755]/30 flex flex-col md:flex-row text-[#232B25] my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#384C37]/10 hover:bg-[#384C37]/20 text-[#384C37] flex items-center justify-center transition-colors cursor-pointer border border-[#384C37]/20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT SIDE: Brand Showcase Graphic (Sage Green & Dusty Rose Theme) */}
        <div className="w-full md:w-1/2 relative bg-[#384C37] p-8 flex flex-col items-center justify-center overflow-hidden min-h-[300px] md:min-h-[420px] border-b md:border-b-0 md:border-r border-[#2A3A29]">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5A7755]/40 via-[#C78D95]/30 to-[#384C37] blur-2xl pointer-events-none" />
          
          {/* Center Showcase Circle */}
          <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-[#C78D95]/60 shadow-[0_0_40px_rgba(199,141,149,0.3)] bg-[#2A3A29]/80 flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse pointer-events-none" />
            
            <div className="w-16 h-16 rounded-full bg-white p-1 mb-3 border border-white/40 shadow-md flex items-center justify-center">
              <img src={LOGO_IMAGE} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>

            <h3 className="text-lg sm:text-xl font-black tracking-wider text-white">
              PARADISE SLUMBERS
            </h3>
            <span className="text-[10px] tracking-[0.25em] text-[#C78D95] uppercase font-bold mt-1">
              Grand Cayman
            </span>

            <div className="mt-3 px-3 py-1 rounded-full bg-[#C78D95]/30 border border-[#C78D95]/50 text-white text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5 text-[#C78D95]" />
              <span>15% OFF + POPCORN BAR</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Subscribe Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center space-y-5 bg-white">
          
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#5A7755] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#384C37]">You're In!</h4>
              <p className="text-xs text-[#232B25]/80">
                Your 15% off promo code has been unlocked.
              </p>
            </div>
          ) : (
            <>
              {/* Badge */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5A7755]/10 border border-[#5A7755]/20 text-[#384C37] text-xs font-bold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#5A7755]" />
                  <span>Join the VIP Slumber Club</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-black text-[#384C37] tracking-tight">
                  Subscribe &amp; Save
                </h2>
                <p className="text-xs sm:text-sm text-[#232B25]/80 leading-relaxed">
                  Sign up to get exclusive discounts, early access to new themes, and 15% off your first luxury slumber party.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#384C37]">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-4 h-4 text-[#5A7755]" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="parent@paradiseslumbers.ky"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF7F4] border border-neutral-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#232B25] placeholder-neutral-400 focus:outline-none focus:border-[#5A7755] transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all shadow-md cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                >
                  <Tag className="w-4 h-4" />
                  <span>Get My 15% Off</span>
                </button>
              </form>

              {/* Dismiss Option */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-neutral-500 hover:text-[#384C37] transition-colors cursor-pointer underline underline-offset-4"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default PromoDiscountModal;