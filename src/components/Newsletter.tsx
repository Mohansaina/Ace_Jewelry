"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white text-primary px-6 relative overflow-hidden border-b border-neutral-100">
      {/* Subtle gold mesh gradient background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {subscribed ? (
          <div className="py-8 animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center">
            <div className="bg-secondary/15 border border-secondary/35 p-3 rounded-full text-secondary mb-5">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-3xl tracking-wide text-primary mb-2">
              Welcome to The Ace Circle
            </h3>
            <p className="text-xs text-neutral-500 font-sans tracking-widest max-w-sm">
              Your VIP access credentials have been dispatched. Exclusive diamond previews and concierge allocations await you.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block">
              VIP Membership
            </span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-wide font-light text-primary">
              Join The Ace Circle
            </h2>
            <p className="text-xs md:text-sm text-neutral-500 font-sans tracking-widest max-w-lg mx-auto leading-relaxed">
              Unlock priority access to custom jewelry commission openings, lab-grown natural diamond report releases, and private collections.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-6 relative"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-neutral-50 text-primary border border-neutral-200 rounded-none px-5 py-4 pl-11 text-xs focus:outline-none focus:border-secondary font-sans tracking-wider placeholder-neutral-400"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-sans font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
              >
                Request Invitation
              </button>
            </form>

            <p className="text-[9px] text-neutral-400 font-sans tracking-wider">
              By subscribing, you agree to our privacy conditions. Opt out at any time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
