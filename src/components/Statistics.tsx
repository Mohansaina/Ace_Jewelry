"use client";

import React, { useEffect, useState } from "react";

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  duration?: number;
}

const CountUp: React.FC<StatItemProps> = ({ target, suffix, label, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-center p-6 bg-[#0F0F0F] border border-white/5 hover:border-secondary/20 transition-all duration-300">
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary font-medium tracking-wide mb-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.25)]">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-[10px] md:text-xs text-neutral-400 font-sans uppercase tracking-[0.25em] font-medium">
        {label}
      </p>
    </div>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] text-white px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <CountUp target={10000} suffix="+" label="Happy Clients" />
          <CountUp target={5000} suffix="+" label="Custom Pieces" />
          <CountUp target={15} suffix="+" label="Years Experience" />
          <CountUp target={98} suffix="%" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};
