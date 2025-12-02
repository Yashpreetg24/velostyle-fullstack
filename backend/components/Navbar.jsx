import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Top navigation bar with scroll-aware background + mobile menu
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // When user scrolls down, add a background + border to navbar
  useMotionValueEvent(scrollY, 'change', (latestY) => {
    setIsScrolled(latestY > 50);
  });

  // Simple list of nav links that we reuse in desktop + mobile
  const navLinks = [
    { name: 'What is Velostyle?', href: '#what-is-velostyle' },
    { name: 'For Customers', href: '#for-customers' },
    { name: 'For Brands', href: '#for-brands' },
    { name: 'Categories', href: '#categories' },
  ];

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background-dark/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Logo + brand name; click scrolls back to top */}
        <div
          className="flex items-center gap-3 text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            className="size-8 bg-primary rounded-full flex items-center justify-center text-background-dark"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
            </svg>
          </motion.div>
          <h2 className="font-serif text-2xl font-bold tracking-tight">Velostyle</h2>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle (hamburger / close icon) */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background-dark border-t border-white/10"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/90 hover:text-primary font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;