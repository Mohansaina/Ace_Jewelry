"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Sparkles, Eye, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const RingShowcase: React.FC = () => {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedShape, setSelectedShape] = useState("Round");

  const shapes = [
    { name: "Round", label: "Round Brilliant", id: "ace-1" },
    { name: "Oval", label: "Oval Cut", id: "ace-2" },
    { name: "Emerald", label: "Emerald Cut", id: "ace-3" },
    { name: "Cushion", label: "Cushion Cut", id: "ace-5" },
    { name: "Heart", label: "Heart Cut", id: "ace-21" },
  ];

  // Find the selected product matching the shape's product ID
  const activeProduct = products.find((p) => p.id === shapes.find((s) => s.name === selectedShape)?.id) || products[0];

  return (
    <section id="rings" className="py-24 md:py-32 bg-white text-primary px-6 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Bespoke Solitaires
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light">
            Engagement Ring Showcase
          </h2>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* Diamond Shape Selector Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 max-w-4xl mx-auto">
          {shapes.map((shape) => (
            <button
              key={shape.name}
              onClick={() => setSelectedShape(shape.name)}
              className={`flex flex-col items-center gap-3 px-6 py-5 border transition-all duration-300 w-32 md:w-36 ${
                selectedShape === shape.name
                  ? "border-secondary bg-secondary/5 text-primary shadow-md"
                  : "border-neutral-100 text-neutral-400 hover:border-neutral-300 hover:text-neutral-700"
              }`}
            >
              {/* Custom SVG Drawing for Diamond Shapes */}
              <div className="h-10 w-10 flex items-center justify-center">
                {shape.name === "Round" && (
                  <svg className={`h-8 w-8 ${selectedShape === "Round" ? "text-secondary" : "text-neutral-300"}`} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path d="M12 2L4.5 9.5M12 2L19.5 9.5M4.5 9.5L12 22M19.5 9.5L12 22M4.5 9.5h15M7.5 14h9M10 18h4" />
                  </svg>
                )}
                {shape.name === "Oval" && (
                  <svg className={`h-8 w-8 ${selectedShape === "Oval" ? "text-secondary" : "text-neutral-300"}`} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <ellipse cx="12" cy="12" rx="6" ry="9" />
                    <path d="M12 3v18M6 12h12" />
                  </svg>
                )}
                {shape.name === "Emerald" && (
                  <svg className={`h-8 w-8 ${selectedShape === "Emerald" ? "text-secondary" : "text-neutral-300"}`} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <rect x="8" y="6" width="8" height="12" rx="1" />
                    <path d="M5 3l3 3M19 3l-3 3M5 21l3-3M19 21l-3-3" />
                  </svg>
                )}
                {shape.name === "Cushion" && (
                  <svg className={`h-8 w-8 ${selectedShape === "Cushion" ? "text-secondary" : "text-neutral-300"}`} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path d="M12 2c6 0 10 4 10 10s-4 10-10 10S2 18 2 12 6 2 12 2z" />
                    <path d="M7 7h10v10H7z" />
                    <path d="M2 12h20M12 2v20" />
                  </svg>
                )}
                {shape.name === "Heart" && (
                  <svg className={`h-8 w-8 ${selectedShape === "Heart" ? "text-secondary" : "text-neutral-300"}`} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </div>
              <span className="text-[10px] uppercase font-sans tracking-widest font-semibold">
                {shape.name}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedShape}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center bg-neutral-50 p-6 md:p-12 border border-neutral-100"
          >
            {/* Image Column */}
            <div className="relative aspect-square w-full lg:col-span-6 bg-white overflow-hidden shadow-md group">
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full py-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="text-[9px] text-secondary font-sans uppercase tracking-[0.25em] font-bold">
                    GIA Certified Settings
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-4xl tracking-wide mb-4 font-normal text-primary">
                  {activeProduct.name}
                </h3>

                <p className="text-neutral-500 font-sans text-sm tracking-wider leading-relaxed mb-6">
                  {activeProduct.description}
                </p>

                {/* Specs List */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <span className="text-[9px] text-neutral-400 font-sans uppercase tracking-widest block mb-1">
                      Carat Weight
                    </span>
                    <span className="text-xs font-sans font-semibold text-primary">
                      {activeProduct.diamondWeight || "2.5ct"} Center
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-400 font-sans uppercase tracking-widest block mb-1">
                      Metal Type
                    </span>
                    <span className="text-xs font-sans font-semibold text-primary">
                      {activeProduct.metal}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-400 font-sans uppercase tracking-widest block mb-1">
                      Clarity & Color
                    </span>
                    <span className="text-xs font-sans font-semibold text-primary">
                      VVS1 Clarity, E-F Colorless
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-400 font-sans uppercase tracking-widest block mb-1">
                      Appraisal Report
                    </span>
                    <span className="text-xs font-sans font-semibold text-secondary">
                      Complimentary Included
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-semibold text-primary font-sans">
                    ${activeProduct.price.toLocaleString()}
                  </span>
                  <span className="text-[9px] text-neutral-400 font-sans uppercase tracking-widest">
                    CAD Valued
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => addToCart(activeProduct, 1)}
                    className="flex-1 bg-primary text-white font-sans font-bold text-xs uppercase tracking-[0.2em] py-4.5 hover:bg-secondary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </button>
                  <button
                    onClick={() => setQuickViewProduct(activeProduct)}
                    className="px-6 py-4.5 border border-primary text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="h-4 w-4" /> Customize Setting
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
