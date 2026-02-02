'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
}

interface TestimonialsSectionProps {
  onLearnMoreClick: () => void;
}

export default function TestimonialsSection({ onLearnMoreClick }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Downtown',
      rating: 5,
      quote:
        'Jack arrived within an hour and fixed our burst pipe before it caused more damage. Professional, fast, and affordable. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      location: 'Riverside',
      rating: 5,
      quote:
        'We use Jack The Fix for all our emergency plumbing needs. The response time is incredible, and they always do quality work. Five stars!',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Small Business Owner',
      location: 'Westend',
      rating: 5,
      quote:
        'Outstanding service! Jack was courteous, knowledgeable, and fixed our water heater issue in no time. Will definitely call again.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto text-balance">
            Over 500 five-star reviews from satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-primary leading-relaxed flex-grow">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author Info */}
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-semibold text-slate-950">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More CTA */}
        <div className="mt-12 text-center">
          <Button
            onClick={onLearnMoreClick}
            variant="outline"
            className="px-8 py-3 text-lg rounded-lg font-semibold border-slate-950 text-slate-950 hover:bg-slate-950/5 bg-transparent"
          >
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
