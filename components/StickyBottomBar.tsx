'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StickyBottomBarProps {
  onCtaClick: () => void;
}

export default function StickyBottomBar({ onCtaClick }: StickyBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only on mobile (below 768px)
      const isMobile = window.innerWidth < 768;
      const isNotAtTop = window.scrollY > 100;
      setIsVisible(isMobile && isNotAtTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-border shadow-2xl z-30 p-4 animate-in slide-in-from-bottom duration-300">
      <Button
        onClick={onCtaClick}
        className="cta-button w-full py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" />
        Call Jack Now
      </Button>
    </div>
  );
}
