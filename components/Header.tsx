'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Trust Badges', id: 'trust' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-950 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
            JF
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-950">Jack The Fix</h1>
            <p className="text-xs text-text-secondary">Emergency Plumber</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Phone and CTA - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15550199" className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">(555) 0199</span>
          </a>
          <Button
            onClick={onCtaClick}
            className="cta-button px-6 py-2 rounded-lg"
          >
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:+15550199" className="flex items-center gap-1 text-text-primary">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-text-primary hover:text-accent transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => {
                onCtaClick();
                setIsMenuOpen(false);
              }}
              className="cta-button w-full py-2 rounded-lg mt-2"
            >
              Call Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
