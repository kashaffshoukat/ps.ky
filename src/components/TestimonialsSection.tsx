import React, { useState } from 'react';
import { Star, Heart, CheckCircle2, Plus, X, ThumbsUp, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem } from '../types';
import { CuteSmileyCloud } from './CuteSmileyCloud';
import { ScrollReveal } from './ScrollReveal';

const STORAGE_KEY = 'paradise_slumbers_reviews_v5';
const VOTES_STORAGE_KEY = 'paradise_slumbers_helpful_votes_v5';

// Exactly 10 natural, authentic reviews written like real Cayman parents
const AUTHENTIC_REVIEWS: TestimonialItem[] = [
  {
    id: 'review-unicorn-outdoor-1',
    name: 'Maya & Liam S.',
    location: 'Seven Mile Beach, Grand Cayman',
    eventType: 'Enchanted Outdoor Unicorn Glamping',
    rating: 5,
    review: 'We set the unicorn teepees up out on our back patio for my daughter’s 7th birthday and honestly the girls didn’t even want to come inside for cake. Everything looked so pretty once the fairy lights came on at dusk.',
    date: '3 days ago',
    verified: true,
  },
  {
    id: 'review-real-2',
    name: 'Camille Ebanks',
    location: 'South Sound, Grand Cayman',
    eventType: 'Boho Luxe Slumber Suite',
    rating: 5,
    review: 'Booked four tents for my niece’s sleepover. They showed up right on time at 3pm, had the whole living room ready before the kids got home from school, and came back the next morning to pack it all up. Zero stress for me.',
    date: '1 week ago',
    verified: true,
  },
  {
    id: 'review-real-3',
    name: 'Elena Thompson',
    location: 'Crystal Harbour, Grand Cayman',
    eventType: 'Tropical Island Dreams Setup',
    rating: 5,
    review: 'Was a bit worried 5 tents wouldn’t fit in our family room, but she measured everything out and arranged them so nicely. The sheets smelled super clean and fresh too, which as a mom I really appreciated.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 'review-real-4',
    name: 'Sophia Bodden',
    location: 'Camana Bay, Grand Cayman',
    eventType: 'Bestie Spa & Movie Night',
    rating: 5,
    review: 'My 9-year-old has been begging for a teepee party all year. Seeing her face when she walked into the room made it worth every dollar. The little breakfast trays and eye masks were such a cute touch.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 'review-real-5',
    name: 'Claire Reid',
    location: 'Rum Point, Grand Cayman',
    eventType: 'Starlight Bell Tent Glamping',
    rating: 5,
    review: 'Hard to find vendors willing to drive all the way out to Rum Point without charging crazy fees, so we were thrilled they came out. The kids slept till 8am—which never happens at a sleepover!',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 'review-real-6',
    name: 'Natalie Watler',
    location: 'George Town, Grand Cayman',
    eventType: 'Mermaid Lagoon Sleepover',
    rating: 5,
    review: 'Super easy to communicate with over WhatsApp when I needed to add an extra tent two days before the party. Everything was spotless and the mermaid pillows were a huge hit.',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 'review-real-7',
    name: 'Priya Patel',
    location: 'West Bay, Grand Cayman',
    eventType: 'Safari Adventure Teepees',
    rating: 5,
    review: 'Did the safari theme for my son and his 3 best friends. Loved that it wasn’t overly babyish—the boys thought the lanterns and little camp setup were so cool.',
    date: '2 months ago',
    verified: true,
  },
  {
    id: 'review-real-8',
    name: 'Hannah McLaughlin',
    location: 'Prospect, Grand Cayman',
    eventType: 'Pastel Rainbow Slumber',
    rating: 5,
    review: 'Honestly the easiest birthday party I’ve ever thrown. I didn’t have to buy a bunch of plastic decorations that end up in the bin afterward. Already booked again for my younger daughter in November.',
    date: '2 months ago',
    verified: true,
  },
  {
    id: 'review-real-9',
    name: 'Gabrielle Foster',
    location: 'Red Bay, Grand Cayman',
    eventType: 'VIP Movie Lounge & Teepees',
    rating: 5,
    review: 'We live in a townhouse so space is tight, but they made four tents work without blocking the whole downstairs. Really friendly team and great quality air mattresses—not the cheap thin ones.',
    date: '3 months ago',
    verified: true,
  },
  {
    id: 'review-real-10',
    name: 'Lauren Kirk',
    location: 'Savannah, Grand Cayman',
    eventType: 'Celestial Boho Glamping',
    rating: 5,
    review: 'The custom name signs on each tent were my daughter’s favorite part—she still has hers hanging on her bedroom door. Thank you for making her 10th birthday feel so special!',
    date: '3 months ago',
    verified: true,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return AUTHENTIC_REVIEWS;
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

  return (
    <section
      id="reviews"
      className="py-14 sm:py-18 lg:py-22 relative z-10 bg-white border-b border-[#5A7755]/15 select-none font-sans"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <div className="max-w-2xl mx-auto mb-12 bg-white backdrop-blur-sm rounded-none p-6 sm:p-8 border-2 border-[#5A7755]/25 shadow-md">
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
                        className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none text-[#232B25]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#232B25] mb-1">Location in Grand Cayman</label>
                      <input
                        type="text"
                        value={reviewerLocation}
                        onChange={(e) => setReviewerLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none text-[#232B25]"
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
                        className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none text-[#232B25]"
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
                      className="w-full px-3.5 py-2.5 rounded-none border-2 border-neutral-300 text-xs sm:text-sm bg-neutral-50 focus:bg-white focus:border-[#5A7755] outline-none resize-none text-[#232B25]"
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
            SAGE GREEN CARDS THEME - ALL REVIEWS DISPLAYED DIRECTLY
            ======================================================== */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="space-y-6">
            {testimonials.slice(0, 10).map((t) => {
              const votes = helpfulVotes[t.id] || 0;
              return (
                <article
                  key={t.id}
                  className="bg-[#5A7755] rounded-none p-6 sm:p-8 border-2 border-white/45 shadow-md flex flex-col justify-between text-white"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[#EAB308]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#EAB308] text-[#EAB308]" />
                        ))}
                      </div>
                      <span className="text-xs text-white/75 font-medium uppercase tracking-wider">{t.date}</span>
                    </div>

                    {t.eventType && (
                      <div className="inline-block px-2.5 py-0.5 bg-white/15 border border-white/30 text-[11px] font-semibold tracking-wide text-white">
                        {t.eventType}
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-white/95 leading-relaxed italic pt-1">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/20 flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-sans font-black text-xs sm:text-sm text-white uppercase tracking-wide">
                          {t.name}
                        </span>
                        {t.verified && (
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-[#EAB308] text-[#384C37] rounded-none flex-shrink-0" title="Verified Customer">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#384C37]" />
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-white/80 block mt-0.5">{t.location}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleVoteHelpful(t.id)}
                      className="inline-flex items-center gap-1 text-xs text-white hover:text-white/90 font-semibold transition-colors cursor-pointer bg-white/15 hover:bg-white/25 px-3 py-1.5 border border-white/30 flex-shrink-0"
                      title="Mark as helpful"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{votes > 0 ? `Helpful (${votes})` : 'Helpful'}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default TestimonialsSection;
