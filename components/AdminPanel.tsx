import React, { useState, useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';
import type { PortfolioContent, Project, SkillCategory, Skill } from '../types';

const AdminPanel: React.FC = () => {
  const { content, setContent, resetContent } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [editableContent, setEditableContent] = useState<PortfolioContent>(content);

  useEffect(() => {
    setEditableContent(content);
  }, [content, isOpen]);

  const handleInputChange = (section: keyof PortfolioContent, field: string, value: string, index?: number) => {
    setEditableContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      if (index !== undefined && Array.isArray(newContent[section])) {
        const item = (newContent[section] as any[])[index];
        if(item) {
            item[field] = value;
        }
      } else if (typeof newContent[section] === 'object' && newContent[section] !== null) {
        (newContent[section] as any)[field] = value;
      }
      return newContent;
    });
  };
  
  // Project handlers
  const handleProjectTagsChange = (index: number, value: string) => {
     setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        if (newContent.projects[index]) {
            newContent.projects[index].tags = value.split(',').map(tag => tag.trim());
        }
        return newContent;
    });
  }
  
  const handleAddProject = () => {
      const newProject: Project = {
          title: 'New Project',
          description: 'A brief description of your new project.',
          image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&h=400&fit=crop',
          tags: ['new', 'tag'],
          repoUrl: ''
      };
      setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        newContent.projects.push(newProject);
        return newContent;
      });
  }

  const handleRemoveProject = (index: number) => {
      setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        newContent.projects.splice(index, 1);
        return newContent;
      });
  }

  // Skill Handlers
  const handleCategoryTitleChange = (catIndex: number, value: string) => {
    setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        if(newContent.skills[catIndex]) {
            newContent.skills[catIndex].title = value;
        }
        return newContent;
    });
  };

  const handleAddCategory = () => {
    const newCategory: SkillCategory = { title: "New Category", skills: [] };
    setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        newContent.skills.push(newCategory);
        return newContent;
    });
  };

  const handleRemoveCategory = (catIndex: number) => {
    setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        newContent.skills.splice(catIndex, 1);
        return newContent;
    });
  };

  const handleSkillChange = (catIndex: number, skillIndex: number, field: keyof Skill, value: string) => {
    setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        const category = newContent.skills[catIndex];
        if (category && category.skills[skillIndex]) {
            (category.skills[skillIndex] as any)[field] = value;
        }
        return newContent;
    });
  };

  const handleAddSkill = (catIndex: number) => {
    const newSkill: Skill = { name: "New Skill", icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6a.96.96 0 00-.96.96v4.08H6.96a.96.96 0 100 1.92h4.08v4.08a.96.96 0 101.92 0v-4.08h4.08a.96.96 0 100-1.92h-4.08V6.96A.96.96 0 0012 6z"/></svg>' };
    setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        const category = newContent.skills[catIndex];
        if (category) {
            category.skills.push(newSkill);
        }
        return newContent;
    });
  };

  const handleRemoveSkill = (catIndex: number, skillIndex: number) => {
    setEditableContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));
        const category = newContent.skills[catIndex];
        if (category) {
            category.skills.splice(skillIndex, 1);
        }
        return newContent;
    });
  };


  const handleSave = () => {
    setContent(editableContent);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-accent text-white py-3 px-5 rounded-full shadow-lg z-50 hover:bg-blue-500 transition-colors"
        aria-label="Edit Website"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" /></svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-lg h-full bg-secondary text-white shadow-xl overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-highlight">Edit Website Content</h2>
          <button onClick={() => setIsOpen(false)} className="text-white text-3xl font-bold">&times;</button>
        </div>

        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-primary p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-lg">Hero Section</h3>
            <label className="block text-sm">Line 1:</label>
            <input type="text" value={editableContent.hero.line1} onChange={(e) => handleInputChange('hero', 'line1', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
            <label className="block text-sm mt-2">Line 2 (text before highlight):</label>
            <input type="text" value={editableContent.hero.line2} onChange={(e) => handleInputChange('hero', 'line2', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
            <label className="block text-sm mt-2">Line 3 (highlighted text):</label>
            <input type="text" value={editableContent.hero.line3} onChange={(e) => handleInputChange('hero', 'line3', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
            <label className="block text-sm mt-2">Description:</label>
            <textarea value={editableContent.hero.description} onChange={(e) => handleInputChange('hero', 'description', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1 h-24"/>
          </div>
          
          {/* About Section */}
          <div className="bg-primary p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-lg">About Section</h3>
            <label className="block text-sm">Image URL:</label>
            <input type="text" value={editableContent.about.image} onChange={(e) => handleInputChange('about', 'image', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
            <label className="block text-sm mt-2">Paragraph 1:</label>
            <textarea value={editableContent.about.p1} onChange={(e) => handleInputChange('about', 'p1', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1 h-24"/>
            <label className="block text-sm mt-2">Paragraph 2:</label>
            <textarea value={editableContent.about.p2} onChange={(e) => handleInputChange('about', 'p2', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1 h-24"/>
            <label className="block text-sm mt-2">Paragraph 3:</label>
            <textarea value={editableContent.about.p3} onChange={(e) => handleInputChange('about', 'p3', e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1 h-24"/>
          </div>

          {/* Skills Section */}
          <div className="bg-primary p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-lg">Skills Section</h3>
            {editableContent.skills.map((category, catIndex) => (
              <div key={catIndex} className="bg-secondary p-3 my-2 rounded-md border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                    <input 
                      type="text" 
                      value={category.title} 
                      onChange={(e) => handleCategoryTitleChange(catIndex, e.target.value)}
                      className="w-full bg-gray-700 p-2 rounded font-semibold text-highlight"
                    />
                    <button onClick={() => handleRemoveCategory(catIndex)} className="text-red-500 hover:text-red-400 ml-2 text-xs">Remove Category</button>
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-primary p-2 my-2 rounded border border-gray-700">
                    <div className="flex justify-between items-center">
                       <label className="block text-sm">Skill #{skillIndex + 1}</label>
                       <button onClick={() => handleRemoveSkill(catIndex, skillIndex)} className="text-red-500 hover:text-red-400 text-xs">Remove</button>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Skill Name"
                      value={skill.name} 
                      onChange={(e) => handleSkillChange(catIndex, skillIndex, 'name', e.target.value)}
                      className="w-full bg-gray-700 p-2 rounded mt-1"
                    />
                    <textarea 
                      placeholder="SVG Icon Markup"
                      value={skill.icon} 
                      onChange={(e) => handleSkillChange(catIndex, skillIndex, 'icon', e.target.value)}
                      className="w-full bg-gray-700 p-2 rounded mt-2 h-24 font-mono text-xs"
                    />
                  </div>
                ))}
                <button onClick={() => handleAddSkill(catIndex)} className="w-full mt-2 bg-blue-700 hover:bg-blue-600 p-2 rounded text-sm">Add Skill to {category.title}</button>
              </div>
            ))}
            <button onClick={handleAddCategory} className="w-full mt-4 bg-green-600 hover:bg-green-500 p-2 rounded">Add New Category</button>
          </div>

          {/* Projects Section */}
          <div className="bg-primary p-4 rounded-lg">
             <h3 className="font-bold mb-2 text-lg">Projects Section</h3>
              {editableContent.projects.map((project, index) => (
                <div key={index} className="bg-secondary p-3 my-2 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Project {index + 1}</h4>
                        <button onClick={() => handleRemoveProject(index)} className="text-red-500 hover:text-red-400 text-xs">Remove</button>
                    </div>
                    <label className="block text-sm">Title:</label>
                    <input type="text" value={project.title} onChange={(e) => handleInputChange('projects', 'title', e.target.value, index)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
                    <label className="block text-sm mt-2">Description:</label>
                    <textarea value={project.description} onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)} className="w-full bg-gray-700 p-2 rounded mt-1 h-20"/>
                    <label className="block text-sm mt-2">Image URL:</label>
                    <input type="text" value={project.image} onChange={(e) => handleInputChange('projects', 'image', e.target.value, index)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
                    <label className="block text-sm mt-2">Tags (comma separated):</label>
                    <input type="text" value={project.tags.join(', ')} onChange={(e) => handleProjectTagsChange(index, e.target.value)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
                    <label className="block text-sm mt-2">Repo URL:</label>
                    <input type="text" value={project.repoUrl} onChange={(e) => handleInputChange('projects', 'repoUrl', e.target.value, index)} className="w-full bg-gray-700 p-2 rounded mt-1"/>
                </div>
              ))}
              <button onClick={handleAddProject} className="w-full mt-4 bg-blue-600 hover:bg-blue-500 p-2 rounded">Add Project</button>
          </div>
        </div>

        <div className="mt-8 flex flex-col space-y-4">
            <button onClick={handleSave} className="bg-highlight text-primary font-bold py-3 px-6 rounded-lg w-full">Save Changes</button>
            <button onClick={resetContent} className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg w-full">Reset to Defaults</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;