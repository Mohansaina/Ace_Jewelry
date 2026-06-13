"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const shopLinks = [
    { label: "Engagement Rings", href: "#rings" },
    { label: "Wedding Bands", href: "#shop" },
    { label: "Diamond Chains", href: "#chains" },
    { label: "Custom Pendants", href: "#pendants" },
    { label: "One-of-One Art", href: "#custom" },
    { label: "Best Sellers", href: "#shop" },
  ];

  const serviceLinks = [
    { label: "Book Consultation", href: "#custom" },
    { label: "Insured Transit", href: "#" },
    { label: "Lifetime Warranty", href: "#" },
    { label: "Ring Sizing Guide", href: "#" },
    { label: "Certificates & CAD", href: "#" },
    { label: "FAQs & Financing", href: "#" },
  ];

  const companyLinks = [
    { label: "About Ace Jewellers", href: "#" },
    { label: "Toronto Atelier", href: "#" },
    { label: "Lab vs Natural Diamonds", href: "#" },
    { label: "Ethical Gold Sourcing", href: "#" },
    { label: "Reviews & Press", href: "#" },
    { label: "Bespoke Portfolio", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Logo column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="Ace Jewellers Logo"
                  fill
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
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

            <p className="text-xs text-neutral-400 max-w-sm tracking-wider leading-relaxed">
              Toronto's premier custom diamond atelier. Specializing in high-end hip-hop pendants, heavy iced-out tennis chains, and conflict-free solitaire wedding bands. Handcrafted for life's biggest milestones.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/acejewellercanada"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-secondary hover:border-secondary transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://tiktok.com/@acejewellercanada"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-secondary hover:border-secondary transition-colors font-bold text-xs"
                aria-label="TikTok Profile"
              >
                𝅘𝅥𝅯
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-secondary hover:border-secondary transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-secondary hover:border-secondary transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase text-secondary font-medium mb-6">
              Shop Collections
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-secondary tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase text-secondary font-medium mb-6">
              Client Service
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-secondary tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase text-secondary font-medium mb-6">
              Our House
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-secondary tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[10px] text-neutral-500 tracking-wider">
              © {new Date().getFullYear()} Ace Jewellers Canada. All Rights Reserved. Crafted in Toronto, ON.
            </p>
            <p className="text-[9px] text-neutral-600 tracking-wider">
              GIA® & IGI® certified identification. Conflict-free gold and diamonds compliant with Kimblerley Process protocols.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-neutral-400">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>Encrypted Checkout • GIA Secured Escrow System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
