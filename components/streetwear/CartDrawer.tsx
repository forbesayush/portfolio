"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemove }: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-950 border-l border-neutral-800 p-8 z-50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-900 mb-6">
                <h2 className="text-xl font-bold text-white font-display">YOUR BAG ({items.length})</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-16 text-neutral-500 font-mono text-sm">
                  Your bag is currently empty.
                </div>
              ) : (
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                      <div>
                        <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                        <div className="text-xs text-neutral-400 font-mono space-x-2">
                          <span>Color: {item.color}</span>
                          <span>|</span>
                          <span>Size: {item.size}</span>
                        </div>
                        <span className="text-sm font-mono text-orange-400 font-bold mt-2 block">
                          ${item.price} x {item.quantity}
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
                  <span>Subtotal</span>
                  <span className="text-white font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm font-mono text-neutral-400 mb-6">
                  <span>Shipping</span>
                  <span className="text-emerald-400 font-bold">FREE</span>
                </div>
                <button
                  onClick={() => alert("Proceeding to secure stripe checkout...")}
                  className="w-full py-4 rounded-xl bg-orange-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20"
                >
                  Checkout Now — ${subtotal}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
