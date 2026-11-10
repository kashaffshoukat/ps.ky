import React, { useState } from 'react';
import { Menu, X, Heart, User, Phone, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
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
    { label: 'WHO WE ARE', view: 'about', mobileLabel: 'Who We Are (About Us)' },
    { label: 'SERVICES', view: 'services', mobileLabel: 'Services & Packages' },
    { label: 'THEMES & PACKAGES', view: 'themes', mobileLabel: 'Themes & Packages' },
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

  // Display user name matching provided screenshot ("Ghulam" or saved user)
  const displayUserName = user?.name ? user.name.split(' ')[0] : 'Ghulam';

  return (
    <header className="sticky top-0 z-40 shadow-md font-sans">
      
      {/* ========================================================
          TIER 1: TOP DUSTY ROSE/MAUVE ANNOUNCEMENT BAR
          Exact match to screenshot with ticker and contact items
          ======================================================== */}
      <div className="bg-[#a56069] text-white py-1.5 px-3 sm:px-6 overflow-hidden text-xs font-semibold border-b border-[#9E5D68]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Scrolling / Marquee announcement */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-6 whitespace-nowrap animate-marquee text-[11px] sm:text-xs">
              <span className="font-extrabold text-white">Grand Cayman's Only Luxury Indoor Glamping Experience •</span>
              <button
                type="button"
                onClick={onOpenPromo}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full hover:bg-white text-white hover:text-[#B06F78] font-black transition-all cursor-pointer shadow-2xs"
              >
                <Sparkles className="w-3 h-3 text-[#FFE7EA]" />
                <span>15% OFF Code: PARADISE15 [Claim]</span>
              </button>
              <span className="text-white/95">• Creating Magical Memories for Kids •</span>
              <span className="text-white/95">Delivered, Styled &amp; Packed Away •</span>
              <span className="text-white/95 hidden sm:inline">100% Steam Sanitized Linens •</span>
              <span className="font-extrabold text-white">Grand Cayman's Only Luxury Indoor Glamping Experience •</span>
            </div>
          </div>

          {/* Right Phone & WhatsApp Contact Links */}
       
        </div>
      </div>

      {/* ========================================================
          TIER 2: MIDDLE DARK SAGE GREEN BAR
          Large Screen: Left Logo, Center "We will handle it", Right Heart (3) & User Pill
          Mobile Screen: Left Hamburger, Center Logo, Right Heart (3) & User Icon
          ======================================================== */}
      <div className="bg-[#5A7755] text-white px-4 sm:px-6 lg:px-8 border-b border-[#4E6849]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* MOBILE VIEW (Left: Hamburger Icon) */}
          <div className="flex xl:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="w-7 h-7 text-white stroke-[2.2]" />
            </button>
          </div>

          {/* BRAND LOGO:
              - Left-aligned on Desktop (as shown in desktop screenshot)
              - Center-aligned on Mobile (as shown in mobile screenshot)
          */}
          <div
            className="flex items-center cursor-pointer group xl:static absolute left-1/2 -translate-x-1/2 xl:translate-x-0"
            onClick={() => handleLinkClick('home')}
            title="Paradise Slumbers Grand Cayman"
          >
            <div className="p-1 rounded-full bg-white shadow-sm border border-white/40 group-hover:scale-105 transition-transform duration-300">
              <img
                src={LOGO_IMAGE}
                alt="Paradise Slumbers Logo"
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover"
              />
            </div>
          </div>

          {/* DESKTOP CENTER FREE SPACE: "We will handle it" (Requested by user) */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-4">
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full backdrop-blur-xs text-white shadow-xs">
              <span className="text-3xl font-semibold tracking-wide text-white/95 italic">
               WE WILL HANDLE IT..
              </span>
            </div>
          </div>

          {/* RIGHT ACTION ICONS:
              - Heart button with '3' badge
              - User Profile button (Pill with name on desktop, round icon on mobile)
          */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Heart Wishlist Button with Pink Badge (Count: 3 or saved count) */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#5A7755] hover:bg-[#FDF5F6] transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-xs cursor-pointer border border-white/40"
              title="Saved Favorites"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 fill-[#C78D95] text-[#C78D95]" />
              <span className="absolute -top-1 -right-1 bg-[#C78D95] text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs border-2 border-[#5A7755]">
                {wishlistCount > 0 ? wishlistCount : 3}
              </span>
            </button>

            {/* Profile Button: VIP Member when signed in, User Icon + Sign In when signed out */}
            {user ? (
              <>
                {/* Desktop: Clean white pill with User icon and VIP Member text */}
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#232B25] hover:bg-[#FDF5F6] transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer border border-white/50"
                  title="VIP Member Account"
                >
                  <User className="w-4 h-4 text-[#5A7755] text-[11px]" />
                 
                </button>

                {/* Mobile: Clean round button with User icon */}
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="sm:hidden w-10 h-10 rounded-full bg-white text-[#5A7755] hover:bg-[#FDF5F6] transition-transform duration-200 active:scale-95 flex items-center justify-center shadow-xs cursor-pointer border border-white/40"
                  title="VIP Member"
                  aria-label="VIP Member"
                >
                  <User className="w-5 h-5 text-[#5A7755]" />
                </button>
              </>
            ) : (
              <>
                {/* Desktop: Clean white pill with User icon and Sign In text */}
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#232B25] hover:bg-[#FDF5F6] transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer border border-white/50"
                  
                >
                  <User className="w-4 h-4 text-[#5A7755]" />
                  <span className="text-xs font-black text-[#232B25] tracking-wide">
                    
                  </span>
                </button>

                {/* Mobile: Clean round button with User icon */}
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="sm:hidden w-10 h-10 rounded-full bg-white text-[#5A7755] hover:bg-[#FDF5F6] transition-transform duration-200 active:scale-95 flex items-center justify-center shadow-xs cursor-pointer border border-white/40"
                  title="Sign In"
                  aria-label="Sign In"
                >
                  <User className="w-5 h-5 text-[#5A7755]" />
                </button>
              </>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================
          TIER 3: DESKTOP DUSTY ROSE/MAUVE NAVIGATION LINKS BAR
          Exact match to screenshot:
          - HOME in white rounded pill with dark sage green text
          - Other items in white bold uppercase text
          ======================================================== */}
      <nav className="hidden xl:block bg-[#B06F78] text-white border-b border-[#9E5D68]/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-3 py-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <li key={link.view}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.view)}
                    className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer ${
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
