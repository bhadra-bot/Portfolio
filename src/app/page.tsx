import { profile } from "@/data/profile";
import Section from "@/components/Section";

export default function Home() {
  const boldName = (text: string) => {
    const parts = text.split(profile.name);
    return parts.reduce((acc: React.ReactNode[], part, i) => {
      if (i === 0) return [part];
      return [...acc, <strong key={i} className="font-semibold">{profile.name}</strong>, part];
    }, []);
  };

  return (
    <div className="space-y-24">
      <Section id="education" title="Education">
        <div className="space-y-6">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-between md:items-start gap-2">
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted mt-1">{edu.institution}</p>
              </div>
              <div className="text-left md:text-right mt-1 md:mt-0 flex-shrink-0">
                <p className="text-sm font-medium text-foreground">{edu.year}</p>
                <p className="text-sm text-muted">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="publications" title="Publications & Conferences">
        <ul className="space-y-5 list-disc list-outside ml-4">
          {profile.publications.map((pub, idx) => (
            <li key={idx} className="text-muted text-sm leading-relaxed">
              {boldName(pub.authors)}. "{pub.title}." <span className="italic">{pub.venue}</span>. {pub.note && <span>{pub.note}</span>}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="research" title="Research Experience">
        <div className="space-y-10">
          {profile.researchExperience.map((exp, idx) => (
            <div key={idx} className="relative pl-4 border-l border-border hover:border-muted transition-colors">
              <h3 className="font-semibold text-lg text-foreground mb-1">{exp.title}</h3>
              <div className="flex flex-col text-sm text-muted mb-4 space-y-1">
                {exp.role && <span>{exp.role}</span>}
                {exp.pi && <span>PI / Guide: {exp.pi}</span>}
                {exp.dates && <span>{exp.dates}</span>}
              </div>
              <div className="space-y-6">
                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx}>
                    {proj.name && (
                      <div className="flex flex-col md:flex-row justify-between mb-2 gap-2">
                        <h4 className="font-medium text-sm text-foreground italic">{proj.name}</h4>
                        <span className="text-xs text-muted flex-shrink-0">{proj.dates}</span>
                      </div>
                    )}
                    <ul className="list-disc list-outside ml-4 space-y-1.5">
                      {proj.points?.map((point, ptIdx) => (
                        <li key={ptIdx} className="text-sm text-muted leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Engineering Projects">
        <div className="space-y-8">
          {profile.engineeringProjects.map((proj, idx) => (
            <div key={idx} className="relative pl-4 border-l border-border hover:border-muted transition-colors">
              <h3 className="font-semibold text-foreground mb-1">{proj.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-muted mb-3 gap-2">
                <span>{proj.role} {proj.guide && `| Guide: ${proj.guide}`}</span>
                <span className="flex-shrink-0">{proj.dates}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1.5">
                {proj.points.map((point, ptIdx) => (
                  <li key={ptIdx} className="text-sm text-muted leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="course-projects" title="Course Projects">
        <div className="grid grid-cols-1 gap-4">
          {profile.courseProjects.map((proj, idx) => (
            <div key={idx} className="p-5 border border-border rounded-lg bg-gray-50/30 hover:bg-gray-50/80 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                <h3 className="font-semibold text-sm text-foreground">{proj.title}</h3>
                <p className="text-xs text-muted flex-shrink-0">Guide: {proj.guide}</p>
              </div>
              <ul className="list-disc list-outside ml-4 text-sm text-muted space-y-1">
                {proj.points.map((point, ptIdx) => (
                  <li key={ptIdx} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements">
        <ul className="list-disc list-outside ml-4 space-y-2.5">
          {profile.achievements.map((ach, idx) => (
            <li key={idx} className="text-sm text-muted leading-relaxed">{ach}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}\n