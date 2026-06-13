"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    wishlistOpen,
    setWishlistOpen,
    toggleWishlist,
    addToCart,
  } = useCart();

  const handleMoveToCart = (product: any) => {
    addToCart(product, 1);
    toggleWishlist(product); // Remove from wishlist after moving to cart
  };

  return (
    <AnimatePresence>
      {wishlistOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setWishlistOpen(false)}
            className="fixed inset-0 z-50 bg-[#000000]"
          />

          {/* Wishlist Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0A0A0A] border-l border-secondary/15 flex flex-col text-white shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0D0D0D]">
              <div className="flex items-center gap-2.5">
                <Heart className="h-5 w-5 text-secondary animate-pulse" />
                <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-white">
                  My Wishlist
                </h2>
                <span className="text-xs text-neutral-400 font-sans">
                  ({wishlist.length})
                </span>
              </div>
              <button
                onClick={() => setWishlistOpen(false)}
                className="text-neutral-400 hover:text-secondary transition-colors"
                aria-label="Close Wishlist"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar space-y-6">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center px-4">
                  <Heart className="h-12 w-12 mb-6 text-neutral-600 stroke-[1.5]" />
                  <p className="font-serif text-lg tracking-[0.1em] mb-2 text-neutral-300">
                    Your wishlist is empty.
                  </p>
                  <p className="text-xs text-neutral-500 font-sans max-w-xs mb-8">
                    Save pieces you love to keep track of them for life's special milestones.
                  </p>
                  <button
                    onClick={() => setWishlistOpen(false)}
                    className="w-full border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] py-3.5"
                  >
                    Explore Collections
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-white/5 space-y-4">
                  {wishlist.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-4 pt-4 first:pt-0 group"
                    >
                      {/* Image */}
                      <div className="relative h-20 w-20 bg-neutral-900 border border-white/10 shrink-0 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Info & Action */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-serif text-sm tracking-wide text-neutral-100 line-clamp-1">
                              {product.name}
                            </h3>
                            <span className="font-sans text-sm font-semibold text-secondary">
                              ${product.price.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-400 tracking-wider font-sans mt-0.5">
                            {product.metal} {product.diamondWeight && `• ${product.diamondWeight}`}
                          </p>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          {/* Move to Cart */}
                          <button
                            onClick={() => handleMoveToCart(product)}
                            className="bg-secondary text-primary font-sans font-bold text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-white hover:text-primary transition-colors flex items-center gap-1.5"
                          >
                            <ShoppingBag className="h-3 w-3" /> Move to Cart
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => toggleWishlist(product)}
                            className="text-neutral-500 hover:text-red-400 p-1.5 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
