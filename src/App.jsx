import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileShowcase from './components/MobileShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechStackMatrix from './components/TechStackMatrix';
import FeaturedProjects from './components/FeaturedProjects';
import EducationCerts from './components/EducationCerts';
import ContactSection from './components/ContactSection';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import './styles/portfolio.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('wasim_portfolio_theme') || 'light';
  });
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const { personal } = portfolioData;

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wasim_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      showToast(next === 'light' ? "Activated Bespoke Architectural Light Theme" : "Activated Dark Obsidian Theme");
      return next;
    });
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar 
        onOpenPalette={() => setIsPaletteOpen(true)} 
        onShowToast={showToast} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main>
        {/* Hero with metrics */}
        <Hero onShowToast={showToast} />

        {/* The Star Feature: Interactive Mobile Device Simulator */}
        <MobileShowcase onShowToast={showToast} />

        {/* 5+ Years Experience Timeline */}
        <ExperienceTimeline />

        {/* Technical Capabilities Radar */}
        <TechStackMatrix />

        {/* Production Projects & Code */}
        <FeaturedProjects />

        {/* Education & Certs */}
        <EducationCerts />

        {/* Direct Contact & Inquiry */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                {personal.name} • {personal.role}
              </div>
              <div style={{ fontSize: '0.78rem' }}>
                Specialized in React Native (iOS & Android) & Scalable Cloud Microservices
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span className="footer-badge">
                5+ Years Production Experience
              </span>

              <button 
                onClick={scrollToTop}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                title="Scroll back to top"
              >
                <ArrowUp size={14} />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Command Palette Modal */}
      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
        onShowToast={showToast}
      />

      {/* Raycast-style Toast */}
      <Toast 
        message={toastMessage} 
        onDismiss={() => setToastMessage(null)} 
      />
    </div>
  );
}
