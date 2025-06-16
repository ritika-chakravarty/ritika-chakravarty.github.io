import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <span className="text-2xl animate-wiggle">⚡</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technical proficiencies and business acumen that drive results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card-panda">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl">💻</span>
              <h3 className="text-2xl font-bold text-slate-800">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${isVisible ? 'animate-pulse-gentle' : ''}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Skills */}
          <div className="card-panda">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl">🧠</span>
              <h3 className="text-2xl font-bold text-slate-800">Business Skills</h3>
            </div>
            <div className="space-y-6">
              {skills.business.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${isVisible ? 'animate-pulse-gentle' : ''}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-slate-800 mb-8">Areas of Expertise</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-panda text-center">
              <span className="text-3xl mb-3 block">📊</span>
              <p className="font-medium text-slate-800">Data Visualization</p>
            </div>
            <div className="card-panda text-center">
              <span className="text-3xl mb-3 block">🤖</span>
              <p className="font-medium text-slate-800">Machine Learning</p>
            </div>
            <div className="card-panda text-center">
              <span className="text-3xl mb-3 block">📈</span>
              <p className="font-medium text-slate-800">Business Intelligence</p>
            </div>
            <div className="card-panda text-center">
              <span className="text-3xl mb-3 block">🎯</span>
              <p className="font-medium text-slate-800">Strategic Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
