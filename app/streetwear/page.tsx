"use client";

import { useState } from "react";
import StreetwearNav from "@/components/streetwear/StreetwearNav";
import StreetwearHero from "@/components/streetwear/StreetwearHero";
import ProductSpecs from "@/components/streetwear/ProductSpecs";
import CartDrawer, { CartItem } from "@/components/streetwear/CartDrawer";

export default function StreetwearPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (color: string, size: string) => {
    const newItem: CartItem = {
      id: `${color}-${size}-${Date.now()}`,
      name: "NEO-DROP // Puffer Jacket",
      color,
      size,
      price: 149,
      quantity: 1,
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-orange-500 selection:text-black">
      <StreetwearNav cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
      <StreetwearHero onAddToCart={handleAddToCart} />
      <ProductSpecs />

      <footer className="py-12 border-t border-neutral-900 text-center text-xs font-mono text-neutral-600">
        NEO-DROP ARCHITECTURE © {new Date().getFullYear()} ALL RIGHTS RESERVED. LIMITED EDITION DROP 04.
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />
    </main>
  );
}
