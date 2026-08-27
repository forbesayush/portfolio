"use client";

import { useState } from "react";
import DiamondNav from "@/components/diamonds/DiamondNav";
import DiamondHero from "@/components/diamonds/DiamondHero";
import DiamondSpecs from "@/components/diamonds/DiamondSpecs";
import ReserveDrawer, { ReserveItem } from "@/components/diamonds/ReserveDrawer";

export default function DiamondsPage() {
  const [items, setItems] = useState<ReserveItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleReserve = (cut: string, carat: string, metal: string, price: number) => {
    const newItem: ReserveItem = {
      id: `${cut}-${carat}-${Date.now()}`,
      cut,
      carat,
      metal,
      price,
    };
    setItems((prev) => [...prev, newItem]);
    setIsDrawerOpen(true);
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-sky-400 selection:text-black">
      <DiamondNav reservedCount={items.length} onOpenDrawer={() => setIsDrawerOpen(true)} />
      <DiamondHero onReserve={handleReserve} />
      <DiamondSpecs />

      <footer className="py-12 border-t border-neutral-900 text-center text-xs font-mono text-neutral-600">
        D-DZIRE JEWELS ANALYTICS © {new Date().getFullYear()} ALL RIGHTS RESERVED. LAB-GROWN FINE DIAMONDS SHOWCASE.
      </footer>

      <ReserveDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={items}
        onRemove={handleRemove}
      />
    </main>
  );
}
