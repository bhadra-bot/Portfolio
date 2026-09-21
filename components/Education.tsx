"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education, skills, coursework, nonTechnicalCourses, teachingAssistantship } from "@/data/profile";
import { GraduationCap, ChevronDown } from "lucide-react";

export default function Education() {
  const degree = education[0];
  const [openCourse, setOpenCourse] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setOpenCourse(openCourse === index ? null : index);
  };

  return (
    <section className="w-full mb-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Main Heading */}
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

        {/* ================= SECTION 1: ACADEMIC PROFILE ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative overflow-hidden glass-panel rounded-lg border border-accent_flame/30 bg-gradient-to-br from-accent_flame/5 to-transparent p-8 md:p-12">
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
              
              <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
                <div className="flex flex-wrap gap-3">
                  <div className="inline-block px-4 py-2 bg-surface/80 border border-border_col rounded font-mono text-white text-sm">
                    CGPA: <span className="text-accent_flow font-bold">{degree.cgpa}</span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-background/50 border border-accent_flame/20 rounded font-mono text-accent_flame text-sm shadow-[0_0_15px_rgba(255,87,34,0.1)]">
                    {degree.year}
                  </div>
                </div>
                <span className="text-sm text-text_secondary font-mono md:pr-1">{degree.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= SECTION 2: COURSEWORK & PROJECTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-border_col pb-3">
            Interesting Coursework & Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-8">
            {coursework.map((item, i) => (
              <div key={i} className="glass-panel border border-border_col rounded transition-colors duration-300 hover:border-accent_flow/50">
                <button 
                  onClick={() => toggleCourse(i)} 
                  className="w-full text-left p-5 flex justify-between items-center bg-surface/30 hover:bg-surface/50 transition-colors"
                >
                  <span className="font-bold text-white text-[15px]">{item.course}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-text_secondary transition-transform duration-300 shrink-0 ml-4 ${openCourse === i ? "rotate-180 text-accent_flow" : ""}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openCourse === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-2 border-t border-border_col/50 bg-background/50">
                        {item.title && (
                          <p className="text-accent_flow font-bold text-base mb-2">
                            Project: {item.title}
                          </p>
                        )}
                        <p className="text-xs font-mono text-accent_flame uppercase tracking-wider mb-4 border border-accent_flame/20 bg-accent_flame/5 inline-block px-2 py-1 rounded">
                          Guide: {item.guide}
                        </p>
                        <p className="text-base text-text_secondary leading-relaxed flex gap-3">
                          <span className="text-accent_flame mt-1">▹</span> 
                          <span>{item.desc}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Non-Technical Courses Section */}
          <div className="pt-4 mb-14">
            <p className="text-base text-text_secondary italic mb-4">
              Here are some non-technical courses which were really interesting:
            </p>
            <div className="flex flex-wrap gap-3">
              {nonTechnicalCourses.map((course, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-sm bg-surface/30 border border-border_col text-text_secondary rounded hover:text-white hover:border-text_secondary transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* NEW: Colorful & Larger Teaching Assistantship Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent_flame shadow-[0_0_10px_rgba(255,87,34,0.6)]"></span>
              Teaching Assistantship
            </h4>
            <div className="flex flex-col gap-4">
              {teachingAssistantship.map((ta, i) => (
                <div key={i} className="relative overflow-hidden p-6 md:p-8 bg-gradient-to-r from-accent_flame/10 to-surface/30 border border-accent_flame/30 rounded-lg hover:border-accent_flame/60 transition-colors group">
                  {/* Vibrant side accent line */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent_flame"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <span className="text-xl font-bold text-white">{ta.course}</span>
                    <span className="hidden md:block text-text_secondary">•</span>
                    <span className="text-accent_flow font-mono text-sm uppercase tracking-wider bg-accent_flow/10 px-3 py-1 rounded border border-accent_flow/20">
                      {ta.role}
                    </span>
                  </div>
                  <p className="text-base text-text_primary leading-relaxed mt-2 md:pr-10">
                    {ta.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= SECTION 3: TECHNICAL CAPABILITIES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-border_col pb-3">
            Technical Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            <div className="glass-panel p-6 rounded border-t-2 border-t-accent_flow">
              <h4 className="text-xs font-mono text-accent_flow uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent_flow"></span>
                Programming & Analysis
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-accent_flow/10 border border-accent_flow/20 text-accent_flow rounded hover:bg-accent_flow hover:text-background transition-all font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded border-t-2 border-t-accent_flame">
              <h4 className="text-xs font-mono text-accent_flame uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent_flame"></span>
                CFD & Modelling
              </h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.cfd, ...skills.modelling].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-accent_flame/10 border border-accent_flame/20 text-accent_flame rounded hover:bg-accent_flame hover:text-white transition-all font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded border-t-2 border-t-text_secondary">
              <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-text_secondary"></span>
                Systems & Practices
              </h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.electronicSystems, ...skills.practices].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-surface/50 border border-border_col text-white rounded hover:border-text_secondary transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
