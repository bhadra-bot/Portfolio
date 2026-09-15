"use client";
import { motion } from "framer-motion";

export default function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-20 scroll-mt-24">
      <h2 className="text-xl font-bold mb-6 text-foreground border-b border-border pb-2">{title}</h2>
      <div className="space-y-8">{children}</div>
    </motion.section>
  );
}