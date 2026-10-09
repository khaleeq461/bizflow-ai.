import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Receipt, 
  MessageSquareWarning, 
  Landmark, 
  Layers, 
  AlertTriangle,
  ArrowRight,
  Clock,
  Ban,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'friction' | 'comparison'>('friction');

  const problems = [
    {
      id: 'spreadsheets',
      title: 'Fragile Spreadsheets',
      subtitle: 'Static formulas & manual data re-entry',
      description: 'Business owners stay up late updating 12 different Excel sheets that break when a row is inserted, leaving cash balances inaccurate by Monday morning.',
      icon: FileSpreadsheet,
      codeSnippet: '=SUM(D4:D38)  #REF! Error',
      statLabel: 'Lost Time',
      statValue: '14 hrs/wk',
      badge: 'Formula Breakdown'
    },
    {
      id: 'paper-invoices',
      title: 'Paper Invoices & Receipts',
      subtitle: 'Lost slips & unrecorded cash bills',
      description: 'Physical receipts stuffed into binders or glove compartments. Expense deductions vanish, sales tax claims get disallowed, and supplier payments get delayed.',
      icon: Receipt,
      codeSnippet: 'Bill #9021 • Physical copy missing',
      statLabel: 'Unclaimed GST',
      statValue: 'Up to 7%',
      badge: 'Unorganized Archive'
    },
    {
      id: 'messaging-apps',
      title: 'WhatsApp Payment Chaos',
      subtitle: 'Bank screenshots lost in group chats',
      description: 'Customers send IBFT payment slips via WhatsApp groups. Receipts get buried under hundreds of messages without formal audit logs or automatic matching.',
      icon: MessageSquareWarning,
      codeSnippet: 'Screenshot_2026-10-04.jpg [Unverified]',
      statLabel: 'Reconciliation Lag',
      statValue: '4-7 Days',
      badge: 'Disputed Claims'
    },
    {
      id: 'disconnected-banks',
      title: 'Disconnected Banking Portals',
      subtitle: 'Fragmented accounts & manual token logins',
      description: 'Logging into 3 or 4 separate banking portals daily just to calculate net business cash. No single screen shows true consolidated treasury position.',
      icon: Landmark,
      codeSnippet: 'Portal A (MBL) ≠ Portal B (HBL)',
      statLabel: 'Visibility Gap',
      statValue: 'Zero Real-Time',
      badge: 'Siloed Cash'
    },
    {
      id: 'manual-reconciliation',
      title: 'Month-End Reconciliation Scramble',
      subtitle: 'Painful line-by-line manual tallying',
      description: 'Reconciling bank statements against sales invoices at the end of every month. By the time discrepancies are found, cash flow damage has already occurred.',
      icon: Layers,
      codeSnippet: 'Unallocated deposit: PKR 240,000 (?)',
      statLabel: 'Reporting Delay',
      statValue: '18 Days',
      badge: 'Blind Decisions'
    }
  ];

  const comparisonRows = [
    {
      dimension: 'Weekly Time Spent on Finance Ops',
      traditional: '12 – 16 Hours (manual data entry & bank checking)',
      bizflow: '15 Minutes (reviewing AI-prepared action cards)'
    },
    {
      dimension: 'Invoice Ingestion & OCR',
      traditional: 'Typing lines from physical paper or PDFs into Excel',
      bizflow: 'Multi-modal instant parser via WhatsApp or photo upload'
    },
    {
      dimension: 'Bank Statement Reconciliation',
      traditional: 'Month-end manual marathon matching line by line',
      bizflow: 'Continuous real-time 3-way matching by AI agent'
    },
    {
      dimension: 'Cash Runway Visibility',
      traditional: 'Backward-looking guessing based on current bank balance',
      bizflow: 'Predictive 14-to-90 day forward simulation with alerts'
    },
    {
      dimension: 'Disbursement & Approvals',
      traditional: 'Scattered cheques, verbal approvals, unverified IBANs',
      bizflow: 'Pre-assembled payment workflows with owner OTP verification'
    }
  ];

  return (
    <section id="problem-solution" className="relative py-24 lg:py-32 bg-[#090C14] border-t border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            The SME Financial Friction
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            SMEs don't need more spreadsheets.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-white to-brand-cyan">
              They need financial intelligence.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Most growing businesses run on fragmented tools and manual heroics. Without an intelligent autonomous layer, financial operations become an exhausting bottleneck.
          </p>

          {/* Toggle between Grid Cards view and Operational Comparison */}
          <div className="pt-2 flex items-center justify-center">
            <div className="p-1 rounded-full bg-white/[0.04] border border-white/[0.08] inline-flex gap-1 text-xs font-mono">
              <button
                onClick={() => setViewMode('friction')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  viewMode === 'friction'
                    ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Five Core Friction Points
              </button>
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  viewMode === 'comparison'
                    ? 'bg-brand-cyan/20 text-brand-cyan font-bold border border-brand-cyan/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Traditional vs BizFlow AI
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'friction' ? (
          /* 5 Problem Cards Grid */
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {problems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`relative rounded-2xl bg-[#0D121F]/80 border border-white/[0.08] hover:border-rose-500/30 p-6 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(244,63,94,0.15)] group flex flex-col justify-between ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400/90 border border-rose-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="py-5 space-y-2.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      {item.subtitle}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Fictional micro-code or error state badge */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] font-mono text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="text-rose-400/80 truncate">{item.codeSnippet}</span>
                      <Ban className="w-3.5 h-3.5 text-rose-500/70 shrink-0" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.statLabel}:
                      </span>
                      <span className="font-mono font-bold text-rose-400">
                        {item.statValue}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Operational Comparison View */
          <div className="mt-16 rounded-3xl bg-[#0D121F]/90 border border-white/[0.1] p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-lg font-bold text-white">Direct Operational Comparison</h3>
              </div>
              <span className="text-xs font-mono text-brand-cyan">Modern SME Architecture</span>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {comparisonRows.map((row, i) => (
                <div key={i} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4 font-semibold text-white text-sm">
                    {row.dimension}
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-rose-300/80 font-mono flex items-start gap-2 bg-rose-500/[0.04] p-3 rounded-xl border border-rose-500/10">
                    <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-emerald-300 font-mono flex items-start gap-2 bg-emerald-500/[0.04] p-3 rounded-xl border border-emerald-500/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.bizflow}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Bottom Banner: The Old Way vs The BizFlow AI Way */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-rose-950/20 via-black to-brand-cyan/10 border border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span>Replace manual scrambling with continuous intelligence</span>
            </h4>
            <p className="text-sm text-slate-400 max-w-xl">
              BizFlow AI connects into your existing workflow without changing how you communicate with clients or vendors.
            </p>
          </div>

          <a
            href="#solution"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.15] text-white transition-all flex items-center gap-2 group whitespace-nowrap"
          >
            <span>See The BizFlow Architecture</span>
            <ArrowRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
