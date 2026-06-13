"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, CheckCircle2, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomExperience: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jewelryType: "Pendant",
    metal: "14K White Gold",
    budget: "$5,000 - $10,000",
    description: "",
  });

  const steps = [
    {
      num: "01",
      title: "Private Consultation",
      desc: "Connect directly with our master jewelry designers in Toronto. Share your initial sketches, letter concepts, custom shapes, and diamond preferences.",
    },
    {
      num: "02",
      title: "3D CAD Blueprint Approval",
      desc: "Review a photorealistic 3D rendering of your custom piece. Refine every angle, sizing detail, and diamond placement before we begin manufacturing.",
    },
    {
      num: "03",
      title: "Bespoke Handcrafting",
      desc: "Our master bench jewelers select, cut, and hand-set each individual VVS diamond under high-power microscopes, followed by multi-stage high-gloss polishing.",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormOpen(false);
        // Reset form
        setFormData({
          name: "",
          email: "",
          jewelryType: "Pendant",
          metal: "14K White Gold",
          budget: "$5,000 - $10,000",
          description: "",
        });
      }, 3000);
    }
  };

  return (
    <>
      <section id="custom" className="py-24 md:py-32 bg-white text-primary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column: Premium Imagery */}
          <div className="relative h-[450px] md:h-[650px] w-full bg-[#121212] overflow-hidden shadow-2xl group border border-neutral-100">
            <Image
              src="/products/530392375_17867589615426391_5428670915730909007_n.jpg"
              alt="Artisans crafting custom nameplate diamond piece"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-[#0A0A0A]/95 border border-secondary/25 p-6 backdrop-blur-md">
              <span className="text-[10px] text-secondary tracking-widest font-sans uppercase font-bold block mb-1">
                Master Bench Atelier
              </span>
              <p className="text-white text-sm font-serif italic tracking-wide">
                "Every custom piece is a legacy item built to tell a story that outlasts generations."
              </p>
              <p className="text-right text-[10px] text-secondary font-sans uppercase tracking-[0.2em] mt-3">
                — Mohan Saina, Creative Director
              </p>
            </div>
          </div>

          {/* Right Column: 3-step process */}
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
              One-of-One Bespoke
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light mb-6">
              Create Your Own Legacy Piece
            </h2>
            <p className="text-neutral-500 font-sans text-sm tracking-wider leading-relaxed mb-12 max-w-xl">
              From iced-out custom nameplates and hip-hop emblems to bespoke engagement ring modifications. Work step-by-step with Canadian design masters.
            </p>

            {/* Steps list */}
            <div className="space-y-8 mb-12">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 items-start group">
                  <span className="font-serif text-2xl md:text-3xl text-secondary font-light tracking-wide group-hover:gold-glow-text transition-all">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide mb-1 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 font-sans text-xs md:text-sm tracking-wider leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4.5 bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 font-sans text-xs font-bold uppercase tracking-[0.25em] shadow-lg group"
              >
                Start Your Custom Design
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Custom Booking Modal Popup */}
      <AnimatePresence>
        {formOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!submitted) setFormOpen(false);
              }}
              className="fixed inset-0 bg-black/90"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0A0A0A] text-white border border-secondary/20 shadow-2xl p-6 md:p-10 my-8 overflow-hidden luxury-glass"
            >
              {/* Close Button */}
              {!submitted && (
                <button
                  onClick={() => setFormOpen(false)}
                  className="absolute top-4 right-4 text-neutral-400 hover:text-secondary transition-colors"
                  aria-label="Close form"
                >
                  <X className="h-5 w-5" />
                </button>
              )}

              {submitted ? (
                /* Confirmed Card */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="bg-secondary/15 border border-secondary/35 p-4 rounded-full text-secondary mb-6 animate-bounce">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-wide text-neutral-100 mb-2">
                    Consultation Requested
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans tracking-widest max-w-sm mb-6 leading-relaxed">
                    Our luxury design concierge will email you within 12 hours with appointment times and your design CAD blueprint dashboard link.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-secondary font-sans uppercase tracking-[0.2em] bg-secondary/5 border border-secondary/10 px-4 py-2">
                    <Calendar className="h-3.5 w-3.5" /> Scheduled with Mohan Saina
                  </div>
                </div>
              ) : (
                /* Input Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <div className="inline-flex bg-secondary/10 p-2 border border-secondary/20 mb-3 text-secondary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl tracking-wide text-neutral-100">
                      Bespoke Design Inquiry
                    </h3>
                    <p className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase mt-1">
                      Ace Jewellers Canada Studio
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Mohan Saina"
                        className="w-full bg-[#121212] text-white border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans placeholder-white/20 tracking-wider"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="mohan@example.com"
                        className="w-full bg-[#121212] text-white border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans placeholder-white/20 tracking-wider"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                        Jewelry Type
                      </label>
                      <select
                        name="jewelryType"
                        value={formData.jewelryType}
                        onChange={handleInputChange}
                        className="w-full bg-[#121212] text-white border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans tracking-wider"
                      >
                        <option value="Pendant">Custom Pendant</option>
                        <option value="Nameplate">3D Nameplate</option>
                        <option value="Engagement">Engagement Ring</option>
                        <option value="Chain">Bespoke Chain</option>
                        <option value="Other">Other Custom Art</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                        Preferred Metal
                      </label>
                      <select
                        name="metal"
                        value={formData.metal}
                        onChange={handleInputChange}
                        className="w-full bg-[#121212] text-white border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans tracking-wider"
                      >
                        <option value="14K White Gold">14K White Gold</option>
                        <option value="18K Yellow Gold">18K Yellow Gold</option>
                        <option value="Platinum">Platinum (Solid)</option>
                        <option value="Champagne Gold">Champagne Gold</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-[#121212] text-white border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans tracking-wider"
                      >
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+ (VIP Reserve)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                      Describe Your Concept
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your design (font choice, dimensions, diamond shape, natural vs lab-grown preferred)..."
                      className="w-full bg-[#121212] text-white border border-white/10 px-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans placeholder-white/20 tracking-wider leading-relaxed resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary font-sans font-bold text-xs uppercase tracking-[0.25em] py-4 hover:bg-white transition-all duration-300"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
