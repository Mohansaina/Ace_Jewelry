"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CollectionItem {
  title: string;
  image: string;
  href: string;
  itemsCount: string;
  colSpan?: string;
}

const collections: CollectionItem[] = [
  {
    title: "Engagement Rings",
    image: "/products/503545241_17862149031426391_761653760876830438_n.jpg",
    href: "#rings",
    itemsCount: "140+ Settings",
    colSpan: "md:col-span-2",
  },
  {
    title: "Wedding Bands",
    image: "/products/527517722_17866470327426391_8999031617680294241_n.jpg",
    href: "#shop",
    itemsCount: "80+ Designs",
  },
  {
    title: "Diamond Chains",
    image: "/products/669841917_17897502717426391_1342798388499642324_n.jpg",
    href: "#chains",
    itemsCount: "45+ Styles",
  },
  {
    title: "Custom Pieces",
    image: "/products/530392375_17867589615426391_5428670915730909007_n.jpg",
    href: "#custom",
    itemsCount: "Bespoke CAD",
    colSpan: "md:col-span-2",
  },
  {
    title: "Diamond Pendants",
    image: "/products/504000704_17861519862426391_4303839881974050014_n.jpg",
    href: "#pendants",
    itemsCount: "60+ Designs",
  },
];

export const FeaturedCollections: React.FC = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-white text-primary px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Curated Curation
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light">
            Exquisite Featured Collections
          </h2>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((col, index) => (
            <Link
              key={col.title}
              href={col.href}
              className={`group relative overflow-hidden h-[300px] md:h-[400px] border border-neutral-100 bg-[#0F0F0F] transition-all duration-500 luxury-shimmer ${
                col.colSpan || ""
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent transition-opacity duration-500" />
              </div>

              {/* Title & Info Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end z-10">
                <div>
                  <span className="text-[9px] text-secondary font-sans uppercase tracking-[0.2em] font-medium block mb-1">
                    {col.itemsCount}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium tracking-wide">
                    {col.title}
                  </h3>
                </div>

                <div className="h-9 w-9 rounded-full border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary transition-all duration-300">
                  <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Gold borders on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-secondary/35 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);
