import React from 'react';
import { ArrowDown } from 'lucide-react';

interface StoryBridgeProps {
  fromStep: string;
  toStep: string;
  narrativeText: string;
  badgeText: string;
}

export const StoryBridge: React.FC<StoryBridgeProps> = ({
  fromStep,
  toStep,
  narrativeText,
  badgeText,
}) => {
  return (
    <div className="relative py-8 sm:py-12 bg-[#07090E] overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle vertical connector trace */}
      <div className="w-[1px] h-10 bg-gradient-to-b from-white/10 via-brand-cyan/40 to-transparent"></div>

      <div className="my-2 px-4 py-2 rounded-full bg-[#0D1220] border border-white/[0.08] shadow-[0_0_20px_rgba(0,240,255,0.06)] flex flex-wrap items-center justify-center gap-2.5 max-w-2xl text-center">
        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 shrink-0">
          {badgeText}
        </span>
        <span className="text-[10px] font-mono text-slate-400 shrink-0">
          [{fromStep} → {toStep}]
        </span>
        <span className="text-xs text-slate-300 font-medium">
          {narrativeText}
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-brand-cyan/80 shrink-0 animate-bounce" />
      </div>

      <div className="w-[1px] h-6 bg-gradient-to-b from-brand-cyan/30 to-transparent"></div>
    </div>
  );
};
