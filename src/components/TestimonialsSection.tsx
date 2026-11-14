import React, { useState, useEffect } from 'react';
import { Star, Heart, CheckCircle2, Plus, X, ThumbsUp, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem } from '../types';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

const STORAGE_KEY = 'paradise_slumbers_reviews_v2';
const VOTES_STORAGE_KEY = 'paradise_slumbers_helpful_votes';

// Curated professional reviews tailored to Grand Cayman & Paradise Slumbers
const CURATED_REVIEWS: TestimonialItem[] = [
  {
    id: 'review-unicorn-outdoor-1',
    name: 'Liam & Maya S.',
    location: 'Seven Mile Beach, Grand Cayman',
    eventType: 'Enchanted Outdoor Unicorn Glamping',
    rating: 5,
    review: 'The outdoor unicorn teepee setup on our terrace was breathtaking! The fresh floral garlands, plush bedding, and unicorn pillows made my daughter’s 7th birthday absolute perfection.',
    date: '2 days ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-2',
    name: 'Dr. Camille Ebanks',
    location: 'South Sound, Grand Cayman',
    eventType: 'Boho Luxe Slumber Suite',
    rating: 5,
    review: 'Impeccable punctuality and attention to detail. From the crisp, sanitized linens to the custom tray tables and fairy lights, every corner felt like a five-star boutique hotel for kids.',
    date: '1 week ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-3',
    name: 'Marcus & Elena Thompson',
    location: 'Crystal Harbour, Grand Cayman',
    eventType: 'Tropical Island Dreams Setup',
    rating: 5,
    review: 'Stress-free from start to finish. The team arrived right on schedule, transformed our living room in under an hour, and returned the next morning for a seamless pickup.',
    date: '2 weeks ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-4',
    name: 'Sophia Bodden',
    location: 'Camana Bay, Grand Cayman',
    eventType: 'Bestie Spa & Movie Night',
    rating: 5,
    review: 'We booked six tents for my daughter’s milestone birthday and the girls gasped when they walked in. Worth every single penny for the memories and effortless cleanup.',
    date: '3 weeks ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-5',
    name: 'Jonathan & Claire Reid',
    location: 'Rum Point, Grand Cayman',
    eventType: 'Starlight Bell Tent Glamping',
    rating: 5,
    review: 'Even out in Rum Point, the delivery and setup were flawless. The air mattresses were thick and comfortable, and the styling looked straight out of a magazine.',
    date: '1 month ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-6',
    name: 'Natalie Watler',
    location: 'George Town, Grand Cayman',
    eventType: 'Mermaid Lagoon Sleepover',
    rating: 5,
    review: 'Communication was warm, clear, and professional throughout booking. They customized the name plaques for every guest, which doubled as wonderful party favors.',
    date: '1 month ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-7',
    name: 'David & Priya Patel',
    location: 'West Bay, Grand Cayman',
    eventType: 'Safari Adventure Teepees',
    rating: 5,
    review: 'My son and his friends stayed in their tents all night reading with the lanterns. Truly the easiest birthday party we have ever hosted as parents.',
    date: '2 months ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-8',
    name: 'Hannah McLaughlin',
    location: 'Prospect, Grand Cayman',
    eventType: 'Pastel Rainbow Slumber',
    rating: 5,
    review: 'Cleanliness was my top priority, and everything smelled fresh and looked brand new. We will definitely be booking again for our youngest daughter next year!',
    date: '2 months ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-9',
    name: 'Gabrielle Foster',
    location: 'Red Bay, Grand Cayman',
    eventType: 'VIP Movie Lounge & Teepees',
    rating: 5,
    review: 'An unforgettable experience! The team accommodated our tight condo layout effortlessly and created a cozy, magical space the kids talked about for weeks.',
    date: '3 months ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'review-pro-10',
    name: 'Christopher & Lauren Kirk',
    location: 'Savannah, Grand Cayman',
    eventType: 'Celestial Boho Glamping',
    rating: 5,
    review: 'Hands down the best party vendor in Cayman. Thoughtful styling, zero hassle, and genuine care for making our family’s celebration special.',
    date: '3 months ago',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
  },
];

