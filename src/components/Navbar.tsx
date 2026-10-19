"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Briefcase, Trophy, Code, Brain, FolderGit2, PenTool, Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Writing", href: "#writing", icon: PenTool },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-sm transition-colors">
      <div className="text-xl font-bold italic tracking-tight">Shahjalal Shohag</div>
      
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors">
            <item.icon size={16} /> {item.name}
          </Link>
        ))}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
        </button>
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-slate-600 dark:text-slate-300">
          {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-4 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              <item.icon size={16} /> {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}