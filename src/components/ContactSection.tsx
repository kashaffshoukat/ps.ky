import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Gift,
  RefreshCw,
  Send,
  Sparkles,
  Heart,
  X,
  ShieldAlert,
} from 'lucide-react';
import { FAQS } from '../data/mockData';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

export interface ContactFormData {
  fullname: string;
  phone: string;
  email: string;
  date: string;
  package: string;
  theme: string;
  service_type: string;
  campers: string;
  extras: string[];
  message: string;
}

interface ContactSectionProps {
  prefilledService?: string;
  prefilledTheme?: string;
  prefilledPackage?: string;
}

const PACKAGE_OPTIONS = [
  { value: '1 Host + 1 Guest * $275 (2 people)', label: '1 Host + 1 Guest * $275 (2 people)' },
  { value: '1 Host + 2 guests * $395 (3 people)', label: '1 Host + 2 guests * $395 (3 people)' },
  { value: '1 Host + 3 guests * $495 (4 people)', label: '1 Host + 3 guests * $495 (4 people) [Most Popular]' },
  { value: '1 Host + 4 guests * $595 (5 people)', label: '1 Host + 4 guests * $595 (5 people)' },
  { value: '1 Host + 5 guests * $670 (6 people)', label: '1 Host + 5 guests * $670 (6 people)' },
  { value: '1 Host + 6 guests * $765 (7 people)', label: '1 Host + 6 guests * $765 (7 people)' },
  { value: '1 Host + 7 guests * $820 (8 people)', label: '1 Host + 7 guests * $820 (8 people) [Grand Party]' },
];

const EXTRAS_LIST = [
  'Balloon Arches & Styling',
  'Theme Decorated Party Cake',
  'Graze Girl Charcuterie Board',
  'Fresh Flower Display / Garlands',
  'Custom Piñata',
  'Party Tableware & Decorations (Plates, Cups, Napkins, Candles)',
  'Spa Package & Nail Pampering',
  'Henna Tattoo & Face Painting',
];

const THEME_OPTIONS = [
  'CandyLand',
  'Dreaming of Unicorns',
  'Dark Unicorn',
  'Enchanted Forest',
  'Fuchsia Garden',
  'Lilo & Stitch',
  'Butterfly Fantasy',
  'Glow in the Dark Gamer',
  'Elegant Black & White with Silver Trimmings',
  'Harley Quinn',
  'Olivia Rodrigo (Sour & Guts)',
  'All White Faux Fur Luxury',
  'Christmas & Holiday Magic',
  'Frozen',
  'Fortnite',
  'Harry Potter',
  'Japanese inspired with cherry blossoms',
  'Pirates of the Caribbean',
  'Safari / Jungle',
  'Custom colour combinations on request',
];

const SERVICE_TYPE_OPTIONS = [
  { value: 'Standard Glamping Party', label: 'Standard Glamping Tent Setup' },
  { value: 'Custom Made Tents', label: 'Custom Made Tents (Tailor Made To Keep at Home - From $175)' },
  { value: 'Kids Interior Design', label: 'Kids Interior Design (Fully Themed Bedroom / Playroom Makeover - First Consultation Free)' },
  { value: 'Full Event Planning', label: 'Full-Service Party Planning & Styling' },
];

