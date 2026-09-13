import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import { personalInfo } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Publications />
      <Education />
      
      <footer className="py-8 text-center border-t border-border_col mt-20">
        <p className="font-mono text-xs text-text_secondary">
          Designed & Built for {personalInfo.name} <br/>
          Thermofluids & Aerospace Engineering Research Portfolio
        </p>
      </footer>
    </main>
  );
}
