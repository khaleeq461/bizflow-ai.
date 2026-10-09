import React, { useState } from 'react';
import { Globe, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const GlobalVision: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<'pakistan' | 'gcc' | 'sea'>('pakistan');

  const marketDetails = {
    pakistan: {
      title: 'Pakistan Launchpad',
      subtitle: 'Karachi, Lahore, Faisalabad, Sialkot & Islamabad Hubs',
      highlightBadge: 'Primary Pilot Deployment',
      stats: [
        { label: 'Addressable SMEs', value: '3.2 Million' },
        { label: 'Daily Bank Rails', value: 'Raast / 1LINK IBFT' },
        { label: 'Tax Architecture', value: 'FBR GST & WHT Sec 153' }
      ],
      description: 'Pakistani SMEs suffer from extended 45-to-90 day informal credit cycles, WhatsApp receipt disorder, and tedious sales tax deduction reconciliation. BizFlow AI provides direct relief by auto-parsing bilingual documents and tracking rolling cash buffers.',
      keyIntegrations: [
        'Bilingual Urdu & English handwritten slip OCR',
        'Direct Raast QR & IBFT payment workflow prep',
        'Automated FBR withholding tax certificates check',
        'WhatsApp business statement ingestion'
      ]
    },
    gcc: {
      title: 'GCC & South Asia Corridor',
      subtitle: 'Dubai, Riyadh & Regional Trading Hubs',
      highlightBadge: 'Phase II Regional Corridor',
      stats: [
        { label: 'Cross-Border Flows', value: 'AED & SAR Pegged' },
        { label: 'Clearing Speed', value: 'Same-Day Wire' },
        { label: 'Tax Framework', value: 'ZATCA / FTA VAT' }
      ],
      description: 'Trading houses in Dubai and Saudi Arabia deal with complex multi-currency balances, cross-border distributor receivables, and stringent e-invoicing compliance.',
      keyIntegrations: [
        'Multi-currency treasury consolidation (USD, AED, SAR, PKR)',
        'ZATCA Phase 2 XML e-invoicing synchronization',
        'Cross-border freight escrow tracking',
        'International correspondent banking reconciler'
      ]
    },
    sea: {
      title: 'Southeast Asia & Frontier Markets',
      subtitle: 'Singapore, Jakarta, Manila High-Growth Ecosystems',
      highlightBadge: 'Global Emerging Standard',
      stats: [
        { label: 'Digital Commerce', value: 'Omnichannel POS' },
        { label: 'MSME Contribution', value: '60% of GDP' },
        { label: 'Payment Channels', value: 'PromptPay / DuitNow' }
      ],
      description: 'Extending autonomous financial intelligence to fast-growing Asian MSMEs that have bypassed legacy desktop accounting altogether in favor of mobile commerce.',
      keyIntegrations: [
        'Real-time omnichannel payment gateway matching',
        'Marketplace receivables reconciliation',
        'Micro-credit risk score generation',
        'Unified mobile-first treasury console'
      ]
    }
  };

  const current = marketDetails[activeMarket];

  const targetSectors = [
    { name: 'Retailers & Wholesalers', detail: 'Managing high-velocity daily batch receipts & supplier dues' },
    { name: 'Distributors & Logistics', detail: 'Accelerating overdue credit collections across dealer networks' },
    { name: 'Service Businesses & Agencies', detail: 'Predicting retainer cash flow & contractor disbursements' },
    { name: 'Growing Emerging SMEs', detail: 'Eliminating the need to hire massive back-office accounting teams' }
  ];

  return (
    <section id="global-vision" className="relative py-24 lg:py-32 bg-[#07090E] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
            <Globe className="w-3.5 h-3.5" />
            Global Vision
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            Built in Pakistan.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              Designed for emerging markets.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Global fintech tools were engineered for Silicon Valley or London balance sheets. We are engineering the intelligent financial operating system specifically for how real emerging market businesses trade.
          </p>

          {/* Market Selector Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'pakistan', label: 'Pakistan (Pilot Market)' },
              { id: 'gcc', label: 'GCC & Middle East' },
              { id: 'sea', label: 'Southeast Asia' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveMarket(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeMarket === tab.id
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold shadow-md shadow-brand-cyan/20'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.08]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Regional Showcase Card */}
        <div className="mt-12 rounded-3xl bg-gradient-to-b from-[#0F1424] to-[#0A0D18] border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                  {current.highlightBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                <MapPin className="w-6 h-6 text-brand-cyan shrink-0" />
                <span>{current.title}</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Regional Capabilities checklist */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Specialized Market Adaptations:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.keyIntegrations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.05]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Regional Metrics */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl bg-[#090D18] border border-white/[0.08] p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-mono text-slate-400">Market Infrastructure</span>
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                </div>

                <div className="space-y-3">
                  {current.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-white/[0.02]">
                      <span className="text-slate-400">{stat.label}:</span>
                      <span className="text-brand-cyan font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-400 leading-relaxed">
                  Engineered to handle emerging market exceptions: partial settlements, withholding deductions, and multi-bank reconciliation out of the box.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Target Sectors Grid */}
        <div className="mt-16 rounded-3xl bg-[#0C101D] border border-white/[0.08] p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
              Engineered For Diverse SME Profiles
            </span>
            <h3 className="text-2xl font-bold text-white">
              Who BizFlow AI is built for
            </h3>
            <p className="text-sm text-slate-400">
              Businesses with dynamic cash flow requirements who need immediate clarity without bureaucratic software overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetSectors.map((sector, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors space-y-2"
              >
                <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                <h4 className="text-sm font-bold text-white">{sector.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sector.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
