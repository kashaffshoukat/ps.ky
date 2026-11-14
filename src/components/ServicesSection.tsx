import React, { useState } from 'react';
import { Heart, CheckCircle2, PlusCircle, ArrowUpRight, ChevronDown, ChevronUp, Sparkles, Play } from 'lucide-react';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onOpenBooking?: (serviceId?: string, themeId?: string, packageId?: string) => void;
  onNavigate?: (view: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'inclusions' | 'addons'>('packages');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allPackagesData = [
    {
      id: 'pkg-1',
      title: 'Cozy Solo Duo',
      subtitle: '1 Host + 1 Guest (2 People)',
      price: '$275',
      period: 'KYD / event hire',
      image: '/assets/aistudio/3.jfif',
      features: [
        'Hire of 2 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name & gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-2',
      title: 'Trio Glamping Party',
      subtitle: '1 Host + 2 Guests (3 People)',
      price: '$395',
      period: 'KYD / event hire',
      image: '/assets/aistudio/2e.jfif',
      features: [
        'Hire of 3 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name &  gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-3',
      title: 'Signature Glamping Setup',
      subtitle: '1 Host + 3 Guests (4 People)',
      price: '$495',
      period: 'KYD / event hire',
      image: '/assets/aistudio/4.jpeg',
      features: [
        'Hire of 4 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name &  gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-4',
      title: 'Five-Fold Fiesta',
      subtitle: '1 Host + 4 Guests (5 People)',
      price: '$595',
      period: 'KYD / event hire',
      image: '/assets/aistudio/aall.jfif',
      features: [
        'Hire of 5 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name &  gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-5',
      title: 'Grand Cayman Glamping',
      subtitle: '1 Host + 5 Guests (6 People)',
      price: '$670',
      period: 'KYD / event hire',
      image: '/assets/aistudio/w3.jpeg',
      features: [
        'Hire of 6 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name &  gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-6',
      title: 'Mega Glamping Crew',
      subtitle: '1 Host + 6 Guests (7 People)',
      price: '$765',
      period: 'KYD / event hire',
      image: '/assets/aistudio/butter.jpeg',
      features: [
        'Hire of 7 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name &  gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-7',
      title: 'Ultimate Glamping Celebration',
      subtitle: '1 Host + 7 Guests (8 People)',
      price: '$820',
      period: 'KYD / event hire',
      image: '/assets/aistudio/3w.jpeg',
      features: [
        'Hire of 8 custom A-frame tents',
        'Theme blankets & cozy decorative cushions',
        'Breakfast tray tables with fairy lights & LED lightboard',
        'Customized tumbler with each camper’s name &  gift bag',
        '4ft candy table with cake stand & accessories',
      ],
    },
  ];

  // Inclusions with each setup
  const inclusionsList = [
    'Hire of custom A-frame wooden teepee tents',
    'Luxurious theme blankets & decorative plush cushions (campers bring their own hypoallergenic pillows/bedding)',
    'Individual wooden breakfast tray tables',
    'Personalized  gift bag on every tray table (includes customized tumbler, assorted squishies & stretchies, and a glow stick)',
    'Customized water bottle / tumbler with each camper’s name on it',
    'Magical fairy lights and personalised custom LED message lightboard',
    '4ft candy table display with cake stand & accessories (cake and candy not included)',
    'Full professional delivery, setup, styling, and next-morning or same-day breakdown across Grand Cayman',
  ];

  // Updated Add-Ons list
  const addOnsList = [
    'Balloon Arches & Styling: Custom balloon garlands and columns matched to your party colors',
    'Theme Decorated Party Cake: Freshly baked and custom decorated to match your chosen theme',
    'Graze Girl Charcuterie Board: Curated sweet or savory boards tailored to your celebration',
    'Fresh Flower Display / Garlands: Floral arrangements and fresh garlands sourced locally',
    'Custom Piñata: Themed party piñata ready for celebration fun',
    'Party Tableware & Decorations: Coordinated plates, cups, napkins, candles, and extra decor',
    'Spa Package & Nail Pampering: Fun mini-spa and nail care pampering experience',
    'Henna Tattoo & Face Painting: Live artistic henna tattoos and face painting in Grand Cayman',
  ];

  return (
    <section id="services" className="relative z-10 bg-white text-[#232B25] select-none py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Grand Cayman's Slumber Services</span>
            </div>
            <CuteSmileyCloud size="md" className="shrink-0 mx-auto" />

          </ScrollReveal>

         

          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Glamping Packages, Inclusions and Add-Ons
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-xs sm:text-sm text-[#232B25]/75 leading-relaxed">
              Pricing in KYD. Includes delivery, setup, and next-morning or same-day breakdown across Grand Cayman.
            </p>
          </ScrollReveal>

          {/* Tab Navigation Pill Strip */}
          <ScrollReveal animation="fade-up" delay={350}>
            <div className="inline-flex items-center p-1.5 bg-white/90 backdrop-blur-sm border border-[#5A7755]/25 shadow-md mt-2">
              <button
                onClick={() => setActiveTab('packages')}
                className={`px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'packages'
                    ? 'bg-[#5A7755] text-white shadow-lg'
                    : 'text-[#384C37] hover:text-[#5A7755]'
                }`}
              >
                All Packages
              </button>
              <button
                onClick={() => setActiveTab('inclusions')}
                className={`px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'inclusions'
                    ? 'bg-[#5A7755] text-white shadow-lg'
                    : 'text-[#384C37] hover:text-[#5A7755]'
                }`}
              >
                Inclusions
              </button>
              <button
                onClick={() => setActiveTab('addons')}
                className={`px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'addons'
                    ? 'bg-[#5A7755] text-white shadow-lg'
                    : 'text-[#384C37] hover:text-[#5A7755]'
                }`}
              >
                Add-Ons
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* FULL-WIDTH SPECIAL OFFER BANNER */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="w-full my-6 p-4 sm:p-6 bg-gradient-to-r from-[#5A7755]/95 to-[#455c42]/95 backdrop-blur-sm text-white rounded-none shadow-xl border-y-2 border-white/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-4">
                <CuteSmileyCloud size="md" className="shrink-0" />
              
              <div className="space-y-2"> 
                <div>
                  <span className="bg-yellow-400/90 text-[#384C37] text-[10px] font-black px-2.5 py-0.5 rounded-none uppercase tracking-wider inline-block">
                    Inclusions with Each Setup
                  </span>
                </div>
                <div>
                  <span className="text-sm sm:text-base font-black tracking-tight text-white uppercase leading-snug block">
                    Custom Name Tumblers and Camper Gift Bags with Every Setup!
                  </span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Every setup comes with custom teepees, blankets, tray tables, fairy lights, LED lightboard, 4ft candy table with cake stand, personalized camper tumblers, and gift bags filled with squishies, spa masks and glow sticks.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full sm:w-auto text-center">
              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#384C37] hover:bg-neutral-100 text-xs font-black uppercase tracking-wider rounded-none shadow-md transition-all inline-block border border-white"
              >
                Book Setup ➔
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* TAB 1: PACKAGES CARDS */}
        {activeTab === 'packages' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start pt-2">
              {allPackagesData.map((pkg, index) => {
                const isExpanded = !!expandedCards[pkg.id];

                return (
                  <ScrollReveal key={pkg.id} animation="scale-in" delay={index * 100}>
                    <div
                      className="w-full relative bg-white/95 backdrop-blur-sm text-[#232B25] rounded-2xl overflow-hidden border-2 border-[#5A7755]/25 shadow-md hover:border-[#5A7755]/50 transition-all duration-300 flex flex-col justify-between group h-full"
                    >
                      <div>
                        <div className="w-full h-56 sm:h-64 overflow-hidden relative">
                          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        <div className="p-5 sm:p-6 pb-2">
                          <div className="text-center mb-2">
                            <span className="inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#5A7755]/10 text-[#5A7755] border border-[#5A7755]/20">
                              {pkg.subtitle}
                            </span>
                          </div>

                          <div className="text-center space-y-1 mb-4">
                            <h3 className="text-lg font-black uppercase tracking-tight text-[#384C37]">
                              {pkg.title}
                            </h3>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-2xl sm:text-3xl font-black text-[#5A7755]">
                                {pkg.price}
                              </span>
                              <span className="text-[11px] font-semibold text-black/60">
                                {pkg.period}
                              </span>
                            </div>
                          </div>

                          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 pb-2' : 'max-h-0 opacity-0'}`}>
                            <div className="w-full h-px mb-4 bg-[#5A7755]/20" />
                            <ul className="space-y-2 text-xs font-medium text-black">
                              {pkg.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#5A7755]" />
                                  <span className="text-black font-medium">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 pt-0 space-y-2">
                        <button
                          onClick={() => toggleExpand(pkg.id)}
                          className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-[#5A7755] hover:bg-[#384C37] text-white"
                        >
                          <span>{isExpanded ? 'Collapse Details' : 'Expand to View More Details'}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        <button
                          onClick={() => onOpenBooking ? onOpenBooking(undefined, undefined, pkg.id) : null}
                          className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-[#A56069] hover:bg-[#8E5058] text-white"
                        >
                          <span>Select Package</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: INCLUSIONS */}
        {activeTab === 'inclusions' && (
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="max-w-6xl mx-auto py-6 animate-fadeIn">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#5A7755]/25 shadow-xl overflow-hidden">
                <div className="flex flex-col-reverse lg:flex-row items-stretch">
                  
                  <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#B06F78]">
                        Standard Setup Details
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#384C37] tracking-tight">
                        Inclusions with Each Setup
                      </h3>
                      <p className="text-xs sm:text-sm text-[#232B25]/80 font-medium">
                        Every Paradise Slumbers booking comes thoughtfully styled with keepsake camper gifts and full setup across Grand Cayman.
                      </p>
                    </div>

                    <ul className="space-y-3.5">
                      {inclusionsList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#5A7755]/10 border border-[#5A7755]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5A7755]" />
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-black/85 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenBooking ? onOpenBooking() : null}
                        className="px-6 py-3 rounded-xl bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <span>Book Your Setup Now</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 min-h-[320px] sm:min-h-[420px] relative overflow-hidden bg-neutral-100">
                    <img
                      src="/assets/aistudio/7.jfif"
                      alt="Paradise Slumbers Inclusions"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#B06F78] block">
                        Grand Cayman Luxury
                      </span>
                      <span className="text-sm font-black text-[#384C37] uppercase">
                        Handcrafted and Steam-Sanitized
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 3: ADD-ONS */}
        {activeTab === 'addons' && (
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="max-w-6xl mx-auto py-6 animate-fadeIn">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#5A7755]/25 shadow-xl overflow-hidden">
                <div className="flex flex-col-reverse lg:flex-row items-stretch">
                  
                  <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#B06F78]">
                        Optional Party Extras
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#384C37] tracking-tight">
                        Party Add-Ons
                      </h3>
                      <p className="text-xs sm:text-sm text-[#232B25]/80 font-medium">
                        Prices on request and subject to availability and number of campers. Add-ons may vary depending on popularity and product availability.
                      </p>
                    </div>

                    <ul className="space-y-3.5">
                      {addOnsList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#5A7755]/10 border border-[#5A7755]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5A7755]" />
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-black/85 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate ? onNavigate('contact') : null}
                        className="px-6 py-3 rounded-xl bg-[#A56069] hover:bg-[#8E5058] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <span>Enquire Add-Ons</span>
                        <PlusCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 min-h-[320px] sm:min-h-[420px] relative overflow-hidden bg-neutral-100">
                    <img
                      src="/assets/aistudio/3e.jfif"
                      alt="Paradise Slumbers Add-Ons"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#B06F78] block">
                        Custom Party Decor
                      </span>
                      <span className="text-sm font-black text-[#384C37] uppercase">
                        Balloons, Henna, Cake and More
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ======================================================== */}
        {/* ENLARGED HD VIDEO SECTION WITH CIRCULAR LOGO & BORDERS   */}
        {/* ======================================================== */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-16 pt-10 border-t-2 border-[#5A7755]/20">
            <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
                <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Experience The Magic</span>
            </div>
            <CuteSmileyCloud size="md" className="shrink-0 mx-auto" />

          </ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-black text-[#384C37] uppercase tracking-tight">
                Watch Our Glamping Showcase
              </h3>
              <p className="text-xs text-[#232B25]/75">
                High-definition preview of our luxury indoor setups across Grand Cayman.
              </p>
            </div>

            {/* Luxury Container with Refined Solid Borders & Shadow */}
            <div className="max-w-6xl mx-auto bg-black rounded-none shadow-2xl border-4 border-[#5A7755] relative overflow-hidden group">
              
              {/* TOP-RIGHT CORNER CIRCULAR LOGO WATERMARK */}
              <div className="absolute top-4 right-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md p-1 border-2 border-[#5A7755] shadow-2xl flex items-center justify-center pointer-events-none select-none">
                <img 
                  src="/assets/aistudio/logo.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* HD RENDER VIDEO WITH SHARP PIXEL OPTIMIZATION */}
              <video
                className="w-full h-auto max-h-[75vh] object-contain mx-auto block transform-gpu"
                style={{ imageRendering: 'crisp-edges' }}
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/aistudio/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ScrollReveal>
        {/* ======================================================== */}

      </div>
    </section>
  );
};

export default ServicesSection;