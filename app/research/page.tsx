import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function ResearchPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <Experience />
      <Projects />
      <Publications />
    </main>
  );
}