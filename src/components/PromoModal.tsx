import React, { useState, useEffect } from 'react';
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

  // Strictly auto-close modal after 4 seconds when opened
  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Exactly 4 seconds

    return () => clearTimeout(timer);
  }, [isOpen, isSubmitted, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (onSubmit) {
      onSubmit(email);
    }

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      onClose();
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div 
        className="relative flex flex-row w-full max-w-[280px] sm:max-w-[620px] bg-white rounded-none shadow-2xl overflow-hidden border border-[#5A7755]/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute top-1 right-1 sm:top-2 sm:right-2 z-25 w-5 h-5 sm:w-6 sm:h-6 bg-white/90 hover:bg-neutral-100 text-[#232B25] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>

        {/* LEFT COLUMN: Image with overlay text */}
        <div className="relative w-[42%] sm:w-1/2 flex-shrink-0 bg-neutral-900 flex flex-col justify-end overflow-hidden">
          <img
            src="./assets/aistudio//eee.jfif"
            alt="Paradise Slumbers Setup"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="relative z-10 p-2 sm:p-4 space-y-0.5">
            <span className="inline-block px-1 py-0.5 bg-[#5A7755] text-white text-[6px] sm:text-[9px] font-extrabold uppercase tracking-wider rounded-none">
              VIP CLUB
            </span>
            <h3 className="text-[8px] sm:text-base font-black text-white uppercase tracking-tight leading-tight drop-shadow-sm">
              20% OFF + POPCORN BAR
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN: Form or Success Message */}
        <div className="w-[58%] sm:w-1/2 p-2 sm:p-5 flex flex-col justify-center bg-white">
          {isSubmitted ? (
            <div className="space-y-1 text-center py-1">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[#5A7755]/15 text-[#5A7755] rounded-full flex items-center justify-center mx-auto border border-[#5A7755]/30">
                <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce" />
              </div>

              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1 text-[6px] sm:text-[9px] font-extrabold text-[#B06F78] uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5 text-[#B06F78]" />
                  <span>Welcome</span>
                </div>
                <h2 className="text-[10px] sm:text-lg font-black text-[#232B25] uppercase tracking-tight">
                  You're On The List!
                </h2>
                <p className="text-[7px] sm:text-[11px] text-[#232B25]/75 leading-tight">
                  Code <strong className="text-[#384C37] underline">VIPSLUMBER15</strong> activated.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 sm:space-y-3">
              <div>
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#F9ECEE] border border-[#F1D6D9] text-[#B06F78] text-[6px] sm:text-[9px] font-bold uppercase tracking-wider">
                  <Heart className="w-2 h-2 fill-[#B06F78]" />
                  <span>VIP CLUB</span>
                </div>
              </div>

              <div className="space-y-0.5">
                <h2 className="text-[11px] sm:text-xl font-black text-[#232B25] tracking-tight leading-tight">
                  Subscribe &amp; Save
                </h2>
                <p className="text-[7px] sm:text-[11px] text-[#232B25]/70 leading-tight">
                  Get 20% off your first party.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-2.5">
                <div className="space-y-0.5">
                  <label 
                    htmlFor="promo-email" 
                    className="block text-[6px] sm:text-[10px] font-extrabold text-[#232B25] uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <input
                      type="email"
                      id="promo-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@paradise.ky"
                      className="w-full pl-5 pr-1.5 py-1 bg-neutral-50 border border-neutral-300 rounded-none text-[8px] sm:text-xs text-[#232B25] placeholder:text-neutral-400 focus:outline-none focus:border-[#5A7755]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-1.5 sm:py-2 px-2 bg-[#5A7755] hover:bg-[#384C37] text-white text-[7px] sm:text-xs font-black uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Tag className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                  <span>GET 20% OFF</span>
                </button>
              </form>

              <div className="text-center pt-0.5">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-[6px] sm:text-[10px] text-neutral-400 hover:text-neutral-600 underline cursor-pointer"
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