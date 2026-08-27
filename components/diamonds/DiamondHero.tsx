"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Diamond3DCanvas = dynamic(() => import("./Diamond3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center text-neutral-500 text-xs font-mono">
      INITIALIZING REFRACTIVE DIAMOND RAYS...
    </div>
  ),
});

interface HeroProps {
  onReserve: (cut: string, carat: string, metal: string, price: number) => void;
}

const CUTS = ["Brilliant Round", "Emerald Cut", "Oval Cut", "Cushion Cut"];
const CARATS = [
  { label: "1.5 CT", price: 1890 },
  { label: "2.0 CT", price: 2490 },
  { label: "3.0 CT", price: 3950 },
  { label: "5.0 CT", price: 6800 },
];
const METALS = [
  { name: "18K Platinum", hex: "#e2e8f0" },
  { name: "Rose Gold", hex: "#fecdd3" },
  { name: "Yellow Gold", hex: "#fde047" },
];

export default function DiamondHero({ onReserve }: HeroProps) {
  const [selectedCut, setSelectedCut] = useState(CUTS[0]);
  const [selectedCarat, setSelectedCarat] = useState(CARATS[1]);
  const [selectedMetal, setSelectedMetal] = useState(METALS[0]);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleReserve = () => {
    onReserve(selectedCut, selectedCarat.label, selectedMetal.name, selectedCarat.price);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Diamond Specs & Portfolio Story */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-6 flex flex-col justify-center"
      >
        <div className="flex items-center space-x-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs uppercase tracking-widest">
            D-DZIRE JEWELS // FOCO RETAIL ANALYTICS
          </span>
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-xs uppercase">
            IGI CERTIFIED
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95] mb-6">
          ELEGANCE REDEFINED. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
            SUSTAINABLY CRAFTED.
          </span>
        </h1>

        <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
          Type IIa chemical vapor deposition (CVD) lab-grown diamonds. Powered by custom Excel/Power BI retail forecasting models that reduced operational error rates by 10%.
        </p>

        {/* Pricing Callout */}
        <div className="flex items-baseline space-x-4 mb-8">
          <span className="text-4xl md:text-5xl font-extrabold text-white font-mono">${selectedCarat.price}</span>
          <span className="text-xl font-mono text-neutral-600 line-through">${(selectedCarat.price * 4.5).toLocaleString()}</span>
          <span className="text-xs text-sky-400 font-mono">80% Value Efficiency vs. Mined</span>
        </div>

        {/* Cut Selector */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Select Cut: <span className="text-white font-semibold">{selectedCut}</span>
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CUTS.map((cut) => (
              <button
                key={cut}
                onClick={() => setSelectedCut(cut)}
                className={`py-2 px-3 rounded-lg font-mono text-xs border transition-all ${
                  selectedCut === cut
                    ? "bg-sky-400 text-black border-sky-400 font-bold shadow-lg shadow-sky-400/20"
                    : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {cut}
              </button>
            ))}
          </div>
        </div>

        {/* Carat Selector */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Select Carat Weight
          </span>
          <div className="flex items-center space-x-3">
            {CARATS.map((crt) => (
              <button
                key={crt.label}
                onClick={() => setSelectedCarat(crt)}
                className={`w-16 h-12 rounded-xl font-mono text-xs font-bold border transition-all ${
                  selectedCarat.label === crt.label
                    ? "bg-white text-black border-white shadow-md shadow-white/10"
                    : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {crt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Metal Selector */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Metal Setting: <span className="text-white font-semibold">{selectedMetal.name}</span>
          </span>
          <div className="flex items-center space-x-4">
            {METALS.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelectedMetal(m)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedMetal.name === m.name ? "border-sky-400 scale-110 shadow-lg shadow-sky-400/20" : "border-neutral-800 hover:border-neutral-600"
                }`}
                style={{ backgroundColor: m.hex }}
                title={m.name}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleReserve}
            className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all transform active:scale-95 ${
              addedAnimation
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30"
                : "bg-sky-400 text-black hover:bg-sky-300 shadow-xl shadow-sky-400/20"
            }`}
          >
            {addedAnimation ? "✓ Reserved Consultation" : `Reserve ${selectedCarat.label} Diamond — $${selectedCarat.price}`}
          </button>
        </div>
      </motion.div>

      {/* Right Column: 3D Refractive Diamond Model */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="lg:col-span-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />
        <Diamond3DCanvas metalColor={selectedMetal.hex} />
      </motion.div>
    </section>
  );
}
