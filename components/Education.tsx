"use client";
import { motion } from "framer-motion";
import { education, skills, coursework, achievements } from "@/data/profile";

export default function Education() {
  return (
    <section className="w-full">
      {/* Expanded to max-w-6xl for a much broader layout */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Heading - Removed the '04.' */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education & Skills
          </h2>
          <div className="h-px bg-border_col flex-grow opacity-50"></div>
        </motion.div>

        {/* 2-Column Grid Layout with wide gap for better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-16">
            
            {/* Academic Profile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-mono text-white mb-8 border-b border-border_col pb-3">
                Academic Profile
              </h3>
              <div className="space-y-10">
                {education.map((item, i) => (
                  <div key={i} className="relative pl-5 border-l border-border_col hover:border-accent_flame transition-colors group">
                    <h4 className="text-white font-semibold text-lg">{item.degree}</h4>
                    <p className="text-text_secondary mt-1">{item.institution}</p>
                    <div className="flex justify-between items-center mt-4 text-sm font-mono">
                      <span className="text-text_secondary">{item.year}</span>
                      <span className="text-accent_flame group-hover:text-accent_flow transition-colors">
                        CGPA: {item.cgpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-mono text-white mb-8 border-b border-border_col pb-3">
                Achievements
              </h3>
              <ul className="space-y-5">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-4 text-text_secondary leading-relaxed">
                    <span className="text-accent_flow mt-1 text-sm">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-16">
            
            {/* Technical Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-mono text-white mb-8 border-b border-border_col pb-3">
                Technical Capabilities
              </h3>
              
              <div className="space-y-8">
                {/* Programming */}
                <div>
                  <h4 className="text-xs font-mono text-text_secondary uppercase tracking-widest mb-4">
                    Programming & Analysis
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.programming.map((skill, i) => (
                      <span key={i} className="px-4 py-1.5 text-sm border border-border_col text-text_secondary rounded-full hover:text-white hover:border-text_secondary transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CFD & Modelling */}
                <div>
                  <h4 className="text-xs font-mono text-text_secondary uppercase tracking-widest mb-4">
                    CFD & Modelling
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[...skills.cfd, ...skills.modelling].map((skill, i) => (
                      <span key={i} className="px-4 py-1.5 text-sm border border-border_col text-text_secondary rounded-full hover:text-white hover:border-text_secondary transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Electronic Systems & Practices */}
                <div>
                  <h4 className="text-xs font-mono text-text_secondary uppercase tracking-widest mb-4">
                    Electronic Systems & Practices
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[...skills.electronicSystems, ...skills.practices].map((skill, i) => (
                      <span key={i} className="px-4 py-1.5 text-sm border border-border_col text-text_secondary rounded-full hover:text-white hover:border-text_secondary transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Relevant Coursework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-mono text-white mb-8 border-b border-border_col pb-3">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-3">
                {coursework.map((course, i) => (
                  <span key={i} className="px-4 py-2 text-sm bg-border_col/30 border border-border_col text-text_secondary rounded hover:text-white hover:border-text_secondary transition-all">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}