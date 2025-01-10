import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-600">Priyanka Karne</h1>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-rose-600 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-rose-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-rose-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          <button className="bg-rose-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-rose-700 transition-colors">
            <Download size={18} />
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}