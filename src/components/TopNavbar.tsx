import React from 'react';
import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

export const TopNavbar: React.FC = () => {
  return (
    <div className="bg-[#2D382F] text-[#FAF7F4] text-xs py-2 px-4 sm:px-8 border-b border-[#3D4C3F] relative z-40 transition-colors">
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

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/13459267586?text=Hi%20Paradise%20Slumbers!%20I'd%20love%20to%20inquire%20about%20booking%20a%20luxury%20slumber%20setup."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#A5CBA0] hover:text-white transition-colors"
            title="WhatsApp us"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-white/15">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#D3DECF] hover:text-[#E8C5C8] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#D3DECF] hover:text-[#E8C5C8] transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
