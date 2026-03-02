'use client';

import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

export default function Footer({ onCtaClick }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/randy-sewer-drain-cleaning-logo.jpeg"
                  alt="Randy's Sewer Drain Cleaning"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-black leading-none">Randy&apos;s Sewer</h3>
                <p className="text-blue-400 text-xs font-bold tracking-wide">Drain Cleaning</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Top quality sewer &amp; drain service in Gastonia, NC. Free estimates. Senior &amp; veteran discounts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['Services', 'Testimonials', 'FAQ', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Service Hours */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Business Hours</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: By Appointment</p>
              <p className="text-blue-400 font-semibold">Free Estimates Always</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:+17045799558"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(704) 579-9558</span>
              </a>
              <a
                href="mailto:randyssewerdraincleaning@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>randyssewerdraincleaning@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Gastonia, NC 28056</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Randy&apos;s Sewer Drain Cleaning. All rights reserved. Gastonia, NC.
          </p>
          <Button
            onClick={onCtaClick}
            className="cta-button px-6 py-2 rounded-lg font-semibold"
          >
            Call Now
          </Button>
        </div>
      </div>
    </footer>
  );
}
