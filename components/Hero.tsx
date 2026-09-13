"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
import CanvasFlowField from "./CanvasFlowField";
import { MapPin, GraduationCap, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <CanvasFlowField />
      
      <div className="max-w-6xl mx-auto px-6 w-full z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mono-label text-accent_flow mb-4">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            {personalInfo.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-text_secondary mb-8">
            Thermoacoustics & Fluids Researcher.
          </h2>
          
          <p className="text-lg text-text_secondary leading-relaxed mb-10 max-w-2xl">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex items-center gap-3 text-text_secondary">
              <GraduationCap className="text-accent_flame" size={20} />
              <span className="text-sm font-mono">{personalInfo.program} <br/> @ {personalInfo.institution}</span>
            </div>
            <div className="flex items-center gap-3 text-text_secondary">
              <MapPin className="text-accent_flow" size={20} />
              <span className="text-sm font-mono">{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 border border-accent_flame text-accent_flame hover:bg-accent_flame/10 font-mono text-sm transition-colors rounded-sm flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a 
              href="#projects"
              className="px-6 py-3 border border-border_col hover:border-text_secondary text-text_primary font-mono text-sm transition-colors rounded-sm"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
