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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[calc(100vw-2rem)] sm:max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#5A7755]/20 animate-in slide-in-from-bottom duration-300 transition-all"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Close cookie banner"
        className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#384C37] flex items-center justify-center transition-all cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3.5 pr-6">
        <div className="w-10 h-10 rounded-2xl bg-[#5A7755]/10 text-[#5A7755] flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-5 h-5 text-[#5A7755]" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-black text-[#384C37]">
              Cookie &amp; Privacy Choices
            </h4>
            {/* Cute cloud emoji icon */}
            <span className="text-xs" title="Happy Camping">☁️</span>
          </div>
          <p className="text-xs text-[#232B25]/80 leading-relaxed">
            We use essential and analytics cookies to remember your favorite theme wishlist, ensure secure slumber bookings, and give you the best Cayman glamping experience.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2.5">
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-98"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Accept Cookies</span>
        </button>

        <button
          type="button"
          onClick={handleReject}
          className="flex-1 py-2.5 px-4 rounded-full border border-[#5A7755]/30 hover:bg-neutral-100 text-[#384C37] text-xs font-bold transition-all cursor-pointer"
        >
          Reject Cookies
        </button>
      </div>
    </div>
  );
};
