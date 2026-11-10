import React, { useState } from 'react';
import { Heart, CheckCircle2, Gift, PlusCircle, ArrowUpRight, MessageCircle, Tent } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking?: (serviceId?: string, themeId?: string, packageId?: string) => void;
  onNavigate?: (view: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'inclusions' | 'addons'>('packages');

  const allPackagesData = [
    {
      id: 'pkg-1',
      title: 'Cozy Solo Duo',
      subtitle: '1 Host + 1 Guest (2 People)',
      price: '$275',
      period: 'KYD / overnight',
      cardStyle: 'white',
      image: 'https://paradiseslumbersky-btzm.vercel.app/3e.jfif',
      features: [
        'Overnight hire of 2 custom A-frame tents',
        'Hypo-allergenic mattresses & fitted sheets',
        'Theme blankets & cozy cushions',
        'Fairy lights & individual tray tables',
      ],
    },
    {
      id: 'pkg-2',
      title: 'Trio Slumber Party',
      subtitle: '1 Host + 2 Guests (3 People)',
      price: '$395',
      period: 'KYD / overnight',
      cardStyle: 'custom-dark', // #233122
      image: 'https://paradiseslumbersky-btzm.vercel.app/2e.jfif',
      features: [
        'Overnight hire of 3 custom A-frame tents',
        'Hypo-allergenic mattresses & bedding',
        'Theme blankets & decorative cushions',
        'Tray tables with lanterns & LED candles',
      ],
    },
    {
      id: 'pkg-3',
      title: 'Signature Party Slumber',
      subtitle: '1 Host + 3 Guests (4 People)',
      price: '$495',
      period: 'KYD / overnight',
      cardStyle: 'white-sage', // White bg & Sage text
      image: 'https://paradiseslumbersky-btzm.vercel.app/4.jpeg',
      features: [
        'Overnight hire of 4 custom A-frame tents',
        'Full bedding, blankets & cozy cushions',
        'Breakfast tray tables with LED tealights',
        'Customised LED message lightboard',
        '4ft candy table with cake stand & accessories',
      ],
    },
    {
      id: 'pkg-4',
      title: 'Quintet Slumber Bash',
      subtitle: '1 Host + 4 Guests (5 People)',
      price: '$595',
      period: 'KYD / overnight',
      cardStyle: 'white',
      image: 'https://paradiseslumbersky-btzm.vercel.app/5e.jpeg',
      features: [
        'Overnight hire of 5 custom A-frame tents',
        'Hypo-allergenic mattresses & fitted sheets',
        'Theme blankets & decorative cushions',
        'Tray tables with lanterns & fairy lights',
        '4ft candy table with cake stand display',
      ],
    },
    {
      id: 'pkg-5',
      title: 'Grand Cayman Slumber',
      subtitle: '1 Host + 5 Guests (6 People)',
      price: '$670',
      period: 'KYD / overnight',
      cardStyle: 'custom-dark', // #233122
      image: 'https://paradiseslumbersky-btzm.vercel.app/3e.jfif',
      features: [
        'Overnight hire of 6 custom A-frame tents',
        'Full theme blankets & cozy cushions',
        'Individual tray tables & LED lighting',
        '4ft candy table with cake stand & accessories',
        'Full delivery, setup, and next-day takedown',
      ],
    },
    {
      id: 'pkg-6',
      title: 'Mega Sleepover Crew',
      subtitle: '1 Host + 6 Guests (7 People)',
      price: '$765',
      period: 'KYD / overnight',
      cardStyle: 'white',
      image: 'https://paradiseslumbersky-btzm.vercel.app/2e.jfif',
      features: [
        'Overnight hire of 7 custom A-frame tents',
        'Hypo-allergenic mattresses & bedding',
        'Theme blankets & decorative cushions',
        'Tray tables with lanterns & LED candles',
        '4ft candy table & custom lightboard',
      ],
    },
    {
      id: 'pkg-7',
      title: 'Ultimate Slumber Celebration',
      subtitle: '1 Host + 7 Guests (8 People)',
      price: '$820',
      period: 'KYD / overnight',
      cardStyle: 'custom-dark', // #233122
      image: 'https://paradiseslumbersky-btzm.vercel.app/4.jpeg',
      features: [
        'Overnight hire of 8 custom A-frame tents',
        'Full luxury bedding & theme cushions',
        'Breakfast tray tables with lanterns',
        '4ft candy table with cake stand & accessories',
        'Complete setup, styling, and takedown',
      ],
    },
  ];

  const inclusionsData = [
    {
      title: 'Custom A-Frame Tents',
      desc: 'Handcrafted wooden teepee tents designed specifically for magical indoor sleepovers.',
      image: 'https://paradiseslumbersky-btzm.vercel.app/3e.jfif',
      cardStyle: 'white',
    },
    {
      title: 'Hypo-Allergenic Mattresses',
      desc: 'Includes waterproof mattress protectors and freshly laundered fitted sheets.',
      image: 'https://paradiseslumbersky-btzm.vercel.app/2e.jfif',
      cardStyle: 'custom-dark',
    },
    {
      title: 'Theme Blankets & Cushions',
      desc: 'Luxurious plush blankets and decorative pillows matching your chosen party theme.',
      image: 'https://paradiseslumbersky-btzm.vercel.app/4.jpeg',
      cardStyle: 'white-sage',
    },
    {
      title: 'Breakfast Tray Tables',
      desc: 'Individual wooden trays adorned with lanterns and safe LED tealight candles.',
      image: 'https://paradiseslumbersky-btzm.vercel.app/5e.jpeg',
      cardStyle: 'white',
    },
    {
      title: 'Custom LED Lightboard',
      desc: 'Personalized messaging board tailored with custom wording for your special occasion.',
      image: 'https://paradiseslumbersky-btzm.vercel.app/3e.jfif',
      cardStyle: 'custom-dark',
    },
    {
      title: '4ft Candy Table Display',
      desc: 'Includes cake stand and styling accessories (cake & candy available as add-ons).',
      image: 'https://paradiseslumbersky-btzm.vercel.app/2e.jfif',
      cardStyle: 'white',
    },
  ];

  const addOnsData = [
    {
      title: 'Adopt a Blue Iguana',
      subtitle: 'Conservation Facility Gift',
      price: 'On Request',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400',
      desc: 'A unique surprise gift from the Grand Cayman Conservation Facility. We organize all adoption details for you!',
      cardStyle: 'white',
    },
    {
      title: 'Theme Cake & Cupcakes',
      subtitle: 'Freshly Baked & Decorated',
      price: 'On Request',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=400',
      desc: 'Custom decorated cake and build-your-own cupcake kits (1 per camper, nut-free / allergy-safe options available).',
      cardStyle: 'custom-dark',
    },
    {
      title: 'Graze Girl Charcuterie',
      subtitle: 'Kids or Adults Boards',
      price: 'On Request',
      image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=400',
      desc: 'Dessert boards, vegan, gluten-free, or traditional meats and cheeses curated to suit your party budget.',
      cardStyle: 'white-sage',
    },
    {
      title: 'Spa & Sleepover Bundles',
      subtitle: 'Pamper Package',
      price: 'On Request',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      desc: 'Nail polish, nail files, hand/foot scrubs and moisturizers, eye masks, toothbrushes, and bath bombs for each camper!',
      cardStyle: 'white',
    },
    {
      title: 'Balloon & Floral Styling',
      subtitle: 'Deluxe Party Decor',
      price: 'On Request',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
      desc: 'Custom balloon arches, balloon displays, and fresh flower garlands designed to match your chosen party theme.',
      cardStyle: 'custom-dark',
    },
    {
      title: 'Glow Party Experience',
      subtitle: 'Neon Lighting & Extras',
      price: 'On Request',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
      desc: 'Add all the GLOW imaginable with neon lights, glow sticks, and high-energy party accessories!',
      cardStyle: 'white',
    },
  ];

  return (
    <section id="services" className="relative z-10 bg-[#FBF9F6] text-[#232B25] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */} <br/> <br/> <br/>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5  bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Slumber Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
            Glamping Packages, Inclusions &amp; Add-Ons
          </h2>

          <p className="text-xs sm:text-sm text-[#232B25]/75 leading-relaxed">
            Pricing in KYD. Includes delivery, setup, overnight hire, and next-morning takedown across Grand Cayman.
          </p>

          {/* Tab Navigation Pill Strip */}
          <div className="inline-flex items-center p-1.5 bg-white border border-[#5A7755]/25  shadow-md mt-4">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2  text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'packages'
                  ? 'bg-[#5A7755] text-white shadow-lg'
                  : 'text-[#384C37] hover:text-[#5A7755]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`px-5 py-2  text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inclusions'
                  ? 'bg-[#5A7755] text-white shadow-lg'
                  : 'text-[#384C37] hover:text-[#5A7755]'
              }`}
            >
              Inclusions
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-5 py-2  text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'addons'
                  ? 'bg-[#5A7755] text-white shadow-lg'
                  : 'text-[#384C37] hover:text-[#5A7755]'
              }`}
            >
              Add-Ons
            </button>
          </div>
        </div>

        {/* TAB 1: ALL 7 PACKAGE CARDS (Stacked Vertically on Mobile) */}
        {activeTab === 'packages' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-stretch pt-6">
              {allPackagesData.map((pkg) => {
                const isDark = pkg.cardStyle === 'custom-dark';
                const isWhiteSage = pkg.cardStyle === 'white-sage';
                return (
                  <div
                    key={pkg.id}
                    className={`w-full relative rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2.5 ${
                      isDark
                        ? 'bg-[#233122] text-white p-7 sm:p-8 border-2 border-[#7A9A60]/50 shadow-[0_20px_40px_rgba(35,49,34,0.35)]'
                        : isWhiteSage
                        ? 'bg-white text-[#384C37] p-7 sm:p-8 border-2 border-[#5A7755]/50 shadow-[0_15px_30px_rgba(90,119,85,0.18)] ring-2 ring-[#5A7755]/20'
                        : 'bg-white text-[#232B25] p-7 sm:p-8 border-2 border-[#5A7755]/20 shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:border-[#5A7755]/45'
                    }`}
                  >
                  

                    <div>
                      {/* Image Header */}
                      <div className="w-full h-54 sm:h-78 rounded-2xl overflow-hidden mb-6 border border-black/10 shadow-md relative">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
                      </div>

                      {/* Subtitle Pill */}
                      <div className="text-center mb-3">
                        <span className={`inline-block px-4 py-1  text-[11px] font-bold uppercase tracking-wider ${
                          isDark ? 'bg-white/15 text-[#A8C88E] border border-white/20' : isWhiteSage ? 'bg-[#5A7755]/15 text-[#384C37] border border-[#5A7755]/30' : 'bg-[#5A7755]/10 text-[#5A7755] border border-[#5A7755]/20'
                        }`}>
                          {pkg.subtitle}
                        </span>
                      </div>

                      {/* Package Name Title & Price Header */}
                      <div className="text-center space-y-1.5 mb-6">
                        <h3 className={`text-xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-[#384C37]'}`}>
                          {pkg.title}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1.5 pt-1">
                          <span className={`text-3xl sm:text-4xl font-black ${isDark ? 'text-[#A8C88E]' : 'text-[#5A7755]'}`}>
                            {pkg.price}
                          </span>
                          <span className={`text-xs font-semibold ${isDark ? 'text-white/70' : 'text-[#232B25]/60'}`}>
                            {pkg.period}
                          </span>
                        </div>
                      </div>

                      <div className={`w-full h-px mb-6 ${isDark ? 'bg-white/15' : 'bg-[#5A7755]/20'}`} />

                      {/* Features List */}
                      <ul className="space-y-2.5 mb-8 text-xs font-medium">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-[#7A9A60]' : 'text-[#5A7755]'}`} />
                            <span className={isDark ? 'text-white/90' : isWhiteSage ? 'text-[#384C37]' : 'text-[#232B25]/85'}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Select Package Button */}
                    <button
                      onClick={() => onOpenBooking ? onOpenBooking(undefined, undefined, pkg.id) : null}
                      className={`w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        isDark
                          ? 'bg-[#7A9A60] hover:bg-[#698750] text-white'
                          : isWhiteSage
                          ? 'bg-[#5A7755] hover:bg-[#384C37] text-white'
                          : 'bg-[#5A7755] text-white hover:bg-[#384C37]'
                      }`}
                    >
                      <span>Select Package</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: INCLUSIONS CARDS */}
        {activeTab === 'inclusions' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-[#384C37]">What's Included in Every Setup</h3>
              <p className="text-xs text-[#232B25]/75 mt-1">Every booking includes full delivery, assembly, cozy styling, and next-morning takedown.</p>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {inclusionsData.map((inc, idx) => {
                const isDark = inc.cardStyle === 'custom-dark';
                const isWhiteSage = inc.cardStyle === 'white-sage';
                return (
                  <div key={idx} className={`w-full rounded-3xl overflow-hidden border-2 shadow-[0_15px_30px_rgba(0,0,0,0.08)] flex flex-col justify-between group ${
                    isDark 
                      ? 'bg-[#233122] text-white border-[#7A9A60]/50' 
                      : isWhiteSage 
                      ? 'bg-white text-[#384C37] border-[#5A7755]/50 ring-2 ring-[#5A7755]/20' 
                      : 'bg-white text-[#232B25] border-[#5A7755]/20'
                  }`}>
                    <div>
                      <div className="w-full h-74 sm:h-58 overflow-hidden relative border-b border-[#5A7755]/15">
                        <img src={inc.image} alt={inc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#5A7755] text-[10px] font-bold px-3 py-1  border border-[#5A7755]/30 shadow-md">
                          Included
                        </div>
                      </div>
                      <div className="p-6 space-y-2">
                        <h4 className={`text-base font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-[#384C37]'}`}>{inc.title}</h4>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-white/80' : isWhiteSage ? 'text-[#384C37]/90 font-medium' : 'text-[#232B25]/75'}`}>{inc.desc}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-inner ${
                        isDark ? 'bg-white/10 text-white border border-white/20' : isWhiteSage ? 'bg-[#5A7755]/15 border border-[#5A7755]/30 text-[#384C37]' : 'bg-[#5A7755]/10 border border-[#5A7755]/20 text-[#5A7755]'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 text-[#5A7755]" />
                        <span>Standard Inclusion</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: ADD-ONS CARDS */}
        {activeTab === 'addons' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-[#384C37]">Glamping Add-Ons &amp; Party Extras</h3>
              <p className="text-xs text-[#232B25]/75 mt-1">Prices on request and subject to availability. Customized to make your event unforgettable.</p>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {addOnsData.map((item, idx) => {
                const isDark = item.cardStyle === 'custom-dark';
                const isWhiteSage = item.cardStyle === 'white-sage';
                return (
                  <div key={idx} className={`w-full rounded-3xl overflow-hidden border-2 shadow-[0_15px_30px_rgba(0,0,0,0.08)] flex flex-col justify-between group ${
                    isDark 
                      ? 'bg-[#233122] text-white border-[#7A9A60]/50' 
                      : isWhiteSage 
                      ? 'bg-white text-[#384C37] border-[#5A7755]/50 ring-2 ring-[#5A7755]/20' 
                      : 'bg-white text-[#232B25] border-[#5A7755]/20'
                  }`}>
                    <div>
                      <div className="w-full h-54 sm:h-78 overflow-hidden relative border-b border-[#5A7755]/15">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 bg-[#5A7755] text-white text-[10px] font-bold px-3 py-1  shadow-md">
                          {item.price}
                        </div>
                      </div>
                      <div className="p-6 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C78D95]">{item.subtitle}</span>
                        <h4 className={`text-base font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-[#384C37]'}`}>{item.title}</h4>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-white/80' : isWhiteSage ? 'text-[#384C37]/90 font-medium' : 'text-[#232B25]/75'}`}>{item.desc}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => onNavigate ? onNavigate('contact') : null}
                        className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm ${
                          isDark 
                            ? 'bg-[#7A9A60] hover:bg-[#698750] text-white' 
                            : isWhiteSage
                            ? 'bg-[#5A7755] hover:bg-[#384C37] text-white'
                            : 'bg-[#5A7755]/10 hover:bg-[#5A7755]/20 border border-[#5A7755]/25 text-[#5A7755]'
                        }`}
                      >
                        <span>Enquire Add-On</span>
                        <PlusCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;