"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CVPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pdfUrl = `${basePath}/Bhadra_Sreelatha_CV.pdf`;
  
  // NEW: We add ?v=2 to the end of the URL. 
  // Next time you update your CV, you can just change this to ?v=3!
  const iframeUrl = `${pdfUrl}?v=2#view=FitH`;

  return (
    <main className="pt-32 pb-32 min-h-screen">
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Curriculum Vitae
            </h2>
            <div className="h-px bg-border_col flex-grow opacity-50"></div>
          </motion.div>

          {/* Action Bar (Download Button) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-end mb-6"
          >
            <a 
              href={pdfUrl} 
              download="Bhadra_Sreelatha_CV.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent_flame/10 border border-accent_flame text-accent_flame hover:bg-accent_flame hover:text-white transition-all text-sm rounded-sm"
            >
              <Download size={18} />
              Download PDF
            </a>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full h-[75vh] md:h-[85vh] border border-border_col rounded-sm overflow-hidden glass-panel bg-surface/50"
          >
            <iframe 
              src={iframeUrl} // Using the new Cache-Busted URL here
              title="Bhadra Sreelatha CV"
              className="w-full h-full border-none"
            />
          </motion.div>
          
        </div>
      </section>
    </main>
  );
}
