"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ReserveItem {
  id: string;
  cut: string;
  carat: string;
  metal: string;
  price: number;
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ReserveItem[];
  onRemove: (id: string) => void;
}

export default function ReserveDrawer({ isOpen, onClose, items, onRemove }: DrawerProps) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-950 border-l border-neutral-800 p-8 z-50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-900 mb-6">
                <h2 className="text-xl font-bold text-white font-display">DIAMOND RESERVATION ({items.length})</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-16 text-neutral-500 font-mono text-sm">
                  No diamond consultations requested yet.
                </div>
              ) : (
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                      <div>
                        <h4 className="text-base font-bold text-white mb-1">{item.carat} {item.cut}</h4>
                        <div className="text-xs text-neutral-400 font-mono space-x-2">
                          <span>Setting: {item.metal}</span>
                          <span>|</span>
                          <span>IGI Certified</span>
                        </div>
                        <span className="text-sm font-mono text-sky-400 font-bold mt-2 block">
                          Estimated Valuation: ${item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-xs text-neutral-500 hover:text-red-400 font-mono"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="pt-6 border-t border-neutral-900">
                <div className="flex justify-between text-sm font-mono text-neutral-400 mb-2">
                  <span>Estimated Total</span>
                  <span className="text-white font-bold">${total}</span>
                </div>
                <div className="flex justify-between text-sm font-mono text-neutral-400 mb-6">
                  <span>IGI Grading Certificate</span>
                  <span className="text-emerald-400 font-bold">INCLUDED</span>
                </div>
                <button
                  onClick={() => alert("Consultation request submitted! D-Dzire Jewels team will contact you shortly.")}
                  className="w-full py-4 rounded-xl bg-sky-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-sky-300 transition-colors shadow-lg shadow-sky-400/20"
                >
                  Book Diamond Consultation
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
