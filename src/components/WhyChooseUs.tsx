"use client";

import React from "react";
import { Award, ShieldAlert, Hammer, Lock, Truck, Trophy } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-secondary" />,
      title: "GIA Certified Diamonds",
      desc: "Every diamond above 0.5ct is natural or lab-grown and accompanied by an official GIA or IGI laboratory certificate verifying its cut, clarity, color, and carat weight.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-secondary" />,
      title: "Lifetime Warranty",
      desc: "Our lifetime craftsmanship warranty protects your purchase against manufacturing defects, stone security shifts, and offers complimentary annual cleaning and inspections.",
    },
    {
      icon: <Hammer className="h-6 w-6 text-secondary" />,
      title: "Custom Manufacturing",
      desc: "Unlike standard stores, we design, render, cast, set, and polish all custom orders in our private Toronto boutique workshop. No middleman, no outsourced factories.",
    },
    {
      icon: <Lock className="h-6 w-6 text-secondary" />,
      title: "Secure Payment Escrow",
      desc: "Transact with complete peace of mind. We offer encrypted GIA insured payments, bank wire discounts, and flexible high-end financing options through Affirm and Splitit.",
    },
    {
      icon: <Truck className="h-6 w-6 text-secondary" />,
      title: "Complimentary Insured Shipping",
      desc: "Every parcel shipped across Canada is fully insured from our door to yours. Signature verification required. Overnight transport options are available.",
    },
    {
      icon: <Trophy className="h-6 w-6 text-secondary" />,
      title: "Master Bench Craftsmanship",
      desc: "With 15+ years of bespoke jewelry creation, our master setters handcraft each honeycomb plate and prong layout under high magnification for flawless alignment.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] text-white px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Unrivalled Quality
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light">
            Why Choose Ace Jewellers
          </h2>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-[#0F0F0F] border border-white/5 p-8 hover:border-secondary/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="bg-secondary/5 border border-secondary/15 h-12 w-12 flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide mb-3 text-neutral-100 group-hover:text-secondary transition-colors duration-300">
                {feat.title}
              </h3>
              <p className="text-neutral-400 font-sans text-xs md:text-sm tracking-wider leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
