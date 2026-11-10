import React from 'react';
import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

export const TopNavbar: React.FC = () => {
  return (
    <div className="bg-[#883c74] text-[#FAF7F4] text-xs py-2 px-4 sm:px-8 border-b border-[#3D4C3F] relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Island delivery tag */}
        <div className="flex items-center gap-2 text-[#D3DECF]">
          <MapPin className="w-3.5 h-3.5 text-[#C78D95] shrink-0" />
          <span className="font-medium tracking-wide">
            Grand Cayman, Cayman Islands
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline text-[#BCCBB8]">Island-Wide Bespoke Setup & Next-Day Packdown</span>
        </div>

        {/* Right: Contact & Social links */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          {/* Phone */}
          <a
            href="tel:+13459267586"
            className="flex items-center gap-1.5 hover:text-[#E8C5C8] transition-colors"
            title="Call Paradise Slumbers"
          >
            <Phone className="w-3.5 h-3.5 text-[#C78D95]" />
            <span className="hidden md:inline">+1 (345) 926-SLUMBER</span>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@paradiseslumbers.ky"
            className="hidden lg:flex items-center gap-1.5 hover:text-[#E8C5C8] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C78D95]" />
            <span>hello@paradiseslumbers.ky</span>
          </a>

         
        </div>
      </div>
    </div>
  );
};
