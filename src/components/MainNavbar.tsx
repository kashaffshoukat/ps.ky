import React, { useState } from 'react';
import { Menu, X, Heart, User } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';
import { UserProfile } from './AuthModal';

interface MainNavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  user: UserProfile | null;
  onOpenAuth: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenPromo?: () => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking,
  user,
  onOpenAuth,
  wishlistCount,
  onOpenWishlist,
  onOpenPromo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', view: 'home', mobileLabel: 'Home' },
    { label: 'Packages', view: 'services', mobileLabel: 'Services & Packages' },
    { label: 'Choose your THEME', view: 'themes', mobileLabel: 'Themes & Packages' },
    { label: 'WHO WE ARE', view: 'about', mobileLabel: 'Who We Are (About Us)' },
    { label: 'WHY CHOOSE US', view: 'why-us', mobileLabel: 'Why Choose Us' },
    { label: 'GALLERY', view: 'gallery', mobileLabel: 'Photo Gallery' },
    { label: 'REVIEWS', view: 'testimonials', mobileLabel: 'Reviews & Testimonials' },
    { label: 'CONTACT US', view: 'contact', mobileLabel: 'Contact Us' },
  ];

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 shadow-md font-sans">
      
      {/* ========================================================
          TIER 1: TOP DUSTY ROSE/MAUVE ANNOUNCEMENT BAR
          ======================================================== */}
      <div className="bg-[#a56069] text-white py-2 px-3 sm:px-6 overflow-hidden text-xs sm:text-[13px] font-semibold border-b border-[#9E5D68]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-6 whitespace-nowrap animated-marquee text-xs sm:text-[13px]">
              <span className="font-extrabold text-white">Grand Cayman's Only Luxury Indoor Glamping Experience </span>
              <button
                type="button"
                onClick={onOpenPromo}
                className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full hover:bg-white text-white hover:text-[#B06F78] font-black transition-all cursor-pointer shadow-2xs"
              >
                <span>15% OFF Code: PARADISE15 [Claim]</span>
              </button>
              <span className="text-white/95">Creating Magical Memories for Kids </span>
              <span className="text-white/95">Delivered, Styled &amp; Packed Away </span>
              <span className="text-white/95 hidden sm:inline">100% Steam Sanitized Linens </span>
              <span className="font-extrabold text-white">Grand Cayman's Only Luxury Indoor Glamping Experience </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          TIER 2: MIDDLE DARK SAGE GREEN BAR (Increased Height)
          ======================================================== */}
      <div className="bg-[#5A7755] text-white px-4 sm:px-6 lg:px-8 border-b border-[#4E6849]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-24 gap-3">
          
          {/* MOBILE VIEW (Left: Hamburger Icon) */}
          <div className="flex xl:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="w-7 h-7 text-white stroke-[2.2]" />
            </button>
          </div>

          {/* BRAND LOGO (Scaled up slightly to match taller navbar) */}
          <div
            className="flex items-center cursor-pointer group xl:static absolute left-1/2 -translate-x-1/2 xl:translate-x-0"
            onClick={() => handleLinkClick('home')}
            title="Paradise Slumbers Grand Cayman"
          >
            <div className="p-1.5 rounded-full bg-white shadow-sm border border-white/40 group-hover:scale-105 transition-transform duration-300">
              <img
                src={LOGO_IMAGE}
                alt="Paradise Slumbers Logo"
                className="w-13 h-13 sm:w-16 sm:h-16 rounded-full object-cover"
              />
            </div>
          </div>

          {/* DESKTOP CENTER FREE SPACE: "We will handle it" */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-4">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-xs text-white shadow-xs">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide text-white/95 italic">
                WE WILL HANDLE IT..
              </h1>
            </div>
          </div>

          {/* RIGHT ACTION ICONS (Scaled up slightly) */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            
            {/* Heart Wishlist Button */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#5A7755] hover:bg-[#FDF5F6] transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-xs cursor-pointer border border-white/40"
              title="Saved Favorites"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-[#C78D95] text-[#C78D95]" />
              <span className="absolute -top-1 -right-1 bg-[#C78D95] text-white text-xs font-extrabold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-xs border-2 border-[#5A7755]">
                {wishlistCount > 0 ? wishlistCount : 3}
              </span>
            </button>

            {/* Profile / Auth Button */}
            <button
              type="button"
              onClick={onOpenAuth}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#5A7755] hover:bg-[#FDF5F6] transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-xs cursor-pointer border border-white/40"
              title={user ? 'VIP Member Account' : 'Sign In'}
              aria-label={user ? 'VIP Member' : 'Sign In'}
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#5A7755]" />
            </button>

          </div>

        </div>
      </div>

      {/* ========================================================
          TIER 3: DESKTOP DUSTY ROSE/MAUVE NAVIGATION LINKS BAR
          ======================================================== */}
      <nav className="hidden xl:block bg-[#B06F78] text-white border-b border-[#9E5D68]/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-3.5 py-2.5">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <li key={link.view}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.view)}
                    className={`px-5 py-2 rounded-full text-[13px] font-black tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#5A7755] shadow-sm'
                        : 'text-white hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER
          ======================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex xl:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-[#FAF7F4] text-[#232B25] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 border-r border-[#5A7755]/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#5A7755]/15">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
                  <img src={LOGO_IMAGE} alt="Logo" className="w-12 h-12 rounded-full border border-[#5A7755]/25" />
                  <span className="font-extrabold text-sm text-[#384C37]">Paradise Slumbers</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#5A7755]/10 text-[#232B25] cursor-pointer border border-[#5A7755]/20"
                >
                  <X className="w-5 h-5 text-[#232B25]" />
                </button>
              </div>

              <ul className="mt-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = currentView === link.view;
                  return (
                    <li key={link.view}>
                      <button
                        type="button"
                        onClick={() => handleLinkClick(link.view)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#5A7755] text-white shadow-xs'
                            : 'text-[#232B25] hover:bg-white border border-transparent hover:border-[#5A7755]/15'
                        }`}
                      >
                        {link.mobileLabel}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#5A7755]/15 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white font-black text-xs uppercase tracking-wider shadow-sm cursor-pointer"
              >
                Book Your Slumber Now
              </button>

              <div className="text-center text-[11px] text-[#232B25]/70 font-semibold">
                Grand Cayman Island-Wide Delivery
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};