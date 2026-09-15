"use client";
import { motion } from "framer-motion";
import { engineeringProjects, courseProjects } from "@/data/profile";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="w-full mb-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Main Heading - Removed the '02.' and matched the new clean style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering & Course Projects
          </h2>
          <div className="h-px bg-border_col flex-grow opacity-50"></div>
        </motion.div>
        
        {/* Engineering Projects */}
        <div className="mb-24">
          <h3 className="text-xl font-mono text-white mb-10 border-b border-border_col pb-3">
            Engineering Projects
          </h3>
          {/* Increased gap from gap-6 to gap-8 for a wider spread */}
          <div className="grid md:grid-cols-2 gap-8">
            {engineeringProjects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                // Increased internal padding (p-8 instead of p-6) for breathability
                className="glass-panel p-8 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6 text-accent_flow">
                    <FolderGit2 size={36} strokeWidth={1} />
                  </div>
                  {/* Made title and text slightly larger */}
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="font-mono text-sm text-text_secondary mb-6">{project.duration} | {project.org}</p>
                  
                  {/* Increased gap between bullet points */}
                  <ul className="flex flex-col gap-4">
                    {project.points.map((pt, idx) => (
                      <li key={idx} className="text-base text-text_secondary leading-relaxed flex gap-3">
                        <span className="text-accent_flame mt-1">▹</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Projects */}
        <div>
          <h3 className="text-xl font-mono text-white mb-10 border-b border-border_col pb-3">
            Course Projects
          </h3>
          {/* Made the grid responsive: 2 columns on medium screens, 3 on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseProjects.map((project, i) => (
              <div 
                key={i} 
                // Increased padding and added flex properties so all cards stretch to the same height
                className="glass-panel p-6 rounded-sm hover:border-accent_flow/30 transition-colors h-full flex flex-col"
              >
                <h4 className="text-lg font-bold text-white mb-3 leading-tight">{project.title}</h4>
                <p className="font-mono text-xs text-accent_flame mb-4 uppercase tracking-wider">{project.guide}</p>
                {/* flex-grow pushes the text to fill space nicely */}
                <p className="text-sm text-text_secondary leading-relaxed flex-grow">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}