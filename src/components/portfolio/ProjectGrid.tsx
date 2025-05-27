import React, { useState } from 'react';
import { projects } from '../../data/projects';
import Card from '../ui/Card';

type Category = 'all' | 'marketing' | 'design' | 'content' | 'digital';

const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' },
    { value: 'content', label: 'Content' },
    { value: 'digital', label: 'Digital' }
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.value
                ? 'bg-[#4C5526] text-[#F5E3CF]'
                : 'bg-[#4C5526]/10 text-[#4C5526] hover:bg-[#4C5526]/20'
            }`}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} hover className="h-full">
            <Card.Image 
              src={project.image}
              alt={project.title}
            />
            <Card.Content className="h-full flex flex-col">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#4C5526]/10 text-[#4C5526] rounded-full">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#4C5526]">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-auto">
                <span>{project.client}</span>
                <span>{project.year}</span>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;