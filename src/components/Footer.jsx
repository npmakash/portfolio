import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '0.5rem',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Code2 size={18} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.1rem' }}>
              {personalDetails.name}
            </span>
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#certifications" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Certifications</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.5rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          © {new Date().getFullYear()} <strong>npmakash portfolio</strong> — {personalDetails.name} (@npmakash). All rights reserved. Built with React, Vite & Modern CSS.
        </div>
      </div>
    </footer>
  );
}
