import React from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
];

export default function QuickLinks() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Quick Links</h4>
      <ul className="space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-gray-400 hover:text-rose-500 transition-colors 
                hover:translate-x-1 transform inline-block"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}