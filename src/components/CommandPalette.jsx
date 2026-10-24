import React, { useState, useEffect, useRef } from 'react';
import { Search, Smartphone, Briefcase, Cpu, FolderGit2, GraduationCap, Mail, Phone, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onShowToast }) {
  const { personal } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'mobile',
      title: 'Interactive Mobile Simulator',
      subtitle: 'Preview React Native apps on interactive phone frame',
      icon: <Smartphone size={16} />,
      action: () => {
        window.location.hash = '#mobile-showcase';
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'Work Experience (5.3+ Yrs)',
      subtitle: 'DailyDoc Healthcare & Enterprise Systems track record',
      icon: <Briefcase size={16} />,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'skills',
      title: 'Engineering Stack & Architecture',
      subtitle: 'React Native, Hermes JSI, Node.js, Cloud & DBs',
      icon: <Cpu size={16} />,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'Production Projects',
      subtitle: 'Case studies, GitHub code repos & live links',
      icon: <FolderGit2 size={16} />,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'education',
      title: 'Education & Certifications',
      subtitle: 'MCA (8.0 CGPA), BCA, and Node.js Certification',
      icon: <GraduationCap size={16} />,
      action: () => {
        window.location.hash = '#education';
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: 'Copy Email to Clipboard',
      subtitle: personal.email,
      icon: <Mail size={16} />,
      action: () => {
        navigator.clipboard.writeText(personal.email);
        onClose();
        if (onShowToast) onShowToast(`Copied ${personal.email} to clipboard!`);
      },
    },
    {
      id: 'copy-phone',
      title: 'Copy Phone Number',
      subtitle: personal.phone,
      icon: <Phone size={16} />,
      action: () => {
        navigator.clipboard.writeText(personal.phone);
        onClose();
        if (onShowToast) onShowToast(`Copied ${personal.phone} to clipboard!`);
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: 'wasimrz (repositories and open source)',
      icon: <GithubIcon size={16} />,
      action: () => {
        window.open(personal.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect with Wasim Reza',
      icon: <LinkedinIcon size={16} />,
      action: () => {
        window.open(personal.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette-modal" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-wrap">
          <Search size={18} color="#64748b" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or jump to section..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <span className="kbd-badge">ESC</span>
        </div>

        <div className="palette-list">
          {filteredActions.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', fontSize: '0.88rem' }}>
              No matching commands found
            </div>
          ) : (
            filteredActions.map((action, idx) => (
              <div
                key={action.id}
                className={`palette-item ${selectedIndex === idx ? 'active' : ''}`}
                onClick={action.action}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ color: selectedIndex === idx ? '#38bdf8' : '#94a3b8' }}>
                    {action.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{action.title}</div>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{action.subtitle}</div>
                  </div>
                </div>

                <ArrowRight size={14} style={{ opacity: selectedIndex === idx ? 1 : 0.3 }} />
              </div>
            ))
          )}
        </div>

        <div className="palette-footer">
          <span>Navigate with ↑ ↓ • Select with Enter</span>
          <span>Wasim Reza • Senior Software Engineer</span>
        </div>
      </div>
    </div>
  );
}