const CAMPER_OPTIONS = [
  { value: 'Not Applicable', label: 'Select number of campers' },
  { value: '2', label: '2 Campers' },
  { value: '3', label: '3 Campers' },
  { value: '4', label: '4 Campers' },
  { value: '5', label: '5 Campers' },
  { value: '6', label: '6 Campers' },
  { value: '7', label: '7 Campers' },
  { value: '8', label: '8+ Campers' },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/moedqlgw';

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledTheme,
  prefilledPackage,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullname: '',
    phone: '',
    email: '',
    date: '',
    package: prefilledPackage || '1 Host + 3 guests * $495 (4 people)',
    theme: prefilledTheme || '',
    service_type: prefilledService === 'custom-tents' ? 'Custom Made Tents' : prefilledService === 'interior-design' ? 'Kids Interior Design' : 'Standard Glamping Party',
    campers: '4',
    extras: [],
    message: '',
  });

  useEffect(() => {
    if (prefilledService) {
      const matchSvc = prefilledService === 'custom-tents'
        ? 'Custom Made Tents'
        : prefilledService === 'interior-design'
        ? 'Kids Interior Design'
        : 'Standard Glamping Party';
      setFormData((prev) => ({ ...prev, service_type: matchSvc }));
    }
    if (prefilledTheme) {
      const matchedTheme = THEME_OPTIONS.find((t) => t.toLowerCase().includes(prefilledTheme.toLowerCase())) || prefilledTheme;
      setFormData((prev) => ({ ...prev, theme: matchedTheme }));
    }
    if (prefilledPackage) {
      setFormData((prev) => ({ ...prev, package: prefilledPackage }));
    }
  }, [prefilledService, prefilledTheme, prefilledPackage]);

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormData | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    return {
      fullname: formData.fullname.trim().length >= 2,
      phone: formData.phone.replace(/[^0-9]/g, '').length >= 7,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
      date: formData.date.trim() !== '',
      package: formData.package.trim() !== '',
      theme: formData.theme.trim() !== '',
      service_type: formData.service_type.trim() !== '',
      message: formData.message.trim().length >= 3,
    };
  };

  const validity = validate();
  const isFormValid = Object.values(validity).every(Boolean);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleExtraToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.extras.includes(item);
      return {
        ...prev,
        extras: exists ? prev.extras.filter((e) => e !== item) : [...prev.extras, item],
      };
    });
  };

  const handleSelectAllExtras = () => {
    if (formData.extras.length === EXTRAS_LIST.length) {
      setFormData((prev) => ({ ...prev, extras: [] }));
    } else {
      setFormData((prev) => ({ ...prev, extras: [...EXTRAS_LIST] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullname: true,
      phone: true,
      email: true,
      date: true,
      package: true,
      theme: true,
      service_type: true,
      message: true,
    });

    if (!isFormValid) return;

    setIsSubmitting(true);
    setLastSubmittedData({ ...formData });

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullname,
          phone: formData.phone,
          email: formData.email,
          eventDate: formData.date,
          package: formData.package,
          theme: formData.theme,
          serviceFocus: formData.service_type,
          estimatedCampers: formData.campers,
          extrasSelected: formData.extras.join(', '),
          message: formData.message,
        }),
      });
    } catch {
      // Graceful fallback
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullname: '',
      phone: '',
      email: '',
      date: '',
      package: '1 Host + 3 guests * $495 (4 people)',
      theme: '',
      service_type: 'Standard Glamping Party',
      campers: '4',
      extras: [],
      message: '',
    });
    setTouched({});
    setLastSubmittedData(null);
  };

  const createWhatsAppLink = () => {
    const data = lastSubmittedData || formData;
    const text = `Hi Paradise Slumbers! I would like to book a glamping celebration:
• Name: ${data.fullname}
• Phone: ${data.phone}
• Email: ${data.email}
• Date: ${data.date || 'TBD'}
• Package: ${data.package || 'Not chosen'}
• Theme: ${data.theme || 'Not chosen'}
• Service: ${data.service_type}
• Campers: ${data.campers}
• Extras: ${data.extras.length > 0 ? data.extras.join(', ') : 'None'}
• Notes: ${data.message}`;

    return `https://wa.me/13459253217?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-none bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest shadow-xs backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Direct Concierge Booking</span>
            </div>
            <CuteSmileyCloud size="md" className="hidden sm:inline-block mx-auto" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
                Booking and Enquiry Form
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Pricing in KYD includes delivery, setup, next-morning or same-day breakdown, and all inclusions with each setup.
            </p>
          </ScrollReveal>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Booking Form & FAQs in Left Column */}
          <ScrollReveal animation="slide-left" delay={150} className="lg:col-span-8 space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 sm:p-10 border-2 border-[#5A7755]/20 shadow-sm relative">
              
              {/* SAGE GREEN SUCCESS MODAL POP-UP */}
              {submitted && lastSubmittedData && (
                <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
                  <div className="relative bg-[#5A7755] border-4 border-white text-white max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
                    
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/40"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="w-16 h-16 rounded-full bg-white text-[#5A7755] flex items-center justify-center mx-auto shadow-lg">
                      <Sparkles className="w-8 h-8 fill-[#5A7755]" />
                    </div>

                    <div className="space-y-2">
                      <span className="bg-white/20 text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest border border-white/30">
                        Enquiry Successfully Sent!
                      </span>
                      <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white pt-1">
                        Magical Celebration Awaits, {lastSubmittedData.fullname}! 
                      </h3>
                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed pt-1">
                        Thank you for choosing <strong>Paradise Slumbers</strong>. We have received your booking details for <strong>{lastSubmittedData.date}</strong> and our Cayman concierge team will reach out to your email (<strong>{lastSubmittedData.email}</strong>) shortly with setup confirmation.
                      </p>
                    </div>

                    <div className="bg-white/10 border border-white/30 p-4 text-left text-xs space-y-1.5">
                      <div className="flex justify-between border-b border-white/20 pb-1.5">
                        <span className="text-white/80">Selected Theme:</span>
                        <span className="font-bold text-white">{lastSubmittedData.theme}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/20 pb-1.5">
                        <span className="text-white/80">Package Tier:</span>
                        <span className="font-bold text-white">{lastSubmittedData.package}</span>
                      </div>
                      <div className="flex justify-between pt-0.5">
                        <span className="text-white/80">Campers:</span>
                        <span className="font-bold text-white">{lastSubmittedData.campers} Guests</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <a
                        href={createWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-none text-xs font-bold text-[#384C37] bg-white hover:bg-neutral-100 shadow-md transition-all cursor-pointer border border-white"
                      >
                        <MessageCircle className="w-4 h-4 text-[#5A7755]" />
                        <span>Send Instant Copy to WhatsApp (+1 345 925-3217)</span>
                      </a>
                      
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none text-xs font-bold text-white hover:bg-white/10 transition-all cursor-pointer border border-white/40"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-white" />
                        <span>Close and Book Another Event</span>
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {submitted && lastSubmittedData ? (
                <div className="py-8 sm:py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-none bg-[#5A7755] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl sm:text-3xl font-black text-[#384C37]">
                      Enquiry Dispatched Successfully!
                    </h3>
                    <p className="text-sm text-[#232B25]/80 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-[#384C37]">{lastSubmittedData.fullname}</strong>! Our Cayman team will confirm availability for <strong>{lastSubmittedData.date}</strong> shortly.
                    </p>
                  </div>

                  <div className="bg-[#FAF7F4] border-2 border-[#5A7755]/20 rounded-none p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto">
                    <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                      <span className="text-[#232B25]/70 font-medium">Package Tier:</span>
                      <span className="font-bold text-[#384C37]">{lastSubmittedData.package}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                      <span className="text-[#232B25]/70 font-medium">Selected Theme:</span>
                      <span className="font-bold text-[#384C37]">{lastSubmittedData.theme}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                      <span className="text-[#232B25]/70 font-medium">Service Focus:</span>
                      <span className="font-bold text-[#384C37]">{lastSubmittedData.service_type}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#5A7755]/15 pb-2">
                      <span className="text-[#232B25]/70 font-medium">Guests / Campers:</span>
                      <span className="font-bold text-[#384C37]">{lastSubmittedData.campers}</span>
                    </div>
                    {lastSubmittedData.extras.length > 0 && (
                      <div className="border-b border-[#5A7755]/15 pb-2">
                        <span className="text-[#232B25]/70 font-medium block mb-1">Add-Ons ({lastSubmittedData.extras.length}):</span>
                        <div className="flex flex-wrap gap-1.5">
                          {lastSubmittedData.extras.map((ex, i) => (
                            <span key={i} className="bg-white border border-[#5A7755]/20 text-[#384C37] px-2 py-0.5 rounded-none text-[11px] font-bold">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between pt-1">
                      <span className="text-[#232B25]/70 font-medium">Contact:</span>
                      <span className="font-bold text-[#384C37]">{lastSubmittedData.phone} • {lastSubmittedData.email}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] shadow-md transition-all cursor-pointer border border-[#5A7755]"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Send Copy to WhatsApp (+1 345 925-3217)</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-none text-xs font-bold text-[#384C37] bg-white hover:bg-[#FAF7F4] border-2 border-[#5A7755]/30 transition-all cursor-pointer shadow-xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-[#384C37]" />
                      <span>Book Another Event</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                 
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="fullname" className="text-xs font-bold text-[#384C37]">
                          Full Name *
                        </label>
                        {touched.fullname && (
                          <span className={`text-[10px] ${validity.fullname ? 'text-[#5A7755]' : 'text-[#B06F78] font-bold'}`}>
                            {validity.fullname ? '✓ Valid' : 'Min 2 characters'}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        required
                        placeholder="e.g. Sarah Jennings"
                        value={formData.fullname}
                        onBlur={() => handleBlur('fullname')}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-[#384C37]">
                          Phone Number (WhatsApp) *
                        </label>
                        {touched.phone && (
                          <span className={`text-[10px] ${validity.phone ? 'text-[#5A7755]' : 'text-[#B06F78] font-bold'}`}>
                            {validity.phone ? '✓ Valid' : 'Min 7 digits'}
                          </span>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+1 (345) 925-3217"
                        value={formData.phone}
                        onBlur={() => handleBlur('phone')}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-[#384C37]">
                          Email Address *
                        </label>
                        {touched.email && (
                          <span className={`text-[10px] ${validity.email ? 'text-[#5A7755]' : 'text-[#B06F78] font-bold'}`}>
                            {validity.email ? '✓ Valid' : 'Valid email required'}
                          </span>
                        )}
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.email}
                        onBlur={() => handleBlur('email')}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="date" className="text-xs font-bold text-[#384C37]">
                          Preferred Event Date *
                        </label>
                        {touched.date && (
                          <span className={`text-[10px] ${validity.date ? 'text-[#5A7755]' : 'text-[#B06F78] font-bold'}`}>
                            {validity.date ? '✓ Date set' : 'Date required'}
                          </span>
                        )}
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onBlur={() => handleBlur('date')}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Package Tier Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="package" className="block text-xs font-bold text-[#384C37] mb-1.5">
                        PACKAGES (Pricing in KYD) *
                      </label>
                      <select
                        id="package"
                        name="package"
                        required
                        value={formData.package}
                        onBlur={() => handleBlur('package')}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="">Select Package Tier...</option>
                        {PACKAGE_OPTIONS.map((pkg) => (
                          <option key={pkg.value} value={pkg.value}>
                            {pkg.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="theme" className="block text-xs font-bold text-[#384C37] mb-1.5">
                        Select Theme *
                      </label>
                      <select
                        id="theme"
                        name="theme"
                        required
                        value={formData.theme}
                        onBlur={() => handleBlur('theme')}
                        onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="">Choose a theme...</option>
                        {THEME_OPTIONS.map((themeName) => (
                          <option key={themeName} value={themeName}>
                            {themeName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service Focus & Campers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="service_type" className="block text-xs font-bold text-[#384C37] mb-1.5">
                        Service Offering *
                      </label>
                      <select
                        id="service_type"
                        name="service_type"
                        required
                        value={formData.service_type}
                        onBlur={() => handleBlur('service_type')}
                        onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
                      >
                        {SERVICE_TYPE_OPTIONS.map((svc) => (
                          <option key={svc.value} value={svc.value}>
                            {svc.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="campers" className="block text-xs font-bold text-[#384C37] mb-1.5">
                        Estimated Campers
                      </label>
                      <select
                        id="campers"
                        name="campers"
                        value={formData.campers}
                        onChange={(e) => setFormData({ ...formData, campers: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
                      >
                        {CAMPER_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Single Line Green Strip Inclusions Note */}
                  <div className="p-3.5 bg-[#5A7755] text-white rounded-none shadow-sm flex items-center justify-center text-center">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wide">
                      Inclusions with Each Setup and A Customized Tumblers and Camper Gift Bags Included!
                    </span>
                  </div>

                  {/* GLAMPING ADD-ONS Checkbox List */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <label className="text-xs font-bold text-[#384C37] flex items-center gap-1.5">
                          <span>OPTIONAL PARTY ADD-ONS (Quoted on Request)</span>
                        </label>
                        <span className="text-[10px] text-[#232B25]/60 block mt-0.5">
                          Prices on request and subject to availability and number of campers.
                        </span>
                         <button
                        type="button"
                        onClick={handleSelectAllExtras}
                        className="text-xs font-bold text-[#5A7755] hover:underline cursor-pointer"
                      >
                        {formData.extras.length === EXTRAS_LIST.length ? 'Deselect All' : 'Select All'}
                      </button>
                      </div>
                     
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-neutral-50 border-2 border-neutral-200 rounded-none p-4 max-h-72 overflow-y-auto no-scrollbar">
                      {EXTRAS_LIST.map((extra) => {
                        const isChecked = formData.extras.includes(extra);
                        return (
                          <label
                            key={extra}
                            className={`flex items-center gap-2.5 p-2.5 rounded-none text-xs cursor-pointer transition-all select-none border ${
                              isChecked
                                ? 'bg-[#5A7755] text-white font-bold border-[#5A7755] shadow-xs'
                                : 'text-[#232B25] bg-white hover:bg-[#FAF7F4] font-medium border-neutral-200'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="extras"
                              value={extra}
                              checked={isChecked}
                              onChange={() => handleExtraToggle(extra)}
                              className="w-4 h-4 accent-[#5A7755] rounded-none cursor-pointer shrink-0"
                            />
                            <span className="line-clamp-2 leading-tight">{extra}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#384C37] mb-1.5">
                      Your Message / Camper Names for Tumblers *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Child's name, camper names for personalized tumblers, age, address in Grand Cayman, or special requests..."
                      value={formData.message}
                      onBlur={() => handleBlur('message')}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-none border-2 border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all resize-y min-h-[90px]"
                    />
                  </div>

                  {/* PARADISE SLUMBERS – DAMAGE DISCLAIMER (Green Box) */}
                  <div className="p-4 sm:p-5 bg-[#5A7755] text-white rounded-none border-2 border-white/40 shadow-md space-y-2.5">
                    <div className="flex items-center gap-2 border-b border-white/20 pb-2">
                      <ShieldAlert className="w-4 h-4 text-white shrink-0" />
                      <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-white">
                        Paradise Slumbers – Damage Disclaimer
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/95 leading-relaxed">
                      By booking with Paradise Slumbers, the customer acknowledges that they are responsible for the care and proper use of all rental items and equipment provided.
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/95 leading-relaxed">
                      Any items damaged, broken, lost, or misused during the rental period will be the customer's responsibility. The customer agrees to cover the reasonable cost of repairs or, where necessary, the replacement cost of any damaged or lost items.
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/90 italic pt-1 border-t border-white/20">
                      We appreciate your cooperation in helping us keep Paradise Slumbers magical for everyone! Thank you for choosing Paradise Slumbers. 
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-none text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-blue-600 ${
                      isSubmitting ? 'bg-neutral-400' : 'bg-blue-600 hover:bg-blue-700 active:scale-98'
                    }`}
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Booking Enquiry ➔'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* FREQUENTLY ASKED QUESTIONS NOW BELOW THE FORM ON LEFT COLUMN */}
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 sm:p-8 border-2 border-[#5A7755]/25 shadow-sm">
              <div className="flex items-center gap-3 mb-5 pb-2 border-b border-neutral-100">
                <CuteSmileyCloud size="sm" />
                <h4 className="font-sans text-xl sm:text-2xl font-black text-[#384C37] tracking-tight leading-snug">
                  Frequently Asked Questions
                </h4>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border-2 rounded-none overflow-hidden transition-all ${
                        isOpen ? 'border-[#5A7755]/40 bg-[#FAF7F4]/60 shadow-xs' : 'border-neutral-200 bg-neutral-50/70 hover:bg-neutral-100'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left text-xs sm:text-sm font-bold text-[#384C37] flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span className="pr-2">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#5A7755] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#384C37]/70 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-[#232B25]/85 bg-white leading-relaxed border-t border-neutral-200/80 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column Services Spotlight Cards & Grand Cayman Map */}
          <ScrollReveal animation="slide-right" delay={250} className="lg:col-span-4 space-y-6">
            
            {/* Custom Made Tents Highlight Box */}
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 border-2 border-[#5A7755]/25 shadow-sm space-y-3">
              <span className="bg-[#5A7755] text-white text-[10px] font-bold px-2.5 py-1 rounded-none uppercase tracking-wider">
                Tailor Made To Keep
              </span>
              <h3 className="font-sans text-lg font-black text-[#384C37]">
                CUSTOM MADE TENTS (From $175)
              </h3>
              <p className="text-xs text-[#232B25]/80 leading-relaxed">
                If you love our custom made A-Frame tents as much as we do, we can have one specially hand made for you to keep at home so the magic continues all year round!
              </p>
              <span className="text-[11px] text-[#5A7755] font-bold block">
                Tent pricing is quoted for each unique order, depending on frame size, fabric and finishings.
              </span>
              
              <div className="pt-2">
                <a
                  href="https://wa.me/13459253217?text=Hi%20Paradise%20Slumbers!%20I%20would%20like%20to%20inquire%20about%20ordering%20Custom%20Made%20Tents%20to%20keep%20at%20home."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-[#5A7755] hover:bg-[#384C37] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer border border-[#5A7755]"
                >
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Kids Interior Design Highlight Box */}
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 border-2 border-[#C78D95]/40 shadow-sm space-y-3">
              <span className="bg-[#C78D95] text-white text-[10px] font-bold px-2.5 py-1 rounded-none uppercase tracking-wider">
                First Consultation Free
              </span>
              <h3 className="font-sans text-lg font-black text-[#384C37]">
                KIDS INTERIOR DESIGN (Candice Hall)
              </h3>
              <p className="text-xs text-[#232B25]/80 leading-relaxed">
                Fully themed bedroom / playroom makeover by Candice Hall. Candice has many years experience creating unique spaces, including decorating for the Ritz Carlton Private Residences and The Deckhouses, Grand Cayman.
              </p>
              <blockquote className="text-xs italic text-[#B06F78] border-l-2 border-[#C78D95] pl-3 py-0.5">
                "People with great passion can make the impossible happen!"
              </blockquote>
              
              <div className="pt-2">
                <a
                  href="https://wa.me/13459253217?text=Hi%20Paradise%20Slumbers!%20I%20would%20like%20to%20book%20my%20complimentary%20consultation%20for%20Kids%20Interior%20Design%20with%20Candice%20Hall."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-[#B06F78] hover:bg-[#965A63] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer border border-[#B06F78]"
                >
                  <span>Book Free Consultation on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Info */}
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 sm:p-7 border-2 border-[#5A7755]/20 shadow-sm text-center space-y-4">
              <h3 className="font-sans text-lg font-black text-[#384C37]">
                Other Ways to Reach Us
              </h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-3 bg-[#FAF7F4] text-[#232B25] py-3 px-4 rounded-none border border-[#5A7755]/15 font-bold text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#5A7755] shrink-0" />
                  <span>Grand Cayman Island-Wide</span>
                </div>

                <a
                  href="mailto:info@paradiseslumbers.ky"
                  className="flex items-center justify-center gap-3 bg-[#FAF7F4] text-[#232B25] hover:bg-[#5A7755] hover:text-white py-3 px-4 rounded-none border border-[#5A7755]/15 font-bold text-xs sm:text-sm transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#5A7755] shrink-0 group-hover:text-white" />
                  <span>info@paradiseslumbers.ky</span>
                </a>

                <a
                  href="tel:+13459253217"
                  className="flex items-center justify-center gap-3 bg-[#FAF7F4] text-[#232B25] hover:bg-[#5A7755] hover:text-white py-3 px-4 rounded-none border border-[#5A7755]/15 font-bold text-xs sm:text-sm transition-all group"
                >
                  <Phone className="w-4 h-4 text-[#5A7755] shrink-0 group-hover:text-white" />
                  <span>+1 (345) 925-3217</span>
                </a>
              </div>
            </div>

            {/* Grand Cayman Map Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 border-4 border-[#5A7755] shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-[#5A7755]/15 pb-3">
                <div className="flex items-center gap-2">
                 
                    <MapPin className="w-3.5 h-3.5" />
                  <h3 className="font-sans text-sm font-black text-[#384C37]">
                  Grand Cayman Delivery Zone
                  </h3>
                </div>
              
              </div>

              <div className="relative w-full h-[180px] border border-neutral-300 overflow-hidden bg-neutral-100">
                <iframe
                  title="Grand Cayman Map"
                  src="https://maps.google.com/maps?q=Grand%20Cayman&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              
            </div>

          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;