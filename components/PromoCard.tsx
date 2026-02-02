'use client';

import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface PromoCardProps {
  onCtaClick: () => void;
}

export default function PromoCard({ onCtaClick }: PromoCardProps) {
  const [copied, setCopied] = useState(false);
  const promoCode = 'JACK50';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border-2 border-dashed border-orange-600 bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-600/5 rounded-full -ml-20 -mb-20" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 text-balance">
                Save $50 Today
              </h2>
              <p className="text-lg text-text-secondary">
                Get $50 off your first emergency service call. Use code JACK50 at booking or mention it when you call.
              </p>
              <p className="text-sm text-text-secondary font-medium">
                Valid for new customers only. Cannot be combined with other offers.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col gap-4 md:items-end">
              {/* Promo Code Display */}
              <div className="w-full md:w-auto">
                <button
                  onClick={copyToClipboard}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-white border-2 border-orange-600 rounded-xl px-6 py-3 font-bold text-orange-600 hover:bg-orange-50 transition-all duration-300 group"
                >
                  <span className="text-2xl">{promoCode}</span>
                  {copied ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </button>
                <p className="text-xs text-text-secondary text-center mt-2">
                  {copied ? 'Copied!' : 'Click to copy'}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                onClick={onCtaClick}
                className="cta-button w-full md:w-auto px-8 py-3 rounded-xl font-semibold text-lg"
              >
                Claim Offer Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
