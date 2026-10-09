import React, { useState } from 'react';
import { 
  Link2, 
  Cpu, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Link2': return Link2;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      case 'Zap': return Zap;
      default: return Sparkles;
    }
  };

  const currentStep = HOW_IT_WORKS_STEPS[activeStepIndex];
  const StepIcon = getStepIcon(currentStep.iconName);

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#090C15] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Operational Flow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            From raw financial noise to coordinated action in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              four steps.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            BizFlow AI removes the friction of complex ERP setups. Simply connect your existing financial habits, and let specialized agents coordinate the rest.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((s, idx) => {
            const Icon = getStepIcon(s.iconName);
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-[#11182B] border-brand-cyan/60 shadow-[0_0_25px_rgba(0,240,255,0.15)] scale-[1.02]'
                    : 'bg-[#0E1322]/50 border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between pb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-brand-cyan' : 'text-slate-400'}`}>
                    STEP {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-cyan' : 'text-slate-400'}`} />
                </div>
                <div className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl bg-[#0C101D] border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top indicator beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] text-xs font-mono text-brand-cyan border border-white/[0.08]">
                <span>Phase {currentStep.step}</span>
                <span>•</span>
                <span className="text-white font-bold">{currentStep.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400 uppercase">
                  Technical Architecture:
                </div>
                <div className="text-xs font-mono text-slate-200">
                  {currentStep.techDetail}
                </div>
              </div>
            </div>

            {/* Right side visual badge / mock log */}
            <div className="md:col-span-5 relative">
              <div className="rounded-2xl bg-gradient-to-br from-[#12182B] to-[#0A0D18] border border-brand-cyan/30 p-5 space-y-4 shadow-xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Step
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Sample Automated Output:
                  </span>
                  <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06] font-mono text-xs text-brand-cyan leading-relaxed">
                    &gt; {currentStep.sampleOutput}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Owner Verification</span>
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Enforced
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Stepper Footer Controls */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : HOW_IT_WORKS_STEPS.length - 1))}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              ← Previous Phase
            </button>
            <div className="flex gap-1.5">
              {HOW_IT_WORKS_STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    activeStepIndex === i ? 'w-6 bg-brand-cyan' : 'w-2 bg-white/[0.15]'
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={() => setActiveStepIndex((prev) => (prev < HOW_IT_WORKS_STEPS.length - 1 ? prev + 1 : 0))}
              className="text-xs font-mono text-brand-cyan hover:underline transition-colors flex items-center gap-1"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
