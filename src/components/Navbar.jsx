import React from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenPalette, onShowToast, theme, onToggleTheme }) {
  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    if (onShowToast) {
      onShowToast(`Copied ${personal.email} to clipboard!`);
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand */}
          <a href="#" className="navbar-brand">
            <img 
              src={personal.avatar} 
              alt={personal.name} 
              className="brand-avatar"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80";
              }}
            />
            <div className="brand-text">
              <span className="brand-name">{personal.name}</span>
              <span className="brand-tag">Senior Software Engineer</span>
            </div>
          </a>

          {/* Nav Links */}
          <nav>
            <ul className="navbar-links">
              <li>
                <a href="#mobile-showcase" className="nav-link">Mobile Apps</a>
              </li>
              <li>
                <a href="#experience" className="nav-link">Experience</a>
              </li>
              <li>
                <a href="#skills" className="nav-link">Tech Radar</a>
              </li>
              <li>
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li>
                <a href="#education" className="nav-link">Education</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Quick Actions */}
          <div className="nav-actions">
            <button 
              onClick={onOpenPalette} 
              className="cmd-k-btn"
              title="Open Command Palette"
            >
              <Search size={14} />
              <span>Search</span>
              <span className="kbd-badge">⌘K</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <button 
              onClick={handleCopyEmail}
              className="btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.82rem' }}
            >
              Copy Email
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
