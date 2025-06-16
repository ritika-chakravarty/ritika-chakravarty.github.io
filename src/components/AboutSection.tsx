import React from 'react';
import { portfolioData } from '../data/portfolio';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
            <span className="text-2xl animate-wiggle">🐼</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get to know the person behind the data analytics expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            {about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="card-panda text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
                <p className="text-slate-600">Years Experience</p>
              </div>
              <div className="card-panda text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                <p className="text-slate-600">Interns Mentored</p>
              </div>
              <div className="card-panda text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <p className="text-slate-600">Hours Saved Monthly</p>
              </div>
              <div className="card-panda text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <p className="text-slate-600">Data Stories Told</p>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl transform rotate-3"></div>

            {/* Main content */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">My Journey</h3>
              </div>

              {/* Journey timeline */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Master's in Business Analytics</p>
                    <p className="text-sm text-slate-600">CY Tech (2021-2022)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">💼</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Data Analyst at Schneider Electric</p>
                    <p className="text-sm text-slate-600">Dubai, UAE (2023-Present)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Aspiring Business Analyst</p>
                    <p className="text-sm text-slate-600">Bridging data and strategy</p>
                  </div>
                </div>
              </div>

              {/* Fun fact */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl animate-gentle-bounce">🐼</span>
                  <div>
                    <p className="font-semibold text-green-800">Fun Fact</p>
                    <p className="text-sm text-green-700">
                      I believe data analysis is like bamboo for pandas - essential, nourishing, and endlessly fascinating!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-200 rounded-full opacity-70 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-200 rounded-full opacity-70 animate-float delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
