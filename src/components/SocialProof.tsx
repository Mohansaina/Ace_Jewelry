"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  product: string;
  rating: number;
  review: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus K.",
    location: "Vancouver, BC",
    product: "Custom Diamond Nameplate Piece",
    rating: 5,
    review: "The custom diamond nameplate exceeds every expectation. The VVS diamonds have an unreal sparkle. Mohan Saina kept me updated with 3D CAD blueprints throughout. 10/10 recommendation.",
    date: "May 14, 2026",
  },
  {
    name: "Sarah L.",
    location: "Toronto, ON",
    product: "Majestic Oval Cut Halo Ring",
    rating: 5,
    review: "Breathtaking quality. The GIA certificate verified its top clarity score. Shipping was fully insured overnight, requiring my direct signature. My fiancée is in absolute awe.",
    date: "June 02, 2026",
  },
  {
    name: "Devonte M.",
    location: "Montreal, QC",
    product: "Elite Heavy Miami Cuban Link",
    rating: 5,
    review: "Premium aesthetics but with local Canadian warranty and care. The 12mm Cuban Link is heavy, solid gold, and shines like crazy under sunlight. Absolute best custom shop in the country.",
    date: "April 28, 2026",
  },
  {
    name: "Elena R.",
    location: "Calgary, AB",
    product: "Royal Solitaire Diamond Ring",
    rating: 5,
    review: "Bespoke service at its finest. They resized my ring in under 24 hours. The LED velvet presentation box is a beautiful high-end touch. Highly recommend joining the Ace Circle.",
    date: "May 20, 2026",
  },
];

export const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] text-white px-6 border-b border-white/5 relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute right-0 top-1/4 h-[350px] w-[350px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-[350px] w-[350px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Rating Metrics Stamp */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 px-4 py-2 mb-4">
            <span className="text-secondary font-sans font-bold text-xs">4.9 / 5.0</span>
            <div className="flex text-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <span className="text-[10px] text-neutral-400 font-sans">Verified Reviews</span>
          </div>

          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light">
            Trust is Our Finest Material
          </h2>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F0F0F] border border-white/5 p-8 md:p-12 text-center max-w-3xl w-full"
            >
              {/* Rating stars */}
              <div className="flex justify-center text-secondary mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg md:text-2xl italic font-light tracking-wide text-neutral-200 leading-relaxed mb-8">
                "{current.review}"
              </p>

              {/* User details */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#F3E5AB] flex items-center gap-1.5">
                  {current.name}
                  <span className="text-secondary flex items-center gap-0.5 text-[9px] font-sans font-normal border border-secondary/20 bg-secondary/5 px-1.5 py-0.5">
                    <CheckCircle className="h-2.5 w-2.5" /> Verified Purchase
                  </span>
                </span>
                <span className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase">
                  {current.location} • {current.product}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:-left-16 p-3 border border-white/10 hover:border-secondary text-white hover:text-secondary bg-[#0F0F0F] hover:bg-white/5 transition-all duration-300 hidden md:block"
            aria-label="Previous Review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-16 p-3 border border-white/10 hover:border-secondary text-white hover:text-secondary bg-[#0F0F0F] hover:bg-white/5 transition-all duration-300 hidden md:block"
            aria-label="Next Review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Indicators / Dot controls */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-300 ${
                currentIndex === index ? "w-6 bg-secondary" : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
