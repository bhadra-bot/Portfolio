"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <SectionHeading index="01" title="Research Experience" />
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Timeline Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border_col md:w-1/4 scrollbar-hide shrink-0">
          {experience.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-left font-mono text-xs whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 transition-colors ${
                activeTab === i 
                  ? "border-accent_flame text-accent_flame bg-accent_flame/5" 
                  : "border-transparent text-text_secondary hover:text-text_primary hover:bg-surface"
              } -ml-[2px]`}
            >
              {exp.lab.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:w-3/4 min-h-[300px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white">
              {experience[activeTab].role} <span className="text-accent_flow">@ {experience[activeTab].lab}</span>
            </h3>
            <p className="font-mono text-xs text-text_secondary mt-2 mb-4">
              {experience[activeTab].duration} {experience[activeTab].pi && `| Guide: ${experience[activeTab].pi}`}
            </p>
            {experience[activeTab].title && (
              <p className="text-text_primary font-medium mb-6 text-sm border-l-2 border-border_col pl-4">
                "{experience[activeTab].title}"
              </p>
            )}
            <ul className="flex flex-col gap-3">
              {experience[activeTab].points.map((point, i) => (
                <li key={i} className="flex gap-3 text-text_secondary text-sm leading-relaxed">
                  <span className="text-accent_flame mt-1">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
