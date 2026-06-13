import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ace Jewellers Canada | Premium Custom Diamond Jewelry & Engagement Rings",
  description: "Exquisite custom diamond jewelry, GIA-certified engagement rings, iced-out chains, wedding bands, pendants, and nameplates. Handcrafted luxury in Canada.",
  keywords: "Custom jewelry Canada, diamond rings, engagement rings, gold chains, iced out pendants, tennis chains, Canada jewelers, lab grown diamonds, natural diamonds, Toronto jewelry",
  authors: [{ name: "Ace Jewellers Canada" }],
  openGraph: {
    title: "Ace Jewellers Canada | Premium Custom Diamond Jewelry",
    description: "Exquisite custom diamond jewelry, engagement rings, gold chains, and bespoke namepieces. Handcrafted luxury across Canada.",
    images: [{ url: "/logo.png" }],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Jewellers Canada | Premium Custom Diamond Jewelry",
    description: "Exquisite custom diamond jewelry, engagement rings, gold chains, and bespoke namepieces. Handcrafted luxury across Canada.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-secondary selection:text-primary">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
