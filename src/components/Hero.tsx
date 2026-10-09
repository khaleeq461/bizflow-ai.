import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  Activity,
  Lock,
  Zap,
  Receipt,
  Check
} from 'lucide-react';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEarlyAccess, onOpenDemo }) => {
  const [simulatedActionApproved, setSimulatedActionApproved] = useState<boolean>(false);
  const [activeAgentPulse, setActiveAgentPulse] = useState<number>(0);

  // Subtle cyclic pulse across the AI agents inside the hero visual
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setActiveAgentPulse((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#07090E]">
      {/* Subtle fine grid & ambient gradient lighting */}
      <div className="absolute inset-0 bg-grid opacity-75"></div>
      
      {/* High-end ambient glow pools */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-brand-blue/20 via-brand-cyan/15 to-transparent rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Positioning (AI + Finance + SME + Action) */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.12)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                The AI Financial Operating System for Small Businesses
              </span>
            </div>

            {/* Main Headline - Concise, powerful, high contrast */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your business finances{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-100 to-brand-blue">
                should work for you.
              </span>
            </h1>

            {/* Supporting Headline - Articulates AI + Finance + SME + Action */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              BizFlow AI turns transactions, invoices and cash flow into intelligent actions — helping SMEs understand, predict and manage their finances.
            </p>

            {/* Core Capabilities Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                Bank Statement Ingestion
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                14-Day Cash Forecasting
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Owner-Gated Approvals
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenEarlyAccess}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-brand-cyan via-white to-brand-cyan text-slate-950 hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 shadow-lg shadow-brand-cyan/20"
              >
                <span>Request Early Access</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Play className="w-3.5 h-3.5 text-brand-cyan fill-brand-cyan" />
                <span>Launch Interactive Demo</span>
              </button>
            </div>

            {/* Trust statement & security highlights */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Shield className="w-4 h-4 text-brand-cyan" />
                <span>Built for the next generation of SMEs</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Zero Autonomous Fund Outflow</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                <Zap className="w-3 h-3 text-brand-cyan" />
                <span>Emerging Markets Native</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Animated Financial Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Specular backdrop glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue/30 via-brand-cyan/25 to-purple-600/20 blur-xl opacity-75"></div>

              {/* Glass Frame Terminal */}
              <div className="relative rounded-2xl bg-[#0D111C]/95 border border-white/[0.12] backdrop-blur-xl shadow-2xl p-5 sm:p-6 overflow-hidden space-y-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-300 ml-1 font-semibold">
                      BizFlow Intelligence Architecture
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    LIVE COORDINATION
                  </div>
                </div>

                {/* Step 1: Incoming Financial Stream (Transactions & Invoices entering) */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Receipt className="w-3.5 h-3.5 text-brand-cyan" />
                      INCOMING RAW FEEDS (SME INPUTS)
                    </span>
                    <span className="text-brand-cyan">Multi-Bank & WhatsApp Stream</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between">
                      <div className="truncate">
                        <span className="text-slate-400 text-[10px]">IBFT Feed:</span>
                        <div className="text-white font-semibold">PKR 420,000</div>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        Incoming
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between">
                      <div className="truncate">
                        <span className="text-slate-400 text-[10px]">Bill OCR (PDF):</span>
                        <div className="text-slate-200 font-semibold">INV-AP-8849</div>
                      </div>
                      <span className="text-[10px] text-brand-cyan bg-brand-cyan/10 px-1.5 py-0.5 rounded">
                        Parsed
                      </span>
                    </div>
                  </div>
                </div>

                {/* SVG Flowing Data Line Connectors */}
                <div className="relative py-1 flex justify-center">
                  <div className="w-full h-6 relative overflow-hidden flex items-center justify-center">
                    <svg className="w-full h-6" preserveAspectRatio="none">
                      <line x1="15%" y1="0" x2="50%" y2="24" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-beam" />
                      <line x1="85%" y1="0" x2="50%" y2="24" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-beam" />
                    </svg>
                  </div>
                </div>

                {/* Step 2: BizFlow Intelligence Core & Specialized Agents in Action */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#12182B] to-[#0A0E1A] border border-brand-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">BizFlow Orchestration Layer</div>
                        <div className="text-[10px] font-mono text-slate-400">Autonomous synthesis across 6 agents</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
                      Sync: 24ms
                    </span>
                  </div>

                  {/* 4 Agent Mini Status Nodes */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className={`p-2 rounded-lg border transition-all ${
                      activeAgentPulse === 0 
                        ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-sm'
                        : 'bg-black/30 border-white/[0.05] text-slate-400'
                    }`}>
                      <div className="text-[9px] uppercase">Agent 01</div>
                      <div className="font-semibold text-slate-200">Invoice Parser</div>
                      <div className="text-[10px] text-emerald-400">Structured NTN & GST</div>
                    </div>

                    <div className={`p-2 rounded-lg border transition-all ${
                      activeAgentPulse === 1 
                        ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-sm'
                        : 'bg-black/30 border-white/[0.05] text-slate-400'
                    }`}>
                      <div className="text-[9px] uppercase">Agent 02</div>
                      <div className="font-semibold text-slate-200">Reconciliation</div>
                      <div className="text-[10px] text-brand-cyan">3-Way Match 99.8%</div>
                    </div>

                    <div className={`p-2 rounded-lg border transition-all ${
                      activeAgentPulse === 2 
                        ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-sm'
                        : 'bg-black/30 border-white/[0.05] text-slate-400'
                    }`}>
                      <div className="text-[9px] uppercase">Agent 03</div>
                      <div className="font-semibold text-slate-200">CashFlow Predictor</div>
                      <div className="text-[10px] text-emerald-400">14-Day Safe Buffer</div>
                    </div>

                    <div className={`p-2 rounded-lg border transition-all ${
                      activeAgentPulse === 3 
                        ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-sm'
                        : 'bg-black/30 border-white/[0.05] text-slate-400'
                    }`}>
                      <div className="text-[9px] uppercase">Agent 04</div>
                      <div className="font-semibold text-slate-200">Disbursement Guard</div>
                      <div className="text-[10px] text-amber-400">Owner Gate Ready</div>
                    </div>
                  </div>
                </div>

                {/* SVG Flowing Data Line Connectors */}
                <div className="relative py-1 flex justify-center">
                  <div className="w-full h-5 relative overflow-hidden flex items-center justify-center">
                    <svg className="w-full h-5" preserveAspectRatio="none">
                      <line x1="50%" y1="0" x2="50%" y2="20" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" className="animate-beam" />
                    </svg>
                  </div>
                </div>

                {/* Step 3: Prepared Action Card with Owner Approval Button */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      PREPARED WORKFLOW:
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Apex Packaging (PKR 145,000)
                    </span>
                  </div>

                  {simulatedActionApproved ? (
                    <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-between text-xs font-mono animate-in fade-in">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Signed & Authorized by Business Owner
                      </span>
                      <span className="text-[10px]">Auth #0x89F2</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[11px] text-slate-300">
                        Disbursement pre-verified against Goods Receipt Note #GRN-902.
                      </div>
                      <button
                        onClick={() => setSimulatedActionApproved(true)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-brand-cyan hover:bg-white text-slate-950 transition-all shadow-md shadow-brand-cyan/20 shrink-0 flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Sign Payout</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Live Core Telemetry Bar */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-brand-cyan" />
                    Cash Position: <strong className="text-white">PKR 1.24M</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    14-Day Buffer: PKR 720K
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
