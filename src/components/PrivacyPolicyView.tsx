import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { BlogSection } from './BlogSection';

interface PrivacyPolicyViewProps {
  onOpenBooking: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-6 pb-16 bg-[#FAF7F4]">
      {/* Privacy Policy Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5  border border-[#5A7755]/30 bg-white text-xs font-bold uppercase tracking-wider text-[#5A7755] shadow-xs mb-4">
            <ShieldCheck className="w-4 h-4 text-[#5A7755]" />
            <span>Grand Cayman Privacy and Trust</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-black text-[#384C37] tracking-tight mb-4">
            Privacy Policy and Client Protection
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#232B25]/80 max-w-2xl mx-auto">
            At Paradise Slumbers, we respect your family's privacy, home confidentiality, and personal information in full compliance with Cayman Islands Data Protection legislation.
          </p>
          <div className="text-xs text-[#232B25]/60 mt-2 font-mono">
            Last updated: February 2026 • Grand Cayman, Cayman Islands
          </div>
        </div>

        {/* Policy Content Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#5A7755]/15 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5A7755] text-white flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-sans text-xl font-bold text-[#384C37]">
                1. Cayman Islands Data Protection Act (DPA)
              </h2>
            </div>
            <p className="font-sans text-sm text-[#232B25]/80 leading-relaxed mb-4">
              Paradise Slumbers is committed to safeguarding personal information collected when you book slumber parties, custom tents, or design services. We operate strictly in accordance with the Cayman Islands Data Protection Act (2021 Revision). We only collect necessary contact information (name, email, phone number, setup address district) to process quotes and deliver party installations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-[#232B25]/85">
                <CheckCircle2 className="w-4 h-4 text-[#5A7755] shrink-0 mt-0.5" />
                <span>Never sold, rented, or shared with third-party advertisers.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#232B25]/85">
                <CheckCircle2 className="w-4 h-4 text-[#5A7755] shrink-0 mt-0.5" />
                <span>Secured via encrypted communications and certified Formspree SSL.</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-[#5A7755]/15 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#C78D95] text-white flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-sans text-xl font-bold text-[#384C37]">
                2. Photography and Child Privacy Consent
              </h2>
            </div>
            <p className="font-sans text-sm text-[#232B25]/80 leading-relaxed mb-3">
              We treat the privacy of our young VIP campers with utmost reverence. Setup photos displayed in our portfolio and social gallery capture the teepee decor, lighting, and styling.
            </p>
            <p className="font-sans text-sm text-[#232B25]/80 leading-relaxed">
              No photos of children are ever taken or published on social media or our website without explicit written consent from the booking parent or guardian. Parents are free to request immediate removal of any published photo at any time by emailing info@paradiseslumbers.ky.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#5A7755]/15 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5A7755] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-sans text-xl font-bold text-[#384C37]">
                3. Cleanliness, Bedding Hygiene and Disinfection Standards
              </h2>
            </div>
            <p className="font-sans text-sm text-[#232B25]/80 leading-relaxed">
              Every tent fabric cover, mattress protector, bed sheet, and decorative plush cushion is laundered using hypoallergenic, fragrance-free baby-safe detergent between every event. Non-fabric items, breakfast trays, lanterns, and styling props are steam-sanitized and wiped with hospital-grade, child-safe disinfectant prior to setup.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-[#5A7755]/15 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-white flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-sans text-xl font-bold text-[#384C37]">
                4. Island-Wide Delivery and Setup Terms
              </h2>
            </div>
            <p className="font-sans text-sm text-[#232B25]/80 leading-relaxed">
              Deliveries across Grand Cayman (George Town, Seven Mile Beach, West Bay, South Sound, Prospect, Savannah, Lower Valley, Bodden Town, East End, North Side) are scheduled with confirmed arrival windows. A clean, clear, dry indoor space is required for sleepover installations.
            </p>
          </div>
        </div>
      </div>

      {/* Blogs Section (Mandated to be on the Privacy Policy page only) */}
      <div className="border-t border-[#5A7755]/15 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C78D95]">
              Paradise Slumbers Stories and Guides
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-black text-[#232B25] mt-1">
              Party Planning Blog and Guides
            </h2>
          </div>
        </div>
        <BlogSection onOpenBooking={onOpenBooking} />
      </div>
    </div>
  );
};
