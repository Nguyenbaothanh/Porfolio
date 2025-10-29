import React from 'react';
import { useContent } from '../contexts/ContentContext';
import type { Skill } from '../types';

const SkillChip: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-secondary px-4 py-2 rounded-full text-text-secondary font-medium transform hover:scale-110 hover:bg-accent hover:text-white transition-all duration-300 shadow-md cursor-default">
    {name}
  </div>
);

const Skills: React.FC = () => {
  const { content } = useContent();
  
  return (
    <section id="skills" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">My Tech Stack & <span className="text-highlight">Skills</span></h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">The technologies I use to turn ideas into reality.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.skills.map((category) => (
          <div key={category.title} className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center mb-6 text-highlight">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <SkillChip key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;