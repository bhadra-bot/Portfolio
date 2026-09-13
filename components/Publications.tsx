"use client";
import { publications } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { BookOpen } from "lucide-react";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section id="publications" className="py-24 max-w-4xl mx-auto px-6">
      <SectionHeading index="03" title="Publications & Conferences" />
      
      <div className="flex flex-col gap-6">
        {publications.map((pub, i) => (
          <div key={i} className="glass-panel p-6 rounded-sm border-l-2 border-l-accent_flow flex gap-4">
            <div className="mt-1 hidden sm:block">
              <BookOpen className="text-text_secondary" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{pub.title}</h3>
              <p className="text-sm text-text_primary mb-2 font-medium">{pub.authors}</p>
              <p className="text-sm text-text_secondary italic">{pub.venue}</p>
              {pub.details && (
                <p className="text-xs font-mono text-accent_flame mt-3 bg-accent_flame/10 inline-block px-2 py-1 rounded">
                  {pub.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
