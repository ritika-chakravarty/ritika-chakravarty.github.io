import React from 'react';
import { portfolioData } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-2xl animate-wiggle">💼</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey in data analytics and business intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-400"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-green-400 flex items-center justify-center shadow-lg">
                    <span className="text-lg animate-gentle-bounce">🐼</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="card-panda">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">{exp.role}</h3>
                        <p className="text-lg font-semibold text-green-600 mb-1">{exp.company}</p>
                        <p className="text-sm text-slate-500 mb-2">{exp.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-medium rounded-full">
                          {exp.type}
                        </span>
                        <p className="text-sm text-slate-500 mt-1">{exp.duration}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <span className="text-green-500 mt-1 flex-shrink-0">🌟</span>
                          <p className="text-slate-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 text-sm rounded-full border border-slate-300 hover:shadow-md transition-shadow duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="card-panda inline-block">
            <div className="flex items-center space-x-4">
              <span className="text-3xl animate-wiggle">🚀</span>
              <div className="text-left">
                <p className="font-semibold text-slate-800">Ready for New Challenges</p>
                <p className="text-sm text-slate-600">Looking to transition into a Business Analyst role</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
