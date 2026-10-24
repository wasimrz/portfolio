import React, { useState } from 'react';
import { Mail, Phone, MapPin, BookOpen, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${text} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) {
      if (onShowToast) onShowToast("Please fill in your email and message");
      return;
    }
    const mailtoUrl = `mailto:${personal.email}?subject=Inquiry from ${encodeURIComponent(formState.name || 'Portfolio Visitor')}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.email)}`;
    window.location.href = mailtoUrl;
    if (onShowToast) {
      onShowToast("Opening your default mail client...");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Discuss Mobile & Engineering Opportunities</h2>
          <p className="section-desc">
            Currently available for Senior Software Engineer, React Native Specialist, and Fullstack Engineering roles. Response within 24 hours guaranteed.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Direct Cards */}
          <div className="contact-card-list">
            {/* Email */}
            <div className="contact-tile">
              <div className="tile-info">
                <div className="tile-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="tile-label">Direct Email</div>
                  <div className="tile-value">{personal.email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="tile-action-btn"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone */}
            <div className="contact-tile">
              <div className="tile-info">
                <div className="tile-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="tile-label">Phone / WhatsApp</div>
                  <div className="tile-value">{personal.phone}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="tile-action-btn"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Location */}
            <div className="contact-tile">
              <div className="tile-info">
                <div className="tile-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="tile-label">Current Base</div>
                  <div className="tile-value">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-tile"
                style={{ textDecoration: 'none', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <GithubIcon size={16} color="var(--text-accent)" />
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>GitHub</span>
                </div>
              </a>

              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-tile"
                style={{ textDecoration: 'none', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <LinkedinIcon size={16} color="var(--text-accent)" />
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>LinkedIn</span>
                </div>
              </a>

              <a 
                href={personal.blog} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-tile"
                style={{ textDecoration: 'none', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <BookOpen size={16} color="var(--text-accent)" />
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>Blog</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="quick-message-box">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>Send Direct Message</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Have an open senior role, contract project, or technical question? Send a note directly.
            </p>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Alex Smith"
                  className="form-input"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Work Email</label>
                <input 
                  type="email" 
                  placeholder="alex@company.com"
                  className="form-input"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message / Role Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about the engineering challenge, team, or opportunity..."
                  className="form-textarea"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <Send size={15} />
                <span>Transmit via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
