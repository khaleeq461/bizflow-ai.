import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AIAgentsSection } from './components/AIAgentsSection';
import { ProductPreview } from './components/ProductPreview';
import { HowItWorks } from './components/HowItWorks';
import { GlobalVision } from './components/GlobalVision';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';
import { StoryBridge } from './components/StoryBridge';
import { ProductDemo } from './components/ProductDemo';
import { PresentationMode } from './components/PresentationMode';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'demo'>('landing');
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  // Sync view with URL hash or parameter
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      
      if (hash.includes('pitch') || hash.includes('presentation')) {
        setIsPresentationOpen(true);
      }
      
      if (hash.includes('demo') || path.includes('demo') || search.includes('demo')) {
        setCurrentView('demo');
      } else {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToDemo = () => {
    setCurrentView('demo');
    window.location.hash = '/demo';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanding = () => {
    setCurrentView('landing');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {currentView === 'demo' ? (
        /* DEDICATED INTERACTIVE PRODUCT DEMO EXPERIENCE: Ahmed Traders Workspace */
        <ProductDemo
          onBackToWebsite={navigateToLanding}
          onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)}
        />
      ) : (
        /* FULL HIGH-END FINTECH LANDING EXPERIENCE */
        <>
          {/* Sticky Global Navigation */}
          <Navbar 
            onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)}
            onOpenDemo={navigateToDemo}
            onOpenPresentation={() => setIsPresentationOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="flex-1">
            {/* 1. Hero Section (AI + Finance + SME + Action) */}
            <Hero 
              onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} 
              onOpenDemo={navigateToDemo}
            />

            {/* Narrative Step 1: The Problem & Financial Fragmentation */}
            <ProblemSection />

            {/* Story Bridge: Fragmentation -> Intelligence Layer */}
            <StoryBridge
              badgeText="The Structural Fix"
              fromStep="Fragmentation"
              toStep="Intelligence Layer"
              narrativeText="Fragmented tools require a central nervous system to coordinate cash movements."
            />

            {/* Narrative Step 2: BizFlow Intelligence Layer & Central Architecture */}
            <SolutionSection />

            {/* Story Bridge: Intelligence Layer -> Specialized Agents */}
            <StoryBridge
              badgeText="Autonomous Execution"
              fromStep="Intelligence Layer"
              toStep="AI Financial Team"
              narrativeText="The core layer deploys six specialized agents into your daily workflows."
            />

            {/* Narrative Step 3: Meet Your AI Financial Team */}
            <AIAgentsSection />

            {/* Story Bridge: Agents -> Prediction & Controlled Action */}
            <StoryBridge
              badgeText="Predictive Foresight"
              fromStep="AI Agents"
              toStep="Prediction & Action"
              narrativeText="Continuous reconciliation powers forward-looking runway forecasts and owner actions."
            />

            {/* Narrative Step 4: Product Preview (Prediction + Controlled Action) */}
            <ProductPreview />

            {/* Story Bridge: Prediction -> 4-Step Operational Flow */}
            <StoryBridge
              badgeText="Implementation Blueprint"
              fromStep="Prediction"
              toStep="Business Growth"
              narrativeText="Connect data, understand patterns, predict shortfalls, and grow with confidence."
            />

            {/* Narrative Step 5: How It Works & Controlled Action Flow */}
            <HowItWorks />

            {/* Narrative Step 6: Global Vision & Emerging Market Scale */}
            <GlobalVision />

            {/* Final Conversion CTA */}
            <FinalCTA onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />
          </main>

          {/* Footer */}
          <Footer 
            onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} 
            onOpenDemo={navigateToDemo}
          />
        </>
      )}

      {/* Interactive Early Access Modal (Available globally across all views) */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />

      {/* SFF / Ignite 8-Stage Presentation Walkthrough Mode */}
      <PresentationMode
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        onLaunchDemo={() => {
          setIsPresentationOpen(false);
          navigateToDemo();
        }}
        onOpenEarlyAccess={() => {
          setIsPresentationOpen(false);
          setIsEarlyAccessOpen(true);
        }}
      />
    </div>
  );
};

export default App;
