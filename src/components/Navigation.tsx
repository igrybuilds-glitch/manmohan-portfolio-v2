import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F1E8]/90 backdrop-blur-md border-b border-[#16130E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <a
          href="#top"
          className="font-display text-2xl md:text-3xl tracking-tight text-[#16130E] whitespace-nowrap shrink-0 hover:text-[#9C7414] transition-colors"
        >
          IGRYBUILDS
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav
          className="hidden md:flex items-center gap-8 text-xs font-mono-label tracking-widest text-[#16130E]/80"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#16130E] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="https://wa.me/917014257991"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#16130E] text-[#F6F1E8] text-xs font-mono-label tracking-widest hover:bg-[#9C7414] transition-colors whitespace-nowrap shrink-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#16130E] hover:text-[#9C7414] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F1E8] border-b border-[#16130E]/15 px-6 py-8 space-y-6 animate-fadeIn">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono-label tracking-widest text-[#16130E] hover:text-[#9C7414] py-1 border-b border-[#16130E]/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/917014257991"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#16130E] text-[#F6F1E8] text-xs font-mono-label tracking-widest"
            >
              <span>WHATSAPP MANMOHAN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
