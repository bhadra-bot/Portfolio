"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CVPage() {
  // Dynamically grab the path just like we did for the images!
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pdfUrl = `${basePath}/Bhadra_Sreelatha_CV.pdf`;

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

          {/* PDF Viewer (Upgraded to iframe) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full h-[75vh] md:h-[85vh] border border-border_col rounded-sm overflow-hidden glass-panel bg-surface/50"
          >
            {/* 
              Using iframe is much more reliable across all browsers. 
              #view=FitH tells the PDF to automatically fit the width of the screen! 
            */}
            <iframe 
              src={`${pdfUrl}#view=FitH`}
              title="Bhadra Sreelatha CV"
              className="w-full h-full border-none"
            />
          </motion.div>
          
        </div>
      </section>
    </main>
  );
}