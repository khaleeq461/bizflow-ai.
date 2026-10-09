import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Play, Presentation } from 'lucide-react';

interface NavbarProps {
  onOpenEarlyAccess: () => void;
  onOpenDemo: () => void;
  onOpenPresentation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEarlyAccess, 
  onOpenDemo,
  onOpenPresentation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#product-preview' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'AI Agents', href: '#ai-agents' },
    { name: 'For SMEs', href: '#problem-solution' },
    { name: 'Vision', href: '#global-vision' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1px] shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white text-lg tracking-tight">
                  B
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan ml-0.5 animate-pulse"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                BizFlow <span className="text-xs px-1.5 py-0.5 rounded-md bg-brand-cyan/10 text-brand-cyan font-mono font-medium border border-brand-cyan/20">AI</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Direct Product Demo trigger in nav */}
            <button
              onClick={onOpenDemo}
              className="px-3 py-1 text-xs font-mono font-semibold text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 rounded-full transition-all flex items-center gap-1.5 ml-1"
            >
              <Play className="w-3 h-3 fill-brand-cyan" />
              <span>Live Demo</span>
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenPresentation && (
              <button
                onClick={onOpenPresentation}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                title="Singapore FinTech Festival Presentation Mode"
              >
                <Presentation className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Pitch Mode</span>
              </button>
            )}

            <button
              onClick={onOpenDemo}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <span>Demo Workspace</span>
            </button>

            <button
              onClick={onOpenEarlyAccess}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] active:scale-95"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0A0E18]/95 backdrop-blur-2xl px-5 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Autonomous Agents Active
            </div>
            <span className="text-[11px] text-slate-400">Emerging Markets Edition</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-brand-cyan hover:bg-white/[0.04] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            {/* Mobile Product Demo Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="px-3 py-2.5 text-sm font-medium text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 rounded-lg transition-colors flex items-center justify-between w-full text-left"
            >
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-brand-cyan" />
                Product Demo (Ahmed Traders)
              </span>
              <ArrowRight className="w-4 h-4 text-brand-cyan" />
            </button>

            {/* Mobile Pitch Mode Button */}
            {onOpenPresentation && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPresentation();
                }}
                className="px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] rounded-lg transition-colors flex items-center justify-between w-full text-left"
              >
                <span className="flex items-center gap-2">
                  <Presentation className="w-4 h-4 text-brand-cyan" />
                  SFF Presentation Storyboard (8 Stages)
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess();
              }}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/20"
            >
              <Sparkles className="w-4 h-4" />
              Request Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
