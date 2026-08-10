import React from 'react';
import { X, CheckCircle, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          position: 'relative',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ width: '100%', height: '260px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem 1.5rem 1rem 1.5rem',
              background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)'
            }}
          >
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                background: 'var(--accent-primary)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '0.4rem' }}>{project.title}</h2>
          </div>
        </div>

        <div style={{ padding: '1.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.fullDescription}
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={18} style={{ color: 'var(--accent-emerald)' }} /> Key Features & Architecture
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
            {project.keyFeatures.map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>•</span>
                {feature}
              </li>
            ))}
          </ul>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={18} style={{ color: 'var(--accent-primary)' }} /> Technology Stack
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '0.5rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <GithubIcon size={18} /> View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
