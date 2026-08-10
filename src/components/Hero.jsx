import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Terminal, Sparkles, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = personalDetails.taglines[taglineIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTagline) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % personalDetails.taglines.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTagline.substring(0, displayText.length - 1)
            : currentTagline.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section
      id="hero"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="bg-grid-pattern"
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '600px',
          background: 'var(--gradient-glow)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: 'var(--accent-emerald)',
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)'
                }}
              />
              Available for Software Engineering Roles & Internships
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="text-gradient">{personalDetails.name}</span>
            </h1>

            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                height: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>&gt;</span>
              <span>{displayText}</span>
              <span className="cursor-blink" style={{ color: 'var(--accent-primary)', marginLeft: '2px' }}>|</span>
            </div>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.7,
                maxWidth: '600px'
              }}
            >
              Computer Science Undergrad at <strong>{personalDetails.education.university}</strong> (Grade {personalDetails.education.grade}). Crafting full-stack web platforms, Python automation scripts, and exploring machine learning algorithms.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#contact" className="btn btn-primary">
                Download CV <Download size={18} />
              </a>
              <button onClick={onOpenTerminal} className="btn btn-secondary">
                <Terminal size={18} style={{ color: 'var(--accent-primary)' }} />
                Open Interactive CLI
              </button>
              <a href="#projects" className="btn btn-outline">
                Explore Projects
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href={personalDetails.contact.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                <GithubIcon size={20} />
                <span>GitHub {personalDetails.contact.githubUser}</span>
              </a>

              <a
                href={personalDetails.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn {personalDetails.contact.linkedinUser}</span>
              </a>

              <a
                href={`mailto:${personalDetails.contact.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card animate-float"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '1.25rem',
                position: 'relative',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'var(--bg-tertiary)'
                }}
              >
                <img
                  src={personalDetails.avatar}
                  alt={personalDetails.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <Sparkles size={16} style={{ color: 'var(--accent-purple)' }} /> MERN Stack
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '-15px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> AKTU CS 7+ Grade
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
