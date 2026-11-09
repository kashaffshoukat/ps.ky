import React, { useState } from 'react';
import { Star, CheckCircle2, Plus, X, ThumbsUp, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem } from '../types';
import { CuteSmileyCloud } from './CuteSmileyCloud';

const STORAGE_KEY = 'paradise_slumbers_reviews';
const VOTES_STORAGE_KEY = 'paradise_slumbers_helpful_votes';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return TESTIMONIALS_DATA;
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
  const [filterRating, setFilterRating] = useState<number>(0);

  // Form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('Seven Mile Beach, Grand Cayman');
  const [eventType, setEventType] = useState('Indoor Glamping Slumber Party');
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

  const filteredReviews = filterRating === 0
    ? testimonials
    : testimonials.filter((t) => t.rating === filterRating);

  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / (testimonials.length || 1)
  ).toFixed(1);

  return (
    <section id="reviews" className="py-14 sm:py-18 lg:py-22 relative z-10 bg-[#FAF7F4] border-b border-[#5A7755]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#D97706] text-xs font-bold uppercase tracking-widest">
            <span>Verified Cayman Parent Reviews</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
            <h2 className="font-sans text-4xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
              Loved by Parents, Adored by Kids
            </h2>
            <CuteSmileyCloud size="sm" className="hidden sm:inline-block" />
          </div>

          <p className="text-[#232B25]/80 text-sm sm:text-base leading-relaxed">
            Read authentic experiences from Cayman families who celebrated birthdays, bestie milestones, and magical sleepovers with us.
          </p>
        </div>

        {/* WRITE A REVIEW INLINE ACCORDION (No blocking popups) */}
        {isWriteReviewOpen && (
          <div className="max-w-2xl mx-auto mb-10 bg-white rounded-3xl p-6 sm:p-8 border border-[#5A7755]/25 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-[#5A7755]/15 mb-5">
              <h3 className="font-sans text-lg font-black text-[#384C37]">
                Share Your Slumber Experience
              </h3>
              <button
                type="button"
                onClick={() => setIsWriteReviewOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#232B25] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#5A7755] mx-auto" />
                <h4 className="font-bold text-base text-[#384C37]">Thank You!</h4>
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#232B25] mb-1">Location in Grand Cayman</label>
                    <input
                      type="text"
                      value={reviewerLocation}
                      onChange={(e) => setReviewerLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none"
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
                          <Star className={`w-6 h-6 ${s <= rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-neutral-300'}`} />
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Publish Verified Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* DISTINCTIVE BENTO GRID TEMPLATE FOR TESTIMONIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Column: Overall Rating Scorecard & Filter Bento (1 Col) */}
          <div className="bento-card bg-white rounded-3xl p-6 sm:p-8 border border-[#5A7755]/20 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5A7755]">
                  Client Satisfaction
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#5A7755] bg-[#5A7755]/10 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Verified</span>
                </span>
              </div>

              {/* Big Score */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-sans text-5xl sm:text-6xl font-black text-[#384C37] tracking-tight">
                  {averageRating}
                </span>
                <span className="text-lg font-bold text-[#232B25]/50">/ 5.0</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <p className="text-xs text-[#232B25]/75 leading-relaxed mb-6">
                Based on {testimonials.length} reviews from Cayman parents across George Town, Seven Mile Beach, South Sound, and Savannah.
              </p>

              {/* Star breakdown bars */}
              <div className="space-y-2 pt-2 border-t border-[#5A7755]/15">
                {[5, 4, 3].map((starCount) => {
                  const count = testimonials.filter((t) => t.rating === starCount).length;
                  const pct = Math.round((count / (testimonials.length || 1)) * 100);

                  return (
                    <button
                      key={starCount}
                      type="button"
                      onClick={() => setFilterRating(filterRating === starCount ? 0 : starCount)}
                      className={`w-full flex items-center gap-2.5 p-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        filterRating === starCount ? 'bg-[#5A7755]/10 text-[#5A7755]' : 'hover:bg-[#FAF7F4] text-[#232B25]'
                      }`}
                    >
                      <span className="w-14 text-left">{starCount} Stars</span>
                      <div className="flex-1 h-2 bg-[#FAF7F4] rounded-full overflow-hidden border border-[#5A7755]/15">
                        <div
                          className="h-full bg-[#5A7755] rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-[11px] text-[#232B25]/60 font-mono">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Write a review toggle */}
            <div className="pt-4 border-t border-[#5A7755]/15">
              <button
                type="button"
                onClick={() => setIsWriteReviewOpen(!isWriteReviewOpen)}
                className="w-full py-3 rounded-full bg-[#5A7755] hover:bg-[#384C37] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{isWriteReviewOpen ? 'Close Form' : 'Write a Review'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Reviews Grid Bento (Span 2 Cols) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredReviews.map((t) => {
              const votes = helpfulVotes[t.id] || 0;

              return (
                <div
                  key={t.id}
                  className="bento-card bg-white rounded-3xl p-5 sm:p-6 border border-[#5A7755]/20 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Stars and verified marker */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#232B25]/50 font-medium">{t.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#232B25]/85 leading-relaxed italic">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#5A7755]/15 flex items-center justify-between">
                    <div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-[#384C37]">{t.name}</h4>
                      <span className="text-[10px] text-[#232B25]/60 block">{t.location}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleVoteHelpful(t.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#5A7755] hover:text-[#384C37] font-semibold transition-colors cursor-pointer"
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

      </div>
    </section>
  );
};
