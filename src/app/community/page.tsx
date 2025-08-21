'use client';

import { useState, useEffect } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('photos');

  // Mock data - replace with actual API integrations
  const instagramPosts = [
    { id: 1, image: '/community/install-1.jpg', caption: 'Perfect protection for my BMW! 🚗 #SafePark #CarProtection', likes: 24, user: '@rajesh_mumbai' },
    { id: 2, image: '/community/install-2.jpg', caption: 'Survived the monsoon season perfectly! 🌧️ #SafePark #MonsoonReady', likes: 31, user: '@priya_bangalore' },
    { id: 3, image: '/community/install-3.jpg', caption: 'Quick 2-hour installation, amazing results! ⚡ #SafePark #QuickInstall', likes: 19, user: '@amit_delhi' },
    { id: 4, image: '/community/install-4.jpg', caption: 'No more worry about hail damage! 🛡️ #SafePark #HailProtection', likes: 27, user: '@sneha_pune' },
    { id: 5, image: '/community/install-5.jpg', caption: 'Love the sleek design! Neighbors are jealous 😎 #SafePark #PremiumLook', likes: 33, user: '@vikram_hyderabad' },
    { id: 6, image: '/community/install-6.jpg', caption: 'Best investment for my car! Worth every rupee 💚 #SafePark #WorthIt', likes: 41, user: '@deepak_chennai' }
  ];

  const googleReviews = [
    { id: 1, name: 'Rahul Sharma', rating: 5, text: 'Excellent service and quality. My car is now protected from all weather conditions. Highly recommended!', date: '2 weeks ago', location: 'Mumbai' },
    { id: 2, name: 'Kavya Patel', rating: 5, text: 'Installation team was professional and quick. The carport looks amazing and works perfectly.', date: '1 month ago', location: 'Ahmedabad' },
    { id: 3, name: 'Arjun Singh', rating: 4, text: 'Good quality product. Survived heavy rains without any issues. Installation could be faster.', date: '3 weeks ago', location: 'Jaipur' },
    { id: 4, name: 'Meera Nair', rating: 5, text: 'Outstanding protection! No more worrying about bird droppings or tree sap. Perfect solution.', date: '1 week ago', location: 'Kochi' }
  ];

  return (
    <main className="pt-[56px] bg-gradient-to-br from-[#0a0f0a] via-[#0f1411] to-[#141a14] min-h-screen">
      {/* HERO SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white mb-6">
            SafePark Community
          </span>
          
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
            Join <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">2,000+ Happy</span> Car Owners
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            See real customers sharing their SafePark protection stories, installations, and experiences across India.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="https://instagram.com/safepark_official"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              <span className="text-lg">📷</span>
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/groups/safeparkcommunity"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              <span className="text-lg">👥</span>
              Join Facebook Group
            </a>
            <a
              href="https://wa.me/919600840058"
              className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              <span className="text-lg">💬</span>
              WhatsApp Community
            </a>
          </div>

          {/* TAB NAVIGATION */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'photos'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Customer Photos
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Google Reviews
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          
          {/* INSTAGRAM PHOTOS TAB */}
          {activeTab === 'photos' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Real Customer Installations</h2>
                <p className="text-gray-300">Follow <span className="text-green-400 font-semibold">#SafePark</span> on Instagram for more customer stories</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group bg-gradient-to-b from-slate-800/50 to-slate-900/70 rounded-2xl overflow-hidden border border-slate-600/40 transition-all hover:scale-[1.02] hover:border-slate-500/60"
                  >
                    <div className="aspect-square bg-slate-700 flex items-center justify-center">
                      <div className="text-4xl">📸</div>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-green-400">{post.user}</span>
                        <div className="flex items-center gap-1 text-gray-400">
                          <span className="text-red-500">❤️</span>
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">{post.caption}</p>
                      
                      <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                        View on Instagram →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://instagram.com/safepark_official"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                >
                  <span className="text-xl">📷</span>
                  See More on Instagram
                </a>
              </div>
            </div>
          )}

          {/* GOOGLE REVIEWS TAB */}
          {activeTab === 'reviews' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">What Our Customers Say</h2>
                <p className="text-gray-300">Real reviews from verified Google customers across India</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {googleReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gradient-to-b from-slate-800/50 to-slate-900/70 rounded-2xl p-6 border border-slate-600/40"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-semibold text-white">{review.name}</div>
                        <div className="text-sm text-gray-400">{review.location} • {review.date}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={i < review.rating ? 'text-yellow-400' : 'text-gray-600'}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://www.google.com/search?q=SafePark+reviews"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                >
                  <span className="text-xl">⭐</span>
                  Read All Google Reviews
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 py-16 bg-gradient-to-r from-slate-800/30 to-slate-700/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">Ready to Join Our Community?</h2>
          <p className="text-gray-300 text-lg">Share your SafePark installation and become part of our growing family</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="https://wa.me/919600840058?text=I want to share my SafePark installation photos!"
              className="flex items-center gap-3 w-full sm:flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-4 rounded-xl font-bold transition-all hover:scale-105"
            >
              <span className="text-xl">📤</span>
              Share Your Photos
            </a>
            
            <a 
              href="tel:+919600840058"
              className="flex items-center gap-3 w-full sm:flex-1 bg-slate-700 border border-slate-500 hover:bg-slate-600 text-white px-6 py-4 rounded-xl font-bold transition-all hover:scale-105"
            >
              <span className="text-xl">📞</span>
              Get Your SafePark
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
