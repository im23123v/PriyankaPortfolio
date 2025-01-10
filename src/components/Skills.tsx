import React from 'react';
import { Code2, Palette, Database, Brain } from 'lucide-react';
import GlassBackground from './GlassBackground';

const skills = [
  {
    category: " Pharmaceutical Sciences",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Pharmacology", "Pharmaceutical Chemistry", "Drug Formulation", "Pharmaceutics"]
  },
  {
    category: "Laboratory Skills",
    icon: <Palette className="w-6 h-6" />,
    items: ["Analytical Techniques (HPLC, UV-Vis Spectroscopy)", "Microbiology Testing", "Quality Control & Assurance", "Sterile Techniques"]
  },
  {
    category: "Research Skills",
    icon: <Database className="w-6 h-6" />,
    items: ["Clinical Trials Basics", "Research Paper Review", "Drug Interaction Studies", "Patient Counseling"]
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    items: ["Attention to Detail", "Strong Communication", "Empathy and Patient Care", "Time Management"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <GlassBackground>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            {skills.map((skill) => (
              <div key={skill.category} className="p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassBackground>
      </div>
    </section>
  );
}