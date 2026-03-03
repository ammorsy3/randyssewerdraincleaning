'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickStats from '@/components/QuickStats';
import ServicesSection from '@/components/ServicesSection';
import TrustBadges from '@/components/TrustBadges';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import CTAModal from '@/components/CTAModal';
import LearnMoreModal from '@/components/LearnMoreModal';

import DiagnosticWizard from '@/components/DiagnosticWizard';

import TrueProofSlider from '@/components/TrueProofSlider';
import ArchitectureOfFlow from '@/components/ArchitectureOfFlow';
import HeaderTopBar from '@/components/HeaderTopBar';
import LeadMagnetModal from '@/components/LeadMagnetModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  // Trigger lead magnet after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeadMagnetOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0">
      <HeaderTopBar />
      <Header onCtaClick={handleCtaClick} />

      <main className="flex-grow">
        <HeroSection onCtaClick={handleCtaClick} />
        <DiagnosticWizard onCtaClick={handleCtaClick} />
        <QuickStats />
        <ServicesSection onCtaClick={handleCtaClick} />

        <ArchitectureOfFlow />
        <TrustBadges />
        <ServiceAreasSection />
        <TrueProofSlider />
        <TestimonialsSection onLearnMoreClick={handleLearnMoreClick} />
        <FAQSection onLearnMoreClick={handleLearnMoreClick} />
        <CTASection onCtaClick={handleCtaClick} />
      </main>

      <Footer onCtaClick={handleCtaClick} />
      <StickyBottomBar onCtaClick={handleCtaClick} />


      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </div>
  );
}
