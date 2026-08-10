import React from 'react';
import { Award, Terminal, BrainCircuit, Database, CheckCircle, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const iconComponents = {
  Terminal: Terminal,
  BrainCircuit: BrainCircuit,
  Database: Database
};

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Award size={14} /> Qualifications
          </span>
          <h2 className="section-title">
            Industry <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications completed in Linux operating systems, Machine Learning algorithms, and Database mining architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {certificationsData.map((cert) => {
            const IconComponent = iconComponents[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.75rem',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '0.75rem',
                        background: 'rgba(99, 102, 241, 0.12)',
                        color: cert.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={26} />
                    </div>

                    <span
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        color: 'var(--accent-emerald)',
                        fontSize: '0.78rem',
                        fontWeight: 700
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.4rem' }}>{cert.title}</h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                    Issued by {cert.issuer}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {cert.description}
                  </p>

                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                    Verified Competencies:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {cert.skillsVerified.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.2rem 0.6rem',
                          borderRadius: '0.35rem',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-color)',
                          fontSize: '0.78rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
