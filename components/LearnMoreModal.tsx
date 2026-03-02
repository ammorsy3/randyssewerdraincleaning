'use client';

import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const reasons = [
  {
    title: 'Sewer Line Specialists',
    description: 'Randy\'s specializes in all residential and commercial sewer line cleaning and hydro jetting services.'
  },
  {
    title: 'Free Estimates',
    description: 'Don\'t hesitate to reach out — we offer free estimates on all services with no obligation.'
  },
  {
    title: 'Competitive Rates',
    description: 'Fair, transparent pricing. Plus 25% off for seniors and veterans — just mention it when you call.'
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We don\'t finish the job until you\'re fully satisfied. Your needs always come first.'
  },
  {
    title: 'Mon–Fri Availability',
    description: 'We\'re available Monday through Friday, 9AM–5PM. Book online or call anytime to schedule.'
  },
  {
    title: 'Residential & Commercial',
    description: 'From a single clogged drain to full commercial sewer line service — we handle it all.'
  }
];

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-effect">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-950 to-slate-900 text-white p-6 flex items-center justify-between border-b border-orange-600/30">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose Randy's?</h2>
            <p className="text-gray-300 text-sm mt-1">Discover what makes us the trusted choice</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{reason.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
            <p className="text-center text-gray-600 font-medium">
              Ready to get your plumbing issue resolved?
            </p>
            <Button
              onClick={onClose}
              className="cta-button w-full py-3 text-lg rounded-lg font-semibold"
            >
              Get a Free Estimate
            </Button>
            <button
              onClick={onClose}
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
