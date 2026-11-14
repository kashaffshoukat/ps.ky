import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, User, ChevronDown, Sparkles } from 'lucide-react';
import { LOGO_IMAGE, THEMES_DATA } from '../data/mockData';
import { UserProfile } from './AuthModal';

interface MainNavbarProps {
  currentView: string;
  onNavigate: (view: string, themeId?: string) => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  user: UserProfile | null;
  onOpenAuth: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenPromo?: () => void;
}

const DROPDOWN_THEMES = [
  { id: 'theme-dreaming-of-unicorn', title: 'Unicorn' },
  ...THEMES_DATA.map((t) => ({ id: t.id, title: t.title })),
];

// Helper to split themes into 3 equal chunks for 3 sections
const chunkSize = Math.ceil(DROPDOWN_THEMES.length / 3);
const themeCol1 = DROPDOWN_THEMES.slice(0, chunkSize);
const themeCol2 = DROPDOWN_THEMES.slice(chunkSize, chunkSize * 2);
const themeCol3 = DROPDOWN_THEMES.slice(chunkSize * 2);

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
  const [themesDropdownOpen, setThemesDropdownOpen] = useState(false);
  const [mobileThemesOpen, setMobileThemesOpen] = useState(false);

  // Lock body scroll smoothly when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', view: 'home', mobileLabel: 'Home' },
    { label: 'Packages', view: 'services', mobileLabel: 'Services & Packages' },
    { label: 'Choose your THEME', view: 'themes', mobileLabel: 'Choose your THEME' },
    { label: 'WHO WE ARE', view: 'about', mobileLabel: 'Who We Are (About Us)' },
    { label: 'WHY CHOOSE US', view: 'why-us', mobileLabel: 'Why Choose Us' },
    { label: 'GALLERY', view: 'gallery', mobileLabel: 'Photo Gallery' },
    { label: 'REVIEWS', view: 'testimonials', mobileLabel: 'Reviews & Testimonials' },
    { label: 'CONTACT US', view: 'contact', mobileLabel: 'Contact Us' },
  ];

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setThemesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThemeSelect = (themeId: string) => {
    onNavigate('theme-detail', themeId);
    setThemesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileThemesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 shadow-md font-sans">
      
      {/* ========================================================
          TIER 1: TOP DUSTY ROSE/MAUVE ANNOUNCEMENT BAR
          ======================================================== */}
      <div className="bg-[#A56069] text-white py-2 px-3 sm:px-6 overflow-hidden text-xs sm:text-[13px] font-semibold border-b border-[#9E5D68]/40">
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
          TIER 2: MIDDLE DARK SAGE GREEN BAR
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

          {/* BRAND LOGO */}
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

          {/* DESKTOP CENTER FREE SPACE */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-4">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-xs text-white shadow-xs">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide text-white/95 italic">
                WE WILL HANDLE IT..
              </h1>
            </div>
          </div>

          {/* RIGHT ACTION ICONS */}
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
          TIER 3: DESKTOP NAVIGATION LINKS BAR WITH 3-COLUMN DROPDOWN
          ======================================================== */}
      <nav className="hidden xl:block bg-[#B06F78] text-white border-b border-[#9E5D68]/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-3.5 py-2.5">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;

              if (link.view === 'themes') {
                return (
                  <li 
                    key={link.view} 
                    className="relative"
                    onMouseEnter={() => setThemesDropdownOpen(true)}
                    onMouseLeave={() => setThemesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.view)}
                      className={`px-5 py-2 rounded-full text-[13px] font-black tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isActive || currentView === 'theme-detail'
                          ? 'bg-white text-[#5A7755] shadow-sm'
                          : 'text-white hover:text-white hover:bg-white/15'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${themesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Desktop 3-Column Dropdown Menu */}
                    {themesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[760px] max-w-[95vw] bg-white text-[#232B25] rounded-2xl shadow-2xl border-2 border-[#5A7755]/20 p-5 z-50 max-h-[500px] overflow-y-auto no-scrollbar animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="pb-3 mb-3 border-b border-neutral-100 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B06F78]">
                            Explore All Themes Collection (Grand Cayman)
                          </span>
                         <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-[#C78D95] text-[#C78D95]" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-1.5">
                            {themeCol1.map((theme) => (
                              <button
                                key={theme.id}
                                type="button"
                                onClick={() => handleThemeSelect(theme.id)}
                                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#384C37] hover:bg-[#FAF7F4] hover:text-[#B06F78] transition-colors flex items-center justify-between group cursor-pointer border border-neutral-200/60 bg-neutral-50/50 shadow-2xs"
                              >
                                <span className="line-clamp-1">{theme.title}</span>
                                <span className="text-[10px] text-[#C78D95] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1">➔</span>
                              </button>
                            ))}
                          </div>
                          <div className="space-y-1.5">
                            {themeCol2.map((theme) => (
                              <button
                                key={theme.id}
                                type="button"
                                onClick={() => handleThemeSelect(theme.id)}
                                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#384C37] hover:bg-[#FAF7F4] hover:text-[#B06F78] transition-colors flex items-center justify-between group cursor-pointer border border-neutral-200/60 bg-neutral-50/50 shadow-2xs"
                              >
                                <span className="line-clamp-1">{theme.title}</span>
                                <span className="text-[10px] text-[#C78D95] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1">➔</span>
                              </button>
                            ))}
                          </div>
                          <div className="space-y-1.5">
                            {themeCol3.map((theme) => (
                              <button
                                key={theme.id}
                                type="button"
                                onClick={() => handleThemeSelect(theme.id)}
                                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#384C37] hover:bg-[#FAF7F4] hover:text-[#B06F78] transition-colors flex items-center justify-between group cursor-pointer border border-neutral-200/60 bg-neutral-50/50 shadow-2xs"
                              >
                                <span className="line-clamp-1">{theme.title}</span>
                                <span className="text-[10px] text-[#C78D95] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1">➔</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

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
          MOBILE NAVIGATION DRAWER (PERSISTENT MOUNT FOR SMOOTH OPEN & CLOSE)
          ======================================================== */}
      <div
        className={`fixed inset-0 z-50 flex flex-col xl:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-150'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop overlay with smooth fade */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Full Height Drawer container sliding smoothly from top to bottom and back up */}
        <div
          className={`relative w-full h-full bg-white text-[#232B25] shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          
          {/* Top Header with Brand & Close Button at the Top */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#5A7755]/15">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
                <img src={LOGO_IMAGE} alt="Logo" className="w-12 h-12 rounded-full border-2 border-[#5A7755]/30" />
                <div>
                  <span className="font-black text-sm text-[#384C37] uppercase tracking-tight block">Paradise Slumbers</span>
                  <span className="text-[10px] text-[#B06F78] font-bold uppercase tracking-widest block">Grand Cayman</span>
                </div>
              </div>

              {/* Close Button neatly positioned at the top */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-[#5A7755]/10 hover:bg-[#5A7755] hover:text-white text-[#384C37] transition-all duration-300 cursor-pointer border-2 border-[#5A7755]/25 active:scale-90"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Staggered Animated Links List with Proper Borders */}
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link, index) => {
                const isActive = currentView === link.view;
                const staggerStyle = {
                  transitionDelay: mobileMenuOpen ? `${120 + index * 45}ms` : '0ms',
                };

                if (link.view === 'themes') {
                  return (
                    <li
                      key={link.view}
                      style={staggerStyle}
                      className={`space-y-1.5 transition-all duration-500 ease-out transform ${
                        mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileThemesOpen(!mobileThemesOpen)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-between border-2 ${
                          isActive || currentView === 'theme-detail'
                            ? 'bg-[#5A7755] text-white border-[#5A7755] shadow-sm'
                            : 'text-[#384C37] bg-white border-[#5A7755]/25 hover:border-[#5A7755]'
                        }`}
                      >
                        <span>{link.mobileLabel}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileThemesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Smooth Accordion for Mobile 3-Section Grid Dropdown */}
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          mobileThemesOpen ? 'grid-rows-[1fr] opacity-100 my-1.5' : 'grid-rows-[0fr] opacity-0 my-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="p-3 bg-neutral-50 rounded-xl border-2 border-[#5A7755]/20 shadow-inner space-y-2">
                            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 px-1">
                             
                              <button
                                type="button"
                                onClick={() => handleLinkClick('themes')}
                                className="text-[10px] font-bold text-[#5A7755] hover:underline cursor-pointer"
                              >
                                View Catalog ➔
                              </button>
                            </div>

                            <div className="grid grid-cols-3 gap-1.5">
                              <div className="space-y-1">
                                {themeCol1.map((theme) => (
                                  <button
                                    key={theme.id}
                                    type="button"
                                    onClick={() => handleThemeSelect(theme.id)}
                                    className="w-full text-left p-2 rounded-lg bg-white hover:bg-[#5A7755] hover:text-white text-[10px] font-bold text-[#384C37] transition-colors duration-200 cursor-pointer line-clamp-2 leading-tight border border-[#5A7755]/20 shadow-2xs"
                                  >
                                    {theme.title}
                                  </button>
                                ))}
                              </div>
                              <div className="space-y-1">
                                {themeCol2.map((theme) => (
                                  <button
                                    key={theme.id}
                                    type="button"
                                    onClick={() => handleThemeSelect(theme.id)}
                                    className="w-full text-left p-2 rounded-lg bg-white hover:bg-[#5A7755] hover:text-white text-[10px] font-bold text-[#384C37] transition-colors duration-200 cursor-pointer line-clamp-2 leading-tight border border-[#5A7755]/20 shadow-2xs"
                                  >
                                    {theme.title}
                                  </button>
                                ))}
                              </div>
                              <div className="space-y-1">
                                {themeCol3.map((theme) => (
                                  <button
                                    key={theme.id}
                                    type="button"
                                    onClick={() => handleThemeSelect(theme.id)}
                                    className="w-full text-left p-2 rounded-lg bg-white hover:bg-[#5A7755] hover:text-white text-[10px] font-bold text-[#384C37] transition-colors duration-200 cursor-pointer line-clamp-2 leading-tight border border-[#5A7755]/20 shadow-2xs"
                                  >
                                    {theme.title}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li
                    key={link.view}
                    style={staggerStyle}
                    className={`transition-all duration-500 ease-out transform ${
                      mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.view)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border-2 ${
                        isActive
                          ? 'bg-[#5A7755] text-white border-[#5A7755] shadow-sm'
                          : 'text-[#384C37] bg-white border-[#5A7755]/25 hover:border-[#5A7755]'
                      }`}
                    >
                      {link.mobileLabel}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Section: Booking CTA */}
          <div
            style={{ transitionDelay: mobileMenuOpen ? `${120 + navLinks.length * 45}ms` : '0ms' }}
            className={`pt-6 mt-6 border-t-2 border-[#5A7755]/15 space-y-3 transition-all duration-500 ease-out transform ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-xl bg-[#5A7755] hover:bg-[#384C37] text-white font-black text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all duration-300 active:scale-98"
            >
              Book Your Slumber Now ➔
            </button>

            <div className="text-center text-[11px] text-[#232B25]/70 font-semibold pt-1">
              Grand Cayman Island-Wide Delivery
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default MainNavbar;