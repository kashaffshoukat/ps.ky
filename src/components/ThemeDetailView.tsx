import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, PlusCircle, Calendar, Heart } from 'lucide-react';
import { THEMES_DATA } from '../data/mockData';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal'; // <-- Import ScrollReveal

interface ThemeDetailViewProps {
  themeId: string;
  onBack: () => void;
  onOpenBooking: (serviceId?: string, themeId?: string) => void;
  onToggleWishlist?: (id: string) => void;
  savedWishlistIds?: string[];
}

const NEW_THEME_ITEM = {
  id: 'theme-dreaming-of-unicorn',
  title: 'Dreaming of Unicorn',
  category: 'Outdoor / Special Collection',
  description: 'Magical outdoor teepee setup featuring fresh floral garlands, charming unicorn bedding, twinkling lights, and lush garden styling.',
  image: '/assets/aistudio/dreaming.jfif',
};

const ALL_THEMES = [NEW_THEME_ITEM, ...THEMES_DATA];

export const ThemeDetailView: React.FC<ThemeDetailViewProps> = ({
  themeId,
  onBack,
  onOpenBooking,
  onToggleWishlist,
  savedWishlistIds = [],
}) => {
  const theme = ALL_THEMES.find((t) => t.id === themeId) || ALL_THEMES[0];
  const saved = savedWishlistIds.includes(theme.id);

  const themeAddons = [
    { title: 'Balloon Arches & Styling', desc: 'Custom balloon garlands and columns matched to your party colors' },
    { title: 'Theme Decorated Party Cake', desc: 'Freshly baked and custom decorated to match your chosen theme' },
    { title: 'Graze Girl Charcuterie Board', desc: 'Curated sweet or savory boards tailored to your celebration' },
    { title: 'Fresh Flower Display / Garlands', desc: 'Floral arrangements and fresh garlands sourced locally' },
    { title: 'Custom Piñata', desc: 'Themed party piñata ready for celebration fun' },
    { title: 'Party Tableware & Decorations', desc: 'Coordinated plates, cups, napkins, candles, and extra decor' },
    { title: 'Spa Package & Nail Pampering', desc: 'Fun mini-spa and nail care pampering experience' },
    { title: 'Henna Tattoo & Face Painting', desc: 'Live artistic henna tattoos and face painting in Grand Cayman' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans select-none text-[#232B25]">
      
      {/* Back Navigation Bar */}
      <ScrollReveal animation="slide-left" delay={0}>
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#5A7755]/30 rounded-xl text-[#384C37] font-bold text-xs sm:text-sm hover:bg-[#5A7755] hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Themes & Home</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleWishlist && onToggleWishlist(theme.id)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#C78D95]/40 rounded-xl text-[#C78D95] font-bold text-xs sm:text-sm hover:bg-[#C78D95] hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-[#C78D95] text-[#C78D95]' : ''}`} />
            <span>{saved ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
          </button>
        </div>
      </ScrollReveal>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-7 space-y-4">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
                <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>{theme.category}</span>
            </div>
            <CuteSmileyCloud size="md" className="hidden sm:inline-block" />

          </ScrollReveal>

          

          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="font-sans text-3xl sm:text-5xl font-black text-[#384C37] tracking-tight uppercase">
              {theme.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <div className="space-y-3 text-sm sm:text-base text-[#232B25]/85 leading-relaxed pt-2">
              <p>
                Transform your child's next sleepover into an unforgettable magical wonderland with our signature {theme.title} experience. Carefully designed and styled on-island in Grand Cayman, this theme immerses guests in enchanting details, cozy comfort, and breathtaking aesthetic beauty from the moment they walk in.
              </p>
              <p>
                {theme.description || 'Every teepee, cushion, and twinkling light is meticulously arranged to create a cozy, dreamlike atmosphere where children can share stories, giggle late into the night, and create cherished childhood memories.'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking(undefined, theme.id)}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#384C37] hover:bg-[#5A7755] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Theme Now</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5">
          <ScrollReveal animation="scale-in" delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-neutral-200">
              <img
                src={theme.image || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'}
                alt={theme.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Two-Column Details: Inclusions & Add-ons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Inclusions Box */}
        <ScrollReveal animation="slide-left" delay={150}>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#5A7755]/20 shadow-lg space-y-6 h-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5A7755]/15 flex items-center justify-center text-[#5A7755]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-black uppercase text-[#384C37]">
                Inclusions with Each Setup
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#232B25]/85 leading-relaxed">
              <p>
                Every Paradise Slumbers setup is meticulously built around our signature handcrafted A-frame wooden teepee tents, designed to create a cozy, immersive slumber environment. We provide luxurious theme-matching blankets and plush decorative cushions for ultimate coziness (campers bring their own hypoallergenic pillows and bedding for a restful night), paired with individual wooden breakfast tray tables for each guest.
              </p>
              <p>
                To elevate the magical ambiance, each setup is beautifully illuminated with twinkling fairy lights and a personalized custom LED message lightboard. Every tray table also includes a delightful personalized camper gift bag featuring a custom water bottle or tumbler bearing each camper’s name, assorted squishies, stretchies, and a glowing stick for evening fun.
              </p>
              <p>
                To complete your celebration, we include a gorgeous 4ft candy table display equipped with a cake stand and styling accessories (cake and candy not included). Best of all, our concierge team takes care of everything with full professional delivery, meticulous setup, stunning aesthetic styling, and convenient next-morning or same-day breakdown anywhere across Grand Cayman.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Add-ons Box */}
        <ScrollReveal animation="slide-right" delay={200}>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#C78D95]/30 shadow-lg space-y-6 h-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C78D95]/15 flex items-center justify-center text-[#C78D95]">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-black uppercase text-[#384C37]">
                Optional Party Add-Ons
              </h3>
            </div>
            <p className="text-xs text-[#232B25]/70 italic">
              Prices on request and subject to availability and number of campers.
            </p>
            <div className="space-y-4">
              {themeAddons.map((addon, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF7F4] border border-[#C78D95]/20 flex justify-between items-center transition-transform hover:scale-[1.01]">
                  <div>
                    <h4 className="font-bold text-sm text-[#384C37]">{addon.title}</h4>
                    <p className="text-xs text-[#232B25]/70">{addon.desc}</p>
                  </div>
                  <span className="text-[11px] font-black px-3 py-1 bg-[#C78D95]/20 text-[#B06F78] rounded-full whitespace-nowrap">
                    On Request
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default ThemeDetailView;