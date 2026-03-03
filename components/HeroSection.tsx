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
  const words = ['Clog', 'Backup', 'Drain', 'Block'];
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
    <section className="relative min-h-[100dvh] md:min-h-screen overflow-hidden flex items-center">
      {/* ... Dynamic Animated Background Layers ... */}
      <div className="absolute inset-0 z-0">
        {/* Deep Slate Base */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Static, Performant Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]" />

        {/* Static Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10 w-full">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
          <div className="space-y-4 animate-reveal">
            <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              Stop the <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 min-w-[3ch]">
                {text}
                <span className="absolute right-[-4px] top-0 bottom-0 w-[4px] bg-blue-500 animate-pulse" />
              </span>
            </h1>
            <div className="h-1.5 w-24 bg-blue-500 rounded-full" />
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide">
              Sewer & Drain Experts. Gastonia, NC.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg text-balance animate-reveal delay-100">
            Residential & commercial sewer line cleaning, hydro jetting, and all plumbing repairs. <span className="text-white font-semibold">Free estimates</span> — we won't stop until you're satisfied.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-reveal delay-200">
            <a
              href="tel:+17045799558"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-lg rounded-xl font-black w-full sm:w-auto shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_32px_rgba(37,99,235,0.55)] transition-all duration-300 active:scale-95"
            >
              📞 24/7 Emergency Service
            </a>
            <Button
              onClick={onCtaClick}
              variant="outline"
              className="px-6 py-4 text-base rounded-xl font-semibold border-slate-700 text-white hover:bg-white/10 w-full sm:w-auto bg-transparent transition-all duration-300 active:scale-95"
            >
              Book Free Estimate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-6 animate-reveal delay-300">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                <span className="text-blue-500 font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-slate-300">Free Estimates</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                <span className="text-blue-400 font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-slate-300">25% Senior & Veteran Discount</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                <span className="text-blue-500 font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-slate-300">Residential & Commercial</span>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative group animate-reveal delay-200 mt-8 md:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-card">
            <Image
              src="/hero-plumber-action.png"
              alt="Randy's Sewer Drain Cleaning — Professional plumber using drain cleaning machine"
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

            {/* Floating Info Badge over image */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl animate-float">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['/avatar-1.png', '/avatar-2.png', '/avatar-3.png'].map((src, i) => (
                    <div key={i} className="relative w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                      <Image src={src} alt="Gastonia resident" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Serving Gastonia Since Day One</p>
                  <p className="text-slate-400 text-xs text-nowrap">Local sewer & drain experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Explore</p>
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
