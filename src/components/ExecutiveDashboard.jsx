import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Layers, Target, ShieldCheck, CheckCircle2, ArrowRight, Zap, RefreshCw, ShoppingBag, Globe2, Activity } from 'lucide-react';
import { heroTelemetry } from '../data/portfolioData';

export default function ExecutiveDashboard() {
  const [activeTab, setActiveTab] = useState('funnel'); // 'funnel' | 'economics' | 'frameworks'
  const [selectedFunnelStage, setSelectedFunnelStage] = useState(0);

  const funnelStages = [
    {
      stage: 'TOFU • DISCOVERY',
      name: 'Awareness & Audience Segmentation',
      kpi: 'High-Converting Creative Matrix',
      benchmark: '3.8% CTR (Top Decile)',
      playbook: 'Deploying pattern-interrupt video creative angles and granular STP segmentation tailored to awareness levels.',
      channels: ['Meta Ads', 'Google Performance Max', 'Creator Partnerships'],
      metrics: [
        { label: 'Attributed Reach', value: '4.8M+' },
        { label: 'Cost Per Click', value: '-18%' },
        { label: 'Hook Retention', value: '42%' }
      ]
    },
    {
      stage: 'MOFU • CONSIDERATION',
      name: 'Product Education & Frictionless Navigation',
      kpi: 'Exploratory Flow Completion',
      benchmark: '68% Engagement Rate',
      playbook: 'Eliminating UI cognitive overload, streamlining heuristic pathways, and highlighting trust anchors.',
      channels: ['Mobile PDPs', 'Interactive Bundles', 'Social Proof Widgets'],
      metrics: [
        { label: 'Task Flow Velocity', value: '+15%' },
        { label: 'UX Defect Cut', value: '-22%' },
        { label: 'PDP Bounce Drop', value: '-14%' }
      ]
    },
    {
      stage: 'BOFU • CONVERSION',
      name: 'Checkout CRO & Dynamic Cart Tiering',
      kpi: 'Average Order Value Lift',
      benchmark: '+24% Blended AOV',
      playbook: 'Architecting dynamic volume discounts (Buy 2 Get 1) and 1-click accelerated checkout with zero payment friction.',
      channels: ['Shopify Plus', 'Stripe / Express Pay', 'Dynamic Cart Drawer'],
      metrics: [
        { label: 'Checkout Conversion', value: '4.2%' },
        { label: 'Cart Abandonment Cut', value: '-19%' },
        { label: 'AOV Increase', value: '+24%' }
      ]
    },
    {
      stage: 'RETENTION • LTV',
      name: 'Predictive Replenishment & CRM Loops',
      kpi: 'CAC : LTV Multiplier',
      benchmark: '3.4x CAC : LTV Ratio',
      playbook: 'Automating predictive Klaviyo email/SMS replenishment flows timed to consumer consumption cycles (30/45/60 days).',
      channels: ['Klaviyo Automation', 'WhatsApp VIP Flows', 'Tiered Loyalty'],
      metrics: [
        { label: 'Repeat Deficit Cut', value: '17%' },
        { label: '60-Day Repeat Rate', value: '38%' },
        { label: 'LTV Multiplier', value: '3.4x' }
      ]
    }
  ];

  const currentStage = funnelStages[selectedFunnelStage];

  return (
    <section id="dashboard" className="py-24 bg-[#FFFFFF] border-t border-b border-black/[0.06] text-left text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAFAF8] border border-[#B38F5B]/30 text-[#8A6B3D] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B38F5B]"></span>
              <span>EXECUTIVE GROWTH & TELEMETRY STUDIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#111318] tracking-tight uppercase">
              Interactive Growth Dashboard.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans mt-3 font-normal leading-relaxed">
              Live simulation panels deconstructing unit economics, full-funnel CRO telemetry, and cross-border commercial scale.
            </p>
          </div>

          {/* Top Panel Navigation Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#FAFAF8] border border-black/[0.06] shadow-inner text-xs font-mono font-semibold">
            <button
              onClick={() => setActiveTab('funnel')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'funnel' ? 'bg-[#FFFFFF] text-[#111318] shadow-sm font-bold border border-black/[0.06]' : 'text-slate-500 hover:text-black'
              }`}
            >
              Full-Funnel Simulator
            </button>
            <button
              onClick={() => setActiveTab('economics')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'economics' ? 'bg-[#FFFFFF] text-[#111318] shadow-sm font-bold border border-black/[0.06]' : 'text-slate-500 hover:text-black'
              }`}
            >
              Unit Economics
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'frameworks' ? 'bg-[#FFFFFF] text-[#111318] shadow-sm font-bold border border-black/[0.06]' : 'text-slate-500 hover:text-black'
              }`}
            >
              Strategic Moats
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PANEL 1: FULL-FUNNEL CRO SIMULATOR PANEL */}
        {/* ======================================================== */}
        {activeTab === 'funnel' && (
          <div className="space-y-6">
            
            {/* 4-Stage Horizontal Pipeline Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {funnelStages.map((stage, idx) => {
                const isActive = selectedFunnelStage === idx;
                return (
                  <button
                    key={stage.stage}
                    onClick={() => setSelectedFunnelStage(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isActive
                        ? 'bg-[#FAFAF8] border-[#B38F5B] shadow-sm ring-1 ring-[#B38F5B]/30'
                        : 'bg-[#FFFFFF] border-black/[0.06] hover:border-black/[0.15]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono font-bold uppercase ${
                        isActive ? 'text-[#8A6B3D]' : 'text-slate-400'
                      }`}>
                        {stage.stage.split('•')[0]}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-luxury font-bold text-[#111318] truncate">
                      {stage.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Deep Dive Panel */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF8] border border-black/[0.08] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8A6B3D] tracking-widest font-bold mb-1">
                    STAGE 0{selectedFunnelStage + 1} &bull; {currentStage.stage}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-luxury font-bold text-[#111318]">
                    {currentStage.name}
                  </h3>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#8A6B3D]" />
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase">Benchmark Target</div>
                    <div className="text-sm font-luxury font-bold text-[#111318]">{currentStage.benchmark}</div>
                  </div>
                </div>
              </div>

              {/* Playbook & Channels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-[#8A6B3D] tracking-wider">
                    Tactical Execution Playbook
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {currentStage.playbook}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-[#8A6B3D] tracking-wider">
                    Integrated Growth Channels
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentStage.channels.map((ch, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-[#FAFAF8] border border-black/[0.06] text-xs font-mono text-slate-700 font-semibold">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Telemetry Metrics */}
              <div>
                <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-3">
                  Measured Optimization Telemetry
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentStage.metrics.map((met, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm text-left">
                      <div className="text-2xl font-luxury font-bold text-[#111318]">{met.value}</div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{met.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* PANEL 2: UNIT ECONOMICS TELEMETRY PANEL */}
        {/* ======================================================== */}
        {activeTab === 'economics' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF8] border border-black/[0.08] shadow-sm space-y-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-luxury font-bold text-[#111318]">
                Unit Economics & Profitability Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Deconstructing commercial margins to ensure sustainable CAC paybacks and maximized Customer Lifetime Value (LTV).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Customer Acquisition Cost (CAC)</div>
                <div className="text-2xl font-luxury font-bold text-[#111318]">Optimized Payback</div>
                <div className="text-[11px] text-emerald-600 font-semibold font-mono">1.2 Month Payback Window</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Average Order Value (AOV)</div>
                <div className="text-2xl font-luxury font-bold text-[#111318]">+24% Lift</div>
                <div className="text-[11px] text-emerald-600 font-semibold font-mono">Dynamic Tiering (B2G1)</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">CAC : LTV Multiplier</div>
                <div className="text-2xl font-luxury font-bold text-[#8A6B3D]">3.4x Ratio</div>
                <div className="text-[11px] text-emerald-600 font-semibold font-mono">Top Decile D2C Benchmark</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Storefronts Telemetry</div>
                <div className="text-2xl font-luxury font-bold text-[#111318]">5 Markets</div>
                <div className="text-[11px] text-emerald-600 font-semibold font-mono">0% Inventory Variance</div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PANEL 3: STRATEGIC MOATS & FRAMEWORKS PANEL */}
        {/* ======================================================== */}
        {activeTab === 'frameworks' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF8] border border-black/[0.08] shadow-sm space-y-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-luxury font-bold text-[#111318]">
                Strategic Moats & Problem Solving Frameworks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Applying rigorous management consulting tools to build defensible competitive advantage and pricing power.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-[#8A6B3D]">
                  01 &bull; STP MARKET POSITIONING
                </div>
                <h4 className="text-base font-luxury font-bold text-[#111318]">
                  Segmentation & Brand Moats
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Carving distinct demographic and psychographic customer tiers to command pricing power and reduce ad-spend fatigue.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-[#8A6B3D]">
                  02 &bull; MECE PROBLEM DECOMPOSITION
                </div>
                <h4 className="text-base font-luxury font-bold text-[#111318]">
                  Mutually Exclusive Issue Trees
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structuring complex growth bottlenecks into prioritized root-cause trees with clear, accountable deliverables.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-[#8A6B3D]">
                  03 &bull; PORTER'S FIVE FORCES
                </div>
                <h4 className="text-base font-luxury font-bold text-[#111318]">
                  Defensible Industry Economics
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Analyzing supplier leverage, buyer switching costs, and substitute threats to safeguard long-term contribution margins.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
