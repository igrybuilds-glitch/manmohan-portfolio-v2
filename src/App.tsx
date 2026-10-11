import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroScene } from './components/HeroScene';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { AdConceptsSection } from './components/AdConceptsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F6F1E8] text-[#16130E] selection:bg-[#9C7414]/20 selection:text-[#16130E]">
      {/* Preloader with 0-100 counter */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Custom desktop cursor dot + ring */}
      <CustomCursor />

      {/* Main Content (fades in once preloader completes) */}
      <div
        className={`transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Navigation Bar (Top Bar Contract) */}
        <Navigation />

        {/* Hero Section with interactive 3D Three.js background */}
        <div className="relative overflow-hidden">
          <HeroScene scrollProgress={scrollProgress} />
          <HeroSection />
        </div>

        {/* Marquee Divider Strip */}
        <MarqueeStrip />

        {/* About Section */}
        <AboutSection />

        {/* Selected Work (1 Large Card + 2 Smaller Cards) */}
        <WorkSection />

        {/* Ad Concept Samples (4 clearly labeled posters) */}
        <AdConceptsSection />

        {/* Services (6 elegant rows) */}
        <ServicesSection />

        {/* Process (4 disciplined steps) */}
        <ProcessSection />

        {/* Pricing (Simple rows, no highlighted middle tier) */}
        <PricingSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Quiet Footer */}
        <Footer />
      </div>
    </div>
  );
}
