"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Star, Heart, ShoppingBag, Eye } from "lucide-react";

export const BestSellers: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useCart();
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Engagement Rings", "Diamond Chains", "Pendants", "Custom Pieces"];

  const filteredProducts = products.filter((p) => {
    if (activeTab === "All") return p.isBestSeller; // Only display best sellers in the All tab
    return p.category === activeTab;
  });

  return (
    <section id="shop" className="py-24 md:py-32 bg-[#0A0A0A] text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Signature Creations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light text-white">
            The Best Sellers Collection
          </h2>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === tab
                  ? "bg-secondary text-primary font-bold shadow-lg"
                  : "border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {tab === "All" ? "Top Sellers" : tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => {
            const isFavorited = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between bg-[#0F0F0F] border border-white/5 p-4 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative aspect-square w-full bg-[#121212] overflow-hidden mb-5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.isBestSeller && (
                      <span className="bg-secondary text-primary font-sans font-bold text-[8px] uppercase tracking-widest px-2.5 py-1">
                        Best Seller
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-white text-primary font-sans font-bold text-[8px] uppercase tracking-widest px-2.5 py-1">
                        New In
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                      isFavorited
                        ? "bg-secondary text-primary"
                        : "bg-black/40 text-white hover:text-secondary hover:bg-black/60"
                    }`}
                    aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
                  </button>

                  {/* Interactive Quick View / Add to Cart Drawer Hover Cover */}
                  <div className="absolute inset-0 bg-primary/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3.5 z-10">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="w-40 py-2.5 bg-white text-primary font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="h-3.5 w-3.5" /> Quick View
                    </button>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-40 py-2.5 bg-secondary text-primary font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" /> Add To Cart
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category */}
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-sans block mb-1">
                      {product.category}
                    </span>
                    {/* Product name */}
                    <h3 className="font-serif text-[15px] tracking-wide text-neutral-100 group-hover:text-secondary transition-colors duration-300 line-clamp-1 mb-2">
                      {product.name}
                    </h3>
                  </div>

                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center text-secondary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) ? "fill-current" : "opacity-30"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-400 font-sans">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    {/* Price and Add button */}
                    <div className="flex justify-between items-center pt-2 border-t border-white/5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans font-semibold text-sm text-secondary">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="font-sans text-[11px] line-through text-neutral-500">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="text-[10px] uppercase tracking-widest text-[#F3E5AB] font-sans hover:text-white transition-colors py-1 px-2 border border-[#F3E5AB]/20 hover:border-white"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
