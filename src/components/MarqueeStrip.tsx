import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    'HIGH-CONVERSION WEBSITES',
    'LOCAL SEO EXCELLENCE',
    'SMART WHATSAPP & INSTAGRAM AUTOMATION',
    'HANDCRAFTED ARCHITECTURE',
    'NO TEMPLATES',
    'DIRECT FOUNDER EXECUTION',
  ];

  return (
    <div className="w-full overflow-hidden border-y border-[#16130E]/15 py-4 bg-[#16130E] text-[#F6F1E8] select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center shrink-0">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center">
              <span className="font-display text-lg md:text-xl tracking-wider uppercase px-6">
                {item}
              </span>
              <span className="text-[#9C7414] font-mono-label text-base">✦</span>
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center">
              <span className="font-display text-lg md:text-xl tracking-wider uppercase px-6">
                {item}
              </span>
              <span className="text-[#9C7414] font-mono-label text-base">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
