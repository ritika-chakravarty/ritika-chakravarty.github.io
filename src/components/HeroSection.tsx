import React from 'react';
import { portfolioData } from '../data/portfolio';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-2">{personal.pronouns}</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Ritika
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 mb-4">
              {personal.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {personal.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-medium hover:border-green-500 hover:text-green-600 transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <div className="flex items-center text-sm text-slate-500">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {personal.location}
            </div>
          </div>
        </div>

        {/* Panda Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Floating Background Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-100 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-emerald-100 rounded-full opacity-60 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-slate-100 rounded-full opacity-60 animate-pulse delay-300"></div>

            {/* Main Panda Character */}
            <div className="relative z-10 w-80 h-80 mx-auto">
              {/* Panda Body */}
              <div className="w-full h-full bg-white rounded-full relative border-4 border-slate-200 shadow-xl">
                {/* Ears */}
                <div className="absolute -top-8 left-12 w-16 h-16 bg-slate-800 rounded-full"></div>
                <div className="absolute -top-8 right-12 w-16 h-16 bg-slate-800 rounded-full"></div>
                <div className="absolute -top-4 left-16 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute -top-4 right-16 w-8 h-8 bg-white rounded-full"></div>

                {/* Eyes */}
                <div className="absolute top-20 left-16 w-12 h-16 bg-slate-800 rounded-full transform rotate-12"></div>
                <div className="absolute top-20 right-16 w-12 h-16 bg-slate-800 rounded-full transform -rotate-12"></div>
                <div className="absolute top-24 left-18 w-4 h-4 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-24 right-18 w-4 h-4 bg-white rounded-full animate-bounce delay-200"></div>

                {/* Nose */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-slate-800 rounded-full"></div>

                {/* Mouth */}
                <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-slate-800 rounded-b-full"></div>

                {/* Arms holding a laptop/tablet */}
                <div className="absolute bottom-16 left-8 w-8 h-12 bg-slate-800 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-16 right-8 w-8 h-12 bg-slate-800 rounded-full transform -rotate-45"></div>

                {/* Laptop/Data visualization */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-14 bg-slate-700 rounded-lg">
                  <div className="w-full h-3/4 bg-green-400 rounded-t-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-1 w-2 h-2 bg-green-600 rounded-sm"></div>
                    <div className="absolute bottom-0 left-4 w-2 h-4 bg-green-600 rounded-sm"></div>
                    <div className="absolute bottom-0 left-7 w-2 h-3 bg-green-600 rounded-sm"></div>
                    <div className="absolute bottom-0 left-10 w-2 h-6 bg-green-600 rounded-sm"></div>
                    <div className="absolute bottom-0 left-13 w-2 h-2 bg-green-600 rounded-sm"></div>
                    <div className="text-xs text-white font-bold absolute top-1 left-1">📊</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating data icons */}
            <div className="absolute top-10 right-0 animate-float">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">
                📈
              </div>
            </div>
            <div className="absolute bottom-20 left-0 animate-float delay-500">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                💹
              </div>
            </div>
            <div className="absolute top-1/3 right-20 animate-float delay-1000">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-sm font-bold">
                📊
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
