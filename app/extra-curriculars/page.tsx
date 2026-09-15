"use client";
import { motion } from "framer-motion";
import { extracurricular } from "@/data/profile";

export default function ExtraCurricularsPage() {
  return (
    <main className="pt-32 pb-32 min-h-screen">
      <section className="w-full">
        {/* Expanded to max-w-6xl to match the rest of the site */}
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Extra-Curricular Activities
            </h2>
            <div className="h-px bg-border_col flex-grow opacity-50"></div>
          </motion.div>

          {/* 3-Column Grid for the cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extracurricular.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                // h-full and flex properties ensure all cards stretch to the same height beautifully
                className="glass-panel p-8 rounded-sm hover:border-accent_flow/30 transition-colors h-full flex flex-col"
              >
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-sm text-accent_flame mb-6 uppercase tracking-wider">
                  {item.org}
                </p>
                <p className="text-base text-text_secondary leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}