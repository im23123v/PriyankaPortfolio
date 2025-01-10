import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Formulation of Herbal Tablets",
    description: "A study to design and evaluate herbal tablets for anti-inflammatory effects.",
    image: "/image/prj1.png",
    tech: ["Pharmacognosy", "Analytical Chemistry", " Quality Testing"],
    liveUrl: "https://www.scribd.com/document/457872930/7-Herbal-formulations",
  },
  {
    title: "Patient Awareness Campaign on Diabetes",
    description: "Led a community awareness program to educate patients about diabetes management, nutrition, and medication adherence.",
    image: "/image/prj2.png",
    tech: ["Patient Counseling", "Communication", "Research"],
    liveUrl: "#",
  },
  {
    title: "Study on Drug Delivery Systems",
    description: "Analyzed the efficacy of novel drug delivery mechanisms for better bioavailability.",
    image: "/image/prj3.png",
    tech: ["Drug Delivery Research", "Pharmaceutics"],
    liveUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-rose-600 hover:text-rose-700">
                    <ExternalLink size={18} /> Doc
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}