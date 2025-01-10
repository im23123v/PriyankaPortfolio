import React from 'react';
import SocialLinks from './SocialLinks';
import Newsletter from './Newsletter';
import QuickLinks from './QuickLinks';
import FooterWave from './FooterWave';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-8">
      <FooterWave />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-rose-500">Prinka Karne</h3>
            <p className="text-gray-400">Crafting beautiful digital experiences with modern web technologies.</p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <QuickLinks />

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <Newsletter />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sarah Parker. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rose-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}