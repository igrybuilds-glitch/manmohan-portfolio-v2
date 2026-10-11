import React, { useState } from 'react';
import { ArrowUpRight, Mail, MessageSquare, Instagram, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [serviceNeed, setServiceNeed] = useState('Premium Website & Local SEO');
  const [details, setDetails] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Manmohan,\n\nI run ${businessName || 'a business'} in ${city || 'Rajasthan'}.\nInterested in: ${serviceNeed}.\nNotes: ${details || 'Looking to discuss a new project.'}`;
    window.open(`https://wa.me/917014257991?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry: ${businessName || 'New Business'} · IGRYbuilds`;
    const body = `Hi Manmohan,\n\nBusiness: ${businessName}\nCity: ${city}\nFocus: ${serviceNeed}\n\nProject details:\n${details}\n\nLooking forward to speaking.`;
    window.location.href = `mailto:igrybuilds@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#16130E]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
        {/* Left Column: Direct Founder Invitation */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-label tracking-widest text-[#9C7414] mb-3">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>DIRECT INQUIRY</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#16130E] uppercase tracking-tight leading-[0.88]">
              LET'S TALK
            </h2>
          </div>

          <p className="font-body text-xl sm:text-2xl text-[#16130E] font-normal leading-relaxed">
            Have a business that deserves more customers? Tell me what you do — I'll tell you honestly what I'd build for it.
          </p>

          <p className="font-body text-base text-[#16130E]/75 leading-relaxed">
            No agency account managers, no pushy pitch decks. You get a candid assessment from the person who will actually write the code and design the customer journeys.
          </p>

          {/* Direct Communication Channels */}
          <div className="space-y-4 pt-4 border-t border-[#16130E]/15">
            <span className="font-mono-label text-xs text-[#16130E]/60 tracking-widest block uppercase">
              DIRECT REACH
            </span>

            <div className="flex flex-wrap gap-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917014257991"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#16130E] text-[#F6F1E8] font-mono-label text-xs tracking-widest hover:bg-[#9C7414] transition-colors flex items-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 text-[#9C7414] group-hover:text-[#F6F1E8]" />
                <span>WHATSAPP (+91 70142 57991)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Email Button */}
              <a
                href="mailto:igrybuilds@gmail.com"
                className="px-6 py-3.5 border border-[#16130E]/30 text-[#16130E] font-mono-label text-xs tracking-widest hover:border-[#16130E] hover:bg-[#16130E]/5 transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span>IGRYBUILDS@GMAIL.COM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Instagram Button */}
              <a
                href="https://instagram.com/igrybuild"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#16130E]/30 text-[#16130E] font-mono-label text-xs tracking-widest hover:border-[#16130E] hover:bg-[#16130E]/5 transition-colors flex items-center gap-2 group"
              >
                <Instagram className="w-4 h-4" />
                <span>@IGRYBUILD</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Brief Project Scope Builder */}
        <div className="lg:col-span-6 bg-[#16130E]/[0.03] border border-[#16130E]/15 p-8 md:p-10 space-y-6">
          <div className="border-b border-[#16130E]/10 pb-4">
            <span className="font-mono-label text-[11px] text-[#9C7414] tracking-widest block uppercase">
              QUICK SCOPING BRIEF
            </span>
            <h3 className="font-display text-2xl text-[#16130E] uppercase mt-1">
              TELL ME WHAT YOU DO
            </h3>
            <p className="font-body text-xs text-[#16130E]/65 mt-1">
              Fill this in for an instant pre-populated message via WhatsApp or Email.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="businessName" className="font-mono-label text-xs text-[#16130E]/70 block mb-1">
                BUSINESS OR BRAND NAME
              </label>
              <input
                id="businessName"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Amber Heritage Interiors, Jaipur"
                className="w-full px-4 py-3 bg-[#F6F1E8] border border-[#16130E]/20 text-[#16130E] font-body text-sm focus:outline-none focus:border-[#16130E]"
              />
            </div>

            <div>
              <label htmlFor="city" className="font-mono-label text-xs text-[#16130E]/70 block mb-1">
                LOCATION / CITY
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Ajmer / Jaipur / Jodhpur / Pan-India"
                className="w-full px-4 py-3 bg-[#F6F1E8] border border-[#16130E]/20 text-[#16130E] font-body text-sm focus:outline-none focus:border-[#16130E]"
              />
            </div>

            <div>
              <label htmlFor="serviceNeed" className="font-mono-label text-xs text-[#16130E]/70 block mb-1">
                PRIMARY OBJECTIVE
              </label>
              <select
                id="serviceNeed"
                value={serviceNeed}
                onChange={(e) => setServiceNeed(e.target.value)}
                className="w-full px-4 py-3 bg-[#F6F1E8] border border-[#16130E]/20 text-[#16130E] font-body text-sm focus:outline-none focus:border-[#16130E]"
              >
                <option value="Premium Website & Local SEO">Premium Website & Local SEO</option>
                <option value="Full Website Redesign & Conversion">Full Website Redesign & Conversion</option>
                <option value="WhatsApp & Customer Automation">WhatsApp & Customer Automation</option>
                <option value="Google Business Profile & Maps Dominance">Google Business Profile & Maps Dominance</option>
                <option value="Complete Digital Growth (Web + SEO + Automation)">Complete Digital Growth (Web + SEO + Automation)</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="font-mono-label text-xs text-[#16130E]/70 block mb-1">
                WHAT IS YOUR BIGGEST CURRENT BOTTLENECK?
              </label>
              <textarea
                id="details"
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. We get walk-ins but our website brings zero local leads, or inquiries fall through the cracks."
                className="w-full px-4 py-3 bg-[#F6F1E8] border border-[#16130E]/20 text-[#16130E] font-body text-sm focus:outline-none focus:border-[#16130E] resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full py-3.5 bg-[#16130E] text-[#F6F1E8] font-mono-label text-xs tracking-widest hover:bg-[#9C7414] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND VIA WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full py-3.5 border border-[#16130E]/30 text-[#16130E] font-mono-label text-xs tracking-widest hover:border-[#16130E] hover:bg-[#16130E]/5 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>SEND VIA EMAIL</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
