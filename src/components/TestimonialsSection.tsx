import React, { useState } from 'react';
import { Star, Heart, CheckCircle2, Plus, X, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem } from '../types';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

const STORAGE_KEY = 'paradise_slumbers_reviews';
const VOTES_STORAGE_KEY = 'paradise_slumbers_helpful_votes';

// New review / theme added based on the outdoor unicorn setup
const NEW_THEME_REVIEW: TestimonialItem = {
  id: 'review-unicorn-outdoor-1',
  name: 'Liam & Maya S.',
  location: 'Seven Mile Beach, Grand Cayman',
  eventType: 'Enchanted Outdoor Unicorn Glamping',
  rating: 5,
  review: 'The outdoor unicorn teepee setup on the terrace was breathtaking! The fresh floral garlands and unicorn pillows made my daughter’s birthday absolute perfection.',
  date: 'Just now',
  verified: true,
  avatar: 'https://images.unsplash.com/photo-1534528741775?auto=format&fit=crop&w=150&q=80',
};

const COMBINED_TESTIMONIALS = [NEW_THEME_REVIEW, ...TESTIMONIALS_DATA];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return COMBINED_TESTIMONIALS;
  });

  const [helpfulVotes, setHelpfulVotes] = useState<{ [id: string]: number }>(() => {
    try {
      const saved = localStorage.getItem(VOTES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // Form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('Seven Mile Beach, Grand Cayman');
  const [eventType, setEventType] = useState('Enchanted Outdoor Unicorn Glamping');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const saveReviews = (newList: TestimonialItem[]) => {
    setTestimonials(newList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch {}
  };

  const handleVoteHelpful = (id: string) => {
    setHelpfulVotes((prev) => {
      const current = prev[id] || 0;
      const updated = { ...prev, [id]: current + 1 };
      try {
        localStorage.setItem(VOTES_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewText.trim()) return;

    const newReview: TestimonialItem = {
      id: `review-${Date.now()}`,
      name: reviewerName.trim(),
      location: reviewerLocation.trim(),
      eventType: eventType.trim(),
      rating,
      review: reviewText.trim(),
      date: 'Just now',
      verified: true,
      avatar: `https://images.unsplash.com/photo-${1534528741775 + (testimonials.length % 5) * 1000}?auto=format&fit=crop&w=150&q=80`,
    };

    const updated = [newReview, ...testimonials];
    saveReviews(updated);
    setFormSubmitted(true);
    setTimeout(() => {
      setIsWriteReviewOpen(false);
      setFormSubmitted(false);
      setReviewerName('');
      setReviewText('');
    }, 1500);
  };

  const rowOneReviews = testimonials.filter((_, index) => index % 2 === 0);
  const rowTwoReviews = testimonials.filter((_, index) => index % 2 === 1);
  
  const safeRowOne = rowOneReviews.length > 0 ? rowOneReviews : testimonials;
  const safeRowTwo = rowTwoReviews.length > 0 ? rowTwoReviews : testimonials;

  return (
    <section id="reviews" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans overflow-x-hidden overflow-hidden">
      
      {/* Custom CSS Keyframes for Seamless Marquee Loops */}
      <style>{`
        @keyframes marqueeLeftToRight {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRightToLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 35s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRightToLeft 35s linear infinite;
        }
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C78D95]/15 border border-[#C78D95]/30 text-[#B06F78] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-[#C78D95]" />
              <span>Grand Cayman's Verified Reviews</span>
            </div>
            <CuteSmileyCloud size="md" className="hidden sm:inline-block mx-auto" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
                Loved by Parents, Adored by Kids
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
              Read authentic experiences from Cayman families who celebrated birthdays, bestie milestones, and magical sleepovers with us.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={350}>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsWriteReviewOpen(!isWriteReviewOpen)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-none bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer border border-[#5A7755]"
              >
                <Plus className="w-4 h-4" />
                <span>{isWriteReviewOpen ? 'Close Form' : 'Write a Review'}</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* WRITE A REVIEW INLINE ACCORDION */}
        {isWriteReviewOpen && (
          <ScrollReveal animation="scale-in" delay={0}>
            <div className="max-w-2xl mx-auto mb-12 bg-white/95 backdrop-blur-sm rounded-none p-6 sm:p-8 border-2 border-[#5A7755]/25 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-[#5A7755]/15 mb-5">
                <h3 className="font-sans text-lg font-black text-[#384C37]">
                  Share Your Slumber Experience
                </h3>
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="w-8 h-8 rounded-none bg-neutral-100 hover:bg-neutral-200 text-[#232B25] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#5A7755] mx-auto" />
                  <span className="font-bold text-base text-[#384C37]">Thank You!</span>
                  <p className="text-xs text-[#232B25]/75">Your review was saved and published!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#232B25] mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica M."
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#232B25] mb-1">Location in Grand Cayman</label>
                      <input
                        type="text"
                        value={reviewerLocation}
                        onChange={(e) => setReviewerLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#232B25] mb-1">Rating</label>
                      <div className="flex items-center gap-1.5 pt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setRating(s)}
                            className="cursor-pointer transition-transform hover:scale-110"
                          >
                            <Star className={`w-6 h-6 ${s <= rating ? 'fill-[#EAB308] text-[#EAB308]' : 'text-neutral-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#232B25] mb-1">Celebration Type</label>
                      <input
                        type="text"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#232B25] mb-1">Your Review *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell other Cayman parents how the sleepover was..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-none bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs border border-[#5A7755]"
                  >
                    Publish Verified Review
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        )}

      </div>

      {/* ========================================================
          TWO-ROW OPPOSITE MARQUEE (ROW 1: LTR, ROW 2: RTL)
          ======================================================== */}
      <div className="space-y-6 pt-4 w-full overflow-hidden overflow-x-hidden">
        
        {/* ROW 1: Marquee Left to Right */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="relative w-full overflow-hidden overflow-x-hidden">
            <div className="animate-marquee-ltr flex gap-6 px-3">
              {[...safeRowOne, ...safeRowOne].map((t, idx) => {
                const votes = helpfulVotes[t.id] || 0;
                return (
                  <div
                    key={`${t.id}-r1-${idx}`}
                    className="w-[340px] sm:w-[400px] flex-shrink-0 bg-[#5A7755]/95 backdrop-blur-sm rounded-none p-6 border-2 border-white/80 shadow-lg flex flex-col justify-between text-white"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#EAB308]">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                          ))}
                        </div>
                        <span className="text-[11px] text-white/70 font-medium">{t.date}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic">
                        "{t.review}"
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/25 flex items-center justify-between">
                      <div>
                        <span className="font-sans font-bold text-xs sm:text-sm text-white">{t.name}</span>
                        <span className="text-[10px] text-white/80 block">{t.location}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleVoteHelpful(t.id)}
                        className="inline-flex items-center gap-1 text-[11px] text-white hover:text-white/80 font-semibold transition-colors cursor-pointer bg-white/10 px-2.5 py-1 border border-white/30"
                        title="Mark as helpful"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{votes > 0 ? votes : 'Helpful'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 2: Marquee Right to Left (Opposite Direction) */}
        <ScrollReveal animation="fade-up" delay={250}>
          <div className="relative w-full overflow-hidden overflow-x-hidden">
            <div className="animate-marquee-rtl flex gap-6 px-3">
              {[...safeRowTwo, ...safeRowTwo].map((t, idx) => {
                const votes = helpfulVotes[t.id] || 0;
                return (
                  <div
                    key={`${t.id}-r2-${idx}`}
                    className="w-[340px] sm:w-[400px] flex-shrink-0 bg-[#5A7755]/95 backdrop-blur-sm rounded-none p-6 border-2 border-white/80 shadow-lg flex flex-col justify-between text-white"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#EAB308]">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                          ))}
                        </div>
                        <span className="text-[11px] text-white/70 font-medium">{t.date}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic">
                        "{t.review}"
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/25 flex items-center justify-between">
                      <div>
                        <span className="font-sans font-bold text-xs sm:text-sm text-white">{t.name}</span>
                        <span className="text-[10px] text-white/80 block">{t.location}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleVoteHelpful(t.id)}
                        className="inline-flex items-center gap-1 text-[11px] text-white hover:text-white/80 font-semibold transition-colors cursor-pointer bg-white/10 px-2.5 py-1 border border-white/30"
                        title="Mark as helpful"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{votes > 0 ? votes : 'Helpful'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
};

export default TestimonialsSection;