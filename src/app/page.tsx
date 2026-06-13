import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { BestSellers } from "@/components/BestSellers";
import { CustomExperience } from "@/components/CustomExperience";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { RingShowcase } from "@/components/RingShowcase";
import { SocialProof } from "@/components/SocialProof";
import { Statistics } from "@/components/Statistics";
import { InstagramGallery } from "@/components/InstagramGallery";
import { TrustGuarantees } from "@/components/TrustGuarantees";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      {/* Sticky Navigation and Announcement Bar */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main className="flex-1 w-full">
        {/* Cinematic Parallax Hero */}
        <Hero />

        {/* Curated Categories */}
        <FeaturedCollections />

        {/* Interactive Best Sellers with Category Tabs */}
        <BestSellers />

        {/* Bespoke 1-of-1 Custom Crafting Experience */}
        <CustomExperience />

        {/* Engagement Ring Shape Selector & Showcase */}
        <RingShowcase />

        {/* Premium Value Props & Six Guarantees */}
        <WhyChooseUs />

        {/* Verification Social Proof & Review Carousel */}
        <SocialProof />

        {/* Animated Count-Up Counters */}
        <Statistics />

        {/* UGC Instagram Masonry Gallery */}
        <InstagramGallery />

        {/* Guarantee Badge Details */}
        <TrustGuarantees />

        {/* FAQ Collapsible Questions */}
        <FaqAccordion />

        {/* VIP Circle Newsletter Form */}
        <Newsletter />
      </main>

      {/* Minimalist Multi-Column Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
    </div>
  );
}
