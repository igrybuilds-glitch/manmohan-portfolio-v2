import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [imgStage, setImgStage] = useState(0);

  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col justify-between pt-12 md:pt-20 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Editorial Headline & Founder Positioning */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6 text-xs font-mono-label tracking-widest text-[#9C7414]">
            <span>FOUNDER — IGRYBUILDS</span>
            <span aria-hidden="true" className="text-[#16130E]/30">·</span>
            <span>RAJASTHAN, INDIA</span>
          </div>

          {/* Giant Headline */}
          <div className="mb-8 select-none">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.88] text-[#16130E] uppercase">
              MANMOHAN
            </h1>
            <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.8rem] tracking-tight leading-[0.92] text-outline-ink uppercase mt-1">
              BUILDS FOR BUSINESS
            </span>
          </div>

          {/* Subtitle / Value Proposition */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-[#16130E]/85 max-w-2xl font-light leading-relaxed mb-10 text-balance">
            I help local businesses win more customers with premium websites and smart automation — designed, built and launched by hand, never from a template.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-8 py-4 bg-[#16130E] text-[#F6F1E8] font-mono-label text-xs tracking-widest hover:bg-[#9C7414] transition-all flex items-center gap-3 group"
            >
              <span>SEE THE WORK</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href="https://wa.me/917014257991"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#16130E]/25 text-[#16130E] font-mono-label text-xs tracking-widest hover:border-[#16130E] hover:bg-[#16130E]/5 transition-all flex items-center gap-2 group"
            >
              <span>WHATSAPP ME</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Arch-Shaped Portrait Frame */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80 max-w-full">
            {/* Outer Decorative Hairline Arch Ring */}
            <div className="absolute -inset-2.5 border border-[#16130E]/15 portrait-arch pointer-events-none" />

            {/* Accent Gold Corner Tag */}
            <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-[#9C7414] text-[#F6F1E8] font-mono-label text-[10px] tracking-widest uppercase shadow-sm">
              FOUNDER
            </div>

            {/* Arch Container */}
            <div className="relative aspect-[3/4.2] overflow-hidden portrait-arch bg-[#EAE2D3] border border-[#16130E]/20 shadow-md">
              {imgStage === 0 ? (
                <img
                  src="/manmohan-linkedin-headshot.jpg"
                  alt="Manmohan, Founder of IGRYbuilds"
                  onError={() => setImgStage(1)}
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              ) : imgStage === 1 ? (
                <img
                  src="/manmohan-headshot-fallback.svg"
                  alt="Manmohan, Founder of IGRYbuilds"
                  onError={() => setImgStage(2)}
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              ) : (
                /* Typographic Card Fallback */
                <div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-[#16130E] via-[#2A231A] to-[#4A3D2F] text-[#F6F1E8] relative">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#9C7414_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10">
                    <span className="font-mono-label text-[10px] text-[#9C7414] tracking-widest block mb-1">FOUNDER & BUILDER</span>
                    <h3 className="font-display text-3xl tracking-tight leading-none text-[#F6F1E8]">MANMOHAN</h3>
                    <p className="font-mono-label text-xs text-[#F6F1E8]/70 mt-2">IGRYbuilds · Rajasthan</p>
                  </div>
                </div>
              )}

              {/* Quiet Caption Strip at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#16130E]/90 via-[#16130E]/50 to-transparent p-4 pt-10 text-left">
                <span className="text-[11px] font-mono-label text-[#F6F1E8] tracking-wider block">
                  MANMOHAN · FOUNDER
                </span>
                <span className="text-[10px] font-mono-label text-[#F6F1E8]/70 tracking-widest block">
                  RAJASTHAN, INDIA
                </span>
              </div>
            </div>

            {/* Subtext beneath portrait */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono-label text-[#16130E]/60">
              <span>EST. MARCH 2026</span>
              <span className="text-[#9C7414]">HANDCRAFTED CODE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Strip: Minimalist Editorial Anchor */}
      <div className="pt-16 border-t border-[#16130E]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <span className="text-xs font-mono-label text-[#16130E]/50 tracking-widest block">BASE</span>
          <span className="font-body text-sm font-medium text-[#16130E] mt-1 block">Rajasthan, India</span>
        </div>
        <div>
          <span className="text-xs font-mono-label text-[#16130E]/50 tracking-widest block">STUDIO</span>
          <span className="font-body text-sm font-medium text-[#16130E] mt-1 block">IGRYbuilds · March 2026</span>
        </div>
        <div>
          <span className="text-xs font-mono-label text-[#16130E]/50 tracking-widest block">SPECIALISATION</span>
          <span className="font-body text-sm font-medium text-[#16130E] mt-1 block">Websites & Local SEO</span>
        </div>
        <div>
          <span className="text-xs font-mono-label text-[#16130E]/50 tracking-widest block">LEVERAGE</span>
          <span className="font-body text-sm font-medium text-[#16130E] mt-1 block">Custom Automation</span>
        </div>
      </div>
    </section>
  );
};
