"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CVPage() {
  return (
    <main className="pt-32 pb-32 min-h-screen">
      <section className="w-full">
        {/* Expanded to max-w-6xl to match the rest of the site */}
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
              href="/Bhadra_Sreelatha_CV.pdf" 
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-accent_flame/10 border border-accent_flame text-accent_flame hover:bg-accent_flame hover:text-white transition-all font-mono text-sm rounded-sm"
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
            <object 
              data="/Bhadra_Sreelatha_CV.pdf" 
              type="application/pdf" 
              className="w-full h-full"
            >
              {/* Fallback text and button for mobile browsers that do not support in-line PDFs */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <p className="text-text_secondary mb-4 text-lg">
                  Your browser does not support viewing PDFs directly.
                </p>
                <a 
                  href="/Bhadra_Sreelatha_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border_col text-white hover:border-accent_flow transition-colors font-mono text-sm rounded-sm"
                >
                  Click here to view the PDF
                </a>
              </div>
            </object>
          </motion.div>
          
        </div>
      </section>
    </main>
  );
}