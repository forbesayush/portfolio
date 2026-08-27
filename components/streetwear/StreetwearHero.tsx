"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Jacket3DCanvas = dynamic(() => import("./Jacket3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center text-neutral-600 text-xs font-mono">
      INITIALIZING 3D MATERIAL ENGINE...
    </div>
  ),
});

interface HeroProps {
  onAddToCart: (color: string, size: string) => void;
}

const COLOR_OPTIONS = [
  { name: "Thermal Orange", hex: "#ff4500" },
  { name: "Stealth Black", hex: "#18181b" },
  { name: "Cyber Silver", hex: "#94a3b8" },
];

const SIZES = ["S", "M", "L", "XL"];

export default function StreetwearHero({ onAddToCart }: HeroProps) {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState("L");
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(selectedColor.name, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Product Info & Actions */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-6 flex flex-col justify-center"
      >
        <div className="flex items-center space-x-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-widest">
            LIMITED DROP // 100 PIECES WORLDWIDE
          </span>
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-xs uppercase">
            81% OFF
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95] mb-6">
          STAND OUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-white">
            WITHOUT TRYING.
          </span>
        </h1>

        <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
          Architectural thermal insulation jacket engineered with GORE-TEX 3-layer membrane, 800-fill power goose down, and encrypted NFC authenticity tag.
        </p>

        {/* Pricing Callout */}
        <div className="flex items-baseline space-x-4 mb-8">
          <span className="text-4xl md:text-5xl font-extrabold text-white font-mono">$149</span>
          <span className="text-xl font-mono text-neutral-600 line-through">$799</span>
          <span className="text-xs text-orange-400 font-mono">Free Worldwide Express Shipping</span>
        </div>

        {/* Color Swatch Picker */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Colorway: <span className="text-white font-semibold">{selectedColor.name}</span>
          </span>
          <div className="flex items-center space-x-4">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColor.name === c.name ? "border-orange-500 scale-110 shadow-lg shadow-orange-500/20" : "border-neutral-800 hover:border-neutral-600"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Select Size (Regular Fit)
          </span>
          <div className="flex items-center space-x-3">
            {SIZES.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`w-12 h-12 rounded-xl font-mono text-sm font-bold border transition-all ${
                  selectedSize === sz
                    ? "bg-white text-black border-white shadow-md shadow-white/10"
                    : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleAdd}
            className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all transform active:scale-95 ${
              addedAnimation
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30"
                : "bg-orange-500 text-black hover:bg-orange-400 shadow-xl shadow-orange-500/20"
            }`}
          >
            {addedAnimation ? "✓ Added To Bag" : "Add To Bag — $149"}
          </button>
        </div>
      </motion.div>

      {/* Right Column: 3D Interactive WebGL Model */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="lg:col-span-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-sky-500/10 blur-3xl pointer-events-none" />
        <Jacket3DCanvas color={selectedColor.hex} />
      </motion.div>
    </section>
  );
}
