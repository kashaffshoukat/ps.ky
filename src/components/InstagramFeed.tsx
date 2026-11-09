import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { ALL_55_GALLERY_PHOTOS } from '../data/galleryData';

export const InstagramFeed: React.FC = () => {
  const posts = [
    {
      id: 'ig-1',
      image: ALL_55_GALLERY_PHOTOS[0]?.image || '/assets/aistudio/image_4a31de06.png',
      caption: 'Dreamy slumber setup in Grand Cayman! Luxury A-frame teepees with cozy fairy lights and plush bedding. ✨ #paradiseslumbers #caymankids',
      likes: '248',
      comments: '34',
    },
    {
      id: 'ig-2',
      image: ALL_55_GALLERY_PHOTOS[5]?.image || '/assets/aistudio/image_139be2e0.png',
      caption: 'Enchanted Forest wonderland sleepover celebration! Handmade bunting, luxury breakfast trays and sweet dreams. 🌿⛺️',
      likes: '312',
      comments: '41',
    },
    {
      id: 'ig-3',
      image: ALL_55_GALLERY_PHOTOS[10]?.image || '/assets/aistudio/image_2ad2da36.png',
      caption: 'CandyLand theme delight for Isabella’s 8th birthday! Complete with themed styling and cozy sleep kits. 🍭🎈',
      likes: '194',
      comments: '22',
    },
    {
      id: 'ig-4',
      image: ALL_55_GALLERY_PHOTOS[15]?.image || '/assets/aistudio/image_41a5d132.png',
      caption: 'Epic Fortnite slumber battle station setup for our young gamers in Cayman! Ready for an unforgettable sleepover! 🎮🏆',
      likes: '385',
      comments: '58',
    },
  ];

  return (
    <section className="py-14 relative z-10 bg-white border-b border-[#5A7755]/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C78D95] mb-1">
              <Instagram className="w-3.5 h-3.5 text-[#C78D95]" />
              <span>@paradiseslumbers.ky</span>
            </div>
            <h3 className="font-sans text-2xl font-black text-[#232B25]">
              Follow Our Cayman Slumber Adventures
            </h3>
          </div>

          <a
            href="https://www.instagram.com/paradiseslumbers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#5A7755] hover:bg-[#384C37] shadow-xs transition-colors"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3 h-3 text-white" />
          </a>
        </div>

        {/* 4 Instagram Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/paradiseslumbers"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF7F4] p-3 rounded-2xl border border-[#5A7755]/15 shadow-2xs hover:shadow-md transition-all duration-300 block overflow-hidden"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white">
                <img
                  src={post.image}
                  alt="Instagram post"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay with likes and comment count */}
                <div className="absolute inset-0 bg-[#5A7755]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                  <Instagram className="w-6 h-6 mb-2 text-[#E8C5C8]" />
                  <div className="flex items-center gap-4 text-xs font-bold mb-2 text-white">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#E8C5C8] text-[#E8C5C8]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[11px] text-white line-clamp-2 leading-tight">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
