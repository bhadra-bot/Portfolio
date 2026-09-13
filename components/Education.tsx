"use client";
import { education, achievements, skills, coursework } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading index="04" title="Education & Skills" />
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education & Achievements */}
        <div>
          <h3 className="text-xl font-mono text-white mb-6 border-b border-border_col pb-2">Academic Profile</h3>
          <div className="flex flex-col gap-6 mb-10">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-4 border-l border-border_col hover:border-accent_flow transition-colors">
                <h4 className="text-md font-semibold text-white">{edu.degree}</h4>
                <p className="text-sm text-text_primary">{edu.institution}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-mono text-xs text-text_secondary">{edu.year}</p>
                  <p className="font-mono text-xs text-accent_flame font-semibold">CGPA: {edu.cgpa}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-mono text-white mb-6 border-b border-border_col pb-2">Achievements</h3>
          <ul className="flex flex-col gap-3">
            {achievements.map((ach, i) => (
              <li key={i} className="flex gap-3 text-text_secondary text-sm leading-relaxed">
                <span className="text-accent_flow mt-1">▹</span> {ach}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills & Coursework */}
        <div>
          <h3 className="text-xl font-mono text-white mb-6 border-b border-border_col pb-2">Technical Capabilities</h3>
          
          <div className="flex flex-col gap-6 mb-10">
            <div>
              <p className="font-mono text-xs text-text_primary uppercase tracking-wider mb-2">Programming & Analysis</p>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-surface border border-border_col rounded-full text-xs text-text_secondary">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-text_primary uppercase tracking-wider mb-2">CFD & Modelling</p>
              <div className="flex flex-wrap gap-2">
                {[...skills.cfd, ...skills.modelling].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-surface border border-border_col rounded-full text-xs text-text_secondary">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-text_primary uppercase tracking-wider mb-2">Electronic Systems & Practices</p>
              <div className="flex flex-wrap gap-2">
                {[...skills.electronicSystems, ...skills.practices].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-surface border border-border_col rounded-full text-xs text-text_secondary">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-mono text-white mb-6 border-b border-border_col pb-2">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, i) => (
              <span key={i} className="text-xs text-text_secondary bg-surface px-2 py-1 border border-border_col/50 rounded-sm">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
