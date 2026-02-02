'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  onCtaClick: () => void;
}

export default function CTASection({ onCtaClick }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
            Don't Let Plumbing Problems Wait
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Get immediate help from our expert plumbers. Available 24/7 for all your emergency needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            onClick={onCtaClick}
            className="cta-button px-8 py-4 text-lg rounded-lg font-semibold w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Jack Now
          </Button>
          <Button
            variant="outline"
            className="px-8 py-4 text-lg rounded-lg font-semibold border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
          >
            Schedule Later
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 justify-center">
            <span className="text-orange-400 text-2xl font-bold">2hrs</span>
            <span className="text-gray-300">Response Time</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-orange-400 text-2xl font-bold">24/7</span>
            <span className="text-gray-300">Always Available</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-orange-400 text-2xl font-bold">500+</span>
            <span className="text-gray-300">Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
