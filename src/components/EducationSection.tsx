import React from 'react';
import { portfolioData } from '../data/portfolio';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-2xl animate-wiggle">🎓</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic foundation building my expertise in data analytics
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="card-panda">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-purple-600">{edu.institution}</p>
                  {edu.grade && <p className="text-sm text-green-600 font-medium">{edu.grade}</p>}
                </div>
                <span className="text-sm text-slate-500">{edu.duration}</span>
              </div>
              {edu.description && (
                <p className="text-slate-700 mb-4">{edu.description}</p>
              )}
              {edu.activities && (
                <p className="text-slate-600 text-sm mb-4">{edu.activities}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full"
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
