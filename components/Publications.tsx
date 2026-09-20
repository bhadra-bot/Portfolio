"use client";
import { motion } from "framer-motion";
import { publications } from "@/data/profile";
import { BookOpen } from "lucide-react";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section id="publications" className="w-full mb-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Main Heading */}
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
        
        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-panel p-8 rounded-sm border-l-2 border-l-accent_flow flex gap-6"
            >
              <div className="mt-1 hidden sm:block shrink-0">
                <BookOpen className="text-text_secondary" size={24} />
              </div>
              
              <div className="w-full">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{pub.title}</h3>
                <p className="text-base text-text_primary mb-4 font-medium">{pub.authors}</p>
                
                {/* Conditionally render single string vs bulleted list */}
                {Array.isArray(pub.venue) ? (
                  <ul className="flex flex-col gap-3 mb-2">
                    {pub.venue.map((v, idx) => (
                      <li key={idx} className="flex gap-3 text-base text-text_secondary italic leading-relaxed">
                        <span className="text-accent_flow not-italic text-sm mt-1">▹</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base text-text_secondary italic mb-2">{pub.venue}</p>
                )}

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