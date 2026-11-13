import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#5A7755] backdrop-blur-sm text-white py-4 sm:py-4 relative z-10 border-t border-[#4E6849] shadow-inner">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* LOGO ONLY (NO TEXT BESIDE OR UNDER LOGO AS REQUESTED) */}
        <div className="flex items-center justify-center">
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer group p-1.5 rounded-full bg-white border-2 border-white/40 shadow-md hover:scale-105 transition-transform"
            title="Paradise Slumbers Grand Cayman"
          >
            <img
              src={LOGO_IMAGE}
              alt="Paradise Slumbers Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Social Icons in Logo Palette (Dusty Rose & Sage Gold) */}
        <div className="flex items-center justify-center gap-3.5 pt-1">
          {/* Instagram */}
          <a
            href="https://instagram.com/paradiseslumbers.ky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-[#C78D95] text-white hover:bg-[#B06F78] flex items-center justify-center transition-all hover:scale-110 shadow-xs"
          >
            <Instagram className="w-4 h-4 text-white" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs border border-white/20"
          >
            <Facebook className="w-4 h-4 text-white" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/13459253217"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] flex items-center justify-center transition-all hover:scale-110 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Footer Navigation Links: Privacy Policy & Blogs */}
        <div className="flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider text-white/90 pt-1">
          <button
            onClick={() => onNavigate('privacy')}
            className="hover:text-[#E8C5C8] transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-white/30">•</span>
          <button
            onClick={() => onNavigate('privacy')}
            className="hover:text-[#E8C5C8] transition-colors cursor-pointer"
          >
            Blogs
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/15 text-xs text-white/70 font-medium">
          <p>
            Copyright © {new Date().getFullYear()} Paradise Slumbers Ltd. 
          </p>
        </div>

      </div>
    </footer>
  );
};