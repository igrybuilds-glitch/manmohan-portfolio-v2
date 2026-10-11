import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';

interface ConceptPoster {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  hook: string;
  specs: string[];
  gradient: string;
}

export const AdConceptsSection: React.FC = () => {
  const [activePoster, setActivePoster] = useState<ConceptPoster | null>(null);

  const posters: ConceptPoster[] = [
    {
      id: 'skincare',
      category: 'D2C Skincare Product',
      title: 'AURA BOTANICS',
      tagline: 'Concentrated Desert Bakuchiol & Saffron Elixir',
      description: 'Handcrafted campaign poster engineered for high-AOV direct-to-consumer skincare brands targeting tier-1 wellness buyers.',
      hook: 'Cellular hydration calibrated for arid climates. Zero synthetics.',
      specs: ['3:4 High-Resolution Print/Digital', 'Product Dropper Silhouette', 'Desert Botanical Tones'],
      gradient: 'from-[#3A2D22] via-[#241D17] to-[#16130E]',
    },
    {
      id: 'restaurant',
      category: 'Heritage Dining & Food',
      title: 'EMBER & SAFFRON',
      tagline: 'Royal Marwari Wood-Fire Gastronomy',
      description: 'Editorial culinary promotion created for premium destination restaurants and fine-dining spaces.',
      hook: 'Fourteen-hour smoked heritage spices over slow Acacia coals.',
      specs: ['Basalt Plating Geometry', 'Warm Golden Ambient Lighting', 'Michelin-Style Minimal Typography'],
      gradient: 'from-[#422915] via-[#24180F] to-[#16130E]',
    },
    {
      id: 'realestate',
      category: 'Luxury Real Estate Villa',
      title: 'THE OCHRE RESIDENCES',
      tagline: 'Private Sandstone Sanctuaries · Pushkar Valley',
      description: 'Architectural acquisition ad designed for private villa estates and high-net-worth real estate syndicates.',
      hook: 'Four monolithic suites. Private solar courtyard. Zero visual compromise.',
      specs: ['Brutalist Sandstone Framing', 'Reflecting Pool Linear Geometry', 'HNW Buyer Lead Architecture'],
      gradient: 'from-[#3A3326] via-[#201D17] to-[#16130E]',
    },
    {
      id: 'creator',
      category: 'Coach & Executive Personal Brand',
      title: 'ARCHITECTING SCALE',
      tagline: 'The Founder Operator Protocol',
      description: 'High-authority personal branding campaign created for business coaches, consultants, and enterprise advisors.',
      hook: 'Stop selling hours. Engineer self-executing business systems.',
      specs: ['Studio Broadcast Aesthetic', 'Refined Monospaced Key Metrics', 'High-Ticket Inbound Funnel'],
      gradient: 'from-[#2A2B33] via-[#1B1B22] to-[#16130E]',
    },
  ];

  return (
    <section id="ad-concepts" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>CREATIVE DIRECTION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#16130E] uppercase tracking-tight leading-none">
            AD CONCEPT SAMPLES
          </h2>
        </div>
        <div className="text-left md:text-right">
          <span className="inline-block px-3 py-1 bg-[#16130E]/5 border border-[#16130E]/15 text-[#16130E] font-mono-label text-xs tracking-wider">
            CLEARLY LABELED: CONCEPT SAMPLES
          </span>
          <p className="font-body text-xs text-[#16130E]/60 mt-2 max-w-xs md:ml-auto">
            Sample creative mockups demonstrating high-impact art direction and commercial customer conversion hooks.
          </p>
        </div>
      </div>

      {/* 4 Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="group relative border border-[#16130E]/15 bg-[#F6F1E8] hover:border-[#16130E] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Poster Frame (3:4 ratio) */}
            <div
              className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-b ${poster.gradient} p-6 flex flex-col justify-between text-[#F6F1E8] select-none`}
            >
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F6F1E8_1px,transparent_1px)] [background-size:12px_12px]" />

              {/* Poster Top Bar */}
              <div className="relative z-10 flex justify-between items-start text-[9px] font-mono-label tracking-widest text-[#F6F1E8]/70 border-b border-[#F6F1E8]/15 pb-2">
                <span>IGRYBUILDS CREATIVE</span>
                <span className="text-[#9C7414]">CONCEPT ONLY</span>
              </div>

              {/* Poster Main Typography */}
              <div className="relative z-10 my-auto py-4">
                <span className="font-mono-label text-[10px] text-[#9C7414] tracking-wider block mb-1">
                  {poster.category}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl uppercase leading-none text-[#F6F1E8]">
                  {poster.title}
                </h4>
                <p className="font-body text-[11px] text-[#F6F1E8]/80 mt-2 font-light italic leading-snug">
                  "{poster.hook}"
                </p>
              </div>

              {/* Poster Bottom Strip */}
              <div className="relative z-10 pt-3 border-t border-[#F6F1E8]/15 flex justify-between items-end text-[9px] font-mono-label text-[#F6F1E8]/60">
                <span className="truncate max-w-[140px]">{poster.tagline}</span>
                <button
                  type="button"
                  onClick={() => setActivePoster(poster)}
                  className="p-1.5 bg-[#F6F1E8]/10 hover:bg-[#F6F1E8]/25 rounded text-[#F6F1E8] transition-colors"
                  aria-label={`Inspect ${poster.title} concept poster`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Information Card beneath poster */}
            <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
              <div>
                <span className="font-mono-label text-[10px] text-[#16130E]/50 tracking-widest block mb-1">
                  CONCEPT SAMPLE
                </span>
                <h5 className="font-display text-xl text-[#16130E] uppercase">{poster.title}</h5>
                <p className="font-body text-xs text-[#16130E]/75 mt-1.5 leading-relaxed">
                  {poster.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActivePoster(poster)}
                className="w-full py-2.5 border border-[#16130E]/20 text-[#16130E] font-mono-label text-[11px] tracking-wider hover:bg-[#16130E] hover:text-[#F6F1E8] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>VIEW SPECIFICATIONS</span>
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#16130E]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#F6F1E8] text-[#16130E] border border-[#16130E]/30 p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              onClick={() => setActivePoster(null)}
              className="absolute top-6 right-6 p-2 text-[#16130E]/70 hover:text-[#16130E] transition-colors"
              aria-label="Close concept view"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-2">
              <span>CONCEPT SAMPLE</span>
              <span aria-hidden="true">·</span>
              <span>{activePoster.category}</span>
            </div>

            <h3 className="font-display text-4xl sm:text-5xl uppercase leading-none mb-4 text-[#16130E]">
              {activePoster.title}
            </h3>

            <div className="p-5 bg-[#16130E] text-[#F6F1E8] my-6">
              <span className="font-mono-label text-[10px] text-[#9C7414] tracking-widest block mb-1">
                COMMERCIAL CONVERSION HOOK
              </span>
              <p className="font-body text-lg italic font-light">
                "{activePoster.hook}"
              </p>
            </div>

            <div className="space-y-4 text-left">
              <h4 className="font-mono-label text-xs tracking-widest text-[#16130E]/60 uppercase">
                STRATEGIC RATIONALE
              </h4>
              <p className="font-body text-base text-[#16130E]/85 leading-relaxed">
                {activePoster.description} We develop high-contrast ad concepts that pair psychological hooks with pristine typography, ensuring local and high-growth brands command category dominance across digital channels.
              </p>

              <div className="pt-4 border-t border-[#16130E]/15">
                <span className="font-mono-label text-xs tracking-widest text-[#16130E]/60 uppercase block mb-3">
                  ART DIRECTION NOTES
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-label text-xs text-[#16130E]/80">
                  {activePoster.specs.map((spec, i) => (
                    <li key={i} className="p-3 bg-[#16130E]/5 border border-[#16130E]/10">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#16130E]/15 flex justify-end">
              <button
                type="button"
                onClick={() => setActivePoster(null)}
                className="px-6 py-2.5 bg-[#16130E] text-[#F6F1E8] font-mono-label text-xs tracking-widest hover:bg-[#9C7414] transition-colors"
              >
                CLOSE INSPECTION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
