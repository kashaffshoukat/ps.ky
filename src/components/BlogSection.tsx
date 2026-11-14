import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Calendar, User, Tag, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenBooking: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-12 sm:py-16 relative z-10 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1  bg-[#5A7755] text-white text-xs font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span>Island Slumber Journal</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#384C37] tracking-tight">
            Slumber Insights and Guides
          </h2>
          <p className="text-[#232B25]/75 text-sm sm:text-base leading-relaxed">
            Expert styling tips, room space guidelines, theme trends, and creative celebration ideas for Cayman parents.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-neutral-50 rounded-2xl overflow-hidden border border-[#5A7755]/20 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#5A7755] text-white px-2.5 py-0.5  text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#232B25]/60 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5A7755]" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-sans text-lg font-black text-[#384C37] leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-black/70 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-200 mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-black/60">By {post.author}</span>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-black hover:underline cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* SUPER FIXED ARTICLE READING MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="fixed inset-0" onClick={() => setSelectedPost(null)} aria-hidden="true" />

          <div className="relative z-10 bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-hidden flex flex-col shadow-2xl border border-[#5A7755]/20 my-auto">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#5A7755]/15 bg-[#FAF7F4] flex items-center justify-between shrink-0">
              <span className="bg-[#5A7755] text-white px-3 py-1  text-xs font-bold shadow-xs">
                {selectedPost.category}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="w-9 h-9  bg-white hover:bg-[#EFF4EE] text-[#232B25] flex items-center justify-center transition-colors cursor-pointer border border-[#5A7755]/20"
              >
                <X className="w-5 h-5 text-[#232B25]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-4 text-[#232B25]">
              <h2 className="font-sans text-2xl font-black text-[#232B25] leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-[#232B25]/60 pb-2 border-b border-[#5A7755]/15">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#FAF7F4] my-4">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#232B25]/85 leading-relaxed font-normal">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#5A7755]/15 bg-[#FAF7F4] flex items-center justify-between shrink-0">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2  text-xs font-bold text-[#232B25] bg-white hover:bg-[#EFF4EE] border border-[#5A7755]/20 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenBooking();
                }}
                className="px-6 py-2  text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] transition-all cursor-pointer shadow-xs"
              >
                Plan a Slumber
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
