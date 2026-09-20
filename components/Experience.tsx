"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/profile";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  // Helper function to split text and make the part before the colon bold
  const renderPoint = (text: string) => {
    const colonIndex = text.indexOf(":");
    if (colonIndex !== -1) {
      const boldPart = text.substring(0, colonIndex + 1); // Includes the colon
      const restPart = text.substring(colonIndex + 1);
      return (
        <span>
          <span className="font-bold text-white">{boldPart}</span>
          {restPart}
        </span>
      );
    }
    return <span>{text}</span>;
  };

  return (
    <section id="experience" className="w-full mb-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Research Experience
          </h2>
          <div className="h-px bg-border_col flex-grow opacity-50"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Timeline Tabs */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-l border-border_col lg:w-1/4 scrollbar-hide shrink-0">
            {experience.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-4 text-left font-mono text-sm whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-2 transition-all ${
                  activeTab === i 
                    ? "border-accent_flame text-accent_flame bg-accent_flame/5" 
                    : "border-transparent text-text_secondary hover:text-white hover:bg-surface"
                } -ml-[2px]`}
              >
                {exp.lab.split(',')[0]}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-3/4 min-h-[250px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {experience[activeTab].role} <span className="text-accent_flow">@ {experience[activeTab].lab}</span>
                </h3>
                <p className="font-mono text-sm text-text_secondary mt-3">
                  {experience[activeTab].duration} {experience[activeTab].pi && `| Guide: ${experience[activeTab].pi}`}
                </p>
              </div>

              {experience[activeTab].title && (
                <div className="bg-surface/30 border-l-2 border-border_col p-4 rounded-r mt-4 mb-6">
                  <p className="text-white font-medium text-base">
                    {experience[activeTab].title}
                  </p>
                </div>
              )}

              {/* Loop through points to render bulleted list with bolding logic */}
              <ul className="flex flex-col gap-6">
                {experience[activeTab].points.map((point, i) => (
                  <li key={i} className="flex gap-4 text-text_secondary text-base leading-relaxed">
                    <span className="text-accent_flame mt-1 text-sm shrink-0">▹</span>
                    {renderPoint(point)}
                  </li>
                ))}
              </ul>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}