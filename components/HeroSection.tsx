'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Leak', 'Drip', 'Waste', 'Flood'];
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setSpeed(100);
        } else {
          setSpeed(150);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(150);
        } else {
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <section className="relative min-h-[600px] md:min-h-screen overflow-hidden flex items-center">
      {/* ... Dynamic Animated Background Layers ... */}
      <div className="absolute inset-0 z-0">
        {/* Deep Slate Base */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,#020617_0%,#0f172a_35%,#1e293b_50%,#0f172a_65%,#020617_100%)] animate-gradient-shift opacity-70" />

        {/* Glowing Orbs */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-mesh-pulse" />

        {/* Floating Water "Droplets" */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-[15%] w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-1/3 left-[10%] w-48 h-48 bg-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
          <div className="space-y-4 animate-reveal">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              Stop the <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 min-w-[3ch]">
                {text}
                <span className="absolute right-[-4px] top-0 bottom-0 w-[4px] bg-orange-500 animate-pulse" />
              </span>
            </h1>
            <div className="h-1.5 w-24 bg-orange-500 rounded-full" />
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide">
              Fast. Professional. 24/7 Reliability.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg text-balance animate-reveal delay-100">
            Emergency plumbing services available 24/7. Licensed, bonded, and insured. We'll be there in <span className="text-white font-semibold">2 hours or less</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-reveal delay-200">
            <Button
              onClick={onCtaClick}
              className="cta-button px-8 py-6 text-xl rounded-xl font-bold w-full sm:w-auto shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300"
            >
              Call Jack Now
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 text-lg rounded-lg font-semibold border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent border-slate-700 hover:bg-white/10"
            >
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-6 animate-reveal delay-300">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                <span className="text-orange-500 font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-slate-300">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                <span className="text-blue-400 font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-slate-300">2-Hour Response</span>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative group animate-reveal delay-200">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-card">
            <Image
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=1000&fit=crop"
              alt="Professional plumber fixing a leak"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

            {/* Floating Info Badge over image */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl animate-float">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800" />
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">500+ Happy Clients</p>
                  <p className="text-slate-400 text-xs text-nowrap">Local experts in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Explore</p>
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
