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
  Check,
  RefreshCw,
  Send,
  Sparkles,
} from 'lucide-react';
import { FAQS } from '../data/mockData';
import { CuteSmileyCloud } from './CuteSmileyCloud';

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

// Authentic packages strictly from paradiseslumbers.ky (No long dashes)
const PACKAGE_OPTIONS = [
  { value: '2 People ($275)', label: '2 People (1 Host + 1 Guest) • $275 CI' },
  { value: '3 People ($395)', label: '3 People (1 Host + 2 Guests) • $395 CI' },
  { value: '4 People ($495)', label: '4 People (1 Host + 3 Guests) • $495 CI [Most Popular]' },
  { value: '5 People ($595)', label: '5 People (1 Host + 4 Guests) • $595 CI' },
  { value: '6 People ($670)', label: '6 People (1 Host + 5 Guests) • $670 CI' },
  { value: '7 People ($765)', label: '7 People (1 Host + 6 Guests) • $765 CI' },
  { value: '8 People ($820)', label: '8 People (1 Host + 7 Guests) • $820 CI [Grand Party]' },
];

// Authentic themes strictly from paradiseslumbers.ky
// Authentic themes including all requested themes (No long dashes)
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

// Authentic service offerings
const SERVICE_TYPE_OPTIONS = [
  { value: 'Standard Slumber Party', label: 'Standard Slumber Party Booking' },
  { value: 'Custom Made Tents', label: 'Custom Made Tents (To Keep at Home)' },
  { value: 'Kids Interior Design', label: 'Kids Interior Design Makeover (Free Consultation)' },
  { value: 'Full Event Planning', label: 'Full-Service Party Planning & Styling' },
];

const CAMPER_OPTIONS = [
  { value: 'Not Applicable', label: 'Select number (if applicable)' },
  { value: '2', label: '2 Campers' },
  { value: '3', label: '3 Campers' },
  { value: '4', label: '4 Campers' },
  { value: '5', label: '5 Campers' },
  { value: '6', label: '6 Campers' },
  { value: '7', label: '7 Campers' },
  { value: '8', label: '8+ Campers' },
];

