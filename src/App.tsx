import React, { useState, useEffect } from 'react';
import { BackgroundBalloons } from './components/BackgroundBalloons';
import { MainNavbar } from './components/MainNavbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { ServicesSection } from './components/ServicesSection';
import { ThemesExplorer } from './components/ThemesExplorer';
import { BentoGallery } from './components/BentoGallery';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AuthModal, UserProfile } from './components/AuthModal';
import { WishlistModal } from './components/WishlistModal';
import { PromoDiscountModal } from './components/PromoDiscountModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';

type ViewType =
  | 'home'
  | 'about'
  | 'services'
  | 'themes'
  | 'why-us'
  | 'gallery'
  | 'portfolio'
  | 'testimonials'
  | 'privacy'
  | 'blog'
  | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingThemeId, setBookingThemeId] = useState<string | undefined>(undefined);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>(undefined);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  // Auto show promo discount on visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoOpen(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // VIP User State (Persists sign in / sign out status)
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('paradise_slumbers_user');
      if (saved === 'signed_out') return null;
      return saved ? JSON.parse(saved) : { name: 'Ghulam', email: 'ghulam@paradiseslumbers.ky' };
    } catch {
      return { name: 'Ghulam', email: 'ghulam@paradiseslumbers.ky' };
    }
  });

  // Saved Wishlist Items State (Persists across refresh)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('paradise_slumbers_wishlist');
      return saved ? JSON.parse(saved) : ['candyland', 'photo-1', 'slumber-party'];
    } catch {
      return ['candyland', 'photo-1', 'slumber-party'];
    }
  });

  // Synchronize wishlist across storage events
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem('paradise_slumbers_wishlist');
        if (saved) setWishlist(JSON.parse(saved));
      } catch {}
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('paradise_slumbers_wishlist', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Direct Booking Handler (No modals! Links directly to Contact Form with prefilled state)
  const handleOpenBooking = (serviceId?: string, themeId?: string, packageId?: string) => {
    setBookingServiceId(serviceId);
    setBookingThemeId(themeId);
    setBookingPackageId(packageId);

    // If already on homepage, smoothly scroll to #contact
    if (currentView === 'home') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Otherwise navigate to Contact view
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWishlist = () => {
    setIsWishlistOpen(true);
  };

  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view as ViewType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] bg-cream-canvas text-[#232B25] font-sans relative selection:bg-[#5A7755] selection:text-white">
      {/* Animated Floating Balloons with smooth sloped rising trajectory on each section */}
      <BackgroundBalloons />

      {/* Main Luxury Navbar (100% same as screenshot for large screen + mobile) */}
      <MainNavbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        user={user}
        onOpenAuth={handleOpenAuth}
        wishlistCount={wishlist.length}
        onOpenWishlist={handleOpenWishlist}
        onOpenPromo={() => setIsPromoOpen(true)}
      />

      {/* Main Content Router */}
      <main className="relative z-10">
        
        {/* ========================================================
            HOMEPAGE SECTIONS:
            1. Header Section (Hero with Cute Rainbow & Clouds)
            2. Who We Are Section (About Us with 4 Real Images + Exact Text)
            3. Services Section (Bento Grid + Responsive Tabs Slider)
            4. Themes and Packages Section (Bento Grid without color palette)
            5. Gallery Preview (EXACTLY 4 Images in Bento Grid + View More button)
            6. Why Choose Us Section (Bento Grid with Images)
            7. Reviews and Testimonials Section (Bento Grid)
            8. Booking & Enquiry Form (Direct, Real, Authenticated)
            ======================================================== */}
        {currentView === 'home' && (
          <>
            {/* 1. Header Section with Cute Rainbow & Smiling Clouds */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* 2. Who We Are Section (4 Real Images + Exact Text) */}
            <WhoWeAreSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />

            {/* 3. Services Section (Bento Grid + Responsive Slider) */}
            <ServicesSection
              onOpenBooking={handleOpenBooking}
            />

            {/* 4. Themes & Packages Section (Bento Grid, No Color Palette) */}
            <ThemesExplorer
              onOpenBooking={handleOpenBooking}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />

            {/* 5. Gallery Showcase: EXACTLY 4 Images on Homepage in Bento Grid */}
            <BentoGallery
              onOpenBooking={handleOpenBooking}
              onNavigate={handleNavigate}
              isDedicatedPage={false}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />

            {/* 6. Why Choose Us Section (Bento Grid with Images) */}
            <WhyChooseUsSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />

            {/* 7. Reviews and Testimonials Section */}
            <TestimonialsSection />

            {/* 8. Booking & Enquiry Form directly on Homepage (Super Functional, Real, Authenticated) */}
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </>
        )}

        {/* DEDICATED PAGE: WHO WE ARE (ABOUT US) */}
        {currentView === 'about' && (
          <div className="pt-4">
            <WhoWeAreSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />
            <WhyChooseUsSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: SERVICES */}
        {currentView === 'services' && (
          <div className="pt-4">
            <ServicesSection onOpenBooking={handleOpenBooking} />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: THEMES & PACKAGES */}
        {currentView === 'themes' && (
          <div className="pt-4">
            <ThemesExplorer
              onOpenBooking={handleOpenBooking}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />
            {/* Packages listed on this page as well (for mobile and desktop) */}
            <ServicesSection onOpenBooking={handleOpenBooking} />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: WHY CHOOSE US */}
        {currentView === 'why-us' && (
          <div className="pt-4">
            <WhyChooseUsSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />
            <TestimonialsSection />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: PHOTO GALLERY (ALL 55 PICTURES IN BENTO GRID) */}
        {currentView === 'gallery' && (
          <div className="pt-4">
            <BentoGallery
              onOpenBooking={handleOpenBooking}
              onNavigate={handleNavigate}
              isDedicatedPage={true}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: REVIEWS & TESTIMONIALS */}
        {currentView === 'testimonials' && (
          <div className="pt-4">
            <TestimonialsSection />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: PRIVACY POLICY & BLOGS */}
        {(currentView === 'privacy' || currentView === 'blog') && (
          <div className="pt-4">
            <PrivacyPolicyView onOpenBooking={() => handleOpenBooking()} />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

        {/* DEDICATED PAGE: CONTACT US */}
        {currentView === 'contact' && (
          <div className="pt-4">
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}
      </main>

      {/* Shared Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Island WhatsApp Direct Concierge */}
      <FloatingWhatsApp />

      {/* 15% Welcome Promo Discount Modal with Popcorn Bar */}
      <PromoDiscountModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
        onClaimDiscount={(code) => handleOpenBooking(undefined, undefined, code)}
      />

      {/* Floating Cookie & Privacy Consent Banner */}
      <CookieConsentBanner />

      {/* Interactive Wishlist Drawer/Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        savedItems={wishlist}
        onRemoveItem={handleToggleWishlist}
        onOpenBooking={(serviceId, themeId) => {
          setIsWishlistOpen(false);
          handleOpenBooking(serviceId, themeId);
        }}
      />

      {/* VIP Member Profile / Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={user}
        onSaveUser={(newUser) => {
          setUser(newUser);
          try {
            if (newUser) {
              localStorage.setItem('paradise_slumbers_user', JSON.stringify(newUser));
            } else {
              localStorage.setItem('paradise_slumbers_user', 'signed_out');
            }
          } catch {}
        }}
      />
    </div>
  );
}
