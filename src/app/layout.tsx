import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bhadra Sreelatha - Academic Portfolio",
  description: "Academic Portfolio of Bhadra Sreelatha",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased max-w-6xl mx-auto flex flex-col md:flex-row min-h-screen`}>
        <Sidebar />
        <main className="flex-1 px-6 py-12 md:px-16 md:py-24 overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}\n