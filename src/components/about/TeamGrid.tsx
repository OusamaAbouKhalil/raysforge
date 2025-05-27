import React from 'react';
import { team } from '../../data/team';
import Card from '../ui/Card';

const TeamGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <Card key={member.id} hover className="h-full">
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={member.image}
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <Card.Content className="h-full flex flex-col">
            <h3 className="text-xl font-bold mb-1 text-[#4C5526]">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{member.role}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>
            {member.funFact && (
              <div className="mt-auto">
                <p className="text-sm italic text-gray-600 border-t border-gray-100 pt-3">
                  <span className="font-medium">Fun Fact:</span> {member.funFact}
                </p>
              </div>
            )}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default TeamGrid;