import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users,
  MapPin,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  ShieldCheck,
  Check,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { SERVICES_DATA, THEMES_DATA, ADD_ONS_DATA, LOGO_IMAGE } from '../data/mockData';
import { UserProfile } from './AuthModal';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialThemeId?: string;
  user?: UserProfile | null;
}

// Authentic package pricing matrix strictly based on camper count
const PACKAGE_PRICES: { [count: number]: number } = {
  2: 275,
  3: 395,
  4: 495,
  5: 595,
  6: 670,
  7: 765,
  8: 820,
};

export const BookingWizard: React.FC<BookingWizardProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialThemeId,
  user,
}) => {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || SERVICES_DATA[0].id);
  const [selectedThemeId, setSelectedThemeId] = useState(initialThemeId || THEMES_DATA[0].id);
  const [guestCount, setGuestCount] = useState(4);
  const [eventDate, setEventDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('afternoon');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [district, setDistrict] = useState('Seven Mile Beach');
  const [streetAddress, setStreetAddress] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Contact details
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  // Validation & state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialThemeId) setSelectedThemeId(initialThemeId);
  }, [initialServiceId, initialThemeId]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const currentTheme = THEMES_DATA.find((t) => t.id === selectedThemeId) || THEMES_DATA[0];

  const baseServicePrice = currentService.id === 'custom-tents'
    ? 195
    : currentService.id === 'interior-design'
    ? 0
    : PACKAGE_PRICES[guestCount] || 495;

  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const item = ADD_ONS_DATA.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const estimatedTotal = baseServicePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const validateStep = (s: number) => {
    const newErrors: { [key: string]: string } = {};
    if (s === 2) {
      if (!eventDate) newErrors.eventDate = 'Please select a date for your slumber.';
    }
    if (s === 4) {
      if (!name.trim()) newErrors.name = 'Full name is required.';
      if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email is required.';
      if (!phone.trim()) newErrors.phone = 'Phone number is required.';
      if (!streetAddress.trim()) newErrors.streetAddress = 'Setup address is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    const refCode = `PS-KY-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#5A7755', '#C78D95', '#C5A059', '#E8C5C8', '#FAF7F4'],
      });
    } catch {}
  };

  const districtsList = [
    'Seven Mile Beach',
    'George Town',
    'South Sound',
    'West Bay',
    'Grand Harbour / Red Bay',
    'Savannah / Lower Valley',
    'Bodden Town',
    'East End',
    'North Side / Rum Point / Cayman Kai',
  ];

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 font-sans">
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* SUPER FIXED MODAL CONTAINER: guaranteed to never be half-covered */}
      <div className="relative z-10 max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#5A7755]/20 max-h-[88vh] flex flex-col my-auto">
        
        {/* Top Header in Logo Palette (Warm Cream & Sage) */}
        <div className="p-5 sm:p-6 border-b border-[#5A7755]/15 bg-[#FAF7F4] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11  overflow-hidden border border-[#5A7755]/25 bg-white p-0.5 shadow-xs">
              <img src={LOGO_IMAGE} alt="Logo" className="w-full h-full object-cover " />
            </div>
            <div>
              <h3 className="font-sans text-lg sm:text-xl font-black text-[#232B25]">
                {isSubmitted ? 'Reservation Confirmed' : 'Reserve Your Slumber Experience'}
              </h3>
              <p className="text-xs text-[#5A7755] font-bold">
                {isSubmitted ? `Booking Reference: ${bookingRef}` : `Step ${step} of 5 · Grand Cayman Concierge`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9  bg-white hover:bg-[#EFF4EE] text-[#232B25] flex items-center justify-center shadow-xs transition-colors cursor-pointer border border-[#5A7755]/20"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5 text-[#232B25]" />
          </button>
        </div>

        {/* Step Progress Tracker */}
        {!isSubmitted && (
          <div className="px-6 pt-3 pb-2.5 bg-[#FAF7F4] border-b border-[#5A7755]/15 shrink-0">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#232B25] mb-2">
              <span className={step >= 1 ? 'text-[#5A7755] font-extrabold' : 'text-[#232B25]/40'}>1. Experience</span>
              <span className={step >= 2 ? 'text-[#5A7755] font-extrabold' : 'text-[#232B25]/40'}>2. Date and Guests</span>
              <span className={step >= 3 ? 'text-[#5A7755] font-extrabold' : 'text-[#232B25]/40'}>3. Add-Ons</span>
              <span className={step >= 4 ? 'text-[#5A7755] font-extrabold' : 'text-[#232B25]/40'}>4. Details</span>
              <span className={step >= 5 ? 'text-[#5A7755] font-extrabold' : 'text-[#232B25]/40'}>5. Review</span>
            </div>
            <div className="w-full bg-[#5A7755]/15 h-2  overflow-hidden">
              <div
                className="bg-[#5A7755] h-full transition-all duration-300 "
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: SERVICE & THEME */}
          {!isSubmitted && step === 1 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A7755] mb-3">
                  1. Choose Service Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_DATA.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedServiceId(svc.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedServiceId === svc.id
                          ? 'border-[#5A7755] bg-[#5A7755] text-white shadow-xs'
                          : 'border-[#5A7755]/20 hover:border-[#5A7755] text-[#232B25] bg-[#FAF7F4]'
                      }`}
                    >
                      <span className="block font-bold text-sm mb-1">{svc.title}</span>
                      <span className="block text-xs opacity-80">{svc.subtitle}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C78D95] mb-3">
                  2. Choose Your Slumber Theme
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {THEMES_DATA.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setSelectedThemeId(theme.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedThemeId === theme.id
                          ? 'border-[#C78D95] bg-[#C78D95] text-white font-bold shadow-xs'
                          : 'border-[#5A7755]/20 hover:border-[#C78D95] text-[#232B25] bg-[#FAF7F4]'
                      }`}
                    >
                      <span className="block text-xs font-semibold truncate">{theme.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & GUESTS */}
          {!isSubmitted && step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#232B25] mb-2">
                  Preferred Event Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-4 py-3 text-sm text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                />
                {errors.eventDate && <p className="text-xs text-red-600 font-bold mt-1 underline">{errors.eventDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#232B25] mb-2">
                  Number of Campers (Packages 2 to 8)
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setGuestCount(n)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        guestCount === n
                          ? 'border-[#5A7755] bg-[#5A7755] text-white font-bold shadow-xs'
                          : 'border-[#5A7755]/20 hover:border-[#5A7755] text-[#232B25] bg-[#FAF7F4]'
                      }`}
                    >
                      <span className="block text-base font-extrabold">{n}</span>
                      <span className="text-[10px] block opacity-85">${PACKAGE_PRICES[n]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#232B25] mb-2">
                  Preferred Setup Window
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'afternoon', title: 'Afternoon Setup', desc: '1:00 PM to 4:00 PM' },
                    { id: 'morning', title: 'Morning Setup', desc: '10:00 AM to 1:00 PM' },
                  ].map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setTimeSlot(slot.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        timeSlot === slot.id
                          ? 'border-[#5A7755] bg-[#5A7755] text-white font-bold shadow-xs'
                          : 'border-[#5A7755]/20 hover:border-[#5A7755] text-[#232B25] bg-[#FAF7F4]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{slot.title}</span>
                      <span className="block text-[11px] opacity-80">{slot.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: MAGICAL ADD-ONS */}
          {!isSubmitted && step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A7755] mb-1">
                  Enhance Your Slumber Party (Optional)
                </h4>
                <p className="text-xs text-[#232B25]/70">
                  Select any of the 13 authentic add-on extras to include in your celebration.
                </p>
              </div>

              <div className="space-y-2.5 max-h-[45vh] overflow-y-auto pr-1">
                {ADD_ONS_DATA.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#C78D95] bg-[#C78D95] text-white shadow-xs'
                          : 'border-[#5A7755]/20 hover:border-[#C78D95] text-[#232B25] bg-[#FAF7F4]'
                      }`}
                    >
                      <div className="pr-3">
                        <span className="block text-xs font-bold">{addon.name}</span>
                        <span className="block text-[11px] opacity-80">{addon.description}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-xs font-bold">${addon.price} CI</span>
                        <span className="text-[10px] block opacity-85">{isChecked ? '✓ Added' : '+ Add'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & LOCATION */}
          {!isSubmitted && step === 4 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#232B25] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                  />
                  {errors.name && <p className="text-[11px] text-red-600 font-bold mt-1 underline">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#232B25] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 font-bold mt-1 underline">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#232B25] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (345) 926-XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 font-bold mt-1 underline">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#232B25] mb-1">Cayman District *</label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755] cursor-pointer"
                  >
                    {districtsList.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#232B25] mb-1">Street Address or Villa Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Villa 4B, Caribbean Club, Seven Mile Beach"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                />
                {errors.streetAddress && <p className="text-[11px] text-red-600 font-bold mt-1 underline">{errors.streetAddress}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#232B25] mb-1">Special Requests or Notes</label>
                <textarea
                  rows={2}
                  placeholder="Child names for personalized boards, theme mix requests..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#FAF7F4] border border-[#5A7755]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                />
              </div>
            </div>
          )}

          {/* STEP 5: REVIEW & SUMMARY */}
          {!isSubmitted && step === 5 && (
            <div className="space-y-4">
              <div className="bg-[#FAF7F4] border border-[#5A7755]/20 rounded-2xl p-5 text-xs text-[#232B25] space-y-2.5">
                <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                  <span className="text-[#232B25]/60 font-medium">Selected Theme:</span>
                  <span className="font-bold text-[#232B25]">{currentTheme.title}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                  <span className="text-[#232B25]/60 font-medium">Campers / Tents:</span>
                  <span className="font-bold text-[#232B25]">{guestCount} Guests (${baseServicePrice} CI)</span>
                </div>
                <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                  <span className="text-[#232B25]/60 font-medium">Event Date:</span>
                  <span className="font-bold text-[#232B25]">{eventDate} ({timeSlot})</span>
                </div>
                <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                  <span className="text-[#232B25]/60 font-medium">Location:</span>
                  <span className="font-bold text-[#232B25]">{streetAddress}, {district}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                  <span className="text-[#232B25]/60 font-medium">Contact:</span>
                  <span className="font-bold text-[#232B25]">{name} ({phone})</span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="border-b border-[#5A7755]/15 pb-2">
                    <span className="text-[#232B25]/60 font-medium block mb-1">Add-Ons ({selectedAddOns.length}):</span>
                    <span className="font-bold text-[#232B25]">{selectedAddOns.join(', ')} (+${addOnsTotal} CI)</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 text-sm font-black text-[#5A7755]">
                  <span>Estimated Total:</span>
                  <span>${estimatedTotal} CI</span>
                </div>
              </div>
            </div>
          )}

          {/* SUBMITTED CONFIRMATION */}
          {isSubmitted && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16  bg-[#5A7755] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-sans text-2xl font-black text-[#232B25]">
                Slumber Booking Request Sent!
              </h3>
              <p className="text-xs text-[#232B25]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>! Your reservation reference is <strong>{bookingRef}</strong>. Our styling concierge will contact you within 2 hours.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/13459253217?text=Hi%20Paradise%20Slumbers!%20I%20just%20submitted%20booking%20reference%20${bookingRef}%20for%20${eventDate}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3  text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Chat with Concierge on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {!isSubmitted && (
          <div className="p-4 sm:p-5 border-t border-[#5A7755]/15 bg-[#FAF7F4] flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5  text-xs font-bold text-[#232B25] bg-white hover:bg-[#EFF4EE] border border-[#5A7755]/20 transition-colors cursor-pointer"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-2.5  text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-xs"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitBooking}
                className="px-8 py-2.5  text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-md"
              >
                Confirm Reservation (${estimatedTotal} CI)
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
