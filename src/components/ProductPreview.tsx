import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Send, 
  Sparkles, 
  Info, 
  Check, 
  Sliders, 
  FileCheck, 
  Calendar, 
  ChevronDown 
} from 'lucide-react';
import { RECENT_TRANSACTIONS, OVERDUE_INVOICES, UPCOMING_OBLIGATIONS } from '../data/mockData';

export const ProductPreview: React.FC = () => {
  const [currency, setCurrency] = useState<'PKR' | 'USD' | 'AED'>('PKR');
  const [activeTab, setActiveTab] = useState<'all' | 'inflow' | 'outflow' | 'flagged'>('all');
  const [paymentApproved, setPaymentApproved] = useState(false);
  const [sentReminders, setSentReminders] = useState<Record<string, boolean>>({});
  const [activeReminderPreview, setActiveReminderPreview] = useState<string | null>(null);
  const [stressFactor, setStressFactor] = useState<number>(0);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>('Today: PKR 1.24M');
  const [expandedRecId, setExpandedRecId] = useState<string | null>('rec-1');

  // Currency multiplier
  const getFormattedValue = (pkrAmount: number) => {
    const adjustedAmount = pkrAmount;
    if (currency === 'USD') {
      return `$${Math.round(adjustedAmount / 278).toLocaleString()}`;
    }
    if (currency === 'AED') {
      return `AED ${Math.round(adjustedAmount / 75.8).toLocaleString()}`;
    }
    if (adjustedAmount >= 1000000) {
      return `PKR ${(adjustedAmount / 1000000).toFixed(2)}M`;
    }
    return `PKR ${(adjustedAmount / 1000).toFixed(0)}K`;
  };

  const currentForecastPKR = 720000 + stressFactor;

  const handleApprovePayment = () => {
    setPaymentApproved(true);
  };

  const handleSendReminder = (invoiceId: string) => {
    setSentReminders(prev => ({ ...prev, [invoiceId]: true }));
    setActiveReminderPreview(invoiceId);
  };

  const filteredTransactions = RECENT_TRANSACTIONS.filter((tx) => {
    if (activeTab === 'inflow') return tx.type === 'inflow';
    if (activeTab === 'outflow') return tx.type === 'outflow';
    if (activeTab === 'flagged') return tx.status === 'flagged';
    return true;
  });

  return (
    <section id="product-preview" className="relative py-24 lg:py-32 bg-[#07090E] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-cyan/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Product Experience
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            Built like high-end financial infrastructure.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              Engineered for everyday SMEs.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore a simulated live view of BizFlow AI orchestrating cash balances, predicting runway, and preparing approvals for a growing enterprise.
          </p>

          {/* Interactive controls: Currency Switcher & Demo Notice */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono">
              <span className="px-3 py-1 text-slate-400">Display Currency:</span>
              {(['PKR', 'USD', 'AED'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-3 py-1 rounded-full transition-all ${
                    currency === curr
                      ? 'bg-brand-cyan text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
              <Info className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Simulated SME Demo Environment</span>
            </div>
          </div>
        </div>

        {/* Realistic BizFlow SME Dashboard Canvas */}
        <div className="mt-14 relative rounded-3xl bg-[#0B0F1A]/95 border border-white/[0.12] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden">
          
          {/* Dashboard Header Bar */}
          <div className="px-6 py-4 border-b border-white/[0.08] bg-[#0E1322]/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-slate-950 font-black text-sm">
                B
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-tight">Indus Apparel & Retail</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    SME Pro Workspace
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Account #PK90-MEZN-0019284 • Live Sync
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                <span>Agents Active (6/6)</span>
              </div>
              <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-3 py-1.5 rounded-lg border border-brand-cyan/20">
                FY 2026-Q4
              </span>
            </div>
          </div>

          {/* Core Financial Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/[0.08] border-b border-white/[0.08] bg-black/20">
            
            {/* Metric 1: Cash Position */}
            <div className="p-5 sm:p-6 space-y-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Cash Position</span>
                <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight pt-1">
                {currency === 'PKR' ? 'PKR 1.24M' : getFormattedValue(1240000)}
              </div>
              <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>+8.4% vs last 30d</span>
              </div>
            </div>

            {/* Metric 2: Receivables */}
            <div className="p-5 sm:p-6 space-y-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Receivables</span>
                <ArrowDownRight className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight pt-1">
                {currency === 'PKR' ? 'PKR 380K' : getFormattedValue(380000)}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                3 invoices awaiting settlement
              </div>
            </div>

            {/* Metric 3: Payables */}
            <div className="p-5 sm:p-6 space-y-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Payables</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight pt-1">
                {currency === 'PKR' ? 'PKR 290K' : getFormattedValue(290000)}
              </div>
              <div className="text-[11px] text-amber-400 font-mono">
                2 supplier batches scheduled
              </div>
            </div>

            {/* Metric 4: 14-Day Forecast */}
            <div className="p-5 sm:p-6 space-y-1 bg-brand-cyan/[0.03]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>14-Day Forecast</span>
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan font-mono tracking-tight pt-1">
                {getFormattedValue(currentForecastPKR)}
              </div>
              <div className="text-[11px] text-brand-cyan font-mono">
                Safe liquidity runway
              </div>
            </div>

            {/* Metric 5: Risk Status */}
            <div className="p-5 sm:p-6 space-y-1 col-span-2 sm:col-span-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Risk Status</span>
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight pt-1 flex items-center gap-2">
                <span>Medium</span>
                <span className="text-xs font-normal text-amber-400/80 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  Monitored
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Day 11 outflow dip flagged
              </div>
            </div>

          </div>

          {/* Financial Alert Notification */}
          <div className="px-6 py-3.5 bg-gradient-to-r from-amber-950/30 via-[#14120B] to-transparent border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-slate-200">
                <strong className="text-amber-400 font-semibold font-mono">FINANCIAL ALERT:</strong> 14-Day liquidity dip projected on Day 11 due to Apex Packaging vendor settlement (PKR 145K). Receivables Agent recommends accelerating Indus Trading invoice.
              </p>
            </div>
            <span className="text-[11px] font-mono text-amber-400/80 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 whitespace-nowrap">
              Action Plan Prepared
            </span>
          </div>

          {/* Main Dashboard Layout */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 Columns: Predictive Cash Flow Chart & Transactions Table */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Cash Flow 14-Day Trajectory Area Chart Card */}
              <div className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>Cash Position & 14-Day Predictive Runway</span>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Rolling trajectory synthesized from bank clearing + expected receivables
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    {hoveredPoint && (
                      <span className="px-2.5 py-1 rounded bg-white/[0.06] text-slate-200 border border-white/[0.08]">
                        Focus: <strong className="text-brand-cyan">{hoveredPoint}</strong>
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                      Historical
                    </span>
                    <span className="flex items-center gap-1.5 text-brand-cyan">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse"></span>
                      AI Forecast
                    </span>
                  </div>
                </div>

                {/* SVG Area Chart */}
                <div className="relative h-52 sm:h-60 w-full pt-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.35" />
                        <stop offset="80%" stopColor="#0066FF" stopOpacity="0.04" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                    {/* Safety liquidity threshold line */}
                    <line x1="0" y1="140" x2="500" y2="140" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <text x="5" y="136" fill="#F59E0B" fontSize="9" fontFamily="monospace" opacity="0.8">
                      Minimum Safe Buffer: PKR 500K
                    </text>

                    {/* Chart Area Fill */}
                    <path
                      d="M 0,105 
                         C 50,95 80,120 120,80 
                         C 160,40 210,60 250,50 
                         C 290,40 330,85 380,100 
                         C 420,110 460,75 500,85 
                         L 500,180 L 0,180 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Main Trend Line */}
                    <path
                      d="M 0,105 
                         C 50,95 80,120 120,80 
                         C 160,40 210,60 250,50 
                         C 290,40 330,85 380,100 
                         C 420,110 460,75 500,85"
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="3"
                    />

                    {/* Today Marker */}
                    <line x1="250" y1="0" x2="250" y2="180" stroke="rgba(255,255,255,0.25)" strokeDasharray="2 2" />
                    <circle 
                      cx="250" 
                      cy="50" 
                      r="5" 
                      fill="#00F0FF" 
                      stroke="#FFFFFF" 
                      strokeWidth="2" 
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint('Today: PKR 1.24M')}
                    />
                    <text x="255" y="38" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      Today: PKR 1.24M
                    </text>

                    {/* Day 11 Dip Marker */}
                    <circle 
                      cx="380" 
                      cy="100" 
                      r="4" 
                      fill="#F59E0B" 
                      stroke="#000" 
                      strokeWidth="2"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint('Day 11 Outflow Dip: PKR 480K')}
                    />
                    <text x="360" y="118" fill="#F59E0B" fontSize="9" fontFamily="monospace">
                      Day 11 Dip
                    </text>

                    {/* Day 14 Forecast Result */}
                    <circle 
                      cx="500" 
                      cy="85" 
                      r="5" 
                      fill="#10B981" 
                      stroke="#FFFFFF" 
                      strokeWidth="2"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(`Day 14 Projected Buffer: ${getFormattedValue(currentForecastPKR)}`)}
                    />
                    <text x="390" y="70" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      Day 14: {getFormattedValue(currentForecastPKR)}
                    </text>
                  </svg>
                </div>

                {/* Scenario Stress Simulation Slider */}
                <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Sliders className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Runway Stress Simulation:</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="-200000"
                      max="200000"
                      step="50000"
                      value={stressFactor}
                      onChange={(e) => setStressFactor(Number(e.target.value))}
                      className="w-28 sm:w-36 accent-brand-cyan cursor-pointer"
                    />
                    <span className="text-brand-cyan min-w-[70px] text-right font-bold">
                      {stressFactor === 0 ? 'Baseline' : `${stressFactor > 0 ? '+' : ''}${stressFactor / 1000}K PKR`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>-7 Days</span>
                  <span>-3 Days</span>
                  <span className="text-white font-bold">Today</span>
                  <span>+4 Days</span>
                  <span className="text-amber-400 font-bold">+11 Days (Dip)</span>
                  <span className="text-brand-cyan font-bold">+14 Days</span>
                </div>
              </div>

              {/* Recent Transactions Module */}
              <div className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white">Recent Transactions & Reconciliation</h3>
                    <p className="text-xs text-slate-400 font-mono">Continuous matching by Reconciliation Agent</p>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-black/40 border border-white/[0.06] text-xs">
                    {(['all', 'inflow', 'outflow', 'flagged'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2.5 py-1 rounded capitalize font-mono text-[11px] transition-colors ${
                          activeTab === tab
                            ? 'bg-white/[0.1] text-white font-medium'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transactions Table */}
                <div className="space-y-2.5">
                  {filteredTransactions.map((tx) => {
                    const isPaymentApprovedMatch = paymentApproved && tx.id === 'tx-102';
                    const displayStatus = isPaymentApprovedMatch ? 'reconciled' : tx.status;

                    return (
                      <div
                        key={tx.id}
                        className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white text-sm">
                              {tx.counterparty}
                            </span>
                            <span className="font-mono text-[10px] text-slate-400">
                              {tx.reference}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                            <span className="text-brand-cyan">{tx.category}</span>
                            <span>•</span>
                            <span>{tx.agentNote}</span>
                          </p>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                          <div className="text-right">
                            <div
                              className={`font-mono font-bold text-sm ${
                                tx.type === 'inflow' ? 'text-emerald-400' : 'text-slate-200'
                              }`}
                            >
                              {tx.type === 'inflow' ? '+' : '-'} {getFormattedValue(tx.amountPKR)}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400">
                              {tx.date}
                            </div>
                          </div>

                          {/* Status Badge */}
                          <span
                            className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wide border ${
                              displayStatus === 'reconciled'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : displayStatus === 'matched'
                                ? 'bg-brand-blue/10 text-brand-cyan border-brand-blue/20'
                                : displayStatus === 'pending'
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                            }`}
                          >
                            {displayStatus}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: AI Recommendations + Upcoming Obligations + Overdue Invoices */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* AI Recommendations Card with Human Approval Action */}
              <div className="rounded-2xl bg-gradient-to-b from-[#11182B] to-[#0D1220] border border-brand-cyan/35 p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">AI Financial Recommendations</h4>
                      <div className="text-[10px] font-mono text-brand-cyan">Payment Agent & Risk Agent</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Human-in-the-Loop
                  </span>
                </div>

                {/* Workflow Card (Expandable) */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Workflow #AP-8849 Ready
                      </span>
                      <h5 className="text-sm font-bold text-white mt-2">
                        Apex Packaging Supplies
                      </h5>
                      <p className="text-xs text-slate-300 mt-1">
                        Disbursement prepared for raw materials invoice #AP-8849 ({getFormattedValue(145000)}). Matched with receiving slip #RS-202.
                      </p>
                    </div>
                  </div>

                  {/* Expandable Drilldown Toggle */}
                  <button
                    onClick={() => setExpandedRecId(expandedRecId === 'rec-1' ? null : 'rec-1')}
                    className="w-full text-left py-1 text-[11px] font-mono text-brand-cyan hover:underline flex items-center justify-between"
                  >
                    <span>{expandedRecId === 'rec-1' ? 'Hide Audit Verification' : 'Inspect Invoice & Tax Breakdown'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedRecId === 'rec-1' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedRecId === 'rec-1' && (
                    <div className="p-2.5 rounded-lg bg-white/[0.03] text-[11px] font-mono text-slate-400 space-y-1 animate-in fade-in">
                      <div className="flex justify-between">
                        <span>Beneficiary IBAN:</span>
                        <span className="text-white">PK78 MEZN 0002 9182 4819</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax Withholding:</span>
                        <span className="text-emerald-400">4.5% FBR Section 153 Checked</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Invoice Date:</span>
                        <span className="text-slate-300">Oct 04, 2026</span>
                      </div>
                    </div>
                  )}

                  {paymentApproved ? (
                    <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Approved by Owner • Auth #0x89F2
                      </span>
                      <span className="text-[10px]">Queued for IBFT</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleApprovePayment}
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 hover:opacity-95 transition-all shadow-md shadow-brand-cyan/20 flex items-center justify-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Approve Payout ({getFormattedValue(145000)})</span>
                    </button>
                  )}
                  <p className="text-[10px] text-slate-400 text-center font-mono">
                    Owner approval required. Funds are never moved without authentication.
                  </p>
                </div>

                {/* Additional recommendation pill */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />
                    Early Payment Discount Recommendation
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Paying Karachi Textiles 4 days early unlocks a 2% settlement discount (savings: PKR 8,400). Cash forecast permits this action.
                  </p>
                </div>
              </div>

              {/* Upcoming Obligations Module */}
              <div className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-cyan" />
                    <h4 className="text-sm font-bold text-white">Upcoming Obligations</h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Next 14 Days</span>
                </div>

                <div className="space-y-2.5">
                  {UPCOMING_OBLIGATIONS.map((ob) => (
                    <div
                      key={ob.id}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono"
                    >
                      <div className="space-y-0.5">
                        <div className="text-white font-semibold text-xs">{ob.title}</div>
                        <div className="text-[10px] text-slate-400">{ob.category} • {ob.dueDate}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{getFormattedValue(ob.amountPKR)}</div>
                        <span className={`text-[10px] ${
                          ob.status === 'action_required'
                            ? 'text-amber-400'
                            : 'text-slate-400'
                        }`}>
                          {ob.daysLeft} days left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overdue Invoices & Collection Reminders */}
              <div className="rounded-2xl bg-[#0D1220]/90 border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div>
                    <h4 className="text-sm font-bold text-white">Overdue Invoices & Collections</h4>
                    <div className="text-[10px] font-mono text-slate-400">Monitored by Receivables Agent</div>
                  </div>
                  <span className="text-[11px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    3 Overdue
                  </span>
                </div>

                <div className="space-y-3">
                  {OVERDUE_INVOICES.map((inv) => {
                    const isSent = sentReminders[inv.id];
                    return (
                      <div
                        key={inv.id}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-white text-xs">{inv.client}</span>
                            <div className="font-mono text-[10px] text-slate-400">{inv.invoiceNumber}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono font-bold text-white">{getFormattedValue(inv.amountPKR)}</div>
                            <span className="text-[10px] font-mono text-rose-400">
                              {inv.daysOverdue} days overdue
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 truncate max-w-[180px]">
                            {inv.recommendedAction}
                          </span>

                          {isSent ? (
                            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded">
                              <Check className="w-3 h-3" />
                              Reminder Sent
                            </span>
                          ) : (
                            <button
                              onClick={() => handleSendReminder(inv.id)}
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/30 transition-colors flex items-center gap-1 shrink-0"
                            >
                              <Send className="w-3 h-3" />
                              Send Notice
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Reminder text popup */}
                {activeReminderPreview && (
                  <div className="p-3 rounded-xl bg-[#090D18] border border-brand-cyan/40 text-[11px] font-mono text-slate-300 space-y-1 animate-in fade-in">
                    <div className="text-brand-cyan font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5" />
                        WhatsApp Collection Notice Dispatched:
                      </span>
                      <button onClick={() => setActiveReminderPreview(null)} className="text-slate-400 hover:text-white">✕</button>
                    </div>
                    <p className="text-slate-400 italic">
                      "Respected Indus Trading Accounts, gentle reminder that Invoice INV-2026-089 (PKR 180,000) was due on Sep 29. Please find payment IBAN attached..."
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Footer watermark note */}
          <div className="px-6 py-3 bg-black/40 border-t border-white/[0.06] text-center text-[11px] font-mono text-slate-400">
            Simulated live dashboard preview • Data presented for demo illustrative purposes
          </div>

        </div>

      </div>
    </section>
  );
};
