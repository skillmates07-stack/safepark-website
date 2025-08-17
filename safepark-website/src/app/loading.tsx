export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
      
      {/* Loading content */}
      <div className="relative z-10 text-center">
        <div className="glass p-12 rounded-3xl">
          {/* SafePark Logo */}
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-3xl">S</span>
          </div>
          
          {/* Loading Text */}
          <h1 className="text-3xl font-bold text-white mb-4">
            <span className="gradient-text">SafePark</span>
          </h1>
          <p className="text-white/70 mb-8">Loading your premium carport experience...</p>
          
          {/* Loading Animation */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-gradient-primary rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gradient-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-gradient-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
