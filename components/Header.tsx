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
        ? 'py-2 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm'
        : 'py-4 bg-white border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md">
            <img
              src="/randy-sewer-drain-cleaning-logo.jpeg"
              alt="Randy's Sewer Drain Cleaning"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-[17px] font-black text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight leading-none">Randy's Sewer</h1>
            <p className="text-[11px] text-blue-600 font-bold tracking-wide leading-tight mt-0.5">Drain Cleaning · Gastonia, NC</p>
          </div>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative py-2 text-sm font-semibold transition-all duration-300 ${activeSection === link.id
                ? 'text-blue-600'
                : 'text-slate-600 hover:text-slate-950'
                }`}
            >
              {link.label}
              {/* Active Indicator */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ${activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
            </button>
          ))}
        </nav>

        {/* Phone and CTA - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+17045799558"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-950 group-hover:text-blue-600 transition-colors">(704) 579-9558</span>
          </a>
          <Button
            onClick={onCtaClick}
            className="bg-slate-950 text-white hover:bg-blue-600 px-6 py-2 rounded-xl font-bold shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:+17045799558" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
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
                  ? 'bg-blue-50 text-blue-600'
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg"
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
