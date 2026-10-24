import React from 'react';
import { FolderGit2, ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProjects() {
  const { featuredProjects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Systems</span>
          </div>
          <h2 className="section-title">Production Projects & Case Studies</h2>
          <p className="section-desc">
            Architectural solutions built with modern patterns. Clean, maintainable codebases solving real-world challenges in mobile and web systems.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((p, idx) => (
            <div key={idx} className="project-card">
              <div>
                <div className="project-top-row">
                  <span className="project-category">{p.category}</span>
                  <div className="project-links">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn-link"
                        title="View Source on GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn-link"
                        title="Open Live Application"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>

              <div>
                {p.impact && (
                  <div className="project-impact-box" style={{ marginBottom: 16 }}>
                    <Zap size={14} />
                    <span>{p.impact}</span>
                  </div>
                )}

                <div className="tech-tags-list" style={{ marginBottom: 0 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
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
