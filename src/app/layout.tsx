import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { personalInfo } from "@/data/profile"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Bhadra Sreelatha | Thermofluids & Combustion Researcher",
  description: "Personal academic portfolio of Bhadra Sreelatha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow"> 
          {children}
        </div>
        
        <footer className="py-8 text-center border-t border-border_col mt-20">
          <p className="font-mono text-xs text-text_secondary">
            Designed & Built for {personalInfo.name} <br/>
            Thermofluids & Aerospace Engineering Research Portfolio
          </p>
        </footer>
      </body>
    </html>
  );
}