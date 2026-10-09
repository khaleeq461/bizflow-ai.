import React, { useState } from 'react';
import { 
  LineChart, 
  FileText, 
  GitCompare, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Terminal, 
  Check, 
  Activity, 
  Sparkles, 
  ChevronDown,
  Play,
  CheckCheck,
  Cpu
} from 'lucide-react';
import { AI_AGENTS } from '../data/mockData';

export const AIAgentsSection: React.FC = () => {
  const [activeTelemetryAgentId, setActiveTelemetryAgentId] = useState<string | null>('cashflow');
  const [runningAgentId, setRunningAgentId] = useState<string | null>(null);
  const [testedAgents, setTestedAgents] = useState<Record<string, boolean>>({});
  const [activeOrchestrationNode, setActiveOrchestrationNode] = useState<string>('cashflow');

  const handleRunAgentTest = (agentId: string) => {
    setRunningAgentId(agentId);
    setTimeout(() => {
      setRunningAgentId(null);
      setTestedAgents(prev => ({ ...prev, [agentId]: true }));
      setActiveTelemetryAgentId(agentId);
      setActiveOrchestrationNode(agentId);
    }, 850);
  };

  const getAgentIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart': return LineChart;
      case 'FileText': return FileText;
      case 'GitCompare': return GitCompare;
      case 'Clock': return Clock;
      case 'ShieldAlert': return ShieldAlert;
      case 'CheckCircle2': return CheckCircle2;
      default: return Sparkles;
    }
  };

  // Color theme mapping for distinct visual identities
  const getAgentColorClasses = (theme: string) => {
    switch (theme) {
      case 'cyan':
        return {
          glow: 'border-cyan-500/40 hover:border-cyan-400 group-hover:shadow-[0_15px_45px_-10px_rgba(0,240,255,0.2)]',
          badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
          iconBg: 'bg-cyan-500/10 text-cyan-400',
          tag: 'text-cyan-400',
        };
      case 'sky':
        return {
          glow: 'border-sky-500/40 hover:border-sky-400 group-hover:shadow-[0_15px_45px_-10px_rgba(56,189,248,0.2)]',
          badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
          iconBg: 'bg-sky-500/10 text-sky-400',
          tag: 'text-sky-400',
        };
      case 'emerald':
        return {
          glow: 'border-emerald-500/40 hover:border-emerald-400 group-hover:shadow-[0_15px_45px_-10px_rgba(16,185,129,0.2)]',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          iconBg: 'bg-emerald-500/10 text-emerald-400',
          tag: 'text-emerald-400',
        };
      case 'violet':
        return {
          glow: 'border-violet-500/40 hover:border-violet-400 group-hover:shadow-[0_15px_45px_-10px_rgba(139,92,246,0.2)]',
          badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
          iconBg: 'bg-violet-500/10 text-violet-400',
          tag: 'text-violet-400',
        };
      case 'rose':
        return {
          glow: 'border-rose-500/40 hover:border-rose-400 group-hover:shadow-[0_15px_45px_-10px_rgba(244,63,94,0.2)]',
          badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
          iconBg: 'bg-rose-500/10 text-rose-400',
          tag: 'text-rose-400',
        };
      case 'amber':
        return {
          glow: 'border-amber-500/40 hover:border-amber-400 group-hover:shadow-[0_15px_45px_-10px_rgba(245,158,11,0.2)]',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          iconBg: 'bg-amber-500/10 text-amber-400',
          tag: 'text-amber-400',
        };
      default:
        return {
          glow: 'border-white/10 hover:border-brand-cyan/40',
          badge: 'bg-white/10 text-white',
          iconBg: 'bg-white/10 text-brand-cyan',
          tag: 'text-brand-cyan',
        };
    }
  };

  return (
    <section id="ai-agents" className="relative py-24 lg:py-32 bg-[#090C15] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow points */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
            <Activity className="w-3.5 h-3.5" />
            Specialized Autonomous Workforce
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            Meet your AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              financial team.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Not a generic text prompt. BizFlow deploys six specialized, purpose-built agents engineered specifically for SME treasury, document parsing, and cash flow operations.
          </p>
        </div>

        {/* Central Orchestration Concept: "BizFlow Intelligence Layer" */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#0E1424] via-[#12192D] to-[#0E1424] border border-brand-cyan/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan">
                  Central Orchestration Architecture
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  BizFlow Intelligence Layer
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All 6 Agents Coordinate Concurrently</span>
            </div>
          </div>

          {/* Interactive Agent Orchestration Flow Ribbon */}
          <div className="pt-6">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
              Automated Event Chain:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
              {AI_AGENTS.map((agent, i) => (
                <div
                  key={agent.id}
                  onClick={() => {
                    setActiveOrchestrationNode(agent.id);
                    setActiveTelemetryAgentId(agent.id);
                  }}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer text-center flex flex-col justify-between ${
                    activeOrchestrationNode === agent.id
                      ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-md'
                      : 'bg-black/30 border-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-[10px] text-slate-400">Step 0{i+1}</span>
                  <div className="font-semibold text-slate-200 truncate py-1">{agent.name}</div>
                  <span className="text-[9px] text-emerald-400">Active</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 AI Agents Cards Grid with Distinct Visual Color Identities */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_AGENTS.map((agent) => {
            const Icon = getAgentIcon(agent.iconName);
            const isTelemetryOpen = activeTelemetryAgentId === agent.id;
            const isRunning = runningAgentId === agent.id;
            const hasBeenTested = testedAgents[agent.id];
            const colors = getAgentColorClasses(agent.colorTheme);

            return (
              <div
                key={agent.id}
                className={`relative rounded-2xl bg-[#0D1220]/80 border ${colors.glow} p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl`}
              >
                {/* Top Badge & Status */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className={`w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md ${colors.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wide text-emerald-400 font-medium">
                        {isRunning ? 'Executing...' : agent.status}
                      </span>
                    </div>
                  </div>

                  {/* Agent Titles */}
                  <div className="pt-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {agent.name}
                      </h3>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${colors.badge}`}>
                        {agent.highlightTag}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400">
                      Role: <strong className="text-slate-300">{agent.orchestrationRole}</strong>
                    </div>
                    
                    {/* Exact User Prompt Tagline */}
                    <p className="text-sm font-medium text-slate-200 leading-snug pt-1">
                      "{agent.tagline}"
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  {/* Capabilities Checklist */}
                  <div className="pt-4 space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Specialized Capabilities:
                    </div>
                    <ul className="space-y-1.5">
                      {agent.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className={`w-3.5 h-3.5 ${colors.tag} shrink-0 mt-0.5`} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Metric & Live Telemetry toggle */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">{agent.metricLabel}:</span>
                    <span className="font-mono font-bold text-white text-sm bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.06]">
                      {agent.metricValue}
                    </span>
                  </div>

                  {/* Test Execution & Drawer Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleRunAgentTest(agent.id)}
                      disabled={isRunning}
                      className={`py-2 px-2.5 rounded-lg border text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                        hasBeenTested
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border-white/[0.08]'
                      }`}
                    >
                      {isRunning ? (
                        <>
                          <Activity className="w-3 h-3 animate-spin text-brand-cyan" />
                          <span>Simulating...</span>
                        </>
                      ) : hasBeenTested ? (
                        <>
                          <CheckCheck className="w-3 h-3" />
                          <span>Simulated</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 text-brand-cyan" />
                          <span>Run Agent</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTelemetryAgentId(isTelemetryOpen ? null : agent.id)}
                      className="py-2 px-2.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/[0.06] flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-300 transition-colors"
                    >
                      <Terminal className="w-3 h-3 text-brand-cyan" />
                      <span>Telemetry</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isTelemetryOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {isTelemetryOpen && (
                    <div className="p-3 rounded-lg bg-[#07090E] border border-white/[0.12] text-[11px] font-mono text-slate-300 space-y-1.5 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-white/[0.06]">
                        <span>TELEMETRY RECORD: {agent.name.toUpperCase()}</span>
                        <span className="text-emerald-400">STATUS: 200 OK</span>
                      </div>
                      <p className="text-brand-cyan text-[11px] leading-relaxed">
                        &gt; {agent.recentTelemetry}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section bottom note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Agents communicate asynchronously through our event bus. No agent can execute external fund transfers without authenticated human confirmation.
          </p>
        </div>

      </div>
    </section>
  );
};
