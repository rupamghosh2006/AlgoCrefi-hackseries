import type { Metadata, Viewport } from "next";
import "./globals.css";
import XChainProviders from "@/components/XChainProviders";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "AlgoCrefi - Permissionless Lending on Algorand",
  description:
    "AlgoCrefi is a permissionless liquidity protocol on Algorand. Deposit ALGO to earn yield. Borrow against collateral or your Aura credit score.",
  keywords: ["Algorand", "DeFi", "lending", "liquidity pool", "ALGO", "AlgoCrefi"],
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "AlgoCrefi - Permissionless Lending on Algorand",
    description: "Deposit ALGO to earn yield. Borrow against collateral or your Aura credit score.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="loading">
        <XChainProviders>{children}</XChainProviders>
      </body>
    </html>
  );
}
