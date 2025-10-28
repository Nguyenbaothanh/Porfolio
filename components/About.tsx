import React from 'react';
import { useContent } from '../contexts/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();
  const { about } = content;
  return (
    <section id="about" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About <span className="text-highlight">Me</span></h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 shadow-2xl border-4 border-accent">
          <img
            src={about.image}
            alt="Nguyen Bao Thanh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-text-secondary mb-4">
            {about.p1}
          </p>
          <p className="text-text-secondary mb-4">
           {about.p2}
          </p>
          <p className="text-text-secondary">
            {about.p3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
