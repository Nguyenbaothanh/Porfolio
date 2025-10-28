import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';

const Header: React.FC = () => {
  const { content } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-highlight">
          {content.header.name}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-text-secondary hover:text-highlight transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-accent hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-text-secondary hover:text-highlight transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-accent hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