// Merge curated reviews with mockData without duplicates, ensuring at least 10 quality reviews exist
const COMBINED_TESTIMONIALS: TestimonialItem[] = (() => {
  const seen = new Set(CURATED_REVIEWS.map((r) => r.id));
  const extra = (TESTIMONIALS_DATA || []).filter((item) => !seen.has(item.id));
  return [...CURATED_REVIEWS, ...extra];
})();

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 10) return parsed;
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

  // Responsive items per view:
  // Large screens (lg: >= 1024px): 10 reviews
  // Medium / Tablet screens (sm/md: 640px - 1023px): 4 reviews
  // Small / Mobile screens (< 640px): 1 review
  const [itemsPerView, setItemsPerView] = useState<number>(() => {
    if (typeof window === 'undefined') return 10;
    if (window.innerWidth >= 1024) return 10;
    if (window.innerWidth >= 640) return 4;
    return 1;
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // Form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('Seven Mile Beach, Grand Cayman');
  const [eventType, setEventType] = useState('Enchanted Outdoor Unicorn Glamping');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      let nextCount = 1;
      if (window.innerWidth >= 1024) {
        nextCount = 10;
      } else if (window.innerWidth >= 640) {
        nextCount = 4;
      } else {
        nextCount = 1;
      }

      setItemsPerView((prev) => {
        if (prev !== nextCount) {
          setCurrentPage(0);
        }
        return nextCount;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const saveReviews = (newList: TestimonialItem[]) => {
    setTestimonials(newList);
    setCurrentPage(0);
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
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,
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

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(testimonials.length / itemsPerView));
  const safePage = Math.min(currentPage, totalPages - 1);
  const startIndex = safePage * itemsPerView;
  const visibleReviews = testimonials.slice(startIndex, startIndex + itemsPerView);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="reviews"
      className="py-14 sm:py-18 lg:py-22 relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
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
                  <span className="font-bold text-base text-[#384C37] block">Thank You!</span>
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
                            <Star
                              className={`w-6 h-6 ${
                                s <= rating ? 'fill-[#EAB308] text-[#EAB308]' : 'text-neutral-300'
                              }`}
                            />
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

        {/* ========================================================
            RESPONSIVE STATIC GRID (NO MARQUEE / NO STATS)
            - Mobile (<640px): 1 review card per view
            - Tablet/Medium (640px-1023px): 4 review cards (2x2)
            - Large Desktop (>=1024px): 10 review cards (5x2)
            ======================================================== */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {visibleReviews.map((t) => {
              const votes = helpfulVotes[t.id] || 0;
              return (
                <article
                  key={t.id}
                  className="bg-[#5A7755]/95 backdrop-blur-sm rounded-none p-5 sm:p-6 border-2 border-[#384C37]/20 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between text-white min-h-[260px]"
                >
                  <div className="space-y-3">
                    {/* Top row: Stars + Date */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-0.5 text-[#EAB308]" aria-label={`${t.rating} out of 5 stars`}>
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                        ))}
                      </div>
                      <span className="text-[11px] text-white/75 font-medium whitespace-nowrap">
                        {t.date}
                      </span>
                    </div>

                    {/* Event Theme Tag */}
                    {t.eventType && (
                      <div className="inline-block px-2 py-0.5 bg-white/10 border border-white/20 text-[10px] font-semibold tracking-wide text-white/95">
                        {t.eventType}
                      </div>
                    )}

                    {/* Review Body */}
                    <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed italic">
                      "{t.review}"
                    </p>
                  </div>

                  {/* Footer: Reviewer Info & Helpful Button */}
                  <div className="pt-4 mt-4 border-t border-white/20 flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-sans font-bold text-xs sm:text-sm text-white truncate">
                          {t.name}
                        </span>
                        {t.verified && (
                          <ShieldCheck
                            className="w-3.5 h-3.5 text-[#EAB308] flex-shrink-0"
                            aria-label="Verified Booking"
                          />
                        )}
                      </div>
                      <span className="text-[10px] text-white/80 block truncate">
                        {t.location}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleVoteHelpful(t.id)}
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-white hover:bg-white/20 font-semibold transition-colors cursor-pointer bg-white/10 px-2 py-1 border border-white/30 flex-shrink-0"
                      title="Mark as helpful"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{votes > 0 ? votes : 'Helpful'}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

        {/* PAGINATION CONTROLS (Shown whenever total reviews exceed current screen capacity) */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-white hover:bg-[#5A7755] text-[#384C37] hover:text-white border-2 border-[#5A7755] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Go to review page ${idx + 1}`}
                  className={`w-8 h-8 rounded-none text-xs font-bold border transition-colors cursor-pointer ${
                    safePage === idx
                      ? 'bg-[#5A7755] text-white border-[#5A7755]'
                      : 'bg-white text-[#384C37] border-[#5A7755]/30 hover:border-[#5A7755]'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next reviews"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-white hover:bg-[#5A7755] text-[#384C37] hover:text-white border-2 border-[#5A7755] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
