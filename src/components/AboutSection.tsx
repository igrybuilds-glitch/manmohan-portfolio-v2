import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const facts = [
    { label: 'BASED', value: 'Rajasthan, India' },
    { label: 'STUDIO', value: 'IGRYbuilds, est. March 2026' },
    { label: 'FOCUS', value: 'Websites · Local SEO · Automation' },
    {
      label: 'CONTACT',
      value: 'igrybuilds@gmail.com',
      isLink: true,
      href: 'mailto:igrybuilds@gmail.com',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
        {/* Left Column: Section Marker */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>ABOUT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#16130E] uppercase tracking-tight leading-none">
            MANMOHAN
          </h2>
          <p className="mt-4 font-mono-label text-xs text-[#16130E]/60 max-w-xs leading-relaxed uppercase">
            FOUNDER OF IGRYBUILDS · RAJASTHAN, INDIA
          </p>
        </div>

        {/* Right Column: Statement & Structured Facts */}
        <div className="lg:col-span-8 space-y-12">
          {/* Main Statement: Exact bio only */}
          <div>
            <p className="font-body text-2xl sm:text-3xl md:text-4xl text-[#16130E] font-normal leading-snug">
              I'm Manmohan, founder of IGRYbuilds — a digital growth studio from Rajasthan, started in March 2026. I build websites and automation systems that turn visitors into paying customers.
            </p>
          </div>

          {/* Structured Facts Matrix: Four exact facts */}
          <div className="pt-8 border-t border-[#16130E]/15 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {facts.map((fact) => (
              <div key={fact.label} className="space-y-1.5">
                <span className="font-mono-label text-xs text-[#9C7414] tracking-widest block">
                  {fact.label}
                </span>
                {fact.isLink ? (
                  <a
                    href={fact.href}
                    className="group inline-flex items-center gap-1.5 font-body text-lg font-medium text-[#16130E] hover:text-[#9C7414] transition-colors"
                  >
                    <span>{fact.value}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="font-body text-lg font-medium text-[#16130E] block">
                    {fact.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
