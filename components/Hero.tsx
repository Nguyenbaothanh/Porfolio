import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center animate-fade-in-up">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
          <span className="text-text-secondary">{hero.line1}</span><br />
          {hero.line2} <span className="text-highlight">{hero.line3}</span> Specialist.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          {hero.description}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="bg-accent hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-secondary hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
