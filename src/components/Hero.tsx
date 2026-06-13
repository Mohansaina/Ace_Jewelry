"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Shield, Sparkles, Truck, CheckCircle2 } from "lucide-react";
import { FallingDiamonds } from "./FallingDiamonds";

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-primary flex items-center justify-center">
      {/* Background Parallax Image Container */}
      <div
        className="absolute inset-0 w-full h-full select-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px) scale(1.05)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="/products/641141873_17891113101426391_289757284220690281_n.jpg"
          alt="Luxury Cushion Cut Engagement Ring Background"
          fill
          priority
          className="object-cover opacity-35 filter brightness-50"
        />
        {/* Dark subtle radial gradient for premium vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-radial-vignette" />
      </div>

      {/* Falling Diamonds Canvas Background */}
      <FallingDiamonds />

      {/* Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 flex flex-col items-center">
        {/* Sparkle Tag */}
        <div className="flex items-center gap-2 border border-secondary/20 bg-secondary/5 rounded-full px-4 py-1.5 mb-6 animate-pulse">
          <Sparkles className="h-3.5 w-3.5 text-secondary" />
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#F3E5AB] font-bold">
            Canada's Premier Custom Jeweller
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-5xl md:text-8xl tracking-[0.05em] text-white leading-tight font-extralight mb-6">
          Crafted To Be <br />
          <span className="text-secondary italic font-light font-serif">Remembered.</span>
        </h1>

        {/* Cinematic Subheadline */}
        <p className="text-sm md:text-lg text-neutral-300 font-sans font-light tracking-widest max-w-2xl mb-10 leading-relaxed">
          Custom Diamond Jewelry & GIA-Certified Engagement Rings <br className="hidden md:inline" />
          Designed For Life's Biggest Moments.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <a
            href="#shop"
            className="px-8 py-4 bg-secondary text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl"
          >
            Shop Collection
          </a>
          <a
            href="#custom"
            className="px-8 py-4 border border-secondary text-secondary font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary transition-all duration-300"
          >
            Design Your Piece
          </a>
        </div>

        {/* Floating Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 border border-secondary/20">
              <Shield className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#F3E5AB]">
                GIA Certified
              </p>
              <p className="text-[9px] text-neutral-400 font-sans tracking-wide">
                Natural & Lab-Grown
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 border border-secondary/20">
              <Truck className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#F3E5AB]">
                VIP Shipping
              </p>
              <p className="text-[9px] text-neutral-400 font-sans tracking-wide">
                Fully Insured in Canada
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 border border-secondary/20">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#F3E5AB]">
                Lifetime Warranty
              </p>
              <p className="text-[9px] text-neutral-400 font-sans tracking-wide">
                Crafted to Last
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 border border-secondary/20">
              <svg
                className="h-5 w-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#F3E5AB]">
                Secure Escrow
              </p>
              <p className="text-[9px] text-neutral-400 font-sans tracking-wide">
                100% Insured Escrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
