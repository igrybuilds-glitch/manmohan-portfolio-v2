import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: 'STARTER',
      price: '₹5,000',
      suffix: 'onwards',
      summary: 'Sharp one-page presence',
      features: [
        'Single-page bespoke architecture',
        'Mobile performance optimisation',
        'Contact & direct WhatsApp integration',
        'Google Business Profile integration',
      ],
      cta: 'Scope Starter Project',
    },
    {
      name: 'PRO',
      price: '₹8,000',
      suffix: 'onwards',
      summary: 'Full business website with local SEO foundations',
      features: [
        'Multi-page commercial web architecture',
        'Targeted local SEO keyword foundations',
        'Structured service catalogue / portfolio showcase',
        'Google Maps & local citation setup',
      ],
      cta: 'Scope Pro Project',
    },
    {
      name: 'MAX',
      price: '₹15,000',
      suffix: 'onwards',
      summary: 'Website plus automation',
      features: [
        'Comprehensive bespoke web platform',
        'Advanced local SEO domination strategy',
        'Automated WhatsApp & Instagram lead pipelines',
        'Ongoing performance & conversion analytics',
      ],
      cta: 'Scope Max Project',
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>INVESTMENT TIERS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#16130E] uppercase tracking-tight leading-none">
            PRICING
          </h2>
        </div>
        <p className="font-body text-base text-[#16130E]/70 max-w-md text-left">
          Honest, transparent baseline pricing for serious local business founders.
        </p>
      </div>

      {/* Simple Rows (No highlighted middle tier) */}
      <div className="divide-y divide-[#16130E]/15 border-y border-[#16130E]/15 text-left">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-[#16130E]/[0.02] transition-colors px-2 md:px-4"
          >
            {/* Column 1: Tier Name & Price */}
            <div className="md:col-span-4 space-y-2">
              <span className="font-mono-label text-xs text-[#9C7414] tracking-widest block">
                PACKAGE
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[#16130E] uppercase tracking-tight">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-display text-3xl sm:text-4xl text-[#16130E] tabular-nums">
                  {tier.price}
                </span>
                <span className="font-mono-label text-xs text-[#16130E]/60 tracking-wider">
                  {tier.suffix}
                </span>
              </div>
            </div>

            {/* Column 2: Scope & Deliverables */}
            <div className="md:col-span-5 space-y-4">
              <p className="font-body text-base font-medium text-[#16130E]">
                {tier.summary}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm font-body text-[#16130E]/75">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-[#9C7414] font-mono-label text-xs">·</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Action Button */}
            <div className="md:col-span-3 flex md:justify-end items-center h-full pt-2 md:pt-0">
              <a
                href={`https://wa.me/917014257991?text=${encodeURIComponent(
                  `Hi Manmohan, I am interested in scoping the ${tier.name} package for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#16130E]/30 text-[#16130E] font-mono-label text-xs tracking-widest hover:border-[#16130E] hover:bg-[#16130E] hover:text-[#F6F1E8] transition-all"
              >
                <span>{tier.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mandatory Scoping Note */}
      <div className="mt-8 p-6 bg-[#16130E]/[0.03] border border-[#16130E]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
        <div>
          <span className="font-mono-label text-[11px] text-[#9C7414] tracking-widest block uppercase mb-1">
            TRANSPARENT ENGAGEMENT POLICY
          </span>
          <p className="font-body text-sm sm:text-base text-[#16130E] font-medium">
            Every project is scoped first — final quote after a short call.
          </p>
          <p className="font-body text-xs text-[#16130E]/65 mt-0.5">
            No unexpected billing, no lock-in fees, and no recurring agency overheads.
          </p>
        </div>

        <a
          href="https://wa.me/917014257991"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs font-mono-label tracking-widest text-[#16130E] hover:text-[#9C7414] underline underline-offset-4"
        >
          SCHEDULE DIRECT CALL →
        </a>
      </div>
    </section>
  );
};
