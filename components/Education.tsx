"use client";
import { motion } from "framer-motion";
import { education, skills, coursework } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export default function Education() {
  // We only pull the first item since it's just IIT Madras now
  const degree = education[0];

  return (
    <section className="w-full mb-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education & Skills
          </h2>
          <div className="h-px bg-border_col flex-grow opacity-50"></div>
        </motion.div>

        {/* ================= TOP SECTION: ACADEMIC PROFILE ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Beautiful colored glass-panel for the single degree */}
          <div className="relative overflow-hidden glass-panel rounded-lg border border-accent_flame/30 bg-gradient-to-br from-accent_flame/5 to-transparent p-8 md:p-12">
            {/* Subtle background glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent_flame/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-accent_flame" size={28} />
                  <h3 className="text-sm font-mono text-accent_flame uppercase tracking-widest">Academic Profile</h3>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">{degree.degree}</h4>
                <p className="text-lg text-text_primary">{degree.institution}</p>
              </div>
              
              <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
                <div className="inline-block px-4 py-2 bg-background/50 border border-accent_flame/20 rounded font-mono text-accent_flame shadow-[0_0_15px_rgba(255,87,34,0.1)]">
                  {degree.year}
                </div>
                <span className="text-sm text-text_secondary font-mono">{degree.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= BOTTOM SECTION: SKILLS & COURSEWORK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT: Technical Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-xl font-mono text-white border-b border-border_col pb-3">
              Technical Capabilities
            </h3>
            
            <div className="space-y-8">
              {/* Programming - Themed with Flow (Cyan/Blue) */}
              <div>
                <h4 className="text-xs font-mono text-accent_flow uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent_flow"></span>
                  Programming & Analysis
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.programming.map((skill, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm bg-accent_flow/10 border border-accent_flow/20 text-accent_flow rounded-full hover:bg-accent_flow hover:text-background transition-all font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CFD & Modelling - Themed with Flame (Orange/Ember) */}
              <div>
                <h4 className="text-xs font-mono text-accent_flame uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent_flame"></span>
                  CFD & Modelling
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[...skills.cfd, ...skills.modelling].map((skill, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm bg-accent_flame/10 border border-accent_flame/20 text-accent_flame rounded-full hover:bg-accent_flame hover:text-white transition-all font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Electronic Systems & Practices - Neutral Theme */}
              <div>
                <h4 className="text-xs font-mono text-text_primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-text_secondary"></span>
                  Electronic Systems & Practices
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[...skills.electronicSystems, ...skills.practices].map((skill, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm bg-surface/50 border border-border_col text-text_primary rounded-full hover:border-text_secondary transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-mono text-white mb-10 border-b border-border_col pb-3">
              Relevant Coursework
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {coursework.map((course, i) => (
                <span 
                  key={i} 
                  // Alternating slight border colors on hover to make it dynamic
                  className="px-4 py-2.5 text-sm bg-surface/30 border border-border_col text-text_secondary rounded hover:text-white hover:border-accent_flow/50 transition-all shadow-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}