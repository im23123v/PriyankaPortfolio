import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-rose-500">Priyanka Karne.</h3>
            <p className="text-gray-400 mt-2"> B. Pharmacy Graduate.</p>
          </div>
          <div className="flex gap-6">
            
            <a href="#" className="hover:text-rose-500 transition-colors">
              <Linkedin size={24} />
            </a>
            
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Priyanka Karne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}