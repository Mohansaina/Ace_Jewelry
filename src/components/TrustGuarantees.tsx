"use client";

import React from "react";
import { ShieldCheck, Milestone, RefreshCw, BookmarkCheck } from "lucide-react";

export const TrustGuarantees: React.FC = () => {
  const guarantees = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
      title: "Secure Checkout",
      desc: "Fully encrypted SSL connections. Insured transaction gateways handling credit cards, bank wire transfer, and premium financing providers.",
    },
    {
      icon: <Milestone className="h-6 w-6 text-secondary" />,
      title: "GIA Certified Diamonds",
      desc: "All natural and lab-grown stones are sourced conflict-free and verified by GIA/IGI appraisals with microscopic laser inscriptions.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-secondary" />,
      title: "Returns & Exchanges",
      desc: "We stand behind our pieces. Offering a hassle-free 30-day return policy and complimentary sizing exchanges on all standard collections.",
    },
    {
      icon: <BookmarkCheck className="h-6 w-6 text-secondary" />,
      title: "Lifetime Warranty",
      desc: "A pledge of longevity. Free inspection, polishing, cleaning, and prong adjustments for the lifetime of your signature heirloom.",
    },
  ];

  return (
    <section className="py-20 bg-white text-primary px-6 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((g, i) => (
            <div
              key={i}
              className="text-center flex flex-col items-center p-6 border border-neutral-100 hover:border-secondary/20 transition-all duration-300 bg-neutral-50"
            >
              <div className="bg-secondary/10 border border-secondary/15 h-12 w-12 flex items-center justify-center mb-5 rounded-full">
                {g.icon}
              </div>
              <h3 className="font-serif text-base font-semibold tracking-wider mb-2 text-primary">
                {g.title}
              </h3>
              <p className="text-neutral-500 font-sans text-xs tracking-wider leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
