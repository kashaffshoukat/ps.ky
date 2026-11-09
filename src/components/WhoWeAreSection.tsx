import React from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { CuteSmileyCloud } from './CuteSmileyCloud';

interface WhoWeAreSectionProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  // 4 real kids glamping sleepover setup images
  const aboutImages = [
    {
      id: 1,
      image: 'https://paradiseslumbersky-btzm.vercel.app/3e.jfif',
      title: 'A-Frame Glamping Oasis',
      caption: 'Handcrafted timber teepees with fairy lights',
    },
    {
      id: 2,
      image: 'https://paradiseslumbersky-btzm.vercel.app/2e.jfif',
      title: 'Bespoke Theme Styling',
      caption: 'Twinkling fairy lights & accessories',
    },
    {
      id: 3,
      image: 'https://paradiseslumbersky-btzm.vercel.app/4.jpeg',
      title: 'Individual Tray Tables',
      caption: 'Breakfast trays and cozy pillows',
    },
    {
      id: 4,
      image: 'https://paradiseslumbersky-btzm.vercel.app/5e.jpeg',
      title: 'Kids Interior Design',
      caption: 'Magical bedrooms and play spaces',
    },
  ];

  return (
    <section id="who-we-are" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-transparent border-b border-[#5A7755]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
            <span>Grand Cayman's Slumber Story</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
            <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Who We Are: Crafting Island Magic
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            Grand Cayman's first and only luxury indoor glamping experience, providing bespoke themed sleepovers for kids.
          </p>
        </div>

        {/* DISTINCTIVE BENTO GRID FOR 'WHO WE ARE': Text Side (ONLY text, NO founder photo/name) + 4 Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Exact Text Side Box ONLY (NO founder photo or bio text) */}
          <div className="lg:col-span-7 bento-card bg-white rounded-3xl p-6 sm:p-9 border border-[#5A7755]/20 shadow-sm flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A7755]/10 text-[#5A7755] text-xs font-bold uppercase tracking-wider">
                <span>About Paradise Slumbers</span>
              </div>

              {/* Exact Text provided by the user in its box only */}
              <div className="space-y-3.5 text-xs sm:text-sm text-[#232B25]/85 leading-relaxed font-normal">
                <p className="font-semibold text-[#384C37] text-sm sm:text-base leading-snug">
                  Paradise Slumbers is Grand Cayman’s first and only indoor glamping experience, providing a range of themed sleepovers for kids aged 6 years and over across Grand Cayman.
                </p>
                
                <p>
                  For birthday parties, BFF sleepovers, special occasions or just for fun, Paradise Slumbers will create magical memories for the special little people in your life x
                </p>

                <p>
                  Choose from one of our popular themes and we will transform your party space into an indoor glamping oasis, with individual tents, camping mattresses and tray tables adorned with gorgeous fairy lights and accessories.
                </p>

                <p>
                  We deliver, assemble and style your party, and then come back the following morning to pack it all away…leaving you stress and laundry free!
                </p>

                <p>
                  For themed parties without tents, or if you’re short on time and need a full service party planning service, Paradise Slumbers can arrange the whole event including catering, balloons, decorations and more.
                </p>

                <p>
                  For something more permanent, enquire within about our signature Kids Interior Design service by Candice Hall. Candice will transform your little ones bedroom/play space into something magical….designed and themed from top to bottom!
                </p>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-6 mt-6 border-t border-[#5A7755]/15 flex items-center justify-between">
              <span className="text-xs font-bold text-[#5A7755]">
                Delivered &amp; Styled Across Grand Cayman
              </span>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-xs font-bold text-[#5A7755] hover:text-[#384C37] flex items-center gap-1.5 cursor-pointer bg-[#5A7755]/10 hover:bg-[#5A7755]/20 px-3.5 py-1.5 rounded-full transition-colors"
              >
                <span>Enquire Here</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#5A7755]" />
              </button>
            </div>
          </div>

          {/* RIGHT: 4 Real Kids Slumber Setup Images */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {aboutImages.map((item) => (
              <div
                key={item.id}
                onClick={onOpenBooking}
                className="bento-card group relative rounded-3xl overflow-hidden border border-[#5A7755]/20 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[175px] sm:min-h-[200px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="relative z-10 p-3.5 sm:p-4 text-white">
                  <h4 className="font-sans text-xs sm:text-sm font-black text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#E8C5C8] font-medium line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>Book With Cayman's Favorite Team</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
