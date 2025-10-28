import React from 'react';
import { useContent } from '../contexts/ContentContext';
import type { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, description, image, tags, liveUrl, repoUrl }) => (
  <div className="bg-secondary rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-highlight">{title}</h3>
      <p className="text-text-secondary mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-primary text-highlight text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live Demo</a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Source Code</a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const { content } = useContent();
  return (
    <section id="projects" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '600ms', opacity: 0 }}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-highlight">Projects</span></h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">A few projects I've built. Feel free to explore.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
