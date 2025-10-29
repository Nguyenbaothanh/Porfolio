import React from 'react';
import { useContent } from '../contexts/ContentContext';
import type { Experience } from '../types';

const ExperienceItem: React.FC<Experience> = ({ role, company, companyDescription, period, description, tags }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    {/* Timeline visuals */}
    <div className="absolute left-0 h-full w-px bg-accent/30"></div>
    <div className="absolute left-[-9px] w-5 h-5 rounded-full bg-secondary border-2 border-accent group-hover:bg-highlight transition-colors duration-300"></div>
    
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
      <h3 className="text-xl font-bold text-highlight">{role}</h3>
      <p className="text-sm text-text-secondary mt-1 sm:mt-0">{period}</p>
    </div>
    
    <div className="flex items-center space-x-2 mb-4">
        <p className="text-md text-accent font-semibold">{company}</p>
        <span className="text-xs bg-secondary px-2 py-0.5 rounded-full text-text-secondary">{companyDescription}</span>
    </div>

    <ul className="list-disc list-inside text-text-secondary space-y-2">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <span key={tag} className="bg-primary text-highlight text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
      ))}
    </div>
  </div>
);


const Experience: React.FC = () => {
  const { content } = useContent();
  
  return (
    <section id="experience" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Work <span className="text-highlight">Experience</span></h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">My professional journey and key contributions.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {content.experience.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;