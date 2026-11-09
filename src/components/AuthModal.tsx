import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Gift, LogOut, Award, Lock, Sparkles, Layers, Users, Sliders } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  birthdayMonth?: string;
  preferences?: string[];
  joinedDate?: string;
  memberCode?: string;
  isAdmin?: boolean;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserProfile | null;
  onSaveUser?: (user: UserProfile | null) => void;
  mode?: 'admin' | 'auth';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  user,
  onSaveUser,
  mode = 'admin',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone || '+1 (345) 925-3217');
    }
  }, [user]);

  if (!isOpen) return null;

  const handleGoogleSignIn = () => {
    const googleUser: UserProfile = {
      name: 'Ghulam (Google Verified)',
      email: 'ghulam@paradiseslumbers.ky',
      phone: '+1 (345) 925-3217',
      joinedDate: 'Nov 2026',
      memberCode: 'VIP-KY-8821',
    };
    if (onSaveUser) onSaveUser(googleUser);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      onClose();
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const savedUser: UserProfile = {
      name: name.trim() || 'Ghulam',
      email: email.trim(),
      phone: phone.trim() || '+1 (345) 925-3217',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      memberCode: user?.memberCode || `VIP-KY-${Math.floor(1000 + Math.random() * 9000)}`,
    };

    if (onSaveUser) onSaveUser(savedUser);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      onClose();
    }, 1000);
  };

  const handleLogout = () => {
    if (onSaveUser) onSaveUser(null);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-sans animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} aria-hidden="true" />

      {/* Modal Container with 2-Column Side-by-Side Layout */}
      <div className="relative z-10 max-w-4xl w-full bg-[#FAF7F4] rounded-3xl overflow-hidden shadow-2xl border border-[#5A7755]/30 flex flex-col md:flex-row text-[#232B25] my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#384C37]/10 hover:bg-[#384C37]/20 text-[#384C37] flex items-center justify-center transition-colors cursor-pointer border border-[#384C37]/20"
          aria-label="Close portal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT SIDE: Brand Showcase Graphic (Sage Green & Dusty Rose Theme) */}
        <div className="w-full md:w-1/2 relative bg-[#384C37] p-8 flex flex-col items-center justify-center overflow-hidden min-h-[300px] md:min-h-[420px] border-b md:border-b-0 md:border-r border-[#2A3A29]">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5A7755]/40 via-[#C78D95]/30 to-[#384C37] blur-2xl pointer-events-none" />
          
          {/* Center Showcase Circle */}
          <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-[#C78D95]/60 shadow-[0_0_40px_rgba(199,141,149,0.3)] bg-[#2A3A29]/80 flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse pointer-events-none" />
            
            <div className="w-16 h-16 rounded-full bg-white p-1 mb-3 border border-white/40 shadow-md flex items-center justify-center">
              <img src={LOGO_IMAGE} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>

            <h3 className="text-lg sm:text-xl font-black tracking-wider text-white">
              PARADISE SLUMBERS
            </h3>
            <span className="text-[10px] tracking-[0.25em] text-[#C78D95] uppercase font-bold mt-1">
              Grand Cayman
            </span>

            <div className="mt-3 px-3 py-1 rounded-full bg-[#C78D95]/30 border border-[#C78D95]/50 text-white text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C78D95]" />
              <span>{mode === 'admin' ? 'ADMIN PORTAL' : 'VIP MEMBER PORTAL'}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content / Form / Admin Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center space-y-5 bg-white">
          
          {mode === 'admin' ? (
            /* ADMIN PANEL SCREEN */
            <div className="space-y-5 text-center sm:text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5A7755]/10 border border-[#5A7755]/20 text-[#384C37] text-xs font-bold shadow-xs mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#5A7755]" />
                  <span>Admin Control Hub</span>
                </div>
                <h2 className="text-2xl font-black text-[#384C37]">
                  Admin Panel
                </h2>
                <p className="text-xs text-[#232B25]/75 mt-1 leading-relaxed">
                  Management dashboard for bookings, inventory, and client customization.
                </p>
              </div>

              {/* Admin Quick Action Placeholders */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-[#FAF7F4] border border-[#5A7755]/15 flex flex-col items-center justify-center space-y-1">
                  <Layers className="w-5 h-5 text-[#5A7755]" />
                  <span className="text-[11px] font-bold text-[#384C37]">Bookings</span>
                  <span className="text-[9px] text-[#232B25]/60 font-semibold">Coming Soon</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#FAF7F4] border border-[#5A7755]/15 flex flex-col items-center justify-center space-y-1">
                  <Users className="w-5 h-5 text-[#C78D95]" />
                  <span className="text-[11px] font-bold text-[#384C37]">Clients</span>
                  <span className="text-[9px] text-[#232B25]/60 font-semibold">Coming Soon</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#FAF7F4] border border-[#5A7755]/15 flex flex-col items-center justify-center space-y-1">
                  <Sliders className="w-5 h-5 text-[#5A7755]" />
                  <span className="text-[11px] font-bold text-[#384C37]">Settings</span>
                  <span className="text-[9px] text-[#232B25]/60 font-semibold">Coming Soon</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Close Admin Panel</span>
                </button>
              </div>
            </div>
          ) : showSuccessToast ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#5A7755] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-sans text-lg font-black text-[#384C37]">
                Authenticated Successfully
              </h4>
              <p className="text-xs text-[#232B25]/80">
                Your profile credentials have been verified.
              </p>
            </div>
          ) : user ? (
            /* USER DASHBOARD */
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#5A7755]/20 space-y-3">
                <div className="flex items-center justify-between border-b border-[#5A7755]/15 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#384C37] text-white flex items-center justify-center text-xs font-black shadow-xs">
                      {user.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-black text-[#232B25]">{user.name}</h4>
                      <span className="text-[10px] uppercase font-bold text-[#5A7755] flex items-center gap-0.5">
                        <Award className="w-3 h-3 text-[#5A7755]" />
                        <span>Platinum Cayman VIP</span>
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] font-black bg-[#5A7755] text-white px-2 py-0.5 rounded-full shadow-xs">
                    {user.memberCode || 'VIP-KY-8821'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="text-[#232B25]/60 text-[9px] block font-semibold">Email</span>
                    <span className="font-bold text-[#232B25] truncate block">{user.email}</span>
                  </div>
                  <div>
                    <span className="text-[#232B25]/60 text-[9px] block font-semibold">WhatsApp</span>
                    <span className="font-bold text-[#232B25] truncate block">{user.phone || '+1 (345) 925-3217'}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-gradient-to-r from-[#5A7755]/10 to-[#C78D95]/15 border border-[#5A7755]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#5A7755]" />
                  <div>
                    <span className="text-xs font-black text-[#384C37] block">VIP 15% OFF Active</span>
                    <span className="text-[10px] text-[#232B25]/75">Free Gourmet Popcorn Bar</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-black bg-white px-2 py-1 rounded-lg border border-[#5A7755]/30 text-[#384C37]">
                  PARADISE15
                </span>
              </div>

              <div className="pt-1 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    const contactEl = document.getElementById('contact');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-xs"
                >
                  Book New Slumber Party
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-[#232B25]/80 hover:text-red-600 bg-[#FAF7F4] hover:bg-red-50 border border-neutral-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          ) : (
            /* SIGN IN / SIGN UP FORM */
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-black text-[#384C37]">Sign In / Register</h2>
                <p className="text-xs text-[#232B25]/70 mt-0.5">Access your VIP Member profile</p>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-2.5 px-4 rounded-xl border border-neutral-300 hover:border-[#5A7755] bg-white hover:bg-neutral-50 text-xs font-bold text-[#232B25] flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google</span>
              </button>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#384C37] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="parent@paradiseslumbers.ky"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-neutral-300 rounded-xl px-3 py-2 text-xs text-[#232B25] focus:outline-none focus:border-[#5A7755]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#5A7755] hover:bg-[#384C37] transition-all shadow-md cursor-pointer mt-2"
                >
                  Authenticate Profile
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AuthModal;