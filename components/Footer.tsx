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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white to-orange-400 flex items-center justify-center text-slate-950 font-bold">
                JF
              </div>
              <h3 className="text-xl font-bold">Jack The Fix</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Professional emergency plumbing services, 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {['Services', 'About', 'Testimonials', 'FAQ'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Service Hours */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Service Hours</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Monday - Friday: Open 24/7</p>
              <p>Saturday: Open 24/7</p>
              <p>Sunday: Open 24/7</p>
              <p className="text-orange-400 font-semibold">Holidays: Available</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:+15550199"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 0199</span>
              </a>
              <a
                href="mailto:support@jackthefix.com"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>support@jackthefix.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Service Area: Metropolitan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Jack The Fix. All rights reserved. License #PL-99281
          </p>
          <div className="flex gap-4">
            <Button
              onClick={onCtaClick}
              className="cta-button px-6 py-2 rounded-lg font-semibold"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
