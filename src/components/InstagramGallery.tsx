"use client";

import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, Instagram } from "lucide-react";

interface UGCItem {
  id: string;
  image: string;
  likes: string;
  comments: string;
  aspect: string;
}

const ugcItems: UGCItem[] = [
  {
    id: "ugc-1",
    image: "/products/515255261_17862817560426391_900831473192417878_n.jpg",
    likes: "1.4k",
    comments: "42",
    aspect: "aspect-square",
  },
  {
    id: "ugc-2",
    image: "/products/527396337_1827024011359792_5153925414157942290_n.jpg",
    likes: "920",
    comments: "18",
    aspect: "aspect-[3/4]",
  },
  {
    id: "ugc-3",
    image: "/products/527452581_1067293382187755_69768922388660589_n.jpg",
    likes: "2.1k",
    comments: "84",
    aspect: "aspect-[4/3]",
  },
  {
    id: "ugc-4",
    image: "/products/681017570_994787226553745_8764626133904538258_n.jpg",
    likes: "3.5k",
    comments: "112",
    aspect: "aspect-[3/4]",
  },
  {
    id: "ugc-5",
    image: "/products/702325023_1905058003463622_906998760923843247_n.jpg",
    likes: "1.8k",
    comments: "65",
    aspect: "aspect-square",
  },
  {
    id: "ugc-6",
    image: "/products/708854348_1003168592247332_3995410872326734811_n.jpg",
    likes: "2.7k",
    comments: "93",
    aspect: "aspect-square",
  },
];

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white text-primary px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] text-secondary font-sans uppercase tracking-[0.25em] font-semibold block mb-3">
            Social Circle
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light">
            Seen On The Circle
          </h2>
          <p className="text-xs text-neutral-500 font-sans tracking-widest mt-2">
            Share your shine with #AceJewellersCanada
          </p>
          <div className="h-[1px] w-12 bg-secondary mx-auto mt-6" />
        </div>

        {/* UGC Masonry Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {ugcItems.map((item) => (
            <a
              key={item.id}
              href="https://www.instagram.com/acejewellercanada"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-neutral-900 border border-neutral-100 ${item.aspect}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt="UGC luxury style shot"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover details overlay */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-10 text-white font-sans text-xs">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Heart className="h-4 w-4 text-secondary fill-current" />
                  {item.likes}
                </div>
                <div className="flex items-center gap-1.5 font-semibold">
                  <MessageCircle className="h-4 w-4 text-secondary fill-current" />
                  {item.comments}
                </div>
                <div className="absolute bottom-4 flex items-center gap-1.5 text-[10px] text-secondary tracking-wider font-semibold">
                  <Instagram className="h-3 w-3" /> @acejewellercanada
                </div>
              </div>

              {/* Border highlights */}
              <div className="absolute inset-0 border border-transparent group-hover:border-secondary/20 transition-colors pointer-events-none" />
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://www.instagram.com/acejewellercanada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-primary px-8 py-4 text-primary font-sans text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
          >
            <Instagram className="h-4 w-4" /> Follow @acejewellercanada
          </a>
        </div>
      </div>
    </section>
  );
};
