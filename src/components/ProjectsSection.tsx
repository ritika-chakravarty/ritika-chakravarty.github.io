import React from 'react';
import { portfolioData } from '../data/portfolio';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
            <span className="text-2xl animate-wiggle">🚀</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Key projects showcasing my data analytics and automation expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-panda group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                    <span>{project.duration}</span>
                    <span>•</span>
                    <span>{project.company || project.institution}</span>
                  </div>
                </div>
                <span className="text-2xl animate-gentle-bounce">💡</span>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
