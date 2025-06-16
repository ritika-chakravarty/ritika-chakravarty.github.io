import React from 'react';
import { portfolioData } from '../data/portfolio';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <span className="text-2xl animate-wiggle">🏆</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional certifications validating my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card-panda group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl animate-gentle-bounce">🎖️</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-sm text-slate-500 mb-2">{cert.date}</p>
                {cert.expiryDate && (
                  <p className="text-xs text-slate-400">Expires: {cert.expiryDate}</p>
                )}
              </div>

              {cert.credentialId && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-600 mb-1">Credential ID</p>
                  <p className="text-xs font-mono text-slate-800 break-all">{cert.credentialId}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievement summary */}
        <div className="mt-16 text-center">
          <div className="card-panda inline-block">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{certifications.length}</div>
                <p className="text-sm text-slate-600">Certifications</p>
              </div>
              <span className="text-3xl animate-wiggle">🐼</span>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4+</div>
                <p className="text-sm text-slate-600">Years Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
