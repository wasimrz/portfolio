import React from 'react';
import { Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const { workExperience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">5+ Years Production Experience</h2>
          <p className="section-desc">
            Proven track record designing, shipping, and maintaining real-time streaming platforms, microservices, and high-performance React Native mobile applications.
          </p>
        </div>

        <div className="experience-timeline">
          {workExperience.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-dot" />
              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <div className="company-row">
                      {exp.companyUrl !== '#' ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="company-name"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink size={13} style={{ display: 'inline', marginLeft: 4 }} />
                        </a>
                      ) : (
                        <span className="company-name" style={{ color: 'var(--text-primary)', cursor: 'default' }}>{exp.company}</span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span className="period-badge">{exp.period}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="experience-summary">{exp.summary}</p>

                <ul className="experience-bullets">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <span className="bullet-dash">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="tech-tags-list" style={{ marginBottom: 0 }}>
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
