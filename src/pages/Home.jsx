import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionsSection from '../components/landing/SolutionsSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import ProcessSection from '../components/landing/ProcessSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import PortfolioSection from '../components/landing/PortfolioSection';
import CTASection from '../components/landing/CTASection';
import FAQSection from '../components/landing/FAQSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="bg-[#0f0b08] text-[#f5f0eb] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionsSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PortfolioSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
