'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleActiveLink = () => {
      const sections = ['services', 'trust', 'testimonials', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveLink);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveLink);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-2 bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-sm'
        : 'py-4 bg-white border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-orange-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 transform translate-y-full group-hover:translate-y-[-200%] transition-transform duration-1000" />
            JF
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-950 group-hover:text-orange-600 transition-colors">Jack The Fix</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Emergency Plumber</p>
          </div>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative py-2 text-sm font-semibold transition-all duration-300 ${activeSection === link.id
                ? 'text-orange-600'
                : 'text-slate-600 hover:text-slate-950'
                }`}
            >
              {link.label}
              {/* Active Indicator */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ${activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
            </button>
          ))}
        </nav>

        {/* Phone and CTA - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+15550199"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-950 group-hover:text-orange-600 transition-colors">(555) 0199</span>
          </a>
          <Button
            onClick={onCtaClick}
            className="bg-slate-950 text-white hover:bg-orange-600 px-6 py-2 rounded-xl font-bold shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:+15550199" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-950" />
            ) : (
              <Menu className="w-6 h-6 text-slate-950" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-reveal">
          <div className="p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-bold py-4 px-4 rounded-xl transition-all ${activeSection === link.id
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <div className="p-4 bg-slate-50 rounded-2xl mt-4">
              <p className="text-center text-slate-500 text-sm mb-4">Need help immediately?</p>
              <Button
                onClick={() => {
                  onCtaClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
