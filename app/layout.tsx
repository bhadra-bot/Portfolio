import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { personalInfo } from "@/data/profile"; // Added this import for the footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Bhadra Sreelatha | Thermofluids & Combustion Researcher",
  description: "Personal academic portfolio of Bhadra Sreelatha, Aerospace Engineering student at IIT Madras researching combustion instability, thermoacoustics, and fluid mechanics.",
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
        {/* Added flex-grow to push footer to the bottom */}
        <div className="flex-grow"> 
          {children}
        </div>
        
        {/* Footer moved here from page.tsx */}
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