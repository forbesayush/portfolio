import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, 
  Layers, ChevronDown, Sparkles, Activity, Lock, Users, 
  ArrowUpRight, Play, Eye, Sliders, RefreshCw, Star
} from 'lucide-react';

export default function SaaSLandingPage({ onBackToPortfolio }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [openFaq, setOpenFaq] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [trialSuccess, setTrialSuccess] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleTrialSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setTrialSuccess(true);
    setTimeout(() => {
      setEmailInput('');
      setTrialSuccess(false);
    }, 4000);
  };

  const painPoints = [
    {
      number: '01',
      title: 'Silent Conversion Leaks',
      description: 'Analytics tools show you that 68% of users bounce from your checkout or onboarding, but never tell you the exact cognitive friction causing it.'
    },
    {
      number: '02',
      title: 'Manual Audits Take 4 Weeks',
      description: 'Hiring external CRO consultants takes a month and produces a 60-slide deck that sits unexecuted while your CAC continues to climb.'
    },
    {
      number: '03',
      title: 'Fragmented Analytics Silos',
      description: 'Session replays, funnel telemetry, and feature flags live in separate tabs, forcing engineers and product managers to waste days stitching SQL queries.'
    }
  ];

  const features = [
    {
      icon: Activity,
      title: 'Continuous Heuristic Engine',
      description: 'Automated evaluation against 100+ proven UX heuristics. Detects layout shifts, ambiguous CTAs, cognitive friction, and broken task paths.'
    },
    {
      icon: BarChart3,
      title: 'Full-Funnel Telemetry',
      description: 'Pinpoints the exact step where users experience friction, combining session telemetry with quantitative unit economic models.'
    },
    {
      icon: Zap,
      title: '1-Click CRO Experimentation',
      description: 'Deploy copy, layout, and checkout experiments directly to production without waiting for an engineering sprint.'
    },
    {
      icon: Sliders,
      title: 'Dynamic Cart & Checkout Optimizer',
      description: 'Automate tier-based volume bundling, free shipping progression bars, and 1-click accelerated checkout flows.'
    },
    {
      icon: RefreshCw,
      title: 'Predictive Replenishment CRM',
      description: 'Trigger retention loops and automated replenishment emails timed precisely to individual consumer usage cycles.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security & Zero Lag',
      description: 'SOC2 Type II compliant, GDPR-ready, with an ultra-lightweight 2.4kB snippet that adds zero latency to your user experience.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Connect Your Stack in 5 Minutes',
      description: 'Install our 2.4kB script or connect via Segment, Shopify Plus, Mixpanel, or PostHog with zero complex engineering.'
    },
    {
      step: '02',
      title: 'AI Scans 100+ Heuristic Rules',
      description: 'Our engine maps your customer journeys, flags high-friction drop-off nodes, and calculates revenue lost at each step.'
    },
    {
      step: '03',
      title: 'Deploy Fixes & Capture Lift',
      description: 'Review prioritized CRO recommendations and launch automated A/B test variations with one click.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: billingCycle === 'annual' ? 49 : 59,
      description: 'For early-stage products and growing D2C brands optimizing their initial funnel.',
      features: [
        'Up to 25,000 monthly tracked users',
        'Automated Heuristic UX Audits (Weekly)',
        'Core Funnel Telemetry',
        'Standard Integrations (Shopify, GA4)',
        'Community & Email Support'
      ],
      popular: false,
      cta: 'Start 14-Day Free Trial'
    },
    {
      name: 'Growth',
      price: billingCycle === 'annual' ? 149 : 179,
      description: 'For scaling scale-ups and high-velocity product teams demanding continuous CRO.',
      features: [
        'Up to 150,000 monthly tracked users',
        'Continuous Real-Time Heuristic Engine',
        '1-Click No-Code Experiment Deployer',
        'Dynamic Cart & Checkout Tiering',
        'Klaviyo & CRM Replenishment Sync',
        'Priority Slack Channel Support'
      ],
      popular: true,
      cta: 'Start 14-Day Free Trial'
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'annual' ? 449 : 499,
      description: 'For multi-brand portfolios and enterprises requiring custom telemetry and dedicated SLAs.',
      features: [
        'Unlimited monthly tracked users',
        'Custom Heuristic Rule Models',
        'Multi-Storefront Cross-Border Sync',
        'Dedicated Growth Engineer & Audit Lead',
        'Custom Data Warehouse Export (BigQuery/Snowflake)',
        '99.9% SLA & Custom MSA'
      ],
      popular: false,
      cta: 'Book Enterprise Demo'
    }
  ];

  const testimonials = [
    {
      quote: "LinearScale identified 4 critical navigation friction points in our onboarding within 48 hours of installing the snippet. Fixing them reduced our checkout drop-off by 22% in the first sprint.",
      author: "Marcus Vance",
      role: "VP of Product, FinScale",
      metrics: "+22% Checkout Conversion"
    },
    {
      quote: "We replaced our expensive quarterly agency audits with LinearScale. The dynamic cart volume bundling alone drove a 24% lift in our blended AOV across our 5 international storefronts.",
      author: "Elena Rostova",
      role: "Head of Growth, Aura Skincare",
      metrics: "+24% AOV Increase"
    },
    {
      quote: "The ability to run automated heuristic evaluations continuously gives our product team an unfair advantage. We ship experiments 3x faster without touching our core codebase.",
      author: "David Chen",
      role: "Lead Product Designer, Omnichannel D2C",
      metrics: "3.4x CAC:LTV Ratio"
    }
  ];

  const faqs = [
    {
      q: "How does LinearScale detect UX friction automatically?",
      a: "LinearScale analyzes real-time user session telemetry against 100+ battle-tested heuristic frameworks (cognitive load, interactive feedback latency, input validation friction, and drop-off velocity) to pinpoint exact friction points with statistical certainty."
    },
    {
      q: "Will the tracking script slow down our web application?",
      a: "No. Our snippet is only 2.4kB, runs asynchronously via edge CDN, and executes zero DOM-blocking operations. Your Core Web Vitals and page load speeds remain completely unaffected."
    },
    {
      q: "How long does it take to integrate?",
      a: "Under 5 minutes. You can add a single script tag to your <head>, connect through Google Tag Manager, or install our 1-click Shopify Plus and Segment integrations."
    },
    {
      q: "Can we cancel our free trial at any time?",
      a: "Yes. You get full access to all Growth features for 14 days. No credit card is required to sign up, and you can cancel anytime with zero commitments."
    },
    {
      q: "How does data security and GDPR compliance work?",
      a: "LinearScale is SOC2 Type II certified, GDPR compliant, and automatically masks all Personally Identifiable Information (PII) before telemetry is processed."
    }
  ];

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] font-sans antialiased text-left selection:bg-orange-500/20 selection:text-orange-200">
      
      {/* SaaS Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-sm text-white">
                L
              </div>
              <span className="font-bold text-sm text-white tracking-tight">
                LinearScale
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs text-slate-400 font-medium">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToPortfolio && (
              <button
                onClick={onBackToPortfolio}
                className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.08] hover:bg-white/[0.04] transition-colors"
              >
                &larr; View Portfolio
              </button>
            )}

            <a
              href="#pricing"
              className="text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
            >
              Start Free Trial
            </a>
          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>LinearScale 2.0 &bull; Automated Funnel CRO & Heuristic Audits</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.12] mb-6">
            Turn Product Friction Into Revenue. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              Automatically.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            Stop guessing why users abandon your checkout and onboarding. LinearScale continuously evaluates 100+ heuristic UX rules across your customer journeys and deploys high-converting CRO experiments in minutes.
          </p>

          {/* Trial Signup Form */}
          <form onSubmit={handleTrialSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 mb-4">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="clean-input flex-grow text-xs"
            />
            <button
              type="submit"
              className="btn-primary px-5 py-2.5 text-xs font-semibold whitespace-nowrap shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {trialSuccess && (
            <div className="text-xs font-mono text-emerald-400 mb-3 animate-fade-in">
              &check; Check your inbox! Your LinearScale sandbox is provisioning.
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-500">
            <span>&bull; No credit card required</span>
            <span>&bull; 5-minute setup</span>
            <span>&bull; Cancel anytime</span>
          </div>

          {/* High-Fidelity Product UI Dashboard Preview */}
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-[#0F1118] border border-white/[0.1] p-3 shadow-2xl overflow-hidden">
            <div className="bg-[#090A0F] rounded-xl border border-white/[0.06] p-4 sm:p-6 text-left font-mono">
              
              {/* Terminal Chrome */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-xs text-slate-400 ml-2 font-sans font-medium">Checkout Funnel &bull; Heuristic Telemetry Live</span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ● 124 Sessions Analyzed / min
                </span>
              </div>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[10px] text-slate-500 uppercase">Friction Score</div>
                  <div className="text-lg font-bold text-rose-400 mt-0.5">High (78/100)</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[10px] text-slate-500 uppercase">Drop-Off Node</div>
                  <div className="text-lg font-bold text-slate-100 mt-0.5">Step 2: Shipping</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[10px] text-slate-500 uppercase">Revenue Lost / Mo</div>
                  <div className="text-lg font-bold text-amber-400 mt-0.5">$38,400</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[10px] text-slate-500 uppercase">AI Recommendation</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">1-Click Tier Fix</div>
                </div>
              </div>

              {/* Flagged Issue List */}
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-2 text-xs font-sans">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    <span>Heuristic Defect #H-04: Cognitive overload in coupon input field</span>
                  </span>
                  <span className="text-[11px] font-mono text-orange-400 hover:underline cursor-pointer">
                    Deploy Experiment &rarr;
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-normal">
                  64% of drop-offs occur when coupon code fails validation without inline error feedback.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SOCIAL PROOF LOGO CLOUD */}
      {/* ======================================================== */}
      <section className="py-12 border-t border-b border-white/[0.06] bg-[#0C0E14] text-center">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Trusted by product, growth & engineering leaders at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm font-semibold text-slate-400">
            <span className="hover:text-white transition-colors">OnePlus D2C</span>
            <span className="hover:text-white transition-colors">Innovist Group</span>
            <span className="hover:text-white transition-colors">D-DZIRE Luxury</span>
            <span className="hover:text-white transition-colors">FinScale App</span>
            <span className="hover:text-white transition-colors">Swash Global</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PAIN POINTS SECTION */}
      {/* ======================================================== */}
      <section className="py-20 section-divider">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              The Funnel Leak Problem
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why Traditional Analytics Leave Growth Teams In The Dark
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.07] space-y-3">
                <div className="text-sm font-mono font-bold text-orange-400">
                  {p.number}
                </div>
                <h3 className="text-base font-semibold text-slate-100">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. QUANTIFIED BENEFITS */}
      {/* ======================================================== */}
      <section className="py-20 section-divider bg-[#0C0E14]">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.06]">
              <div className="text-3xl font-bold text-slate-100 font-mono tracking-tight">+22%</div>
              <div className="text-xs font-medium text-slate-300 mt-1">UX Defect Elimination</div>
              <p className="text-[11px] text-slate-500 mt-2">Automated resolution of cognitive barriers across user journeys.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.06]">
              <div className="text-3xl font-bold text-slate-100 font-mono tracking-tight">+15%</div>
              <div className="text-xs font-medium text-slate-300 mt-1">Completion Velocity</div>
              <p className="text-[11px] text-slate-500 mt-2">Accelerates task flow completion from landing to checkout.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.06]">
              <div className="text-3xl font-bold text-slate-100 font-mono tracking-tight">3.4x</div>
              <div className="text-xs font-medium text-slate-300 mt-1">CAC:LTV Efficiency</div>
              <p className="text-[11px] text-slate-500 mt-2">Maximizes repeat order conversion via automated CRM triggers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.06]">
              <div className="text-3xl font-bold text-slate-100 font-mono tracking-tight">2.4 kB</div>
              <div className="text-xs font-medium text-slate-300 mt-1">Ultra-Lightweight SDK</div>
              <p className="text-[11px] text-slate-500 mt-2">Zero impact on Core Web Vitals or page load performance.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FEATURE GRID */}
      {/* ======================================================== */}
      <section id="features" className="py-20 section-divider">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              Engineered for Product & Growth
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Complete Funnel Telemetry & Autonomous CRO Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.07] space-y-3 hover:border-white/[0.15] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-orange-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-100">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. HOW IT WORKS (WORKFLOW) */}
      {/* ======================================================== */}
      <section id="how-it-works" className="py-20 section-divider bg-[#0C0E14]">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              Three-Step Implementation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              From Integration To Revenue Lift in 48 Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((w, idx) => (
              <div key={idx} className="relative space-y-3">
                <div className="text-4xl font-bold text-orange-500/30 font-mono">
                  {w.step}
                </div>
                <h3 className="text-base font-semibold text-slate-100">
                  {w.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {w.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. PRICING SECTION */}
      {/* ======================================================== */}
      <section id="pricing" className="py-20 section-divider">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              Predictable Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Simple Plans That Scale With Your Product
            </h2>
            
            {/* Billing Switcher */}
            <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  billingCycle === 'monthly' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  billingCycle === 'annual' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] text-orange-600 bg-orange-100 px-1.5 py-0.2 rounded font-bold">20% OFF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`p-7 rounded-2xl flex flex-col justify-between relative ${
                  tier.popular 
                    ? 'bg-[#0F1118] border-2 border-orange-500 shadow-xl' 
                    : 'bg-[#0F1118] border border-white/[0.08]'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-base font-semibold text-slate-100">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 mb-4">{tier.description}</p>
                  
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/[0.06]">
                    <span className="text-3xl sm:text-4xl font-bold text-white font-mono">${tier.price}</span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Included:</div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-2.5 rounded-lg text-xs font-semibold text-center transition-colors ${
                    tier.popular
                      ? 'bg-orange-600 hover:bg-orange-500 text-white'
                      : 'bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08]'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. TESTIMONIALS */}
      {/* ======================================================== */}
      <section id="testimonials" className="py-20 section-divider bg-[#0C0E14]">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              Verified Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What Product Leaders Say About LinearScale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.07] flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-xs font-semibold text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                  <div className="text-[11px] font-mono text-orange-400 font-semibold mt-1">
                    &bull; {t.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. FAQ ACCORDION */}
      {/* ======================================================== */}
      <section id="faq" className="py-20 section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2">
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Everything You Need To Know
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl bg-[#0F1118] border border-white/[0.07] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/[0.04] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. FINAL TRIAL SIGNUP CTA */}
      {/* ======================================================== */}
      <section className="py-20 section-divider bg-[#0C0E14] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto text-orange-400 mb-6">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Eliminate Conversion Drop-Offs?
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            Join high-growth product teams leveraging continuous heuristic evaluation. Start your 14-day free trial with zero setup headaches.
          </p>

          <form onSubmit={handleTrialSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 mb-4">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="clean-input flex-grow text-xs"
            />
            <button
              type="submit"
              className="btn-primary px-5 py-2.5 text-xs font-semibold whitespace-nowrap shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="text-[11px] font-mono text-slate-500">
            14-Day Free Trial &bull; No Credit Card Required &bull; Instant Activation
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-xs font-mono text-slate-500 text-center">
        <div className="max-w-portfolio mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; {new Date().getFullYear()} LinearScale Technologies, Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
