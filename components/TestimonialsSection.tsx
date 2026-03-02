'use client';

import { Star, Quote } from 'lucide-react';
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
      name: 'Madison H.',
      role: 'Hired on Thumbtack',
      location: 'Toilet Replacement',
      rating: 5,
      quote:
        'Randy was quick to respond and fast with completion of the service. The installation was done expeditiously and thoroughly. I will definitely contact again for my next toilet replacement.',
    },
    {
      name: 'AnneMarie L.',
      role: 'Hired on Thumbtack',
      location: 'Plumbing Service',
      rating: 5,
      quote:
        'We really enjoyed working with Randy! He was punctual and very professional. We will be using him for our future plumbing needs.',
    },
    {
      name: 'Bryan C.',
      role: 'Hired on Thumbtack',
      location: 'Plumbing Service',
      rating: 5,
      quote:
        "Randy's team scheduled me quickly and performed the job better than expected. I appreciate their patience. I will use them again for future projects.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Quote Marks */}
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
        <Quote className="w-32 h-32 text-amber-500" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none rotate-180">
        <Quote className="w-32 h-32 text-blue-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Real reviews from homeowners and businesses across Gastonia, NC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer animate-reveal delay-${(index + 1) * 100}`}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500" />

              {/* Card Content */}
              <div className="relative rounded-2xl p-6 md:p-8 flex flex-col gap-4 bg-white border border-slate-200 group-hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl h-full">
                {/* Stars with Animation */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400 transition-all duration-300"
                      style={{
                        animation: `star-fill 0.5s ease-out ${i * 0.1}s both`,
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 leading-relaxed flex-grow group-hover:text-slate-900 transition-colors duration-300">
                  {`"${testimonial.quote}"`}
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <h4 className="font-semibold text-slate-950 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 font-medium">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More CTA */}
        <div className="mt-12 text-center">
          <Button
            onClick={onLearnMoreClick}
            variant="outline"
            className="px-8 py-3 text-lg rounded-lg font-semibold border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
          >
            Learn More About Our Services
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes star-fill {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