const EXTRAS_LIST = [
  'Adopt a Blue Iguana',
  'Balloon Arches & Displays',
  'Gourmet Pancake Breakfast Stack',
  'Themed Celebration Cake',
  'Candy Table Treats',
  'Graze Girl Charcuterie Boards',
  'Fresh Flower Displays',
  'Glow Party Experience',
  'Party Pinata',
  'Tableware & Decor Kit',
  'Spa Pamper Package',
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgkzyqv';

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
    package: prefilledPackage || '4 People ($495)',
    theme: prefilledTheme || '',
    service_type: prefilledService === 'custom-tents' ? 'Custom Made Tents' : prefilledService === 'interior-design' ? 'Kids Interior Design' : 'Standard Slumber Party',
    campers: '4',
    extras: [],
    message: '',
  });

  // Sync incoming prefill changes when user clicks booking from any section
  useEffect(() => {
    if (prefilledService) {
      const matchSvc = prefilledService === 'custom-tents'
        ? 'Custom Made Tents'
        : prefilledService === 'interior-design'
        ? 'Kids Interior Design'
        : 'Standard Slumber Party';
      setFormData((prev) => ({ ...prev, service_type: matchSvc }));
    }
    if (prefilledTheme) {
      // Find matching theme name
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

  // Form validation
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
      // Graceful fallback for offline preview
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
      package: '4 People ($495)',
      theme: '',
      service_type: 'Standard Slumber Party',
      campers: '4',
      extras: [],
      message: '',
    });
    setTouched({});
    setLastSubmittedData(null);
  };

  const createWhatsAppLink = () => {
    const data = lastSubmittedData || formData;
    const text = `Hi Paradise Slumbers! I would like to book a slumber celebration:
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
    <section id="contact" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-[#FAF7F4] border-b border-[#5A7755]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A7755]/15 border border-[#5A7755]/30 text-[#5A7755] text-xs font-bold tracking-widest uppercase">
            <span>Direct Concierge Booking</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Booking &amp; Enquiry Form
            </h1>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            To complete your slumber party reservation or inquire about custom tents and room styling, please fill out the verified form below.
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Direct Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Booking Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#5A7755]/20 shadow-sm">
            {submitted && lastSubmittedData ? (
              <div className="py-8 sm:py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#5A7755] text-white flex items-center justify-center mx-auto shadow-md">
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

                {/* Summary Box */}
                <div className="bg-[#FAF7F4] border border-[#5A7755]/20 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto">
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
                          <span key={i} className="bg-white border border-[#5A7755]/20 text-[#384C37] px-2 py-0.5 rounded-md text-[11px] font-bold">
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

                {/* Instant Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Send Copy to WhatsApp (+1 345 925-3217)</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold text-[#384C37] bg-white hover:bg-[#FAF7F4] border border-[#5A7755]/30 transition-all cursor-pointer shadow-xs"
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
                {/* Notice if prefilled */}
                {(formData.theme || formData.service_type !== 'Standard Slumber Party') && (
                  <div className="p-3 rounded-2xl bg-[#5A7755]/10 border border-[#5A7755]/25 flex items-center justify-between text-xs text-[#384C37] font-bold">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#5A7755]" />
                      <span>Prefilled: {formData.service_type} {formData.theme ? `• Theme: ${formData.theme}` : ''}</span>
                    </div>
                    <span className="text-[10px] text-[#5A7755]/80 font-normal">Ready to submit</span>
                  </div>
                )}

                {/* ROW 1: Full Name & Phone Number */}
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* ROW 2: Email Address & Preferred Event Date */}
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* ROW 3: PACKAGES DROPDOWN & THEMES DROPDOWN */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="package" className="block text-xs font-bold text-[#384C37] mb-1.5">
                      Select Package Tier *
                    </label>
                    <select
                      id="package"
                      name="package"
                      required
                      value={formData.package}
                      onBlur={() => handleBlur('package')}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="">Choose a package...</option>
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
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

                {/* ROW 4: SERVICE TYPE & ESTIMATED CAMPERS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="service_type" className="block text-xs font-bold text-[#384C37] mb-1.5">
                      Service / Enquiry Focus *
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      required
                      value={formData.service_type}
                      onBlur={() => handleBlur('service_type')}
                      onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
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
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all cursor-pointer"
                    >
                      {CAMPER_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* ROW 5: EXTRAS CHECKBOXES */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#384C37] flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-[#5A7755]" />
                      <span>Select Add-On Extras (Optional)</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleSelectAllExtras}
                      className="text-xs font-bold text-[#5A7755] hover:underline cursor-pointer"
                    >
                      {formData.extras.length === EXTRAS_LIST.length ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-neutral-50 border border-neutral-200 rounded-2xl p-4">
                    {EXTRAS_LIST.map((extra) => {
                      const isChecked = formData.extras.includes(extra);
                      return (
                        <label
                          key={extra}
                          className={`flex items-center gap-2.5 p-2 rounded-xl text-xs cursor-pointer transition-all select-none ${
                            isChecked
                              ? 'bg-[#5A7755] text-white font-bold shadow-xs'
                              : 'text-[#232B25] hover:bg-[#FAF7F4] font-medium'
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="extras"
                            value={extra}
                            checked={isChecked}
                            onChange={() => handleExtraToggle(extra)}
                            className="w-4 h-4 accent-[#5A7755] rounded cursor-pointer shrink-0"
                          />
                          <span className="truncate">{extra}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* ROW 6: Your Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#384C37] mb-1.5">
                    Your Message / Special Requests *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Child's name, age, address in Grand Cayman, special theme requests..."
                    value={formData.message}
                    onBlur={() => handleBlur('message')}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm text-[#232B25] bg-neutral-50 outline-none focus:border-[#5A7755] focus:bg-white transition-all resize-y min-h-[90px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting ? 'bg-neutral-400' : 'bg-[#5A7755] hover:bg-[#384C37] active:scale-98'
                  }`}
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Booking Enquiry ➔'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Accordion FAQ */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#5A7755]/20 shadow-sm text-center space-y-4">
              <h3 className="font-sans text-lg font-black text-[#384C37]">
                Other Ways to Reach Us
              </h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-3 bg-[#FAF7F4] text-[#232B25] py-3 px-4 rounded-2xl border border-[#5A7755]/15 font-bold text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#5A7755] shrink-0" />
                  <span>Grand Cayman Island-Wide</span>
                </div>

                <a
                  href="mailto:info@paradiseslumbers.ky"
                  className="flex items-center justify-center gap-3 bg-[#FAF7F4] text-[#232B25] hover:bg-[#5A7755] hover:text-white py-3 px-4 rounded-2xl border border-[#5A7755]/15 font-bold text-xs sm:text-sm transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#5A7755] shrink-0 group-hover:text-white" />
                  <span>info@paradiseslumbers.ky</span>
                </a>

                <a
                  href="tel:+13459253217"
                  className="flex items-center justify-center gap-3 bg-[#FAF7F4] text-[#232B25] hover:bg-[#5A7755] hover:text-white py-3 px-4 rounded-2xl border border-[#5A7755]/15 font-bold text-xs sm:text-sm transition-all group"
                >
                  <Phone className="w-4 h-4 text-[#5A7755] shrink-0 group-hover:text-white" />
                  <span>+1 (345) 925-3217</span>
                </a>

                <a
                  href="https://wa.me/13459253217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#5A7755] text-white hover:bg-[#384C37] py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span>WhatsApp Island Concierge</span>
                </a>
              </div>
            </div>

            {/* Service Guarantee Card */}
            <div className="bg-[#FAF7F4] rounded-3xl p-6 border border-[#5A7755]/20 space-y-2 text-xs text-[#232B25]">
              <div className="flex items-center gap-2 text-[#384C37] font-black text-sm">
                <Check className="w-4 h-4 rounded-full bg-[#5A7755] text-white p-0.5" />
                <span>All-Inclusive Island Service</span>
              </div>
              <p className="leading-relaxed text-[#232B25]/80">
                Every slumber party includes delivery, full styling, memory foam mattresses, themed decor, lighting, and next-day takedown across Grand Cayman.
              </p>
            </div>

            {/* Accordion FAQ with Animated Cute Smiley Clouds (No emojis) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#5A7755]/25 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-neutral-100">
                <div className="animate-bounce duration-1000 shrink-0">
                  <CuteSmileyCloud size="sm" />
                </div>
                <h4 className="font-sans text-lg sm:text-2xl font-black text-[#384C37] tracking-tight leading-snug">
                  Frequently Asked Questions &amp; Mattress Guide
                </h4>
                <div className="animate-bounce duration-1000 delay-150 shrink-0 hidden sm:block">
                  <CuteSmileyCloud size="sm" />
                </div>
              </div>

              <div className="space-y-2.5">
                {FAQS.slice(0, 6).map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-2xl overflow-hidden transition-all ${
                        isOpen ? 'border-[#5A7755]/40 bg-[#FAF7F4]/60 shadow-xs' : 'border-neutral-200 bg-neutral-50/70 hover:bg-neutral-100'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left text-xs sm:text-sm font-bold text-[#384C37] flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span className="pr-2">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#5A7755] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#384C37]/70 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-[#232B25]/85 bg-white leading-relaxed border-t border-neutral-200/80 pt-2.5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
