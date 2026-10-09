import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalCTAProps {
  onOpenEarlyAccess: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEarlyAccess }) => {
  const [emailInput, setEmailInput] = useState('');
  const [fastSubmitted, setFastSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setFastSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00F0FF', '#0066FF', '#10B981']
      });
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#07090E] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-blue/20 via-brand-cyan/15 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Glow Frame Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0F1424] to-[#0A0D18] border border-brand-cyan/30 p-8 sm:p-14 shadow-[0_20px_60px_-15px_rgba(0,240,255,0.15)] overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              Pilot Cohort Open
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Give your business a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
                financial intelligence layer.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Replace fragmented tools and spreadsheet chaos with autonomous financial agents. Designed specifically for forward-looking SMEs.
            </p>

            {fastSubmitted ? (
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center justify-center gap-2 font-bold text-base">
                  <CheckCircle className="w-5 h-5" />
                  <span>Early Access Reserved</span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  We have registered <strong className="text-white">{emailInput}</strong>. Our founding team will contact you with deployment details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email..."
                  className="w-full px-4 py-3.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-brand-cyan via-white to-brand-cyan text-slate-950 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all whitespace-nowrap active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Request Early Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Comprehensive modal trigger button */}
            <div className="pt-2">
              <button
                onClick={onOpenEarlyAccess}
                className="text-xs font-mono text-slate-400 hover:text-brand-cyan underline transition-colors"
              >
                Or apply with full company profile & custom requirements →
              </button>
            </div>

            {/* Trust statement */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-cyan" />
                Bank-Grade 256-bit Encryption
              </span>
              <span>•</span>
              <span>100% Owner Approval Gating</span>
              <span>•</span>
              <span>No Credit Card Required</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
