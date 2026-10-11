import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setProgress(100);
      setIsDone(true);
      onComplete();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 400);
        }, 250);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#F6F1E8] text-[#16130E] transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="flex justify-between items-center text-xs font-mono-label tracking-widest text-[#16130E]/60">
        <span>IGRYBUILDS · RAJASTHAN</span>
        <span>EST. MARCH 2026</span>
      </div>

      <div className="max-w-4xl">
        <p className="text-xs font-mono-label text-[#9C7414] tracking-widest mb-3">DIGITAL GROWTH STUDIO</p>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-[#16130E]">
          MANMOHAN
        </h1>
        <p className="font-body text-sm sm:text-base text-[#16130E]/70 mt-3 max-w-md">
          Websites and smart automation engineered by hand for growing businesses.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end font-mono-label">
          <span className="text-xs text-[#16130E]/60 tracking-widest">INITIALISING ASSETS</span>
          <span className="text-4xl md:text-6xl font-display text-[#16130E] tabular-nums">
            {progress.toString().padStart(3, '0')}
          </span>
        </div>
        <div className="w-full h-[2px] bg-[#16130E]/10 overflow-hidden">
          <div
            className="h-full bg-[#16130E] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
