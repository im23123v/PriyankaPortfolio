import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Priyanka 
            <span className="block text-rose-600 mt-2">B. Pharmacy Graduate</span>
      </h1>
      <p className="text-gray-600 text-lg mb-8">
       College topper with a passion for advancing healthcare through innovative pharmaceutical solutions and research.
      </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-rose-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-rose-700 transition-colors">
                Contact Me
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-full hover:bg-rose-50 transition-colors">
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="/image/profile1.png"
              alt="Professional headshot"
              className="rounded-full w-96 h-96 object-cover border-8 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}