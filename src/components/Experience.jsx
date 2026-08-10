import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Briefcase size={14} /> Practical Work
          </span>
          <h2 className="section-title">
            Internship <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development and embedded IoT engineering experience gained through competitive internship programs.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: '2rem',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '1.5rem',
                alignItems: 'flex-start'
              }}
            >
              {/* Company Logo Icon Badge */}
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '1rem',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: 'var(--shadow-glow)',
                  flexShrink: 0
                }}
              >
                <Building2 size={28} />
              </div>

              {/* Experience Details */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.2rem' }}>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1rem' }}>
                        {exp.company}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>• {exp.type}</span>
                    </div>
                  </div>

                  <span
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      color: 'var(--accent-primary)',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    {exp.badge}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '0.25rem 0.7rem',
                        borderRadius: '0.4rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
