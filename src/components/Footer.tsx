import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#16130E]/15 py-12 px-6 md:px-12 bg-[#F6F1E8] text-[#16130E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left">
        {/* Brand & Studio Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-[#16130E]">IGRYBUILDS</span>
            <span className="text-xs font-mono-label text-[#9C7414]">·</span>
            <span className="font-mono-label text-xs text-[#16130E]/60 tracking-wider">FOUNDED MARCH 2026</span>
          </div>
          <p className="font-body text-xs text-[#16130E]/60 max-w-sm">
            Digital growth studio based in Rajasthan, India. Handcrafted websites, local SEO, and custom automation.
          </p>
        </div>

        {/* Quiet Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono-label tracking-widest text-[#16130E]/70">
          <a
            href="https://wa.me/917014257991"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16130E] hover:underline"
          >
            WHATSAPP
          </a>
          <a
            href="mailto:igrybuilds@gmail.com"
            className="hover:text-[#16130E] hover:underline"
          >
            EMAIL
          </a>
          <a
            href="https://instagram.com/igrybuild"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16130E] hover:underline"
          >
            INSTAGRAM
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="font-mono-label text-xs text-[#16130E]/50">
            © 2026 MANMOHAN · ALL RIGHTS RESERVED
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 border border-[#16130E]/20 text-[#16130E] hover:bg-[#16130E] hover:text-[#F6F1E8] transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
