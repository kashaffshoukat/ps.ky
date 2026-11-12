import React, { useState, useEffect } from 'react';
import { BackgroundBalloons } from './components/BackgroundBalloons';
import { MainNavbar } from './components/MainNavbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import ThemesExplorer from './components/ThemesExplorer';
import { BentoGallery } from './components/BentoGallery';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AuthModal, UserProfile } from './components/AuthModal';
import { WishlistModal } from './components/WishlistModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { PromoModal } from "./components/PromoModal";
type ViewType =
  | 'home'
  | 'services'
  | 'about'
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
  
  // 2. Add state for your new custom promo modal
  const [isCustomPromoModalOpen, setIsCustomPromoModalOpen] = useState(false);

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
        {currentView === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
          
           <HowItWorksSection onNavigate={(view) => handleNavigate(view)} onOpenBooking={handleOpenBooking} />
             <ThemesExplorer
              onOpenBooking={handleOpenBooking}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />
           
            <ServicesSection
              onOpenBooking={handleOpenBooking}
            />
            <WhoWeAreSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />
            <BentoGallery
              onOpenBooking={handleOpenBooking}
              onNavigate={handleNavigate}
              isDedicatedPage={false}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />
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
          </>
        )}

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

        {currentView === 'themes' && (
          <div className="pt-4">
            <ThemesExplorer
              onOpenBooking={handleOpenBooking}
              onToggleWishlist={handleToggleWishlist}
              savedWishlistIds={wishlist}
            />
            <ServicesSection onOpenBooking={handleOpenBooking} />
            <ContactSection
              prefilledService={bookingServiceId}
              prefilledTheme={bookingThemeId}
              prefilledPackage={bookingPackageId}
            />
          </div>
        )}

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

      {/* 3. Pass the handler down to FloatingWhatsApp */}
      <FloatingWhatsApp 
        onOpenPromoModal={() => setIsCustomPromoModalOpen(true)} 
      />

     

      {/* 4. Render your new custom PromoModal at the bottom of the stack */}
      <PromoModal
        isOpen={isCustomPromoModalOpen}
        onClose={() => setIsCustomPromoModalOpen(false)}
        onSubmit={(email) => {
          console.log('Subscribed email:', email);
          // Handle your Formspree/backend submission here
        }}
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