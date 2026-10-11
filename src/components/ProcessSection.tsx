import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'A short call to understand the business',
    },
    {
      step: '02',
      title: 'DESIGN',
      description: 'Handcrafted layouts reviewed before code',
    },
    {
      step: '03',
      title: 'BUILD',
      description: 'Fast, SEO-ready, tested on phone and desktop',
    },
    {
      step: '04',
      title: 'GROW',
      description: 'Launch, measure, improve',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>METHODOLOGY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#16130E] uppercase tracking-tight leading-none">
            THE PROCESS
          </h2>
        </div>
        <p className="font-body text-base text-[#16130E]/70 max-w-md text-left">
          A disciplined, four-phase delivery framework that ensures clarity, speed, and zero technical bloat.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {steps.map((item) => (
          <div
            key={item.step}
            className="border-t border-[#16130E]/20 pt-8 flex flex-col justify-between space-y-4 group hover:border-[#9C7414] transition-colors"
          >
            <div>
              <span className="font-mono-label text-xs text-[#9C7414] tracking-widest block mb-4">
                PHASE {item.step}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[#16130E] uppercase tracking-tight mb-3 group-hover:text-[#9C7414] transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-base text-[#16130E]/85 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
