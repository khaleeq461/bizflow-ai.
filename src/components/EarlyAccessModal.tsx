import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Building2, Mail, User, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { EarlyAccessFormData } from '../types';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<EarlyAccessFormData>({
    fullName: '',
    businessName: '',
    email: '',
    businessType: 'Retail / Wholesale',
    country: 'Pakistan',
    monthlyRevenueRange: 'PKR 1M - 5M / mo',
  });

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Frontend validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid business email.');
      return;
    }
    if (!formData.businessName.trim()) {
      setErrorMessage('Please specify your company name.');
      return;
    }

    setIsSubmitted(true);
    
    // Launch festive fintech confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#0066FF', '#10B981', '#FFFFFF']
      });
    } catch {
      // fallback
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0D111C] border border-white/[0.12] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                Application Received
              </span>
              <h3 id="modal-headline" className="text-2xl font-bold text-white pt-2">You're On The Pilot List</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{formData.fullName || 'Partner'}</strong>. We have registered <span className="text-brand-cyan font-semibold">{formData.businessName}</span> for the private BizFlow AI pilot cohort.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Access Token:</span>
                <span className="text-white">BF-PK-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Business Type:</span>
                <span className="text-brand-cyan">{formData.businessType}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Verification:</span>
                <span className="text-emerald-400">Queued for Cohort Onboarding</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 hover:opacity-95 transition-all shadow-lg shadow-brand-cyan/25"
            >
              Return to Platform Overview
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs text-brand-cyan font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                Limited Private Pilot Cohort
              </div>
              <h3 id="modal-headline" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request Early Access
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Deploy autonomous cash flow prediction and invoice reconciliation for your business.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tariq@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Indus Apparel Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141B2B] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  >
                    <option value="Retail / Wholesale">Retail & Wholesale</option>
                    <option value="Distributor">Distribution & Logistics</option>
                    <option value="B2B Services">Service Business / Agency</option>
                    <option value="Manufacturing">Manufacturing & Textiles</option>
                    <option value="Import / Export">Import & Trading</option>
                    <option value="Other">Other SME</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Bank-grade privacy. Payment workflows require explicit biometric or OTP sign-off before funds are moved.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-cyan via-white to-brand-cyan text-slate-950 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Request Early Access</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
