'use client';

import { useEffect, useState } from 'react';
import { Phone, CalendarCheck } from 'lucide-react';

interface StickyBottomBarProps {
  onCtaClick: () => void;
}

export default function StickyBottomBar({ onCtaClick }: StickyBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const isNotAtTop = window.scrollY > 120;
      setIsVisible(isMobile && isNotAtTop);
    };
    // Run once on mount too
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl z-50 px-4 py-3 safe-b">
      <div className="flex gap-3 max-w-sm mx-auto">
        {/* Primary: Call */}
        <a
          href="tel:+17045799558"
          className="flex-1 bg-blue-600 active:bg-blue-700 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        {/* Secondary: Book */}
        <button
          onClick={onCtaClick}
          className="flex-1 bg-slate-950 active:bg-slate-800 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4" />
          Book Free
        </button>
      </div>
    </div>
  );
}
