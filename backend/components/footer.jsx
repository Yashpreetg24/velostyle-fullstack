import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

// Simple footer with logo, copyright, and social icons
const Footer = () => {
  return (
    <footer className="w-full bg-background-light dark:bg-black/20 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Mini logo + brand name */}
          <div className="flex items-center gap-3">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
              </svg>
            </div>
            <span className="font-serif text-xl font-bold text-gray-900 dark:text-white">
              Velostyle
            </span>
          </div>

          {/* Copyright text */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Velostyle. All rights reserved.
          </div>

          {/* Social icons (placeholder links) */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
