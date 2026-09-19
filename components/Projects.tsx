"use client";
import { useState, useEffect } from "react"; // Added useEffect here
import { motion, AnimatePresence } from "framer-motion";
import { engineeringProjects } from "@/data/profile";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";
import Image from "next/image";

// Custom Auto-Playing Slideshow Component
const ProjectSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // NEW: Auto-play functionality!
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000); // 4000 milliseconds = transitions every 4 seconds

    // Cleans up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-video rounded-lg overflow-hidden border border-border_col bg-surface/50 group">
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Made the transition slightly smoother (0.5s)
          className="absolute inset-0"
        >
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${images[currentIndex]}`} 
            alt={`${title} - Image ${currentIndex + 1}`} 
            fill 
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevImage}
          className="p-2 rounded-full bg-background/80 text-white hover:bg-accent_flame hover:text-white transition-colors backdrop-blur-sm z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextImage}
          className="p-2 rounded-full bg-background/80 text-white hover:bg-accent_flame hover:text-white transition-colors backdrop-blur-sm z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-accent_flame" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="w-full mb-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering Projects
          </h2>
          <div className="h-px bg-border_col flex-grow opacity-50"></div>
        </motion.div>
        
        {/* Engineering Projects List */}
        <div className="flex flex-col gap-20">
          {engineeringProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              {/* LEFT SIDE: Slideshow */}
              <div className="w-full lg:w-1/2">
                <ProjectSlider images={project.images} title={project.title} />
              </div>

              {/* RIGHT SIDE: Text Info */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-accent_flow">
                  <FolderGit2 size={24} />
                  <span className="font-mono text-sm tracking-wider uppercase">{project.org}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 font-mono text-sm text-text_secondary mb-6">
                  <span className="bg-surface/50 px-3 py-1 rounded border border-border_col">
                    {project.duration}
                  </span>
                  <span className="bg-surface/50 px-3 py-1 rounded border border-border_col">
                    Guide: {project.guide}
                  </span>
                </div>
                
                <p className="text-lg text-text_secondary leading-relaxed border-l-2 border-accent_flame pl-5">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}