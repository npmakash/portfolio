import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Terminal } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: '1.25rem'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '0.6rem',
              background: 'var(--gradient-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <Code2 size={22} />
          </div>
          <span>
            {personalDetails.name}
            <span style={{ color: 'var(--accent-primary)', marginLeft: '2px' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.92rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* CLI Terminal Toggle */}
          <button
            onClick={onOpenTerminal}
            className="btn btn-secondary"
            style={{
              padding: '0.5rem 0.85rem',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
            title="Open Interactive CLI Terminal"
          >
            <Terminal size={16} style={{ color: 'var(--accent-primary)' }} />
            <span className="hide-mobile">CLI</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '0.6rem',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: '#6366f1' }} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '0.6rem',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
