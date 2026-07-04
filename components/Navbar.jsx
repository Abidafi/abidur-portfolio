"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center px-4 max-w-7xl mx-auto">
        <a href="#home" className="text-2xl font-bold gradient-text">
          AR
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#6C63FF] transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-effect glass-hover p-2 rounded-full transition-all text-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect mx-4 mt-2 rounded-2xl p-4"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#6C63FF] transition-colors px-3 py-2 rounded-lg hover:glass-effect"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}