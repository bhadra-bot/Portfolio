"use client";
import { motion } from "framer-motion";
import { engineeringProjects, courseProjects } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading index="02" title="Engineering & Course Projects" />
      
      <div className="mb-16">
        <h3 className="text-xl font-mono text-text_primary mb-8 border-b border-border_col pb-2 inline-block">Engineering Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {engineeringProjects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4 text-accent_flow">
                  <FolderGit2 size={32} strokeWidth={1} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                <p className="font-mono text-xs text-text_secondary mb-4">{project.duration} | {project.org}</p>
                <ul className="flex flex-col gap-2">
                  {project.points.map((pt, idx) => (
                    <li key={idx} className="text-sm text-text_secondary leading-relaxed flex gap-2">
                      <span className="text-accent_flame">▹</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-mono text-text_primary mb-8 border-b border-border_col pb-2 inline-block">Course Projects</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {courseProjects.map((project, i) => (
            <div key={i} className="glass-panel p-5 rounded-sm hover:border-accent_flow/30 transition-colors">
              <h4 className="text-md font-bold text-white mb-2 leading-tight">{project.title}</h4>
              <p className="font-mono text-[10px] text-accent_flame mb-3 uppercase tracking-wider">{project.guide}</p>
              <p className="text-xs text-text_secondary leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
