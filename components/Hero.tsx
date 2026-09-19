"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
// REMOVED CanvasFlowField import from here
import { MapPin, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* REMOVED <CanvasFlowField /> from here */}
      
      <div className="max-w-6xl mx-auto px-6 w-full z-10 relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/5"
        >
          <p className="mono-label text-accent_flow mb-4">Hello, This is</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            {personalInfo.name}
          </h1>
          
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
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent_flame text-accent_flame hover:bg-accent_flame/10 font-mono text-sm transition-colors rounded-sm flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
            <Link 
              href="/research"
              className="px-6 py-3 border border-border_col hover:border-text_secondary text-text_primary font-mono text-sm transition-colors rounded-sm"
            >
              View Work
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          {/* Photo Container: You can change rounded-2xl to rounded-full if you prefer a circle */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border border-border_col shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {/* The grayscale filter makes it blend with the dark theme, and it colors on hover! */}
            <Image 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile.jpg`} 
              alt={personalInfo.name}
              fill
              className="object-cover transition-all duration-500 grayscale hover:grayscale-0"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}