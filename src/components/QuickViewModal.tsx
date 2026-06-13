"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Star, Heart, ShoppingBag, ShieldCheck, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useCart();

  const [selectedSize, setSelectedSize] = useState("7");
  const [selectedMetal, setSelectedMetal] = useState("");
  const [customText, setCustomText] = useState("");

  if (!quickViewProduct) return null;

  const isRings = quickViewProduct.category.includes("Rings") || quickViewProduct.category.includes("Bands");
  const isCustom = quickViewProduct.category.includes("Custom");

  const metalOptions = ["18K Yellow Gold", "18K White Gold", "Platinum"];
  const ringSizes = ["5", "6", "7", "8", "9", "10"];

  const currentMetal = selectedMetal || quickViewProduct.metal;
  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    let customNotes = `Metal: ${currentMetal}`;
    if (isRings) customNotes += `, Size: ${selectedSize}`;
    if (isCustom && customText.trim()) customNotes += `, Name: "${customText}"`;
    
    addToCart(quickViewProduct, 1, customNotes);
    setQuickViewProduct(null); // Close modal after adding
    // Reset states
    setSelectedMetal("");
    setSelectedSize("7");
    setCustomText("");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/90"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-primary text-white border border-secondary/20 shadow-2xl p-6 md:p-10 my-8 overflow-hidden luxury-glass"
        >
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-secondary transition-colors z-10"
            aria-label="Close Modal"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image Column */}
            <div className="relative aspect-square w-full bg-[#121212] border border-white/5 overflow-hidden">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              {quickViewProduct.isBestSeller && (
                <span className="absolute top-4 left-4 bg-secondary text-primary font-sans font-bold text-[9px] uppercase tracking-widest px-3 py-1">
                  Best Seller
                </span>
              )}
            </div>

            {/* Info Column */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold">
                  {quickViewProduct.category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-neutral-100 mt-2 mb-3">
                  {quickViewProduct.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center text-secondary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.floor(quickViewProduct.rating) ? "fill-current" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 font-sans">
                    {quickViewProduct.rating.toFixed(1)} ({quickViewProduct.reviewsCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-semibold text-secondary font-sans">
                    ${quickViewProduct.price.toLocaleString()}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm line-through text-neutral-500 font-sans">
                      ${quickViewProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest ml-2">CAD</span>
                </div>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                  {quickViewProduct.description}
                </p>

                {/* Configurations */}
                <div className="space-y-4 mb-8">
                  {/* Metal Choice */}
                  <div>
                    <label className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-2">
                      Metal Finish
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {metalOptions.map((metal) => (
                        <button
                          key={metal}
                          onClick={() => setSelectedMetal(metal)}
                          className={`px-3 py-1.5 border text-xs tracking-wider transition-all duration-300 font-sans ${
                            currentMetal === metal
                              ? "border-secondary text-secondary bg-secondary/5 font-medium"
                              : "border-white/10 text-white/70 hover:border-white/30"
                          }`}
                        >
                          {metal}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ring Sizing */}
                  {isRings && (
                    <div>
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-2">
                        Ring Size (US)
                      </label>
                      <div className="flex gap-2">
                        {ringSizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-8 w-8 rounded-none border text-xs flex items-center justify-center transition-all duration-300 font-mono ${
                              selectedSize === size
                                ? "border-secondary text-secondary bg-secondary/5"
                                : "border-white/10 text-white/70 hover:border-white/30"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Custom Name / Word */}
                  {isCustom && (
                    <div>
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-2">
                        Custom Text / Name (Up to 10 characters)
                      </label>
                      <input
                        type="text"
                        maxLength={10}
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="e.g. LEGEND"
                        className="w-full max-w-xs bg-[#121212] text-white border border-white/10 px-4 py-2.5 text-xs focus:outline-none focus:border-secondary font-sans placeholder-white/20 tracking-widest uppercase"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-secondary text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className={`border p-4 transition-all duration-300 flex items-center justify-center ${
                      isFavorited
                        ? "border-secondary bg-secondary/5 text-secondary"
                        : "border-white/10 hover:border-white/30 text-white hover:text-secondary"
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
                  </button>
                </div>

                {/* Gurarantees snippet */}
                <div className="flex justify-between text-[9px] text-neutral-400 font-sans pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-secondary" /> Insured Delivery
                  </span>
                  <span className="flex items-center gap-1">
                    <RefreshCw className="h-3 w-3 text-secondary" /> Easy Sizing Exchange
                  </span>
                  <span>100% Certified Diamond</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
