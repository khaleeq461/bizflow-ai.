import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  Receipt, 
  Coins, 
  CreditCard, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Cpu,
  Layers,
  ArrowUpRight,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { SYSTEM_MODULES } from '../data/mockData';

export const SolutionSection: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('cashflow');
  const [isSimulatingStream, setIsSimulatingStream] = useState<boolean>(false);
  const [streamCount, setStreamCount] = useState<number>(142);

  const selectedModule = SYSTEM_MODULES.find(m => m.id === selectedModuleId) || SYSTEM_MODULES[0];

  const handleSimulateBurst = () => {
    setIsSimulatingStream(true);
    setStreamCount(prev => prev + 18);
    setTimeout(() => {
      setIsSimulatingStream(false);
    }, 1200);
  };

  const getModuleIcon = (name: string) => {
    switch (name) {
      case 'ArrowLeftRight': return ArrowLeftRight;
      case 'Receipt': return Receipt;
      case 'Coins': return Coins;
      case 'CreditCard': return CreditCard;
      case 'TrendingUp': return TrendingUp;
      case 'ShieldCheck': return ShieldCheck;
      default: return Layers;
    }
  };

  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-[#07090E] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
            <Zap className="w-3.5 h-3.5" />
            Unified Intelligence Core
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            One intelligent layer across your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              financial operations.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Instead of disparate apps that don't speak to each other, BizFlow AI sits at the center — continuously synthesizing cash movements, supplier claims, customer receivables and bank clearing.
          </p>
        </div>

        {/* Central Architecture Interactive Diagram */}
        <div className="mt-16 lg:mt-20">
          
          {/* Visual Diagram Board */}
          <div className="relative rounded-3xl bg-[#0B0F19]/90 border border-white/[0.1] p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Interactive Circuit Map
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {streamCount} Events Processed / Min
                </span>
              </div>

              <button
                onClick={handleSimulateBurst}
                disabled={isSimulatingStream}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-xs font-mono text-slate-200 flex items-center gap-2 transition-all active:scale-95"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-brand-cyan ${isSimulatingStream ? 'animate-spin' : ''}`} />
                <span>Simulate Real-Time Stream Burst</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Surrounding Modules - Interactive Grid (6 Modules) */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {SYSTEM_MODULES.map((mod) => {
                  const Icon = getModuleIcon(mod.iconName);
                  const isSelected = mod.id === selectedModuleId;

                  return (
                    <div
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-300 relative group flex flex-col justify-between min-h-[145px] ${
                        isSelected
                          ? 'bg-gradient-to-b from-white/[0.09] to-white/[0.03] border-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.22)] scale-[1.02]'
                          : 'bg-[#0E1424]/60 border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]'
                      }`}
                    >
                      {/* Top icon and connection indicator */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-brand-cyan text-slate-950 shadow-md shadow-brand-cyan/30'
                              : 'bg-white/[0.05] text-slate-300 group-hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-brand-cyan/20 text-brand-cyan'
                              : 'bg-white/[0.04] text-slate-400'
                          }`}
                        >
                          {mod.dataFlowRate}
                        </span>
                      </div>

                      {/* Title & category */}
                      <div className="pt-3">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {mod.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {mod.category}
                        </p>
                      </div>

                      {/* Directional beam hint */}
                      <div className="mt-2 pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span className={isSelected ? 'text-brand-cyan font-bold' : ''}>
                          {isSelected ? 'Feeding Core' : 'Click to Focus'}
                        </span>
                        <ArrowUpRight className={`w-3 h-3 ${isSelected ? 'text-brand-cyan' : 'text-slate-400'}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Central Nucleus: BizFlow AI Engine */}
              <div className="lg:col-span-5 relative">
                <div className={`relative rounded-2xl bg-gradient-to-br from-[#121829] via-[#0E1322] to-[#0A0D18] border transition-all duration-300 p-6 sm:p-7 shadow-[0_0_50px_rgba(0,240,255,0.14)] ${
                  isSimulatingStream ? 'border-brand-cyan scale-[1.01] shadow-[0_0_60px_rgba(0,240,255,0.3)]' : 'border-brand-cyan/35'
                }`}>
                  
                  {/* Glowing header badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1px]">
                        <div className="w-full h-full bg-[#07090E] rounded-[7px] flex items-center justify-center">
                          <Cpu className="w-4 h-4 text-brand-cyan" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan">Central Intelligence Layer</div>
                        <h3 className="text-base font-bold text-white">BizFlow AI Nucleus</h3>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"></span>
                  </div>

                  {/* Active selected stream details */}
                  <div className="py-5 space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">
                        Current Ingestion Stream:
                      </div>
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        <span>{selectedModule.title}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/30">
                          {selectedModule.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                        {selectedModule.description}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                      <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                        <span>Active Monitoring Agents:</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Synchronized
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedModule.activeAgents.map((agent, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-mono text-slate-200 border border-white/[0.08]"
                          >
                            {agent}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom core telemetry info */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                      Continuous Auto-Matching
                    </span>
                    <span className="font-mono text-brand-cyan">Zero Blindspots</span>
                  </div>

                </div>
              </div>

            </div>

            {/* Sub-text explanation */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
              <p className="text-xs sm:text-sm text-slate-400">
                All 6 operational dimensions converge into one unified ledger model, eliminating disconnected software and manual reconciliations.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
