"use client";
import { motion } from "framer-motion";
import { publications } from "@/data/profile";
import { BookOpen } from "lucide-react";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section id="publications" className="w-full mb-32">
      {/* Expanded to max-w-6xl for a broader layout matching other sections */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Main Heading - Removed the '03.' and matched the unified clean style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Publications & Conferences
          </h2>
          <div className="h-px bg-border_col flex-grow opacity-50"></div>
        </motion.div>
        
        {/* Increased gap from 6 to 8 for better spacing between publications */}
        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              // Increased padding from p-6 to p-8, and gap between icon and text to gap-6
              className="glass-panel p-8 rounded-sm border-l-2 border-l-accent_flow flex gap-6"
            >
              <div className="mt-1 hidden sm:block shrink-0">
                {/* Increased icon size slightly */}
                <BookOpen className="text-text_secondary" size={24} />
              </div>
              <div>
                {/* Made title larger (text-xl) and bold */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{pub.title}</h3>
                <p className="text-base text-text_primary mb-2 font-medium">{pub.authors}</p>
                <p className="text-base text-text_secondary italic">{pub.venue}</p>
                {pub.details && (
                  <p className="text-sm font-mono text-accent_flame mt-4 bg-accent_flame/10 inline-block px-3 py-1.5 rounded">
                    {pub.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}