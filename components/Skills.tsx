import React from 'react';
import { useContent } from '../contexts/ContentContext';
import type { Skill } from '../types';

const SkillCard: React.FC<Skill> = ({ name, icon }) => (
  <div className="bg-secondary p-4 rounded-lg flex items-center space-x-4 transform hover:scale-110 hover:bg-accent transition-all duration-300 shadow-lg">
    <div dangerouslySetInnerHTML={{ __html: icon }} />
    <span className="font-semibold text-lg">{name}</span>
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
      <div className="max-w-5xl mx-auto space-y-12">
        {content.skills.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-bold text-center mb-8 text-highlight">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
