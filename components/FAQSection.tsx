'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onLearnMoreClick: () => void;
}

export default function FAQSection({ onLearnMoreClick }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const faqs: FAQItem[] = [
    {
      question: 'What is your response time?',
      answer:
        'We guarantee a response within 2 hours for emergency calls. Our team is available 24/7 to handle your plumbing emergencies.',
    },
    {
      question: 'Do you offer emergency services?',
      answer:
        'Yes, we specialize in emergency plumbing services. We are available around the clock, including weekends and holidays.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Absolutely. We are fully licensed, bonded, and insured. License #PL-99281. Your peace of mind is our priority.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, cash, checks, and digital payment methods including Zelle and PayPal for your convenience.',
    },
    {
      question: 'Do you offer any warranties?',
      answer:
        'Yes, all our work comes with a satisfaction guarantee. We stand behind our repairs with comprehensive warranties.',
    },
  ];

  useEffect(() => {
    // Calculate heights for smooth transitions
    const newHeights: { [key: number]: number } = {};
    faqs.forEach((_, index) => {
      if (contentRefs.current[index]) {
        newHeights[index] = contentRefs.current[index]!.scrollHeight;
      }
    });
    setHeights(newHeights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQs Column */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`relative group animate-reveal delay-${(index + 1) * 100}`}
              >
                {/* Gradient Accent Line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-500 ${expandedIndex === index
                    ? 'bg-gradient-to-b from-orange-500 to-blue-500 opacity-100'
                    : 'bg-slate-200 opacity-50 group-hover:opacity-100'
                    }`}
                />

                {/* Animated Gradient Border (on hover/active) */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 rounded-xl blur-sm transition-all duration-500 ${expandedIndex === index
                    ? 'opacity-30'
                    : 'opacity-0 group-hover:opacity-20'
                    }`}
                />

                {/* Card */}
                <div
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${expandedIndex === index
                    ? 'bg-white shadow-lg border-2 border-orange-200'
                    : 'bg-white/80 backdrop-blur-sm border border-slate-200 group-hover:border-orange-200 group-hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1 text-left">
                      {/* Icon Indicator */}
                      <div className={`transition-all duration-300 ${expandedIndex === index ? 'text-orange-500' : 'text-slate-400 group-hover:text-orange-400'
                        }`}>
                        {expandedIndex === index ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <HelpCircle className="w-5 h-5" />
                        )}
                      </div>

                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${expandedIndex === index ? 'text-orange-600' : 'text-slate-950 group-hover:text-orange-600'
                        }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${expandedIndex === index
                        ? 'rotate-180 text-orange-600'
                        : 'text-slate-400 group-hover:text-orange-500'
                        }`}
                    />
                  </button>

                  {/* Animated Answer Content */}
                  <div
                    style={{
                      height: expandedIndex === index ? `${heights[index]}px` : '0px',
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                  >
                    <div
                      ref={(el) => {
                        contentRefs.current[index] = el;
                      }}
                      className="px-4 pb-4 pt-2 border-t border-slate-100"
                    >
                      <p className="text-slate-600 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Box - Sticky on Right */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative group">
                {/* Gradient Border Overlay */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

                {/* Guarantee Card */}
                <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl overflow-hidden">
                  {/* Premium Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-orange-100 text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-950 mb-2 italic">Our Guarantee</h3>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Hire us as your plumbing experts and we won't down tools until your plumbing runs like clockwork.
                    </p>

                    <div className="space-y-4 mb-8">
                      {[
                        'Verified Professionals',
                        'Fixed Pricing Guarantee',
                        'Clean Workmanship',
                        '24/7 Priority Support'
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                            <svg className="w-3.4 h-3.4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={onLearnMoreClick}
                      className="w-full h-16 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
                    >
                      Book My Free Call
                    </Button>

                    <p className="text-center text-slate-400 text-sm mt-4">
                      Expert help is just a phone call away
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
