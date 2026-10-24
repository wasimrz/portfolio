import React, { useState } from 'react';
import { Cpu, Smartphone, Server, Database, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TechStackMatrix() {
  const { skillsCategories } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredCategories = selectedFilter === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedFilter);

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'mobile', label: 'Mobile (React Native)' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & Cache' },
    { id: 'cloud', label: 'Cloud & DevOps' },
  ];

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'mobile': return <Smartphone size={20} color="var(--accent-cyan)" strokeWidth={2} />;
      case 'backend': return <Server size={20} color="var(--accent-emerald)" strokeWidth={2} />;
      case 'database': return <Database size={20} color="var(--accent-purple)" strokeWidth={2} />;
      case 'cloud': return <Cloud size={20} color="var(--accent-amber)" strokeWidth={2} />;
      default: return <Cpu size={20} color="var(--accent-cyan)" strokeWidth={2} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Engineering Stack & Architecture Radar</h2>
          <p className="section-desc">
            Depth-first technical capabilities honed over 5.3+ years. Real production tooling optimized for performance, scalability, and maintainability.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`app-tab-btn ${selectedFilter === opt.id ? 'active' : ''}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <div className="category-header">
                <div className="category-header-top">
                  <div className="category-icon-box">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span className="category-badge">{cat.badge}</span>
                </div>
                <h3 className="category-title">{cat.title}</h3>
              </div>

              <p className="category-desc">{cat.description}</p>

              <div className="skill-items-list">
                {cat.skills.map((s, idx) => (
                  <div key={idx} className="skill-item-row">
                    <div className="skill-name-row">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-level">{s.level}</span>
                    </div>

                    <div className="skill-micro-tags">
                      {s.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="micro-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
