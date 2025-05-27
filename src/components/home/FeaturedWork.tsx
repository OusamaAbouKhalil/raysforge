import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FeaturedWork: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section id="featured-work">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4C5526]">Featured Work</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A selection of our recent projects that showcase our creativity and expertise.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <Card key={project.id} hover>
            <Card.Image 
              src={project.image}
              alt={project.title}
            />
            <Card.Content>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#4C5526]/10 text-[#4C5526] rounded-full">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#4C5526]">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{project.client}</span>
                <span>{project.year}</span>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          variant="outline"
          onClick={() => navigate('/portfolio')}
        >
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedWork;