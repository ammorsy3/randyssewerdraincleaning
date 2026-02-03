'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickStats from '@/components/QuickStats';
import ServicesSection from '@/components/ServicesSection';
import TrustBadges from '@/components/TrustBadges';
import PromoCard from '@/components/PromoCard';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import CTAModal from '@/components/CTAModal';
import LearnMoreModal from '@/components/LearnMoreModal';
import BackToTop from '@/components/BackToTop';
import DiagnosticWizard from '@/components/DiagnosticWizard';
import DelayCalculator from '@/components/DelayCalculator';
import TrueProofSlider from '@/components/TrueProofSlider';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onCtaClick={handleCtaClick} />

      <main className="flex-grow">
        <HeroSection onCtaClick={handleCtaClick} />
        <DiagnosticWizard />
        <QuickStats />
        <ServicesSection onCtaClick={handleCtaClick} />
        <DelayCalculator />
        <TrustBadges />
        <PromoCard onCtaClick={handleCtaClick} />
        <ServiceAreasSection />
        <TrueProofSlider />
        <TestimonialsSection onLearnMoreClick={handleLearnMoreClick} />
        <FAQSection onLearnMoreClick={handleLearnMoreClick} />
        <CTASection onCtaClick={handleCtaClick} />
      </main>

      <Footer onCtaClick={handleCtaClick} />
      <StickyBottomBar onCtaClick={handleCtaClick} />
      <BackToTop />

      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </div>
  );
}
