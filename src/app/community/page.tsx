'use client';

import { useState } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('photos');

  // Dummy data; replace with API or uploads later!
  const instagramPosts = [
    { id: 1, image: '', caption: 'Perfect protection! #SafePark', likes: 24, user: '@rajesh_mumbai' }
    // ...add more
  ];
  const googleReviews = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      text: 'Excellent service and quality.',
      date: '2 weeks ago',
      location: 'Mumbai',
    }
    // ...add more
  ];

  return (
    <main className="pt-[56px] bg-gradient-to-br from-[#0a0f0a] via-[#0f1411] to-[#141a14] min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white mb-6">
            SafePark Community
          </span>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
            Join <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">2,000+ Happy</span> Car Owners
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            See real SafePark installations and reviews shared by real customers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="https://instagram.com/safepark_official" className="flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"><span className="text-lg">📷</span>Instagram</a>
            <a href="https://www.facebook.com/groups/safeparkcommunity" className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"><span className="text-lg">👥</span>Facebook Group</a>
            <a href="https://wa.me/919600840058" className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"><span className="text-lg">💬</span>WhatsApp Community</a>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'photos' ? 'bg-green-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Customer Photos
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'reviews' ? 'bg-green-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Google Reviews
            </button>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'photos' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Real Customer Installations</h2>
                <p className="text-gray-300">Follow <span className="text-green-400 font-semibold">#SafePark</span> on Instagram</p>
              </div>
              {/* Replace with real images; using placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/70 rounded-2xl overflow-hidden border border-slate-600/40">
                    <div className="aspect-square bg-slate-700 flex items-center justify-center"><div className="text-4xl">📸</div></div>
                    <div className="p-4 space-y-2">
                      <span className="font-semibold text-green-400">{post.user}</span>
                      <p className="text-gray-300 text-sm">{post.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">What Our Customers Say</h2>
                <p className="text-gray-300">From Google Reviews</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {googleReviews.map((review) => (
                  <div key={review.id} className="bg-gradient-to-b from-slate-800/50 to-slate-900/70 rounded-2xl p-6 border border-slate-600/40">
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.location} • {review.date}</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-2">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
