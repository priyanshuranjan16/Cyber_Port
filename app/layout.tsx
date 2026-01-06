import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Player 1 | Gaming Portfolio",
  description: "A gaming-themed portfolio for a B.Tech student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} scroll-smooth`}>
      <body className="antialiased bg-background text-foreground overflow-x-hidden selection:bg-neon-green/30 selection:text-neon-green">
        <Cursor />
        <BackgroundGrid />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
