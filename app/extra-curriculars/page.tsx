"use client";
import { motion } from "framer-motion";
import { Award, Wrench, Briefcase, BookOpen } from "lucide-react";

export default function ExtraCurricularsPage() {
  const interests = [
    {
      title: "Professional Dancer",
      icon: <Award size={26} className="text-accent_flame" />,
      borderColor: "border-accent_flame/30 hover:border-accent_flame/60",
      bgGradient: "from-accent_flame/5",
      glowColor: "bg-accent_flame/10",
      text: "I am a professional dancer and have secured multiple medals at national competitions. Perfecting a routine demands a high level of physical discipline and focus. This continuous practice has taught me how to remain dedicated and composed under pressure."
    },
    {
      title: "Avid Reader",
      icon: <BookOpen size={26} className="text-white" />,
      borderColor: "border-white/20 hover:border-white/40",
      bgGradient: "from-white/5",
      glowColor: "bg-white/5",
      text: "I am an avid reader with a deep appreciation for exploring diverse subjects. Consistently engaging with literature allows me to continuously learn new concepts, broadening my perspective and keeping my curiosity sharp outside of academic research."
    },
    {
      title: "Prototyping & Engineering",
      icon: <Wrench size={26} className="text-accent_flow" />,
      borderColor: "border-accent_flow/30 hover:border-accent_flow/60",
      bgGradient: "from-accent_flow/5",
      glowColor: "bg-accent_flow/10",
      text: "A natural curiosity drives me to build functional hardware and bring ideas to life. Recently, I designed and developed a prototype of an anti-theft automatic cycle lock named SmartLock360. I also conducted market analysis to ascertain a target market and estimate costs."
    },
    {
      title: "Operations & Management",
      icon: <Briefcase size={26} className="text-text_primary" />,
      borderColor: "border-border_col hover:border-text_secondary/50",
      bgGradient: "from-surface/80",
      glowColor: "bg-surface",
      text: "Ideas require structure to succeed. Serving as an Associate Manager at the IIT Madras Entrepreneurship Cell allowed me to coordinate large scale events. This experience sharpened my ability to manage operations and lead teams effectively."
    }
  ];

  return (
    <main className="pt-32 pb-32 min-h-screen">
      <section className="w-full">
        {/* Expanded to max-w-6xl to perfectly match the Academia page */}
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          {/* Main Heading & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Beyond the Laboratory
              </h2>
              <div className="h-px bg-border_col flex-grow opacity-50"></div>
            </div>
            <p className="text-lg text-text_secondary leading-relaxed max-w-8xl">
              While my research centers on the complexities of fluid mechanics, my time outside the lab is shaped by creative discipline, continuous learning, and practical engineering.
            </p>
          </motion.div>

          {/* Glowing Glass-Panel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                // Using the exact same panel classes from the Academia degree card
                className={`relative overflow-hidden glass-panel rounded-lg border ${item.borderColor} bg-gradient-to-br ${item.bgGradient} to-transparent p-8 h-full flex flex-col group transition-all duration-300`}
              >
                {/* Subtle background glow effect that gets brighter on hover */}
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-100 ${item.glowColor}`}></div>
                
                <div className="relative z-10 flex items-center gap-5 mb-6">
                  {/* Icon Box */}
                  <div className="p-3 bg-background/50 rounded border border-border_col shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                
                {/* flex-grow ensures all cards stretch properly in the grid */}
                <p className="text-base text-text_secondary leading-relaxed flex-grow relative z-10">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}