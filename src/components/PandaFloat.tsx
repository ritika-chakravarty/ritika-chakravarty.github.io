import React, { useState, useEffect } from 'react';

export const PandaFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      // Show panda when user has scrolled at least 20%
      setIsVisible(scrollPercent > 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        onClick={scrollToTop}
        className="group relative w-16 h-16 bg-white rounded-full shadow-lg border-2 border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        {/* Simple panda face */}
        <div className="w-full h-full rounded-full bg-white relative overflow-hidden">
          {/* Ears */}
          <div className="absolute -top-1 left-2 w-3 h-3 bg-slate-800 rounded-full"></div>
          <div className="absolute -top-1 right-2 w-3 h-3 bg-slate-800 rounded-full"></div>

          {/* Eyes */}
          <div className="absolute top-3 left-3 w-2 h-3 bg-slate-800 rounded-full transform rotate-12"></div>
          <div className="absolute top-3 right-3 w-2 h-3 bg-slate-800 rounded-full transform -rotate-12"></div>

          {/* Nose */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-800 rounded-full"></div>

          {/* Mouth */}
          <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-3 h-2 border-b border-slate-800 rounded-b-full"></div>
        </div>

        {/* Hover tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to top 🐼
        </div>
      </button>
    </div>
  );
};
