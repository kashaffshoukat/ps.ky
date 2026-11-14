import React, { useState } from 'react';
import { X, Mail, Tag, Heart, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (email: string) => void;
}

// Apni Formspree ID yahan dalein
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/moedqlgw';

export const PromoModal: React.FC<PromoModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          _subject: '❤🎉 New VIP Club Subscriber - Paradise Slumbers!',
          email: email,
          promo_code_unlocked: 'VIPSLUMBER20 (20% OFF + Heart)',
          source: 'Website Popup Modal'
        }),
      });

      if (response.ok) {
        if (onSubmit) {
          onSubmit(email);
        }
        setIsSubmitted(true);
        setEmail('');
      } else {
        setErrorMessage('Kuch masla ho gaya. Dobara koshish karein!');
      }
    } catch (error) {
      setErrorMessage('Network error. Connection check karein.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setEmail('');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div 
        className="relative flex flex-col sm:flex-row w-[92%] max-w-[440px] sm:max-w-[620px] bg-white rounded-none shadow-2xl overflow-hidden border border-[#5A7755]/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute top-2 right-2 z-30 w-7 h-7 bg-white/90 hover:bg-neutral-100 text-[#232B25] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT COLUMN: Image with overlay text */}
        <div className="relative w-full sm:w-1/2 h-36 sm:h-auto flex-shrink-0 bg-neutral-900 flex flex-col justify-end overflow-hidden">
          <img
            src="./assets/aistudio/www.jpg"
            alt="Paradise Slumbers Setup"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="relative z-10 p-3 sm:p-4 space-y-1">
          
          
            <span className="text-sm font-black text-white  flex items-center gap-1.5">
              <span>20% OFF with Free Pop Corn</span>
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Form or Success Message */}
        <div className="w-full sm:w-1/2 p-5 sm:p-6 flex flex-col justify-center bg-white">
          {isSubmitted ? (
            <div className="space-y-2 text-center py-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto">
                <CuteSmileyCloud size="md" className="shrink-0 mx-auto" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#B06F78] uppercase tracking-wider">
                  <span>Welcome</span>
                </div>
                <h2 className="text-base sm:text-lg font-black text-[#232B25] uppercase tracking-tight">
                  You're On The List!
                </h2>
                <p className="text-xs text-[#232B25]/75 leading-relaxed">
                  Code <strong className="text-[#384C37] underline">VIPSLUMBER20</strong> activated.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F9ECEE] border border-[#F1D6D9] text-[#B06F78] text-[10px] font-bold uppercase tracking-wider">
                  <Heart className="w-3 h-3 fill-[#B06F78]" />
                  <span>VIP CLUB</span>
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-black text-[#232B25] tracking-tight leading-tight">
                  Subscribe and Save
                </h2>
                <p className="text-xs text-[#232B25]/70 leading-relaxed">
                  Get 20% off your first party with a special heart touch.
                </p>
              </div>

              {errorMessage && (
                <div className="p-2 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label 
                    htmlFor="promo-email" 
                    className="block text-[10px] sm:text-xs font-extrabold text-[#232B25] uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="promo-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@paradise.ky"
                      className="w-full pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-300 rounded-none text-xs sm:text-sm text-[#232B25] placeholder:text-neutral-400 focus:outline-none focus:border-[#5A7755]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-3 bg-[#5A7755] hover:bg-[#384C37] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <Tag className="w-4 h-4" />
                      <span>GET 20% OFF</span>
                    </>
                  )}
                </button>
              </form>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-xs text-neutral-400 hover:text-neutral-600 underline cursor-pointer"
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