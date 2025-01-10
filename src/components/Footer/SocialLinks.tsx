import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
            hover:bg-rose-500 transition-all duration-300 transform hover:scale-110 
            hover:rotate-6 group"
        >
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </a>
      ))}
    </div>
  );
}