import React from 'react';
import { ArrowUp, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenEarlyAccess: () => void;
  onOpenDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEarlyAccess, onOpenDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1px]">
                <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center font-extrabold text-white text-base">
                  B
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                BizFlow <span className="text-brand-cyan font-mono text-xs px-1.5 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">AI</span>
              </span>
            </div>

            <p className="text-sm font-medium text-slate-300">
              The AI Financial Operating System for Small Businesses.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connecting business transactions, invoices, receivables, payables, and predictive cash flow into one intelligent autonomous platform for SMEs.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Built in Pakistan • Designed for Emerging Markets</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Platform
            </h4>
            <ul className="space-y-2">
              {onOpenDemo && (
                <li>
                  <button 
                    onClick={onOpenDemo}
                    className="hover:text-brand-cyan transition-colors text-left text-brand-cyan font-medium flex items-center gap-1"
                  >
                    <span>Product Demo</span>
                    <span className="text-[10px] px-1 rounded bg-brand-cyan/15 text-brand-cyan">Live</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#product-preview" className="hover:text-brand-cyan transition-colors">
                  Product Preview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-cyan transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#ai-agents" className="hover:text-brand-cyan transition-colors">
                  AI Financial Team
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-brand-cyan transition-colors">
                  System Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Solution & Vision */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Vision & Focus
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#problem-solution" className="hover:text-brand-cyan transition-colors">
                  For SMEs
                </a>
              </li>
              <li>
                <a href="#global-vision" className="hover:text-brand-cyan transition-colors">
                  Emerging Markets
                </a>
              </li>
              <li>
                <a href="#problem-solution" className="hover:text-brand-cyan transition-colors">
                  Spreadsheet Replacement
                </a>
              </li>
              <li>
                <button onClick={onOpenEarlyAccess} className="hover:text-brand-cyan transition-colors text-left">
                  Private Pilot
                </button>
              </li>
            </ul>
          </div>

          {/* Early Stage Startup Transparency & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Contact & Pilot
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              BizFlow AI is currently in active development and early cohort testing. Inquire for pilot deployment:
            </p>
            <div className="space-y-2 pt-1 font-mono text-xs">
              <a
                href="mailto:contact@bizflow.ai"
                className="flex items-center gap-2 text-slate-300 hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>contact@bizflow.ai</span>
              </a>
              <div className="text-[11px] text-slate-400">
                Founding Office: Karachi • Lahore, Pakistan
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Ethical Startup Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-slate-400 leading-relaxed space-y-1">
            <div className="font-semibold text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
              Product Notice & Responsible Financial Architecture
            </div>
            <p>
              BizFlow AI is an intelligent financial operating system currently in private pilot testing for SMEs. All financial figures and transactions shown on this website are simulated demonstration data. BizFlow AI prepares recommendations and payment workflows that strictly require authenticated human approval before any disbursement is executed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div>
              © 2026 BizFlow AI. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
