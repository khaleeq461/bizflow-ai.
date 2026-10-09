import React, { useState } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertCircle, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Info, 
  Check, 
  Send, 
  Cpu, 
  X, 
  AlertTriangle, 
  Copy, 
  Eye, 
  CreditCard,
  RefreshCw,
  Search,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { 
  DEMO_AGENTS, 
  DEMO_RECONCILIATION, 
  DEMO_RECEIVABLES, 
  DEMO_CASHFLOW_7DAYS, 
  DEMO_CASHFLOW_14DAYS, 
  DEMO_CASHFLOW_30DAYS, 
  DEMO_COMMAND_RESPONSES,
  type DemoAgentDetail,
  type DemoReceivableInvoice,
  type DemoReconciliationItem
} from '../data/demoData';

interface ProductDemoProps {
  onBackToWebsite: () => void;
  onOpenEarlyAccess: () => void;
}

export const ProductDemo: React.FC<ProductDemoProps> = ({
  onBackToWebsite,
  onOpenEarlyAccess
}) => {
  // Cashflow timeline toggle (7d / 14d / 30d)
  const [cashFlowRange, setCashFlowRange] = useState<'7' | '14' | '30'>('14');
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);

  // Active selected Agent modal
  const [selectedAgent, setSelectedAgent] = useState<DemoAgentDetail | null>(null);

  // Active investigate reconciliation item modal
  const [investigatingItem, setInvestigatingItem] = useState<DemoReconciliationItem | null>(null);
  const [reconciledMismatches, setReconciledMismatches] = useState<Record<string, boolean>>({});

  // Active reminder message popup
  const [activeReminderInvoice, setActiveReminderInvoice] = useState<DemoReceivableInvoice | null>(null);
  const [copiedReminder, setCopiedReminder] = useState<boolean>(false);

  // Payment workflow human-in-the-loop state
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'reviewing' | 'approved' | 'rejected'>('pending');

  // Dismissed insights list
  const [dismissedInsights, setDismissedInsights] = useState<string[]>([]);
  const [activeInsightModal, setActiveInsightModal] = useState<{ title: string; detail: string } | null>(null);

  // AI Command Bar state
  const [commandPrompt, setCommandPrompt] = useState<string>('');
  const [commandResponse, setCommandResponse] = useState<{ summary: string; bullets: string[]; actionHint: string } | null>(null);
  const [isCommandLoading, setIsCommandLoading] = useState<boolean>(false);

  // Active cash flow dataset
  const activeCashFlowData = 
    cashFlowRange === '7' ? DEMO_CASHFLOW_7DAYS :
    cashFlowRange === '14' ? DEMO_CASHFLOW_14DAYS : DEMO_CASHFLOW_30DAYS;

  // Command prompt handler
  const handleSelectPrompt = (prompt: string) => {
    setCommandPrompt(prompt);
    setIsCommandLoading(true);
    setCommandResponse(null);
    setTimeout(() => {
      setIsCommandLoading(false);
      setCommandResponse(DEMO_COMMAND_RESPONSES[prompt] || {
        summary: 'BizFlow AI synthesized financial data across all 6 agents.',
        bullets: ['Verified multi-bank balance consistency.', 'Re-checked upcoming accounts payable maturities.'],
        actionHint: 'Status: Healthy working capital.'
      });
    }, 600);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandPrompt.trim()) return;
    handleSelectPrompt(commandPrompt);
  };

  const handleCopyReminder = () => {
    if (activeReminderInvoice) {
      navigator.clipboard?.writeText(activeReminderInvoice.whatsappMessage);
      setCopiedReminder(true);
      setTimeout(() => setCopiedReminder(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {/* Top Demo Workspace Header Ribbon */}
      <header className="sticky top-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToWebsite}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono group"
              title="Return to Marketing Website"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-brand-cyan" />
              <span>Back to Website</span>
            </button>

            <div className="h-5 w-[1px] bg-white/[0.1] hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-slate-950 font-black text-sm">
                AT
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-white tracking-tight">Ahmed Traders</h1>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 font-semibold animate-pulse">
                    Demo Workspace
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  B2B Distribution & Wholesale • Lahore, PK • Account #PK90-MEZN-881923
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>6 Agents Online • Continuous Sync</span>
            </div>

            <button
              onClick={onOpenEarlyAccess}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all font-sans"
            >
              Request Early Access
            </button>
          </div>

        </div>
      </header>

      {/* Main Demo Workspace Body */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* TOP METRICS RIBBON */}
        <section aria-label="Top Financial Metrics">
          <div className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/[0.08]">
              
              {/* Metric 1: Available Cash */}
              <div className="p-5 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Available Cash</span>
                  <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight pt-1">
                  PKR 1.24M
                </div>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+8.4% vs trailing 30d</span>
                </div>
              </div>

              {/* Metric 2: Receivables */}
              <div className="p-5 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Receivables</span>
                  <ArrowDownRight className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight pt-1">
                  PKR 380K
                </div>
                <div className="text-[11px] text-rose-400 font-mono">
                  3 overdue invoices
                </div>
              </div>

              {/* Metric 3: Payables */}
              <div className="p-5 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Payables</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight pt-1">
                  PKR 290K
                </div>
                <div className="text-[11px] text-amber-400 font-mono">
                  2 supplier payouts due
                </div>
              </div>

              {/* Metric 4: 14-Day Forecast */}
              <div className="p-5 space-y-1 bg-brand-cyan/[0.03]">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>14-Day Forecast</span>
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan font-mono tracking-tight pt-1">
                  PKR 720K
                </div>
                <div className="text-[11px] text-brand-cyan font-mono">
                  Safe liquidity runway
                </div>
              </div>

              {/* Metric 5: AI Risk */}
              <div className="p-5 space-y-1 col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>AI Risk</span>
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight pt-1 flex items-center gap-2">
                  <span>Medium</span>
                  <span className="text-xs font-normal text-amber-400/90 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    Monitored
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Day 11 dip flagged
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: AI COMMAND BAR (Interactive query console at top for quick discovery) */}
        <section aria-label="AI Command Interface" className="rounded-2xl bg-gradient-to-r from-[#0F1424] via-[#0E1322] to-[#0A0E18] border border-brand-cyan/35 p-5 sm:p-6 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-bold text-white tracking-tight">AI Financial Command Bar</h2>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Interactive Natural Language Financial Query Engine
            </span>
          </div>

          {/* Search Form */}
          <form onSubmit={handleCustomSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={commandPrompt}
              onChange={(e) => setCommandPrompt(e.target.value)}
              placeholder="Ask BizFlow anything about your finances... (e.g. Why will my cash balance decrease next week?)"
              className="w-full pl-11 pr-24 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-brand-cyan text-slate-950 font-semibold text-xs hover:bg-white transition-colors"
            >
              Ask AI
            </button>
          </form>

          {/* 4 Clickable Example Prompts */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono text-slate-400 uppercase">
              Click to test sample prompts:
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Why will my cash balance decrease next week?',
                'Which invoices should I collect first?',
                'What payments are due this week?',
                'What is my projected cash position in 14 days?'
              ].map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectPrompt(prompt)}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-brand-cyan transition-all text-left"
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Intelligent Response Box */}
          {isCommandLoading && (
            <div className="p-4 rounded-xl bg-black/50 border border-brand-cyan/30 text-xs font-mono text-brand-cyan flex items-center gap-2 animate-pulse">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>BizFlow Intelligence synthesising 14-day cash flow ledger & invoice streams...</span>
            </div>
          )}

          {commandResponse && !isCommandLoading && (
            <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-brand-cyan/40 space-y-2.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-brand-cyan font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                  BizFlow Intelligence Response
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Deterministic Model: Ahmed Traders Workspace</span>
              </div>

              <p className="text-sm text-white font-medium">
                {commandResponse.summary}
              </p>

              <ul className="space-y-1 text-xs text-slate-300">
                {commandResponse.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-cyan font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
                &gt; {commandResponse.actionHint}
              </div>
            </div>
          )}
        </section>

        {/* 2-COLUMN MAIN CONTENT: Left Column (Cash Flow, Reconciliation, Receivables, Payments) | Right Column (Insights & AI Agents) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT 8 COLUMNS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SECTION 1 — CASH FLOW */}
            <section className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Section 1: Cash Flow & Liquidity Projection</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Historical cash, expected inflows, expected outflows, and projected balances
                  </p>
                </div>

                {/* 7d / 14d / 30d Toggle */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-black/40 border border-white/[0.08] text-xs font-mono">
                  {(['7', '14', '30'] as const).map((range) => (
                    <button
                      key={range}
                      onClick={() => setCashFlowRange(range)}
                      className={`px-3 py-1 rounded transition-all ${
                        cashFlowRange === range
                          ? 'bg-brand-cyan text-slate-950 font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {range} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded-sm bg-brand-cyan"></span>
                  Projected Balance
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500"></span>
                  Expected Inflows
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
                  Expected Outflows
                </span>
              </div>

              {/* Visual Interactive Cash Flow Trajectory SVG */}
              <div className="relative h-60 w-full pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="demoChartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="140" x2="600" y2="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                  {/* Threshold safety line */}
                  <line x1="0" y1="150" x2="600" y2="150" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <text x="8" y="145" fill="#F59E0B" fontSize="9" fontFamily="monospace">
                    Minimum Safe Buffer: PKR 500K
                  </text>

                  {/* Simulated Line Plot with Area */}
                  {cashFlowRange === '7' ? (
                    <>
                      <path
                        d="M 0,110 Q 100,70 200,60 T 400,65 T 600,75 L 600,200 L 0,200 Z"
                        fill="url(#demoChartGradient)"
                      />
                      <path
                        d="M 0,110 Q 100,70 200,60 T 400,65 T 600,75"
                        fill="none"
                        stroke="#00F0FF"
                        strokeWidth="3"
                      />
                    </>
                  ) : cashFlowRange === '14' ? (
                    <>
                      <path
                        d="M 0,110 Q 150,70 280,60 C 380,80 440,130 500,120 T 600,140 L 600,200 L 0,200 Z"
                        fill="url(#demoChartGradient)"
                      />
                      <path
                        d="M 0,110 Q 150,70 280,60 C 380,80 440,130 500,120 T 600,140"
                        fill="none"
                        stroke="#00F0FF"
                        strokeWidth="3"
                      />
                      {/* Day 11 Dip Highlight */}
                      <circle cx="480" cy="120" r="4.5" fill="#F59E0B" stroke="#000" strokeWidth="2" />
                      <text x="440" y="105" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        Day 11 Dip (Payout)
                      </text>
                    </>
                  ) : (
                    <>
                      <path
                        d="M 0,110 Q 150,60 300,120 T 450,110 T 600,100 L 600,200 L 0,200 Z"
                        fill="url(#demoChartGradient)"
                      />
                      <path
                        d="M 0,110 Q 150,60 300,120 T 450,110 T 600,100"
                        fill="none"
                        stroke="#00F0FF"
                        strokeWidth="3"
                      />
                    </>
                  )}

                  {/* Today Marker */}
                  <line x1="10" y1="0" x2="10" y2="200" stroke="rgba(255,255,255,0.3)" strokeDasharray="2 2" />
                  <circle cx="10" cy="110" r="5" fill="#00F0FF" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="20" y="105" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    Today: PKR 1.24M
                  </text>
                </svg>
              </div>

              {/* Day-by-Day Inspection Cards Slider */}
              <div className="pt-2 border-t border-white/[0.06] space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase">
                  Timeline Data Points (Hover to inspect):
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {activeCashFlowData.slice(0, 7).map((pt, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredPointIndex(i)}
                      className={`p-2 rounded-lg border text-[11px] font-mono transition-all cursor-pointer ${
                        hoveredPointIndex === i
                          ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan'
                          : 'bg-black/30 border-white/[0.05] text-slate-300 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="text-[10px] text-slate-400 font-bold truncate">{pt.dayLabel}</div>
                      <div className="text-white font-semibold pt-0.5">PKR {(pt.projectedBalance / 1000).toFixed(0)}K</div>
                      <div className="text-[9px] text-emerald-400">+{pt.expectedInflows / 1000}K in</div>
                      <div className="text-[9px] text-amber-400">-{pt.expectedOutflows / 1000}K out</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4 — TRANSACTION RECONCILIATION */}
            <section className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-base font-bold text-white">Section 4: Transaction Reconciliation</h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Automated multi-way matching of bank clearing feeds against invoices & receipts
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  Continuous 3-Way Match
                </span>
              </div>

              <div className="space-y-3">
                {DEMO_RECONCILIATION.map((item) => {
                  const isResolved = reconciledMismatches[item.id];
                  const currentStatus = isResolved ? 'Reconciled' : item.status;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{item.counterparty}</span>
                          <span className="text-[10px] text-slate-400">{item.bankDate}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-slate-300">
                          <span>Bank Debited: <strong className="text-white">PKR {item.bankAmount.toLocaleString()}</strong></span>
                          <span>•</span>
                          <span>Matched: <strong className="text-brand-cyan">{item.matchedInvoiceNo}</strong> (PKR {item.invoiceAmount.toLocaleString()})</span>
                        </div>
                        {item.variance && !isResolved && (
                          <div className="text-[11px] text-rose-400 pt-0.5">
                            Variance: PKR {item.variance.toLocaleString()} difference detected
                          </div>
                        )}
                        {isResolved && (
                          <div className="text-[11px] text-emerald-400 pt-0.5">
                            Audit Note: 3% provincial withholding tax variance recorded and journalized.
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold border ${
                            currentStatus === 'Reconciled'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}
                        >
                          {currentStatus}
                        </span>

                        {item.status === 'Mismatch Detected' && !isResolved && (
                          <button
                            onClick={() => setInvestigatingItem(item)}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-all flex items-center gap-1.5"
                          >
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Investigate</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 5 — RECEIVABLES */}
            <section className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-base font-bold text-white">Section 5: Receivables & Collection Actions</h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Aging debtor tracking with automated polite collection drafts
                  </p>
                </div>
                <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20">
                  Total Receivables: PKR 380K
                </span>
              </div>

              {/* Invoices Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/[0.08] text-slate-400 text-[11px] uppercase">
                      <th className="py-2.5 px-3">Customer</th>
                      <th className="py-2.5 px-3">Invoice</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Due Date</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {DEMO_RECEIVABLES.map((inv) => (
                      <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3 font-semibold text-white">
                          {inv.customer}
                        </td>
                        <td className="py-3 px-3 text-slate-400">
                          {inv.invoiceNumber}
                        </td>
                        <td className="py-3 px-3 font-bold text-white">
                          PKR {inv.amountPKR.toLocaleString()}
                        </td>
                        <td className="py-3 px-3 text-slate-300">
                          {inv.dueDate}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              inv.status === 'Overdue'
                                ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                : inv.status === 'Due Soon'
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            }`}
                          >
                            {inv.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          {inv.status !== 'Paid' ? (
                            <button
                              onClick={() => setActiveReminderInvoice(inv)}
                              className="px-2.5 py-1 rounded-md text-[11px] bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/30 transition-colors inline-flex items-center gap-1"
                            >
                              <Send className="w-3 h-3" />
                              <span>Prepare Reminder</span>
                            </button>
                          ) : (
                            <span className="text-slate-400 text-[10px]">Archived</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6 — PAYMENT WORKFLOW (Human-in-the-Loop) */}
            <section className="rounded-2xl bg-gradient-to-br from-[#12182B] via-[#0D1220] to-[#0A0E18] border border-amber-500/35 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Section 6: Guarded Payment Workflow</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Demonstrating the principle of Human-in-the-Loop governance
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Human Approval Required</span>
                </div>
              </div>

              {/* Crucial Trust Statement Notice */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-300 flex items-start gap-3">
                <Info className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Core Safety Guarantee:</strong> BizFlow AI does <span className="text-amber-400 font-bold uppercase underline">NOT</span> autonomously move money or debit bank accounts without explicit business owner authorization. Every disbursement must be reviewed and signed.
                </p>
              </div>

              {/* Payment Recommendation Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
                      Payment Agent Workflow Prepared
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1.5">
                      Supplier payment of PKR 75,000 is due tomorrow.
                    </h3>
                    <p className="text-xs text-slate-300">
                      Beneficiary: <strong>ABC Supplies Ltd</strong> • Meezan Bank IBAN #PK78 MEZN 0002 9182 4819 • Purchase Order #PO-4821 matched.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white font-mono">PKR 75,000</div>
                    <span className="text-[10px] text-amber-400 font-mono">Due Oct 09</span>
                  </div>
                </div>

                {/* State-dependent Action Buttons */}
                {paymentStatus === 'pending' && (
                  <div className="pt-2 flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => setPaymentStatus('reviewing')}
                      className="px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Review Payment</span>
                    </button>

                    <button
                      onClick={() => setPaymentStatus('approved')}
                      className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-brand-cyan hover:bg-white text-slate-950 transition-all shadow-md shadow-brand-cyan/20 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Approve (Owner Sign-off)</span>
                    </button>

                    <button
                      onClick={() => setPaymentStatus('rejected')}
                      className="px-3.5 py-2 rounded-lg text-xs font-mono text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                )}

                {paymentStatus === 'reviewing' && (
                  <div className="p-3 rounded-lg bg-black/60 border border-brand-cyan/30 text-xs font-mono space-y-2 animate-in fade-in">
                    <div className="text-brand-cyan font-bold flex justify-between">
                      <span>DOCKET VERIFICATION: ABC SUPPLIES #PO-4821</span>
                      <button onClick={() => setPaymentStatus('pending')} className="text-slate-400 hover:text-white">✕</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div>Vendor NTN: <strong>7281920-3 (Active Active)</strong></div>
                      <div>Sales Tax GST: <strong>18% Verified</strong></div>
                      <div>Delivery Receipt: <strong>GRN-902 Signed</strong></div>
                      <div>Cash Impact: <strong>Maintains PKR 1.2M runway</strong></div>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <button
                        onClick={() => setPaymentStatus('approved')}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-cyan text-slate-950"
                      >
                        Confirm & Authorize
                      </button>
                      <button
                        onClick={() => setPaymentStatus('pending')}
                        className="px-3 py-1.5 rounded-lg text-xs text-slate-300 bg-white/[0.05]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {paymentStatus === 'approved' && (
                  <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-between text-xs font-mono animate-in fade-in">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Approved by Business Owner • Authorization Hash #0x92FB-2026 Generated
                    </span>
                    <button
                      onClick={() => setPaymentStatus('pending')}
                      className="text-[10px] text-slate-400 underline hover:text-white"
                    >
                      Reset State
                    </button>
                  </div>
                )}

                {paymentStatus === 'rejected' && (
                  <div className="p-3 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-between text-xs font-mono animate-in fade-in">
                    <span>Payment workflow cancelled by owner. Rescheduled for vendor inquiry.</span>
                    <button
                      onClick={() => setPaymentStatus('pending')}
                      className="text-[10px] text-slate-400 underline hover:text-white"
                    >
                      Undo
                    </button>
                  </div>
                )}
              </div>
            </section>

          </div>

          {/* RIGHT 4 COLUMNS: SECTION 2 (AI Insights) & SECTION 3 (AI Agents Center) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* SECTION 2 — AI FINANCIAL INSIGHTS ("BizFlow Intelligence") */}
            <section className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-cyan" />
                  <h2 className="text-base font-bold text-white">BizFlow Intelligence</h2>
                </div>
                <span className="text-[10px] font-mono text-brand-cyan">Active Insights</span>
              </div>

              <div className="space-y-3">
                {/* Insight 1 */}
                {!dismissedInsights.includes('ins-1') && (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5 text-xs">
                    <p className="text-slate-200 font-medium leading-relaxed">
                      "Your projected cash position may decline over the next 11 days due to scheduled supplier payments."
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveInsightModal({
                            title: 'Projected Cash Decline (Day 11)',
                            detail: 'Apex Packaging raw materials payout of PKR 145,000 on Oct 11 will reduce available buffer to PKR 480K unless uncollected invoices are accelerated.'
                          })}
                          className="text-[11px] font-mono text-brand-cyan hover:underline"
                        >
                          View
                        </button>
                        <span className="text-slate-500">•</span>
                        <button
                          onClick={() => setCashFlowRange('14')}
                          className="text-[11px] font-mono text-slate-300 hover:text-white"
                        >
                          Review
                        </button>
                      </div>
                      <button
                        onClick={() => setDismissedInsights([...dismissedInsights, 'ins-1'])}
                        className="text-[11px] font-mono text-slate-400 hover:text-rose-400"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}

                {/* Insight 2 */}
                {!dismissedInsights.includes('ins-2') && (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5 text-xs">
                    <p className="text-slate-200 font-medium leading-relaxed">
                      "3 invoices worth PKR 185,000 are overdue."
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveInsightModal({
                            title: 'Overdue Invoices Analysis',
                            detail: 'Indus Logistics Hub (PKR 110K, 8d overdue) and Beacon Retail (PKR 75K, 5d overdue) represent 48% of total outstanding receivables.'
                          })}
                          className="text-[11px] font-mono text-brand-cyan hover:underline"
                        >
                          View
                        </button>
                        <span className="text-slate-500">•</span>
                        <button
                          onClick={() => setActiveReminderInvoice(DEMO_RECEIVABLES[0])}
                          className="text-[11px] font-mono text-slate-300 hover:text-white"
                        >
                          Review
                        </button>
                      </div>
                      <button
                        onClick={() => setDismissedInsights([...dismissedInsights, 'ins-2'])}
                        className="text-[11px] font-mono text-slate-400 hover:text-rose-400"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}

                {/* Insight 3 */}
                {!dismissedInsights.includes('ins-3') && (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5 text-xs">
                    <p className="text-slate-200 font-medium leading-relaxed">
                      "Collecting two overdue invoices could improve your projected cash position by approximately 26%."
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveInsightModal({
                            title: 'Runway Improvement Opportunity',
                            detail: 'Recovering PKR 185K before Oct 12 boosts your Day 14 safety buffer from PKR 720K to PKR 905K (+26%).'
                          })}
                          className="text-[11px] font-mono text-brand-cyan hover:underline"
                        >
                          View
                        </button>
                        <span className="text-slate-500">•</span>
                        <button
                          onClick={() => setActiveReminderInvoice(DEMO_RECEIVABLES[0])}
                          className="text-[11px] font-mono text-slate-300 hover:text-white"
                        >
                          Review
                        </button>
                      </div>
                      <button
                        onClick={() => setDismissedInsights([...dismissedInsights, 'ins-3'])}
                        className="text-[11px] font-mono text-slate-400 hover:text-rose-400"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}

                {dismissedInsights.length > 0 && (
                  <button
                    onClick={() => setDismissedInsights([])}
                    className="w-full text-center py-1 text-[11px] font-mono text-slate-400 hover:text-white underline"
                  >
                    Restore Dismissed Insights ({dismissedInsights.length})
                  </button>
                )}
              </div>
            </section>

            {/* SECTION 3 — AI AGENTS CENTER */}
            <section className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                  <h2 className="text-base font-bold text-white">Section 3: AI Agents Center</h2>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">All Agents Running</span>
              </div>

              <p className="text-xs text-slate-400 font-mono">
                Click any agent to inspect what it monitors, what it detected, and recommended actions:
              </p>

              <div className="space-y-2">
                {DEMO_AGENTS.map((agent) => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-brand-cyan/40 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {agent.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                        {agent.tagline}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${agent.statusColor}`}>
                        {agent.status}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

      </main>

      {/* MODAL 1: AI Agent Deep-Dive Panel */}
      {selectedAgent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedAgent(null)}
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#0D1220] border border-brand-cyan/40 p-6 sm:p-7 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan">
                  Agent Telemetry Inspector
                </span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{selectedAgent.name}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${selectedAgent.statusColor}`}>
                    {selectedAgent.status}
                  </span>
                </h3>
              </div>
              <button onClick={() => setSelectedAgent(null)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              {/* What it monitors */}
              <div className="space-y-1.5">
                <div className="text-slate-400 font-bold uppercase text-[11px] flex items-center gap-1.5 text-brand-cyan">
                  <Eye className="w-3.5 h-3.5" />
                  What It Monitors:
                </div>
                <ul className="space-y-1 text-slate-300 pl-4 list-disc">
                  {selectedAgent.monitors.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* What it detected */}
              <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-amber-400 font-bold uppercase text-[11px] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  What It Detected (Ahmed Traders Workspace):
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {selectedAgent.detected}
                </p>
              </div>

              {/* What action it recommends */}
              <div className="space-y-1.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-emerald-400 font-bold uppercase text-[11px] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Recommended Action:
                </div>
                <p className="text-emerald-300 leading-relaxed">
                  {selectedAgent.recommendedAction}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.06]">
              <span>Last Execution: {selectedAgent.lastRun}</span>
              <button
                onClick={() => setSelectedAgent(null)}
                className="px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Investigate Mismatch Panel */}
      {investigatingItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setInvestigatingItem(null)}
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#0D1220] border border-rose-500/40 p-6 sm:p-7 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Reconciliation Variance Investigation</span>
              </div>
              <button onClick={() => setInvestigatingItem(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Counterparty:</span>
                  <strong className="text-white">{investigatingItem.counterparty}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Bank Debit Record:</span>
                  <strong className="text-white">PKR {investigatingItem.bankAmount.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Invoice Reference:</span>
                  <strong className="text-brand-cyan">{investigatingItem.matchedInvoiceNo} (PKR {investigatingItem.invoiceAmount.toLocaleString()})</strong>
                </div>
                <div className="flex justify-between pt-1 border-t border-white/[0.08] text-rose-400 font-bold">
                  <span>Discrepancy:</span>
                  <span>PKR {investigatingItem.variance?.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-slate-300">
                <strong className="text-white block pb-1">AI Root Cause Identification:</strong>
                {investigatingItem.varianceReason}
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setReconciledMismatches(prev => ({ ...prev, [investigatingItem.id]: true }));
                  setInvestigatingItem(null);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold text-xs font-mono"
              >
                Accept 3% Tax Withholding & Reconcile
              </button>
              <button
                onClick={() => setInvestigatingItem(null)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.05] text-slate-300 text-xs font-mono"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Prepared Reminder WhatsApp Message */}
      {activeReminderInvoice && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveReminderInvoice(null)}
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#0D1220] border border-brand-cyan/40 p-6 sm:p-7 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Generated Collection Notice Draft</span>
              </div>
              <button onClick={() => setActiveReminderInvoice(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Recipient: <strong className="text-white">{activeReminderInvoice.customer}</strong></span>
                <span>Amount: <strong className="text-white">PKR {activeReminderInvoice.amountPKR.toLocaleString()}</strong></span>
              </div>

              <div className="p-4 rounded-xl bg-[#090D18] border border-white/[0.1] text-slate-200 leading-relaxed whitespace-pre-wrap font-sans text-xs">
                {activeReminderInvoice.whatsappMessage}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={handleCopyReminder}
                className="w-full py-2.5 rounded-xl bg-brand-cyan hover:bg-white text-slate-950 font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2"
              >
                {copiedReminder ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedReminder ? 'Copied to Clipboard!' : 'Copy WhatsApp Message'}</span>
              </button>

              <button
                onClick={() => setActiveReminderInvoice(null)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.05] text-slate-300 text-xs font-mono"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: Insight Detail Modal */}
      {activeInsightModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveInsightModal(null)}
        >
          <div 
            className="relative w-full max-w-md rounded-2xl bg-[#0D1220] border border-brand-cyan/40 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <h3 className="text-sm font-bold text-white">{activeInsightModal.title}</h3>
              <button onClick={() => setActiveInsightModal(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              {activeInsightModal.detail}
            </p>

            <button
              onClick={() => setActiveInsightModal(null)}
              className="w-full py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs font-mono text-white"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
