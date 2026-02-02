'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary text-balance">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 hover:bg-white/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-950 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-white/20">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learn More CTA */}
        <div className="mt-12 text-center">
          <Button
            onClick={onLearnMoreClick}
            className="cta-button px-8 py-3 text-lg rounded-lg font-semibold"
          >
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
