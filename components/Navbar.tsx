"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Academia", href: "/education" },
    { name: "Research & Technical Experience", href: "/research" },
    { name: "Extra-Curriculars", href: "/extra-curriculars" },
    { name: "Curriculum Vitae", href: "/cv" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border_col py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Changed href from "#" to "/" to route back to Home */}
        <Link href="/" className="font-mono text-accent_flame text-lg font-semibold tracking-tighter hover:text-accent_flow transition-colors">
          Home
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <Link key={i} href={link.href} className="mono-label hover:text-accent_flow transition-colors text-xs">
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-text_primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-surface border-b border-border_col p-6 flex flex-col gap-6 md:hidden"
        >
          {links.map((link, i) => (
            <Link key={i} href={link.href} onClick={() => setMobileMenuOpen(false)} className="mono-label text-base">
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}