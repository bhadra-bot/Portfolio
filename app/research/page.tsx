import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects"; // (This is your Engineering Projects section)

export default function ResearchPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      {/* 1. Research Experience */}
      <Experience />
      
      {/* 2. Publications & Conferences */}
      <Publications />
      
      {/* 3. Engineering Projects */}
      <Projects />
    </main>
  );
}