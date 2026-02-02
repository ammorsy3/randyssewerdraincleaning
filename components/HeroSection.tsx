'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 z-10 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Stop The Leak
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-semibold">
              Fast. Professional. Reliable.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg text-balance">
            Emergency plumbing services available 24/7. Licensed, bonded, and insured. We'll be there in 2 hours or less.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={onCtaClick}
              className="cta-button px-8 py-3 text-lg rounded-lg font-semibold w-full sm:w-auto"
            >
              Call Jack Now
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 text-lg rounded-lg font-semibold border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
            >
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 font-bold">✓</span>
              </div>
              <span className="text-sm text-gray-300">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 font-bold">✓</span>
              </div>
              <span className="text-sm text-gray-300">2-Hour Response</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden z-10">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop"
            alt="Professional plumber fixing a leak"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-gray-400 text-sm">Scroll to explore</p>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
