import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { personalInfo } from "@/data/profile";
import CanvasFlowField from "@/components/CanvasFlowField"; // Imported the simulation
import { MapPin, GraduationCap, Mail } from "lucide-react";

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
      <body className="flex flex-col min-h-screen">
        
        {/* GLOBAL BACKGROUND SIMULATION */}
        {/* pointer-events-none ensures you can still click buttons through the canvas */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <CanvasFlowField />
        </div>

        <Navbar />
        
        <div className="flex-grow z-10"> 
          {children}
        </div>
        
        <footer className="py-12 text-center border-t border-border_col mt-20 flex flex-col items-center justify-center gap-2 z-10 bg-background/80 backdrop-blur-sm">
          <p className="text-lg font-bold text-white tracking-wide">
            {personalInfo.name}
          </p>
          <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent_flame text-accent_flame hover:bg-accent_flame/10 font-mono text-sm transition-colors rounded-sm flex items-center gap-2"
            >
              <Mail size={16} /> {personalInfo.email}
            </a>
        </footer>
      </body>
    </html>
  );
}