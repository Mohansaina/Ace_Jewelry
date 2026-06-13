"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long do custom orders take?",
    answer: "Our custom jewelry process is highly streamlined. 3D CAD blueprints are generated for your inspection and modification within 48-72 hours of consultation. Once you approve the final blueprint, handcrafted bench manufacturing takes approximately 10 to 15 business days.",
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes. Ace Jewellers Canada partners with Affirm and Splitit to offer flexible payment plans at checkout. You can select terms spanning 3, 6, or 12 months, with 0% APR interest options available for qualified applicants.",
  },
  {
    question: "Are your diamonds certified?",
    answer: "Absolutely. All center diamonds and precious gemstones above 0.50 carats are natural or lab-grown stones GIA-certified or IGI-certified. Each ring arrives with the physical certificate folder and appraisal records for insurance purposes.",
  },
  {
    question: "What does the Lifetime Warranty cover?",
    answer: "Our Lifetime Warranty guarantees protection against structural manufacturing defects. It covers complimentary annual deep cleaning, metal re-polishing, inspection, and claw prong re-tipping if diamonds shift under normal wear.",
  },
  {
    question: "Do you ship internationally?",
    answer: "While we offer free fully-insured parcel transit across all provinces in Canada, we also offer insured international delivery via FedEx Priority to the United States, United Kingdom, and Australia. Local custom duties may apply.",
  },
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] text-white px-6 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light text-white">
            Frequently Asked Queries
          </h2>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 md:py-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg font-medium tracking-wide text-neutral-100 group-hover:text-secondary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="h-7 w-7 rounded-full bg-[#121212] flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="h-3 w-3 text-secondary" />
                    ) : (
                      <Plus className="h-3 w-3 text-neutral-400 group-hover:text-secondary" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs md:text-sm text-neutral-400 font-sans tracking-wide leading-relaxed pt-2 pb-4 pr-10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
