import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>PORTFOLIO & CASEWORK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#16130E] uppercase tracking-tight leading-none">
            SELECTED WORK
          </h2>
        </div>
        <p className="font-body text-base text-[#16130E]/70 max-w-md text-left">
          Handcrafted digital infrastructure deployed for real commercial clients and proprietary ventures.
        </p>
      </div>

      {/* Asymmetric Layout: 1 Large Card + 2 Smaller Cards */}
      <div className="space-y-10">
        {/* Card 1 (Large Featured Project): Design Plus, Ajmer */}
        <div className="group border border-[#16130E]/15 bg-[#F6F1E8] hover:border-[#16130E] transition-colors p-8 md:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Preview Frame */}
            <div className="lg:col-span-7 overflow-hidden border border-[#16130E]/10 bg-[#EFE9DC] relative aspect-[16/10]">
              <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#EAE2D3] to-[#DDD2C0] relative">
                <div className="flex justify-between items-center font-mono-label text-[11px] text-[#16130E]/60 border-b border-[#16130E]/10 pb-3">
                  <span>DESIGN PLUS · AJMER</span>
                  <span>ARCHITECTURE & INTERIORS</span>
                </div>

                <div className="my-auto py-6">
                  <span className="font-mono-label text-[10px] text-[#9C7414] tracking-widest block mb-2">COMMERCIAL PLATFORM</span>
                  <h4 className="font-display text-3xl sm:text-5xl text-[#16130E] uppercase leading-none">
                    DESIGN PLUS
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#16130E]/70 mt-2 max-w-sm">
                    Architecture & Interiors Studio
                  </p>
                </div>

                <div className="flex justify-between items-end pt-3 border-t border-[#16130E]/10 font-mono-label text-[10px] text-[#16130E]/70">
                  <span>AJMER, RAJASTHAN</span>
                  <span className="text-[#9C7414]">LIVE PRODUCTION</span>
                </div>
              </div>
            </div>

            {/* Content & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-label text-[#16130E]/60 mb-3">
                  <span>Client Work</span>
                  <span aria-hidden="true">·</span>
                  <span>Ajmer, Rajasthan</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-[#16130E] uppercase tracking-tight">
                  DESIGN PLUS, AJMER
                </h3>

                <p className="font-body text-base sm:text-lg text-[#16130E]/85 leading-relaxed mt-4">
                  Premium website for an architecture/interiors studio: 74-project catalogue, online booking, ongoing local SEO.
                </p>
              </div>

              <div>
                <a
                  href="https://designplusajmer.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#16130E] text-[#F6F1E8] font-mono-label text-xs tracking-widest hover:bg-[#9C7414] transition-colors"
                >
                  <span>VISIT DESIGNPLUSAJMER.CO.IN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Smaller Cards in a 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Card 2: 3gee.in */}
          <div className="border border-[#16130E]/15 bg-[#F6F1E8] hover:border-[#16130E] transition-colors p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-label text-[#16130E]/60">
                <span>Technical SEO</span>
                <span aria-hidden="true">·</span>
                <span>Optimisation</span>
              </div>

              <div className="aspect-[16/9] bg-[#EFE9DC] border border-[#16130E]/10 p-6 flex flex-col justify-between">
                <span className="font-mono-label text-[10px] text-[#16130E]/60">TECHNICAL AUDIT</span>
                <div>
                  <h4 className="font-display text-2xl text-[#16130E] uppercase">3GEE.IN</h4>
                  <p className="font-mono-label text-[11px] text-[#9C7414] mt-1">SEO TEARDOWN</p>
                </div>
                <div className="text-[10px] font-mono-label text-[#16130E]/50">3GEE.IN</div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-[#16130E] uppercase tracking-tight">
                  3GEE.IN
                </h3>
                <p className="font-body text-base text-[#16130E]/85 leading-relaxed mt-2">
                  Full technical SEO teardown and optimisation.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#16130E]/10">
              <a
                href="https://3gee.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono-label text-[#16130E] hover:text-[#9C7414] transition-colors"
              >
                <span>OPEN 3GEE.IN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Kruzoe */}
          <div className="border border-[#16130E]/15 bg-[#F6F1E8] hover:border-[#16130E] transition-colors p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-label text-[#16130E]/60">
                <span>Founder Brand</span>
                <span aria-hidden="true">·</span>
                <span>Proprietary</span>
              </div>

              <div className="aspect-[16/9] bg-[#EFE9DC] border border-[#16130E]/10 p-6 flex flex-col justify-between">
                <span className="font-mono-label text-[10px] text-[#16130E]/60">FOUNDER VENTURE</span>
                <div>
                  <h4 className="font-display text-2xl text-[#16130E] uppercase">KRUZOE</h4>
                  <p className="font-mono-label text-[11px] text-[#9C7414] mt-1">PROPRIETARY BRAND</p>
                </div>
                <div className="text-[10px] font-mono-label text-[#16130E]/50">KRUZOE</div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-[#16130E] uppercase tracking-tight">
                  KRUZOE
                </h3>
                <p className="font-body text-base text-[#16130E]/85 leading-relaxed mt-2">
                  His own brand, designed and built from scratch.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#16130E]/10">
              <span className="inline-flex items-center gap-2 text-xs font-mono-label text-[#9C7414]">
                <span>BUILT & GOVERNED IN-HOUSE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
