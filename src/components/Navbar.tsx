"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const { cart, wishlist, setCartOpen, setWishlistOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistItems = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Engagement Rings", href: "#rings" },
    { label: "Custom Jewelry", href: "#custom" },
    { label: "Chains", href: "#chains" },
    { label: "Pendants", href: "#pendants" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#0A0A0A] text-[#F3E5AB] text-[11px] font-sans tracking-[0.2em] uppercase py-2.5 px-4 text-center border-b border-secondary/10 z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-[11px] overflow-x-auto whitespace-nowrap no-scrollbar gap-6">
          <span className="mx-auto flex items-center gap-1.5">
            <span className="h-1 w-1 bg-secondary rounded-full animate-ping"></span>
            Free Insured Shipping Across Canada
          </span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Lifetime Craftsmanship Warranty</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Bespoke Custom Orders Available</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-primary/90 backdrop-blur-md border-b border-secondary/10 py-3 shadow-lg"
            : "bg-primary/40 backdrop-blur-[2px] border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Ace Jewellers Logo"
                fill
                className="object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-[0.15em] text-white leading-none">
                ACE <span className="text-secondary">JEWELLERS</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] text-[#F3E5AB]/70 uppercase font-sans mt-0.5">
                Canada • Premium Custom
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] uppercase font-sans tracking-[0.2em] text-white/80 hover:text-secondary hover:gold-glow-text transition-colors duration-300 font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Navigation Actions */}
          <div className="flex items-center gap-3.5 md:gap-5">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
              className="text-white hover:text-secondary transition-colors duration-300 relative p-1"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Account Icon */}
            <Link
              href="#account"
              aria-label="Account"
              className="text-white hover:text-secondary transition-colors duration-300 p-1 hidden sm:inline-block"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Wishlist Icon */}
            <button
              onClick={() => setWishlistOpen(true)}
              aria-label="Open Wishlist"
              className="text-white hover:text-secondary transition-colors duration-300 relative p-1"
            >
              <Heart className="h-5 w-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-primary font-sans font-bold text-[9px] h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalWishlistItems}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Open Cart"
              className="text-white hover:text-secondary transition-colors duration-300 relative p-1"
            >
              <ShoppingBag className="h-5 w-5 text-secondary" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-primary font-sans font-bold text-[9px] h-4 w-4 rounded-full flex items-center justify-center border border-secondary">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="text-white hover:text-secondary transition-colors duration-300 p-1 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 border-b border-secondary/10 py-5 px-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search custom rings, chains, diamond pendants..."
                className="w-full bg-[#1A1A1A] text-white border border-secondary/20 rounded-none px-5 py-3.5 pr-12 text-sm focus:outline-none focus:border-secondary font-sans placeholder-white/30 tracking-wider"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-4 text-white hover:text-secondary transition-colors"
                aria-label="Submit Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Menu Navigation Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-primary/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 animate-in fade-in duration-300 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-20 right-6 text-white hover:text-secondary transition-colors"
            aria-label="Close Mobile Menu"
          >
            <X className="h-7 w-7" />
          </button>
          
          <div className="flex flex-col items-center gap-1">
            <div className="relative h-16 w-16 mb-2">
              <Image src="/logo.png" alt="Ace Logo" fill className="object-contain" />
            </div>
            <h2 className="font-serif text-xl tracking-[0.2em] text-white">ACE JEWELLERS</h2>
            <p className="text-[9px] tracking-[0.3em] text-secondary uppercase mb-8">Canada</p>
          </div>

          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] uppercase font-sans tracking-[0.25em] text-white/90 hover:text-secondary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-8 mt-8 border-t border-white/10 pt-8 w-60 justify-center">
            <Link
              href="#account"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-secondary flex items-center gap-2 text-sm font-sans tracking-widest"
            >
              <User className="h-5 w-5 text-secondary" /> PROFILE
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
