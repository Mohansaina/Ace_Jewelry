"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Minus, Plus, ShieldCheck, Lock, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    addToCart,
  } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingThreshold = 5000; // $5,000 for VIP shipping or free on all as per announcement bar
  const isFreeShipping = subtotal >= shippingThreshold || subtotal > 0; // The announcement says free shipping, let's reinforce it

  const handleCheckout = () => {
    alert("Proceeding to secure GIA-Insured checkout portal...");
  };

  // Luxury Upsell item details
  const velvetBox = {
    id: "upsell-box",
    name: "Luxury LED Velvet Ring Box",
    category: "Accessories",
    price: 95,
    image: "/products/681017570_994787226553745_8764626133904538258_n.jpg", // reuse a close-up image
    rating: 5.0,
    reviewsCount: 42,
    description: "Premium black velvet jewelry box with integrated LED spotlight to showcase your diamond's fire.",
    details: [],
    isBestSeller: false,
    isNew: false,
    metal: "Velvet"
  };

  const isBoxInCart = cart.some((item) => item.product.id === velvetBox.id);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-[#000000]"
          />

          {/* Cart Panel */}
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
                <ShoppingBagIcon className="h-5 w-5 text-secondary" />
                <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-white">
                  Shopping Cart
                </h2>
                <span className="text-xs text-neutral-400 font-sans">
                  ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-neutral-400 hover:text-secondary transition-colors"
                aria-label="Close Cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center px-4">
                  <div className="relative h-20 w-20 mb-6 opacity-30">
                    <Image src="/logo.png" alt="Ace Logo" fill className="object-contain filter grayscale" />
                  </div>
                  <p className="font-serif text-lg tracking-[0.1em] mb-2 text-neutral-300">
                    Your collection is empty.
                  </p>
                  <p className="text-xs text-neutral-500 font-sans max-w-xs mb-8">
                    Discover custom diamond pieces and ring settings tailored to be remembered.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] py-3.5"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                <>
                  {/* Shipping Indicator */}
                  <div className="bg-[#121212] border border-secondary/20 p-4 text-center text-xs tracking-wider font-sans">
                    <p className="text-secondary font-medium uppercase mb-1">
                      ✨ Complimentary VIP Shipping Active
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      Includes GIA certificate protection & fully insured parcel transit.
                    </p>
                  </div>

                  {/* Product List */}
                  <div className="divide-y divide-white/5 space-y-4">
                    {cart.map((item, index) => (
                      <div
                        key={`${item.product.id}-${index}`}
                        className="flex gap-4 pt-4 first:pt-0 group"
                      >
                        <div className="relative h-20 w-20 bg-neutral-900 border border-white/10 shrink-0 overflow-hidden">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-serif text-sm tracking-wide text-neutral-100 line-clamp-1">
                                {item.product.name}
                              </h3>
                              <span className="font-sans text-sm font-semibold text-secondary">
                                ${item.product.price.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-[10px] text-neutral-400 tracking-wider font-sans mt-0.5">
                              {item.product.metal} {item.product.diamondWeight && `• ${item.product.diamondWeight}`}
                            </p>
                            {item.customization && (
                              <p className="text-[9px] text-[#F3E5AB] font-sans mt-1 bg-secondary/5 px-2 py-0.5 border border-secondary/10 inline-block">
                                Customization: {item.customization}
                              </p>
                            )}
                          </div>

                          <div className="flex justify-between items-center mt-2">
                            {/* Quantity Adjuster */}
                            <div className="flex items-center border border-white/10">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 py-1 text-neutral-400 hover:text-white"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 text-xs font-mono">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 py-1 text-neutral-400 hover:text-white"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Luxury Upsell Wrapper */}
                  {!isBoxInCart && (
                    <div className="bg-[#121212] border border-secondary/10 p-4 mt-6">
                      <div className="flex gap-3.5 items-center">
                        <div className="bg-secondary/10 p-2 text-secondary">
                          <Gift className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-[#F3E5AB]">
                            Complete the Presentation
                          </h4>
                          <p className="text-[9px] text-neutral-400 font-sans mt-0.5">
                            Add a plush LED Velvet Ring Box for only $95.
                          </p>
                        </div>
                        <button
                          onClick={() => addToCart(velvetBox as any)}
                          className="text-[10px] text-primary bg-secondary px-3 py-1.5 uppercase font-sans tracking-widest font-bold hover:bg-white hover:text-primary transition-colors shrink-0"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer Summary (Only visible when cart has items) */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#0D0D0D] space-y-4">
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs text-neutral-400 font-sans">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-neutral-400 font-sans">
                    <span>Insured Shipping & Duties</span>
                    <span className="text-secondary font-medium uppercase text-[10px]">Complimentary</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <span className="font-serif text-sm tracking-[0.1em] uppercase">Estimated Total</span>
                    <span className="font-sans text-lg font-bold text-secondary">
                      ${subtotal.toLocaleString()} CAD
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-secondary text-primary font-sans font-bold text-xs uppercase tracking-[0.25em] py-4 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Lock className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                    Secure Checkout
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-sans text-center">
                    <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                    GIA Certificate Protected Checkout. Fully Encured & Insured.
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);
