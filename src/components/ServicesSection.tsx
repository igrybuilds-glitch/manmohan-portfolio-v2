import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'PREMIUM WEBSITES',
      line: 'Fast, bespoke websites designed and coded from scratch to turn regional traffic into committed customers.',
    },
    {
      num: '02',
      title: 'REDESIGN & CONVERSION',
      line: 'Complete architectural overhauls that replace bloated slow templates with high-converting custom platforms.',
    },
    {
      num: '03',
      title: 'LOCAL SEO',
      line: 'Targeted geographic search optimisation so your business outranks competitors in local Google queries.',
    },
    {
      num: '04',
      title: 'GOOGLE BUSINESS PROFILE & MAPS',
      line: 'Full profile verification, local citation structuring, and maps ranking dominance for everyday store visits.',
    },
    {
      num: '05',
      title: 'LEAD GENERATION',
      line: 'Frictionless customer inquiry flows and high-intent landing systems engineered to capture verified buyer demand.',
    },
    {
      num: '06',
      title: 'WHATSAPP & INSTAGRAM AUTOMATION',
      line: 'Instant automated response pipelines that route customer inquiries and bookings straight to your mobile phone.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#16130E] uppercase tracking-tight leading-none">
            SERVICES
          </h2>
        </div>
        <p className="font-body text-base text-[#16130E]/70 max-w-md text-left">
          Six focused digital growth capabilities engineered by hand for high-intent business owners.
        </p>
      </div>

      {/* 6 Elegant Horizontal Rows (Not cards) */}
      <div className="divide-y divide-[#16130E]/15 border-y border-[#16130E]/15 text-left">
        {services.map((service) => (
          <div
            key={service.num}
            className="group py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#16130E]/[0.02] transition-colors px-2 md:px-4"
          >
            {/* Number + Title */}
            <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 md:w-5/12">
              <span className="font-mono-label text-xs sm:text-sm font-semibold text-[#9C7414] tracking-widest shrink-0 w-8">
                {service.num}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#16130E] uppercase tracking-tight group-hover:text-[#9C7414] transition-colors">
                {service.title}
              </h3>
            </div>

            {/* One Honest Line */}
            <p className="font-body text-sm sm:text-base text-[#16130E]/75 md:w-6/12 leading-relaxed">
              {service.line}
            </p>

            {/* Subtle Affordance Indicator */}
            <div className="hidden md:flex justify-end md:w-1/12 text-[#16130E]/30 group-hover:text-[#9C7414] transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
