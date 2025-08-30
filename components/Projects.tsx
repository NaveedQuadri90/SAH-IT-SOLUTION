import React from 'react';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden flex flex-col border border-white/20 h-full">
    <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
      <p className="text-sm text-slate-400 mb-2">{project.location}</p>
      <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
      <div>
        <h4 className="font-semibold text-pink-500 mb-2">Scope of Work:</h4>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          {project.scope.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            We are proud to have worked on a diverse range of prestigious projects across the UAE.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;