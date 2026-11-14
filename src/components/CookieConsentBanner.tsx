import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ps_cookies_consent');
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('ps_cookies_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem('ps_cookies_consent', 'rejected');
    } catch {}
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-4 right-4 z-40 w-[calc(100vw-2rem)] max-w-[340px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#5A7755]/20 animate-in slide-in-from-bottom duration-300 transition-all"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Close cookie banner"
        className="absolute top-3 right-3 w-6 h-6  bg-neutral-100 hover:bg-neutral-200 text-[#384C37] flex items-center justify-center transition-all cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="flex items-start gap-3 pr-5">
        <div className="w-8 h-8 rounded-xl bg-[#5A7755]/10 text-[#5A7755] flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-4 h-4 text-[#5A7755]" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs font-black text-[#384C37]">
              Cookie and Privacy Choices
            </h4>
            <span className="text-[10px]" title="Happy Camping">☁️</span>
          </div>
          <p className="text-[11px] text-[#232B25]/85 leading-relaxed">
            We use cookies to remember your wishlist and ensure secure slumber bookings.
          </p>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center gap-2">
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3  bg-[#5A7755] hover:bg-[#384C37] text-white text-[11px] font-bold transition-all shadow-xs cursor-pointer active:scale-98"
        >
          <Check className="w-3 h-3" />
          <span>Accept</span>
        </button>

        <button
          type="button"
          onClick={handleReject}
          className="flex-1 py-2 px-3  border border-[#5A7755]/30 hover:bg-neutral-100 text-[#384C37] text-[11px] font-bold transition-all cursor-pointer"
        >
          Reject
        </button>
      </div>
    </div>
  );
};