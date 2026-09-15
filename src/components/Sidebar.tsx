"use client";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Education", href: "#education" },
    { name: "Publications", href: "#publications" },
    { name: "Research Experience", href: "#research" },
    { name: "Engineering Projects", href: "#projects" },
    { name: "Course Projects", href: "#course-projects" },
    { name: "Achievements", href: "#achievements" }
  ];

  return (
    <header className="md:w-72 md:flex-shrink-0 md:sticky md:top-0 md:h-screen py-12 px-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border bg-white/50 backdrop-blur-sm">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">{profile.name}</h1>
        <p className="text-sm text-muted mb-8 leading-relaxed">{profile.title}<br />{profile.institution}</p>
        <nav className="hidden md:flex flex-col space-y-3">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-muted hover:text-foreground transition-colors">{item.name}</a>
          ))}
        </nav>
      </div>
      <div className="flex space-x-4 mt-8 md:mt-0">
        <a href={`mailto:${profile.contact.email}`} className="text-muted hover:text-foreground transition-colors" aria-label="Email"><Mail size={20} /></a>
      </div>
    </header>
  );
}