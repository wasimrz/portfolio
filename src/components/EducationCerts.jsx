import React from 'react';
import { GraduationCap, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCerts() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="section-title">Education & Verified Certifications</h2>
          <p className="section-desc">
            Formal computer science degrees combined with verified industry engineering certifications in Node.js, React Native, and Distributed Microservices.
          </p>
        </div>

        <div className="education-grid">
          {/* Degrees */}
          {education.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <img 
                src={edu.logo} 
                alt={edu.institution} 
                className="edu-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="edu-info">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-institution">{edu.institution}</span>
                <span className="edu-meta">{edu.period} • Score: {edu.score}</span>
                <p className="edu-desc">{edu.description}</p>
              </div>
            </div>
          ))}

          {/* Certifications */}
          {certifications.map((cert, idx) => (
            <div key={idx} className="edu-card">
              <img 
                src={cert.logo} 
                alt={cert.issuer} 
                className="edu-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="edu-info" style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <h3 className="edu-degree">{cert.title}</h3>
                    <Award size={16} color="#0284c7" />
                  </div>
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: '0.74rem',
                        color: 'var(--text-accent)',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                      title="Verify Certificate Credential"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <span className="edu-institution">{cert.subtitle}</span>
                <span className="edu-meta">
                  Issuer: {cert.issuer} • {cert.badge} • {cert.validity}
                </span>
                <p className="edu-desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
