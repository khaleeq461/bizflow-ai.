import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  Sparkles, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  TrendingUp, 
  ShieldAlert, 
  Zap, 
  Lock, 
  CheckCircle2
} from 'lucide-react';

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchDemo: () => void;
  onOpenEarlyAccess: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  isOpen,
  onClose,
  onLaunchDemo,
  onOpenEarlyAccess
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // The 8-stage Singapore FinTech Festival & Ignite presentation sequence
  const slides = [
    {
      step: '01',
      stage: 'Problem',
      title: 'The SME Financial Fragmentation Friction',
      subtitle: 'Spreadsheets, Paper Receipts, and WhatsApp Settlements',
      icon: AlertTriangle,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      description: 'Emerging market SMEs operate in constant financial fog. Cash is managed through disconnected banking portals, fragile spreadsheets, and unrecorded WhatsApp receipts, leaving business owners blind to impending liquidity shortfalls.',
      bulletPoints: [
        '14+ hours wasted weekly on manual bookkeeping & bank checking',
        'Month-end reconciliation delays decisions by 2 to 3 weeks',
        'Informal credit & delayed collections choke business runway'
      ],
      pitchInsight: 'SMEs do not need more accounting spreadsheets. They need continuous autonomous financial intelligence.'
    },
    {
      step: '02',
      stage: 'BizFlow Intelligence',
      title: 'The Unified Financial Operating System',
      subtitle: 'One Intelligent Layer Across Financial Operations',
      icon: Layers,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      description: 'BizFlow AI connects multi-bank clearing feeds, digital invoices, customer receivables, and vendor payables into a single real-time intelligence nucleus without requiring expensive enterprise ERP overhauls.',
      bulletPoints: [
        'Direct multi-bank ingestion (Raast, IBFT, bank statements)',
        'Multi-modal bilingual document parser (PDF, photo, WhatsApp bills)',
        'Continuous synchronization replacing stressful month-end closes'
      ],
      pitchInsight: 'Transforms static financial records into a living, proactive intelligence infrastructure.'
    },
    {
      step: '03',
      stage: 'AI Agents',
      title: 'Specialized Autonomous Workforce',
      subtitle: 'Six Purpose-Built Financial Agents in Real-Time Coordination',
      icon: Cpu,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
      description: 'Instead of a generic chatbot, BizFlow deploys six specialized agents operating concurrently: CashFlow Agent, Invoice Agent, Reconciliation Agent, Receivables Agent, Risk Agent, and Payment Agent.',
      bulletPoints: [
        'Each agent has dedicated operational parameters & guardrails',
        'Continuous 3-way matching across bank statements, POs, and invoices',
        'Event-driven coordination with sub-second decision latency'
      ],
      pitchInsight: 'Not an assistant that waits for prompts — an active workforce that monitors finances 24/7.'
    },
    {
      step: '04',
      stage: 'Cash Flow Forecast',
      title: 'Predictive Liquidity Simulation',
      subtitle: 'Rolling 14-to-90 Day Forward Trajectory Modeling',
      icon: TrendingUp,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      description: 'Traditional accounting looks backward. BizFlow looks forward. By correlating anticipated customer settlements, seasonal payroll cycles, and supplier payment terms, BizFlow projects rolling runway buffers dynamically.',
      bulletPoints: [
        'Real-time simulation: 98.4% projection accuracy',
        'Safe liquidity buffer threshold markers & scenario stress testing',
        'Eliminates surprise overdrafts and emergency high-interest borrowing'
      ],
      pitchInsight: 'Gives SMEs CFO-level predictive clarity without hiring a multi-person finance team.'
    },
    {
      step: '05',
      stage: 'Financial Risk',
      title: 'Early Shortfall & Anomaly Detection',
      subtitle: 'Proactive Alerting 9 Days in Advance of Liquidity Dips',
      icon: ShieldAlert,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      description: 'The Risk and CashFlow Agents isolate impending liquidity crunches days before they materialize. In Ahmed Traders, BizFlow flags a Day 11 deficit caused by a major vendor payout outpacing incoming collections.',
      bulletPoints: [
        'Automated detection of vendor IBAN alterations & fee surges',
        'Early notice flags liquidity dips 9 to 11 days before impact',
        'Pre-assembled mitigation plans ready for immediate deployment'
      ],
      pitchInsight: 'Turns potential liquidity emergencies into manageable, pre-planned business decisions.'
    },
    {
      step: '06',
      stage: 'Recommended Action',
      title: 'Actionable Intelligence, Not Passive Charts',
      subtitle: 'Pre-Packaged WhatsApp Notices & Optimized Payout Batches',
      icon: Zap,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
      description: 'BizFlow does not stop at showing alerts. It prepares the exact operational remedies: context-aware WhatsApp payment reminders with 1LINK IBANs and pre-scheduled payment workflows for owner sign-off.',
      bulletPoints: [
        '1-Click WhatsApp reminder drafting for overdue receivables',
        'Cash float optimization: vendor discounts matched to liquidity',
        'Zero manual data re-entry across tools or banking portals'
      ],
      pitchInsight: 'Closes the loop from insight to real-world financial execution.'
    },
    {
      step: '07',
      stage: 'Human Approval',
      title: 'Responsible Automation & Trust Architecture',
      subtitle: 'Human-in-the-Loop Governance: Zero Autonomous Outflow',
      icon: Lock,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      description: 'Trust is our paramount pillar. BizFlow AI operates strictly under human approval. AI agents prepare recommendations, verify supplier tax NTNs, and assemble batches — but the business owner retains absolute authorization control.',
      bulletPoints: [
        'Zero autonomous fund movement without explicit owner biometric / OTP sign-off',
        'Cryptographic audit hashing for every approved disbursement',
        'Built to satisfy banking security standards and international compliance'
      ],
      pitchInsight: 'Autonomous intelligence + human authorization = Institutional trust.'
    },
    {
      step: '08',
      stage: 'Business Outcome',
      title: 'Measurable Economic Impact for SMEs',
      subtitle: 'Cash Preservation, Accelerated Collections, and Scalable Growth',
      icon: CheckCircle2,
      color: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30',
      description: 'By connecting financial data and automating reconciliation, BizFlow delivers tangible capital efficiency: 26% cash runway enhancement, -11 days reduction in debtor days (DSO), and complete freedom from manual finance burdens.',
      bulletPoints: [
        'Built in Pakistan as a high-density testbed, engineered for emerging markets worldwide',
        'Scalable across South Asia, Southeast Asia, and frontier trade corridors',
        'The foundational financial operating system for the next generation of SMEs'
      ],
      pitchInsight: 'Empowering millions of small businesses with institutional-grade financial infrastructure.'
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || !isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, isOpen, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, slides.length]);

  if (!isOpen) return null;

  const active = slides[currentSlide];
  const SlideIcon = active.icon;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#06080D]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 text-slate-100"
      role="dialog"
      aria-modal="true"
      aria-labelledby="presentation-slide-title"
    >
      {/* Top Bar: SFF Presentation Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-slate-950 text-sm">
            B
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white tracking-tight">BizFlow AI</span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                Singapore FinTech Festival Presentation Mode
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Agentic Financial Operating System for SMEs • 8-Stage Storyboard
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Auto-Play Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            title={isPlaying ? 'Pause Auto-Play' : 'Auto-Play Presentation (6s/slide)'}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-brand-cyan" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline">{isPlaying ? 'Auto-Advancing' : 'Play'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onLaunchDemo();
            }}
            className="px-3.5 py-1.5 rounded-lg bg-brand-cyan/20 hover:bg-brand-cyan/30 text-brand-cyan border border-brand-cyan/40 text-xs font-mono font-semibold transition-colors flex items-center gap-1"
          >
            <span>Launch Live Demo</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Exit Presentation Mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="flex-1 max-w-5xl mx-auto w-full flex items-center py-4 sm:py-8 overflow-hidden">
        <div className="w-full max-h-[80vh] overflow-y-auto rounded-3xl bg-[#0D1220]/90 border border-white/[0.12] p-5 sm:p-8 lg:p-10 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl relative space-y-4 sm:space-y-6">
          
          {/* Subtle top indicator beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent"></div>

          {/* Slide Header Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className={`p-2 rounded-xl border ${active.color} shrink-0`}>
                <SlideIcon className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan">
                  Stage {active.step} of 08 • {active.stage}
                </span>
                <div className="text-xs font-mono text-slate-400">{active.subtitle}</div>
              </div>
            </div>

            <span className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/[0.06]">
              Use ← and → arrow keys to navigate
            </span>
          </div>

          {/* Slide Main Headline */}
          <h2 id="presentation-slide-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {active.title}
          </h2>

          {/* Detailed Paragraph */}
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {active.description}
          </p>

          {/* Bullet Points */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Architectural Evidence:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-mono">
              {active.bulletPoints.map((bp, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-brand-cyan font-bold">•</span>
                  <span>{bp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pitch Insight Takeaway Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-brand-blue/15 via-brand-cyan/15 to-transparent border border-brand-cyan/30 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-brand-cyan shrink-0" />
            <div className="text-xs sm:text-sm font-semibold text-white">
              Investor Takeaway: <span className="text-brand-cyan font-normal">{active.pitchInsight}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Controls & Step Indicator */}
      <div className="max-w-5xl mx-auto w-full pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
          className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 text-brand-cyan" />
          <span>Previous Stage</span>
        </button>

        {/* 8 Dot Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'w-8 bg-brand-cyan shadow-sm shadow-brand-cyan/50' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Stage ${s.step}: ${s.stage}`}
            />
          ))}
        </div>

        {/* Next Button / Final Action */}
        <div className="flex items-center gap-2">
          {currentSlide === slides.length - 1 ? (
            <button
              onClick={() => {
                onClose();
                onOpenEarlyAccess();
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-brand-cyan/30 flex items-center gap-1.5"
            >
              <span>Connect With Founders</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="px-4 py-2 rounded-xl bg-brand-cyan hover:bg-white text-slate-950 text-xs font-mono font-bold transition-colors flex items-center gap-2"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
