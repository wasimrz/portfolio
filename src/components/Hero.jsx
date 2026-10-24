import React from 'react';
import { Smartphone, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onShowToast }) {
  const { personal, metrics } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    if (onShowToast) {
      onShowToast(`Copied ${personal.email} to clipboard!`);
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        {/* Availability Beacon */}
        <div className="status-pill">
          <span className="pulse-dot" />
          <span>{personal.availability}</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Engineering high-performance <span className="hero-title-highlight">React Native apps</span> and scalable distributed backends.
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          I am <strong>{personal.name}</strong>, a Senior Software Engineer with <strong>{personal.experienceYears} years</strong> of production experience. I build resilient cross-platform mobile apps for iOS & Android, offline-first architectures, and high-throughput Node.js microservices.
        </p>

        {/* Call to Actions */}
        <div className="hero-actions">
          <a href="#mobile-showcase" className="btn-primary">
            <Smartphone size={16} />
            <span>Test Mobile Simulator</span>
            <ArrowRight size={16} />
          </a>

          <a href="#experience" className="btn-secondary">
            <span>View 5.3 Yrs Track Record</span>
          </a>

          <button onClick={handleCopyEmail} className="btn-secondary">
            <Mail size={16} />
            <span>{personal.email}</span>
          </button>

          <a 
            href={personal.github} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary"
            title="GitHub Profile"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Metrics Bar */}
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-detail">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
